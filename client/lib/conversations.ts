import { supabase } from "./supabase";
import { aiService, ChatMessage } from "./azure-openai";
import { Database } from "./supabase";

// Re-export aiService for external use
export { aiService };

type ConversationRow = Database["public"]["Tables"]["conversations"]["Row"];
type MessageRow = Database["public"]["Tables"]["messages"]["Row"];
type ConversationInsert =
  Database["public"]["Tables"]["conversations"]["Insert"];
type MessageInsert = Database["public"]["Tables"]["messages"]["Insert"];

export interface Conversation {
  id: string;
  title: string;
  ai_model: string;
  created_at: string;
  updated_at: string;
  messages?: Message[];
}

export interface Message {
  id: string;
  content: string;
  role: "user" | "assistant" | "system";
  created_at: string;
  metadata?: any;
}

export class ConversationService {
  private static instance: ConversationService;

  static getInstance(): ConversationService {
    if (!ConversationService.instance) {
      ConversationService.instance = new ConversationService();
    }
    return ConversationService.instance;
  }

  async createConversation(
    title: string,
    aiModel: "gpt-4o" | "azure-gpt-4o" | "dual" = "azure-gpt-4o",
  ): Promise<{ conversation: Conversation | null; error: string | null }> {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        return { conversation: null, error: "User not authenticated" };
      }

      const { data, error } = await supabase
        .from("conversations")
        .insert({
          user_id: user.id,
          title,
          ai_model: aiModel,
        })
        .select()
        .single();

      if (error) {
        console.error("Error creating conversation:", error);
        return { conversation: null, error: error.message };
      }

      return { conversation: data as Conversation, error: null };
    } catch (error) {
      console.error("Unexpected error creating conversation:", error);
      return {
        conversation: null,
        error: "Failed to create conversation",
      };
    }
  }

  async getConversations(): Promise<{
    conversations: Conversation[];
    error: string | null;
  }> {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        return { conversations: [], error: "User not authenticated" };
      }

      const { data, error } = await supabase
        .from("conversations")
        .select("*")
        .eq("user_id", user.id)
        .order("updated_at", { ascending: false });

      if (error) {
        console.error("Error fetching conversations:", error);
        return { conversations: [], error: error.message };
      }

      return { conversations: data as Conversation[], error: null };
    } catch (error) {
      console.error("Unexpected error fetching conversations:", error);
      return { conversations: [], error: "Failed to fetch conversations" };
    }
  }

  async getConversation(conversationId: string): Promise<{
    conversation: Conversation | null;
    error: string | null;
  }> {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        return { conversation: null, error: "User not authenticated" };
      }

      // Get conversation
      const { data: conversation, error: convError } = await supabase
        .from("conversations")
        .select("*")
        .eq("id", conversationId)
        .eq("user_id", user.id)
        .single();

      if (convError) {
        console.error("Error fetching conversation:", convError);
        return { conversation: null, error: convError.message };
      }

      // Get messages
      const { data: messages, error: msgError } = await supabase
        .from("messages")
        .select("*")
        .eq("conversation_id", conversationId)
        .order("created_at", { ascending: true });

      if (msgError) {
        console.error("Error fetching messages:", msgError);
        return { conversation: null, error: msgError.message };
      }

      const conversationWithMessages: Conversation = {
        ...conversation,
        messages: messages as Message[],
      };

      return { conversation: conversationWithMessages, error: null };
    } catch (error) {
      console.error("Unexpected error fetching conversation:", error);
      return { conversation: null, error: "Failed to fetch conversation" };
    }
  }

  async sendMessage(
    conversationId: string,
    content: string,
    onStreamChunk?: (chunk: string) => void,
  ): Promise<{ message: Message | null; error: string | null }> {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        return { message: null, error: "User not authenticated" };
      }

      // Get conversation to determine AI model
      const { conversation, error: convError } =
        await this.getConversation(conversationId);
      if (convError || !conversation) {
        return { message: null, error: convError || "Conversation not found" };
      }

      // Save user message
      const { data: userMessage, error: userMsgError } = await supabase
        .from("messages")
        .insert({
          conversation_id: conversationId,
          content,
          role: "user",
        })
        .select()
        .single();

      if (userMsgError) {
        console.error("Error saving user message:", userMsgError);
        return { message: null, error: userMsgError.message };
      }

      // Prepare messages for AI
      const chatMessages: ChatMessage[] = [
        {
          role: "system",
          content:
            "You are SAINTSAL™, a divine AI companion with faith-aligned principles. You provide wise, helpful, and morally grounded assistance while maintaining excellence and professionalism.",
        },
        ...(conversation.messages || []).map((msg) => ({
          role: msg.role as "user" | "assistant" | "system",
          content: msg.content,
        })),
        {
          role: "user",
          content,
        },
      ];

      let aiResponse: any;

      // Handle different AI models
      if (conversation.ai_model === "dual") {
        const responses = await aiService.sendDualMessage(chatMessages);
        // For now, use Azure response as primary, could implement dual UI later
        aiResponse = responses.azure;
      } else if (onStreamChunk) {
        aiResponse = await aiService.streamMessage(
          chatMessages,
          conversation.ai_model as "azure-gpt-4o" | "gpt-4o",
          onStreamChunk,
        );
      } else {
        aiResponse = await aiService.sendMessage(
          chatMessages,
          conversation.ai_model as "azure-gpt-4o" | "gpt-4o",
        );
      }

      if (!aiResponse.success) {
        return {
          message: null,
          error: aiResponse.error || "AI request failed",
        };
      }

      // Save AI response
      const { data: assistantMessage, error: aiMsgError } = await supabase
        .from("messages")
        .insert({
          conversation_id: conversationId,
          content: aiResponse.message!,
          role: "assistant",
          metadata: {
            model: aiResponse.model,
            usage: aiResponse.usage,
          },
        })
        .select()
        .single();

      if (aiMsgError) {
        console.error("Error saving AI message:", aiMsgError);
        return { message: null, error: aiMsgError.message };
      }

      // Update conversation timestamp
      await supabase
        .from("conversations")
        .update({ updated_at: new Date().toISOString() })
        .eq("id", conversationId);

      // Auto-generate title if this is the first exchange
      if (conversation.messages?.length === 0) {
        this.updateConversationTitle(conversationId, chatMessages);
      }

      return { message: assistantMessage as Message, error: null };
    } catch (error) {
      console.error("Unexpected error sending message:", error);
      return { message: null, error: "Failed to send message" };
    }
  }

  private async updateConversationTitle(
    conversationId: string,
    messages: ChatMessage[],
  ): Promise<void> {
    try {
      const title = await aiService.generateTitle(messages);
      await supabase
        .from("conversations")
        .update({ title })
        .eq("id", conversationId);
    } catch (error) {
      console.error("Error updating conversation title:", error);
    }
  }

  async deleteConversation(conversationId: string): Promise<{
    success: boolean;
    error: string | null;
  }> {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        return { success: false, error: "User not authenticated" };
      }

      const { error } = await supabase
        .from("conversations")
        .delete()
        .eq("id", conversationId)
        .eq("user_id", user.id);

      if (error) {
        console.error("Error deleting conversation:", error);
        return { success: false, error: error.message };
      }

      return { success: true, error: null };
    } catch (error) {
      console.error("Unexpected error deleting conversation:", error);
      return { success: false, error: "Failed to delete conversation" };
    }
  }

  async recordUsage(
    metricType: string,
    metricValue: number = 1,
  ): Promise<void> {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;

      await supabase.from("usage_metrics").insert({
        user_id: user.id,
        metric_type: metricType,
        metric_value: metricValue,
      });
    } catch (error) {
      console.error("Error recording usage:", error);
    }
  }
}

export const conversationService = ConversationService.getInstance();

export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
  timestamp?: string;
}

export interface ChatResponse {
  success: boolean;
  message?: string;
  error?: string;
  model: "companion" | "saintsal-4o" | "saintsal-turbo";
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

export class AIService {
  private static instance: AIService;

  static getInstance(): AIService {
    if (!AIService.instance) {
      AIService.instance = new AIService();
    }
    return AIService.instance;
  }

  async sendMessage(
    messages: ChatMessage[],
    model: "companion" | "saintsal-4o" | "saintsal-turbo" = "companion",
    options?: {
      temperature?: number;
      maxTokens?: number;
      stream?: boolean;
      userId?: string;
    },
  ): Promise<ChatResponse> {
    try {
      const response = await fetch("/api/chat/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages,
          model,
          userId: options?.userId || "anonymous",
          temperature: options?.temperature,
          maxTokens: options?.maxTokens,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error with ${model}:`, error);
      return {
        success: false,
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
        model,
      };
    }
  }

  async sendDualMessage(
    messages: ChatMessage[],
    options?: {
      temperature?: number;
      maxTokens?: number;
    },
  ): Promise<{
    companion: ChatResponse;
    saintsal: ChatResponse;
  }> {
    const [companionResponse, saintsalResponse] = await Promise.allSettled([
      this.sendMessage(messages, "companion", options),
      this.sendMessage(messages, "saintsal-4o", options),
    ]);

    return {
      companion:
        companionResponse.status === "fulfilled"
          ? companionResponse.value
          : {
              success: false,
              error:
                companionResponse.reason?.message || "Companion request failed",
              model: "companion",
            },
      saintsal:
        saintsalResponse.status === "fulfilled"
          ? saintsalResponse.value
          : {
              success: false,
              error:
                saintsalResponse.reason?.message || "SaintSal request failed",
              model: "saintsal-4o",
            },
    };
  }

  async streamMessage(
    messages: ChatMessage[],
    model: "companion" | "saintsal-4o" | "saintsal-turbo" = "companion",
    onChunk: (chunk: string) => void,
    options?: {
      temperature?: number;
      maxTokens?: number;
      userId?: string;
    },
  ): Promise<ChatResponse> {
    try {
      const response = await fetch("/api/chat/stream", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages,
          model,
          userId: options?.userId || "anonymous",
          temperature: options?.temperature,
          maxTokens: options?.maxTokens,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error("No response body reader available");
      }

      let fullContent = "";
      const decoder = new TextDecoder();

      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value);
          const lines = chunk.split("\n");

          for (const line of lines) {
            if (line.startsWith("data: ")) {
              const data = line.slice(6);
              if (data === "[DONE]") {
                break;
              }
              try {
                const parsed = JSON.parse(data);
                if (parsed.content) {
                  fullContent += parsed.content;
                  onChunk(parsed.content);
                }
                if (parsed.error) {
                  throw new Error(parsed.error);
                }
              } catch (e) {
                // Skip malformed JSON
              }
            }
          }
        }
      } finally {
        reader.releaseLock();
      }

      return {
        success: true,
        message: fullContent,
        model,
      };
    } catch (error) {
      console.error(`Streaming error with ${model}:`, error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Streaming failed",
        model,
      };
    }
  }

  async generateTitle(messages: ChatMessage[]): Promise<string> {
    try {
      const response = await this.sendMessage(
        [
          {
            role: "system",
            content:
              "Generate a short, descriptive title (max 6 words) for this conversation based on the first few messages. Return only the title, no quotes or extra text.",
          },
          ...messages.slice(0, 3),
        ],
        "companion",
        { temperature: 0.3, maxTokens: 50 },
      );

      return response.success && response.message
        ? response.message.trim()
        : "New Conversation";
    } catch {
      return "New Conversation";
    }
  }
}

export const aiService = AIService.getInstance();

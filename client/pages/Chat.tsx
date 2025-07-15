import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GoldenAtmosphere } from "@/components/GoldenAtmosphere";
import { MicButton } from "@/components/MicButton";
import {
  Brain,
  Send,
  Settings,
  User,
  Upload,
  Menu,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { conversationService, aiService } from "../lib/conversations";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant" | "system";
  model: "saintsal-4o" | "saintsal-turbo" | "companion" | "dual";
  timestamp: Date;
  streaming?: boolean;
  companionName?: string;
}

export default function Chat() {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content:
        "👋 Welcome to SaintSal™ AI! I'm your divine AI assistant. Tap the mic to speak, type your question, or upload a file. How can I help you today?",
      role: "assistant",
      model: "saintsal-4o",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeModel, setActiveModel] = useState<
    "saintsal-4o" | "saintsal-turbo" | "companion" | "dual"
  >("saintsal-4o");
  const [companionName, setCompanionName] = useState("Azure");
  const [currentConversationId, setCurrentConversationId] = useState<
    string | null
  >(null);
  const [showSettings, setShowSettings] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Create a new conversation on mount
  useEffect(() => {
    const createConversation = async () => {
      if (user && !currentConversationId) {
        const { conversation } = await conversationService.createConversation(
          "Mobile Chat Session",
          activeModel === "companion" ? "azure-gpt-4o" : "gpt-4o",
        );
        if (conversation) {
          setCurrentConversationId(conversation.id);
        }
      }
    };
    createConversation();
  }, [user, activeModel, currentConversationId]);

  const handleSendMessage = async (messageText?: string) => {
    const textToSend = messageText || input;
    if (!textToSend.trim() || isLoading || !currentConversationId) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: textToSend,
      role: "user",
      model: activeModel,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const messageContent = textToSend;
    if (!messageText) setInput(""); // Only clear input if not from voice
    setIsLoading(true);

    try {
      // Add a temporary streaming message
      const streamingMessageId = (Date.now() + 1).toString();
      const streamingMessage: Message = {
        id: streamingMessageId,
        content: "",
        role: "assistant",
        model: activeModel,
        timestamp: new Date(),
        streaming: true,
        companionName: activeModel === "companion" ? companionName : undefined,
      };

      setMessages((prev) => [...prev, streamingMessage]);

      // Prepare system message based on model
      let systemMessage = "";
      if (activeModel === "companion") {
        systemMessage = `You are ${companionName}, a custom Azure-powered AI companion. You have been personally designed and named by this user. Embody the personality and characteristics they would expect from someone named ${companionName}. Be helpful, knowledgeable, and maintain your unique identity while providing excellent assistance.`;
      } else {
        systemMessage =
          "You are SaintSal™, the divine AI companion with faith-aligned principles. You provide wise, helpful, and morally grounded assistance while maintaining excellence and professionalism. You represent the SaintSal™ brand with integrity and purpose. Keep responses concise for mobile users.";
      }

      const chatMessages = [
        {
          role: "system" as const,
          content: systemMessage,
        },
        ...messages
          .filter((m) => m.role !== "system")
          .map((m) => ({
            role: m.role as "user" | "assistant",
            content: m.content,
          })),
        { role: "user" as const, content: messageContent },
      ];

      // Handle different AI models
      if (activeModel === "dual") {
        // Send to both SaintSal and Companion
        const responses = await aiService.sendDualMessage(chatMessages);

        // Use SaintSal response as primary
        const response = responses.saintsal.success
          ? responses.saintsal
          : responses.companion;

        if (response.success && response.message) {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === streamingMessageId
                ? {
                    ...msg,
                    content: response.message!,
                    streaming: false,
                  }
                : msg,
            ),
          );
        } else {
          throw new Error(response.error || "AI request failed");
        }
      } else {
        // Stream response for single model
        let fullResponse = "";
        const modelToUse =
          activeModel === "companion" ? "companion" : "saintsal-4o";

        await aiService.streamMessage(chatMessages, modelToUse, (chunk) => {
          fullResponse += chunk;
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === streamingMessageId
                ? {
                    ...msg,
                    content: fullResponse,
                    streaming: true,
                  }
                : msg,
            ),
          );
        });

        // Mark streaming as complete
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === streamingMessageId
              ? {
                  ...msg,
                  streaming: false,
                }
              : msg,
          ),
        );
      }

      // Record usage
      await conversationService.recordUsage("chat_message");
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === streamingMessageId
            ? {
                ...msg,
                content:
                  "I apologize, but I encountered an error processing your request. Please try again.",
                streaming: false,
              }
            : msg,
        ),
      );
    } finally {
      setIsLoading(false);
    }
  };

  const getModelIcon = (model: string) => {
    switch (model) {
      case "saintsal-4o":
      case "saintsal-turbo":
        return <Brain className="w-3 h-3" />;
      case "companion":
        return <User className="w-3 h-3" />;
      case "dual":
        return <Sparkles className="w-3 h-3" />;
      default:
        return <Brain className="w-3 h-3" />;
    }
  };

  const getModelColor = (model: string) => {
    switch (model) {
      case "saintsal-4o":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/40";
      case "saintsal-turbo":
        return "bg-green-500/20 text-green-400 border-green-500/40";
      case "companion":
        return "bg-blue-500/20 text-blue-400 border-blue-500/40";
      case "dual":
        return "bg-purple-500/20 text-purple-400 border-purple-500/40";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/40";
    }
  };

  const getModelName = (model: string, companionName?: string) => {
    switch (model) {
      case "saintsal-4o":
        return "SaintSal™ 4o";
      case "saintsal-turbo":
        return "SaintSal™ Turbo";
      case "companion":
        return companionName || "Azure";
      case "dual":
        return "Dual AI";
      default:
        return "AI";
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col golden-dust-settle relative">
      {/* Golden Atmosphere - Subtle for mobile */}
      <GoldenAtmosphere intensity="subtle" />

      {/* Mobile Header */}
      <header className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-sm">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.history.back()}
              className="lg:hidden"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">SaintSal™ AI</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge
              className={`text-xs ${getModelColor(activeModel)}`}
              variant="outline"
            >
              {getModelIcon(activeModel)}
              <span className="ml-1 hidden sm:inline">
                {getModelName(activeModel, companionName)}
              </span>
            </Badge>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowSettings(!showSettings)}
            >
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Settings Panel */}
        {showSettings && (
          <div className="border-t bg-card/90 p-4">
            <div className="space-y-3">
              <div>
                <label className="text-xs font-medium text-muted-foreground">
                  AI Model
                </label>
                <select
                  value={activeModel}
                  onChange={(e) =>
                    setActiveModel(
                      e.target.value as
                        | "saintsal-4o"
                        | "saintsal-turbo"
                        | "companion"
                        | "dual",
                    )
                  }
                  className="w-full mt-1 bg-background border border-primary/20 rounded-lg px-3 py-2 text-sm"
                >
                  <option value="saintsal-4o">🧠 SaintSal™ 4o</option>
                  <option value="saintsal-turbo">⚡ SaintSal™ Turbo</option>
                  <option value="companion">🤖 {companionName} (Azure)</option>
                  <option value="dual">🔥 Dual AI Mode</option>
                </select>
              </div>
              {activeModel === "companion" && (
                <div>
                  <label className="text-xs font-medium text-muted-foreground">
                    Companion Name
                  </label>
                  <Input
                    value={companionName}
                    onChange={(e) => setCompanionName(e.target.value)}
                    placeholder="Name your AI companion"
                    className="mt-1 text-sm"
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 pb-24 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start space-x-3 ${
              message.role === "user" ? "flex-row-reverse space-x-reverse" : ""
            }`}
          >
            <Avatar className="w-7 h-7 flex-shrink-0">
              {message.role === "user" ? (
                <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                  {user?.email?.[0]?.toUpperCase() || "U"}
                </AvatarFallback>
              ) : message.model === "companion" ? (
                <AvatarFallback className="bg-blue-500 text-white text-xs">
                  {message.companionName?.[0]?.toUpperCase() || "C"}
                </AvatarFallback>
              ) : (
                <AvatarImage
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/23b227793103accd33c7649ebabb0572cddb55c1?width=2048"
                  alt="SaintSal AI"
                />
              )}
            </Avatar>
            <div
              className={`flex-1 max-w-[85%] ${
                message.role === "user" ? "text-right" : ""
              }`}
            >
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-xs font-medium">
                  {message.role === "user"
                    ? "You"
                    : getModelName(message.model, message.companionName)}
                </span>
                <span className="text-xs text-muted-foreground">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
              <div
                className={`rounded-2xl px-4 py-3 ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground ml-auto inline-block"
                    : "bg-muted"
                }`}
              >
                <p className="text-sm whitespace-pre-wrap leading-relaxed">
                  {message.content}
                  {message.streaming && (
                    <span className="animate-pulse">▋</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Fixed Input Area - OpenAI Style */}
      <div className="fixed bottom-0 left-0 right-0 border-t bg-card/95 backdrop-blur-md p-4 safe-area-inset-bottom">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end space-x-2">
            <div className="flex-1 relative">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={`Message ${getModelName(activeModel, companionName)}...`}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                disabled={isLoading}
                className="pr-20 py-3 rounded-2xl border-primary/20 focus:border-primary/40 bg-background/80"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                <MicButton
                  onTranscription={(text) => {
                    setInput(text);
                    // Auto-send voice messages for seamless mobile experience
                    setTimeout(() => handleSendMessage(text), 300);
                  }}
                  onError={(error) => console.error("Voice error:", error)}
                  mode="both"
                  disabled={isLoading}
                  className="scale-75"
                />
              </div>
            </div>
            <Button
              onClick={() => handleSendMessage()}
              disabled={isLoading || !input.trim()}
              size="sm"
              className="h-12 w-12 rounded-2xl flex-shrink-0"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex items-center justify-center mt-2">
            <span className="text-xs text-muted-foreground flex items-center space-x-2">
              <span>🎤 Voice Ready</span>
              <span>•</span>
              <span>📱 Mobile Optimized</span>
              <span>•</span>
              <span className="text-green-400">🔴 Live</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

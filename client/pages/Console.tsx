import { useState, useRef, useEffect } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Brain,
  Send,
  Zap,
  Database,
  Activity,
  Sparkles,
  MessageCircle,
  Settings,
  MoreVertical,
  User,
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

export default function Console() {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content:
        "Welcome to SaintVision AI Console. I'm your divine AI assistant ecosystem - featuring SaintSal™ models and your custom Azure companion. Ready to cook some knowledge and build your empire?",
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
          "New Conversation",
          activeModel === "companion" ? "azure-gpt-4o" : "gpt-4o",
        );
        if (conversation) {
          setCurrentConversationId(conversation.id);
        }
      }
    };
    createConversation();
  }, [user, activeModel, currentConversationId]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading || !currentConversationId) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      model: activeModel,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const messageContent = input;
    setInput("");
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
          "You are SaintSal™, the divine AI companion with faith-aligned principles. You provide wise, helpful, and morally grounded assistance while maintaining excellence and professionalism. You represent the SaintSal™ brand with integrity and purpose.";
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
        return <Brain className="w-4 h-4" />;
      case "companion":
        return <User className="w-4 h-4" />;
      case "dual":
        return <Sparkles className="w-4 h-4" />;
      default:
        return <MessageCircle className="w-4 h-4" />;
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
        return companionName || "Azure Companion";
      case "dual":
        return "Dual AI";
      default:
        return "AI";
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="border-b bg-card/50 backdrop-blur-sm">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">
                  HACP™ Boss Panel Active
                </span>
              </div>
              <Badge variant="outline" className="text-primary border-primary">
                <Activity className="w-3 h-3 mr-1" />
                Live
              </Badge>
            </div>
            <div className="flex items-center space-x-2">
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
                className="bg-background border border-border rounded-md px-3 py-1 text-sm"
              >
                <option value="saintsal-4o">SaintSal™ 4o</option>
                <option value="saintsal-turbo">SaintSal™ Turbo</option>
                <option value="companion">{companionName} (Azure)</option>
                <option value="dual">Dual AI</option>
              </select>
              {activeModel === "companion" && (
                <Input
                  value={companionName}
                  onChange={(e) => setCompanionName(e.target.value)}
                  placeholder="Companion name"
                  className="w-32 text-sm"
                />
              )}
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </header>

        <div className="flex-1 flex">
          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start space-x-3 ${
                    message.role === "user"
                      ? "flex-row-reverse space-x-reverse"
                      : ""
                  }`}
                >
                  <Avatar className="w-8 h-8">
                    {message.role === "user" ? (
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {user?.email?.[0]?.toUpperCase() || "U"}
                      </AvatarFallback>
                    ) : message.model === "companion" ? (
                      <AvatarFallback className="bg-blue-500 text-white">
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
                    className={`flex-1 max-w-3xl ${
                      message.role === "user" ? "text-right" : ""
                    }`}
                  >
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-sm font-medium">
                        {message.role === "user"
                          ? "You"
                          : getModelName(message.model, message.companionName)}
                      </span>
                      <Badge
                        className={`text-xs ${getModelColor(message.model)}`}
                      >
                        {getModelIcon(message.model)}
                        <span className="ml-1">
                          {getModelName(message.model, message.companionName)}
                        </span>
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {message.timestamp.toLocaleTimeString()}
                      </span>
                    </div>
                    <div
                      className={`rounded-lg p-3 ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground ml-auto inline-block"
                          : "bg-muted"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">
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

            {/* Input Area */}
            <div className="border-t bg-card/50 backdrop-blur-sm p-4">
              <div className="flex items-center space-x-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={`Ask ${getModelName(activeModel, companionName)} anything...`}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={isLoading || !input.trim()}
                  size="sm"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                <span>
                  Powered by {getModelName(activeModel, companionName)} •
                  Faith-aligned AI
                </span>
                <span>
                  {messages.filter((m) => m.role === "user").length} messages
                </span>
              </div>
            </div>
          </div>

          {/* CRM Intelligence Panel - Desktop Only */}
          <div className="hidden lg:block w-80 border-l bg-card/30">
            <div className="p-4">
              <h3 className="font-semibold mb-4 flex items-center">
                <Database className="w-4 h-4 mr-2" />
                CRM Intelligence
              </h3>

              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Active Leads</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary">247</div>
                    <p className="text-xs text-muted-foreground">
                      +12% from last week
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Pipeline Value</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">
                      $87.5K
                    </div>
                    <p className="text-xs text-muted-foreground">
                      82% close rate
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">AI Insights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span>Hot Prospects</span>
                        <Badge variant="secondary">23</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Follow-ups Due</span>
                        <Badge variant="outline">8</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Closing This Week</span>
                        <Badge className="bg-green-500/20 text-green-600">
                          5
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">SaintSal™ Models</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span>SaintSal™ 4o</span>
                        <Badge className="bg-yellow-500/20 text-yellow-600">
                          Active
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>SaintSal™ Turbo</span>
                        <Badge variant="outline">Ready</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>{companionName}</span>
                        <Badge className="bg-blue-500/20 text-blue-600">
                          Azure
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

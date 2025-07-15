import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mic, MicOff, Phone, PhoneOff, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface MicButtonProps {
  onTranscription?: (text: string) => void;
  onError?: (error: string) => void;
  className?: string;
  mode?: "speech" | "call" | "both";
  disabled?: boolean;
}

export function MicButton({
  onTranscription,
  onError,
  className,
  mode = "both",
  disabled = false,
}: MicButtonProps) {
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCallActive, setIsCallActive] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [currentMode, setCurrentMode] = useState<"speech" | "call">("speech");
  const [error, setError] = useState<string | null>(null);

  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  // Initialize Speech Recognition
  useEffect(() => {
    if (typeof window !== "undefined" && "webkitSpeechRecognition" in window) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();

      const recognition = recognitionRef.current;
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = "en-US";

      recognition.onstart = () => {
        setIsListening(true);
        setError(null);
      };

      recognition.onresult = (event) => {
        let finalTranscript = "";
        let interimTranscript = "";

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript;
          } else {
            interimTranscript += transcript;
          }
        }

        const fullTranscript = finalTranscript || interimTranscript;
        setTranscript(fullTranscript);

        if (finalTranscript && onTranscription) {
          onTranscription(finalTranscript);
        }
      };

      recognition.onerror = (event) => {
        const errorMessage = `Speech recognition error: ${event.error}`;
        setError(errorMessage);
        onError?.(errorMessage);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [onTranscription, onError]);

  const startSpeechRecognition = async () => {
    if (!recognitionRef.current) {
      const errorMessage = "Speech recognition not supported in this browser";
      setError(errorMessage);
      onError?.(errorMessage);
      return;
    }

    try {
      setTranscript("");
      recognitionRef.current.start();
    } catch (error) {
      const errorMessage = "Failed to start speech recognition";
      setError(errorMessage);
      onError?.(errorMessage);
    }
  };

  const stopSpeechRecognition = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
    }
  };

  const startTwilioCall = async () => {
    try {
      setIsProcessing(true);
      setError(null);

      // Get user's phone number or use a default for demo
      const phoneNumber = prompt(
        "Enter your phone number for SaintSal AI to call:",
        "+1",
      );

      if (!phoneNumber) {
        setIsProcessing(false);
        return;
      }

      const response = await fetch("/api/twilio-voice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "dial",
          to: phoneNumber,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsCallActive(true);
        // Optionally poll for call status
        pollCallStatus(data.callSid);
      } else {
        throw new Error(data.error || "Failed to initiate call");
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to start call";
      setError(errorMessage);
      onError?.(errorMessage);
    } finally {
      setIsProcessing(false);
    }
  };

  const pollCallStatus = async (callSid: string) => {
    const pollInterval = setInterval(async () => {
      try {
        const response = await fetch("/api/twilio-voice", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            action: "status",
            callSid,
          }),
        });

        const data = await response.json();

        if (data.success) {
          if (data.status === "completed" || data.status === "failed") {
            setIsCallActive(false);
            clearInterval(pollInterval);
          }
        }
      } catch (error) {
        // Silent fail on status polling
        clearInterval(pollInterval);
        setIsCallActive(false);
      }
    }, 2000);

    // Auto-stop polling after 5 minutes
    setTimeout(() => {
      clearInterval(pollInterval);
      setIsCallActive(false);
    }, 300000);
  };

  const handleToggleMode = () => {
    if (mode === "both") {
      setCurrentMode(currentMode === "speech" ? "call" : "speech");
    }
  };

  const handlePrimaryAction = () => {
    if (currentMode === "speech") {
      if (isListening) {
        stopSpeechRecognition();
      } else {
        startSpeechRecognition();
      }
    } else {
      if (!isCallActive && !isProcessing) {
        startTwilioCall();
      }
    }
  };

  const getButtonText = () => {
    if (currentMode === "speech") {
      if (isListening) return "Listening...";
      if (transcript) return "Voice detected";
      return "Voice Input";
    } else {
      if (isProcessing) return "Connecting...";
      if (isCallActive) return "Call Active";
      return "Call SaintSal™";
    }
  };

  const getButtonIcon = () => {
    if (currentMode === "speech") {
      if (isListening) {
        return <MicOff className="w-4 h-4" />;
      }
      return <Mic className="w-4 h-4" />;
    } else {
      if (isProcessing) {
        return <Loader2 className="w-4 h-4 animate-spin" />;
      }
      if (isCallActive) {
        return <PhoneOff className="w-4 h-4" />;
      }
      return <Phone className="w-4 h-4" />;
    }
  };

  const getButtonVariant = () => {
    if (isListening || isCallActive) return "destructive";
    if (transcript) return "default";
    return "outline";
  };

  return (
    <div className={cn("flex flex-col space-y-2", className)}>
      <div className="flex items-center space-x-2">
        <Button
          onClick={handlePrimaryAction}
          disabled={disabled || (currentMode === "call" && isCallActive)}
          variant={getButtonVariant()}
          size="sm"
          className={cn(
            "transition-all duration-200",
            isListening && "animate-pulse bg-red-500 hover:bg-red-600",
            isCallActive && "animate-pulse bg-green-500 hover:bg-green-600",
            transcript && !isListening && "bg-primary",
          )}
        >
          {getButtonIcon()}
          <span className="ml-2 hidden sm:inline">{getButtonText()}</span>
        </Button>

        {mode === "both" && (
          <Button
            onClick={handleToggleMode}
            variant="ghost"
            size="sm"
            className="text-xs"
          >
            {currentMode === "speech" ? "📞" : "🎤"}
          </Button>
        )}
      </div>

      {/* Status Indicators */}
      <div className="flex flex-wrap gap-1">
        {isListening && (
          <Badge variant="secondary" className="text-xs animate-pulse">
            🎤 Listening
          </Badge>
        )}
        {isCallActive && (
          <Badge variant="secondary" className="text-xs animate-pulse">
            📞 Call Active
          </Badge>
        )}
        {transcript && !isListening && (
          <Badge variant="outline" className="text-xs">
            ✅ Voice Captured
          </Badge>
        )}
        {error && (
          <Badge variant="destructive" className="text-xs">
            ❌ {error.split(":")[0]}
          </Badge>
        )}
      </div>

      {/* Transcript Preview */}
      {transcript && (
        <div className="bg-muted rounded-lg p-2 text-xs max-w-xs">
          <span className="text-muted-foreground">Voice: </span>
          <span>{transcript}</span>
        </div>
      )}
    </div>
  );
}

// Add global type declarations for Speech Recognition
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

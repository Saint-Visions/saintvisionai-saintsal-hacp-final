import { supabase } from "./supabase";

export interface EventData {
  name: string;
  userId?: string;
  details?: Record<string, any>;
  metadata?: Record<string, any>;
}

export class AnalyticsService {
  private static instance: AnalyticsService;

  static getInstance(): AnalyticsService {
    if (!AnalyticsService.instance) {
      AnalyticsService.instance = new AnalyticsService();
    }
    return AnalyticsService.instance;
  }

  async insertEvent(eventData: EventData): Promise<boolean> {
    try {
      const { error } = await supabase.from("events").insert({
        event_name: eventData.name,
        user_id: eventData.userId || "anonymous",
        event_details: eventData.details || {},
        metadata: eventData.metadata || {},
        timestamp: new Date().toISOString(),
      });

      if (error) {
        console.error("Failed to insert event:", error);
        return false;
      }

      return true;
    } catch (error) {
      console.error("Analytics error:", error);
      return false;
    }
  }

  // Convenience methods for common events
  async logUserMessage(content: string, model: string, userId?: string) {
    return this.insertEvent({
      name: "user_message",
      userId,
      details: {
        message_content: content.substring(0, 100), // Truncate for privacy
        ai_model: model,
        character_count: content.length,
      },
    });
  }

  async logAiResponse(
    responseContent: string,
    model: string,
    userId?: string,
    responseTime?: number,
  ) {
    return this.insertEvent({
      name: "ai_response",
      userId,
      details: {
        ai_model: model,
        character_count: responseContent.length,
        response_time_ms: responseTime,
        success: true,
      },
    });
  }

  async logError(
    errorMessage: string,
    errorType: string,
    userId?: string,
    context?: Record<string, any>,
  ) {
    return this.insertEvent({
      name: "error",
      userId,
      details: {
        error_message: errorMessage,
        error_type: errorType,
        context,
      },
    });
  }

  async logPageView(pageName: string, userId?: string) {
    return this.insertEvent({
      name: "page_view",
      userId,
      details: {
        page_name: pageName,
        timestamp: new Date().toISOString(),
      },
    });
  }

  async logVoiceInput(duration: number, userId?: string) {
    return this.insertEvent({
      name: "voice_input",
      userId,
      details: {
        duration_seconds: duration,
        feature: "voice_to_text",
      },
    });
  }

  async logCrmAction(
    action: string,
    userId?: string,
    details?: Record<string, any>,
  ) {
    return this.insertEvent({
      name: "crm_action",
      userId,
      details: {
        action,
        ...details,
      },
    });
  }
}

// Export singleton instance
export const analytics = AnalyticsService.getInstance();

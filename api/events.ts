import { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

interface EventPayload {
  name: string;
  userId?: string;
  details?: Record<string, any>;
  metadata?: Record<string, any>;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, userId, details, metadata }: EventPayload = req.body;

    if (!name) {
      return res.status(400).json({ error: "Event name is required" });
    }

    const { error } = await supabase.from("events").insert({
      event_name: name,
      user_id: userId || "anonymous",
      event_details: details || {},
      metadata: metadata || {},
      timestamp: new Date().toISOString(),
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return res.status(500).json({ error: "Failed to log event" });
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Event logging error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Utility function for server-side logging
export async function insertServerEvent(
  eventData: EventPayload,
): Promise<boolean> {
  try {
    const { error } = await supabase.from("events").insert({
      event_name: eventData.name,
      user_id: eventData.userId || "system",
      event_details: eventData.details || {},
      metadata: eventData.metadata || {},
      timestamp: new Date().toISOString(),
    });

    if (error) {
      console.error("Server event logging error:", error);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Server analytics error:", error);
    return false;
  }
}

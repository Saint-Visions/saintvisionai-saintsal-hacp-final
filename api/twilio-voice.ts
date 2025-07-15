import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const {
    TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN,
    TWILIO_PHONE_NUMBER,
    APP_URL = "https://saintvisionai.com",
  } = process.env;

  if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_PHONE_NUMBER) {
    return res.status(500).json({
      error: "Twilio credentials not configured",
    });
  }

  try {
    if (req.method === "POST") {
      const { action, to, from, callSid, speechResult, transcription } =
        req.body;

      switch (action) {
        case "dial":
          // Initiate outbound call
          const twilio = require("twilio")(
            TWILIO_ACCOUNT_SID,
            TWILIO_AUTH_TOKEN,
          );

          const call = await twilio.calls.create({
            to: to,
            from: TWILIO_PHONE_NUMBER,
            url: `${APP_URL}/api/twilio-voice?action=handle`,
            method: "POST",
          });

          return res.json({
            success: true,
            callSid: call.sid,
            status: call.status,
          });

        case "handle":
          // Handle incoming/outbound call with TwiML
          const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="alice">Welcome to SaintSal AI. I'm your divine AI assistant. How can I help you today?</Say>
  <Record 
    action="${APP_URL}/api/twilio-voice?action=process"
    method="POST"
    maxLength="30"
    transcribe="true"
    transcribeCallback="${APP_URL}/api/twilio-voice?action=transcribe"
    playBeep="true"
    finishOnKey="#"
  />
  <Say voice="alice">I didn't receive your message. Please call back or try our chat interface. Goodbye.</Say>
</Response>`;

          res.setHeader("Content-Type", "text/xml");
          return res.send(twiml);

        case "process":
          // Process recorded audio
          const processTwiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="alice">Thank you for your message. I'm processing your request and will respond shortly.</Say>
  <Pause length="2"/>
  <Say voice="alice">Your message has been received by SaintSal AI. You can continue our conversation on the web platform or wait for a callback. Goodbye.</Say>
</Response>`;

          res.setHeader("Content-Type", "text/xml");
          return res.send(processTwiml);

        case "transcribe":
          // Handle transcription callback
          const { TranscriptionText, CallSid, RecordingUrl } = req.body;

          // Here you would typically:
          // 1. Send transcription to AI service
          // 2. Log the interaction
          // 3. Trigger follow-up actions

          console.log("Voice message received:", {
            callSid: CallSid,
            transcription: TranscriptionText,
            recording: RecordingUrl,
            timestamp: new Date().toISOString(),
          });

          return res.json({
            success: true,
            message: "Transcription processed",
          });

        case "status":
          // Get call status
          if (!callSid) {
            return res.status(400).json({ error: "Call SID required" });
          }

          const twilioClient = require("twilio")(
            TWILIO_ACCOUNT_SID,
            TWILIO_AUTH_TOKEN,
          );
          const callStatus = await twilioClient.calls(callSid).fetch();

          return res.json({
            success: true,
            status: callStatus.status,
            duration: callStatus.duration,
            direction: callStatus.direction,
          });

        default:
          return res.status(400).json({
            error:
              "Invalid action. Supported actions: dial, handle, process, transcribe, status",
          });
      }
    } else if (req.method === "GET") {
      // Handle webhook GET requests (for URL validation)
      const { action } = req.query;

      if (action === "handle") {
        const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="alice">Welcome to SaintSal AI. Please hold while we connect you.</Say>
</Response>`;

        res.setHeader("Content-Type", "text/xml");
        return res.send(twiml);
      }

      return res.json({
        success: true,
        message: "Twilio Voice API is active",
        endpoints: {
          dial: "POST /api/twilio-voice with action=dial",
          handle: "POST /api/twilio-voice with action=handle",
          status: "POST /api/twilio-voice with action=status",
        },
      });
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error("Twilio Voice API error:", error);
    return res.status(500).json({
      error: "Internal server error",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
}

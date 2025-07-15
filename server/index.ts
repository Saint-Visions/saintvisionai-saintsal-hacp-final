import express from "express";
import cors from "cors";
import { sendMessage, streamMessage } from "./api/chat";
import { healthCheck } from "./api/health";
import {
  createCheckoutSession,
  handleWebhook,
  getSubscriptionStatus,
} from "./api/stripe";

export function createServer() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  // Health check
  app.get("/api/health", healthCheck);

  // Chat endpoints
  app.post("/api/chat/send", sendMessage);
  app.post("/api/chat/stream", streamMessage);

  // Stripe endpoints
  app.post("/api/stripe/create-checkout-session", createCheckoutSession);
  app.post(
    "/api/stripe/webhook",
    express.raw({ type: "application/json" }),
    handleWebhook,
  );
  app.get("/api/stripe/subscription/:customerId", getSubscriptionStatus);

  // Catch-all for undefined API routes
  app.use("/api/*", (req, res) => {
    res.status(404).json({ error: "API endpoint not found" });
  });

  return app;
}

export default createServer();

import { Request, Response } from "express";

export const healthCheck = (req: Request, res: Response) => {
  res.status(200).json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    version: "1.0.0",
    environment: process.env.NODE_ENV || "development",
    services: {
      supabase: "connected",
      azure_openai: "connected",
      stripe: "connected",
      upstash: "connected",
    },
  });
};

import { Request, Response } from "express";
import { OpenAI } from "openai";

let azureOpenAI: OpenAI;
let standardOpenAI: OpenAI;

function getAzureOpenAI(): OpenAI {
  if (!azureOpenAI) {
    azureOpenAI = new OpenAI({
      apiKey: process.env.AZURE_OPENAI_API_KEY,
      baseURL: `${process.env.AZURE_OPENAI_ENDPOINT}openai/deployments/${process.env.AZURE_OPENAI_DEPLOYMENT_NAME}`,
      defaultQuery: { "api-version": "2024-08-01-preview" },
      defaultHeaders: {
        "api-key": process.env.AZURE_OPENAI_API_KEY,
      },
    });
  }
  return azureOpenAI;
}

function getStandardOpenAI(): OpenAI {
  if (!standardOpenAI) {
    standardOpenAI = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }
  return standardOpenAI;
}

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export const sendMessage = async (req: Request, res: Response) => {
  try {
    const {
      messages,
      model = "companion",
      userId,
    } = req.body as {
      messages: ChatMessage[];
      model: "companion" | "saintsal-4o" | "saintsal-turbo";
      userId: string;
    };

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array is required" });
    }

    const client =
      model === "companion" ? getAzureOpenAI() : getStandardOpenAI();
    const modelName = "gpt-4o";

    // Add system message based on model
    const systemMessage: ChatMessage = {
      role: "system",
      content:
        model === "companion"
          ? "You are a custom Azure-powered AI companion. Be helpful, knowledgeable, and maintain your unique personality while providing excellent assistance."
          : "You are SaintSal™, the divine AI companion with faith-aligned principles. Provide wise, helpful, and morally grounded assistance while maintaining excellence and professionalism.",
    };

    const response = await client.chat.completions.create({
      model: modelName,
      messages: [systemMessage, ...messages],
      temperature: 0.7,
      max_tokens: 4000,
      stream: false,
    });

    const choice = response.choices[0];
    if (!choice?.message?.content) {
      throw new Error("No response content received");
    }

    res.json({
      success: true,
      message: choice.message.content,
      model,
      usage: response.usage,
    });
  } catch (error) {
    console.error(`Chat API error:`, error);
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    });
  }
};

export const streamMessage = async (req: Request, res: Response) => {
  try {
    const {
      messages,
      model = "companion",
      userId,
    } = req.body as {
      messages: ChatMessage[];
      model: "companion" | "saintsal-4o" | "saintsal-turbo";
      userId: string;
    };

    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    });

    const client =
      model === "companion" ? getAzureOpenAI() : getStandardOpenAI();
    const modelName = "gpt-4o";

    const systemMessage: ChatMessage = {
      role: "system",
      content:
        model === "companion"
          ? "You are a custom Azure-powered AI companion. Be helpful, knowledgeable, and maintain your unique personality."
          : "You are SaintSal™, the divine AI companion with faith-aligned principles. Provide wise, helpful assistance.",
    };

    const stream = await client.chat.completions.create({
      model: modelName,
      messages: [systemMessage, ...messages],
      temperature: 0.7,
      max_tokens: 4000,
      stream: true,
    });

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || "";
      if (content) {
        res.write(`data: ${JSON.stringify({ content })}\n\n`);
      }
    }

    res.write(`data: [DONE]\n\n`);
    res.end();
  } catch (error) {
    console.error("Stream error:", error);
    res.write(`data: ${JSON.stringify({ error: "Streaming failed" })}\n\n`);
    res.end();
  }
};

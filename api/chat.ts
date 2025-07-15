import { VercelRequest, VercelResponse } from "@vercel/node";
import { OpenAI } from "openai";
import { insertServerEvent } from "./events";

let azureOpenAI: OpenAI;
let standardOpenAI: OpenAI;

function getAzureOpenAI(): OpenAI {
  if (!azureOpenAI) {
    const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
    const apiKey = process.env.AZURE_OPENAI_API_KEY;
    const deploymentName = process.env.AZURE_OPENAI_DEPLOYMENT_NAME || "gpt-4o";

    if (!endpoint || !apiKey) {
      throw new Error("Azure OpenAI configuration missing");
    }

    azureOpenAI = new OpenAI({
      apiKey: apiKey,
      baseURL: `${endpoint}/openai/deployments/${deploymentName}`,
      defaultQuery: { "api-version": "2024-08-01-preview" },
      defaultHeaders: {
        "api-key": apiKey,
      },
    });
  }
  return azureOpenAI;
}

function getStandardOpenAI(): OpenAI {
  if (!standardOpenAI) {
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      throw new Error("OpenAI API key missing");
    }

    standardOpenAI = new OpenAI({
      apiKey: apiKey,
    });
  }
  return standardOpenAI;
}

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

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

    // Log the successful AI response
    await insertServerEvent({
      name: "ai_response",
      userId: userId || "anonymous",
      details: {
        model,
        response_length: choice.message.content.length,
        prompt_tokens: response.usage?.prompt_tokens,
        completion_tokens: response.usage?.completion_tokens,
        total_tokens: response.usage?.total_tokens,
      },
    });

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
}

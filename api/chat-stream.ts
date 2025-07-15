import { VercelRequest, VercelResponse } from "@vercel/node";
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
}

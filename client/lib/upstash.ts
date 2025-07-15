import { Index } from "@upstash/vector";

const index = new Index({
  url: import.meta.env.UPSTASH_VECTOR_REST_URL!,
  token: import.meta.env.UPSTASH_VECTOR_REST_TOKEN!,
});

export interface VectorData {
  id: string;
  metadata: {
    userId: string;
    conversationId: string;
    content: string;
    timestamp: string;
    model: string;
  };
  vector: number[];
}

export class VectorService {
  static async storeConversation(
    conversationId: string,
    userId: string,
    content: string,
    embedding: number[],
    model: string,
  ): Promise<void> {
    try {
      await index.upsert({
        id: `${conversationId}-${Date.now()}`,
        vector: embedding,
        metadata: {
          userId,
          conversationId,
          content,
          timestamp: new Date().toISOString(),
          model,
        },
      });
    } catch (error) {
      console.error("Error storing conversation vector:", error);
    }
  }

  static async searchSimilarConversations(
    embedding: number[],
    userId: string,
    limit: number = 5,
  ): Promise<VectorData[]> {
    try {
      const results = await index.query({
        vector: embedding,
        topK: limit,
        includeMetadata: true,
        filter: `userId = '${userId}'`,
      });

      return results.map((result) => ({
        id: result.id,
        metadata: result.metadata as VectorData["metadata"],
        vector: result.vector || [],
      }));
    } catch (error) {
      console.error("Error searching similar conversations:", error);
      return [];
    }
  }

  static async getUserConversationHistory(
    userId: string,
    limit: number = 20,
  ): Promise<VectorData[]> {
    try {
      // This would typically be done with a separate metadata query
      // For now, we'll use a broad search approach
      const results = await index.query({
        vector: new Array(1536).fill(0), // Dummy vector for metadata search
        topK: limit,
        includeMetadata: true,
        filter: `userId = '${userId}'`,
      });

      return results.map((result) => ({
        id: result.id,
        metadata: result.metadata as VectorData["metadata"],
        vector: result.vector || [],
      }));
    } catch (error) {
      console.error("Error getting user conversation history:", error);
      return [];
    }
  }

  static async deleteUserData(userId: string): Promise<void> {
    try {
      // Note: Upstash Vector doesn't have a direct delete by metadata feature
      // In production, you'd implement a background job to clean up user data
      console.log(`Marking user data for deletion: ${userId}`);
    } catch (error) {
      console.error("Error deleting user data:", error);
    }
  }
}

export default VectorService;

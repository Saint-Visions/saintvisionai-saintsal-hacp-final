import { useEffect, useState } from "react";
import { builder } from "@builder.io/react";
import { BUILDER_API_KEY } from "@/lib/builder";

export const BuilderDebug = () => {
  const [debugInfo, setDebugInfo] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkBuilderConnection = async () => {
      try {
        console.log("🔍 Checking Builder.io connection...");
        console.log("API Key:", BUILDER_API_KEY);

        // Test API connection
        const testContent = await builder
          .get("page", {
            userAttributes: { urlPath: "/" },
            limit: 1,
          })
          .toPromise();

        console.log("Builder.io Response:", testContent);

        const info = {
          apiKey: BUILDER_API_KEY,
          apiKeyValid: !!BUILDER_API_KEY,
          keyLength: BUILDER_API_KEY?.length || 0,
          contentFound: !!testContent,
          contentData: testContent,
          builderUrl: `https://builder.io/content?apiKey=${BUILDER_API_KEY}`,
          timestamp: new Date().toISOString(),
        };

        setDebugInfo(info);
        console.log("Debug Info:", info);
      } catch (error) {
        console.error("Builder.io Error:", error);
        setDebugInfo({
          error: error.message,
          apiKey: BUILDER_API_KEY,
          timestamp: new Date().toISOString(),
        });
      } finally {
        setLoading(false);
      }
    };

    checkBuilderConnection();
  }, []);

  if (loading) {
    return (
      <div
        className="fixed top-4 right-4 p-4 rounded-lg border"
        style={{
          background: "rgba(24, 28, 32, 0.9)",
          borderColor: "#FFD700",
          color: "#FFFFFF",
          fontFamily: "monospace",
          fontSize: "12px",
          zIndex: 9999,
          maxWidth: "300px",
        }}
      >
        🔍 Checking Builder.io connection...
      </div>
    );
  }

  return (
    <div
      className="fixed top-4 right-4 p-4 rounded-lg border"
      style={{
        background: "rgba(24, 28, 32, 0.9)",
        borderColor: debugInfo.error ? "#FF6B6B" : "#FFD700",
        color: "#FFFFFF",
        fontFamily: "monospace",
        fontSize: "11px",
        zIndex: 9999,
        maxWidth: "350px",
        maxHeight: "400px",
        overflow: "auto",
      }}
    >
      <div
        style={{ color: "#FFD700", fontWeight: "bold", marginBottom: "8px" }}
      >
        🔍 SaintSal Builder.io Debug
      </div>

      <div style={{ marginBottom: "4px" }}>
        <strong>API Key:</strong>{" "}
        {debugInfo.apiKey ? "✅ Present" : "❌ Missing"}
      </div>

      <div style={{ marginBottom: "4px" }}>
        <strong>Key Length:</strong> {debugInfo.keyLength}
      </div>

      <div style={{ marginBottom: "4px" }}>
        <strong>Content Found:</strong>{" "}
        {debugInfo.contentFound ? "✅ Yes" : "❌ No"}
      </div>

      {debugInfo.error && (
        <div style={{ color: "#FF6B6B", marginBottom: "4px" }}>
          <strong>Error:</strong> {debugInfo.error}
        </div>
      )}

      <div
        style={{
          marginBottom: "4px",
          fontSize: "10px",
          color: "rgba(255,255,255,0.7)",
        }}
      >
        <strong>Builder URL:</strong>
        <br />
        <a
          href={debugInfo.builderUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#FFD700" }}
        >
          Open Builder.io Dashboard
        </a>
      </div>

      {debugInfo.contentData && (
        <details style={{ marginTop: "8px" }}>
          <summary style={{ color: "#FFD700", cursor: "pointer" }}>
            Content Data
          </summary>
          <pre
            style={{
              fontSize: "9px",
              marginTop: "4px",
              color: "rgba(255,255,255,0.8)",
            }}
          >
            {JSON.stringify(debugInfo.contentData, null, 2)}
          </pre>
        </details>
      )}

      <div
        style={{
          marginTop: "8px",
          fontSize: "9px",
          color: "rgba(255,255,255,0.5)",
        }}
      >
        {debugInfo.timestamp}
      </div>
    </div>
  );
};

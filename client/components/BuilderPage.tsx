import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import { BUILDER_API_KEY } from "@/lib/builder";
import { BuilderDebug } from "./BuilderDebug";

// Import component registry to register all components
import "./builder/builder-registry";

interface BuilderPageProps {
  model?: string;
}

export default function BuilderPage({ model = "page" }: BuilderPageProps) {
  const location = useLocation();
  const isPreviewingInBuilder = useIsPreviewing();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContent() {
      setLoading(true);

      try {
        const urlPath = location.pathname;
        console.log("🔍 Fetching Builder.io content for:", urlPath);

        const builderContent = await builder
          .get(model, {
            userAttributes: {
              urlPath: urlPath,
            },
            previewMode: isPreviewingInBuilder,
          })
          .toPromise();

        console.log("✅ Builder.io content fetched:", builderContent);
        setContent(builderContent);
      } catch (error) {
        console.error("❌ Error fetching Builder.io content:", error);
        setContent(null);
      } finally {
        setLoading(false);
      }
    }

    fetchContent();
  }, [location.pathname, model, isPreviewingInBuilder]);

  // Show loading state
  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#10161C" }}
      >
        <div className="text-center">
          <div
            className="w-12 h-12 border-4 border-t-4 rounded-full animate-spin mx-auto mb-4"
            style={{
              borderColor: "rgba(255, 215, 0, 0.3)",
              borderTopColor: "#FFD700",
            }}
          />
          <p
            className="text-lg"
            style={{
              fontFamily: "Inter, sans-serif",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            Loading SaintSal content...
          </p>
        </div>
      </div>
    );
  }

  // Show content if available or if in preview mode
  if (content || isPreviewingInBuilder) {
    return (
      <div style={{ backgroundColor: "#10161C", minHeight: "100vh" }}>
        <BuilderDebug />
        <BuilderComponent
          model={model}
          content={content}
          apiKey={BUILDER_API_KEY}
        />
      </div>
    );
  }

  // Show 404 for pages that don't exist in Builder.io
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#10161C" }}
    >
      <div className="text-center max-w-md mx-auto px-6">
        <h1
          className="text-6xl font-bold mb-6"
          style={{
            fontFamily: "Inter, sans-serif",
            color: "#FFD700",
            fontWeight: "900",
          }}
        >
          404
        </h1>
        <h2
          className="text-2xl font-bold mb-4"
          style={{
            fontFamily: "Inter, sans-serif",
            color: "#FFFFFF",
            fontWeight: "700",
          }}
        >
          Page Not Found
        </h2>
        <p
          className="text-lg mb-8"
          style={{
            fontFamily: "Inter, sans-serif",
            color: "rgba(255,255,255,0.7)",
            fontWeight: "300",
          }}
        >
          This page hasn't been created in Builder.io yet.
        </p>
        <a
          href="/"
          className="inline-block px-8 py-4 rounded-xl font-semibold transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, #FFD700 0%, #FFB400 100%)",
            color: "#000",
            fontFamily: "Inter, sans-serif",
            fontWeight: "600",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow =
              "0 8px 25px rgba(255, 215, 0, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          ← Back to Home
        </a>
      </div>
    </div>
  );
}

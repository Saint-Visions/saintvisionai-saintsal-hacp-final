import { useState, useEffect } from "react";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import { Button } from "@/components/ui/button";
import { BUILDER_API_KEY } from "@/lib/builder";

// Import component registry
import "../components/builder/builder-registry";

export default function IndexWithBuilder() {
  const isPreviewingInBuilder = useIsPreviewing();
  const [builderContent, setBuilderContent] = useState(null);
  const [showBuilder, setShowBuilder] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBuilderContent() {
      console.log("🔍 Fetching Builder.io content...");
      console.log("🔑 API Key:", BUILDER_API_KEY);
      console.log("🎯 Preview mode:", isPreviewingInBuilder);

      try {
        const content = await builder
          .get("page", {
            userAttributes: {
              urlPath: "/",
            },
            previewMode: isPreviewingInBuilder,
          })
          .toPromise();

        console.log("📦 Builder content received:", content);

        if (content) {
          console.log("✅ Builder content found - showing Builder version");
          setBuilderContent(content);
          setShowBuilder(true);
        } else {
          console.log("❌ No Builder content found - showing fallback");
        }
      } catch (error) {
        console.error("🚨 Error fetching Builder.io content:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBuilderContent();
  }, [isPreviewingInBuilder]);

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

  // If Builder.io content exists or we're in preview mode, show Builder content
  if (showBuilder || isPreviewingInBuilder) {
    console.log("🎨 Rendering Builder.io content");
    return (
      <div style={{ backgroundColor: "#10161C", minHeight: "100vh" }}>
        <BuilderComponent
          model="page"
          content={builderContent}
          apiKey={BUILDER_API_KEY}
        />
      </div>
    );
  }

  // Fallback to original homepage design
  console.log("🏠 Rendering fallback homepage");
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundColor: "#10161C",
        backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F179a1108a9c7482b829b68cf4cc7f89f')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
        backgroundSize: "100% auto",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Natural Environment Atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.25) 100%)",
        }}
      />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
          {/* SaintSal Logo */}
          <div className="mb-12">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/23b227793103accd33c7649ebabb0572cddb55c1?width=2048"
              alt="SAINTSAL™ Logo"
              className="w-20 h-20"
              style={{
                filter: "drop-shadow(0 0 20px rgba(255,215,0,0.3))",
              }}
            />
          </div>

          {/* Main Message */}
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 text-center max-w-5xl"
            style={{
              fontFamily: "Inter, sans-serif",
              color: "#FFFFFF",
              lineHeight: "1.1",
              letterSpacing: "-0.01em",
              fontWeight: "800",
            }}
          >
            Your AI Companion for{" "}
            <span
              style={{
                color: "#FFD700",
                fontWeight: "900",
              }}
            >
              Real Work
            </span>
            .
          </h1>

          <p
            className="text-xl md:text-2xl mb-4 text-center max-w-3xl"
            style={{
              fontFamily: "Inter, sans-serif",
              color: "rgba(255,255,255,0.9)",
              fontWeight: "300",
            }}
          >
            The AI assistant that actually{" "}
            <span
              style={{
                color: "#FF6B6B",
                fontWeight: "500",
              }}
            >
              gets things done
            </span>
            .
          </p>

          <p
            className="text-lg md:text-xl mb-8 text-center max-w-2xl"
            style={{
              fontFamily: "Inter, sans-serif",
              color: "rgba(255,255,255,0.7)",
              fontWeight: "300",
            }}
          >
            Chat with AI. Take action instantly. Stay in control.
          </p>

          {/* Debug Info */}
          <div
            className="mb-8 p-4 rounded-lg text-center"
            style={{
              background: "rgba(255, 215, 0, 0.1)",
              border: "1px solid rgba(255, 215, 0, 0.3)",
            }}
          >
            <p
              className="text-sm"
              style={{
                color: "#FFD700",
                fontFamily: "Inter, sans-serif",
              }}
            >
              🎯 <strong>Builder.io Status:</strong> No content found at path
              "/"
              <br />
              💡 <strong>Next Step:</strong> Create a page with URL path "/" in
              Builder.io
              <br />
              🔑 <strong>API Key:</strong> {BUILDER_API_KEY.substring(0, 10)}...
            </p>
          </div>

          {/* Primary CTA */}
          <div className="relative">
            <a href="https://saintvisionai.com/signup">
              <Button
                className="text-xl px-12 py-6 font-semibold relative"
                style={{
                  background:
                    "linear-gradient(135deg, #FFD700 0%, #FFB400 100%)",
                  color: "#000",
                  borderRadius: "16px",
                  boxShadow:
                    "0 0 40px rgba(255,215,0,0.4), 0 20px 40px rgba(0,0,0,0.3)",
                  transition: "all 0.4s ease",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-2px) scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 0 60px rgba(255,215,0,0.6), 0 30px 60px rgba(0,0,0,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 0 40px rgba(255,215,0,0.4), 0 20px 40px rgba(0,0,0,0.3)";
                }}
              >
                → Start Using SaintSal™
              </Button>
            </a>
          </div>
        </section>

        {/* Core Confidence Message */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-4xl md:text-6xl font-bold mb-16"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#FFFFFF",
                lineHeight: "1.1",
                fontWeight: "800",
              }}
            >
              Most AI assistants just{" "}
              <span style={{ color: "#FFFFFF" }}>chat</span>.
              <br />
              <span style={{ color: "#FFD700" }}>
                SaintSal actually executes your requests
              </span>
              .
            </h2>

            <div className="mb-16 space-y-4">
              <p
                className="text-xl md:text-2xl"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "rgba(255,255,255,0.8)",
                  fontWeight: "300",
                  lineHeight: "1.4",
                }}
              >
                No complex setup required.
              </p>
              <p
                className="text-xl md:text-2xl"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "rgba(255,255,255,0.8)",
                  fontWeight: "300",
                  lineHeight: "1.4",
                }}
              >
                No manual workflows to learn.
              </p>
              <p
                className="text-xl md:text-2xl"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "rgba(255,255,255,0.9)",
                  fontWeight: "400",
                  lineHeight: "1.4",
                }}
              >
                Ask for something. Watch it happen.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl font-bold mb-12"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#FFD700",
                fontWeight: "700",
              }}
            >
              Try <span style={{ fontWeight: "800" }}>SaintSal™</span> Now —{" "}
              <span
                style={{
                  color: "#FFFFFF",
                  fontWeight: "300",
                }}
              >
                No Login Required
              </span>
              .
            </h2>

            <div className="relative inline-block">
              <a href="https://saintvisionai.com/console">
                <Button
                  className="text-xl px-12 py-6 font-semibold relative"
                  style={{
                    background:
                      "linear-gradient(135deg, #FFD700 0%, #FFB400 100%)",
                    color: "#000",
                    borderRadius: "20px",
                    boxShadow:
                      "0 0 60px rgba(255,215,0,0.5), 0 30px 60px rgba(0,0,0,0.3)",
                    transition: "all 0.4s ease",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "700",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-4px) scale(1.02)";
                    e.currentTarget.style.boxShadow =
                      "0 0 80px rgba(255,215,0,0.7), 0 40px 80px rgba(0,0,0,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 0 60px rgba(255,215,0,0.5), 0 30px 60px rgba(0,0,0,0.3)";
                  }}
                >
                  → Launch Assistant
                </Button>
              </a>
            </div>
          </div>
        </section>

        <div className="h-20"></div>
      </div>
    </div>
  );
}

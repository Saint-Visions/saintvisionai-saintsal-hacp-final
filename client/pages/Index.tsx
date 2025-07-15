import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Users,
  BarChart3,
  Chrome,
  Mic,
  Calendar,
  Mail,
  FileText,
  Bell,
} from "lucide-react";

export default function Index() {
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
      {/* Soft Milky Atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.3) 70%, rgba(16,22,28,0.6) 100%)",
        }}
      />

      {/* Settling Gold Embers - Lower Background Only */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 50px 85%, rgba(255,215,0,0.3), transparent),
            radial-gradient(2px 2px at 150px 90%, rgba(255,215,0,0.2), transparent),
            radial-gradient(1px 1px at 250px 88%, rgba(255,215,0,0.25), transparent),
            radial-gradient(2px 2px at 350px 92%, rgba(255,215,0,0.15), transparent),
            radial-gradient(1px 1px at 450px 87%, rgba(255,215,0,0.2), transparent)
          `,
          backgroundRepeat: "repeat-x",
          backgroundSize: "500px 200px",
          backgroundPosition: "0 80%",
          animation: "emberSettle 30s ease-in-out infinite",
          opacity: 0.6,
        }}
      />

      <div className="relative z-10">
        {/* Native Hero Section - No Boxes */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
          {/* SaintSal Logo - Native to Environment */}
          <div className="mb-8">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/23b227793103accd33c7649ebabb0572cddb55c1?width=2048"
              alt="SAINTSAL™ Logo"
              className="w-20 h-20"
              style={{
                filter: "drop-shadow(0 0 20px rgba(255,215,0,0.4))",
                animation: "subtle-float 6s ease-in-out infinite",
              }}
            />
          </div>

          {/* Native Typography */}
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 text-center max-w-5xl"
            style={{
              fontFamily: "Cinzel Decorative, serif",
              color: "#FFD700",
              textShadow:
                "0 0 6px rgba(255,215,0,0.4), 0 0 12px rgba(255,215,0,0.2), 0 0 24px rgba(255,215,0,0.1)",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
            }}
          >
            Your AI Companion for{" "}
            <span
              style={{
                textShadow:
                  "0 0 8px rgba(255,215,0,0.6), 0 0 16px rgba(255,215,0,0.3)",
                color: "#FFD700",
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
              color: "rgba(255,255,255,0.95)",
              textShadow:
                "0 0 8px rgba(255,255,255,0.4), 0 0 16px rgba(255,255,255,0.2), 0 0 24px rgba(255,255,255,0.1)",
              fontWeight: "300",
            }}
          >
            Built for{" "}
            <span
              style={{
                color: "#FF6B6B",
                textShadow:
                  "0 0 12px rgba(255,107,107,0.8), 0 0 24px rgba(255,107,107,0.4)",
              }}
            >
              execution
            </span>{" "}
            — not entertainment.
          </p>

          <p
            className="text-lg md:text-xl mb-12 text-center max-w-2xl"
            style={{
              fontFamily: "Inter, sans-serif",
              color: "rgba(255,255,255,0.7)",
              fontWeight: "300",
            }}
          >
            Dual AI chat. Instant results. Full control.
          </p>

          {/* Divine Floating CTA */}
          <div className="relative">
            <Link to="/signup">
              <Button
                className="text-xl px-12 py-6 font-semibold relative"
                style={{
                  background:
                    "linear-gradient(135deg, #FFD700 0%, #FFB400 100%)",
                  color: "#000",
                  borderRadius: "16px",
                  boxShadow:
                    "0 0 40px rgba(255,215,0,0.4), 0 20px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  fontFamily: "Inter, sans-serif",
                  border: "1px solid rgba(255,215,0,0.3)",
                  backdropFilter: "blur(10px)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-2px) scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 0 60px rgba(255,215,0,0.6), 0 30px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 0 40px rgba(255,215,0,0.4), 0 20px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)";
                }}
              >
                → Start Using SaintSal™
              </Button>
            </Link>
          </div>
        </section>

        {/* Glass Container Sections */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Native Section Header */}
            <div className="text-center mb-20">
              <h2
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{
                  fontFamily: "Cinzel Decorative, serif",
                  color: "#FFD700",
                  textShadow:
                    "0 0 4px rgba(255,215,0,0.5), 0 0 8px rgba(255,215,0,0.3), 0 0 16px rgba(255,215,0,0.2)",
                  letterSpacing: "-0.01em",
                }}
              >
                <span
                  style={{
                    color: "#00D9FF",
                    textShadow:
                      "0 0 12px rgba(0,217,255,1), 0 0 24px rgba(0,217,255,0.7), 0 0 48px rgba(0,217,255,0.3)",
                  }}
                >
                  Smarter Than ChatGPT
                </span>
                .
                <br />
                Actually{" "}
                <span
                  style={{
                    color: "#FF6B6B",
                    textShadow:
                      "0 0 12px rgba(255,107,107,1), 0 0 24px rgba(255,107,107,0.7), 0 0 48px rgba(255,107,107,0.3)",
                  }}
                >
                  Gets Work Done
                </span>
                .
              </h2>
            </div>

            {/* Clean Neon Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
              {[
                {
                  icon: MessageSquare,
                  title: "Dual Chat Mode",
                  subtitle: "Ask + Act",
                  color: "#8B5CF6", // Purple
                  glow: "139,92,246",
                },
                {
                  icon: Users,
                  title: "CRM Routing",
                  subtitle: "Smart Automations",
                  color: "#10B981", // Green
                  glow: "16,185,129",
                },
                {
                  icon: Chrome,
                  title: "Chrome Extension",
                  subtitle: "Lead Scoring",
                  color: "#06B6D4", // Cyan
                  glow: "6,182,212",
                },
                {
                  icon: Mic,
                  title: "GPT-4o",
                  subtitle: "Voice Input",
                  color: "#EC4899", // Pink
                  glow: "236,72,153",
                },
                {
                  icon: BarChart3,
                  title: "No Setup",
                  subtitle: "Just type — it executes",
                  color: "#F59E0B", // Orange
                  glow: "245,158,11",
                },
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <feature.icon
                    className="w-10 h-10 mx-auto mb-4"
                    style={{
                      color: feature.color,
                      filter: `drop-shadow(0 0 8px rgba(${feature.glow},0.8))`,
                    }}
                  />
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: feature.color,
                      fontWeight: "700",
                      textShadow: `0 0 4px rgba(${feature.glow},0.4)`,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "rgba(255,255,255,0.7)",
                      fontWeight: "400",
                    }}
                  >
                    {feature.subtitle}
                  </p>
                </div>
              ))}
            </div>

            {/* Glass CTA Button */}
            <div className="text-center">
              <Link to="/console">
                <Button
                  className="px-8 py-4 text-lg font-medium"
                  style={{
                    background: "rgba(255,215,0,0.05)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,215,0,0.3)",
                    color: "#FFD700",
                    borderRadius: "16px",
                    fontFamily: "Inter, sans-serif",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow:
                      "0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,215,0,0.1)";
                    e.currentTarget.style.borderColor = "rgba(255,215,0,0.5)";
                    e.currentTarget.style.boxShadow =
                      "0 0 30px rgba(255,215,0,0.3), 0 16px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,215,0,0.05)";
                    e.currentTarget.style.borderColor = "rgba(255,215,0,0.3)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  → See How PartnerTech.ai Works
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Use Cases - Glass Grid */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{
                  fontFamily: "Cinzel Decorative, serif",
                  color: "#FFD700",
                  textShadow: "0 0 30px rgba(255,215,0,0.3)",
                }}
              >
                Built for Founders, Operators, and Doers.
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
              {[
                {
                  icon: Mail,
                  text: "Create email drafts",
                  color: "#8B5CF6",
                  glow: "139,92,246",
                },
                {
                  icon: BarChart3,
                  text: "Move CRM pipeline stages",
                  color: "#10B981",
                  glow: "16,185,129",
                },
                {
                  icon: Bell,
                  text: "Notify your team",
                  color: "#EC4899",
                  glow: "236,72,153",
                },
                {
                  icon: Calendar,
                  text: "Organize your schedule",
                  color: "#06B6D4",
                  glow: "6,182,212",
                },
                {
                  icon: FileText,
                  text: "Summarize meetings",
                  color: "#F59E0B",
                  glow: "245,158,11",
                },
                {
                  icon: Users,
                  text: "Route client intake forms",
                  color: "#10B981",
                  glow: "16,185,129",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center p-4 group"
                  style={{
                    background: "rgba(255,255,255,0.01)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "20px",
                    border: "1px solid rgba(255,215,0,0.08)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,215,0,0.2)";
                    e.currentTarget.style.background = "rgba(255,215,0,0.02)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,215,0,0.08)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.01)";
                  }}
                >
                  <div
                    className="w-10 h-10 mx-auto mb-3 rounded-xl flex items-center justify-center"
                    style={{
                      background: `rgba(${item.glow},0.1)`,
                      border: `1px solid rgba(${item.glow},0.2)`,
                      boxShadow: `0 0 8px rgba(${item.glow},0.2)`,
                    }}
                  >
                    <item.icon
                      className="w-5 h-5"
                      style={{
                        color: item.color,
                        filter: `drop-shadow(0 0 4px rgba(${item.glow},0.4))`,
                      }}
                    />
                  </div>
                  <p
                    className="text-sm"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: item.color,
                      fontWeight: "400",
                      textShadow: `0 0 6px rgba(${item.glow},0.6), 0 0 12px rgba(${item.glow},0.3)`,
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p
                className="text-lg italic"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "rgba(255,255,255,0.6)",
                  fontWeight: "300",
                }}
              >
                No bloat. No noise. Just answers and action.
              </p>
            </div>
          </div>
        </section>

        {/* Difference Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-4xl md:text-5xl font-bold mb-8"
              style={{
                fontFamily: "Cinzel Decorative, serif",
                color: "#FFD700",
                textShadow:
                  "0 0 10px rgba(255,215,0,0.9), 0 0 20px rgba(255,215,0,0.6), 0 0 40px rgba(255,215,0,0.3)",
              }}
            >
              Most AIs{" "}
              <span
                style={{
                  textShadow:
                    "0 0 15px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.4)",
                  color: "#FFFFFF",
                }}
              >
                talk
              </span>
              .
              <br />
              <span
                style={{
                  textShadow:
                    "0 0 15px rgba(255,215,0,1), 0 0 30px rgba(255,215,0,0.8), 0 0 60px rgba(255,215,0,0.4)",
                }}
              >
                SaintSal builds, routes, and runs it
              </span>
              .
            </h2>

            <p
              className="text-xl md:text-2xl mb-16"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "rgba(255,255,255,0.8)",
                lineHeight: "1.4",
                fontWeight: "300",
              }}
            >
              You don't need training.
              <br />
              You don't need instructions.
              <br />
              Just start typing. It'll get it done.
            </p>
          </div>
        </section>

        {/* Final Divine CTA */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl font-bold mb-12"
              style={{
                fontFamily: "Cinzel Decorative, serif",
                color: "#FFD700",
                textShadow:
                  "0 0 10px rgba(255,215,0,0.9), 0 0 20px rgba(255,215,0,0.6), 0 0 40px rgba(255,215,0,0.3)",
              }}
            >
              Try{" "}
              <span
                style={{
                  textShadow:
                    "0 0 15px rgba(255,215,0,1), 0 0 30px rgba(255,215,0,0.8), 0 0 60px rgba(255,215,0,0.4)",
                }}
              >
                SaintSal™
              </span>{" "}
              Now —{" "}
              <span
                style={{
                  textShadow:
                    "0 0 12px rgba(255,255,255,0.8), 0 0 24px rgba(255,255,255,0.4)",
                  color: "#FFFFFF",
                }}
              >
                No Login Required
              </span>
              .
            </h2>

            <div className="relative inline-block">
              <Link to="/console">
                <Button
                  className="text-xl px-12 py-6 font-semibold relative"
                  style={{
                    background:
                      "linear-gradient(135deg, #FFD700 0%, #FFB400 100%)",
                    color: "#000",
                    borderRadius: "20px",
                    boxShadow:
                      "0 0 60px rgba(255,215,0,0.5), 0 30px 60px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.2)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    fontFamily: "Inter, sans-serif",
                    border: "1px solid rgba(255,215,0,0.3)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-4px) scale(1.02)";
                    e.currentTarget.style.boxShadow =
                      "0 0 80px rgba(255,215,0,0.7), 0 40px 80px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 0 60px rgba(255,215,0,0.5), 0 30px 60px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.2)";
                  }}
                >
                  → Launch Assistant
                </Button>
              </Link>

              {/* Subtle SaintSal Presence */}
              <div
                className="absolute -right-20 top-1/2 transform -translate-y-1/2 opacity-15 pointer-events-none hidden md:block"
                style={{
                  animation: "subtle-float 8s ease-in-out infinite",
                }}
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/23b227793103accd33c7649ebabb0572cddb55c1?width=2048"
                  alt="SaintSal Presence"
                  className="w-16 h-16"
                  style={{
                    filter: "drop-shadow(0 0 15px rgba(255,215,0,0.3))",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <div className="h-20"></div>
      </div>
    </div>
  );
}

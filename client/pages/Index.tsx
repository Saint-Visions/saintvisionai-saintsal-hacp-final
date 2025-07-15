import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Users,
  BarChart3,
  Smartphone,
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
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Premium High-Level Atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(255,215,0,0.15) 0%, transparent 70%),
            radial-gradient(ellipse at 80% 70%, rgba(255,215,0,0.12) 0%, transparent 70%),
            linear-gradient(135deg, rgba(16,22,28,0.3) 0%, rgba(0,0,0,0.6) 50%, rgba(16,22,28,0.4) 100%)
          `,
        }}
      />

      {/* Enhanced Gold Particle System */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(3px 3px at 25px 35px, rgba(255,215,0,0.12), transparent),
            radial-gradient(2px 2px at 45px 75px, rgba(255,215,0,0.10), transparent),
            radial-gradient(1px 1px at 95px 45px, rgba(255,215,0,0.08), transparent),
            radial-gradient(3px 3px at 135px 85px, rgba(255,215,0,0.12), transparent),
            radial-gradient(2px 2px at 165px 35px, rgba(255,215,0,0.06), transparent),
            radial-gradient(1px 1px at 200px 120px, rgba(255,215,0,0.08), transparent)
          `,
          backgroundRepeat: "repeat",
          backgroundSize: "250px 150px",
          animation: "goldDustFloat 25s ease-in-out infinite",
          opacity: 0.7,
        }}
      />

      {/* Premium Glow Layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 50% 20%, rgba(255,215,0,0.08) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(255,215,0,0.06) 0%, transparent 50%),
            radial-gradient(circle at 80% 60%, rgba(255,215,0,0.04) 0%, transparent 50%)
          `,
          animation: "pulse 8s ease-in-out infinite",
        }}
      />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="text-5xl md:text-7xl font-bold mb-6"
              style={{
                fontFamily: "Cinzel Decorative, serif",
                color: "#FFD700",
                textShadow: "0 0 30px rgba(255,215,0,0.4)",
                lineHeight: "1.1",
              }}
            >
              Your AI Companion for Real Work.
            </h1>

            <p
              className="text-xl md:text-2xl mb-4 text-white/90"
              style={{
                fontFamily: "Inter, sans-serif",
                textShadow: "0 0 10px rgba(255,255,255,0.1)",
              }}
            >
              Built for execution — not entertainment.
            </p>

            <p
              className="text-lg md:text-xl mb-12 text-gray-300"
              style={{
                fontFamily: "Inter, sans-serif",
              }}
            >
              Dual AI chat. Instant results. Full control.
            </p>

            <Link to="/signup">
              <Button
                className="text-xl px-12 py-4 font-bold"
                style={{
                  background: "linear-gradient(90deg, #FFD700, #FFB400)",
                  color: "#000",
                  borderRadius: "12px",
                  boxShadow:
                    "0 0 30px rgba(255,215,0,0.4), 0 8px 25px rgba(0,0,0,0.3)",
                  transition: "all 0.3s ease",
                  fontFamily: "Inter, sans-serif",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 0 40px rgba(255,215,0,0.6), 0 12px 30px rgba(0,0,0,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 0 30px rgba(255,215,0,0.4), 0 8px 25px rgba(0,0,0,0.3)";
                }}
              >
                → Start Using SaintSal™
              </Button>
            </Link>
          </div>
        </section>

        {/* Section 2 - What It Does */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{
                  fontFamily: "Cinzel Decorative, serif",
                  color: "#FFD700",
                  textShadow: "0 0 20px rgba(255,215,0,0.3)",
                }}
              >
                Smarter Than ChatGPT.
                <br />
                Actually Gets Work Done.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: MessageSquare,
                  title: "Dual Chat Mode",
                  subtitle: "Ask + Act",
                },
                {
                  icon: Users,
                  title: "CRM Routing",
                  subtitle: "Smart Automations",
                },
                {
                  icon: Chrome,
                  title: "Chrome Extension",
                  subtitle: "Lead Scoring",
                },
                { icon: Mic, title: "GPT-4o", subtitle: "Voice Input" },
                {
                  icon: BarChart3,
                  title: "No Setup",
                  subtitle: "Just type — it executes",
                },
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{
                      background: "rgba(255,215,0,0.1)",
                      boxShadow: "0 0 20px rgba(255,215,0,0.2)",
                    }}
                  >
                    <feature.icon
                      className="w-8 h-8"
                      style={{ color: "#FFD700" }}
                    />
                  </div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "#FFD700",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-gray-300"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {feature.subtitle}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/console">
                <Button
                  variant="outline"
                  className="px-8 py-3 text-lg"
                  style={{
                    border: "1px solid #FFD700",
                    background: "transparent",
                    color: "#FFD700",
                    borderRadius: "12px",
                    fontFamily: "Inter, sans-serif",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,215,0,0.1)";
                    e.currentTarget.style.boxShadow =
                      "0 0 20px rgba(255,215,0,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  → See How PartnerTech.ai Works
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 3 - Use Cases */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{
                  fontFamily: "Cinzel Decorative, serif",
                  color: "#FFD700",
                  textShadow: "0 0 20px rgba(255,215,0,0.3)",
                }}
              >
                Built for Founders, Operators, and Doers.
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
              {[
                { icon: Mail, text: "Create email drafts" },
                { icon: BarChart3, text: "Move CRM pipeline stages" },
                { icon: Bell, text: "Notify your team" },
                { icon: Calendar, text: "Organize your schedule" },
                { icon: FileText, text: "Summarize meetings" },
                { icon: Users, text: "Route client intake forms" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div
                    className="w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center"
                    style={{
                      background: "rgba(255,215,0,0.08)",
                      border: "1px solid rgba(255,215,0,0.2)",
                    }}
                  >
                    <item.icon
                      className="w-6 h-6"
                      style={{ color: "#FFD700" }}
                    />
                  </div>
                  <p
                    className="text-sm text-gray-300"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p
                className="text-lg text-gray-400 italic"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                No bloat. No noise. Just answers and action.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 - What Makes It Different */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-4xl md:text-5xl font-bold mb-8"
              style={{
                fontFamily: "Cinzel Decorative, serif",
                color: "#FFD700",
                textShadow: "0 0 20px rgba(255,215,0,0.3)",
              }}
            >
              Most AIs talk.
              <br />
              SaintSal builds, routes, and runs it.
            </h2>

            <p
              className="text-xl md:text-2xl text-white/90 mb-16"
              style={{
                fontFamily: "Inter, sans-serif",
                lineHeight: "1.4",
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

        {/* Final CTA */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl font-bold mb-8"
              style={{
                fontFamily: "Cinzel Decorative, serif",
                color: "#FFD700",
                textShadow: "0 0 20px rgba(255,215,0,0.3)",
              }}
            >
              Try SaintSal™ Now — No Login Required.
            </h2>

            <div className="relative inline-block">
              <Link to="/console">
                <Button
                  className="text-xl px-12 py-4 font-bold relative"
                  style={{
                    background: "linear-gradient(90deg, #FFD700, #FFB400)",
                    color: "#000",
                    borderRadius: "12px",
                    boxShadow:
                      "0 0 40px rgba(255,215,0,0.5), 0 8px 25px rgba(0,0,0,0.3)",
                    transition: "all 0.3s ease",
                    fontFamily: "Inter, sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow =
                      "0 0 60px rgba(255,215,0,0.7), 0 12px 30px rgba(0,0,0,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 0 40px rgba(255,215,0,0.5), 0 8px 25px rgba(0,0,0,0.3)";
                  }}
                >
                  → Launch Assistant
                </Button>
              </Link>

              {/* Subtle SaintSal Avatar Fade */}
              <div
                className="absolute -right-16 top-1/2 transform -translate-y-1/2 opacity-20 pointer-events-none"
                style={{
                  animation: "subtle-float 4s ease-in-out infinite",
                }}
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/23b227793103accd33c7649ebabb0572cddb55c1?width=2048"
                  alt="SaintSal Avatar"
                  className="w-12 h-12"
                  style={{
                    filter: "drop-shadow(0 0 10px rgba(255,215,0,0.3))",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer Space */}
        <div className="h-20"></div>
      </div>
    </div>
  );
}

<<<<<<< HEAD
import { builder } from "@builder.io/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Brain, Zap } from "lucide-react";
=======
import { Button } from "@/components/ui/button";
>>>>>>> origin/main

interface SaintSalHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
<<<<<<< HEAD
  primaryCTA?: string;
  secondaryCTA?: string;
  showStats?: boolean;
  backgroundStyle?: "golden" | "dark" | "gradient";
}

function SaintSalHero({
  title = "SaintSal™ AI Platform",
  subtitle = "Your Divine AI Assistant",
  description = "Experience the future of AI with HACP™ technology. Faith-aligned intelligence meets cutting-edge innovation.",
  primaryCTA = "Start Free Trial",
  secondaryCTA = "Watch Demo",
  showStats = true,
  backgroundStyle = "golden",
}: SaintSalHeroProps) {
  const getBackgroundClass = () => {
    switch (backgroundStyle) {
      case "golden":
        return "bg-gradient-to-br from-yellow-900/20 via-background to-yellow-800/10";
      case "dark":
        return "bg-gradient-to-br from-gray-900 via-background to-gray-800";
      case "gradient":
        return "bg-gradient-to-br from-purple-900/20 via-background to-blue-900/20";
      default:
        return "bg-gradient-to-br from-yellow-900/20 via-background to-yellow-800/10";
    }
  };

  return (
    <section className={`relative py-20 px-4 ${getBackgroundClass()}`}>
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <div className="mb-8">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/40">
            <Sparkles className="w-3 h-3 mr-1" />
            HACP™ Technology
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-yellow-400 to-primary bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            {subtitle}
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            {description}
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="text-lg px-8 py-3">
            <Brain className="w-5 h-5 mr-2" />
            {primaryCTA}
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-3">
            <Zap className="w-5 h-5 mr-2" />
            {secondaryCTA}
          </Button>
        </div>

        {/* Stats */}
        {showStats && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">$45M</div>
              <div className="text-muted-foreground">Company Valuation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">HACP™</div>
              <div className="text-muted-foreground">Patented Technology</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                AI-First
              </div>
              <div className="text-muted-foreground">Platform Architecture</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// Register component with Builder.io
builder.registerComponent(SaintSalHero, {
  name: "SaintSal Hero",
  description:
    "Dynamic hero section with SaintSal branding and HACP technology",
  image: "https://tabler-icons.io/static/tabler-icons/icons/sparkles.svg",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "SaintSal™ AI Platform",
      helperText: "Main headline text",
    },
    {
      name: "subtitle",
      type: "string",
      defaultValue: "Your Divine AI Assistant",
      helperText: "Subtitle below the main title",
    },
    {
      name: "description",
      type: "longText",
      defaultValue:
        "Experience the future of AI with HACP™ technology. Faith-aligned intelligence meets cutting-edge innovation.",
      helperText: "Descriptive text below subtitle",
    },
    {
      name: "primaryCTA",
      type: "string",
      defaultValue: "Start Free Trial",
      helperText: "Primary call-to-action button text",
    },
    {
      name: "secondaryCTA",
      type: "string",
      defaultValue: "Watch Demo",
      helperText: "Secondary call-to-action button text",
    },
    {
      name: "showStats",
      type: "boolean",
      defaultValue: true,
      helperText: "Show company statistics",
    },
    {
      name: "backgroundStyle",
      type: "string",
      enum: ["golden", "dark", "gradient"],
      defaultValue: "golden",
      helperText: "Background color scheme",
    },
  ],
});

export { SaintSalHero };
=======
  ctaText?: string;
  ctaUrl?: string;
  secondaryCtaText?: string;
  secondaryCtaUrl?: string;
  backgroundImage?: string;
  logoUrl?: string;
}

export const SaintSalHero = ({
  title = "Your AI Companion for Real Work",
  subtitle = "The AI assistant that actually gets things done",
  description = "Chat with AI. Take action instantly. Stay in control.",
  ctaText = "→ Start Using SaintSal™",
  ctaUrl = "https://saintvisionai.com/signup",
  secondaryCtaText = "→ Launch Assistant",
  secondaryCtaUrl = "https://saintvisionai.com/console",
  backgroundImage = "https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F179a1108a9c7482b829b68cf4cc7f89f",
  logoUrl = "https://cdn.builder.io/api/v1/image/assets/TEMP/23b227793103accd33c7649ebabb0572cddb55c1?width=2048",
}: SaintSalHeroProps) => {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundColor: "#10161C",
        backgroundImage: `url('${backgroundImage}')`,
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
              src={logoUrl}
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
            {title.split(" ").slice(0, -2).join(" ")}{" "}
            <span
              style={{
                color: "#FFD700",
                fontWeight: "900",
              }}
            >
              {title.split(" ").slice(-2).join(" ")}
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
            {subtitle.split(" ").slice(0, -3).join(" ")}{" "}
            <span
              style={{
                color: "#FF6B6B",
                fontWeight: "500",
              }}
            >
              {subtitle.split(" ").slice(-3).join(" ")}
            </span>
            .
          </p>

          <p
            className="text-lg md:text-xl mb-16 text-center max-w-2xl"
            style={{
              fontFamily: "Inter, sans-serif",
              color: "rgba(255,255,255,0.7)",
              fontWeight: "300",
            }}
          >
            {description}
          </p>

          {/* Primary CTA */}
          <div className="relative mb-8">
            <a href={ctaUrl}>
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
                {ctaText}
              </Button>
            </a>
          </div>

          {/* Secondary CTA */}
          <div className="relative">
            <a href={secondaryCtaUrl}>
              <Button
                variant="outline"
                className="text-lg px-8 py-4 font-semibold relative"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: "#FFD700",
                  borderColor: "#FFD700",
                  borderRadius: "12px",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.4s ease",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "600",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,215,0,0.1)";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {secondaryCtaText}
              </Button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
>>>>>>> origin/main

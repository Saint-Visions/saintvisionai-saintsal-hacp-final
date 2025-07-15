import { builder } from "@builder.io/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Brain, Zap } from "lucide-react";

interface SaintSalHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
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

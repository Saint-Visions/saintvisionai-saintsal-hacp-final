import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  CheckCircle,
  ArrowLeft,
  Crown,
  Zap,
  Brain,
  Building2,
  Sparkles,
  Star,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const pricingTiers = [
  {
    id: "free",
    name: "Free Trial",
    description: "Get started with basic AI companion",
    price: { monthly: 0, yearly: 0 },
    badge: "Start Here",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/40",
    features: [
      "2 AI conversations",
      "Basic GPT-4o access",
      "Email support",
      "7-day trial period",
    ],
    limitations: ["Limited to 2 chats", "No CRM integration"],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    id: "unlimited",
    name: "Unlimited",
    description: "Unlimited GPT Companion for serious users",
    price: { monthly: 27, yearly: 270 },
    badge: "Most Popular",
    badgeColor: "bg-primary/20 text-primary border-primary/40",
    features: [
      "Unlimited AI conversations",
      "GPT-4o + Azure dual AI",
      "Faith-aligned responses",
      "Priority support",
      "Mobile app access",
      "Basic analytics",
    ],
    limitations: [],
    cta: "Get Unlimited",
    popular: true,
  },
  {
    id: "partnertech",
    name: "PartnerTech",
    description: "CRM access + business automation",
    price: { monthly: 97, yearly: 970 },
    badge: "Business",
    badgeColor: "bg-green-500/20 text-green-400 border-green-500/40",
    features: [
      "Everything in Unlimited",
      "GoHighLevel CRM access",
      "Lead automation",
      "Chrome extension",
      "Advanced analytics",
      "Webhook integrations",
      "Priority phone support",
    ],
    limitations: [],
    cta: "Upgrade to PartnerTech",
    popular: false,
  },
  {
    id: "pro",
    name: "Pro Suite",
    description: "Complete business automation suite",
    price: { monthly: 297, yearly: 2970 },
    badge: "Professional",
    badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/40",
    features: [
      "Everything in PartnerTech",
      "All AI tools unlocked",
      "Image generator",
      "SVG launchpad",
      "Sticky notes system",
      "Client portal access",
      "Advanced CRM features",
      "Custom integrations",
    ],
    limitations: [],
    cta: "Go Pro",
    popular: false,
  },
  {
    id: "fullpro",
    name: "Full Pro",
    description: "Enterprise-grade with Chrome + webhooks",
    price: { monthly: 497, yearly: 4970 },
    badge: "Enterprise",
    badgeColor: "bg-orange-500/20 text-orange-400 border-orange-500/40",
    features: [
      "Everything in Pro Suite",
      "Advanced Chrome extension",
      "Full webhook access",
      "Custom automation flows",
      "Dedicated account manager",
      "SLA guarantees",
      "White-label options",
      "API access",
    ],
    limitations: [],
    cta: "Get Full Pro",
    popular: false,
  },
  {
    id: "custom",
    name: "White Label",
    description: "Custom branding and enterprise deployment",
    price: { monthly: 1500, yearly: 15000 },
    badge: "Custom",
    badgeColor: "bg-gold-shimmer/20 text-primary border-primary/40",
    features: [
      "Everything in Full Pro",
      "Custom branding",
      "White-label deployment",
      "Dedicated infrastructure",
      "Custom training",
      "24/7 dedicated support",
      "Legal compliance review",
      "Custom contract terms",
    ],
    limitations: [],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const handleUpgrade = (tierId: string) => {
    // Redirect to Stripe checkout based on tier
    console.log(`Upgrading to ${tierId}`, { isYearly });

    if (tierId === "custom") {
      // Redirect to contact form or sales
      window.location.href = "/contact";
    } else {
      // Redirect to Stripe checkout
      window.location.href = `/upgrade?plan=${tierId}&billing=${isYearly ? "yearly" : "monthly"}`;
    }
  };

  return (
    <div className="min-h-screen bg-background war-grid cinematic-fade">
      {/* Header */}
      <div className="border-b border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to home
            </Link>
            <div className="flex items-center gap-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/23b227793103accd33c7649ebabb0572cddb55c1?width=2048"
                alt="SaintVision AI"
                className="w-8 h-8"
              />
              <span className="text-lg font-bold gold-shimmer bg-clip-text text-transparent">
                SaintVision AI
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-6 bg-primary/10 border-primary/40"
          >
            <Crown className="w-3 h-3 mr-1" />
            Pricing Plans
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your{" "}
            <span className="gold-shimmer bg-clip-text text-transparent">
              Empire Plan
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            From free trials to enterprise deployments. Scale your AI-powered
            business with principled technology that grows with you.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span
              className={`text-sm ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}
            >
              Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-primary"
            />
            <span
              className={`text-sm ${isYearly ? "text-foreground" : "text-muted-foreground"}`}
            >
              Yearly
            </span>
            <Badge
              variant="outline"
              className="ml-2 bg-green-500/10 text-green-400 border-green-500/40"
            >
              Save 10%
            </Badge>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.id}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 ${
                tier.popular
                  ? "border-primary/50 bg-card/90 scale-105"
                  : "border-border/50 bg-card/80 hover:border-primary/30"
              } backdrop-blur-sm`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-0 right-0 bg-brand-gradient h-1"></div>
              )}

              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <Badge className={tier.badgeColor}>{tier.badge}</Badge>
                </div>

                <CardTitle className="text-2xl font-bold mb-2">
                  {tier.name}
                </CardTitle>

                <p className="text-muted-foreground text-sm mb-6">
                  {tier.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold">
                      ${tier.price[isYearly ? "yearly" : "monthly"]}
                    </span>
                    <span className="text-muted-foreground">
                      /{isYearly ? "year" : "month"}
                    </span>
                  </div>
                  {isYearly && tier.price.monthly > 0 && (
                    <p className="text-sm text-muted-foreground mt-2">
                      ${Math.round(tier.price.yearly / 12)}/month billed yearly
                    </p>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <div className="space-y-3">
                  {tier.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Limitations */}
                {tier.limitations.length > 0 && (
                  <div className="border-t border-border/50 pt-4">
                    <p className="text-xs text-muted-foreground mb-2">
                      Limitations:
                    </p>
                    <div className="space-y-2">
                      {tier.limitations.map((limitation, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-4 h-4 rounded-full border border-muted-foreground/30 flex-shrink-0"></div>
                          <span className="text-xs text-muted-foreground">
                            {limitation}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Button */}
                <Button
                  onClick={() => handleUpgrade(tier.id)}
                  className={`w-full ${
                    tier.popular
                      ? "bg-brand-gradient hover:opacity-90 text-charcoal"
                      : tier.id === "custom"
                        ? "bg-primary/20 border-primary/40 hover:bg-primary/30"
                        : "bg-muted hover:bg-muted/80"
                  }`}
                  variant={tier.popular ? "default" : "outline"}
                >
                  {tier.cta}
                  {tier.id !== "custom" && (
                    <ArrowRight className="w-4 h-4 ml-2" />
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <Card className="max-w-4xl mx-auto bg-card/80 border-border/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">Need Something Custom?</h3>
              </div>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Enterprise deployments, custom integrations, and white-label
                solutions available. Our team will work with you to build the
                perfect AI solution for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => handleUpgrade("custom")}
                  className="bg-brand-gradient hover:opacity-90 text-charcoal"
                >
                  Contact Sales Team
                </Button>
                <Button variant="outline">Schedule Demo</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="bg-card/80 border-border/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">
                  Can I change plans anytime?
                </h4>
                <p className="text-sm text-muted-foreground">
                  Yes, you can upgrade or downgrade your plan at any time.
                  Changes take effect immediately, and billing is prorated.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/80 border-border/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">
                  What makes SaintVision different?
                </h4>
                <p className="text-sm text-muted-foreground">
                  Our dual AI system (GPT-4o + Azure) with faith-aligned
                  responses ensures principled guidance for your business
                  decisions.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/80 border-border/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Is there a free trial?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes! Start with our 7-day free trial that includes 2 AI
                  conversations to experience the platform.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/80 border-border/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Do you offer refunds?</h4>
                <p className="text-sm text-muted-foreground">
                  We offer a 30-day money-back guarantee for all paid plans. No
                  questions asked.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

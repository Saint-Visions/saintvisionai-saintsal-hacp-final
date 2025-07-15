import { ArrowLeft, Shield, Lock, Eye, Globe, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background charcoal-depth">
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

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-6 bg-primary/10 border-primary/40"
          >
            <Shield className="w-3 h-3 mr-1" />
            Legal Framework
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            Privacy & Data Ethics Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            <strong>Saint Vision Group LLC</strong> - We protect what matters.
            Your data, your time, your purpose.
          </p>
          <div className="mt-6 text-sm text-muted-foreground">
            <p>
              <strong>Effective Date:</strong> January 2025
            </p>
            <p>
              <strong>Legal Framework:</strong> Delaware LP + Operating LLC
            </p>
            <p>
              <strong>Drafted by:</strong> Ryan Capatosto (Founder) + SaintSal™
              Compliance
            </p>
          </div>
        </div>

        {/* Core Principles */}
        <Card className="elite-card gotham-glow mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-glow flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              We Protect What Matters
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg">
              Saint Vision Group LLC and its associated platforms (SaintSal™,
              PartnerTech.ai, Athena.ai, EbyTech.ai, SVTlegal.ai, SVTteach.ai)
              are committed to the highest standards of privacy, data
              protection, and ethical conduct.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <Lock className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-bold">AES-256 Encryption</h3>
                <p className="text-sm text-muted-foreground">
                  Military-grade protection
                </p>
              </div>
              <div className="text-center p-4 bg-blue-500/10 rounded-lg">
                <Globe className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <h3 className="font-bold">Global Compliance</h3>
                <p className="text-sm text-muted-foreground">
                  GDPR, CCPA, PIPEDA ready
                </p>
              </div>
              <div className="text-center p-4 bg-green-500/10 rounded-lg">
                <Eye className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <h3 className="font-bold">Zero Surveillance</h3>
                <p className="text-sm text-muted-foreground">
                  No tracking, no selling
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What We Collect */}
        <Card className="elite-card gotham-glow mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-glow">
              🔒 What We Collect
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Name, email, phone (only if you submit them)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Activity logs from interactions with SaintSal and related
                  assistants
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Optional CRM, calendar, or financial data you choose to
                  connect
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  AI prompt content (stored for training only with user opt-in)
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* What We NEVER Do */}
        <Card className="elite-card border-red-500/30 mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-glow">
              🤖 What We NEVER Do
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0">
                  ❌
                </span>
                <span>Sell your data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0">
                  ❌
                </span>
                <span>
                  Share your personal info with third parties without consent
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0">
                  ❌
                </span>
                <span>
                  Use your inputs to train external models (like OpenAI or
                  Claude)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0">
                  ❌
                </span>
                <span>Track you across other websites</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Data Retention */}
        <Card className="elite-card gotham-glow mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-glow">
              🔁 How Long We Keep It
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-muted/20 rounded-lg text-center">
                <h3 className="font-bold text-primary">Default Users</h3>
                <p className="text-2xl font-bold mt-2">30 Days</p>
                <p className="text-sm text-muted-foreground">
                  Chat logs retention
                </p>
              </div>
              <div className="p-4 bg-muted/20 rounded-lg text-center">
                <h3 className="font-bold text-primary">Pro/Enterprise</h3>
                <p className="text-2xl font-bold mt-2">365 Days</p>
                <p className="text-sm text-muted-foreground">
                  Unless deleted by user
                </p>
              </div>
              <div className="p-4 bg-muted/20 rounded-lg text-center">
                <h3 className="font-bold text-primary">User Control</h3>
                <p className="text-2xl font-bold mt-2">Anytime</p>
                <p className="text-sm text-muted-foreground">
                  Request deletion
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Global Compliance */}
        <Card className="elite-card gotham-glow mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-glow">
              🌍 Global Compliance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>
                    <strong>GDPR</strong> (European Union)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>
                    <strong>CCPA</strong> (California)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>
                    <strong>PIPEDA</strong> (Canada)
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>
                    <strong>LGPD</strong> (Brazil)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>
                    <strong>UK DPA 2018</strong> (United Kingdom)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>
                    <strong>SOC 2</strong> Aligned Hosting
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="elite-card bg-primary/5 border-primary/30">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-glow">
              Questions About Your Privacy?
            </h3>
            <p className="text-muted-foreground mb-6">
              We're committed to transparency and your peace of mind.
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Email:</strong> privacy@saintvisional.com
              </p>
              <p>
                <strong>Support:</strong> support@saintvisional.com
              </p>
              <p>
                <strong>Legal:</strong> legal@saintvisional.com
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>
            © 2025 Saint Vision Group LLC. We protect your data. We respect
            your time. We serve your purpose.
          </p>
          <div className="mt-4 space-x-4">
            <Link
              to="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/hacp"
              className="hover:text-foreground transition-colors"
            >
              HACP™ Patent
            </Link>
            <Link
              to="/ai-disclosure"
              className="hover:text-foreground transition-colors"
            >
              AI Disclosure
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

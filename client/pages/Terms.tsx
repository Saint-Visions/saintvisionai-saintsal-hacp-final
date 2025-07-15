import { ArrowLeft, Scale, Shield, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Terms() {
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
            <Scale className="w-3 h-3 mr-1" />
            Legal Terms
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            <strong>Saint Vision Group LLC</strong> - Clear terms for a
            principled platform
          </p>
          <div className="mt-6 text-sm text-muted-foreground">
            <p>
              <strong>Effective Date:</strong> January 2025
            </p>
            <p>
              <strong>Last Updated:</strong> January 2025
            </p>
          </div>
        </div>

        {/* Agreement */}
        <Card className="elite-card gotham-glow mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-glow">
              1. Agreement to Terms
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              By accessing or using SaintVision AI, PartnerTech.ai, or any
              related Saint Vision Group LLC platforms, you agree to be bound by
              these Terms of Service and our Privacy Policy.
            </p>
            <p>
              If you do not agree to these terms, please do not use our
              services.
            </p>
          </CardContent>
        </Card>

        {/* Services Description */}
        <Card className="elite-card gotham-glow mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-glow">
              2. Description of Services
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Saint Vision Group provides AI-powered business tools including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>SaintSal™ AI Assistant powered by HACP™ technology</li>
              <li>PartnerTech.ai CRM and business automation</li>
              <li>Athena.ai legacy care and health applications</li>
              <li>Educational and training platforms</li>
              <li>Enterprise white-label solutions</li>
            </ul>
            <p>
              Our services are protected under U.S. Patent No. 10,290,222 and
              other intellectual property rights.
            </p>
          </CardContent>
        </Card>

        {/* User Accounts */}
        <Card className="elite-card gotham-glow mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-glow">
              3. User Accounts and Responsibilities
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-bold mb-2">Account Security</h3>
              <p>
                You are responsible for maintaining the confidentiality of your
                account credentials and for all activities under your account.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Acceptable Use</h3>
              <p>You agree not to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>Use our services for illegal activities</li>
                <li>Attempt to reverse engineer our AI systems</li>
                <li>Share your account with unauthorized users</li>
                <li>Violate intellectual property rights</li>
                <li>
                  Use our services to create competing AI platforms without
                  licensing
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Billing and Subscriptions */}
        <Card className="elite-card gotham-glow mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-glow">
              4. Billing and Subscriptions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-bold mb-2">Subscription Plans</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <ul className="space-y-1">
                    <li>• Free Trial: 7 days</li>
                    <li>• Unlimited: $27/month</li>
                    <li>• PartnerTech: $97/month</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-1">
                    <li>• Pro Suite: $297/month</li>
                    <li>• Full Pro: $497/month</li>
                    <li>• White Label: $1500+/month</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-2">Payment Terms</h3>
              <p>
                All payments are processed securely through Stripe.
                Subscriptions auto-renew unless cancelled. You may cancel at any
                time without penalty.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Refund Policy</h3>
              <p>
                We offer a 30-day money-back guarantee for all paid plans. No
                questions asked.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Intellectual Property */}
        <Card className="elite-card border-primary/30 mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-glow flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              5. Intellectual Property Rights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-bold mb-2">Our IP</h3>
              <p>
                All Saint Vision Group intellectual property, including HACP™
                technology, SaintSal™ branding, and related patents, remain our
                exclusive property.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Your Content</h3>
              <p>
                You retain ownership of content you submit. By using our
                services, you grant us a limited license to process your content
                to provide our services.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">DMCA Policy</h3>
              <p>
                We respect intellectual property rights. If you believe your
                copyrighted work has been infringed, contact us at
                legal@saintvisional.com.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* AI Disclosure */}
        <Card className="elite-card border-blue-500/30 mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-glow">
              6. AI Technology Disclosure
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-bold mb-2">What SaintSal™ Is</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>An adaptive AI assistant using HACP™ technology</li>
                <li>Designed to escalate help based on user needs</li>
                <li>Emotionally intelligent and context-aware</li>
                <li>Connected to CRM and business tools when authorized</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">What SaintSal™ Is NOT</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>A replacement for licensed professionals</li>
                <li>A surveillance or tracking tool</li>
                <li>A black-box AI without human oversight</li>
                <li>Medical, legal, or financial advice provider</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Limitation of Liability */}
        <Card className="elite-card border-orange-500/30 mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-glow flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-400" />
              7. Limitation of Liability
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              <strong>
                SAINT VISION GROUP LLC SHALL NOT BE LIABLE FOR ANY INDIRECT,
                INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
                INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE,
                GOODWILL, OR OTHER INTANGIBLE LOSSES.
              </strong>
            </p>
            <p>
              Our total liability to you for any damages shall not exceed the
              amount you paid us in the 12 months preceding the claim.
            </p>
          </CardContent>
        </Card>

        {/* Termination */}
        <Card className="elite-card gotham-glow mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-glow">8. Termination</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Either party may terminate these terms at any time. Upon
              termination:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Your access to our services will cease</li>
              <li>We will delete your data according to our Privacy Policy</li>
              <li>Provisions regarding IP and liability will survive</li>
            </ul>
          </CardContent>
        </Card>

        {/* Governing Law */}
        <Card className="elite-card gotham-glow mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-glow">
              9. Governing Law and Jurisdiction
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              These terms are governed by Delaware law. Any disputes will be
              resolved in Delaware courts or through binding arbitration.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="elite-card bg-primary/5 border-primary/30">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-glow">
              Questions About These Terms?
            </h3>
            <p className="text-muted-foreground mb-6">
              We're here to help clarify anything you need to know.
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Legal:</strong> legal@saintvisional.com
              </p>
              <p>
                <strong>Support:</strong> support@saintvisional.com
              </p>
              <p>
                <strong>Business:</strong> partners@saintvisional.com
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>
            © 2025 Saint Vision Group LLC. Protected under U.S. Patent No.
            10,290,222
          </p>
          <div className="mt-4 space-x-4">
            <Link
              to="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/hacp"
              className="hover:text-foreground transition-colors"
            >
              HACP™ Patent
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import {
  ArrowLeft,
  Shield,
  Brain,
  Zap,
  Crown,
  Award,
  Lock,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HACP() {
  return (
    <div className="min-h-screen bg-background charcoal-depth gold-particles">
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

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-6 bg-primary/10 border-primary/40"
          >
            <Crown className="w-3 h-3 mr-1" />
            U.S. Patent No. 10,290,222
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-glow">
            <span className="gold-shimmer bg-clip-text text-transparent">
              HACP��
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Human-AI Connection Protocol
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The patented adaptive intelligence framework powering every Saint
            Vision interface.
            <strong>
              {" "}
              This isn't just AI. It's emotional AI that responds with
              awareness.
            </strong>
          </p>
        </div>

        {/* Patent Overview */}
        <Card className="elite-card gotham-glow mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-glow flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              Patent Protection Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">Patent Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Patent Number:
                    </span>
                    <span className="font-bold">U.S. 10,290,222</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Issued:</span>
                    <span className="font-bold">May 2019</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Title:</span>
                    <span className="font-bold">
                      Interactive Tutorial with Integrated Escalating Prompts
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span className="font-bold text-green-400">
                      Fully Enforceable
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Protected Territory</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>Software & UI Systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>Educational Platforms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>Healthcare Applications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>Immersive Coaching Systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>AR/VR Interfaces</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What is HACP */}
        <Card className="elite-card gotham-glow mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-glow flex items-center gap-2">
              <Brain className="w-6 h-6 text-primary" />
              What is HACP™?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg">
              The Human-AI Connection Protocol (HACP™) is the core adaptive
              intelligence framework that powers every Saint Vision interface —
              from SaintSal's coaching flows to immersive therapy apps,
              onboarding flows, PartnerTech routing, and executive dashboards.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4 text-primary">
                  HACP Analyzes
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span>User ability & skill level</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span>Emotional state & frustration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span>Task complexity & timing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span>Dynamic feedback loops</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4 text-primary">
                  HACP Responds Via
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-blue-400" />
                    <span>Escalating prompts (hint → cue → demo)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-blue-400" />
                    <span>Context-aware persona shifts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-blue-400" />
                    <span>Multimodal inputs & outputs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-blue-400" />
                    <span>Adaptive UI transitions</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Core Innovation */}
        <Card className="elite-card bg-primary/5 border-primary/30 mb-12">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-glow">
              🧬 Why This Patent is Different
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-background/50 rounded-lg">
                <h4 className="text-lg font-bold mb-3 text-primary">
                  If User Does Well
                </h4>
                <p className="text-sm text-muted-foreground">
                  HACP backs off and reduces guidance
                </p>
              </div>
              <div className="p-6 bg-background/50 rounded-lg">
                <h4 className="text-lg font-bold mb-3 text-primary">
                  If User Hesitates
                </h4>
                <p className="text-sm text-muted-foreground">
                  HACP ramps up assistance and support
                </p>
              </div>
              <div className="p-6 bg-background/50 rounded-lg">
                <h4 className="text-lg font-bold mb-3 text-primary">
                  If User Fails
                </h4>
                <p className="text-sm text-muted-foreground">
                  HACP transforms, shifts character, takes control
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-lg font-bold text-primary">
                💥 This escalation logic is now patented, protected, and built
                into every SaintSal-powered product.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Where It Lives */}
        <Card className="elite-card gotham-glow mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-glow">
              🚀 Where HACP™ Lives Today
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "SaintSal™ Chat Engine",
                "PartnerTech.ai CRM Console",
                "Athena.ai Legacy Careflows",
                "SVTTeach.ai Learning Panels",
                "EbyTech™ FinTech Trainers",
                "SVG Onboarding Interface",
                "Client Companion Systems",
                "DualBot™ Console",
              ].map((system, index) => (
                <div
                  key={index}
                  className="p-4 bg-muted/20 rounded-lg text-center"
                >
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Brain className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-sm font-medium">{system}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Commercial Value */}
        <Card className="elite-card border-green-500/30 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-glow">
              📈 Commercial Significance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4 text-green-400">
                  Current Applications
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>📊 Enterprise CRM flow escalation</li>
                  <li>🧠 24/7 onboarding + investor prep</li>
                  <li>🏥 Therapy-ready deployments</li>
                  <li>🧾 Educational market integration</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4 text-green-400">
                  Licensing Opportunities
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>💰 $10M–$75M royalty base</li>
                  <li>🥽 AR/VR provider licensing</li>
                  <li>📚 EdTech platform integration</li>
                  <li>⚕️ HealthTech partnerships</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Legal Standing */}
        <Card className="elite-card border-red-500/30 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-glow flex items-center gap-2">
              <Lock className="w-6 h-6 text-red-400" />
              Legal Standing & Enforcement Power
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4 text-green-400">
                  Strengths
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span>No prior art conflicts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span>Passed post-Alice software review</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span>Sensor-based escalation defensible</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span>Virtual agent flow protected</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4 text-red-400">
                  Infringement Risk Areas
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 text-red-400">⚠️</span>
                    <span>Systems that escalate help</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 text-red-400">⚠️</span>
                    <span>User performance tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 text-red-400">⚠️</span>
                    <span>Dynamic AI assistants</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 text-red-400">⚠️</span>
                    <span>Hint → cue → guidance flows</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tagline */}
        <Card className="elite-card bg-primary/5 border-primary/30">
          <CardContent className="p-8 text-center">
            <h3 className="text-3xl font-bold mb-4 text-glow">
              🏆 For Investors & Partners
            </h3>
            <p className="text-2xl font-bold text-primary mb-4">
              "HACP™ isn't AI help. It's the reason users stay, understand, and
              succeed."
            </p>
            <p className="text-muted-foreground">
              You're not running a bot. You're running a patented transformation
              engine that learns as it leads.
            </p>
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
              to="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

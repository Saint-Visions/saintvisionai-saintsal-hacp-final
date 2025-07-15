import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  MessageCircle,
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  BarChart3,
  Zap,
  Crown,
  Building2,
  Target,
  Rocket,
  Shield,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen relative overflow-hidden charcoal-depth gold-particles">
      {/* Cinematic Professional Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F8155e04eb6064174a0cb82e2eecf77b6')`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.15,
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80"></div>

      <Sidebar />

      {/* Main Content */}
      <div className="md:ml-96 p-6 relative z-10">
        <div className="max-w-7xl mx-auto cinematic-fade">
          {/* Header with Large SaintSal Branding */}
          <div className="mb-12 text-center">
            <div className="mb-6">
              <h1 className="text-8xl font-bold mb-4 text-glow">
                <span className="text-primary gold-shimmer bg-clip-text text-transparent">
                  SAINT
                </span>
                <span className="text-primary gold-shimmer bg-clip-text text-transparent">
                  SAL
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                AI ENTERPRISE COMMAND CENTER
              </p>
            </div>

            {/* Welcome Message */}
            <Card className="max-w-2xl mx-auto elite-card gotham-glow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/23b227793103accd33c7649ebabb0572cddb55c1?width=2048"
                    alt="SaintSal"
                    className="w-12 h-12 rounded-lg"
                  />
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-primary">
                      Welcome Back, Saint
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Divine AI execution platform • Cookin' Knowledge
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Elite Colored Module Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* SaintVision.AI Module - Yellow */}
            <Card className="bg-gradient-to-br from-yellow-500 to-yellow-600 border-none text-black hover:scale-105 transition-all duration-300 cursor-pointer gotham-glow hover:animate-pulse">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Brain className="w-8 h-8" />
                  <Badge className="bg-black/20 text-black">AI</Badge>
                </div>
                <h3 className="text-xl font-bold mb-2">SaintVision.AI™</h3>
                <p className="text-sm opacity-90 mb-3">Dual AI Console</p>
                <div className="text-2xl font-bold">Active</div>
              </CardContent>
            </Card>

            {/* CRM Operations - Blue */}
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 border-none text-white hover:scale-105 transition-all duration-300 cursor-pointer gotham-glow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Users className="w-8 h-8" />
                  <Badge className="bg-white/20 text-white">CRM</Badge>
                </div>
                <h3 className="text-xl font-bold mb-2">GoHighLevel</h3>
                <p className="text-sm opacity-90 mb-3">Pipeline Management</p>
                <div className="text-2xl font-bold">247 Leads</div>
              </CardContent>
            </Card>

            {/* Revenue Operations - Green */}
            <Card className="bg-gradient-to-br from-green-500 to-green-600 border-none text-white hover:scale-105 transition-all duration-300 cursor-pointer gotham-glow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <DollarSign className="w-8 h-8" />
                  <Badge className="bg-white/20 text-white">REV</Badge>
                </div>
                <h3 className="text-xl font-bold mb-2">Revenue</h3>
                <p className="text-sm opacity-90 mb-3">Monthly Growth</p>
                <div className="text-2xl font-bold">$47K</div>
              </CardContent>
            </Card>

            {/* Enterprise Operations - Purple */}
            <Card className="bg-gradient-to-br from-purple-500 to-purple-600 border-none text-white hover:scale-105 transition-all duration-300 cursor-pointer gotham-glow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Crown className="w-8 h-8" />
                  <Badge className="bg-white/20 text-white">ELITE</Badge>
                </div>
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <p className="text-sm opacity-90 mb-3">Client Success</p>
                <div className="text-2xl font-bold">97%</div>
              </CardContent>
            </Card>
          </div>

          {/* PartnerTech.ai Section */}
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2">
              <Card className="bg-gradient-to-r from-orange-500/20 to-pink-500/20 border-orange-500/30 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/23b227793103accd33c7649ebabb0572cddb55c1?width=2048"
                      alt="PartnerTech"
                      className="w-16 h-16 rounded-2xl"
                    />
                    <div>
                      <CardTitle className="text-3xl font-bold mb-2">
                        <span className="gold-shimmer bg-clip-text text-transparent">
                          PartnerTech.ai
                        </span>
                      </CardTitle>
                      <CardDescription className="text-lg">
                        Powered by SAINTSAL™ • CookinKnowledge
                      </CardDescription>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    The only AI-driven Sales platform in the accelerated action
                    you get instant results NOT just another GOTTA QUIT AI
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <div className="text-2xl font-bold text-primary">$27</div>
                      <div className="text-sm text-muted-foreground">
                        Unlimited
                      </div>
                    </div>
                    <div className="text-center p-4 bg-blue-500/10 rounded-lg">
                      <div className="text-2xl font-bold text-blue-400">
                        $97
                      </div>
                      <div className="text-sm text-muted-foreground">
                        PartnerTech
                      </div>
                    </div>
                    <div className="text-center p-4 bg-green-500/10 rounded-lg">
                      <div className="text-2xl font-bold text-green-400">
                        $297
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Pro Suite
                      </div>
                    </div>
                    <div className="text-center p-4 bg-purple-500/10 rounded-lg">
                      <div className="text-2xl font-bold text-purple-400">
                        $497
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Full Pro
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions Panel */}
            <Card className="bg-black/40 border-primary/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  className="w-full justify-start bg-primary/20 hover:bg-primary/30 border-primary/40"
                  variant="outline"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Launch AI Console
                </Button>
                <Button
                  className="w-full justify-start bg-blue-500/20 hover:bg-blue-500/30 border-blue-500/40"
                  variant="outline"
                >
                  <Building2 className="h-4 w-4 mr-2" />
                  CRM Dashboard
                </Button>
                <Button
                  className="w-full justify-start bg-green-500/20 hover:bg-green-500/30 border-green-500/40"
                  variant="outline"
                >
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Analytics Hub
                </Button>
                <Button
                  className="w-full justify-start bg-purple-500/20 hover:bg-purple-500/30 border-purple-500/40"
                  variant="outline"
                >
                  <Crown className="h-4 w-4 mr-2" />
                  Enterprise Portal
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Dashboard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Operations Dashboard */}
            <Card className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 border-pink-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Activity className="w-8 h-8 text-pink-400" />
                  <div>
                    <h3 className="text-xl font-bold">Operations</h3>
                    <p className="text-sm text-muted-foreground">
                      Live Dashboard
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Active Sessions</span>
                    <span className="font-bold text-pink-400">156</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Response Time</span>
                    <span className="font-bold text-green-400">1.2s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Success Rate</span>
                    <span className="font-bold text-primary">98%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lead Generation */}
            <Card className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-blue-400" />
                  <div>
                    <h3 className="text-xl font-bold">Lead Gen</h3>
                    <p className="text-sm text-muted-foreground">
                      Conversion Hub
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">New Leads</span>
                    <span className="font-bold text-blue-400">34</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Qualified</span>
                    <span className="font-bold text-green-400">28</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Conversion</span>
                    <span className="font-bold text-primary">82%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Enterprise Growth */}
            <Card className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Rocket className="w-8 h-8 text-green-400" />
                  <div>
                    <h3 className="text-xl font-bold">Growth</h3>
                    <p className="text-sm text-muted-foreground">
                      Enterprise Scale
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">MRR Growth</span>
                    <span className="font-bold text-green-400">+47%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Client LTV</span>
                    <span className="font-bold text-primary">$12.5K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Retention</span>
                    <span className="font-bold text-green-400">94%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

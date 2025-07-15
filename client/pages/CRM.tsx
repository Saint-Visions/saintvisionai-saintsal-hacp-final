import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Database,
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  Crown,
  ExternalLink,
  RefreshCw,
  Settings,
} from "lucide-react";

export default function CRM() {
  return (
    <div className="min-h-screen relative overflow-hidden charcoal-depth gold-particles">
      {/* Professional Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F8155e04eb6064174a0cb82e2eecf77b6')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.02,
        }}
      />
      <div className="absolute inset-0 bg-background/96" />

      <Sidebar />

      {/* Main Content */}
      <div className="md:ml-96 p-6 relative z-10">
        <div className="max-w-7xl mx-auto cinematic-fade">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center gotham-glow">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-glow">
                      CRM Command Center
                    </h1>
                    <p className="text-muted-foreground">
                      GoHighLevel Integration • Pipeline Management • Lead
                      Intelligence
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Badge
                    variant="outline"
                    className="bg-green-500/10 border-green-500/40 text-green-400"
                  >
                    <Activity className="w-3 h-3 mr-1" />
                    Live Sync
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-blue-500/10 border-blue-500/40 text-blue-400"
                  >
                    <Crown className="w-3 h-3 mr-1" />
                    $97+ Plan
                  </Badge>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh
                </Button>
                <Button variant="outline" size="sm">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
              </div>
            </div>
          </div>

          {/* Stats Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="elite-card gotham-glow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Active Leads
                    </p>
                    <p className="text-2xl font-bold text-primary">247</p>
                  </div>
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div className="mt-2 flex items-center text-xs text-green-400">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +12% this week
                </div>
              </CardContent>
            </Card>

            <Card className="elite-card gotham-glow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Pipeline Value
                    </p>
                    <p className="text-2xl font-bold text-primary">$87.5K</p>
                  </div>
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <div className="mt-2 flex items-center text-xs text-green-400">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +25% this month
                </div>
              </CardContent>
            </Card>

            <Card className="elite-card gotham-glow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Conversion Rate
                    </p>
                    <p className="text-2xl font-bold text-primary">82%</p>
                  </div>
                  <Activity className="w-8 h-8 text-primary" />
                </div>
                <div className="mt-2 flex items-center text-xs text-green-400">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Industry leading
                </div>
              </CardContent>
            </Card>

            <Card className="elite-card gotham-glow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Closed Deals
                    </p>
                    <p className="text-2xl font-bold text-primary">34</p>
                  </div>
                  <Crown className="w-8 h-8 text-primary" />
                </div>
                <div className="mt-2 flex items-center text-xs text-green-400">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  This month
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main CRM Interface */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* GoHighLevel Embed */}
            <Card className="lg:col-span-2 elite-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-glow">
                  <Database className="w-5 h-5 text-primary" />
                  GoHighLevel Dashboard
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="bg-green-500/10 border-green-500/40 text-green-400"
                  >
                    Connected
                  </Badge>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Open Full CRM
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {/* GHL Embed Iframe */}
                <div className="w-full h-96 bg-muted/20 rounded-lg border border-border/50 flex items-center justify-center">
                  <div className="text-center">
                    <Database className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">
                      GoHighLevel Integration
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Your CRM dashboard will load here
                    </p>
                    <Button className="bg-brand-gradient hover:opacity-90">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Launch Full CRM
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions & Pipeline */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card className="elite-card gotham-glow">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start bg-blue-500/20 hover:bg-blue-500/30 border-blue-500/40">
                    <Users className="w-4 h-4 mr-2" />
                    Add New Lead
                  </Button>
                  <Button className="w-full justify-start bg-green-500/20 hover:bg-green-500/30 border-green-500/40">
                    <Activity className="w-4 h-4 mr-2" />
                    Update Pipeline
                  </Button>
                  <Button className="w-full justify-start bg-purple-500/20 hover:bg-purple-500/30 border-purple-500/40">
                    <Database className="w-4 h-4 mr-2" />
                    Sync Data
                  </Button>
                  <Button className="w-full justify-start bg-primary/20 hover:bg-primary/30 border-primary/40">
                    <Crown className="w-4 h-4 mr-2" />
                    View Reports
                  </Button>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="elite-card">
                <CardHeader>
                  <CardTitle className="text-lg">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3 p-3 bg-green-500/10 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div>
                        <p className="font-medium">Deal Closed</p>
                        <p className="text-xs text-muted-foreground">
                          Enterprise Client - $12,500
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-500/10 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div>
                        <p className="font-medium">New Lead</p>
                        <p className="text-xs text-muted-foreground">
                          SaaS Startup - Qualified
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div>
                        <p className="font-medium">Follow-up Set</p>
                        <p className="text-xs text-muted-foreground">
                          3 prospects scheduled
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Pipeline Overview */}
          <Card className="mt-6 elite-card">
            <CardHeader>
              <CardTitle className="text-xl text-glow">
                Sales Pipeline
              </CardTitle>
              <p className="text-muted-foreground">
                Real-time pipeline tracking with HACP™ intelligence
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {[
                  {
                    stage: "Prospects",
                    count: 45,
                    value: "$125K",
                    color: "blue",
                  },
                  {
                    stage: "Qualified",
                    count: 28,
                    value: "$87K",
                    color: "yellow",
                  },
                  {
                    stage: "Proposal",
                    count: 12,
                    value: "$45K",
                    color: "orange",
                  },
                  {
                    stage: "Negotiation",
                    count: 8,
                    value: "$32K",
                    color: "purple",
                  },
                  {
                    stage: "Closed",
                    count: 34,
                    value: "$156K",
                    color: "green",
                  },
                ].map((stage, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border border-${stage.color}-500/30 bg-${stage.color}-500/10`}
                  >
                    <h3 className="font-medium text-sm mb-2">{stage.stage}</h3>
                    <p className="text-2xl font-bold">{stage.count}</p>
                    <p className="text-xs text-muted-foreground">
                      {stage.value}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

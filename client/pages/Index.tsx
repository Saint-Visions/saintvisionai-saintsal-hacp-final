import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Users, BarChart3, Smartphone } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Professional Background Photo - Using the uploaded image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F903fb238899e411f81a3d696681c038e?format=webp&width=800')`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="max-w-md w-full space-y-6">
            {/* Quote Bubble */}
            <div className="bg-black/90 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/40 relative">
              <div className="text-center">
                <p className="text-yellow-400 text-lg font-medium mb-1">
                  "SaintSal" AI doesn't just answer.
                </p>
                <p className="text-yellow-400 text-lg font-medium mb-1">
                  It adapts. It empowers. It becomes your...
                </p>
                <p className="text-yellow-400 text-2xl font-bold">
                  GOTTA GUY™!
                </p>
              </div>
              {/* Speech bubble tail */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-yellow-400/40"></div>
              </div>
            </div>

            {/* Logo and Branding */}
            <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/30 text-center space-y-4">
              <div className="flex items-center justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/23b227793103accd33c7649ebabb0572cddb55c1?width=2048"
                  alt="SAINTSAL Circuit Logo"
                  className="w-16 h-16"
                />
              </div>
              <div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">
                  SAINTSAL™
                </div>
                <div className="text-sm text-yellow-400">Cookin Knowledge</div>
              </div>
              <div className="text-4xl font-bold text-yellow-400">
                SaintVisionAI™
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4">
                <Link to="/signup" className="w-full">
                  <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-xl text-lg">
                    🔥 Start Cooking
                  </Button>
                </Link>

                <div className="grid grid-cols-2 gap-3">
                  <Link to="/console">
                    <Button
                      variant="outline"
                      className="w-full border-blue-500 text-blue-400 hover:bg-blue-500/10 bg-blue-900/50"
                    >
                      💬 AI Chat
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button
                      variant="outline"
                      className="w-full border-green-500 text-green-400 hover:bg-green-500/10 bg-green-900/50"
                    >
                      📱 Sign In
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Quick Access */}
              <div className="pt-4">
                <div className="text-yellow-400 text-sm font-medium mb-2">
                  Quick Access:
                </div>
                <div className="flex justify-center space-x-4 text-xs">
                  <Link
                    to="/pricing"
                    className="text-red-400 hover:text-red-300"
                  >
                    🚨 Pricing
                  </Link>
                  <Link
                    to="/setup"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    🛠️ Setup
                  </Link>
                  <Link
                    to="/help"
                    className="text-yellow-400 hover:text-yellow-300"
                  >
                    📖 Help
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What's Inside These Walls */}
        <div className="p-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-yellow-400 text-xl font-bold mb-2">
                🚀 What's Inside These Walls
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-blue-900/90 border-blue-500/50 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Search className="w-5 h-5 text-blue-400" />
                    <CardTitle className="text-blue-400 text-sm font-bold">
                      Lead Discovery
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-blue-300 text-xs">AI-powered lookup</p>
                </CardContent>
              </Card>

              <Card className="bg-green-900/90 border-green-500/50 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-green-400" />
                    <CardTitle className="text-green-400 text-sm font-bold">
                      Referral Network
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-green-300 text-xs">Partner tracking</p>
                </CardContent>
              </Card>

              <Card className="bg-purple-900/90 border-purple-500/50 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="w-5 h-5 text-purple-400" />
                    <CardTitle className="text-purple-400 text-sm font-bold">
                      AI Deal Analysis
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-purple-300 text-xs">GPT-4 insights</p>
                </CardContent>
              </Card>

              <Card className="bg-red-900/90 border-red-500/50 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Smartphone className="w-5 h-5 text-red-400" />
                    <CardTitle className="text-red-400 text-sm font-bold">
                      Mobile Export
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-red-300 text-xs">iOS/Android apps</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Elite AI Sanctuary Footer */}
        <footer className="p-6 text-center">
          <div className="space-y-2">
            <div className="text-yellow-400 font-bold text-lg">
              ✨ Elite AI Sanctuary • Ready for Saints
            </div>
            <div className="text-gray-400 text-sm">
              Azure Cognitive Services + OpenAI GPT-4o + Premium Infrastructure
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

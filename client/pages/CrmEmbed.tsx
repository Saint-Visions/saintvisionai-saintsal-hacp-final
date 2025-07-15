import { useState, useEffect } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GoldenAtmosphere } from "@/components/GoldenAtmosphere";
import {
  Database,
  ExternalLink,
  RefreshCw,
  Settings,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

export default function CrmEmbed() {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  // GHL URLs - configure these via environment variables
  const ghlBaseUrl =
    process.env.NEXT_PUBLIC_GHL_BASE_URL || "https://app.gohighlevel.com";
  const ghlLocationId = process.env.NEXT_PUBLIC_GHL_LOCATION_ID;
  const ghlEmbedUrl = ghlLocationId
    ? `${ghlBaseUrl}/v2/location/${ghlLocationId}/dashboard`
    : `${ghlBaseUrl}/dashboard`;

  useEffect(() => {
    // Set fallback timeout if iframe doesn't load
    const timeout = setTimeout(() => {
      if (!iframeLoaded) {
        setShowFallback(true);
      }
    }, 10000); // 10 second timeout

    return () => clearTimeout(timeout);
  }, [iframeLoaded]);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };

  const handleRefresh = () => {
    setIframeLoaded(false);
    setShowFallback(false);

    // Force iframe reload
    const iframe = document.getElementById("crm-iframe") as HTMLIFrameElement;
    if (iframe) {
      iframe.src = iframe.src;
    }
  };

  const openInNewTab = () => {
    window.open(ghlEmbedUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen relative overflow-hidden golden-workspace golden-dust-settle">
      {/* Golden Atmosphere */}
      <GoldenAtmosphere intensity="subtle" />

      <Sidebar />

      {/* Main Content */}
      <div className="md:ml-96 p-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-glow">
                      CRM Dashboard
                    </h1>
                    <p className="text-muted-foreground">
                      GoHighLevel Integration • PartnerTech.ai CRM
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Badge
                    variant="outline"
                    className={`${
                      iframeLoaded
                        ? "bg-green-500/10 border-green-500/40 text-green-400"
                        : "bg-yellow-500/10 border-yellow-500/40 text-yellow-400"
                    }`}
                  >
                    {iframeLoaded ? (
                      <>
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Connected
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-3 h-3 mr-1" />
                        Loading
                      </>
                    )}
                  </Badge>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={handleRefresh}>
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh
                </Button>
                <Button variant="outline" size="sm" onClick={openInNewTab}>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open in New Tab
                </Button>
              </div>
            </div>
          </div>

          {/* CRM Iframe Container */}
          <Card className="elite-card overflow-hidden">
            <CardContent className="p-0">
              {!showFallback ? (
                <div className="relative w-full h-[calc(100vh-200px)]">
                  <iframe
                    id="crm-iframe"
                    src={ghlEmbedUrl}
                    className="w-full h-full border-0 rounded-lg"
                    title="GoHighLevel CRM Dashboard"
                    onLoad={handleIframeLoad}
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                    loading="lazy"
                  />

                  {/* Loading overlay */}
                  {!iframeLoaded && (
                    <div className="absolute inset-0 bg-muted/20 flex items-center justify-center rounded-lg">
                      <div className="text-center">
                        <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4" />
                        <p className="text-sm text-muted-foreground">
                          Loading CRM Dashboard...
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                /* Fallback Content */
                <div className="p-8 text-center">
                  <AlertCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    CRM Dashboard Unavailable
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    The CRM iframe could not be loaded. This may be due to
                    network issues or security restrictions.
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Button onClick={handleRefresh}>
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Try Again
                    </Button>
                    <Button variant="outline" onClick={openInNewTab}>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Open GoHighLevel
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Quick Navigation */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="elite-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-sm"
                  onClick={() =>
                    window.open(`${ghlBaseUrl}/contacts`, "_blank")
                  }
                >
                  View Contacts
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-sm"
                  onClick={() =>
                    window.open(`${ghlBaseUrl}/opportunities`, "_blank")
                  }
                >
                  Manage Opportunities
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-sm"
                  onClick={() =>
                    window.open(`${ghlBaseUrl}/calendar`, "_blank")
                  }
                >
                  Calendar
                </Button>
              </CardContent>
            </Card>

            <Card className="elite-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Integration Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span>GHL Connection</span>
                    <Badge
                      variant="outline"
                      className="bg-green-500/10 text-green-400 border-green-500/40"
                    >
                      Active
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Webhook Status</span>
                    <Badge
                      variant="outline"
                      className="bg-green-500/10 text-green-400 border-green-500/40"
                    >
                      Live
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Data Sync</span>
                    <Badge
                      variant="outline"
                      className="bg-green-500/10 text-green-400 border-green-500/40"
                    >
                      Real-time
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="elite-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-sm"
                  onClick={() =>
                    window.open("https://help.gohighlevel.com", "_blank")
                  }
                >
                  GHL Documentation
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-sm"
                  onClick={() => window.open("/help", "_self")}
                >
                  Platform Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

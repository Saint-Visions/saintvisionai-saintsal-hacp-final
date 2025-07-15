import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: "#10161C" }}
    >
      {/* Dark background with gold particles effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent animate-pulse"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="text-center max-w-md space-y-8">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/23b227793103accd33c7649ebabb0572cddb55c1?width=2048"
              alt="SAINTSAL Logo"
              className="w-20 h-20"
            />
          </div>

          {/* 404 Content */}
          <div className="space-y-6">
            <h1
              className="text-8xl font-bold"
              style={{
                color: "#f9d878",
                fontFamily: "Gotham, Inter, sans-serif",
              }}
            >
              404
            </h1>

            <div className="space-y-3">
              <h2
                className="text-2xl font-semibold text-white"
                style={{ fontFamily: "Gotham, Inter, sans-serif" }}
              >
                Divine Path Not Found
              </h2>
              <p
                className="text-gray-400 text-lg"
                style={{ fontFamily: "Gotham, Inter, sans-serif" }}
              >
                The wisdom you seek exists elsewhere in our sanctuary.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 pt-6">
              <Link to="/" className="w-full">
                <Button
                  className="w-full text-lg font-semibold"
                  style={{
                    backgroundColor: "#f9d878",
                    color: "#10161C",
                    fontWeight: "600",
                    padding: "12px 24px",
                    borderRadius: "12px",
                  }}
                >
                  🏠 Return to Sanctuary
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
                <Link to="/dashboard">
                  <Button
                    variant="outline"
                    className="w-full border-purple-500 text-purple-400 hover:bg-purple-500/10 bg-purple-900/50"
                  >
                    📊 Dashboard
                  </Button>
                </Link>
              </div>
            </div>

            {/* Error details for debugging */}
            {location.pathname && (
              <div className="pt-6 text-xs text-gray-500">
                <p>
                  Path attempted:{" "}
                  <code className="bg-gray-800 px-2 py-1 rounded">
                    {location.pathname}
                  </code>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full p-6 text-center">
        <p
          className="text-sm"
          style={{
            color: "#f9d878",
            opacity: "0.6",
            fontFamily: "Gotham, Inter, sans-serif",
          }}
        >
          ✨ Elite AI Sanctuary • SaintVision AI
        </p>
      </footer>
    </div>
  );
};

export default NotFound;

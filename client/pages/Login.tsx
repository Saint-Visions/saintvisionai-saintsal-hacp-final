import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const { signIn, signUp, user } = useAuth();

  const isSignup = location.pathname === "/signup";
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      if (isSignup) {
        // Validation
        if (password !== confirmPassword) {
          setError("Passwords do not match");
          setIsLoading(false);
          return;
        }

        if (password.length < 6) {
          setError("Password must be at least 6 characters");
          setIsLoading(false);
          return;
        }

        const { error } = await signUp(email, password, fullName);
        if (error) {
          setError(error.message);
        } else {
          setSuccess(
            "Account created! Check your email to verify your account.",
          );
        }
      } else {
        const { error } = await signIn(email, password);
        if (error) {
          setError(error.message);
        } else {
          navigate("/dashboard");
        }
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: "#10161C" }}
    >
      {/* Subtle Gold Dust Particles - Facility Atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(2px 2px at 20px 30px, rgba(255,215,0,0.1), transparent),
            radial-gradient(1px 1px at 40px 70px, rgba(255,215,0,0.08), transparent),
            radial-gradient(1px 1px at 90px 40px, rgba(255,215,0,0.06), transparent),
            radial-gradient(2px 2px at 130px 80px, rgba(255,215,0,0.1), transparent),
            radial-gradient(1px 1px at 160px 30px, rgba(255,215,0,0.05), transparent)
          `,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 100px",
          animation: "goldDustFloat 20s ease-in-out infinite",
          opacity: 0.3,
        }}
      />

      {/* Facility Welcome Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent animate-pulse"></div>
      </div>

      <div
        className="relative z-10 min-h-screen flex items-center justify-center p-6"
        style={{
          backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F7d4d645a636d471a8c748e4565e96c6a?format=webp&width=800')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="w-full max-w-md space-y-6">
          {/* Back to home */}
          <Link
            to="/"
            className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Sanctuary
          </Link>

          {/* Main Card */}
          <Card
            className="bg-black/70 backdrop-blur-sm border text-center"
            style={{
              borderColor: "rgba(255,215,0,0.4)",
              boxShadow:
                "0 0 30px rgba(255,215,0,0.3), 0 0 60px rgba(255,215,0,0.1), inset 0 1px 0 rgba(255,215,0,0.2)",
              transition: "all 0.3s ease",
            }}
          >
            <CardHeader className="text-center space-y-4">
              <div className="flex items-center justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/23b227793103accd33c7649ebabb0572cddb55c1?width=2048"
                  alt="SAINTSAL Logo"
                  className="w-16 h-16"
                />
              </div>
              <div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">
                  SAINTSAL™
                </div>
                <div className="text-sm text-amber-400">Cookin Knowledge</div>
              </div>
              <CardTitle
                className="text-2xl text-amber-400"
                style={{ fontFamily: "Gotham, Inter, sans-serif" }}
              >
                {isSignup ? "Join the Sanctuary" : "Welcome Back"}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Error/Success Messages */}
              {error && (
                <Alert className="border-red-500/50 bg-red-900/50">
                  <AlertDescription className="text-red-200">
                    {error}
                  </AlertDescription>
                </Alert>
              )}

              {success && (
                <Alert className="border-green-500/50 bg-green-900/50">
                  <AlertDescription className="text-green-200">
                    {success}
                  </AlertDescription>
                </Alert>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {isSignup && (
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-gray-300">
                      Full Name
                    </Label>
                    <Input
                      id="fullName"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="bg-gray-900/50 border-gray-600 text-white focus:border-amber-400"
                      placeholder="Enter your full name"
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-gray-900/50 border-gray-600 text-white focus:border-amber-400"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-300">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="bg-gray-900/50 border-gray-600 text-white focus:border-amber-400 pr-10"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {isSignup && (
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-gray-300">
                      Confirm Password
                    </Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="bg-gray-900/50 border-gray-600 text-white focus:border-amber-400"
                      placeholder="Confirm your password"
                    />
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full text-lg font-semibold"
                  style={{
                    backgroundColor: "#f9d878",
                    color: "#10161C",
                    fontWeight: "600",
                    padding: "12px 24px",
                    borderRadius: "12px",
                  }}
                >
                  {isLoading
                    ? "Processing..."
                    : isSignup
                      ? "🚀 Start Cooking"
                      : "🔥 Enter Sanctuary"}
                </Button>
              </form>

              {/* Toggle between login/signup */}
              <div className="text-center">
                <p className="text-gray-400 text-sm">
                  {isSignup
                    ? "Already have an account?"
                    : "New to SaintVision?"}
                </p>
                <Link
                  to={isSignup ? "/login" : "/signup"}
                  className="text-amber-400 hover:text-amber-300 text-sm font-medium"
                >
                  {isSignup ? "Sign In" : "Create Account"}
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center">
            <p
              className="text-xs"
              style={{
                color: "#f9d878",
                opacity: "0.6",
                fontFamily: "Gotham, Inter, sans-serif",
              }}
            >
              ✨ Elite AI Sanctuary • Protected by Divine Technology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

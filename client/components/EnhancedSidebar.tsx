import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Home,
  Brain,
  Building2,
  StickyNote,
  Zap,
  ImageIcon,
  Rocket,
  HelpCircle,
  Database,
  Crown,
  GraduationCap,
  TrendingUp,
  User,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const sidebarItems = [
  {
    icon: Home,
    label: "Main Dashboard",
    href: "/dashboard",
  },
  {
    icon: Brain,
    label: "My Companion",
    href: "/console",
    emoji: "🧠",
  },
  {
    icon: Building2,
    label: "My Business",
    href: "/business",
    emoji: "🏢",
  },
  {
    icon: StickyNote,
    label: "Sticky Notes",
    href: "/notes",
    emoji: "📝",
  },
  {
    icon: Zap,
    label: "AI Tools",
    href: "/ai-tools",
    emoji: "⚡",
  },
  {
    icon: ImageIcon,
    label: "Image Generator",
    href: "/image-generator",
    emoji: "🎨",
  },
  {
    icon: Rocket,
    label: "SVG Launchpad",
    href: "/svg-launchpad",
    emoji: "🚀",
  },
  {
    icon: HelpCircle,
    label: "Feedback & Help",
    href: "/help",
    emoji: "💬",
  },
  {
    icon: Database,
    label: "PartnerTech.ai CRM",
    href: "/crm",
    emoji: "💼",
  },
  {
    icon: Crown,
    label: "Client Portal",
    href: "/portal",
    emoji: "👑",
  },
  {
    icon: GraduationCap,
    label: "SVT Institute of AI (R + D)",
    href: "https://www.saintvisiontech.com",
    emoji: "🏛️",
  },
  {
    icon: TrendingUp,
    label: "Upgrade Tier",
    href: "/pricing",
    emoji: "⚡",
  },
  {
    icon: User,
    label: "My Account",
    href: "/account",
    emoji: "👋",
  },
  {
    icon: LogOut,
    label: "Logout",
    href: "/login",
    emoji: "👋",
  },
];

interface EnhancedSidebarProps {
  className?: string;
}

export function EnhancedSidebar({ className }: EnhancedSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-6 left-6 z-[60] md:hidden bg-black/80 backdrop-blur-md border border-primary/20 hover:bg-black/90 text-primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Main Sidebar Container - Fixed Full Height */}
      <div
        className={cn(
          "fixed left-0 top-0 h-screen w-full max-w-md transform transition-all duration-500 ease-out z-50",
          "bg-gradient-to-b from-charcoal/95 via-background/90 to-charcoal/98",
          "border-r-4 border-primary/30 shadow-2xl shadow-primary/10",
          "backdrop-blur-xl",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0 md:w-96",
          "overflow-hidden relative",
          className,
        )}
      >
        {/* Parallax Background Logo */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          {/* Main Background Logo - Cookin Knowledge */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fdafc9566f7024d569653262ee2b8370c?format=webp&width=800')`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />

          {/* Secondary decorative elements */}
          <div
            className="absolute top-20 right-8 w-32 h-32 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fc1d2460f47044e61bdd5379325a3ebbc?format=webp&width=800')`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              transform: `rotate(15deg) translateY(${scrollY * 0.05}px)`,
            }}
          />

          <div
            className="absolute bottom-32 left-8 w-24 h-24 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F6191544336ca47fa8faee62632eb68ca?format=webp&width=800')`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              transform: `rotate(-10deg) translateY(${scrollY * -0.03}px)`,
            }}
          />
        </div>

        {/* Gold Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-50 animate-pulse pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col h-full p-8">
          {/* Logo Section */}
          <div className="flex items-center gap-4 mb-12 pb-8 border-b border-primary/20">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-primary via-gold-shimmer to-warning rounded-3xl flex items-center justify-center shadow-2xl shadow-primary/20 elite-card">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fc1d2460f47044e61bdd5379325a3ebbc?format=webp&width=800"
                  alt="SaintVision AI Logo"
                  className="w-14 h-14 object-contain"
                />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-gold-shimmer rounded-3xl opacity-20 blur-lg" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground text-glow mb-1">
                SaintVisionAI™
              </h1>
              <p className="text-sm text-primary/80 font-medium tracking-wide">
                Cookin' Knowledge
              </p>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 space-y-4 overflow-y-auto scrollbar-hide">
            {sidebarItems.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.href;

              return (
                <Link key={index} to={item.href}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start text-left h-auto py-5 px-6 rounded-3xl",
                      "bg-gradient-to-r from-muted/40 to-muted/20 hover:from-muted/60 hover:to-muted/40",
                      "border border-muted-foreground/10 hover:border-primary/30",
                      "transition-all duration-300 ease-out",
                      "group relative overflow-hidden",
                      "backdrop-blur-md elite-card",
                      isActive &&
                        "bg-gradient-to-r from-primary/20 to-primary/10 border-primary/40 text-primary shadow-lg shadow-primary/10",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center gap-5 w-full relative z-10">
                      <div
                        className={cn(
                          "flex items-center justify-center w-8 h-8 rounded-xl",
                          "transition-all duration-300",
                          isActive
                            ? "text-primary bg-primary/10 shadow-lg shadow-primary/20"
                            : "text-muted-foreground group-hover:text-primary group-hover:bg-primary/5",
                        )}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span
                        className={cn(
                          "font-medium text-base flex-1 transition-all duration-300",
                          isActive
                            ? "text-primary font-semibold"
                            : "text-foreground group-hover:text-primary",
                        )}
                      >
                        {item.label}
                      </span>
                      {item.emoji && (
                        <span className="text-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                          {item.emoji}
                        </span>
                      )}
                    </div>

                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-3xl" />
                    )}

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                </Link>
              );
            })}
          </nav>

          {/* User Profile */}
          <div className="mt-8 pt-8 border-t border-primary/20">
            <div className="flex items-center gap-4 p-4 rounded-3xl bg-gradient-to-r from-muted/30 to-muted/10 border border-primary/20 elite-card">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-gold-shimmer rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-lg font-bold text-charcoal">AP</span>
              </div>
              <div className="flex-1">
                <p className="text-base font-semibold text-foreground">
                  Admin Panel
                </p>
                <p className="text-sm text-primary/70 font-medium">
                  Premium Account
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal/90 to-transparent pointer-events-none" />
      </div>
    </>
  );
}

export default EnhancedSidebar;

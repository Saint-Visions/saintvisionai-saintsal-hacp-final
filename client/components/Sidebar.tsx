import { useState } from "react";
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
  Clipboard,
} from "lucide-react";

const sidebarItems = [
  {
    icon: Home,
    label: "Main Dashboard",
    href: "/dashboard",
  },
  {
    icon: Brain,
    label: "AI Console",
    href: "/console",
    emoji: "🧠",
  },
  {
    icon: Database,
    label: "CRM Command",
    href: "/crm",
    emoji: "💼",
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
    icon: Crown,
    label: "Client Portal",
    href: "/portal",
    emoji: "👑",
  },
  {
    icon: GraduationCap,
    label: "SVT Institute (R&D)",
    href: "/institute",
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

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed left-0 top-0 h-full w-80 transform transition-transform duration-300 ease-in-out z-50",
          "bg-gradient-to-b from-background via-background to-muted/20",
          "border-4 border-warning rounded-3xl m-4",
          "shadow-2xl shadow-warning/20",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0",
          className,
        )}
      >
        <div className="flex flex-col h-full p-6">
          {/* Logo Section */}
          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-muted">
            <div className="w-16 h-16 bg-gradient-to-br from-warning to-orange-400 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-white">Sv</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">
                SaintVision AI™
              </h1>
              <p className="text-sm text-muted-foreground">Cookin' Knowledge</p>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 space-y-3 overflow-y-auto">
            {sidebarItems.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.href;

              return (
                <Link key={index} to={item.href}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start text-left h-auto py-4 px-6 rounded-2xl",
                      "bg-muted/60 hover:bg-muted/80 transition-all duration-200",
                      "border border-muted-foreground/20 hover:border-muted-foreground/40",
                      "group relative overflow-hidden",
                      isActive &&
                        "bg-primary/20 border-primary/40 text-primary hover:bg-primary/30",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center gap-4 w-full">
                      <div
                        className={cn(
                          "flex items-center justify-center w-6 h-6",
                          isActive ? "text-primary" : "text-muted-foreground",
                        )}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span
                        className={cn(
                          "font-medium text-sm flex-1",
                          isActive ? "text-primary" : "text-foreground",
                        )}
                      >
                        {item.label}
                      </span>
                      {item.emoji && (
                        <span className="text-sm opacity-80">{item.emoji}</span>
                      )}
                    </div>
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl" />
                    )}
                  </Button>
                </Link>
              );
            })}
          </nav>

          {/* User Profile */}
          <div className="mt-6 pt-6 border-t border-muted">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-muted-foreground">
                  AP
                </span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">
                  Admin Panel
                </p>
                <p className="text-xs text-muted-foreground">Premium Account</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

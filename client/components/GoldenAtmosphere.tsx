import React from "react";

interface GoldenAtmosphereProps {
  intensity?: "subtle" | "medium" | "strong";
  className?: string;
}

export const GoldenAtmosphere: React.FC<GoldenAtmosphereProps> = ({
  intensity = "subtle",
  className = "",
}) => {
  const intensityConfig = {
    subtle: {
      particles: 8,
      opacity: 0.25,
      glowOpacity: 0.08,
      animationDuration: "30s",
    },
    medium: {
      particles: 12,
      opacity: 0.35,
      glowOpacity: 0.12,
      animationDuration: "25s",
    },
    strong: {
      particles: 16,
      opacity: 0.45,
      glowOpacity: 0.18,
      animationDuration: "20s",
    },
  };

  const config = intensityConfig[intensity];

  return (
    <div className={`fixed inset-0 pointer-events-none z-[1] ${className}`}>
      {/* Soft Golden Backplate Glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 30% 20%, rgba(255, 215, 0, ${config.glowOpacity}) 0%, transparent 50%), 
                       radial-gradient(circle at 70% 80%, rgba(255, 180, 0, ${config.glowOpacity * 0.8}) 0%, transparent 60%),
                       radial-gradient(circle at 20% 70%, rgba(255, 215, 0, ${config.glowOpacity * 0.6}) 0%, transparent 40%)`,
        }}
      />

      {/* Floating Gold Dust Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: config.particles }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(255, 215, 0, ${config.opacity}) 0%, rgba(255, 180, 0, ${config.opacity * 0.7}) 70%, transparent 100%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `goldenFloat${i % 3} ${config.animationDuration} infinite linear`,
              animationDelay: `${Math.random() * 10}s`,
              boxShadow: `0 0 6px rgba(255, 215, 0, ${config.opacity * 2}), 0 0 12px rgba(255, 215, 0, ${config.opacity})`,
            }}
          />
        ))}
      </div>

      {/* Subtle Gold Rim Glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to right, rgba(255, 215, 0, ${config.glowOpacity * 0.3}) 0%, transparent 10%, transparent 90%, rgba(255, 215, 0, ${config.glowOpacity * 0.3}) 100%),
                       linear-gradient(to bottom, rgba(255, 215, 0, ${config.glowOpacity * 0.2}) 0%, transparent 15%, transparent 85%, rgba(255, 215, 0, ${config.glowOpacity * 0.2}) 100%)`,
        }}
      />

      <style jsx>{`
        @keyframes goldenFloat0 {
          0% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: ${config.opacity};
          }
          25% {
            transform: translateY(-10px) translateX(5px) rotate(90deg);
            opacity: ${config.opacity * 1.5};
          }
          50% {
            transform: translateY(-5px) translateX(-3px) rotate(180deg);
            opacity: ${config.opacity * 0.8};
          }
          75% {
            transform: translateY(-15px) translateX(8px) rotate(270deg);
            opacity: ${config.opacity * 1.2};
          }
          100% {
            transform: translateY(0px) translateX(0px) rotate(360deg);
            opacity: ${config.opacity};
          }
        }

        @keyframes goldenFloat1 {
          0% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: ${config.opacity * 0.8};
          }
          33% {
            transform: translateY(-8px) translateX(-6px) rotate(120deg);
            opacity: ${config.opacity * 1.3};
          }
          66% {
            transform: translateY(-12px) translateX(4px) rotate(240deg);
            opacity: ${config.opacity * 0.9};
          }
          100% {
            transform: translateY(0px) translateX(0px) rotate(360deg);
            opacity: ${config.opacity * 0.8};
          }
        }

        @keyframes goldenFloat2 {
          0% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: ${config.opacity * 1.1};
          }
          40% {
            transform: translateY(-6px) translateX(7px) rotate(144deg);
            opacity: ${config.opacity * 0.7};
          }
          80% {
            transform: translateY(-14px) translateX(-2px) rotate(288deg);
            opacity: ${config.opacity * 1.4};
          }
          100% {
            transform: translateY(0px) translateX(0px) rotate(360deg);
            opacity: ${config.opacity * 1.1};
          }
        }
      `}</style>
    </div>
  );
};

export default GoldenAtmosphere;

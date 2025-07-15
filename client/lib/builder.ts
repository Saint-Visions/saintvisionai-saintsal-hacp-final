import { builder } from "@builder.io/sdk";

// SaintSal Builder.io Configuration
export const BUILDER_API_KEY =
  import.meta.env.VITE_PUBLIC_BUILDER_KEY || "d83998c6a81f466db4fb83ab90c7ba25";

// Initialize Builder.io
builder.init(BUILDER_API_KEY);

// SaintSal Brand Theme for Builder.io
export const saintSalTheme = {
  colors: {
    primary: "#FFD700", // SaintSal Gold
    background: "#10161C", // SaintSal Charcoal
    foreground: "#FFFFFF",
    accent: "#FF6B6B", // SaintSal Red accent
    muted: "rgba(255,255,255,0.7)",
  },
  fonts: {
    primary: "Inter, sans-serif",
  },
  gradients: {
    gold: "linear-gradient(135deg, #FFD700 0%, #FFB400 100%)",
    background:
      "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.25) 100%)",
  },
  shadows: {
    glow: "0 0 40px rgba(255,215,0,0.4), 0 20px 40px rgba(0,0,0,0.3)",
    glowHover: "0 0 60px rgba(255,215,0,0.6), 0 30px 60px rgba(0,0,0,0.4)",
  },
};

// Helper function to apply SaintSal styling
export const applySaintSalStyling = (element: HTMLElement) => {
  element.style.fontFamily = saintSalTheme.fonts.primary;
  element.style.color = saintSalTheme.colors.foreground;
};

export { builder };
export default builder;

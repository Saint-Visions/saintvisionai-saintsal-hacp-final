<<<<<<< HEAD
import { builder } from "@builder.io/react";

// Initialize Builder.io with your API key
// You'll need to get this from https://builder.io/account/organization
const BUILDER_API_KEY =
  process.env.VITE_BUILDER_API_KEY || "YOUR_BUILDER_API_KEY_HERE";
=======
import { builder } from "@builder.io/sdk-react";

// SaintSal Builder.io Configuration
export const BUILDER_API_KEY = "d83998c6a81f466db4fb83ab90c7ba25";
>>>>>>> origin/main

// Initialize Builder.io
builder.init(BUILDER_API_KEY);

<<<<<<< HEAD
// Configure Builder.io settings
builder.set({
  // Enable real-time visual editing
  prerender: false,
  // Cache content for performance
  cacheSeconds: 300,
  // Enable custom fields in the editor
  includeRefs: true,
});

export { builder };
=======
// Configure Builder.io settings for SaintSal
builder.set("previewUrl", window.location.origin);
builder.set("liveSync", true);

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

export default builder;
>>>>>>> origin/main

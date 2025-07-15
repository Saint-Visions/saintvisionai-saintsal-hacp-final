import { builder } from "@builder.io/react";

// Initialize Builder.io with your API key
// You'll need to get this from https://builder.io/account/organization
const BUILDER_API_KEY =
  process.env.VITE_BUILDER_API_KEY || "YOUR_BUILDER_API_KEY_HERE";

// Initialize Builder.io
builder.init(BUILDER_API_KEY);

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

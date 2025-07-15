// builder.config.ts - Builder.io configuration for React Router + Vite

export const builderConfig = {
  apiKey: "d83998c6a81f466db4fb83ab90c7ba25", // SaintSal™ Builder.io API Key
  liveSync: true,
  previewUrl: "https://saintvisionai-saintsal-hacp-final-cvgphbzps.vercel.app",
};

// Initialize Builder.io for React Router
export const initBuilder = () => {
  if (typeof window !== "undefined") {
    // Client-side initialization
    import("@builder.io/sdk-react").then(({ builder }) => {
      builder.init(builderConfig.apiKey);
    });
  }
};

import { Builder } from "@builder.io/react";
import { BUILDER_API_KEY } from "../../lib/builder";
import { SaintSalHero } from "./SaintSalHero";
import { SaintSalFeatures } from "./SaintSalFeatures";
import { SaintSalCTA } from "./SaintSalCTA";
import SaintSalStats from "./SaintSalStats";
import { SaintSalTestimonial } from "./SaintSalTestimonial";

// The Builder React SDK does not require explicit initialization with an API key.
// Make sure BUILDER_API_KEY is set in your environment and used in your Builder components/pages.

// Register SaintSal Hero Component
Builder.registerComponent(SaintSalHero, {
  name: "SaintSal Hero",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Your AI Companion for Real Work",
      helperText:
        "Main hero title - last two words will be highlighted in gold",
    },
    {
      name: "subtitle",
      type: "string",
      defaultValue: "The AI assistant that actually gets things done",
      helperText: "Subtitle - last three words will be highlighted in red",
    },
    {
      name: "description",
      type: "string",
      defaultValue: "Chat with AI. Take action instantly. Stay in control.",
      helperText: "Hero description text",
    },
    {
      name: "ctaText",
      type: "string",
      defaultValue: "→ Start Using SaintSal™",
      helperText: "Primary call-to-action button text",
    },
    {
      name: "ctaUrl",
      type: "url",
      defaultValue: "https://saintvisionai.com/signup",
      helperText: "Primary CTA button URL",
    },
    {
      name: "secondaryCtaText",
      type: "string",
      defaultValue: "→ Launch Assistant",
      helperText: "Secondary call-to-action button text",
    },
    {
      name: "secondaryCtaUrl",
      type: "url",
      defaultValue: "https://saintvisionai.com/console",
      helperText: "Secondary CTA button URL",
    },
    {
      name: "backgroundImage",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F179a1108a9c7482b829b68cf4cc7f89f",
      helperText: "Hero background image",
    },
    {
      name: "logoUrl",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/23b227793103accd33c7649ebabb0572cddb55c1?width=2048",
      helperText: "SaintSal logo image",
    },
  ],
});

// Register remaining components
Builder.registerComponent(SaintSalFeatures, {
  name: "SaintSal Features",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Most AI assistants just chat.",
      helperText: "Features section title",
    },
    {
      name: "subtitle",
      type: "string",
      defaultValue: "SaintSal actually executes your requests",
      helperText: "Features section subtitle (highlighted in gold)",
    },
    {
      name: "features",
      type: "list",
      subFields: [
        {
          name: "title",
          type: "string",
          defaultValue: "Feature Title",
        },
        {
          name: "description",
          type: "string",
          defaultValue: "Feature description text",
        },
      ],
      defaultValue: [
        {
          title: "No complex setup required",
          description:
            "Get started immediately without complicated configurations or learning curves.",
        },
        {
          title: "No manual workflows to learn",
          description:
            "SaintSal understands natural language and handles the technical complexity for you.",
        },
        {
          title: "Ask for something. Watch it happen",
          description:
            "From simple tasks to complex operations, SaintSal delivers real results.",
        },
      ],
    },
  ],
});

Builder.registerComponent(SaintSalCTA, {
  name: "SaintSal CTA",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Try SaintSal™ Now",
      helperText: "CTA section title (highlighted in gold)",
    },
    {
      name: "subtitle",
      type: "string",
      defaultValue: "No Login Required",
      helperText: "CTA section subtitle",
    },
    {
      name: "ctaText",
      type: "string",
      defaultValue: "→ Launch Assistant",
      helperText: "Call-to-action button text",
    },
    {
      name: "ctaUrl",
      type: "url",
      defaultValue: "https://saintvisionai.com/console",
      helperText: "CTA button URL",
    },
    {
      name: "backgroundColor",
      type: "color",
      defaultValue: "#10161C",
      helperText: "Section background color",
    },
  ],
});

Builder.registerComponent(SaintSalStats, {
  name: "SaintSal Stats",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "SaintSal™ in Numbers",
      helperText: "Stats section title",
    },
    {
      name: "stats",
      type: "list",
      subFields: [
        { name: "value", type: "string", defaultValue: "99%" },
        { name: "label", type: "string", defaultValue: "Stat Label" },
        { name: "description", type: "string", defaultValue: "Stat description" },
      ],
      defaultValue: [
        {
          value: "99.7%",
          label: "Task Completion Rate",
          description: "AI that actually gets things done",
        },
        {
          value: "< 2s",
          label: "Average Response Time",
          description: "Lightning-fast execution",
        },
        {
          value: "24/7",
          label: "Always Available",
          description: "Your AI companion never sleeps",
        },
        {
          value: "Enterprise",
          label: "Security Standard",
          description: "Bank-level data protection",
        },
      ],
    },
  ],
});

Builder.registerComponent(SaintSalTestimonial, {
  name: "SaintSal Testimonials",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "What Our Users Say",
      helperText: "Testimonials section title",
    },
    {
      name: "testimonials",
      type: "list",
      subFields: [
        { name: "quote", type: "longText", defaultValue: "Amazing testimonial text here." },
        { name: "author", type: "string", defaultValue: "John Doe" },
        { name: "role", type: "string", defaultValue: "CEO" },
        { name: "company", type: "string", defaultValue: "Company Name" },
      ],
      defaultValue: [
        {
          quote:
            "SaintSal doesn't just talk about getting things done - it actually does them. This is the AI assistant I've been waiting for.",
          author: "Sarah Chen",
          role: "Product Manager",
          company: "TechCorp",
        },
        {
          quote:
            "Finally, an AI that understands context and delivers results. SaintSal has transformed how our team works.",
          author: "Michael Rodriguez",
          role: "Operations Director",
          company: "StartupXYZ",
        },
        {
          quote:
            "The difference is night and day. Other AI assistants give suggestions - SaintSal gives solutions.",
          author: "Emily Johnson",
          role: "CEO",
          company: "InnovateLab",
        },
      ],
    },
  ],
});

Builder.register("editor.settings", {
  designTokens: {
    colors: [
      { name: "SaintSal Gold", value: "#FFD700" },
      { name: "SaintSal Charcoal", value: "#10161C" },
      { name: "SaintSal Red", value: "#FF6B6B" },
      { name: "White", value: "#FFFFFF" },
      { name: "Muted White", value: "rgba(255,255,255,0.7)" },
      { name: "Dark Card", value: "rgba(24, 28, 32, 0.9)" },
    ],
    spacing: [
      { name: "XS", value: "4px" },
      { name: "SM", value: "8px" },
      { name: "MD", value: "16px" },
      { name: "LG", value: "24px" },
      { name: "XL", value: "32px" },
      { name: "2XL", value: "48px" },
      { name: "3XL", value: "64px" },
    ],
    fontFamily: [{ name: "Inter", value: "Inter, sans-serif" }],
    fontSize: [
      { name: "Small", value: "14px" },
      { name: "Base", value: "16px" },
      { name: "Large", value: "18px" },
      { name: "XL", value: "20px" },
      { name: "2XL", value: "24px" },
      { name: "3XL", value: "30px" },
      { name: "4XL", value: "36px" },
      { name: "5XL", value: "48px" },
      { name: "6XL", value: "60px" },
      { name: "7XL", value: "72px" },
    ],
  },
});

export default Builder;

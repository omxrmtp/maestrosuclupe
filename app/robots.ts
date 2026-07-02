import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://maestrosuclupe.com";

// === AI Crawlers — Maximum Visibility Configuration ===
// Tier 1: Critical for AI search (ChatGPT Search, Claude web, Perplexity, etc.)
const tier1Allowed = [
  "GPTBot", // OpenAI ChatGPT Search & training
  "OAI-SearchBot", // ChatGPT Search only (no training)
  "ChatGPT-User", // User-initiated ChatGPT browsing
  "ClaudeBot", // Anthropic Claude web features
  "anthropic-ai", // Anthropic training
  "PerplexityBot", // Perplexity AI search (drives referral traffic)
];

// Tier 2: Important for broader AI ecosystem
const tier2Allowed = [
  "Google-Extended", // Gemini / AI Overviews (separate from Googlebot)
  "GoogleOther", // Google AI research
  "Applebot-Extended", // Apple Intelligence (2B+ devices)
  "Amazonbot", // Alexa / Amazon AI
  "FacebookBot", // Meta AI (3B+ app users)
];

// Tier 3: Training-only or aggressive crawlers
const tier3ContextDependent = [
  "CCBot", // Common Crawl — training data only
  "cohere-ai", // Cohere training
];

const tier3Blocked = [
  "Bytespider", // ByteDance — aggressive crawling, low benefit for Western market
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // === Default: Allow everything for normal crawlers ===
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      // === Tier 1 AI Crawlers — Explicitly Allowed ===
      ...tier1Allowed.map((bot) => ({
        userAgent: bot,
        allow: "/",
      })),
      // === Tier 2 AI Crawlers — Explicitly Allowed ===
      ...tier2Allowed.map((bot) => ({
        userAgent: bot,
        allow: "/",
      })),
      // === Tier 3 Training Crawlers — Context Dependent (Allow for training presence) ===
      ...tier3ContextDependent.map((bot) => ({
        userAgent: bot,
        allow: "/",
      })),
      // === Tier 3 Blocked — Aggressive Crawlers ===
      ...tier3Blocked.map((bot) => ({
        userAgent: bot,
        disallow: "/",
      })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}

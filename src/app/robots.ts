import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/seo-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/static/media/"],
      },
      {
        userAgent: [
          "Googlebot",
          "Googlebot-Image",
          "Google-Extended",
          "Bingbot",
          "Applebot",
          "Applebot-Extended",
          "OAI-SearchBot",
          "GPTBot",
          "ChatGPT-User",
          "PerplexityBot",
          "Perplexity-User",
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          "DuckAssistBot",
        ],
        allow: ["/"],
      },
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
    host: SITE_CONFIG.url,
  };
}


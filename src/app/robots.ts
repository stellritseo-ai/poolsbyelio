import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/seo-config";

/**
 * Search engines and AI crawlers (Googlebot, Bingbot, OAI-SearchBot, GPTBot,
 * PerplexityBot, ClaudeBot, Google-Extended, Applebot, etc.) are intentionally
 * allowed. Blocking any AI crawler is a business decision — if the owner wants
 * to opt out of model training (e.g. GPTBot, Google-Extended, ClaudeBot) add a
 * dedicated `disallow: "/"` rule for that user agent here.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  };
}

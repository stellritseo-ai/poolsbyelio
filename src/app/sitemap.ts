import type { MetadataRoute } from "next";
import { SITE_CONFIG, absoluteUrl } from "@/lib/seo-config";
import { allContentPages } from "@/content";

/**
 * Canonical, indexable URLs only.
 * Legacy alias routes (/portfolio, /before-and-after, /testimonials, /areas,
 * /get-a-quote, /state-of-the-art-technology, /services/*) are 308-redirected
 * in next.config.ts and intentionally excluded here.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = SITE_CONFIG.lastUpdated;

  const coreAndExistingRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_CONFIG.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        absoluteUrl("/assets/banner1.png"),
        absoluteUrl("/assets/banner2.png"),
        absoluteUrl("/assets/gallery/20.webp"),
      ],
    },
    {
      url: absoluteUrl("/services"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
      images: [
        absoluteUrl("/assets/service1.png"),
        absoluteUrl("/assets/service2.png"),
        absoluteUrl("/assets/service3.png"),
        absoluteUrl("/assets/service4.png"),
        absoluteUrl("/assets/service5.png"),
        absoluteUrl("/assets/service6.png"),
      ],
    },
    {
      url: absoluteUrl("/pools-and-spas"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
      images: [absoluteUrl("/assets/service1.png"), absoluteUrl("/assets/gallery/20.webp")],
    },
    {
      url: absoluteUrl("/water-features"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [absoluteUrl("/assets/service2.png")],
    },
    {
      url: absoluteUrl("/backyard-concepts"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [absoluteUrl("/assets/service6.png")],
    },
    {
      url: absoluteUrl("/fountains"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
      images: [absoluteUrl("/assets/service5.png")],
    },
    {
      url: absoluteUrl("/water-parks"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [absoluteUrl("/assets/service4.png")],
    },
    {
      url: absoluteUrl("/technology"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
      images: [absoluteUrl("/assets/service3.png")],
    },
    {
      url: absoluteUrl("/before-after"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        absoluteUrl("/assets/gallery/20.webp"),
        absoluteUrl("/assets/gallery/21.webp"),
        absoluteUrl("/assets/gallery/22.webp"),
      ],
    },
    {
      url: absoluteUrl("/reviews"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: absoluteUrl("/areas-we-serve"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/about"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
      images: [absoluteUrl("/assets/whyimg.png")],
    },
    {
      url: absoluteUrl("/contact"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/quote"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: absoluteUrl("/resources"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const generatedContentRoutes: MetadataRoute.Sitemap = allContentPages.map(
    (page) => ({
      url: absoluteUrl(page.path),
      lastModified: page.article?.dateModified ?? lastModified,
      changeFrequency: page.kind === "guide" ? "monthly" : "weekly",
      priority: page.sitemapPriority,
      images: [absoluteUrl(page.heroImage.src)],
    })
  );

  return [...coreAndExistingRoutes, ...generatedContentRoutes];
}

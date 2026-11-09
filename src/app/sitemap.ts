import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/seo-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const now = "2026-11-09";

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        `${baseUrl}/assets/banner1.png`,
        `${baseUrl}/assets/banner2.png`,
        `${baseUrl}/assets/banner3.png`,
        `${baseUrl}/assets/gallery/20.webp`,
        `${baseUrl}/assets/gallery/21.webp`,
        `${baseUrl}/assets/gallery/22.webp`,
      ],
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
      images: [
        `${baseUrl}/assets/service1.png`,
        `${baseUrl}/assets/service2.png`,
        `${baseUrl}/assets/service3.png`,
        `${baseUrl}/assets/service4.png`,
        `${baseUrl}/assets/service5.png`,
        `${baseUrl}/assets/service6.png`,
      ],
    },
    {
      url: `${baseUrl}/pools-and-spas`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
      images: [
        `${baseUrl}/assets/service1.png`,
        `${baseUrl}/assets/gallery/20.webp`,
        `${baseUrl}/assets/gallery/21.webp`,
      ],
    },
    {
      url: `${baseUrl}/water-features`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        `${baseUrl}/assets/service2.png`,
        `${baseUrl}/assets/gallery/341640127040.jpg`,
      ],
    },
    {
      url: `${baseUrl}/backyard-concepts`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        `${baseUrl}/assets/service6.png`,
        `${baseUrl}/assets/gallery/22.webp`,
      ],
    },
    {
      url: `${baseUrl}/fountains`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        `${baseUrl}/assets/service5.png`,
        `${baseUrl}/assets/gallery/24.webp`,
      ],
    },
    {
      url: `${baseUrl}/water-parks`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [
        `${baseUrl}/assets/service4.png`,
        `${baseUrl}/assets/gallery/341762942040.jpg`,
      ],
    },
    {
      url: `${baseUrl}/technology`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
      images: [`${baseUrl}/assets/service3.png`],
    },
    {
      url: `${baseUrl}/before-after`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
      images: [
        `${baseUrl}/assets/gallery/20.webp`,
        `${baseUrl}/assets/gallery/21.webp`,
        `${baseUrl}/assets/gallery/22.webp`,
        `${baseUrl}/assets/gallery/23.webp`,
        `${baseUrl}/assets/gallery/24.webp`,
      ],
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/areas-we-serve`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
      images: [`${baseUrl}/assets/whyimg.png`],
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/quote`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.95,
    },
  ];
}


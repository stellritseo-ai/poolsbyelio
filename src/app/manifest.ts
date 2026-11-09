import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/seo-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_CONFIG.name} | Custom Luxury Gunite Pools & Spas Nashville TN`,
    short_name: SITE_CONFIG.name,
    description:
      "Founded by Jonathan Elio Rodriguez & David Elio Rodriguez. Over 25 years of luxury custom gunite pool design, spas, water parks, fountains, and outdoor living in Nashville & Middle TN.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#004b93",
    icons: [
      {
        src: "/assets/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/assets/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self)",
          },
        ],
      },
      {
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/llms.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=86400",
          },
        ],
      },
      {
        source: "/llms-full.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=86400",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/services/pools-and-spas",
        destination: "/pools-and-spas",
        permanent: true,
      },
      {
        source: "/services/water-features",
        destination: "/water-features",
        permanent: true,
      },
      {
        source: "/services/technology",
        destination: "/technology",
        permanent: true,
      },
      {
        source: "/services/water-parks",
        destination: "/water-parks",
        permanent: true,
      },
      {
        source: "/services/fountains",
        destination: "/fountains",
        permanent: true,
      },
      {
        source: "/services/backyard-concepts",
        destination: "/backyard-concepts",
        permanent: true,
      },
      {
        source: "/portfolio",
        destination: "/before-after",
        permanent: true,
      },
      {
        source: "/before-and-after",
        destination: "/before-after",
        permanent: true,
      },
      {
        source: "/testimonials",
        destination: "/reviews",
        permanent: true,
      },
      {
        source: "/areas",
        destination: "/areas-we-serve",
        permanent: true,
      },
      {
        source: "/get-a-quote",
        destination: "/quote",
        permanent: true,
      },
      {
        source: "/state-of-the-art-technology",
        destination: "/technology",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;


import React from "react";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo-config";
import { PageJsonLd } from "@/components/JsonLdSchema";

export const metadata: Metadata = createPageMetadata({
  title:
    "Before & After Pool Transformations & 60+ Project Portfolio | Nashville TN",
  description:
    "Explore interactive before-and-after gunite pool transformations and 60+ completed luxury swimming pools, spas, waterfalls, commercial water parks, and outdoor living projects across Nashville, Brentwood, Franklin & Belle Meade, TN.",
  path: "/before-after",
  ogImage: "/assets/gallery/20.webp",
  keywords: [
    "pool before and after Nashville TN",
    "custom pool portfolio Brentwood TN",
    "gunite pool gallery Franklin TN",
    "luxury swimming pool photos Belle Meade TN",
    "Pools By Elio completed projects",
  ],
});

export default function BeforeAfterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageJsonLd
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Before & After Portfolio", path: "/before-after" },
        ]}
      />
      {children}
    </>
  );
}


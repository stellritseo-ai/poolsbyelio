import React from "react";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo-config";
import { PageJsonLd } from "@/components/JsonLdSchema";

export const metadata: Metadata = createPageMetadata({
  title:
    "100% Google Verified Reviews & 5.0-Star Client Testimonials | Pools By Elio Nashville",
  description:
    "Read 100% Google Verified 5.0-star reviews from Nashville, Brentwood, Franklin & Belle Meade homeowners and estate managers. Discover why families trust Jonathan Elio Rodriguez and Pools By Elio for custom gunite pools and repairs.",
  path: "/reviews",
  ogImage: "/assets/banner2.png",
  keywords: [
    "Pools By Elio reviews",
    "best pool builder reviews Nashville TN",
    "top rated gunite pool company Brentwood TN",
    "Jonathan Elio Rodriguez reviews",
    "5 star pool contractor Franklin TN",
  ],
});

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageJsonLd
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "100% Google Verified Reviews", path: "/reviews" },
        ]}
      />
      {children}
    </>
  );
}


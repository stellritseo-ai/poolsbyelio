import React from "react";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo-config";
import { PageJsonLd } from "@/components/JsonLdSchema";

export const metadata: Metadata = createPageMetadata({
  title: "Pool Houses, Swim-Up Bars & Outdoor Living",
  description:
    "Custom pool houses, swim-up bars, outdoor kitchens, fire pits, masonry fireplaces and patios built alongside your pool in Nashville, Franklin and Brentwood, TN.",
  path: "/backyard-concepts",
  keywords: [
    "custom pool houses Nashville",
    "outdoor pool bars Nashville TN",
    "outdoor kitchens and fire pits Franklin TN",
    "luxury backyard design Brentwood TN",
  ],
});

export default function BackyardConceptsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageJsonLd
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Backyard Concepts", path: "/backyard-concepts" },
        ]}
        serviceName="Backyard Concepts: Pool Houses, Bars, Fire Pits & Outdoor Kitchens"
        serviceDescription="Complete custom backyard environments including pool houses, downtown Nashville-grade swim-up pool bars, fire pits, outdoor fireplaces, kitchens, and cabanas."
        servicePath="/backyard-concepts"
      />
      {children}
    </>
  );
}


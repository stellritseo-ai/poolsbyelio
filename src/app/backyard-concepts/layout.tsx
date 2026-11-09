import React from "react";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo-config";
import { PageJsonLd } from "@/components/JsonLdSchema";

export const metadata: Metadata = createPageMetadata({
  title:
    "Backyard Concepts: Custom Pool Houses, Swim-Up Bars, Fire Pits & Outdoor Kitchens Nashville TN",
  description:
    "We built bars in downtown Nashville—now we build them in your backyard. Custom pool houses, swim-up pool bars, outdoor kitchens, stone fire pits, masonry fireplaces, pergolas & cabanas across Nashville, Brentwood & Franklin, TN.",
  path: "/backyard-concepts",
  ogImage: "/assets/service6.png",
  keywords: [
    "custom pool house builders Nashville TN",
    "swim up pool bar builder Brentwood TN",
    "outdoor kitchens and fire pits Franklin TN",
    "outdoor fireplace contractor Middle Tennessee",
    "luxury backyard living concepts Nashville",
    "custom cabanas and pergolas Nashville TN",
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


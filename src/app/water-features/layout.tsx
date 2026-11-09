import React from "react";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo-config";
import { PageJsonLd } from "@/components/JsonLdSchema";

export const metadata: Metadata = createPageMetadata({
  title:
    "Custom Pool Water Features, Waterfalls & Rock Grottos in Nashville TN",
  description:
    "Elevate your custom swimming pool with natural boulder waterfalls, swim-in rock grottos, sheer descent rain curtains, scuppers, and LED laminar deck jets across Nashville, Brentwood & Franklin, TN. Built 100% in-house.",
  path: "/water-features",
  ogImage: "/assets/service2.png",
  keywords: [
    "pool waterfalls Nashville TN",
    "custom pool rock grotto builder Tennessee",
    "sheer descent waterfalls Brentwood TN",
    "pool scuppers and deck jets Franklin TN",
    "custom pool water features Middle TN",
  ],
});

export default function WaterFeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageJsonLd
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Water Features", path: "/water-features" },
        ]}
        serviceName="Custom Pool Water Features, Waterfalls & Grottos"
        serviceDescription="Natural Tennessee fieldstone waterfalls, swim-in rock grottos, sheer descent waterwalls, scuppers, and illuminated LED laminar deck jets."
        servicePath="/water-features"
      />
      {children}
    </>
  );
}


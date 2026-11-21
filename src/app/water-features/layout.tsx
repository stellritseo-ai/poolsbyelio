import React from "react";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo-config";
import { PageJsonLd } from "@/components/JsonLdSchema";

export const metadata: Metadata = createPageMetadata({
  title: "Custom Pool Water Features & Waterfalls",
  description:
    "Natural stone waterfalls, rock grottos, sheer descents, scuppers and LED laminar deck jets built in-house for pools across Nashville, Brentwood and Franklin, TN.",
  path: "/water-features",
  keywords: [
    "custom pool waterfalls Nashville TN",
    "rock grotto pool builder Tennessee",
    "sheer descent waterfalls Brentwood TN",
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


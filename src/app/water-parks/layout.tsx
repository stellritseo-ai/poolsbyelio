import React from "react";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo-config";
import { PageJsonLd } from "@/components/JsonLdSchema";

export const metadata: Metadata = createPageMetadata({
  title: "Commercial Water Parks & Lazy River Builders",
  description:
    "Commercial water park construction, lazy rivers, wave pools, splash pads and hotel pools in Tennessee—including the lazy river at Sound Waves, Gaylord Opryland.",
  path: "/water-parks",
  keywords: [
    "water park construction companies",
    "commercial water park builders Tennessee",
    "lazy river construction contractors",
    "Sound Waves Gaylord Opryland lazy river",
    "splash pad construction Tennessee",
  ],
});

export default function WaterParksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageJsonLd
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Water Parks & Commercial Pools", path: "/water-parks" },
        ]}
        serviceName="Commercial Water Parks, Lazy Rivers & Resort Pool Construction"
        serviceDescription="Heavy-duty commercial aquatic attractions, lazy rivers, wave systems, interactive splash pads, and hotel resort swimming facilities across Tennessee."
        servicePath="/water-parks"
      />
      {children}
    </>
  );
}


import React from "react";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo-config";
import { PageJsonLd } from "@/components/JsonLdSchema";

export const metadata: Metadata = createPageMetadata({
  title:
    "Commercial Water Parks, Lazy Rivers & Resort Pool Contractors Nashville TN",
  description:
    "Commercial aquatic construction backed by pedigree from Gaylord Opryland's SoundWaves lazy river and downtown Nashville hospitality venues. We build commercial lazy rivers, splash pads, resort pools, and municipal water parks.",
  path: "/water-parks",
  ogImage: "/assets/service4.png",
  keywords: [
    "commercial pool contractor Nashville TN",
    "water park construction company Tennessee",
    "lazy river builder Nashville",
    "SoundWaves Gaylord Opryland pool builder",
    "hotel and resort pool builders Middle TN",
    "commercial splash pad contractor Tennessee",
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


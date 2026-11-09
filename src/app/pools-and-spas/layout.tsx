import React from "react";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo-config";
import { PageJsonLd } from "@/components/JsonLdSchema";

export const metadata: Metadata = createPageMetadata({
  title:
    "Custom Gunite Pools & Spas in Nashville, Brentwood & Franklin TN",
  description:
    "Design and build bespoke in-ground gunite swimming pools, negative-edge pools, lap pools, plunge pools, and spillover spas in Nashville & Middle TN. 25+ years experience, 100% in-house crew by Jonathan Elio Rodriguez. Starting at $140,000+.",
  path: "/pools-and-spas",
  ogImage: "/assets/service1.png",
  keywords: [
    "custom gunite pools Nashville TN",
    "inground swimming pool builders Brentwood TN",
    "luxury pool and spa construction Franklin TN",
    "infinity edge pool builder Middle Tennessee",
    "custom spillover spa contractor Nashville",
    "shotcrete pool construction Tennessee",
  ],
});

export default function PoolsAndSpasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageJsonLd
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Pools & Spas", path: "/pools-and-spas" },
        ]}
        serviceName="Custom Gunite Swimming Pools & Spas"
        serviceDescription="Bespoke residential and commercial in-ground gunite swimming pools, vanishing edges, lap pools, plunge pools, and heated spillover spas across Nashville, Brentwood, Franklin, and Middle Tennessee."
        servicePath="/pools-and-spas"
      />
      {children}
    </>
  );
}


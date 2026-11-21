import React from "react";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo-config";
import { PageJsonLd } from "@/components/JsonLdSchema";

export const metadata: Metadata = createPageMetadata({
  title: "Custom Gunite Pools & Spas in Nashville, TN",
  description:
    "Bespoke in-ground gunite swimming pools, vanishing edges, lap pools and custom spillover spas across Nashville, Brentwood and Franklin, TN. Starting at $140,000+.",
  path: "/pools-and-spas",
  keywords: [
    "custom gunite pools Nashville TN",
    "luxury pool and spa combinations",
    "inground swimming pool builders Brentwood TN",
    "pool construction Franklin TN",
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


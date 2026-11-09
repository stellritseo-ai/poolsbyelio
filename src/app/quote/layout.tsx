import React from "react";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo-config";
import { PageJsonLd } from "@/components/JsonLdSchema";

export const metadata: Metadata = createPageMetadata({
  title:
    "Request a Free 3D Pool Design & Custom Gunite Pool Estimate | Nashville TN",
  description:
    "Use our interactive 5-step pool estimator to request your free 3D digital pool design and on-site consultation with Jonathan Elio Rodriguez in Nashville, Brentwood, Franklin & Middle TN. Custom gunite pools start at $140,000+.",
  path: "/quote",
  ogImage: "/assets/banner3.png",
  keywords: [
    "custom pool quote Nashville TN",
    "gunite pool cost calculator Tennessee",
    "free 3D pool design Brentwood TN",
    "pool construction estimate Franklin TN",
    "how much does a gunite pool cost Nashville",
  ],
});

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageJsonLd
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Request A 3D Quote", path: "/quote" },
        ]}
      />
      {children}
    </>
  );
}


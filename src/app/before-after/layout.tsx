import React from "react";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo-config";
import { PageJsonLd } from "@/components/JsonLdSchema";

export const metadata: Metadata = createPageMetadata({
  title: "Before & After Pool Portfolio | Nashville, TN",
  description:
    "Explore interactive before-and-after pool transformations and project photography from Pools By Elio across Nashville, Brentwood, Franklin and Middle Tennessee.",
  path: "/before-after",
  keywords: [
    "pool before and after Nashville TN",
    "custom pool portfolio Brentwood TN",
    "gunite pool gallery Franklin TN",
    "Pools By Elio completed projects",
  ],
});

export default function BeforeAfterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageJsonLd
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Before & After Portfolio", path: "/before-after" },
        ]}
      />
      {children}
    </>
  );
}


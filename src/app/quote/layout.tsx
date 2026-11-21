import React from "react";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo-config";
import { PageJsonLd } from "@/components/JsonLdSchema";

export const metadata: Metadata = createPageMetadata({
  title: "Request a Custom Pool Quote | Nashville, TN",
  description:
    "Configure your project scope and request an on-site consultation and 3D design proposal in Nashville, Franklin and Brentwood, TN. Custom pools start at $140,000+.",
  path: "/quote",
  keywords: [
    "custom pool quote Nashville TN",
    "pool construction estimate Franklin TN",
    "3D pool design consultation Brentwood TN",
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


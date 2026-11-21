import React from "react";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo-config";
import { PageJsonLd } from "@/components/JsonLdSchema";

export const metadata: Metadata = createPageMetadata({
  title: "Areas We Serve | Middle Tennessee Pool Builders",
  description:
    "Custom gunite pool builders serving Nashville, Franklin, Brentwood, Belle Meade, Green Hills, Hendersonville, Mount Juliet, Murfreesboro and Middle Tennessee.",
  path: "/areas-we-serve",
  keywords: [
    "pool builders Nashville TN",
    "pool builders Brentwood TN",
    "pool builders Franklin TN",
    "pool builders Belle Meade TN",
    "custom pool company Middle Tennessee",
  ],
});

export default function AreasWeServeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageJsonLd
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Areas We Serve", path: "/areas-we-serve" },
        ]}
      />
      {children}
    </>
  );
}


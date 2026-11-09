import React from "react";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo-config";
import { PageJsonLd } from "@/components/JsonLdSchema";

export const metadata: Metadata = createPageMetadata({
  title:
    "Areas We Serve: Custom Pool Builders Across Nashville, Brentwood, Franklin & Middle TN",
  description:
    "Pools By Elio serves a 50-mile radius across Greater Nashville & Middle Tennessee—including Nashville, Brentwood, Franklin, Belle Meade, Green Hills, Hendersonville, Mount Juliet, Murfreesboro, Gallatin, Spring Hill & Leiper's Fork.",
  path: "/areas-we-serve",
  ogImage: "/assets/banner1.png",
  keywords: [
    "pool builders Nashville TN",
    "pool builders Brentwood TN",
    "pool builders Franklin TN",
    "pool builders Belle Meade TN",
    "pool builders Hendersonville TN",
    "pool builders Mount Juliet TN",
    "pool builders Murfreesboro TN",
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


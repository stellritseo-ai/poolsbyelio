import React from "react";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo-config";
import { PageJsonLd } from "@/components/JsonLdSchema";

export const metadata: Metadata = createPageMetadata({
  title:
    "About Pools By Elio | Jonathan & David Elio Rodriguez — 25+ Years Master Pool Builders",
  description:
    "Founded by Jonathan Elio Rodriguez & David Elio Rodriguez, Pools By Elio brings 25+ years of family-owned, 100% in-house gunite pool craftsmanship to Nashville & Middle Tennessee. Zero subcontractors, commercial-grade engineering.",
  path: "/about",
  ogImage: "/assets/whyimg.png",
  keywords: [
    "about Pools By Elio",
    "Jonathan Elio Rodriguez Nashville",
    "David Elio Rodriguez pool builder",
    "in-house gunite pool builder Tennessee",
    "family owned pool company Nashville TN",
  ],
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageJsonLd
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ]}
      />
      {children}
    </>
  );
}


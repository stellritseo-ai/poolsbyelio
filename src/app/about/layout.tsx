import React from "react";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo-config";
import { PageJsonLd } from "@/components/JsonLdSchema";

export const metadata: Metadata = createPageMetadata({
  title: "About Pools By Elio | Nashville Pool Builders",
  description:
    "Meet co-founders Jonathan and David Elio Rodriguez. Over 25 years of family-owned, in-house custom gunite pool construction across Nashville and Middle Tennessee.",
  path: "/about",
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
      <PageJsonLd pageType="AboutPage"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ]}
      />
      {children}
    </>
  );
}


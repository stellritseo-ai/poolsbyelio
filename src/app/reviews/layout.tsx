import React from "react";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo-config";
import { PageJsonLd } from "@/components/JsonLdSchema";

export const metadata: Metadata = createPageMetadata({
  title: "Customer Reviews & Testimonials | Nashville, TN",
  description:
    "Read homeowner and estate manager testimonials about building, remodeling and repairing custom pools with Jonathan Elio Rodriguez and Pools By Elio in Nashville.",
  path: "/reviews",
  keywords: [
    "Pools By Elio reviews",
    "pool builder reviews Nashville TN",
    "Jonathan Elio Rodriguez reviews",
  ],
});

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageJsonLd
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "100% Google Verified Reviews", path: "/reviews" },
        ]}
      />
      {children}
    </>
  );
}


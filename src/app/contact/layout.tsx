import React from "react";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo-config";
import { PageJsonLd } from "@/components/JsonLdSchema";

export const metadata: Metadata = createPageMetadata({
  title:
    "Contact Pools By Elio | Schedule On-Site Pool Consultation & Emergency Repair Nashville TN",
  description:
    "Contact Jonathan Elio Rodriguez & Pools By Elio at 412 Ezell pike Nashville TN 37217. Call (615) 568-3154 or email eliocustompools@live.com to schedule your custom pool consultation or repair service.",
  path: "/contact",
  ogImage: "/assets/banner1.png",
  keywords: [
    "contact Pools By Elio",
    "pool consultation Nashville TN",
    "emergency pool repair Nashville TN",
    "412 Ezell Pike Nashville pool company",
    "pool builder phone number Nashville",
  ],
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageJsonLd
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Contact Us", path: "/contact" },
        ]}
      />
      {children}
    </>
  );
}


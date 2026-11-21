import React from "react";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo-config";
import { PageJsonLd } from "@/components/JsonLdSchema";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Pools By Elio | Nashville, TN",
  description:
    "Contact Pools By Elio at 412 Ezell Pike, Nashville, TN 37217. Call (615) 568-3154 or email eliocustompools@live.com to schedule a pool consultation or repair.",
  path: "/contact",
  keywords: [
    "contact Pools By Elio",
    "pool consultation Nashville TN",
    "pool repair Nashville TN",
    "412 Ezell Pike Nashville pool company",
  ],
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageJsonLd pageType="ContactPage"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Contact Us", path: "/contact" },
        ]}
      />
      {children}
    </>
  );
}


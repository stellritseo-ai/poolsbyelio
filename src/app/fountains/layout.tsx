import React from "react";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo-config";
import { PageJsonLd } from "@/components/JsonLdSchema";

export const metadata: Metadata = createPageMetadata({
  title:
    "Custom Residential & Commercial Fountains, Pond & Lake Fountains Nashville TN",
  description:
    "Design and build custom tiered garden fountains, floating pond & lake aerating fountains (up to 40+ ft spray), wall fountains, and corporate plaza water features in Nashville, Brentwood & Franklin, TN. 100% in-house installation.",
  path: "/fountains",
  ogImage: "/assets/service5.png",
  keywords: [
    "custom fountains Nashville TN",
    "pond and lake fountains Middle Tennessee",
    "floating fountain installation Brentwood TN",
    "commercial fountain contractor Nashville",
    "tiered garden fountains Franklin TN",
    "The House of Fountains Nashville",
  ],
});

export default function FountainsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageJsonLd
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Fountains", path: "/fountains" },
        ]}
        serviceName="Residential & Commercial Fountain Design & Installation"
        serviceDescription="Custom tiered garden fountains, floating pond and lake aerating fountains, architectural wall fountains, and commercial plaza water features."
        servicePath="/fountains"
      />
      {children}
    </>
  );
}


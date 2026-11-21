import React from "react";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo-config";
import { PageJsonLd } from "@/components/JsonLdSchema";

export const metadata: Metadata = createPageMetadata({
  title: "Custom Residential & Commercial Fountains",
  description:
    "Custom residential estate fountains, garden and wall fountains, floating pond and lake fountains, and commercial plaza water features in Nashville and Middle TN.",
  path: "/fountains",
  keywords: [
    "custom fountains Nashville TN",
    "commercial fountains and water features",
    "pond and lake fountains Middle Tennessee",
    "garden fountains Brentwood Franklin TN",
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


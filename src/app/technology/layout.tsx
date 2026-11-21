import React from "react";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo-config";
import { PageJsonLd } from "@/components/JsonLdSchema";

export const metadata: Metadata = createPageMetadata({
  title: "Smart Pool Automation & Equipment Technology",
  description:
    "Control pool temperature, LED lighting, spa jets and sanitization from your smartphone. Variable-speed pumps and modern pool automation in Nashville & Middle TN.",
  path: "/technology",
  keywords: [
    "smart pool automation Nashville TN",
    "how does pool automation work",
    "variable speed pool pumps Brentwood TN",
    "saltwater pool equipment Franklin TN",
  ],
});

export default function TechnologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageJsonLd
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "State of the Art Technology", path: "/technology" },
        ]}
        serviceName="Smart Pool Automation & Energy-Efficient Pool Technology"
        serviceDescription="Smartphone pool and spa control systems, variable-speed filtration pumps, saltwater chlorination, UV/Ozone sanitization, and hybrid pool heating."
        servicePath="/technology"
      />
      {children}
    </>
  );
}


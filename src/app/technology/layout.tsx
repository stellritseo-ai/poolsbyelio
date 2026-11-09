import React from "react";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo-config";
import { PageJsonLd } from "@/components/JsonLdSchema";

export const metadata: Metadata = createPageMetadata({
  title:
    "Smart Pool Automation, Variable Speed Pumps & Pool Technology Nashville TN",
  description:
    "Control your pool temperature, LED lighting, spa jets, and saltwater sanitization from your smartphone. Pools By Elio installs ultra-quiet variable-speed pumps (up to 70% energy savings) and smart pool automation in Nashville & Middle TN.",
  path: "/technology",
  ogImage: "/assets/service3.png",
  keywords: [
    "smart pool automation Nashville TN",
    "variable speed pool pumps Brentwood TN",
    "saltwater pool conversion Franklin TN",
    "automated pool controls Middle Tennessee",
    "energy efficient pool equipment Nashville",
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


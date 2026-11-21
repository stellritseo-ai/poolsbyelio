import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo-config";
import { PageJsonLd } from "@/components/JsonLdSchema";

export const metadata: Metadata = createPageMetadata({
  title: "Custom Pool & Outdoor Living Services",
  description:
    "Explore Pools By Elio's in-house divisions in Nashville & Middle TN: Custom Gunite Pools & Spas, Water Features, Pool Tech, Commercial Water Parks and Outdoor Living.",
  path: "/services",
  keywords: [
    "pool construction services Nashville TN",
    "custom gunite pool builder Middle Tennessee",
    "commercial water park construction Tennessee",
    "backyard outdoor living Nashville",
  ],
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageJsonLd pageType="CollectionPage"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
        serviceName="Custom Gunite Pool, Spa, Water Park & Luxury Outdoor Living Construction Services"
        serviceDescription="Complete in-house design and construction services for custom gunite swimming pools, luxury spas, waterfalls, smart pool automation, commercial water parks, architectural fountains, and backyard living concepts across Nashville and Middle Tennessee."
        servicePath="/services"
      />
      {children}
    </>
  );
}

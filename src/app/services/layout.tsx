import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo-config";
import { PageJsonLd } from "@/components/JsonLdSchema";

export const metadata: Metadata = createPageMetadata({
  title:
    "Custom Pool, Spa, Water Park & Outdoor Living Services in Nashville, TN",
  description:
    "Explore all 6 master aquatic construction divisions by Pools By Elio in Nashville & Middle TN: Custom Gunite Pools & Spas, Water Features, Smart Pool Technology, Commercial Water Parks, Fountains, and Luxury Backyard Concepts.",
  path: "/services",
  ogImage: "/assets/banner1.png",
  keywords: [
    "pool construction services Nashville TN",
    "custom gunite pool builder services Middle Tennessee",
    "luxury pool and spa services Brentwood Franklin",
    "commercial water park construction Tennessee",
    "custom pool fountains and water features Nashville",
    "backyard outdoor living and swim up bars Nashville",
  ],
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageJsonLd
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

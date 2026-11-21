import React from "react";
import { SITE_CONFIG, absoluteUrl } from "@/lib/seo-config";

/**
 * Structured data policy (see docs/seo/SEO-REPORT.md):
 *  - Only facts supplied by the business or visible on the site are marked up.
 *  - NO AggregateRating / Review markup on the organization. Self-serving
 *    reviews are not eligible for rich results and the review count has not
 *    been independently verified. Add it back only from a verified third-party
 *    source that is also visible on the page.
 *  - FAQPage markup is emitted only on pages where the same Q&A is visible.
 */

const ORG_ID = `${SITE_CONFIG.url}/#organization`;
const WEBSITE_ID = `${SITE_CONFIG.url}/#website`;

function JsonLdScript({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function GlobalJsonLd() {
  const graph = [
    {
      "@type": ["HomeAndConstructionBusiness", "GeneralContractor"],
      "@id": ORG_ID,
      name: SITE_CONFIG.name,
      slogan: SITE_CONFIG.slogan,
      url: SITE_CONFIG.url,
      logo: {
        "@type": "ImageObject",
        "@id": `${SITE_CONFIG.url}/#logo`,
        url: absoluteUrl("/assets/logo.png"),
        contentUrl: absoluteUrl("/assets/logo.png"),
        caption: "Pools By Elio logo",
      },
      image: [
        absoluteUrl("/assets/banner1.png"),
        absoluteUrl("/assets/banner2.png"),
        absoluteUrl("/assets/gallery/20.webp"),
      ],
      description:
        "Pools By Elio is a family-owned custom pool builder in Nashville, Tennessee, founded by brothers Jonathan Elio Rodriguez and David Elio Rodriguez. The company designs and builds custom gunite swimming pools, spas, water features, fountains, backyard living spaces and commercial aquatic projects across Nashville and Middle Tennessee, with more than 25 years of experience.",
      telephone: SITE_CONFIG.phonePrimaryE164,
      email: SITE_CONFIG.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE_CONFIG.address.streetAddress,
        addressLocality: SITE_CONFIG.address.addressLocality,
        addressRegion: SITE_CONFIG.address.addressRegion,
        postalCode: SITE_CONFIG.address.postalCode,
        addressCountry: SITE_CONFIG.address.addressCountry,
      },
      hasMap: SITE_CONFIG.mapsUrl,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: SITE_CONFIG.phonePrimaryE164,
        email: SITE_CONFIG.email,
        contactType: "customer service",
        areaServed: "US-TN",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: SITE_CONFIG.hours.days,
          opens: SITE_CONFIG.hours.opens,
          closes: SITE_CONFIG.hours.closes,
        },
      ],
      founder: SITE_CONFIG.founders.map((f) => ({
        "@type": "Person",
        name: f.name,
        jobTitle: f.role,
        worksFor: { "@id": ORG_ID },
      })),
      sameAs: SITE_CONFIG.socialLinks,
      areaServed: SITE_CONFIG.serviceAreas.map((city) => ({
        "@type": "City",
        name: city,
      })),
      knowsAbout: [
        "Custom gunite swimming pool construction",
        "Infinity edge pools",
        "Pool and spa combinations",
        "Pool remodeling and resurfacing",
        "Water features and waterfalls",
        "Pool automation",
        "Commercial swimming pools",
        "Lazy rivers and water parks",
        "Fountains",
        "Outdoor living, pool houses and swim-up bars",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Pools By Elio services",
        itemListElement: [
          ["Custom pools and spas", "/pools-and-spas"],
          ["Gunite pool construction", "/gunite-pool-construction"],
          ["Infinity edge pools", "/infinity-edge-pools"],
          ["Pool remodeling", "/pool-remodeling"],
          ["Water features", "/water-features"],
          ["Pool technology and automation", "/technology"],
          ["Backyard concepts and outdoor living", "/backyard-concepts"],
          ["Fountains", "/fountains"],
          ["Commercial pool construction", "/commercial-pool-construction"],
          ["Lazy river and water park construction", "/water-parks"],
        ].map(([name, path]) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name,
            url: absoluteUrl(path),
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_CONFIG.url,
      name: SITE_CONFIG.name,
      publisher: { "@id": ORG_ID },
      inLanguage: "en-US",
    },
  ];

  return <JsonLdScript data={{ "@context": "https://schema.org", "@graph": graph }} />;
}

interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

interface PageJsonLdProps {
  breadcrumbs: BreadcrumbItem[];
  /** WebPage subtype for this URL. Defaults to WebPage. */
  pageType?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" | "FAQPage";
  pageName?: string;
  pageDescription?: string;
  pagePath?: string;
  serviceName?: string;
  serviceDescription?: string;
  servicePath?: string;
  /** Only pass FAQs that are rendered visibly on the same page. */
  faqs?: FaqItem[];
  article?: {
    headline: string;
    description: string;
    path: string;
    datePublished: string;
    dateModified: string;
    image?: string;
  };
}

export function PageJsonLd({
  breadcrumbs,
  pageType = "WebPage",
  pageName,
  pageDescription,
  pagePath,
  serviceName,
  serviceDescription,
  servicePath,
  faqs,
  article,
}: PageJsonLdProps) {
  const path = pagePath ?? breadcrumbs[breadcrumbs.length - 1]?.path ?? "/";
  const pageUrl = absoluteUrl(path);

  const graph: Record<string, unknown>[] = [
    {
      "@type": pageType === "FAQPage" ? ["WebPage", "FAQPage"] : pageType,
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      ...(pageName ? { name: pageName } : {}),
      ...(pageDescription ? { description: pageDescription } : {}),
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": ORG_ID },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: breadcrumbs.map((item, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: item.name,
        item: absoluteUrl(item.path),
      })),
    },
  ];

  if (serviceName && serviceDescription && servicePath) {
    graph.push({
      "@type": "Service",
      "@id": `${absoluteUrl(servicePath)}#service`,
      name: serviceName,
      description: serviceDescription,
      url: absoluteUrl(servicePath),
      provider: { "@id": ORG_ID },
      areaServed: SITE_CONFIG.serviceAreas.map((city) => ({
        "@type": "City",
        name: city,
      })),
    });
  }

  if (faqs && faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  if (article) {
    graph.push({
      "@type": "Article",
      "@id": `${absoluteUrl(article.path)}#article`,
      headline: article.headline,
      description: article.description,
      datePublished: article.datePublished,
      dateModified: article.dateModified,
      mainEntityOfPage: { "@id": `${absoluteUrl(article.path)}#webpage` },
      image: absoluteUrl(article.image ?? SITE_CONFIG.defaultOgImage),
      author: { "@id": ORG_ID },
      publisher: { "@id": ORG_ID },
      inLanguage: "en-US",
    });
  }

  return (
    <JsonLdScript data={{ "@context": "https://schema.org", "@graph": graph }} />
  );
}

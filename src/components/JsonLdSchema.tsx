import React from "react";
import { SITE_CONFIG } from "@/lib/seo-config";

export function GlobalJsonLd() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": [
          "HomeAndConstructionBusiness",
          "GeneralContractor",
          "LocalBusiness",
        ],
        "@id": `${SITE_CONFIG.url}/#organization`,
        name: SITE_CONFIG.name,
        legalName: SITE_CONFIG.legalName,
        alternateName: ["Pools by Elio Nashville", "Elio Custom Pools"],
        slogan: SITE_CONFIG.slogan,
        url: SITE_CONFIG.url,
        logo: {
          "@type": "ImageObject",
          "@id": `${SITE_CONFIG.url}/#logo`,
          url: `${SITE_CONFIG.url}/assets/logo.png`,
          contentUrl: `${SITE_CONFIG.url}/assets/logo.png`,
          caption: "Pools By Elio - Custom Luxury Gunite Pool Builders Nashville TN",
        },
        image: [
          `${SITE_CONFIG.url}/assets/banner1.png`,
          `${SITE_CONFIG.url}/assets/banner2.png`,
          `${SITE_CONFIG.url}/assets/banner3.png`,
          `${SITE_CONFIG.url}/assets/gallery/20.webp`,
          `${SITE_CONFIG.url}/assets/gallery/21.webp`,
          `${SITE_CONFIG.url}/assets/gallery/22.webp`,
        ],
        description:
          "Founded by Jonathan Elio Rodriguez and David Elio Rodriguez, Pools By Elio brings over 25 years of master gunite pool construction, custom spas, commercial water parks (including SoundWaves at Gaylord Opryland), fountains, and luxury backyard concepts across Nashville, Brentwood, Franklin, and Middle Tennessee. 100% in-house crew with zero subcontractors.",
        telephone: SITE_CONFIG.phonePrimaryE164,
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: SITE_CONFIG.phonePrimaryE164,
            contactType: "customer service",
            areaServed: "US-TN",
            availableLanguage: ["English", "Spanish"],
          },
          {
            "@type": "ContactPoint",
            telephone: SITE_CONFIG.phonePrimaryE164,
            contactType: "sales",
            areaServed: "US-TN",
            availableLanguage: ["English", "Spanish"],
          },
        ],
        email: SITE_CONFIG.email,
        foundingDate: "2001",
        priceRange: SITE_CONFIG.priceRange,
        currenciesAccepted: "USD",
        paymentAccepted: "Cash, Check, Wire Transfer, Pool Financing",
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE_CONFIG.address.streetAddress,
          addressLocality: SITE_CONFIG.address.addressLocality,
          addressRegion: SITE_CONFIG.address.addressRegion,
          postalCode: SITE_CONFIG.address.postalCode,
          addressCountry: SITE_CONFIG.address.addressCountry,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: SITE_CONFIG.geo.latitude,
          longitude: SITE_CONFIG.geo.longitude,
        },
        hasMap:
          "https://maps.google.com/?q=412+Ezell+Pike,+Nashville,+TN+37217",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "08:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday"],
            opens: "09:00",
            closes: "16:00",
          },
        ],
        founder: [
          {
            "@type": "Person",
            "@id": `${SITE_CONFIG.url}/#jonathan-elio-rodriguez`,
            name: "Jonathan Elio Rodriguez",
            jobTitle: "Co-Founder & Master Pool Builder",
            worksFor: { "@id": `${SITE_CONFIG.url}/#organization` },
          },
          {
            "@type": "Person",
            "@id": `${SITE_CONFIG.url}/#david-elio-rodriguez`,
            name: "David Elio Rodriguez",
            jobTitle: "Co-Founder & Principal Aquatic Engineer",
            worksFor: { "@id": `${SITE_CONFIG.url}/#organization` },
          },
        ],
        sameAs: [
          ...SITE_CONFIG.socialLinks,
          SITE_CONFIG.fountainsPartnerUrl,
        ],
        areaServed: SITE_CONFIG.serviceAreas.map((city) => ({
          "@type": "City",
          name: city,
        })),
        knowsAbout: [
          "Custom Gunite Swimming Pool Construction",
          "Shotcrete Pool Engineering",
          "Negative Edge & Infinity Pools",
          "Custom Spillover Spas & Hot Tubs",
          "Natural Stone Waterfalls & Rock Grottos",
          "Smart Pool Automation & Variable Speed Pumps",
          "Commercial Water Parks & Lazy Rivers",
          "Residential & Commercial Fountains",
          "Custom Pool Houses, Cabanas & Swim-Up Bars",
          "Outdoor Kitchens, Fire Pits & Masonry Fireplaces",
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: SITE_CONFIG.rating.ratingValue,
          bestRating: SITE_CONFIG.rating.bestRating,
          worstRating: SITE_CONFIG.rating.worstRating,
          ratingCount: SITE_CONFIG.rating.ratingCount,
          reviewCount: SITE_CONFIG.rating.reviewCount,
        },
        review: [
          {
            "@type": "Review",
            author: { "@type": "Person", name: "JB" },
            datePublished: "2025-02-15",
            reviewBody:
              "I drew a custom pool and a new deck from scratch. Jonathan was able to convert this to a beautiful project that revitalize my backyard and improve my resale price of my house.",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Barb Groux" },
            datePublished: "2024-05-10",
            reviewBody:
              "I have used Pools by Elio for several years primarily for weekly pool service which has always been done timely and well. He also did one major pool repair when the pool cracked and the job went well and has held up. I will continue to use Jonathan.",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Kellye Brock" },
            datePublished: "2024-03-22",
            reviewBody:
              "Our pool was built in 2019. The team and communication throughout the process was wonderful. They felt like part of the family. Our pool is beautiful and it transformed our yard into what now looks like a resort. Thanks Jonathan!",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Kimberly Woods" },
            datePublished: "2024-01-18",
            reviewBody:
              "I am an Estate Manager here in the Nashville Area for 11 years now. I always refer to Jonathan - Pools By Elio for clients pool needs whether it is building a new pool or servicing a pool. He is a get it done right guy! At the end of the day I wouldn’t recommend anyone else to take care of my clients! Thank you Jonathan!",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Richard Green" },
            datePublished: "2022-06-14",
            reviewBody:
              "Jonathan is consistently achieving high standards and has assembled a team that strives to do the same. They applied a finish when resurfacing the pool that looks as great today as the day it was installed. Zero footprint surrounding when the job was finished.",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Sherri Miller" },
            datePublished: "2021-07-09",
            reviewBody:
              "Love, Love my pool. So happy I chose your company. Could not bear the thought of any vinyl liner pool. Thanks to Pools by Elio, I am making wonderful memories with family and friends. My backyard is amazing. Best pool company ever.",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Pools By Elio Custom Aquatic & Outdoor Living Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom Gunite Pools & Spas",
                url: `${SITE_CONFIG.url}/pools-and-spas`,
                description:
                  "Bespoke residential and commercial in-ground gunite swimming pools, vanishing edges, lap pools, plunge pools, and spillover spas starting at $140,000+.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom Pool Water Features & Waterfalls",
                url: `${SITE_CONFIG.url}/water-features`,
                description:
                  "Natural boulder waterfalls, swim-in rock grottos, sheer descent rain curtains, scuppers, and illuminated LED laminar deck jets.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "State of the Art Pool Technology & Automation",
                url: `${SITE_CONFIG.url}/technology`,
                description:
                  "Smartphone pool control, ultra-quiet variable-speed pumps, saltwater sanitization, UV/Ozone systems, and hybrid heating.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Commercial Water Parks & Resort Pools",
                url: `${SITE_CONFIG.url}/water-parks`,
                description:
                  "Commercial aquatic attractions, lazy rivers, splash pads, and hotel resort pools backed by pedigree from Gaylord Opryland's SoundWaves.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Residential & Commercial Fountains",
                url: `${SITE_CONFIG.url}/fountains`,
                description:
                  "Tiered Italian/Spanish garden fountains, floating pond & lake fountains, wall fountains, and architectural corporate plaza centerpieces.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Backyard Concepts & Outdoor Living",
                url: `${SITE_CONFIG.url}/backyard-concepts`,
                description:
                  "Custom pool houses, downtown Nashville-caliber swim-up pool bars, fire pits, masonry fireplaces, outdoor kitchens, and travertine patios.",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_CONFIG.url}/#website`,
        url: SITE_CONFIG.url,
        name: SITE_CONFIG.name,
        description:
          "Nashville's Premier Custom Luxury Gunite Pool, Spa, Fountain & Backyard Concept Builder — 25+ Years Experience, 100% In-House Crew.",
        publisher: {
          "@id": `${SITE_CONFIG.url}/#organization`,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_CONFIG.url}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Who actually runs and builds Pools By Elio projects?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Co-founder Jonathan Elio Rodriguez is hands-on and on site daily directing every phase of construction—including excavation, steel rebar grids, high-spec hydraulic plumbing, pneumatic gunite application, and artisanal tile/pebble finishing.",
            },
          },
          {
            "@type": "Question",
            name: "Does Pools By Elio use subcontractors?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Everything is completed 100% in-house by Jonathan Elio Rodriguez and our dedicated full-time master crew. Operating our own machinery and gunite equipment eliminates third-party subcontractor delays and ensures commercial-grade structural quality.",
            },
          },
          {
            "@type": "Question",
            name: "How much does a custom gunite pool cost in Nashville, TN?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Custom luxury in-ground gunite swimming pools by Pools By Elio start at $140,000.00+ depending on dimensions, site topography, integrated spillover spas, water features, automation, and decking materials.",
            },
          },
          {
            "@type": "Question",
            name: "What is the largest commercial pool project Pools By Elio has built?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Pools By Elio engineered and constructed major commercial aquatic installations including the lazy river features at SoundWaves at Gaylord Opryland Resort as well as commercial pool bars and hospitality venues in downtown Nashville.",
            },
          },
          {
            "@type": "Question",
            name: "What areas in Middle Tennessee does Pools By Elio serve?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We serve a 50-mile radius around our Nashville headquarters (412 Ezell Pike, Nashville, TN 37217), including Nashville, Brentwood, Franklin, Belle Meade, Green Hills, Forest Hills, Oak Hill, Hendersonville, Mount Juliet, Murfreesboro, Gallatin, Spring Hill, Nolensville, and Leiper's Fork.",
            },
          },
          {
            "@type": "Question",
            name: "Is Pools By Elio licensed, bonded, and insured in Tennessee?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Pools By Elio is fully licensed by the State of Tennessee as a General Contractor, bonded, and carries comprehensive commercial liability and workers' compensation insurance.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface PageJsonLdProps {
  breadcrumbs: BreadcrumbItem[];
  serviceName?: string;
  serviceDescription?: string;
  servicePath?: string;
}

export function PageJsonLd({
  breadcrumbs,
  serviceName,
  serviceDescription,
  servicePath,
}: PageJsonLdProps) {
  const graph: Record<string, unknown>[] = [
    {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: item.name,
        item: `${SITE_CONFIG.url}${item.path === "/" ? "" : item.path}`,
      })),
    },
  ];

  if (serviceName && serviceDescription && servicePath) {
    graph.push({
      "@type": "Service",
      "@id": `${SITE_CONFIG.url}${servicePath}#service`,
      name: serviceName,
      description: serviceDescription,
      url: `${SITE_CONFIG.url}${servicePath}`,
      provider: {
        "@id": `${SITE_CONFIG.url}/#organization`,
      },
      areaServed: SITE_CONFIG.serviceAreas.map((city) => ({
        "@type": "City",
        name: city,
      })),
    });
  }

  const payload = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}


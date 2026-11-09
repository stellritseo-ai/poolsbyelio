import type { Metadata } from "next";

export const SITE_CONFIG = {
  name: "Pools By Elio",
  legalName: "Pools By Elio LLC",
  slogan: "We Set The Standards — You Get The Dream",
  url: "https://poolsbyelio.net",
  fountainsPartnerUrl: "http://thehouseoffountains.com/",
  foundingYear: 2001,
  experienceYears: 25,
  startingPrice: "$140,000+",
  priceRange: "$$$$",
  founders: [
    {
      name: "Jonathan Elio Rodriguez",
      role: "Co-Founder & Master Pool Builder (Hands-On Field Director)",
    },
    {
      name: "David Elio Rodriguez",
      role: "Co-Founder & Principal Aquatic Engineer",
    },
  ],
  phonePrimary: "(615) 568-3154",
  phonePrimaryE164: "+1-615-568-3154",
  email: "eliocustompools@live.com",
  address: {
    streetAddress: "412 Ezell Pike",
    addressLocality: "Nashville",
    addressRegion: "TN",
    postalCode: "37217",
    addressCountry: "US",
    full: "412 Ezell pike Nashville TN 37217",
  },
  geo: {
    latitude: 36.1147,
    longitude: -86.6744,
  },
  rating: {
    ratingValue: "5.0",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "52",
    reviewCount: "52",
  },
  socialLinks: [
    "https://www.facebook.com/poolsbyelio/",
    "https://www.instagram.com/poolbyelio/",
    "https://www.yelp.com/biz/pools-by-elio-nashville-2",
    "https://www.bbb.org/us/tn/nashville/profile/pool-contractors/pools-by-elio-0573-37378278",
    "https://www.google.com/searchviewer/10?svid=CCYSESoPCg0vZy8xMW5ucXFwX2YwGAo",
    "https://share.google/F0gzRogEMUb1wMOHd",
  ],
  serviceAreas: [
    "Nashville, TN",
    "Brentwood, TN",
    "Franklin, TN",
    "Belle Meade, TN",
    "Green Hills, TN",
    "Forest Hills, TN",
    "Oak Hill, TN",
    "Hendersonville, TN",
    "Mount Juliet, TN",
    "Murfreesboro, TN",
    "Gallatin, TN",
    "Spring Hill, TN",
    "Nolensville, TN",
    "Leiper's Fork, TN",
    "Thompson's Station, TN",
    "Goodlettsville, TN",
    "Lebanon, TN",
    "Smyrna, TN",
    "Dickson, TN",
    "Clarksville, TN",
    "Columbia, TN",
  ],
  countiesServed: [
    "Davidson County, TN",
    "Williamson County, TN",
    "Sumner County, TN",
    "Wilson County, TN",
    "Rutherford County, TN",
    "Maury County, TN",
    "Robertson County, TN",
    "Cheatham County, TN",
    "Dickson County, TN",
    "Montgomery County, TN",
  ],
};

interface PageSeoOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = "/assets/banner1.png",
}: PageSeoOptions): Metadata {
  const canonicalUrl = `${SITE_CONFIG.url}${path === "/" ? "" : path}`;

  const defaultKeywords = [
    "Pools By Elio",
    "custom pool builders Nashville TN",
    "gunite pool builder Nashville",
    "luxury pool construction Brentwood TN",
    "custom inground pools Franklin TN",
    "Jonathan Elio Rodriguez",
    "commercial pool contractor Tennessee",
  ];

  const mergedKeywords = Array.from(new Set([...keywords, ...defaultKeywords]));

  return {
    title,
    description,
    keywords: mergedKeywords,
    authors: [
      { name: "Jonathan Elio Rodriguez", url: SITE_CONFIG.url },
      { name: "David Elio Rodriguez", url: SITE_CONFIG.url },
    ],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${title} | Pools By Elio Nashville TN`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: {
      "geo.region": "US-TN",
      "geo.placename": "Nashville, Tennessee",
      "geo.position": `${SITE_CONFIG.geo.latitude};${SITE_CONFIG.geo.longitude}`,
      ICBM: `${SITE_CONFIG.geo.latitude}, ${SITE_CONFIG.geo.longitude}`,
    },
  };
}


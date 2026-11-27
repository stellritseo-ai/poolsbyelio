import type { Metadata } from "next";

/**
 * Single source of truth for business identity (NAP), canonical domain and
 * shared SEO helpers.
 *
 * Only facts that the business has supplied or that are published on the
 * website belong here. Do NOT add awards, ratings, license numbers, founding
 * dates or coordinates until the owner has verified them.
 *
 * The canonical origin can be changed without touching code by setting
 * NEXT_PUBLIC_SITE_URL (e.g. https://www.poolsbyelio.net). It must match the
 * primary domain configured in Vercel so that exactly one host serves 200s and
 * the other 308-redirects to it.
 */
const rawUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.poolsbyelio.net";

export const SITE_CONFIG = {
  name: "Pools By Elio",
  slogan: "We Set The Standards — You Get The Dream",
  url: rawUrl.replace(/\/+$/, ""),
  fountainsPartnerUrl: "http://thehouseoffountains.com/",
  experienceYears: 25,
  startingPrice: "$140,000+",
  founders: [
    { name: "Jonathan Elio Rodriguez", role: "Co-Founder" },
    { name: "David Elio Rodriguez", role: "Co-Founder" },
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
  mapsUrl: "https://maps.google.com/?q=412+Ezell+Pike,+Nashville,+TN+37217",
  // Mon–Fri hours as published in the site footer / contact page.
  hours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  // Official profiles already linked from the site's social bar.
  socialLinks: [
    "https://www.facebook.com/poolsbyelio/",
    "https://www.instagram.com/poolbyelio/",
    "https://www.yelp.com/biz/pools-by-elio-nashville-2",
    "https://www.bbb.org/us/tn/nashville/profile/pool-contractors/pools-by-elio-0573-37378278",
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
  defaultOgImage: "/assets/og-default.jpg",
  /** Bump when site content materially changes (used by the sitemap). */
  lastUpdated: "2026-11-28",
};

interface PageSeoOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  /** Use the title exactly as given (skip the "| Pools By Elio" template). */
  absoluteTitle?: boolean;
  ogType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
}

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_CONFIG.url}${path === "/" ? "" : path}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = SITE_CONFIG.defaultOgImage,
  absoluteTitle = false,
  ogType = "website",
  publishedTime,
  modifiedTime,
  noindex = false,
}: PageSeoOptions): Metadata {
  const canonicalUrl = absoluteUrl(path);
  const socialTitle = absoluteTitle ? title : `${title} | ${SITE_CONFIG.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: keywords.length ? keywords : undefined,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: ogType,
      locale: "en_US",
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      title: socialTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${SITE_CONFIG.name} — custom pools in Nashville, Tennessee`,
        },
      ],
      ...(ogType === "article" && publishedTime ? { publishedTime } : {}),
      ...(ogType === "article" && modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [ogImage],
    },
    robots: noindex
      ? { index: false, follow: true }
      : {
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
  };
}

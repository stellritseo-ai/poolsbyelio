export interface ContentSection {
  id: string;
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  steps?: { title: string; body: string }[];
  table?: { headers: string[]; rows: string[][] };
  callout?: { title: string; body: string };
}

export interface RelatedLink {
  label: string;
  href: string;
  blurb: string;
}

export interface ContentPageData {
  slug: string;
  path: string;
  kind: "service" | "local" | "core" | "guide";
  /** <title> without the "| Pools By Elio" suffix (added by the layout template). Keep ≤ 45 chars. */
  metaTitle: string;
  /** 120–158 characters. */
  metaDescription: string;
  keywords?: string[];
  eyebrow: string;
  h1: string;
  intro: string;
  heroImage: { src: string; alt: string };
  breadcrumbs: { name: string; path: string }[];
  keyFacts?: { label: string; value: string }[];
  sections: ContentSection[];
  faqs?: { q: string; a: string }[];
  related: RelatedLink[];
  cta: {
    heading: string;
    body: string;
    primaryLabel: string;
    primaryHref: string;
  };
  /** Present for guides → Article schema + og:type=article. */
  article?: { datePublished: string; dateModified: string };
  /** Present for service pages → Service schema. */
  serviceSchema?: { name: string; description: string };
  sitemapPriority: number;
}


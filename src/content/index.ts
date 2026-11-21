import { servicePages } from "./services";
import { localPages } from "./local";
import { corePages } from "./core";
import { guidePages } from "./guides";
import type { ContentPageData } from "./types";

export { servicePages, localPages, corePages, guidePages };
export type { ContentPageData };

export const allContentPages: ContentPageData[] = [
  ...servicePages,
  ...localPages,
  ...corePages,
  ...guidePages,
];

export function getContentPage(slug: string): ContentPageData | undefined {
  return allContentPages.find((p) => p.slug === slug);
}

export function getGuideBySlug(slug: string): ContentPageData | undefined {
  return guidePages.find((g) => g.slug === slug);
}


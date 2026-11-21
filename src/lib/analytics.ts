/**
 * Lightweight, privacy-conscious event helper.
 *
 * Works with either Google Tag Manager (dataLayer) or GA4 (gtag). Nothing is
 * sent unless NEXT_PUBLIC_GTM_ID or NEXT_PUBLIC_GA_ID is configured, because
 * the tags that define `window.dataLayer` / `window.gtag` are only injected by
 * <Analytics /> when those variables exist.
 *
 * Use EITHER a GA4 tag directly OR GTM (with GA4 configured inside GTM) to
 * avoid double counting.
 */
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  name: string,
  params: Record<string, string | number | boolean | undefined> = {}
): void {
  if (typeof window === "undefined") return;
  if (!window.dataLayer && !window.gtag) return;

  window.dataLayer?.push({ event: name, ...params });
  window.gtag?.("event", name, params);
}


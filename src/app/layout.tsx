import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/seo-config";
import { GlobalJsonLd } from "@/components/JsonLdSchema";
import { Analytics as SiteAnalytics } from "@/components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#004b93",
};

const googleVerification =
  process.env.GOOGLE_SITE_VERIFICATION ||
  "Auu241hl33WysD9GSyHtq1Yg_dpQ00FRE7UlQqH9e98";
const bingVerification = process.env.BING_SITE_VERIFICATION;

// NOTE: no site-wide `alternates.canonical` here. A canonical on the root
// layout would be inherited by every page that does not define its own and
// would point them all at the homepage. Each page sets its own canonical via
// createPageMetadata().
export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Custom Pool Builders in Nashville, TN | Pools By Elio",
    template: "%s | Pools By Elio",
  },
  description:
    "Family-owned custom gunite pool, spa and outdoor living builder in Nashville, serving Franklin, Brentwood and Middle Tennessee for 25+ years. (615) 568-3154",
  applicationName: SITE_CONFIG.name,
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  category: "Swimming Pool Contractor",
  formatDetection: { telephone: true, email: true, address: true },
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
  icons: {
    icon: [{ url: "/assets/logo.png", type: "image/png" }],
    shortcut: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
  verification: {
    ...(googleVerification ? { google: googleVerification } : {}),
    ...(bingVerification ? { other: { "msvalidate.01": bingVerification } } : {}),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-white text-slate-800`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#00285c] focus:text-white focus:font-bold focus:shadow-lg"
        >
          Skip to main content
        </a>
        <GlobalJsonLd />
        {children}
        <SiteAnalytics />
        <Analytics />
      </body>
    </html>
  );
}

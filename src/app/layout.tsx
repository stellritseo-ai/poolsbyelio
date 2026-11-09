import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/seo-config";
import { GlobalJsonLd } from "@/components/JsonLdSchema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#004b93",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default:
      "Pools By Elio | Award-Winning Luxury Custom Gunite Pools & Spas Nashville, TN",
    template: "%s | Pools By Elio Nashville",
  },
  description:
    "Founded by Jonathan Elio Rodriguez & David Elio Rodriguez. Over 25 years of luxury custom gunite pool design, spas, commercial water parks (SoundWaves at Gaylord Opryland), fountains, and backyard concepts in Nashville, Brentwood & Franklin, TN. 100% In-House Crew. Call (615) 568-3154.",
  applicationName: SITE_CONFIG.name,
  authors: [
    { name: "Jonathan Elio Rodriguez", url: SITE_CONFIG.url },
    { name: "David Elio Rodriguez", url: SITE_CONFIG.url },
  ],
  generator: "Next.js",
  keywords: [
    "Pools By Elio",
    "custom pool builders Nashville TN",
    "luxury gunite pool builder Nashville",
    "pool construction Franklin TN",
    "pool companies Brentwood TN",
    "custom inground pools Belle Meade TN",
    "commercial pool contractor Tennessee",
    "custom pool and spa builders Middle TN",
    "backyard pool bars and pool houses Nashville",
    "residential and commercial fountains Nashville",
    "Jonathan Elio Rodriguez pool builder",
  ],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  category: "Home & Construction / Swimming Pool Contractor",
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title:
      "Pools By Elio | Award-Winning Luxury Custom Gunite Pools & Spas Nashville, TN",
    description:
      "25+ years of master gunite pool construction, spas, commercial water parks, fountains & luxury outdoor living across Nashville, Brentwood & Franklin, TN. 100% in-house crew, zero subcontractors.",
    images: [
      {
        url: "/assets/banner1.png",
        width: 1200,
        height: 630,
        alt: "Pools By Elio — Custom Luxury Gunite Swimming Pools & Spas in Nashville, TN",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Pools By Elio | Custom Luxury Gunite Pools & Spas in Nashville, TN",
    description:
      "Founded by Jonathan & David Elio Rodriguez. 25+ years of 100% in-house custom gunite pools, spas, fountains & backyard concepts in Middle Tennessee.",
    images: ["/assets/banner1.png"],
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
  icons: {
    icon: [
      { url: "/assets/logo.png" },
      { url: "/assets/logo.png", type: "image/png" },
    ],
    shortcut: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
  other: {
    "geo.region": "US-TN",
    "geo.placename": "Nashville, Tennessee",
    "geo.position": `${SITE_CONFIG.geo.latitude};${SITE_CONFIG.geo.longitude}`,
    ICBM: `${SITE_CONFIG.geo.latitude}, ${SITE_CONFIG.geo.longitude}`,
    "ai-content-declaration": "human-authored-verified-business",
    "llms-txt": `${SITE_CONFIG.url}/llms.txt`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-white text-slate-800`}
      >
        <GlobalJsonLd />
        {children}
      </body>
    </html>
  );
}

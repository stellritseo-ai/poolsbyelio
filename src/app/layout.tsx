import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pools By Elio | Award-Winning Luxury Custom Pools & Spas Nashville, TN",
  description:
    "Founded by Jonathan Elio Rodriguez & David Elio Rodriguez. Over 25 years of luxury custom pool design, spas, water parks, fountains, and outdoor living in Nashville, TN. Call (615) 568-3154.",
  keywords: [
    "custom pool builders Nashville TN",
    "pool construction Franklin TN",
    "pool companies Brentwood TN",
    "residential pool builders",
    "Pools By Elio",
    "luxury swimming pool contractor",
  ],
  icons: {
    icon: "/images/logo.png",
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
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo-config";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WelcomeSection from "@/components/WelcomeSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqMapSection from "@/components/FaqMapSection";
import EmergencyStatsSection from "@/components/EmergencyStatsSection";
import QuoteFormSection from "@/components/QuoteFormSection";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export const metadata: Metadata = createPageMetadata({
  title: "Custom Pool Builders in Nashville, TN | Pools By Elio",
  absoluteTitle: true,
  description:
    "Family-owned custom gunite pool, spa and outdoor living builder in Nashville, serving Franklin, Brentwood and Middle Tennessee for 25+ years. (615) 568-3154",
  path: "/",
});

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-cyan-200 selection:text-blue-950">
      {/* 1. Header (Top Bar + Main Nav + Mobile Menu) */}
      <Header />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Welcome / 25 Years of Excellence Section */}
        <WelcomeSection />

        {/* 4. What We Craft / Services Section */}
        <ServicesSection />

        {/* 5. Why Choose Us Section */}
        <WhyUsSection />

        {/* 6. Process Section (From Concept To Completion) */}
        <ProcessSection />

        {/* 7. Portfolio / Crafted Escapes Section */}
        <PortfolioSection />

        {/* 8. Testimonials Section (Stories From The Backyard) */}
        <TestimonialsSection />

        {/* 9. FAQ & Service Areas Map Section */}
        <FaqMapSection />

        {/* 10. Emergency Repair & Stats Section */}
        <EmergencyStatsSection />

        {/* 11. Request A Quote Form Section */}
        <QuoteFormSection />
      </main>

      {/* 12. Footer Section */}
      <Footer />

      {/* 13. Floating Quick Contact & Call Button */}
      <FloatingContact />
    </div>
  );
}

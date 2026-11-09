"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  fullDetails: string;
  features: string[];
  image: string;
  tag: string;
}

export default function ServicesSection() {
  const [activeModal, setActiveModal] = useState<ServiceItem | null>(null);

  const getServiceUrl = (id: string) => {
    switch (id) {
      case "pools-spas":
        return "/pools-and-spas";
      case "water-features":
        return "/water-features";
      case "state-of-the-art-tech":
        return "/technology";
      case "water-parks":
        return "/water-parks";
      case "fountains":
        return "/fountains";
      case "backyard-concepts":
        return "/backyard-concepts";
      default:
        return "/contact";
    }
  };

  const services: ServiceItem[] = [
    {
      id: "pools-spas",
      title: "Pools And Spas",
      tag: "Custom Construction & Remodel",
      description:
        "From concept to construction, our design team will make your dream pool come true. With endless design possibilities ranging from pool shape and water features to high-tech automation, your pool and spa will be everything you dreamed of, and more.",
      fullDetails:
        "Whether you envision a zero-edge infinity pool overlooking rolling hills, a geometric architectural centerpiece, or an organic freeform lagoon with natural boulders, Pools By Elio delivers engineering precision and artistic finishing. We manage the entire structural process: soil engineering, gunite pouring, custom coping, artisanal glass tile, and variable-speed filtration systems.",
      features: [
        "Custom Gunite & Shotcrete Engineering",
        "Integrated Spillover Spas & Tanning Ledges",
        "Pebble & Glass Bead Interior Finishes",
        "Automated Pool Covers & In-Floor Cleaning",
      ],
      image: "/assets/service1.png",
    },
    {
      id: "water-features",
      title: "Water Features",
      tag: "Sight & Sound Ambiance",
      description:
        "Shape the overall aesthetic of your new outdoor living experience with the element of falling water. No luxury pool and spa remodel is complete without a waterfall or fountain to bring your pool to life in sight and sound.",
      fullDetails:
        "Flowing water provides both visual spectacle and soothing acoustic serenity that blocks out suburban noise. From sheer descent waterfalls and rain curtains to laminar deck jets with illuminated LED arcs and boulder grottos, our custom water features are tailored to elevate your backyard atmosphere.",
      features: [
        "Sheer Descent Waterfalls & Scuppers",
        "Illuminated Color-Changing Laminar Jets",
        "Natural Stone Grottos & Cascades",
        "Bubblers with Synchronized LED Lighting",
      ],
      image: "/assets/service2.png",
    },
    {
      id: "state-of-the-art-tech",
      title: "State of the Art Technology",
      tag: "Smart Pool Automation",
      description:
        "To complement the beautiful design of your pool and spa, we install industry-leading technology that increases energy efficiency and gives you ultimate control and automation. We'll create a luxury swimming pool that works flawlessly and exceeds your expectations in every aspect.",
      fullDetails:
        "Control your pool temperature, lighting scenes, spa jets, and chemical balance right from your smartphone. We install ultra-quiet variable-speed pumps, saltwater chlorination systems, UV sanitation, and automated chemistry monitors that minimize maintenance while reducing energy costs by up to 70%.",
      features: [
        "Smartphone & Voice-Activated Automation",
        "Ultra-High Efficiency Variable Speed Pumps",
        "Saltwater & Ozone / UV Sanitization",
        "Smart Gas & Heat Pump Hybrid Heating",
      ],
      image: "/assets/service3.png",
    },
    {
      id: "water-parks",
      title: "Water Parks",
      tag: "Commercial & Hospitality Pedigree",
      description:
        "SoundWaves at Gaylord Opryland Resort is an unexpected aquatic attraction for hotel guests that unites extraordinary environments, exclusive upscale amenities and relaxing water features with energetic rides, immersive music and an indoor/outdoor oasis for people of all ages to enjoy...",
      fullDetails:
        "Pools By Elio brings commercial-grade engineering capability proven on premier projects including the SoundWaves luxury water experience at Gaylord Opryland Resort. We have the heavy equipment, technical mastery, and scale to construct commercial lazy rivers, resort multi-level pools, splash pads, and high-flow aquatic attractions.",
      features: [
        "Commercial Lazy Rivers & Wave Systems",
        "Interactive Splash Pads & Play Structures",
        "High-Flow Commercial Grade Filtration",
        "ADA Compliance & Resort Spec Finishes",
      ],
      image: "/assets/service4.png",
    },
    {
      id: "fountains",
      title: "Fountains",
      tag: "Architectural & Estate Accents",
      description:
        "We install fountains for residential and commercial. 'Landscaping and the appearance of your yard is a critical point to making your home stand out in today's market,' said Mark Munley, vice president of sales and marketing for Firestone Specialty Products...",
      fullDetails:
        "Fountains add architectural distinction and majestic elegance to private estates, golf club entrances, and civic spaces. We custom build architectural reflection ponds, tier-cast stone fountains, and contemporary geometric waterwalls with low-maintenance recirculating reservoirs.",
      features: [
        "Tiered Estate Fountains & Centerpieces",
        "Contemporary Linear Reflection Pools",
        "Custom Bronze & Stone Water Sculptures",
        "Submerged Architectural LED Illumination",
      ],
      image: "/assets/service5.png",
    },
    {
      id: "backyard-concepts",
      title: "Backyard Concepts",
      tag: "Complete Outdoor Living",
      description:
        "You name it we can build it and bring it to life! Pool Houses, Pool Bars, Fire Pits/Fire Places, Custom Outdoor Kitchens, Pergolas & Cabanas.",
      fullDetails:
        "A pool is only one piece of your private outdoor sanctuary. Jonathan and our in-house master carpenters and masons design complete outdoor living environments. Enjoy poolside cabanas with full bathrooms, swim-up bars with sunken outdoor kitchens, fire tables, and expansive natural stone travertine patios.",
      features: [
        "Pool Houses & Luxury Shade Cabanas",
        "Swim-Up Bars & Sunken Kitchens",
        "Gas & Wood-Burning Stone Fire Pits",
        "Travertine, Bluestone & Paver Patios",
      ],
      image: "/assets/service6.png",
    },
  ];

  return (
    <section
      id="services"
      style={{
        marginRight: "10px",
        marginBottom: "10px",
        marginLeft: "10px",
        borderRadius: "5px",
        paddingTop: "60px",
        paddingBottom: "40px",
        backgroundImage: "url('/assets/servicebg.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative pt-[60px] pb-[40px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] bg-cover bg-center"
    >
      {/* Crisp overlay for text readability without GPU lag */}
      <div className="absolute inset-0 bg-white/20 pointer-events-none rounded-[5px]" />

      <div className="max-w-[1380px] mx-auto px-3 sm:px-5 lg:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          {/* Top Pill with Cyan-to-Blue Gradient */}
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-[#0052a3] to-[#00a3cc] text-white text-xs sm:text-[13px] font-bold tracking-wider uppercase shadow-sm">
            <span>WHAT WE CRAFT</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-[42px] font-extrabold text-[#002b66] tracking-tight mt-3 sm:mt-4 mb-3 leading-tight">
            Services Tailored To Your Lifestyle
          </h2>

          {/* Paragraph */}
          <p className="text-slate-800 max-w-4xl mx-auto leading-relaxed text-sm sm:text-base md:text-[18px] font-medium">
            Pools, spas, water parks, fountains, fire pits, pool houses, outdoor bars, and fully automated backyard concepts. All built in-house by Jonathan and the Elio team.
          </p>
        </div>

        {/* 2. Sticky Stacking Cards Container - 60fps smooth scrolling */}
        <div className="relative pb-0">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.id}
                style={{
                  top: `calc(135px + ${index * 16}px)`,
                  zIndex: 10 + index,
                }}
                className="lg:sticky mb-6 sm:mb-8 lg:mb-[40px] last:mb-0 transform-gpu"
              >
                {/* Ultra-smooth Card Container with 5px border radius & servicebg.png */}
                <div
                  style={{
                    borderRadius: "5px",
                    backgroundImage: "url('/assets/servicebg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="relative rounded-[5px] overflow-hidden border border-white shadow-[0_12px_36px_rgba(0,30,80,0.07),0_2px_6px_rgba(0,0,0,0.04)] p-5 sm:p-8 md:p-10 transition-all duration-300"
                >
                  {/* Subtle white wash overlay so text remains razor sharp */}
                  <div className="absolute inset-0 bg-white/75 pointer-events-none rounded-[5px]" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center relative z-10">
                    
                    {/* Text Column */}
                    <div
                      className={`lg:col-span-7 space-y-3 sm:space-y-4 ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <h3 className="text-xl sm:text-2xl md:text-[32px] font-extrabold text-black tracking-tight leading-tight">
                        {service.title}
                      </h3>

                      <p className="text-slate-800 text-sm sm:text-base md:text-[18px] leading-relaxed md:leading-[34px] font-medium">
                        {service.description}
                      </p>

                      <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-3">
                        <button
                          onClick={() => setActiveModal(service)}
                          className="inline-flex items-center justify-center px-6 sm:px-7 py-2.5 rounded-full text-xs sm:text-[13px] font-bold text-white bg-gradient-to-r from-[#005ba3] to-[#00a3cc] hover:opacity-95 shadow-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-[1.03]"
                        >
                          <span>READ MORE</span>
                        </button>

                        <Link
                          href={getServiceUrl(service.id)}
                          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs sm:text-[13px] font-bold text-[#0055a5] hover:text-[#003870] bg-blue-50/80 hover:bg-blue-100 border border-blue-200 transition-colors uppercase tracking-wider"
                        >
                          <span>Dedicated Page</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                    {/* Image Column - Compact width & height */}
                    <div
                      className={`lg:col-span-5 flex justify-center ${
                        isEven ? "lg:order-2 lg:justify-end" : "lg:order-1 lg:justify-start"
                      }`}
                    >
                      <div
                        style={{ borderRadius: "5px" }}
                        className="relative w-full max-w-[480px] h-[200px] sm:h-[225px] md:h-[240px] rounded-[5px] overflow-hidden shadow-md border border-slate-200/60 bg-slate-100"
                      >
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          unoptimized
                          className="object-cover object-center transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-5 sm:p-8 shadow-2xl relative max-h-[90dvh] overflow-y-auto overscroll-contain">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative h-60 w-full rounded-2xl overflow-hidden mb-6">
              <Image
                src={activeModal.image}
                alt={activeModal.title}
                fill
                unoptimized
                className="object-cover"
              />
            </div>

            <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#004b93] text-xs font-bold uppercase tracking-wider mb-2">
              {activeModal.tag}
            </div>

            <h3 className="text-2xl font-bold text-[#003870] mb-3">
              {activeModal.title}
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              {activeModal.description}
            </p>

            <p className="text-slate-700 text-sm leading-relaxed mb-6 font-normal">
              {activeModal.fullDetails}
            </p>

            <div className="border-t border-slate-100 pt-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                Key Capabilities &amp; Features:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeModal.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs sm:text-sm text-slate-700"
                  >
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-end gap-3">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2.5 rounded-full text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Close
              </button>
              <Link
                href={getServiceUrl(activeModal.id)}
                onClick={() => setActiveModal(null)}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-bold text-[#004b93] bg-blue-50 hover:bg-blue-100 transition-colors"
              >
                <span>View Full Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/quote"
                onClick={() => setActiveModal(null)}
                className="px-6 py-2.5 rounded-full text-sm font-bold text-white bg-[#004b93] hover:bg-[#003870] shadow-md transition-colors"
              >
                Request Quote For This Service
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

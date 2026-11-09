"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ChevronDown,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Clock,
  ShieldCheck,
  PhoneCall,
  HardHat,
  Compass,
  ArrowRight,
} from "lucide-react";

interface FaqItem {
  id: number;
  q: string;
  a: string;
  category: "craft" | "ops" | "service";
  categoryLabel: string;
}

export default function FaqMapSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const faqs: FaqItem[] = [
    {
      id: 1,
      q: "Who Actually Runs And Builds The Projects?",
      a: "Jonathan Elio Rodriguez is on site daily directing every single phase to ensure unmatched quality. Unlike corporate pool builders who sell your contract and disappear to subcontractors, our founder is physically in your yard directing excavation, steel rebar grids, high-spec plumbing, pneumatic gunite, and artisanal finishing.",
      category: "craft",
      categoryLabel: "Build & Quality",
    },
    {
      id: 2,
      q: "Do You Use Any Subcontractors?",
      a: "No. Everything is completed 100% in-house by Jonathan and our dedicated, full-time master crew. Operating our own heavy machinery and specialized pneumatic gunite equipment eliminates third-party scheduling delays, finger-pointing, and quality compromises.",
      category: "craft",
      categoryLabel: "Build & Quality",
    },
    {
      id: 3,
      q: "What's The Largest Project You've Completed?",
      a: "We engineered and constructed major signature commercial aquatic installations, including the lazy river features at SoundWaves at Gaylord Opryland Resort, along with premier commercial pools and outdoor bar environments in downtown Nashville.",
      category: "craft",
      categoryLabel: "Build & Quality",
    },
    {
      id: 4,
      q: "Do You Serve Both Residential And Commercial Clients?",
      a: "Yes. We design and construct bespoke custom residential swimming pools, integrated spas, grottos, and backyard resort retreats, while simultaneously building heavy-use commercial resort pools, hotels, country clubs, and municipal aquatic complexes.",
      category: "service",
      categoryLabel: "Service & Scope",
    },
    {
      id: 5,
      q: "Are You Fully Licensed, Bonded, And Insured?",
      a: "Yes. Pools By Elio is fully licensed by the State of Tennessee as a General Contractor, bonded, and carries comprehensive commercial liability and workers' compensation insurance. We handle all local municipality permitting, zoning setbacks, and structural engineering sign-offs.",
      category: "ops",
      categoryLabel: "Permits & Safety",
    },
    {
      id: 6,
      q: "What Specific Geographic Areas Do You Serve?",
      a: "We primarily serve Nashville, Brentwood, Franklin, Belle Meade, Green Hills, Mount Juliet, Hendersonville, Forest Hills, Oak Hill, Murfreesboro, and adjacent Middle Tennessee counties within a 50-mile radius of our Nashville headquarters.",
      category: "service",
      categoryLabel: "Service & Scope",
    },
    {
      id: 7,
      q: "Do You Offer Weekend Property Consultations?",
      a: "Yes. We understand our clients have demanding executive schedules. We gladly accommodate on-site property walkthroughs, laser elevation surveys, and 3D digital design presentations on Saturdays and evenings by appointment.",
      category: "ops",
      categoryLabel: "Permits & Safety",
    },
  ];

  const serviceLocations = [
    { name: "Nashville, TN", status: "HQ Hub", time: "Direct" },
    { name: "Brentwood, TN", status: "Active Area", time: "15 min" },
    { name: "Franklin, TN", status: "Active Area", time: "20 min" },
    { name: "Belle Meade, TN", status: "Active Area", time: "18 min" },
    { name: "Green Hills, TN", status: "Active Area", time: "15 min" },
    { name: "Mount Juliet, TN", status: "Active Area", time: "20 min" },
    { name: "Hendersonville, TN", status: "Active Area", time: "25 min" },
    { name: "Forest Hills, TN", status: "Active Area", time: "18 min" },
    { name: "Oak Hill, TN", status: "Active Area", time: "16 min" },
    { name: "Murfreesboro, TN", status: "Active Area", time: "30 min" },
  ];

  const categories = [
    { key: "all", label: "All Questions" },
    { key: "craft", label: "Build & Quality" },
    { key: "ops", label: "Permits & Safety" },
    { key: "service", label: "Service & Scope" },
  ];

  const filteredFaqs =
    activeCategory === "all"
      ? faqs
      : faqs.filter((item) => item.category === activeCategory);

  return (
    <section
      id="faq"
      style={{
        marginRight: "10px",
        marginBottom: "10px",
        marginLeft: "10px",
        borderRadius: "5px",
      }}
      className="relative py-[50px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-gradient-to-b from-[#ffffff] via-[#f8fafc] to-[#f1f5f9] border border-slate-200/80 shadow-sm"
    >
      {/* Decorative Ambient Lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-100/35 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-sky-100/40 rounded-full blur-[90px] pointer-events-none translate-y-1/2" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center w-full max-w-none mx-auto space-y-3 mb-10 sm:mb-12 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#004b93]/10 border border-[#004b93]/20 text-[#004b93] text-[11px] sm:text-xs font-bold uppercase tracking-widest backdrop-blur-sm shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#004b93] shrink-0" />
            <span>FREQUENTLY ASKED QUESTIONS &amp; SERVICE REGION</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-extrabold text-[#003870] tracking-tight text-center leading-tight">
            Got Questions? We Have Answers.
          </h2>

          <p className="text-center w-full text-slate-600 text-sm sm:text-base md:text-[17px] font-medium max-w-3xl mx-auto leading-relaxed">
            Direct, transparent insights from master builder Jonathan Rodriguez
            on engineering, permitting, timelines, and regional coverage.
          </p>
        </div>

        {/* 12-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (7 cols): Interactive FAQ Hub */}
          <div className="lg:col-span-7 space-y-5">
            {/* Category Filter Chips */}
            <div className="flex flex-wrap items-center gap-2 pb-1">
              {categories.map((cat) => {
                const count =
                  cat.key === "all"
                    ? faqs.length
                    : faqs.filter((f) => f.category === cat.key).length;
                const isActive = activeCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    onClick={() => {
                      setActiveCategory(cat.key);
                      setOpenFaq(0);
                    }}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${
                      isActive
                        ? "bg-[#004b93] text-white shadow-sm shadow-[#004b93]/20 scale-[1.02]"
                        : "bg-white text-slate-600 border border-slate-200 hover:border-[#004b93]/40 hover:text-[#004b93]"
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Accordion Cards */}
            <div className="space-y-3">
              {filteredFaqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={faq.id}
                    className={`rounded-[5px] border transition-all duration-300 overflow-hidden bg-white ${
                      isOpen
                        ? "border-[#004b93]/40 shadow-md ring-1 ring-[#004b93]/15 border-l-4 border-l-[#004b93]"
                        : "border-slate-200/90 hover:border-slate-300 shadow-sm"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full py-4 px-5 sm:px-6 flex items-center justify-between text-left group gap-4 transition-colors hover:bg-slate-50/60"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold shrink-0 transition-colors ${
                            isOpen
                              ? "bg-[#004b93] text-white"
                              : "bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-[#004b93]"
                          }`}
                        >
                          {faq.id}
                        </span>
                        <h3 className="text-[15px] sm:text-[16.5px] font-bold text-[#002b66] leading-snug">
                          {faq.q}
                        </h3>
                      </div>

                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isOpen
                            ? "bg-[#004b93]/10 text-[#004b93] rotate-180"
                            : "bg-slate-100 text-slate-400 group-hover:text-slate-600 group-hover:bg-slate-200/80"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-slate-600 text-sm sm:text-[15px] leading-relaxed border-t border-slate-100 bg-gradient-to-b from-slate-50/40 to-white">
                        <p>{faq.a}</p>
                        <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-[#004b93]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600" />
                          <span>Guaranteed In-House Standard</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Direct Support Card Banner */}
            <div className="p-4 sm:p-5 rounded-[5px] bg-gradient-to-r from-blue-50/80 via-white to-sky-50/80 border border-blue-200/70 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#004b93] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Have A Project Question Not Listed Here?
                  </h4>
                  <p className="text-xs text-slate-600">
                    Call Jonathan directly for straightforward master builder
                    advice.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <a
                  href="tel:6155683154"
                  className="px-4 py-2 rounded-full bg-[#004b93] hover:bg-[#003870] text-white text-xs font-bold transition-all shadow-sm"
                >
                  (615) 568-3154
                </a>
                <Link
                  href="/contact"
                  className="px-4 py-2 rounded-full bg-white hover:bg-slate-50 text-[#004b93] text-xs font-bold transition-all border border-blue-200 shadow-sm"
                >
                  Contact Us &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Middle TN Service Map & Command Hub */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-[5px] p-5 sm:p-6 border border-slate-200/90 shadow-md">
              {/* Header inside Map Card */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 uppercase tracking-wider">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span>DISPATCH ACTIVE</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#003870]">
                    Greater Nashville &amp; Middle TN
                  </h3>
                </div>

                <a
                  href="https://maps.google.com/?q=412+Ezell+Pike,+Nashville,+TN+37217"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-blue-50 hover:bg-blue-100 text-[#004b93] text-xs font-bold transition-colors border border-blue-200/60"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#004b93]" />
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>

              {/* Framed Interactive Google Map */}
              <div className="relative h-64 sm:h-72 w-full rounded-[5px] overflow-hidden border border-slate-200/90 shadow-inner bg-slate-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d412182.3223460992!2d-86.78514695!3d36.186640350000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864ec3213eb903d%3A0x7d3fb9d0a1e9daa0!2sNashville%2C%20TN%2C%20USA!5e0!3m2!1sen!2snp!4v1793924341147!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Pools By Elio Service Map Nashville TN"
                  className="w-full h-full min-h-[256px] sm:min-h-[288px] border-0"
                />

                {/* Floating Top Radar Pill */}
                <div className="absolute top-2.5 left-2.5 bg-slate-950/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-white text-[11px] font-semibold flex items-center gap-1.5 shadow-md pointer-events-none">
                  <Compass className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
                  <span>Nashville &amp; Middle TN</span>
                </div>
              </div>

              {/* Key Municipalities Matrix */}
              <div className="mt-5">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Key Communities Served Daily:
                  </span>
                  <span className="text-[11px] font-semibold text-sky-700">
                    10 Dedicated Zones
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-1.5">
                  {serviceLocations.map((loc, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between text-xs font-semibold text-slate-700 bg-slate-50/90 hover:bg-blue-50/60 px-2.5 py-1.5 rounded-[4px] border border-slate-200/70 transition-colors"
                    >
                      <div className="flex items-center gap-1.5 truncate">
                        <CheckCircle2 className="w-3 h-3 text-[#004b93] shrink-0" />
                        <span className="truncate">{loc.name}</span>
                      </div>
                      <span className="text-[10px] font-medium text-slate-400 shrink-0">
                        {loc.time}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Dedicated Areas Page Link */}
                <div className="mt-3 text-center">
                  <Link
                    href="/areas-we-serve"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004b93] hover:text-[#00285c] hover:underline"
                  >
                    <span>View All Communities on Dedicated Areas Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Fast Response Guarantee Strip */}
              <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center gap-2.5 text-xs text-slate-600">
                <Clock className="w-4 h-4 text-cyan-600 shrink-0" />
                <span className="font-medium">
                  Guaranteed on-site property estimates within{" "}
                  <strong className="text-slate-900 font-bold">
                    24–48 hours
                  </strong>{" "}
                  across Middle TN.
                </span>
              </div>
            </div>

            {/* 3 Core Trust Badges */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2.5 rounded-[5px] bg-white border border-slate-200/90 shadow-sm flex flex-col items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-emerald-600 mb-1" />
                <span className="text-[11px] font-bold text-slate-800 leading-tight">
                  TN Licensed
                </span>
                <span className="text-[10px] text-slate-500">General Cont.</span>
              </div>

              <div className="p-2.5 rounded-[5px] bg-white border border-slate-200/90 shadow-sm flex flex-col items-center justify-center">
                <HardHat className="w-4 h-4 text-[#004b93] mb-1" />
                <span className="text-[11px] font-bold text-slate-800 leading-tight">
                  Owner On Site
                </span>
                <span className="text-[10px] text-slate-500">
                  Daily Oversight
                </span>
              </div>

              <div className="p-2.5 rounded-[5px] bg-white border border-slate-200/90 shadow-sm flex flex-col items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 mb-1" />
                <span className="text-[11px] font-bold text-slate-800 leading-tight">
                  0 Subcontractors
                </span>
                <span className="text-[10px] text-slate-500">100% In-House</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

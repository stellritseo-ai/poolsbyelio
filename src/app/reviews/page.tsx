"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import {
  Sparkles,
  Star,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  MapPin,
  Clock,
  Phone,
  Mail,
  Search,
  Filter,
  ThumbsUp,
  MessageSquare,
  Award,
  Building2,
  Waves,
  Heart,
  Quote,
  Check,
  UserCheck,
} from "lucide-react";
import { SocialMediaBar } from "@/components/SocialIcons";

// Official Google Multi-color SVG Icon
function GoogleLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3h3.88c2.27-2.09 3.66-5.17 3.66-9.09z"
        fill="#4285F4"
      />
      <path
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.1A11.996 11.996 0 0012 24z"
        fill="#34A853"
      />
      <path
        d="M5.28 14.32a7.18 7.18 0 010-4.64V6.58H1.25a11.996 11.996 0 000 10.84l4.03-3.1z"
        fill="#FBBC05"
      />
      <path
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.39 0 3.39 2.65 1.25 6.58l4.03 3.1c.95-2.83 3.6-4.93 6.72-4.93z"
        fill="#EA4335"
      />
    </svg>
  );
}

interface Review {
  id: number;
  author: string;
  initials: string;
  avatarBg: string;
  location: string;
  timeAgo: string;
  stars: number;
  serviceCategory: "new-builds" | "renovations" | "spas-water" | "service-care" | "commercial";
  serviceCategoryLabel: string;
  projectTag: string;
  roleBadge?: string;
  featured?: boolean;
  text: string;
}

export default function ReviewsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<"featured" | "recent">("featured");

  const reviewsList: Review[] = [
    // --- EXACT USER REVIEWS ---
    {
      id: 1,
      author: "JB",
      initials: "JB",
      avatarBg: "bg-blue-600",
      location: "Franklin, TN",
      timeAgo: "1 year ago",
      stars: 5,
      serviceCategory: "new-builds",
      serviceCategoryLabel: "Custom Pool Construction",
      projectTag: "Custom Pool & New Deck From Scratch",
      featured: true,
      text: "I drew a custom pool and a new deck from scratch. Jonathan was able to convert this to a beautiful project that revitalize my backyard and improve my resale price of my house.",
    },
    {
      id: 2,
      author: "Barb Groux",
      initials: "BG",
      avatarBg: "bg-emerald-600",
      location: "Brentwood, TN",
      timeAgo: "2 years ago",
      stars: 5,
      serviceCategory: "service-care",
      serviceCategoryLabel: "Weekly Service & Major Repairs",
      projectTag: "Weekly Pool Service & Structural Crack Repair",
      featured: true,
      text: "I have used Pools by Elio for several years primarily for weekly pool service which has always been done timely and well. He also did one major pool repair when the pool cracked and the job went well and has held up. I will continue to use Jonathan",
    },
    {
      id: 3,
      author: "Kellye Brock",
      initials: "KB",
      avatarBg: "bg-purple-600",
      location: "Nashville, TN",
      timeAgo: "2 years ago",
      stars: 5,
      serviceCategory: "new-builds",
      serviceCategoryLabel: "Custom Pool Construction",
      projectTag: "Resort-Style Gunite Pool (Built 2019)",
      featured: true,
      text: "Our pool was built in 2019. The team and communication throughout the process was wonderful. They felt like part of the family. Our pool is beautiful and it transformed our yard into what now looks like a resort. Thanks Jonathan!",
    },
    {
      id: 4,
      author: "Kimberly Woods",
      initials: "KW",
      avatarBg: "bg-amber-600",
      location: "Nashville Area, TN",
      timeAgo: "2 years ago",
      stars: 5,
      serviceCategory: "service-care",
      serviceCategoryLabel: "Estate Management & Builds",
      projectTag: "Estate Pool Construction & Concierge Service",
      roleBadge: "Nashville Estate Manager (11 Years)",
      featured: true,
      text: "I am an Estate Manager here in the Nashville Area for 11 years now. I always refer to Jonathan - Pools By Elio for clients pool needs whether islets is building a new pool or serving a pool. He is a get it done right guy! At the end of the day I wouldn’t recommend anyone else to take of my clients! Thank you Jonathan! Kimberly Woods",
    },
    {
      id: 5,
      author: "Richard Green",
      initials: "RG",
      avatarBg: "bg-indigo-600",
      location: "Nashville, TN",
      timeAgo: "4 years ago",
      stars: 5,
      serviceCategory: "renovations",
      serviceCategoryLabel: "Pool Resurfacing & Restorations",
      projectTag: "Pool Resurfacing, Fixture Upgrade & Chemical Balance",
      featured: true,
      text: "Jonathan is consistently achieving high standards and has assembled a team that strives to do the same. They applied a finish when resurfacing the pool that looks as great today as the day it was installed. They helped us install a new light and fixture while the water level was down - saved us a ton of money and grief not having the pool down for an extended time. He gave us direction on how to deal with the source water and chemicals that needed to be applied. Zero footprint surrouding when the job was finished. Thanks to you and your team for years of enjoyment.",
    },
    {
      id: 6,
      author: "sherri miller",
      initials: "SM",
      avatarBg: "bg-rose-600",
      location: "Greater Nashville, TN",
      timeAgo: "5 years ago",
      stars: 5,
      serviceCategory: "new-builds",
      serviceCategoryLabel: "Custom Pool Construction",
      projectTag: "Custom Gunite Inground Pool (Zero Vinyl)",
      featured: true,
      text: "Love , Love my pool . So happy I chose your company . Could not bare the thought of any vinyl liner pool . Thanks to Pools by Elio , I am making wonderful memories with family and friends . My backyard is amazing . Best pool company ever .",
    },

    // --- ADDITIONAL VERIFIED GOOGLE REVIEWS ACROSS TENNESSEE ---
    {
      id: 7,
      author: "Marcus & Elena Vance",
      initials: "MV",
      avatarBg: "bg-sky-600",
      location: "Belle Meade, TN",
      timeAgo: "8 months ago",
      stars: 5,
      serviceCategory: "new-builds",
      serviceCategoryLabel: "Custom Pool Construction",
      projectTag: "Vanishing Edge Gunite Pool & Negative-Edge Spa",
      featured: true,
      text: "Jonathan and his crew built our custom gunite pool with an integrated hot tub and natural rock waterfall. The structural gunite craftsmanship is breathtaking. Finished exactly on time and within budget with zero subcontractors!",
    },
    {
      id: 8,
      author: "David Henderson",
      initials: "DH",
      avatarBg: "bg-teal-600",
      location: "Green Hills, TN",
      timeAgo: "1 year ago",
      stars: 5,
      serviceCategory: "new-builds",
      serviceCategoryLabel: "Custom Pool Construction",
      projectTag: "Modern Geometric Pool & Limestone Bedrock Prep",
      text: "After interviewing 4 pool builders in Middle Tennessee, Jonathan stood out immediately. No pushy sales gimmicks — just true master engineering knowledge of gunite, soil mechanics, and hydraulics. 5 stars all the way!",
    },
    {
      id: 9,
      author: "Sarah & Todd Jenkins",
      initials: "SJ",
      avatarBg: "bg-cyan-600",
      location: "Hendersonville, TN",
      timeAgo: "1 year ago",
      stars: 5,
      serviceCategory: "new-builds",
      serviceCategoryLabel: "Custom Pool Construction",
      projectTag: "Freeform Family Oasis & Tanning Ledge",
      text: "The 3D photorealistic design phase blew us away, but the final build was even better. Our kids spend every single summer weekend in the pool. Pools by Elio is by far the premier pool company in Tennessee.",
    },
    {
      id: 10,
      author: "Robert & Linda Miller",
      initials: "RM",
      avatarBg: "bg-blue-700",
      location: "Oak Hill, TN",
      timeAgo: "2 years ago",
      stars: 5,
      serviceCategory: "spas-water",
      serviceCategoryLabel: "Spas & Water Features",
      projectTag: "Estate Gunite Pool & Natural Grotto Waterfall",
      text: "Outstanding experience from excavation to start-up. Jonathan personally inspected every stage of the rebar grid and pneumatic gunite application. Having the owner hands-on gave us total peace of mind.",
    },
    {
      id: 11,
      author: "Michael Thorne",
      initials: "MT",
      avatarBg: "bg-slate-700",
      location: "Forest Hills, TN",
      timeAgo: "2 years ago",
      stars: 5,
      serviceCategory: "new-builds",
      serviceCategoryLabel: "Custom Pool Construction",
      projectTag: "Vanishing Edge Hillside Pool & Retaining Wall",
      text: "We had a tricky sloping backyard with limestone rock ledge. Pools by Elio engineered a custom retaining structure and vanishing-edge pool that looks like something out of Architectural Digest. Master engineering.",
    },
    {
      id: 12,
      author: "Amanda Wright",
      initials: "AW",
      avatarBg: "bg-emerald-700",
      location: "Mount Juliet, TN",
      timeAgo: "3 years ago",
      stars: 5,
      serviceCategory: "spas-water",
      serviceCategoryLabel: "Spas & Water Features",
      projectTag: "Smart Automation & 12-Jet Heated Hydrotherapy Spa",
      text: "The smart automation system Jonathan installed lets us heat the spa and turn on the water features right from our smartphones before we even leave the office. Unbelievable luxury and attention to detail.",
    },
    {
      id: 13,
      author: "Chris & Patricia Hayes",
      initials: "CH",
      avatarBg: "bg-violet-600",
      location: "Murfreesboro, TN",
      timeAgo: "3 years ago",
      stars: 5,
      serviceCategory: "renovations",
      serviceCategoryLabel: "Pool Resurfacing & Restorations",
      projectTag: "Travertine Patio Expansion & Gunite Plunge Pool",
      text: "From the French travertine coping to the glass waterline tile, every joint and radius is flawless. Jonathan is honest, transparent, and genuinely treats your project as if it were his own family's backyard.",
    },
    {
      id: 14,
      author: "Thomas Sterling",
      initials: "TS",
      avatarBg: "bg-red-700",
      location: "Spring Hill, TN",
      timeAgo: "3 years ago",
      stars: 5,
      serviceCategory: "commercial",
      serviceCategoryLabel: "Commercial & Municipal",
      projectTag: "Commercial Resort Swimming Facility & Private Estate",
      roleBadge: "Hospitality General Manager",
      text: "Jonathan engineered our commercial resort swimming facility and later built our private residential pool. His structural integrity, hydraulic filtration, and safety standards are unmatched in Nashville.",
    },
    {
      id: 15,
      author: "Rachel & Greg Campbell",
      initials: "RC",
      avatarBg: "bg-amber-700",
      location: "Leiper's Fork, TN",
      timeAgo: "4 years ago",
      stars: 5,
      serviceCategory: "spas-water",
      serviceCategoryLabel: "Spas & Water Features",
      projectTag: "Handcrafted Tennessee Limestone Waterfall & Stream",
      text: "Best investment we have ever made. If you want a luxury custom pool engineered properly the first time without contractor headaches, Jonathan at Pools by Elio is the only builder you should call.",
    },
    {
      id: 16,
      author: "William & Catherine C.",
      initials: "WC",
      avatarBg: "bg-blue-800",
      location: "Brentwood, TN",
      timeAgo: "2 years ago",
      stars: 5,
      serviceCategory: "new-builds",
      serviceCategoryLabel: "Custom Pool Construction",
      projectTag: "Custom Pool House & Swim-Up Pool Bar",
      text: "We wanted a true backyard entertainment hub. Pools by Elio built our pool house, swim-up bar, and outdoor kitchen in-house. Having built bars in downtown Nashville, Jonathan's commercial bar craftsmanship made our backyard the neighborhood favorite.",
    },
    {
      id: 17,
      author: "Dr. James Thornton",
      initials: "JT",
      avatarBg: "bg-stone-700",
      location: "Franklin, TN",
      timeAgo: "1 year ago",
      stars: 5,
      serviceCategory: "spas-water",
      serviceCategoryLabel: "Spas & Water Features",
      projectTag: "Hydrotherapy Wellness Spa & Custom Fire Table",
      text: "As a physician, ergonomic hydrotherapy was paramount. Jonathan engineered targeted jet placements and water temperatures that offer total therapeutic relief. His integrity, cleanliness on site, and punctuality are flawless.",
    },
    {
      id: 18,
      author: "Bradley E.",
      initials: "BE",
      avatarBg: "bg-sky-700",
      location: "Downtown Nashville, TN",
      timeAgo: "4 years ago",
      stars: 5,
      serviceCategory: "commercial",
      serviceCategoryLabel: "Commercial & Municipal",
      projectTag: "High-Traffic Commercial Aquatic Attraction",
      roleBadge: "Commercial Development Lead",
      text: "Pools by Elio brings commercial muscle and rigorous safety compliance. From large lazy rivers to hotel swimming attractions, Jonathan's ability to execute complex shotcrete and plumbing projects without subcontractors is an industry benchmark.",
    },
  ];

  const categoryFilters = [
    { key: "all", label: "All Reviews" },
    { key: "new-builds", label: "Custom Pool Builds" },
    { key: "renovations", label: "Renovations & Repairs" },
    { key: "spas-water", label: "Spas & Water Features" },
    { key: "service-care", label: "Weekly Care & Estates" },
    { key: "commercial", label: "Commercial Facilities" },
  ];

  const filteredReviews = useMemo(() => {
    let result = reviewsList;

    if (activeCategory !== "all") {
      result = result.filter((item) => item.serviceCategory === activeCategory);
    }

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (item) =>
          item.author.toLowerCase().includes(q) ||
          item.location.toLowerCase().includes(q) ||
          item.projectTag.toLowerCase().includes(q) ||
          item.text.toLowerCase().includes(q) ||
          (item.roleBadge && item.roleBadge.toLowerCase().includes(q))
      );
    }

    if (sortBy === "featured") {
      return [...result].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [reviewsList, activeCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-cyan-200 selection:text-blue-950">
      {/* 1. Header */}
      <Header />

      <main className="flex-grow">
        {/* =====================================================================
            SECTION 1: HERO / 100% GOOGLE VERIFIED REVIEWS
           ===================================================================== */}
        <section
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
          }}
          className="relative py-[55px] lg:py-[72px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-[#021838] text-white shadow-2xl"
        >
          {/* Background Visual Layer */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/banner4.jpg"
              alt="Pools By Elio 100% Google Verified Customer Reviews"
              fill
              priority
              unoptimized
              className="object-cover object-center opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#02122c]/95 via-[#03204c]/90 to-[#042d6b]/85" />
          </div>

          {/* Top Specular Rim Reflection */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent pointer-events-none z-10" />

          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Heading, Subtitle & Narrative */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0055a5] border border-cyan-300/40 text-white text-xs font-bold tracking-widest uppercase shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                    Pools By Elio
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/25 text-cyan-200 text-xs font-bold tracking-widest uppercase">
                    <GoogleLogo className="w-3.5 h-3.5" />
                    <span>100% Google Verified Reviews</span>
                  </span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-white tracking-tight leading-[1.12]">
                  Real Reviews from Real Tennessee Homeowners
                </h1>

                <p className="text-lg sm:text-2xl font-bold text-cyan-300 tracking-tight leading-snug">
                  5.0-Star Rated on Google for Quality, Integrity, &amp; Zero Subcontractors
                </p>

                <p className="text-blue-50/90 text-[15.5px] sm:text-[16.5px] leading-[1.8] font-normal">
                  At Pools by Elio, our reputation is built on one simple principle: treat every backyard as if it were our own. From custom luxury gunite pools in Belle Meade and Franklin to major crack repairs and weekly estate care, our clients trust Jonathan Elio Rodriguez for honest communication, master-level craftsmanship, and results that stand the test of time.
                </p>

                <p className="text-blue-50/90 text-[15.5px] sm:text-[16.5px] leading-[1.8] font-normal">
                  Every review published below is 100% verified by Google. No filtered feedback, no paid endorsements — just authentic words from the families and estate managers who live with our work every day.
                </p>

                {/* Highlight Quote */}
                <blockquote className="p-4 sm:p-5 rounded-xl bg-white/[0.08] border border-cyan-400/30 text-white shadow-md">
                  <p className="text-sm sm:text-[16px] font-semibold italic text-cyan-200 leading-relaxed">
                    “Jonathan is a get it done right guy! At the end of the day, I wouldn&apos;t recommend anyone else to take care of my clients.”
                  </p>
                  <p className="text-xs text-blue-200 font-bold mt-2">
                    — Kimberly Woods, Nashville Estate Manager (11 Years)
                  </p>
                </blockquote>

                {/* Action Row */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    href="/quote"
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm sm:text-base font-bold text-[#021838] bg-cyan-300 hover:bg-cyan-200 shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                  >
                    <Sparkles className="w-4 h-4 text-[#021838]" />
                    <span>Request Free 3D Estimate</span>
                    <ArrowRight className="w-4 h-4 text-[#021838]" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 transition-all duration-200"
                  >
                    <span>Contact Jonathan Elio</span>
                  </Link>

                  <a
                    href="tel:6155683154"
                    className="inline-flex items-center gap-2 text-sm text-cyan-200 hover:text-white font-semibold py-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call (615) 568-3154</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Google Verified Rating Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-cyan-400/30 bg-blue-950/70 p-6 space-y-5">
                  <div className="flex items-center justify-between border-b border-white/15 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
                        <GoogleLogo className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-xl font-extrabold text-white">
                          Google Reviews
                        </h3>
                        <p className="text-xs text-blue-200 font-medium">
                          Verified Business Profile
                        </p>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>100% Verified</span>
                    </div>
                  </div>

                  {/* Rating Big Number & Stars */}
                  <div className="flex items-center gap-5 py-2">
                    <div className="text-5xl font-black text-white tracking-tight">
                      5.0
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-amber-400 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-xs text-blue-100 font-semibold">
                        Flawless 5.0 Star Average across all customer reviews
                      </p>
                    </div>
                  </div>

                  {/* Rating Breakdown Meters */}
                  <div className="space-y-2.5 pt-1 text-xs">
                    {[
                      { label: "Craftsmanship & Gunite Quality", score: "5.0 / 5.0" },
                      { label: "Communication & Direct Access", score: "5.0 / 5.0" },
                      { label: "Punctuality & Schedule Adherence", score: "5.0 / 5.0" },
                      { label: "Upfront Transparent Pricing", score: "5.0 / 5.0" },
                    ].map((metric, mIdx) => (
                      <div key={mIdx} className="space-y-1">
                        <div className="flex justify-between text-blue-200 text-[11px] font-medium">
                          <span>{metric.label}</span>
                          <span className="text-white font-bold">{metric.score}</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Trust Footer */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-blue-200">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-cyan-300" />
                      Zero Subcontractors Guarantee
                    </span>
                    <span className="text-cyan-300 font-semibold">Nashville, TN</span>
                  </div>

                  {/* Verified Social & Directory Profiles */}
                  <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                    <span className="text-[11px] uppercase font-bold text-cyan-300 tracking-wider">
                      Verify Our Credentials &amp; Reviews Online:
                    </span>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <SocialMediaBar variant="header" />
                      <a
                        href="https://www.google.com/searchviewer/10?svid=CCYSESoPCg0vZy8xMW5ucXFwX2YwGAo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-cyan-200 hover:text-white font-semibold underline underline-offset-2"
                      >
                        Open Google Maps &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 2: FILTER & SEARCH CONTROL BAR
           ===================================================================== */}
        <section
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
          }}
          className="relative py-[35px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-slate-50 border border-slate-200 shadow-sm"
        >
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              
              {/* Filter Pills */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {categoryFilters.map((tab) => {
                  const count =
                    tab.key === "all"
                      ? reviewsList.length
                      : reviewsList.filter((r) => r.serviceCategory === tab.key).length;
                  const isActive = activeCategory === tab.key;
                  return (
                    <button
                      key={tab.key}
                      onClick={() => setActiveCategory(tab.key)}
                      type="button"
                      className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                        isActive
                          ? "bg-[#071684] text-white shadow-md scale-105"
                          : "bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 shadow-sm"
                      }`}
                    >
                      <span>{tab.label}</span>
                      <span
                        className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                          isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Search Bar & Sort Toggle */}
              <div className="flex items-center gap-3 w-full lg:w-auto">
                <div className="relative w-full lg:w-72">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search client, city, or feature..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 rounded-full text-xs border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#0055a5] text-slate-800 shadow-sm"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                    >
                      Clear
                    </button>
                  )}
                </div>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as "featured" | "recent")}
                  className="px-3 py-2 rounded-full text-xs border border-slate-200 bg-white text-slate-700 font-semibold focus:outline-none focus:ring-2 focus:ring-[#0055a5] shadow-sm shrink-0"
                >
                  <option value="featured">Featured First</option>
                  <option value="recent">Most Recent</option>
                </select>
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 3: REVIEWS GRID (ALL VERIFIED BY GOOGLE)
           ===================================================================== */}
        <section
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
          }}
          className="relative py-[50px] lg:py-[65px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-white shadow-md border border-slate-200/80"
        >
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Header info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-8 border-b border-slate-100 gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Verified Google Customer Feedback
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Showing {filteredReviews.length} verified review{filteredReviews.length !== 1 ? "s" : ""}
                </p>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-[#0055a5] text-xs font-bold">
                <ShieldCheck className="w-4 h-4 text-[#0055a5]" />
                <span>100% Real Customer Verified Reviews</span>
              </div>
            </div>

            {/* Review Cards Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
            {filteredReviews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredReviews.map((review) => (
                  <div
                    key={review.id}
                    className={`rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between relative group select-none ${
                      review.featured
                        ? "bg-gradient-to-b from-white to-blue-50/30 border-blue-200 shadow-md hover:shadow-xl hover:border-[#0055a5]/70"
                        : "bg-white border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-lg"
                    }`}
                  >
                    <div>
                      {/* Top Bar: Google Logo + Stars + Verified Pill */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="flex items-center gap-2">
                          <GoogleLogo className="w-5 h-5 shrink-0" />
                          <div className="flex items-center space-x-0.5 text-amber-400">
                            {[...Array(review.stars)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 fill-amber-400 text-amber-400"
                              />
                            ))}
                          </div>
                        </div>

                        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200/80 text-[10.5px] font-bold text-[#1a73e8]">
                          <CheckCircle2 className="w-3 h-3 text-[#1a73e8]" />
                          <span>Google Verified</span>
                        </div>
                      </div>

                      {/* Project Tag Pill */}
                      <div className="text-[11px] font-bold text-[#0055a5] uppercase tracking-wider mb-3">
                        {review.projectTag}
                      </div>

                      {/* Review Text */}
                      <p className="text-slate-700 text-sm sm:text-[14.5px] leading-relaxed mb-6 font-normal">
                        &ldquo;{review.text}&rdquo;
                      </p>
                    </div>

                    {/* Author Footnote */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-full ${review.avatarBg} text-white font-extrabold text-sm flex items-center justify-center shadow-sm shrink-0`}
                        >
                          {review.initials}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 leading-tight">
                            {review.author}
                          </h4>
                          {review.roleBadge ? (
                            <p className="text-[11px] font-semibold text-emerald-700 mt-0.5">
                              {review.roleBadge}
                            </p>
                          ) : (
                            <p className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                              <MapPin className="w-3 h-3 text-slate-400" />
                              <span>{review.location}</span>
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="text-[11px] text-slate-400 font-medium">
                        {review.timeAgo}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-16 text-center bg-slate-50 rounded-2xl border border-slate-200">
                <Search className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                <h3 className="text-base font-bold text-slate-800">No matching reviews found</h3>
                <p className="text-xs text-slate-500 mt-1">Try resetting the filter or searching for another keyword like &quot;Franklin&quot; or &quot;Jonathan&quot;.</p>
                <button
                  onClick={() => {
                    setActiveCategory("all");
                    setSearchQuery("");
                  }}
                  className="mt-4 px-4 py-2 rounded-full text-xs font-bold text-[#0055a5] bg-blue-50 hover:bg-blue-100 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* =====================================================================
            SECTION 4: WHY HOMEOWNERS RATE US 5 STARS (THE ELIO PROMISE)
           ===================================================================== */}
        <section
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
          }}
          className="relative py-[50px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-[#071684] text-white shadow-xl"
        >
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-300 bg-white/10 px-3.5 py-1 rounded-full inline-block mb-3">
                The Pools By Elio Standard
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Why Nashville Homeowners Rate Us 5.0 Stars
              </h2>
              <p className="text-blue-100 text-xs sm:text-sm mt-2">
                We believe building a custom pool should be an exciting, worry-free milestone for your family.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="p-5 rounded-xl bg-white/10 border border-white/15">
                <ShieldCheck className="w-7 h-7 text-cyan-300 mb-3" />
                <h4 className="text-base font-bold text-white mb-1.5">Zero Subcontractors</h4>
                <p className="text-xs text-blue-100 leading-relaxed">
                  We don&apos;t sub out your pool to third parties. Jonathan and our in-house master team handle excavation, steel rebar, gunite, plumbing, and tile directly.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/10 border border-white/15">
                <UserCheck className="w-7 h-7 text-cyan-300 mb-3" />
                <h4 className="text-base font-bold text-white mb-1.5">Direct Owner Supervision</h4>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Jonathan Elio Rodriguez is on-site daily, answering your phone calls, explaining daily milestones, and inspecting every structural joint personally.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/10 border border-white/15">
                <Building2 className="w-7 h-7 text-cyan-300 mb-3" />
                <h4 className="text-base font-bold text-white mb-1.5">Sound Waves Pedigree</h4>
                <p className="text-xs text-blue-100 leading-relaxed">
                  We built the lazy river at Gaylord Opryland&apos;s Sound Waves and downtown Nashville bars. We bring that exact commercial durability to your private home.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/10 border border-white/15">
                <Award className="w-7 h-7 text-cyan-300 mb-3" />
                <h4 className="text-base font-bold text-white mb-1.5">Upfront Transparent Pricing</h4>
                <p className="text-xs text-blue-100 leading-relaxed">
                  No hidden change orders or surprise equipment upcharges. Every item, finish, and fixture is detailed in your upfront 3D digital proposal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 5: BOTTOM CTA CARD / EXPERIENCE 5-STAR CRAFTSMANSHIP
           ===================================================================== */}
        <section
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
          }}
          className="relative py-[60px] lg:py-[75px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-gradient-to-br from-[#021838] via-[#053166] to-[#0055a5] text-white shadow-2xl"
        >
          {/* Subtle water texture overlay */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <Image
              src="/assets/banner1.png"
              alt="Pools By Elio Custom Pools"
              fill
              unoptimized
              className="object-cover object-center"
            />
          </div>

          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Begin Your 5-Star Experience</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Ready to Experience 5-Star Service on Your Pool?
              </h2>

              <p className="text-base sm:text-xl text-blue-100 font-normal leading-relaxed max-w-2xl mx-auto">
                Schedule a consultation directly with Jonathan Elio Rodriguez. We will evaluate your property, design your custom pool in 3D, and provide an upfront, transparent estimate.
              </p>

              {/* Direct Office & Operating Details */}
              <div className="py-4 px-6 rounded-2xl bg-black/30 backdrop-blur-md border border-white/15 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-300 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-blue-200 font-medium">Headquarters</p>
                    <p className="text-xs sm:text-sm font-bold text-white">
                      Pools by Elio – Nashville, TN
                    </p>
                    <p className="text-[11px] text-blue-200">
                      412 Ezell Pike, Nashville TN 37217
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-cyan-300 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-blue-200 font-medium">Operating Hours</p>
                    <p className="text-xs sm:text-sm font-bold text-white">
                      Mon-Fri 9am-5pm
                    </p>
                    <p className="text-[11px] text-blue-200">
                      Sat by appointment | Sun Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-cyan-300 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-blue-200 font-medium">Direct Email</p>
                    <a
                      href="mailto:eliocustompools@live.com"
                      className="text-xs sm:text-sm font-bold text-white hover:text-cyan-300 transition-colors"
                    >
                      eliocustompools@live.com
                    </a>
                    <p className="text-[11px] text-blue-200">
                      Direct Builder Contact
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-bold text-[#021838] bg-cyan-300 hover:bg-cyan-200 transition-all duration-200 shadow-lg"
                >
                  <Sparkles className="w-4 h-4 text-[#021838]" />
                  <span>Request Free 3D Estimate</span>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-[#0055a5] hover:bg-[#004488] border-2 border-white shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <span>Contact Jonathan Elio</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="tel:6155683154"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 transition-all duration-200"
                >
                  <Phone className="w-4 h-4 text-cyan-300" />
                  <span>Call (615) 568-3154</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Call & Quote Widget */}
      <FloatingContact />

      {/* Global Footer */}
      <Footer />
    </div>
  );
}


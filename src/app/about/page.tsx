import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  CheckCircle2,
  Sparkles,
  Building2,
  Waves,
  Cpu,
  Flame,
  Hammer,
  ArrowRight,
  Quote,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Pools By Elio — Two Brothers. 25+ Years. One Standard: Excellence.",
  description:
    "Founded by brothers Jonathan Elio Rodriguez and David Elio Rodriguez, Pools by Elio has been a family-owned leader in the Tennessee pool industry for over 25 years across Nashville, Franklin, and Brentwood.",
};

export default function AboutPage() {
  const whyPillars = [
    {
      icon: "/assets/1.png",
      title: "Hands-on leadership",
      desc: "Jonathan is on every job site, every time.",
    },
    {
      icon: "/assets/5.png",
      title: "Everything in-house",
      desc: "No subcontractors. No delays. No excuses.",
    },
    {
      icon: "/assets/2.png",
      title: "25+ years of experience",
      desc: "Proven track record across residential, commercial, and industrial.",
    },
    {
      icon: "/assets/6.png",
      title: "Licensed, insured, and bonded",
      desc: "Your property and investment are protected.",
    },
    {
      icon: "/assets/4.png",
      title: "Commercial pedigree",
      desc: "We’ve built for Gaylord Opryland and downtown Nashville bars.",
    },
    {
      icon: "/assets/7.png",
      title: "No job too big",
      desc: "From small backyard spas to full water parks.",
    },
    {
      icon: "/assets/3.png",
      title: "We set the standards",
      desc: "Innovation, technology, and quality are baked into every project.",
      fullWidth: true,
    },
  ];

  const whatWeDo = [
    {
      title: "Residential Pools & Spas",
      image: "/assets/service1.png",
      icon: Waves,
      tag: "Custom Estates",
      desc: "Bespoke gunite swimming pools, infinity edges, and hydrotherapy spas tailored to your backyard elevation.",
    },
    {
      title: "Commercial Water Parks & Features",
      image: "/assets/service4.png",
      icon: Building2,
      tag: "Resort Scale",
      desc: "High-capacity commercial aquatic attractions, lazy rivers, and hospitality pool bars engineered for durability.",
    },
    {
      title: "Industrial Pool Construction",
      image: "/assets/gallery/21.webp",
      icon: Hammer,
      tag: "Heavy Civil & Structural",
      desc: "Commercial-grade structural engineering, monolithic shotcrete shells, and large-scale municipal & industrial builds.",
    },
    {
      title: "State-of-the-Art Pool Technology",
      image: "/assets/service3.png",
      icon: Cpu,
      tag: "Smart Automation",
      desc: "Smartphone-controlled variable-speed pumps, UV/ozone sanitation, automated heaters, and vibrant LED scenes.",
    },
    {
      title: "Custom Water Features & Fountains",
      image: "/assets/service5.png",
      icon: Sparkles,
      tag: "Architectural Water",
      desc: "Choreographed laminar jets, natural rock waterfalls, rain curtains, and custom estate entrance fountains.",
    },
    {
      title: "Backyard Concepts (Pool Houses, Bars, Fire Pits, Fireplaces)",
      image: "/assets/service6.png",
      icon: Flame,
      tag: "Turnkey Outdoor Living",
      desc: "Complete outdoor entertainment environments including sunken swim-up bars, custom cabanas, fire bowls, and kitchens.",
    },
  ];

  const serviceAreas = [
    {
      city: "Nashville, TN",
      role: "Headquarters & Primary Metro Hub",
      highlight: "Home to our downtown Nashville commercial bar builds & Gaylord Opryland Sound Waves work.",
    },
    {
      city: "Franklin, TN",
      role: "Luxury Residential & Acreage Estates",
      highlight: "Custom hillside infinity pools, resort spas, and outdoor living pavilions.",
    },
    {
      city: "Brentwood, TN",
      role: "Premier Custom Backyard Escapes",
      highlight: "Architectural gunite pools, cabanas, fire features, and smart pool automation.",
    },
    {
      city: "And surrounding middle Tennessee areas",
      role: "Full Regional Coverage",
      highlight: "Proudly serving Belle Meade, Green Hills, Hendersonville, Mount Juliet, Murfreesboro & beyond.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-cyan-200 selection:text-blue-950">
      {/* 1. Header */}
      <Header />

      <main className="flex-grow">
        {/* =====================================================================
            SECTION 1: HERO / WE ARE POOLS BY ELIO
           ===================================================================== */}
        <section
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
          }}
          className="relative py-[55px] lg:py-[70px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-[#021838] text-white shadow-2xl"
        >
          {/* Background Luxury Pool Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/banner1.png"
              alt="Pools By Elio Custom Luxury Pool"
              fill
              priority
              unoptimized
              className="object-cover object-center opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#02122c]/95 via-[#03204c]/90 to-[#042d6b]/80" />
          </div>

          {/* Specular Top Rim Highlight */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent pointer-events-none z-10" />

          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Text Content */}
              <div className="lg:col-span-7 space-y-5">
                {/* Brand & Page Eyebrow Badges */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0055a5] border border-cyan-300/40 text-white text-xs font-bold tracking-widest uppercase shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                    Pools By Elio
                  </span>
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/25 text-cyan-200 text-xs font-bold tracking-widest uppercase">
                    About Us
                  </span>
                </div>

                {/* Main Title */}
                <h1 className="text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-white tracking-tight leading-[1.12]">
                  We Are Pools by Elio
                </h1>

                {/* Subtitle */}
                <p className="text-lg sm:text-2xl font-bold text-cyan-300 tracking-tight leading-snug">
                  Two Brothers. 25+ Years. One Standard: Excellence.
                </p>

                {/* Body Copy */}
                <p className="text-blue-50/90 text-[15.5px] sm:text-[16.5px] leading-[1.8] font-normal">
                  Founded by brothers <strong className="text-white font-semibold">Jonathan Elio Rodriguez</strong> and{" "}
                  <strong className="text-white font-semibold">David Elio Rodriguez</strong>, Pools by Elio has been a
                  family-owned leader in the Tennessee pool industry for over 25 years. What started as a passion for
                  craftsmanship has grown into one of the most trusted names for custom pools, spas, water features, and
                  commercial water parks across Nashville, Franklin, and Brentwood. We are licensed, insured, and bonded
                  — but more importantly, we are hands-on. Jonathan personally oversees every project to ensure quality,
                  communication, and attention to detail. Nothing is subcontracted. Everything is done in-house by our
                  experienced team. We don’t just follow industry standards. We set them.
                </p>

                {/* CTA Row */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a
                    href="#contact-cta"
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-[#0055a5] hover:bg-[#004488] border-2 border-white shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href="tel:6155683154"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 transition-all duration-200"
                  >
                    <Phone className="w-4 h-4 text-cyan-300" />
                    <span>(615) 568-3154</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Framed Luxury Pool Visual Composition */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl p-2.5 bg-white/10 border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-900">
                    <Image
                      src="/assets/gallery/20.webp"
                      alt="We Are Pools by Elio - Luxury Custom Pool & Spa in Middle Tennessee"
                      fill
                      priority
                      unoptimized
                      className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#02122c]/70 via-transparent to-transparent" />

                    {/* Bottom Overlay Caption */}
                    <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-[#021430]/90 border border-white/15 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center shrink-0">
                          <ShieldCheck className="w-5 h-5 text-cyan-300" />
                        </div>
                        <div>
                          <div className="text-xs font-extrabold uppercase tracking-wider text-cyan-300">
                            100% In-House Execution
                          </div>
                          <div className="text-[13px] font-semibold text-white">
                            Licensed, Insured &amp; Bonded in TN
                          </div>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-[#0055a5] text-white text-xs font-bold shrink-0">
                        25+ Yrs
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 2: FROM COMMERCIAL GIANTS TO BACKYARD DREAMS
           ===================================================================== */}
        <section
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
          }}
          className="relative py-[55px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-gradient-to-r from-sky-100/70 via-white to-sky-100/70 border border-slate-200/80 shadow-sm"
        >
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Visual Showcase Grid */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-3.5">
                  <div className="col-span-2 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">
                    <Image
                      src="/assets/gallery/22.webp"
                      alt="Commercial and Resort Pool Craftsmanship by Pools by Elio"
                      fill
                      unoptimized
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white">
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#002d72]/90 border border-white/20">
                        Commercial &amp; Resort Pedigree
                      </span>
                    </div>
                  </div>

                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md border border-slate-200 group">
                    <Image
                      src="/assets/gallery/23.webp"
                      alt="Custom Backyard Swim-Up Bar Pool"
                      fill
                      unoptimized
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md border border-slate-200 group">
                    <Image
                      src="/assets/gallery/24.webp"
                      alt="Nighttime LED Lit Fountain Pool"
                      fill
                      unoptimized
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative & Highlighted Quote */}
              <div className="lg:col-span-7 space-y-5 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#002d72] text-white text-xs font-bold tracking-wider uppercase shadow-sm">
                  <Award className="w-3.5 h-3.5 text-cyan-300" />
                  <span>PROVEN SCALE &amp; CRAFTSMANSHIP</span>
                </div>

                <h2 className="text-2xl sm:text-4xl lg:text-[38px] font-extrabold text-[#0f172a] tracking-tight leading-tight">
                  From Commercial Giants to Backyard Dreams
                </h2>

                <p className="text-slate-700 text-[16px] sm:text-[17px] leading-[1.8] font-medium">
                  You may have experienced our work without even knowing it. Pools by Elio has built bars in downtown
                  Nashville, TN and the famous lazy river at Sound Waves inside Gaylord Opryland. These commercial-scale
                  projects taught us how to manage complexity, deliver on time, and exceed expectations — no matter the
                  size.
                </p>

                <p className="text-slate-700 text-[16px] sm:text-[17px] leading-[1.8] font-medium">
                  Today, we bring that same commercial-grade expertise to residential backyards, industrial facilities,
                  and everything in between. Whether you want a tranquil spa, a resort-style pool with a bar, a full
                  water park, or a custom pool house with fire pits and fountains — no job is too big, and no dream is
                  too bold.
                </p>

                {/* Featured Pull Quote Box */}
                <blockquote className="relative p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#002d72] via-[#003d99] to-[#004b93] text-white shadow-xl border border-blue-800 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
                  <Quote className="w-9 h-9 text-cyan-300/30 absolute top-4 right-5 pointer-events-none" />
                  <p className="relative z-10 text-[16px] sm:text-[18px] font-semibold italic leading-relaxed text-white">
                    “There is no job too big. Pools by Elio has built bars in downtown Nashville, TN to the lazy river
                    at Sound Waves Gaylord Opryland. We can build your dream oasis.”
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 3: MEET THE FOUNDERS (first.jpg & second.jpg)
           ===================================================================== */}
        <section
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
          }}
          className="relative py-[55px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-gradient-to-b from-[#041d42] via-[#062b61] to-[#031735] text-white shadow-2xl"
        >
          {/* Top Specular Highlight */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent pointer-events-none" />

          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-white/30 bg-white/10 text-cyan-200 text-xs font-bold tracking-widest uppercase">
                <Users className="w-3.5 h-3.5 text-cyan-300" />
                <span>FAMILY-OWNED LEADERSHIP</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Meet The Rodriguez Brothers
              </h2>
              <p className="text-blue-100/85 text-base sm:text-lg">
                Two brothers with over 25 years of hands-on mastery, setting the standard for custom aquatic construction in Tennessee.
              </p>
            </div>

            {/* Two Founder Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
              {/* Founder 1: Jonathan Elio Rodriguez (first.jpg) */}
              <div className="group relative rounded-2xl bg-white/[0.07] hover:bg-white/[0.11] border border-white/20 hover:border-cyan-300/50 p-6 sm:p-8 shadow-2xl transition-all duration-300 flex flex-col sm:flex-row gap-6 sm:gap-7 items-center sm:items-start">
                {/* Image Container */}
                <div className="relative w-48 sm:w-52 aspect-[4/5] rounded-xl overflow-hidden shrink-0 border-2 border-cyan-300/40 shadow-xl bg-slate-900">
                  <Image
                    src="/assets/first.png"
                    alt="Jonathan Elio Rodriguez – Founder & Hands-On Operator"
                    fill
                    unoptimized
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Bio Content */}
                <div className="space-y-3.5 text-center sm:text-left">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-300/30 text-cyan-200 text-xs font-bold uppercase tracking-wider">
                    Founder &amp; Hands-On Operator
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                    Jonathan Elio Rodriguez – Founder &amp; Hands-On Operator
                  </h3>

                  <p className="text-blue-100/90 text-[15px] sm:text-[16px] leading-[1.75]">
                    Jonathan is the driving force behind every project. With over 25 years of industry experience, he
                    remains hands-on from start to finish — inspecting, guiding, and ensuring quality service on every
                    single build. Clients work directly with Jonathan, not a salesperson.
                  </p>

                  <div className="pt-2 flex flex-wrap justify-center sm:justify-start gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-200 bg-white/10 px-3 py-1 rounded-md">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-300" />
                      On-Site Daily Supervision
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-200 bg-white/10 px-3 py-1 rounded-md">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-300" />
                      Direct Founder Access
                    </span>
                  </div>
                </div>
              </div>

              {/* Founder 2: David Elio Rodriguez (second.jpg) */}
              <div className="group relative rounded-2xl bg-white/[0.07] hover:bg-white/[0.11] border border-white/20 hover:border-cyan-300/50 p-6 sm:p-8 shadow-2xl transition-all duration-300 flex flex-col sm:flex-row gap-6 sm:gap-7 items-center sm:items-start">
                {/* Image Container */}
                <div className="relative w-48 sm:w-52 aspect-[4/5] rounded-xl overflow-hidden shrink-0 border-2 border-cyan-300/40 shadow-xl bg-slate-900">
                  <Image
                    src="/assets/second.png"
                    alt="David Elio Rodriguez – Co-Founder"
                    fill
                    unoptimized
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Bio Content */}
                <div className="space-y-3.5 text-center sm:text-left">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-300/30 text-cyan-200 text-xs font-bold uppercase tracking-wider">
                    Co-Founder &amp; Strategy
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                    David Elio Rodriguez – Co-Founder
                  </h3>

                  <p className="text-blue-100/90 text-[15px] sm:text-[16px] leading-[1.75]">
                    David brings vision, strategy, and operational excellence to the business. Together, the Rodriguez
                    brothers have built a company rooted in family values, hard work, and unmatched craftsmanship.
                  </p>

                  <div className="pt-2 flex flex-wrap justify-center sm:justify-start gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-200 bg-white/10 px-3 py-1 rounded-md">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-300" />
                      Operational Excellence
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-200 bg-white/10 px-3 py-1 rounded-md">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-300" />
                      Family Values &amp; Integrity
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 4: WHY POOLS BY ELIO?
           ===================================================================== */}
        <section
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
            backgroundImage: "url('/assets/whybg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="relative py-[55px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden text-white shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#003da5]/92 via-[#002674]/88 to-[#0a113a]/92 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent pointer-events-none" />

          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Framed Showcase Image */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[540px] rounded-2xl p-2.5 bg-white/10 border border-white/20 shadow-2xl">
                  <div className="relative w-full aspect-[540/464] rounded-xl overflow-hidden bg-slate-900">
                    <Image
                      src="/assets/whyimg.png"
                      alt="Why Pools by Elio"
                      fill
                      unoptimized
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: 7 Pillars */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border-2 border-white/80 bg-white/10 text-white text-xs font-bold tracking-wider uppercase">
                  <span>THE ELIO DIFFERENCE</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Why Pools by Elio?
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  {whyPillars.map((item, idx) => (
                    <div
                      key={idx}
                      className={`group/tile relative p-4 rounded-xl bg-white/[0.10] hover:bg-white/[0.16] border border-white/15 hover:border-cyan-300/40 shadow-sm transition-all duration-200 flex items-start gap-4 ${item.fullWidth ? "sm:col-span-2" : ""
                        }`}
                    >
                      <div className="relative w-11 h-11 shrink-0 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center p-1.5">
                        <Image
                          src={item.icon}
                          alt={item.title}
                          fill
                          unoptimized
                          className="object-contain p-1"
                        />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-[15px] font-bold text-white leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-[14px] text-white/85 font-normal leading-normal mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 5: WHAT WE DO (6 CAPABILITIES)
           ===================================================================== */}
        <section
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
          }}
          className="relative py-[55px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-gradient-to-b from-slate-50 via-white to-sky-50/60 border border-slate-200/80 shadow-sm"
        >
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#002d72] text-white text-xs font-bold tracking-wider uppercase shadow-sm">
                <span>OUR CAPABILITIES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
                What We Do
              </h2>
              <p className="text-slate-600 text-base sm:text-lg">
                Everything is engineered and built 100% in-house by our experienced team — from residential sanctuaries to commercial water parks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whatWeDo.map((service, idx) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={idx}
                    className="group rounded-2xl bg-white border border-slate-200/90 hover:border-blue-500/50 shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 flex flex-col"
                  >
                    <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        unoptimized
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent" />
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#002d72]/90 text-white text-[11px] font-bold uppercase tracking-wider border border-white/20">
                        {service.tag}
                      </div>
                      <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-[#0055a5] text-white flex items-center justify-center shadow-lg border border-white/30">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <h3 className="text-lg font-extrabold text-[#0f172a] group-hover:text-[#0047a0] transition-colors leading-snug">
                          {service.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed mt-2">
                          {service.desc}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0047a0]">
                        <span>100% In-House Build</span>
                        <Link
                          href="/#quote-form"
                          className="inline-flex items-center gap-1 hover:underline"
                        >
                          <span>Inquire</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 6: PROUDLY SERVING MIDDLE TENNESSEE
           ===================================================================== */}
        <section
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
          }}
          className="relative py-[50px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-gradient-to-r from-[#002b66] via-[#003d82] to-[#002b66] text-white shadow-xl"
        >
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent pointer-events-none" />

          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-2.5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/25 text-cyan-200 text-xs font-bold tracking-widest uppercase">
                <MapPin className="w-3.5 h-3.5 text-cyan-300" />
                <span>SERVICE AREAS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Proudly Serving Middle Tennessee
              </h2>
              <p className="text-blue-100 text-base sm:text-lg font-medium">
                We are based in Nashville, Tennessee and serve:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {serviceAreas.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-white/[0.09] hover:bg-white/[0.14] border border-white/20 p-5 transition-all duration-200 flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-lg bg-cyan-400/20 border border-cyan-300/40 flex items-center justify-center text-cyan-300">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-extrabold text-white leading-snug">
                      {item.city}
                    </h3>
                    <div className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                      {item.role}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-blue-100/85 leading-relaxed">
                    {item.highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 7: READY TO BUILD YOUR DREAM OASIS? (CTA & CONTACT DETAILS)
           ===================================================================== */}
        <section
          id="contact-cta"
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
          }}
          className="relative py-[55px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-[#00285c] text-white shadow-2xl"
        >
          <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="rounded-[18px] bg-gradient-to-b from-[#003b80] via-[#00509e] to-[#0064b5] px-6 sm:px-12 py-10 sm:py-14 shadow-[0_20px_60px_rgba(0,0,0,0.35)] border border-white/15 text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#006cb8] border border-white/25 text-white text-xs font-bold tracking-widest uppercase">
                <span>SCHEDULE A CONSULTATION</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight">
                Ready to Build Your Dream Oasis?
              </h2>

              <p className="max-w-3xl mx-auto text-white/95 text-base sm:text-lg leading-relaxed font-medium">
                Whether you’re a homeowner, a business owner, or a developer — Pools by Elio is ready to bring your
                vision to life. Contact us today to schedule a consultation.
              </p>

              {/* Contact Info Strip */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto pt-2">
                <div className="p-4 rounded-xl bg-[#00285c]/60 border border-white/15 flex flex-col items-center justify-center text-center space-y-1">
                  <MapPin className="w-5 h-5 text-cyan-300" />
                  <div className="text-xs uppercase tracking-wider text-cyan-200 font-bold">
                    Location
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Pools by Elio – Nashville, Tennessee
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#00285c]/60 border border-white/15 flex flex-col items-center justify-center text-center space-y-1">
                  <Clock className="w-5 h-5 text-cyan-300" />
                  <div className="text-xs uppercase tracking-wider text-cyan-200 font-bold">
                    Business Hours
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    Hours: Mon-Fri 9am-5pm | Sat by appointment | Sun Closed
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#00285c]/60 border border-white/15 flex flex-col items-center justify-center text-center space-y-1">
                  <Mail className="w-5 h-5 text-cyan-300" />
                  <div className="text-xs uppercase tracking-wider text-cyan-200 font-bold">
                    Email Us
                  </div>
                  <a
                    href="mailto:eliocustompools@live.com"
                    className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors"
                  >
                    Email: eliocustompools@live.com
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:6155683154"
                  className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full text-base sm:text-lg font-extrabold text-white bg-[#001433] hover:bg-[#000d24] border-2 border-white shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <Phone className="w-5 h-5 fill-white text-white" />
                  <span>Call (615) 568-3154</span>
                </a>

                <Link
                  href="/#quote-form"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-[#00285c] bg-white hover:bg-cyan-50 shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <span>Request A Free Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Contact Button */}
      <FloatingContact />
    </div>
  );
}


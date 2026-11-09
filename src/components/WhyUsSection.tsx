"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function WhyUsSection() {
  const trustCards = [
    {
      icon: "/assets/1.png",
      title: "Founders on every job",
      desc: "Jonathan is hands-on to ensure quality",
    },
    {
      icon: "/assets/5.png",
      title: "Everything in-house",
      desc: "No subcontractor delays or surprises",
    },
    {
      icon: "/assets/2.png",
      title: "25+ Years Of Experience",
      desc: "25+ years of industry experience",
    },
    {
      icon: "/assets/6.png",
      title: "Licensed, insured, and bonded",
      desc: "We are Licensed, insured, and bonded",
    },
    {
      icon: "/assets/3.png",
      title: "We set the standards",
      desc: "You Get the Dream",
    },
    {
      icon: "/assets/4.png",
      title: "Commercial & industrial pedigree",
      desc: "We've built for Gaylord Opryland and downtown Nashville bars",
    },
    {
      icon: "/assets/7.png",
      title: "Specialization",
      desc: "Residential, commercial, industrial",
      fullWidth: true,
    },
  ];

  return (
    <section
      id="why-us"
      style={{
        marginRight: "10px",
        marginBottom: "10px",
        marginLeft: "10px",
        borderRadius: "5px",
        paddingTop: "50px",
        paddingBottom: "50px",
        backgroundImage: "url('/assets/whybg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="relative py-[50px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-cover bg-center text-white shadow-2xl"
    >
      {/* Rich Royal Blue Gradient Overlay allowing whybg.png to shine through with high readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#003da5]/90 via-[#002674]/85 to-[#0a113a]/90 pointer-events-none rounded-[5px]" />

      {/* Specular Top Rim Reflection */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent pointer-events-none" />

      {/* Atmospheric Ambient Glow Spheres */}
      <div className="absolute -top-24 right-1/4 w-[550px] h-[550px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 left-1/4 w-[500px] h-[500px] bg-cyan-400/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Premium Framed whyimg.png Showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[540px] rounded-2xl p-2 sm:p-2.5 bg-white/10 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.45)] group">
              <div className="relative w-full aspect-[540/464] rounded-xl overflow-hidden bg-slate-900">
                <Image
                  src="/assets/whyimg.png"
                  alt="Why Homeowners & Business Owners Trust Pools By Elio"
                  fill
                  unoptimized
                  priority
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Subtle specular sheen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 pointer-events-none" />
              </div>

              {/* Floating Verified Trust Pill */}
              <div className="absolute -bottom-3 right-4 sm:right-6 px-4 py-1.5 rounded-full bg-slate-950/90 border border-white/25 text-white shadow-xl flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300" />
                </span>
                <span className="text-[11px] font-bold tracking-wider uppercase text-cyan-200">
                  100% In-House Master Builders
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Heading, Bento Glass Cards & CTA */}
          <div className="lg:col-span-7 space-y-6">

            {/* Pill: WHY CHOOSE US */}
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border-2 border-white/80 bg-white/10 text-white text-xs sm:text-[13px] font-bold tracking-wider uppercase shadow-sm transition-all duration-300 hover:bg-white/15">
                <span>WHY CHOOSE US</span>
              </div>
            </div>

            {/* Heading */}
            <h2
              style={{
                fontSize: "clamp(1.5rem, 2.5vw + 0.5rem, 2.15rem)",
              }}
              className="font-extrabold text-white tracking-tight leading-tight drop-shadow-sm"
            >
              Why Homeowners &amp; Business Owners Trust Us
            </h2>

            {/* Premium Frosted Glass Bento Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-1">
              {trustCards.map((item, idx) => (
                <div
                  key={idx}
                  className={`group/tile relative p-4 rounded-xl bg-white/[0.09] hover:bg-white/[0.15] border border-white/15 hover:border-cyan-300/40 shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 flex items-start gap-4 ${item.fullWidth ? "sm:col-span-2" : ""
                    }`}
                >
                  {/* Subtle top rim specular line on card */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                  {/* Icon Pod */}
                  <div className="relative w-11 h-11 shrink-0 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center p-1.5 shadow-inner group-hover/tile:bg-cyan-500/20 group-hover/tile:border-cyan-400/40 transition-colors">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      fill
                      unoptimized
                      className="object-contain p-1"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-[15px] font-bold text-white tracking-wide leading-snug group-hover/tile:text-cyan-200 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[14px] text-white/85 font-normal leading-normal mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Get An Estimate & Contact CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-sm font-bold text-white bg-[#003882] hover:bg-[#002a66] border-2 border-white shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-cyan-400/25"
              >
                <span>Get An Estimate</span>
                <ArrowRight className="w-4 h-4 text-cyan-300" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Schedule Consultation</span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

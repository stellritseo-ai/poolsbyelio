"use client";

import React from "react";
import Image from "next/image";
import { Leaf } from "lucide-react";

export default function WelcomeSection() {
  const showcasePools = [
    {
      img: "/assets/gallery/20.webp",
      alt: "Custom Pool & Spillover Spa Patio Nashville",
    },
    {
      img: "/assets/gallery/21.webp",
      alt: "Long Geometric Luxury Pool with Lawn View",
    },
    {
      img: "/assets/gallery/22.webp",
      alt: "Crystal Clear Pool with Submerged Swim-Up Bar Stools",
    },
    {
      img: "/assets/gallery/23.webp",
      alt: "Resort Style Pool with In-Pool Stools and Sunshelf",
    },
    {
      img: "/assets/gallery/24.webp",
      alt: "Evening Pool with Purple LED Lighting and Fountain Jets",
    },
    {
      img: "/assets/gallery/g1.png",
      alt: "Backyard Resort Living Oasis",
    },
    {
      img: "/assets/gallery/g2.png",
      alt: "Modern Geometric Pool with Stone Decking",
    },
    {
      img: "/assets/gallery/g3.png",
      alt: "Luxury In-Ground Gunite Swimming Pool",
    },
  ];

  // Duplicate for seamless infinite marquee loop
  const infinitePools = [...showcasePools, ...showcasePools];

  return (
    <section
      id="about"
      style={{
        marginRight: "10px",
        marginBottom: "10px",
        marginLeft: "10px",
        borderRadius: "5px",
        paddingTop: "60px",
        paddingBottom: "60px",
      }}
      className="relative py-[60px] overflow-hidden bg-gradient-to-r from-sky-100/70 via-white to-sky-100/70 mr-[10px] mb-[10px] ml-[10px] rounded-[5px] shadow-sm border border-slate-100"
    >
      {/* Soft Ethereal Blue Glow on Left and Right Sides */}
      <div className="absolute top-1/2 -left-24 -translate-y-1/2 w-96 h-96 bg-sky-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-24 -translate-y-1/2 w-96 h-96 bg-sky-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Dark Blue Pill */}
        <div className="flex justify-center">
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-[#002d72] text-white text-xs sm:text-[13px] font-bold tracking-wider uppercase shadow-sm">
            WELCOME TO POOLS BY ELIO
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center max-w-5xl mx-auto">
          <h2
            style={{
              fontSize: "42px",
              marginTop: "0px",
              marginBottom: "px",
            }}
            className="font-extrabold text-[#0f172a] tracking-tight leading-snug text-[42px] mt-[-10px] mb-[-11px]"
          >
            25 Years of Excellence &mdash; Family Owned, Hands-On
          </h2>
        </div>

        {/* Description Paragraph */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <p
            style={{
              fontSize: "18px",
              width: "120%",
              fontWeight: 500,
              marginBottom: "-21px",
              marginTop: "15px",
              lineHeight: "34px",
            }}
            className="text-slate-800 text-center leading-relaxed text-[18px] font-[500]"
          >
            Founded by Jonathan Elio Rodriguez and David Elio Rodriguez, Pools by Elio brings over 25 years of industry leadership to every project &mdash; big or small. Jonathan is hands-on with every build, ensuring quality from start to finish. With everything done in-house, we have the resources and capability to set the standard. Whether it&apos;s a pool bar in downtown Nashville or the lazy river at Gaylord Opryland&apos;s Sound Waves, we can build your dream oasis.
          </p>
        </div>

        {/* Two Blue Feature Cards */}
        <div
          style={{
            marginTop: "40px",
            marginBottom: "-38px",
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-7 mt-[40px] mb-[-38px]"
        >

          {/* Card 1: Master Craftsmanship */}
          <div className="group relative w-full sm:w-[350px] flex items-center gap-4 px-6 py-4 rounded-[14px] bg-[#005ba3] text-white shadow-[0_4px_16px_rgba(0,75,147,0.22)] border border-white/15 overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,75,147,0.3)]">
            {/* Specular Top Rim Highlight */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

            {/* Icon Badge */}
            <div className="w-11 h-11 rounded-[11px] bg-white/15 border border-white/30 backdrop-blur-sm flex items-center justify-center shrink-0 shadow-inner group-hover:bg-white/20 transition-colors">
              <Leaf className="w-5 h-5 text-white stroke-[2.2]" />
            </div>

            {/* Text Content */}
            <div className="text-left min-w-0">
              <div className="text-[15px] sm:text-[16px] font-bold text-white tracking-wide leading-snug">
                Master Craftsmanship
              </div>
              <div className="text-[12.5px] sm:text-[13px] text-blue-100 font-normal leading-normal mt-0.5">
                Hand-finished by certified artisans
              </div>
            </div>
          </div>

          {/* Card 2: Eco Engineering */}
          <div className="group relative w-full sm:w-[350px] flex items-center gap-4 px-6 py-4 rounded-[14px] bg-[#005ba3] text-white shadow-[0_4px_16px_rgba(0,75,147,0.22)] border border-white/15 overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,75,147,0.3)]">
            {/* Specular Top Rim Highlight */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

            {/* Icon Badge */}
            <div className="w-11 h-11 rounded-[11px] bg-white/15 border border-white/30 backdrop-blur-sm flex items-center justify-center shrink-0 shadow-inner group-hover:bg-white/20 transition-colors">
              <Leaf className="w-5 h-5 text-white stroke-[2.2]" />
            </div>

            {/* Text Content */}
            <div className="text-left min-w-0">
              <div className="text-[15px] sm:text-[16px] font-bold text-white tracking-wide leading-snug">
                Eco Engineering
              </div>
              <div className="text-[12.5px] sm:text-[13px] text-blue-100 font-normal leading-normal mt-0.5">
                Energy-efficient &amp; sustainable systems
              </div>
            </div>
          </div>

        </div>

        {/* Keyframe animation for infinite smooth slide with pause on hover */}
        <style>{`
          @keyframes infiniteMarquee {
            0% {
              transform: translate3d(0, 0, 0);
            }
            100% {
              transform: translate3d(-50%, 0, 0);
            }
          }
          .marquee-track {
            display: flex;
            width: max-content;
            animation: infiniteMarquee 34s linear infinite;
            will-change: transform;
            backface-visibility: hidden;
            contain: layout paint;
          }
          .marquee-container:hover .marquee-track {
            animation-play-state: paused;
          }
        `}</style>

      </div>

      {/* Infinite Smooth Scrolling Showcase Strip across full section with minimal left & right padding */}
      <div className="relative mt-10 sm:mt-14 overflow-hidden marquee-container py-3 w-full px-2 sm:px-3">
        {/* Subtle gradient edge masks for luxury fade-in/fade-out effect */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-sky-100/90 via-sky-100/40 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-sky-100/90 via-sky-100/40 to-transparent z-10" />

        {/* Marquee Track */}
        <div className="marquee-track">
          {infinitePools.map((pool, idx) => (
            <div
              key={idx}
              className="group/card relative w-[220px] sm:w-[250px] md:w-[270px] aspect-[3/4] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 shrink-0 bg-slate-100 border border-slate-200/70 mr-4 sm:mr-5 cursor-pointer"
            >
              <Image
                src={pool.img}
                alt={pool.alt}
                fill
                unoptimized
                className="object-cover object-center group-hover/card:scale-108 transition-transform duration-700 ease-out"
              />
              {/* Subtle specular rim border */}
              <div className="absolute inset-0 rounded-2xl border border-white/25 pointer-events-none" />
              {/* Gentle dark gradient on card hover for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

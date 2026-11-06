"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Play, Star } from "lucide-react";

export default function Hero() {
  const heroBanners = [
    {
      src: "/assets/banner1.png",
      alt: "Luxury Estate Pool Design Nashville",
    },
    {
      src: "/assets/banner2.png",
      alt: "Resort Style Evening Pool with Fire Features",
    },
    {
      src: "/assets/banner3.png",
      alt: "Modern Geometric Pool with Swim-Up Bar",
    },
    {
      src: "/assets/banner4.jpg",
      alt: "Custom Gunite Pool Oasis & Spillover Spa",
    },
    {
      src: "/assets/banner5.jpg",
      alt: "Commercial Water Features & Outdoor Living",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroBanners.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [heroBanners.length]);

  return (
    <section
      id="hero"
      style={{
        marginRight: "10px",
        marginBottom: "10px",
        marginLeft: "10px",
        borderRadius: "5px",
      }}
      className="relative min-h-[620px] lg:min-h-[720px] py-16 md:py-24 flex items-center overflow-hidden bg-[#001e4d] mr-[10px] mb-[10px] ml-[10px] rounded-[5px]"
    >
      {/* Keyframe animations for Ken Burns slide transitions & liquid card floating */}
      <style>{`
        @keyframes heroKenBurns {
          0% {
            transform: scale(1.0) translate3d(0, 0, 0);
          }
          100% {
            transform: scale(1.08) translate3d(0, -8px, 0);
          }
        }
        @keyframes floatGlassCard {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes liquidAura {
          0%, 100% {
            transform: scale(1) translate(0px, 0px);
            opacity: 0.25;
          }
          50% {
            transform: scale(1.25) translate(12px, -8px);
            opacity: 0.5;
          }
        }
        @keyframes liquidAuraRev {
          0%, 100% {
            transform: scale(1) translate(0px, 0px);
            opacity: 0.25;
          }
          50% {
            transform: scale(1.2) translate(-10px, 10px);
            opacity: 0.45;
          }
        }
        @keyframes shimmerTopBar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes slideProgress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>

      {/* Background Images from /assets with Animated Ken Burns Crossfade */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {heroBanners.map((banner, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out pointer-events-none ${isActive ? "opacity-100 z-[1]" : "opacity-0 z-0"
                }`}
            >
              <div
                className="w-full h-full relative"
                style={{
                  animation: isActive
                    ? "heroKenBurns 7s cubic-bezier(0.2, 0.8, 0.4, 1) forwards"
                    : "none",
                  willChange: "transform",
                }}
              >
                <Image
                  src={banner.src}
                  alt={banner.alt}
                  fill
                  unoptimized
                  priority={index === 0}
                  className="object-cover object-center"
                />
              </div>
            </div>
          );
        })}

        {/* Soft Blue Gradient Overlay - making background image visible */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#00224d]/65 via-[#002e6e]/35 to-transparent pointer-events-none" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[#001430]/40 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Text Content */}
          <div className="lg:col-span-7 text-white space-y-6">

            {/* Pill: Outline with pulsating live beacon */}
            <div className="inline-flex items-center px-6 py-2 rounded-full border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-sm gap-2.5 transition-all duration-300 hover:bg-white/15">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span>AWARD-WINNING LUXURY POOL DESIGN</span>
            </div>

            {/* Main Heading */}
            <div>
              <h1
                style={{
                  fontSize: "45px",
                  marginBottom: "-18px",
                }}
                className="font-extrabold tracking-tight text-white leading-tight text-[45px] mb-[-18px] drop-shadow-sm"
              >
                Build Your Dream
                <span className="block mt-1">Custom Designs &amp; Luxury Pools</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/95 max-w-xl font-normal leading-relaxed drop-shadow-sm">
              Custom pools, spas &amp; outdoor living spaces — meticulously crafted to transform your backyard into a private resort.
            </p>

            {/* CTA Buttons with hover animation */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-semibold text-white bg-[#0047a0] hover:bg-[#003870] border-2 border-white shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-cyan-500/20"
              >
                <span>Get Free Quote</span>
                <span className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1">&raquo;</span>
              </a>

              <a
                href="#portfolio"
                className="group inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border-2 border-white backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5 gap-2"
              >
                <div className="w-5 h-5 rounded-full bg-white/20 group-hover:bg-white/30 flex items-center justify-center transition-colors">
                  <Play className="w-3 h-3 fill-white text-white ml-0.5 group-hover:scale-110 transition-transform" />
                </div>
                <span>View Projects</span>
              </a>
            </div>

            {/* Animated Carousel Indicators with Active Progress Fill */}
            <div className="flex items-center space-x-2 pt-4">
              {heroBanners.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className="relative h-2 rounded-full transition-all duration-300 overflow-hidden cursor-pointer"
                  style={{
                    width: i === currentSlide ? "36px" : "8px",
                    backgroundColor: i === currentSlide ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.4)",
                  }}
                  aria-label={`Go to banner ${i + 1}`}
                >
                  {i === currentSlide && (
                    <div
                      key={`progress-${currentSlide}`}
                      className="absolute top-0 left-0 bottom-0 bg-white rounded-full"
                      style={{
                        animation: "slideProgress 6.5s linear forwards",
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Liquid Glass Effect Card positioned lower toward the bottom */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end lg:self-end lg:translate-x-4 xl:translate-x-8 lg:translate-y-16 xl:translate-y-20">
            <div
              style={{
                animation: "floatGlassCard 6s ease-in-out infinite",
                willChange: "transform",
              }}
              className="w-full max-w-[400px] relative rounded-3xl overflow-hidden p-5 sm:p-6 bg-[#002f6c]/70 backdrop-blur-sm border border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_1px_0_rgba(255,255,255,0.4)] text-white transition-shadow duration-500 hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.45),inset_0_1px_1px_0_rgba(255,255,255,0.6)] transform-gpu"
            >

              {/* Specular Liquid Glass Top Highlight with Animated Shimmer */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/70 to-transparent overflow-hidden">
                <div
                  className="w-1/2 h-full bg-gradient-to-r from-transparent via-cyan-200 to-transparent"
                  style={{
                    animation: "shimmerTopBar 4s ease-in-out infinite",
                  }}
                />
              </div>

              {/* Ambient fluid glow inside the card - lightweight static */}
              <div className="absolute -top-16 -left-16 w-40 h-40 bg-cyan-400/15 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-blue-500/15 rounded-full blur-2xl pointer-events-none" />

              {/* Top: 5 Stars + 5.0 · 20 reviews */}
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400 drop-shadow-sm transition-transform duration-300 hover:scale-125"
                    />
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-medium text-white/95 tracking-wide">
                  5.0 &middot; 20+ reviews
                </span>
              </div>

              {/* Middle: 25+ YEARS EXPERIENCE | 100+ POOLS BUILT */}
              <div className="grid grid-cols-2 gap-6 text-center sm:text-left py-2 relative z-10">
                <div className="group cursor-default">
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight transition-transform duration-300 group-hover:scale-105">
                    25+
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white/90 mt-1">
                    YEARS EXPERIENCE
                  </div>
                </div>

                <div className="group cursor-default">
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight transition-transform duration-300 group-hover:scale-105">
                    100+
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white/90 mt-1">
                    POOLS BUILT
                  </div>
                </div>
              </div>

              {/* Translucent Divider Line */}
              <div className="w-full h-[1px] bg-white/20 my-5 relative z-10" />

              {/* Bottom: Trusted by discerning homeowners... Lifetime structural warranty included */}
              <div className="space-y-1 text-center text-xs sm:text-[13px] text-white/90 font-normal leading-relaxed relative z-10">
                <p>Trusted by discerning homeowners across the coast.</p>
                <p>Lifetime structural warranty included.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

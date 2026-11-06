"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Sparkles,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Layers,
  ArrowRight,
  PhoneCall,
} from "lucide-react";

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: "pools" | "waterfalls" | "commercial" | "outdoor";
  categoryLabel: string;
  location: string;
}

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [visibleCount, setVisibleCount] = useState<number>(15);

  const galleryItems: GalleryItem[] = [
    // --- Premium Webp Pool Builds ---
    {
      id: 1,
      src: "/assets/gallery/20.webp",
      title: "Custom Freeform Gunite Oasis with Integrated Hot Tub",
      category: "pools",
      categoryLabel: "Luxury Pools & Spas",
      location: "Belle Meade, TN",
    },
    {
      id: 2,
      src: "/assets/gallery/21.webp",
      title: "Resort-Grade Curved Gunite Pool with In-Pool Sunshelf",
      category: "pools",
      categoryLabel: "Luxury Pools & Spas",
      location: "Brentwood, TN",
    },
    {
      id: 3,
      src: "/assets/gallery/22.webp",
      title: "Architectural Geometric Pool with Midnight Pebble Plaster",
      category: "pools",
      categoryLabel: "Luxury Pools & Spas",
      location: "Franklin, TN",
    },
    {
      id: 4,
      src: "/assets/gallery/23.webp",
      title: "Modern Infinity-Edge Oasis with Panoramic View",
      category: "pools",
      categoryLabel: "Luxury Pools & Spas",
      location: "Green Hills, TN",
    },
    {
      id: 5,
      src: "/assets/gallery/24.webp",
      title: "Estate Sanctuary with Spillover Spa & Travertine Decking",
      category: "pools",
      categoryLabel: "Luxury Pools & Spas",
      location: "Nashville, TN",
    },

    // --- High-Resolution Real Project Photos ---
    {
      id: 6,
      src: "/assets/gallery/341639558040.jpg",
      title: "Classic Roman End Swimming Pool with Full Perimeter Coping",
      category: "pools",
      categoryLabel: "Luxury Pools & Spas",
      location: "Hendersonville, TN",
    },
    {
      id: 7,
      src: "/assets/gallery/341639559040.jpg",
      title: "Dual Tier Gunite Pool with Integrated Heated Plunge Pool",
      category: "pools",
      categoryLabel: "Luxury Pools & Spas",
      location: "Mount Juliet, TN",
    },
    {
      id: 8,
      src: "/assets/gallery/341639561040.jpg",
      title: "Custom Curved Inground Pool with Ledgestone Accents",
      category: "pools",
      categoryLabel: "Luxury Pools & Spas",
      location: "Murfreesboro, TN",
    },
    {
      id: 9,
      src: "/assets/gallery/341639562040.jpg",
      title: "Deep Lagoon Pool with Custom Underwater LED Lighting",
      category: "pools",
      categoryLabel: "Luxury Pools & Spas",
      location: "Spring Hill, TN",
    },
    {
      id: 10,
      src: "/assets/gallery/341640127040.jpg",
      title: "Tiered Natural Boulder Waterfall with Cascading Streams",
      category: "waterfalls",
      categoryLabel: "Waterfalls & Grottos",
      location: "Leiper's Fork, TN",
    },
    {
      id: 11,
      src: "/assets/gallery/341640128040.jpg",
      title: "Custom Tennessee Fieldstone Rock Grotto with Waterfall",
      category: "waterfalls",
      categoryLabel: "Waterfalls & Grottos",
      location: "Oak Hill, TN",
    },
    {
      id: 12,
      src: "/assets/gallery/341641023040.jpg",
      title: "Luxury Sunshelf with Baja Ledge Loungers & Bubbler Jets",
      category: "pools",
      categoryLabel: "Luxury Pools & Spas",
      location: "Forest Hills, TN",
    },
    {
      id: 13,
      src: "/assets/gallery/341641024040.jpg",
      title: "Elevated Negative-Edge Gunite Spa with Cascade Spillway",
      category: "pools",
      categoryLabel: "Luxury Pools & Spas",
      location: "Belle Meade, TN",
    },
    {
      id: 14,
      src: "/assets/gallery/341641025040.jpg",
      title: "Sheer Descent Waterwall with Color-Changing LED Accent",
      category: "waterfalls",
      categoryLabel: "Waterfalls & Grottos",
      location: "Brentwood, TN",
    },
    {
      id: 15,
      src: "/assets/gallery/341641026040.jpg",
      title: "Artisanal Stone Waterfall with Integrated Swim-In Cave",
      category: "waterfalls",
      categoryLabel: "Waterfalls & Grottos",
      location: "Franklin, TN",
    },
    {
      id: 16,
      src: "/assets/gallery/341762611040.jpg",
      title: "Modern Rectangular Lap Pool with Glass Tile Mosaic Waterline",
      category: "pools",
      categoryLabel: "Luxury Pools & Spas",
      location: "Nashville, TN",
    },
    {
      id: 17,
      src: "/assets/gallery/341762612040.jpg",
      title: "Freeform Backyard Retreat with Hand-Laid Flagstone Coping",
      category: "pools",
      categoryLabel: "Luxury Pools & Spas",
      location: "Green Hills, TN",
    },
    {
      id: 18,
      src: "/assets/gallery/341762614040.jpg",
      title: "Signature Brentwood Estate Gunite Pool & Custom Spa",
      category: "pools",
      categoryLabel: "Luxury Pools & Spas",
      location: "Brentwood, TN",
    },
    {
      id: 19,
      src: "/assets/gallery/341762617040.jpg",
      title: "Multi-Tiered Natural Rock Cascade with Lush Landscaping",
      category: "waterfalls",
      categoryLabel: "Waterfalls & Grottos",
      location: "Gallatin, TN",
    },
    {
      id: 20,
      src: "/assets/gallery/341762618040.jpg",
      title: "Stacked Slate Water Curtain Spillway into Gunite Pool",
      category: "waterfalls",
      categoryLabel: "Waterfalls & Grottos",
      location: "Franklin, TN",
    },
    {
      id: 21,
      src: "/assets/gallery/341762913040.jpg",
      title: "Perimeter Overflow Pool with Glass Pebble Interior Finish",
      category: "pools",
      categoryLabel: "Luxury Pools & Spas",
      location: "Oak Hill, TN",
    },
    {
      id: 22,
      src: "/assets/gallery/341762915040.jpg",
      title: "Private Belle Meade Oasis with Hydrazine Smart Automation",
      category: "pools",
      categoryLabel: "Luxury Pools & Spas",
      location: "Belle Meade, TN",
    },
    {
      id: 23,
      src: "/assets/gallery/341762916040.jpg",
      title: "Hand-Crafted Tennessee Limestone Waterfall & Stream",
      category: "waterfalls",
      categoryLabel: "Waterfalls & Grottos",
      location: "Leiper's Fork, TN",
    },
    {
      id: 24,
      src: "/assets/gallery/341762917040.jpg",
      title: "Lush Tropical Rock Grotto with Hidden Slide Entry",
      category: "waterfalls",
      categoryLabel: "Waterfalls & Grottos",
      location: "Franklin, TN",
    },
    {
      id: 25,
      src: "/assets/gallery/341762942040.jpg",
      title: "Opryland Resort Commercial Water Attraction Installation",
      category: "commercial",
      categoryLabel: "Commercial & Resorts",
      location: "Nashville, TN",
    },
    {
      id: 26,
      src: "/assets/gallery/341762943040.jpg",
      title: "High-Capacity Community Aquatic Center Facility",
      category: "commercial",
      categoryLabel: "Commercial & Resorts",
      location: "Murfreesboro, TN",
    },
    {
      id: 27,
      src: "/assets/gallery/341762944040.jpg",
      title: "Custom Zero-Entry Gunite Pool with Gentle Slope",
      category: "pools",
      categoryLabel: "Luxury Pools & Spas",
      location: "Mount Juliet, TN",
    },
    {
      id: 28,
      src: "/assets/gallery/341762945040.jpg",
      title: "Franklin Modern Architecture Pool with Custom Tanning Shelf",
      category: "pools",
      categoryLabel: "Luxury Pools & Spas",
      location: "Franklin, TN",
    },
    {
      id: 29,
      src: "/assets/gallery/341762946040.jpg",
      title: "SoundWaves Water Experience Commercial Pool System",
      category: "commercial",
      categoryLabel: "Commercial & Resorts",
      location: "Nashville, TN",
    },
    {
      id: 30,
      src: "/assets/gallery/341762947040.jpg",
      title: "Resort Beach-Entry Commercial Pool with Wave System",
      category: "commercial",
      categoryLabel: "Commercial & Resorts",
      location: "Nashville, TN",
    },
    {
      id: 31,
      src: "/assets/gallery/341762948040.jpg",
      title: "Family Oasis with Built-in Underwater Bench Seating",
      category: "pools",
      categoryLabel: "Luxury Pools & Spas",
      location: "Brentwood, TN",
    },
    {
      id: 32,
      src: "/assets/gallery/341762949040-1.jpg",
      title: "Commercial Grade Filtration & Automated Chemical Control Center",
      category: "commercial",
      categoryLabel: "Commercial & Resorts",
      location: "Nashville, TN",
    },
    {
      id: 33,
      src: "/assets/gallery/341762950040.jpg",
      title: "Backyard Stone Fire Pit & Poolside Lounge Pavilion",
      category: "outdoor",
      categoryLabel: "Outdoor Living & Patios",
      location: "Green Hills, TN",
    },
    {
      id: 34,
      src: "/assets/gallery/341763068040.jpg",
      title: "Gunite Pool Structural Rebar & Plumbing Engineering Phase",
      category: "pools",
      categoryLabel: "Luxury Pools & Spas",
      location: "Belle Meade, TN",
    },
    {
      id: 35,
      src: "/assets/gallery/341763069040.jpg",
      title: "Outdoor Gourmet Kitchen & Covered Granite Swim-Up Bar",
      category: "outdoor",
      categoryLabel: "Outdoor Living & Patios",
      location: "Brentwood, TN",
    },
    {
      id: 36,
      src: "/assets/gallery/341763070040.jpg",
      title: "Contemporary Linear Scuppers & Bronze Water Feature",
      category: "waterfalls",
      categoryLabel: "Waterfalls & Grottos",
      location: "Franklin, TN",
    },
    {
      id: 37,
      src: "/assets/gallery/341763071040.jpg",
      title: "Luxury Vanishing Edge Pool with Horizon Reflection",
      category: "pools",
      categoryLabel: "Luxury Pools & Spas",
      location: "Forest Hills, TN",
    },
    {
      id: 38,
      src: "/assets/gallery/341763072040.jpg",
      title: "Contemporary Nashville Gunite Pool with Dual Spillover Spas",
      category: "pools",
      categoryLabel: "Luxury Pools & Spas",
      location: "Nashville, TN",
    },
    {
      id: 39,
      src: "/assets/gallery/341763073040.jpg",
      title: "Cascading Sheet Waterfall with Deep Plunge Basin",
      category: "waterfalls",
      categoryLabel: "Waterfalls & Grottos",
      location: "Hendersonville, TN",
    },
    {
      id: 40,
      src: "/assets/gallery/341763074040.jpg",
      title: "Nashville Luxury Hotel Rooftop Pool with Skyline Backdrop",
      category: "commercial",
      categoryLabel: "Commercial & Resorts",
      location: "Downtown Nashville, TN",
    },
    {
      id: 41,
      src: "/assets/gallery/341763075040.jpg",
      title: "Resort-Scale Sunshelf with 16 In-Water Commercial Loungers",
      category: "commercial",
      categoryLabel: "Commercial & Resorts",
      location: "Franklin, TN",
    },
    {
      id: 42,
      src: "/assets/gallery/341763076040.jpg",
      title: "French Travertine Paver Patio Deck with Integrated Fire Bowls",
      category: "outdoor",
      categoryLabel: "Outdoor Living & Patios",
      location: "Brentwood, TN",
    },
    {
      id: 43,
      src: "/assets/gallery/341763077040.jpg",
      title: "Custom Cedar Pergola with Poolside Seating & Ambient Lights",
      category: "outdoor",
      categoryLabel: "Outdoor Living & Patios",
      location: "Oak Hill, TN",
    },
    {
      id: 44,
      src: "/assets/gallery/341763082040.jpg",
      title: "Resort Style Gunite Pool with Ambient Twilight Glow",
      category: "pools",
      categoryLabel: "Luxury Pools & Spas",
      location: "Belle Meade, TN",
    },
    {
      id: 45,
      src: "/assets/gallery/341763083040.jpg",
      title: "Artisanal Tile Border & Precision Gunite Craftsmanship",
      category: "pools",
      categoryLabel: "Luxury Pools & Spas",
      location: "Green Hills, TN",
    },
    {
      id: 46,
      src: "/assets/gallery/341763084040.jpg",
      title: "Country Club Semi-Olympic Competition Gunite Pool",
      category: "commercial",
      categoryLabel: "Commercial & Resorts",
      location: "Brentwood, TN",
    },
    {
      id: 47,
      src: "/assets/gallery/344570339040.jpg",
      title: "Custom Kidney Freeform Pool with Natural Stone Coping",
      category: "pools",
      categoryLabel: "Luxury Pools & Spas",
      location: "Gallatin, TN",
    },
    {
      id: 48,
      src: "/assets/gallery/344570340040.jpg",
      title: "Commercial Hospitality Swimming Facility with Dual Spas",
      category: "commercial",
      categoryLabel: "Commercial & Resorts",
      location: "Nashville, TN",
    },
    {
      id: 49,
      src: "/assets/gallery/344570341040.jpg",
      title: "Dramatic Estate Rock Cascade with Natural Creek Integration",
      category: "waterfalls",
      categoryLabel: "Waterfalls & Grottos",
      location: "Franklin, TN",
    },
    {
      id: 50,
      src: "/assets/gallery/344802738040.jpg",
      title: "Luxury Heated Gunite Spa with 12 Therapy Hydro Jets",
      category: "pools",
      categoryLabel: "Luxury Pools & Spas",
      location: "Belle Meade, TN",
    },
    {
      id: 51,
      src: "/assets/gallery/344802739040.jpg",
      title: "Estate Landscaped Hardscape with Retaining Wall & Pool Deck",
      category: "outdoor",
      categoryLabel: "Outdoor Living & Patios",
      location: "Brentwood, TN",
    },
    {
      id: 52,
      src: "/assets/gallery/counter-img.png",
      title: "Commercial Aquatic Center Custom Engineering & Design",
      category: "commercial",
      categoryLabel: "Commercial & Resorts",
      location: "Nashville, TN",
    },
    {
      id: 53,
      src: "/assets/gallery/download.webp",
      title: "Hospitality Resort Complex Pool with Architectural Island",
      category: "commercial",
      categoryLabel: "Commercial & Resorts",
      location: "Murfreesboro, TN",
    },
    {
      id: 54,
      src: "/assets/gallery/g1.png",
      title: "Modern Geometric Pool with Custom Step Entry",
      category: "pools",
      categoryLabel: "Luxury Pools & Spas",
      location: "Franklin, TN",
    },
    {
      id: 55,
      src: "/assets/gallery/g11.png",
      title: "Covered Poolside Cabana with Outdoor Dining & Entertainment",
      category: "outdoor",
      categoryLabel: "Outdoor Living & Patios",
      location: "Green Hills, TN",
    },
    {
      id: 56,
      src: "/assets/gallery/g18.webp",
      title: "Midnight Smart Illuminated Pool & Spillover Spa",
      category: "pools",
      categoryLabel: "Luxury Pools & Spas",
      location: "Belle Meade, TN",
    },
    {
      id: 57,
      src: "/assets/gallery/g2.png",
      title: "Natural Stone Pool Decking & Sunbathing Terrace",
      category: "outdoor",
      categoryLabel: "Outdoor Living & Patios",
      location: "Oak Hill, TN",
    },
    {
      id: 58,
      src: "/assets/gallery/g22.png",
      title: "Custom Fire & Water Feature Pillars along Gunite Pool",
      category: "outdoor",
      categoryLabel: "Outdoor Living & Patios",
      location: "Brentwood, TN",
    },
    {
      id: 59,
      src: "/assets/gallery/g3.png",
      title: "Handcrafted Boulder Waterfall with Continuous Soundscape",
      category: "waterfalls",
      categoryLabel: "Waterfalls & Grottos",
      location: "Leiper's Fork, TN",
    },
    {
      id: 60,
      src: "/assets/gallery/g33.png",
      title: "Backyard Oasis Hardscaping with Outdoor Fireplace",
      category: "outdoor",
      categoryLabel: "Outdoor Living & Patios",
      location: "Franklin, TN",
    },
  ];

  const filterTabs = [
    { key: "all", label: "All Projects" },
    { key: "pools", label: "Luxury Pools & Spas" },
    { key: "waterfalls", label: "Waterfalls & Grottos" },
    { key: "commercial", label: "Commercial & Resorts" },
    { key: "outdoor", label: "Outdoor Living" },
  ];

  const getCategoryCount = (key: string) => {
    if (key === "all") return galleryItems.length;
    return galleryItems.filter((item) => item.category === key).length;
  };

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const displayedItems = filteredItems.slice(0, visibleCount);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const prevImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) =>
      prev! > 0 ? prev! - 1 : filteredItems.length - 1
    );
  };

  const nextImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) =>
      prev! < filteredItems.length - 1 ? prev! + 1 : 0
    );
  };

  // Keyboard navigation & body scroll containment
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    if (selectedImageIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImageIndex, filteredItems.length]);

  return (
    <section
      id="portfolio"
      style={{
        marginRight: "10px",
        marginBottom: "10px",
        marginLeft: "10px",
        borderRadius: "5px",
      }}
      className="relative py-[50px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-gradient-to-b from-slate-50 via-sky-50/20 to-white border border-slate-200/70 shadow-sm"
    >
      {/* Ambient Background Lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none translate-y-1/2" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center w-full max-w-none mx-auto space-y-3 mb-10 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#004b93]/10 border border-[#004b93]/20 text-[#004b93] text-xs font-bold uppercase tracking-widest backdrop-blur-sm shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#004b93]" />
            <span>OUR WORK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#003870] tracking-tight text-center">
            A Portfolio Of Crafted Escapes
          </h2>

          <p
            style={{
              marginTop: "-5px",
              marginBottom: "-20px",
            }}
            className="text-center w-full text-slate-600 text-base sm:text-[17px] font-medium max-w-none lg:whitespace-nowrap leading-relaxed mt-[-5px] mb-[-20px]"
          >
            Every project is engineered in-house and built to the highest structural and architectural standards across Greater Nashville and Middle Tennessee.
          </p>
        </div>

        {/* Filter Tabs with Live Item Counts */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {filterTabs.map((tab) => {
            const count = getCategoryCount(tab.key);
            const isActive = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => {
                  setActiveFilter(tab.key);
                  setVisibleCount(15);
                }}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? "bg-[#004b93] text-white shadow-md shadow-[#004b93]/25 scale-[1.02]"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-[#004b93]/40 hover:text-[#004b93] hover:bg-slate-50/80 shadow-sm"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[11px] font-bold px-2 py-0.5 rounded-full transition-colors ${
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

        {/* Gallery Grid: 5 columns on desktop, 4 on tablet, 2 on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {displayedItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square rounded-[5px] overflow-hidden bg-slate-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-200/80"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                unoptimized
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Floating Zoom Action Badge */}
              <div className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-black/75 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 shadow-md">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Category Pill on Hover */}
              <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-[#004b93] text-[10px] font-bold uppercase tracking-wider text-white opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm">
                {item.categoryLabel}
              </div>

              {/* Bottom Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 text-white">
                <p className="text-xs sm:text-sm font-bold text-white line-clamp-2 leading-snug drop-shadow-sm">
                  {item.title}
                </p>
                <span className="flex items-center gap-1 text-[11px] text-cyan-300 mt-1 font-medium">
                  <MapPin className="w-3 h-3 text-cyan-400" />
                  {item.location}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More / Show All Controls */}
        {visibleCount < filteredItems.length ? (
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={() =>
                setVisibleCount((prev) =>
                  Math.min(prev + 15, filteredItems.length)
                )
              }
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#004b93] hover:bg-[#003870] shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Layers className="w-4 h-4 text-cyan-300" />
              <span>
                Load More Projects ({filteredItems.length - visibleCount}{" "}
                remaining)
              </span>
            </button>
            <button
              onClick={() => setVisibleCount(filteredItems.length)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 hover:border-[#004b93] hover:text-[#004b93] shadow-sm transition-all"
            >
              <span>Show All {filteredItems.length} Projects</span>
            </button>
          </div>
        ) : (
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-600">
              <span>Showing all {filteredItems.length} completed projects</span>
            </div>
          </div>
        )}

        {/* Ultra-Premium Design Consultation Callout Banner */}
        <div className="mt-14 bg-gradient-to-r from-[#003870] via-[#004b93] to-[#0055a0] rounded-[5px] p-6 sm:p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="space-y-2 max-w-2xl">
              <h3
                style={{ fontSize: "29px" }}
                className="font-extrabold tracking-tight text-[29px]"
              >
                Ready To Bring Your Custom Pool Vision To Life?
              </h3>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                Speak directly with Jonathan and our master gunite pool
                craftsmen. We provide full 3D digital renderings and upfront
                transparent pricing.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href="#quote-form"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold bg-white text-[#003870] hover:bg-cyan-50 shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Request 3D Design & Quote</span>
                <ArrowRight className="w-4 h-4 text-[#003870]" />
              </a>
              <a
                href="tel:6158040314"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold bg-[#002d5a]/60 hover:bg-[#002d5a] border border-white/20 text-white transition-all duration-200"
              >
                <PhoneCall className="w-4 h-4 text-cyan-300" />
                <span>(615) 804-0314</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal with Fullscreen Backing, Navigation & Thumbnails */}
      {selectedImageIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox Viewer"
          className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-slate-950/95 backdrop-blur-xl p-3 sm:p-6 animate-in fade-in duration-200 select-none"
        >
          {/* Top Control Bar */}
          <div className="w-full max-w-6xl flex items-center justify-between z-50">
            <div className="flex items-center gap-2.5">
              <span className="px-3 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-white/10">
                {filteredItems[selectedImageIndex].categoryLabel}
              </span>
              <span className="text-xs font-semibold text-slate-300">
                {selectedImageIndex + 1} / {filteredItems.length}
              </span>
            </div>

            <button
              onClick={closeLightbox}
              className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors focus:outline-none focus:ring-2 focus:ring-white/40"
              aria-label="Close image viewer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Image Stage */}
          <div className="relative w-full max-w-5xl flex-grow flex items-center justify-center my-3 px-1 sm:px-12">
            {/* Prev Button */}
            <button
              onClick={prevImage}
              className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 p-3 sm:p-3.5 rounded-full bg-black/40 hover:bg-[#004b93] text-white border border-white/10 transition-all duration-200 z-50 shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 p-3 sm:p-3.5 rounded-full bg-black/40 hover:bg-[#004b93] text-white border border-white/10 transition-all duration-200 z-50 shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Centered Image */}
            <div className="relative w-full h-[55vh] sm:h-[62vh] rounded-[5px] overflow-hidden shadow-2xl border border-white/10 bg-black/50">
              <Image
                src={filteredItems[selectedImageIndex].src}
                alt={filteredItems[selectedImageIndex].title}
                fill
                unoptimized
                priority
                className="object-contain"
              />
            </div>
          </div>

          {/* Caption & Metadata */}
          <div className="text-center max-w-2xl px-4 mb-2 text-white">
            <h3 className="text-base sm:text-lg font-bold tracking-tight">
              {filteredItems[selectedImageIndex].title}
            </h3>
            <p className="flex items-center justify-center gap-1.5 text-xs text-cyan-300 mt-1 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              <span>{filteredItems[selectedImageIndex].location}</span>
              <span className="text-white/40">•</span>
              <span className="text-slate-300">
                Custom Gunite Engineering by Pools By Elio
              </span>
            </p>
          </div>

          {/* Thumbnail Rail */}
          <div className="w-full max-w-4xl overflow-x-auto py-2 px-2 flex items-center justify-start sm:justify-center gap-2 no-scrollbar">
            {filteredItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setSelectedImageIndex(idx)}
                className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-[4px] overflow-hidden shrink-0 transition-all duration-200 border-2 ${
                  selectedImageIndex === idx
                    ? "border-cyan-400 scale-105 shadow-md shadow-cyan-400/30"
                    : "border-transparent opacity-50 hover:opacity-100"
                }`}
                aria-label={`View image ${idx + 1}`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

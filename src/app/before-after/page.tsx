"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import {
  Sparkles,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Layers,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Search,
  Building2,
  Flame,
  Wine,
  Check,
  Eye,
  Repeat,
  Wrench,
  Compass,
  Star,
  Maximize2,
  Calendar,
  DollarSign,
  TrendingUp,
} from "lucide-react";

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: "pools" | "waterfalls" | "commercial" | "outdoor";
  categoryLabel: string;
  location: string;
  description?: string;
}

export default function BeforeAfterPage() {
  // Gallery Filtering & Lightbox States
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(15);

  // Interactive Before / After Case Study State
  const [activeCaseStudy, setActiveCaseStudy] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [viewMode, setViewMode] = useState<"slider" | "before" | "after">("slider");

  // 4 Featured Before & After Transformation Case Studies
  const transformationCaseStudies = [
    {
      id: "belle-meade-remodel",
      title: "Belle Meade Estate Pool & Spa Overhaul",
      location: "Belle Meade, TN",
      badge: "Complete Renovation",
      timeline: "5.5 Weeks",
      scope: "Failing Rectangular Pool to Freeform Gunite Oasis & Spillover Spa",
      beforeImage: "/assets/gallery/341763068040.jpg",
      afterImage: "/assets/gallery/20.webp",
      beforeDesc:
        "Aging 1980s vinyl-lined rectangular basin with failing underground copper plumbing, cracked shifting concrete patio, and obsolete loud filtration.",
      afterDesc:
        "Engineered custom gunite freeform sanctuary featuring hand-laid French travertine coping, an integrated 10-person hydrotherapy heated spa with cascading spillway, and whisper-quiet variable-speed Pentair hydraulics.",
      highlights: [
        "Surgical demolition with zero lawn collateral damage",
        "Subsurface drainage and soil bedrock stabilization",
        "Pebble-sheen Caribbean blue interior plaster finish",
        "Smart Wi-Fi automation via smartphone app",
      ],
    },
    {
      id: "brentwood-hillside",
      title: "Brentwood Hillside Luxury Elevation",
      location: "Brentwood, TN",
      badge: "Hillside Engineering",
      timeline: "7 Weeks",
      scope: "Eroding Hillside to Negative-Edge Gunite Pool & Fire Bowls",
      beforeImage: "/assets/gallery/341762948040.jpg",
      afterImage: "/assets/gallery/21.webp",
      beforeDesc:
        "Steep, unmaintained backyard slope suffering from stormwater erosion and poor usability, completely isolating the homeowners from their outdoor property.",
      afterDesc:
        "Terraced structural shotcrete retaining system supporting a multi-level resort-style curved gunite pool with in-pool sunshelf, fire pillars, and expansive outdoor living deck.",
      highlights: [
        "Engineered structural retention footings anchored into Tennessee limestone",
        "Tanning ledge with dual bubbler jets and Baja loungers",
        "Dual gas-fired natural stone fire bowls flanking deep end",
        "Cool-deck thermal coating for safe summer barefoot transit",
      ],
    },
    {
      id: "franklin-modern",
      title: "Franklin Modern Architectural Transformation",
      location: "Franklin, TN",
      badge: "Modern Geometric",
      timeline: "4 Weeks",
      scope: "Dated Kidney Pool to Ultra-Clean Geometric Architecture",
      beforeImage: "/assets/gallery/341639558040.jpg",
      afterImage: "/assets/gallery/22.webp",
      beforeDesc:
        "Deteriorated marcite plaster with visible stains, chipped bullnose brick coping, and an open equipment pad visible from the master bedroom.",
      afterDesc:
        "Crisp geometric lines with midnight pebble interior, iridescent waterline glass tile mosaic, integrated swim-out benches, and concealed equipment bay.",
      highlights: [
        "Laser-aligned coping with precision 90-degree transitions",
        "Saltwater chlorination conversion with UV sterilization",
        "Multi-zone underwater LED illumination scenes",
        "Seamless walk-out connection to home dining terrace",
      ],
    },
    {
      id: "green-hills-retreat",
      title: "Green Hills Outdoor Living & Water Park Pedigree",
      location: "Green Hills, TN",
      badge: "Living & Waterfall",
      timeline: "6 Weeks",
      scope: "Bare Mud Yard to Complete Water Retreat with Boulder Grotto",
      beforeImage: "/assets/gallery/counter-img.png",
      afterImage: "/assets/gallery/23.webp",
      beforeDesc:
        "Flat, muddy residential lot with zero outdoor amenities, no shade, and standard builder-grade sod with severe drainage pooling.",
      afterDesc:
        "Resort-level master retreat with deep swimming lagoon, natural Tennessee fieldstone waterfall grotto, attached swim-up bar, and outdoor chef pavilion.",
      highlights: [
        "Sound Waves Gaylord Opryland commercial-grade water flow dynamics",
        "Hand-selected stacked quarry boulders creating natural sound dampening",
        "Submerged swim-up stone bar stools and granite counter",
        "Wood-burning outdoor stone fire pit gathering zone",
      ],
    },
  ];

  // Complete 60 Projects Extracted from assets/gallery/
  const galleryItems: GalleryItem[] = useMemo(
    () => [
      {
        id: 1,
        src: "/assets/gallery/20.webp",
        title: "Custom Freeform Gunite Oasis with Integrated Hot Tub",
        category: "pools",
        categoryLabel: "Luxury Pools & Spas",
        location: "Belle Meade, TN",
        description: "Freeform gunite pool with elevated heated spa, French pattern travertine decking, and lush privacy planting.",
      },
      {
        id: 2,
        src: "/assets/gallery/21.webp",
        title: "Resort-Grade Curved Gunite Pool with In-Pool Sunshelf",
        category: "pools",
        categoryLabel: "Luxury Pools & Spas",
        location: "Brentwood, TN",
        description: "Sweeping organic curves with expansive Baja sunshelf, LED bubbler jets, and natural coping.",
      },
      {
        id: 3,
        src: "/assets/gallery/22.webp",
        title: "Architectural Geometric Pool with Midnight Pebble Plaster",
        category: "pools",
        categoryLabel: "Luxury Pools & Spas",
        location: "Franklin, TN",
        description: "Sharp rectilinear design paired with midnight obsidian pebble finish and iridescent mosaic waterline tiles.",
      },
      {
        id: 4,
        src: "/assets/gallery/23.webp",
        title: "Modern Infinity-Edge Oasis with Panoramic View",
        category: "pools",
        categoryLabel: "Luxury Pools & Spas",
        location: "Green Hills, TN",
        description: "Vanishing horizon edge spilling into lower reflection catch basin with panoramic hill views.",
      },
      {
        id: 5,
        src: "/assets/gallery/24.webp",
        title: "Estate Sanctuary with Spillover Spa & Travertine Decking",
        category: "pools",
        categoryLabel: "Luxury Pools & Spas",
        location: "Nashville, TN",
        description: "Classic luxury estate setting with dual spillway stone spa and symmetrical flagstone sun decks.",
      },
      {
        id: 6,
        src: "/assets/gallery/341639558040.jpg",
        title: "Classic Roman End Swimming Pool with Full Perimeter Coping",
        category: "pools",
        categoryLabel: "Luxury Pools & Spas",
        location: "Hendersonville, TN",
        description: "Roman-ended gunite pool with cantilevered bullnose limestone coping and full walk-in steps.",
      },
      {
        id: 7,
        src: "/assets/gallery/341639559040.jpg",
        title: "Dual Tier Gunite Pool with Integrated Heated Plunge Pool",
        category: "pools",
        categoryLabel: "Luxury Pools & Spas",
        location: "Mount Juliet, TN",
        description: "Multi-level design featuring a raised upper therapeutic plunge pool cascading into the main swimming area.",
      },
      {
        id: 8,
        src: "/assets/gallery/341639561040.jpg",
        title: "Custom Curved Inground Pool with Ledgestone Accents",
        category: "pools",
        categoryLabel: "Luxury Pools & Spas",
        location: "Murfreesboro, TN",
        description: "Organic shoreline contours with dry-stacked Tennessee ledgestone retaining walls and poolside planters.",
      },
      {
        id: 9,
        src: "/assets/gallery/341639562040.jpg",
        title: "Deep Lagoon Pool with Custom Underwater LED Lighting",
        category: "pools",
        categoryLabel: "Luxury Pools & Spas",
        location: "Spring Hill, TN",
        description: "Deep diving lagoon with programmable color-changing underwater illumination and smooth pebble plaster.",
      },
      {
        id: 10,
        src: "/assets/gallery/341640127040.jpg",
        title: "Tiered Natural Boulder Waterfall with Cascading Streams",
        category: "waterfalls",
        categoryLabel: "Waterfalls & Grottos",
        location: "Leiper's Fork, TN",
        description: "Massive natural moss rock boulders positioned with hydraulic cranes to craft multi-stream mountain cascades.",
      },
      {
        id: 11,
        src: "/assets/gallery/341640128040.jpg",
        title: "Custom Tennessee Fieldstone Rock Grotto with Waterfall",
        category: "waterfalls",
        categoryLabel: "Waterfalls & Grottos",
        location: "Oak Hill, TN",
        description: "Handcrafted rock cavern with curtain waterfall you can swim underneath for total acoustic serenity.",
      },
      {
        id: 12,
        src: "/assets/gallery/341641023040.jpg",
        title: "Luxury Sunshelf with Baja Ledge Loungers & Bubbler Jets",
        category: "pools",
        categoryLabel: "Luxury Pools & Spas",
        location: "Forest Hills, TN",
        description: "9-inch shallow tanning shelf accommodating in-water chaise lounges with synchronized LED bubbler jets.",
      },
      {
        id: 13,
        src: "/assets/gallery/341641024040.jpg",
        title: "Elevated Negative-Edge Gunite Spa with Cascade Spillway",
        category: "pools",
        categoryLabel: "Luxury Pools & Spas",
        location: "Belle Meade, TN",
        description: "18-inch raised gunite spa with 360-degree perimeter overflow into the surrounding pool basin.",
      },
      {
        id: 14,
        src: "/assets/gallery/341641025040.jpg",
        title: "Sheer Descent Waterwall with Color-Changing LED Accent",
        category: "waterfalls",
        categoryLabel: "Waterfalls & Grottos",
        location: "Brentwood, TN",
        description: "Clean architectural water sheet emerging silently from a stacked stone accent wall into the deep end.",
      },
      {
        id: 15,
        src: "/assets/gallery/341641026040.jpg",
        title: "Artisanal Stone Waterfall with Integrated Swim-In Cave",
        category: "waterfalls",
        categoryLabel: "Waterfalls & Grottos",
        location: "Franklin, TN",
        description: "Natural quarry stones formed into a rugged cave grotto with custom interior bench seating and ambient lights.",
      },
      {
        id: 16,
        src: "/assets/gallery/341762611040.jpg",
        title: "Modern Rectangular Lap Pool with Glass Tile Mosaic Waterline",
        category: "pools",
        categoryLabel: "Luxury Pools & Spas",
        location: "Nashville, TN",
        description: "Dedicated lap-swimming lanes with dark cobalt glass mosaic waterline and flush motorized safety cover.",
      },
      {
        id: 17,
        src: "/assets/gallery/341762612040.jpg",
        title: "Freeform Backyard Retreat with Hand-Laid Flagstone Coping",
        category: "pools",
        categoryLabel: "Luxury Pools & Spas",
        location: "Green Hills, TN",
        description: "Hand-chiseled Tennessee crab orchard flagstone coping tracing freeform contours for a timeless natural look.",
      },
      {
        id: 18,
        src: "/assets/gallery/341762614040.jpg",
        title: "Signature Brentwood Estate Gunite Pool & Custom Spa",
        category: "pools",
        categoryLabel: "Luxury Pools & Spas",
        location: "Brentwood, TN",
        description: "Expansive private estate project with matched stone spa, wide walk-out steps, and deep blue water tone.",
      },
      {
        id: 19,
        src: "/assets/gallery/341762617040.jpg",
        title: "Multi-Tiered Natural Rock Cascade with Lush Landscaping",
        category: "waterfalls",
        categoryLabel: "Waterfalls & Grottos",
        location: "Gallatin, TN",
        description: "Natural grade slope integrated with triple drop stone waterfall, weeping waterplants, and underwater spot lighting.",
      },
      {
        id: 20,
        src: "/assets/gallery/341762618040.jpg",
        title: "Stacked Slate Water Curtain Spillway into Gunite Pool",
        category: "waterfalls",
        categoryLabel: "Waterfalls & Grottos",
        location: "Franklin, TN",
        description: "Vertical stacked slate feature wall generating a steady, crisp water veil that masks nearby neighborhood sounds.",
      },
      {
        id: 21,
        src: "/assets/gallery/341762913040.jpg",
        title: "Perimeter Overflow Pool with Glass Pebble Interior Finish",
        category: "pools",
        categoryLabel: "Luxury Pools & Spas",
        location: "Oak Hill, TN",
        description: "Mirror-like stillness achieved through precision edge weirs and high-sheen glass bead plaster finish.",
      },
      {
        id: 22,
        src: "/assets/gallery/341762915040.jpg",
        title: "Private Belle Meade Oasis with Smart Wi-Fi Automation",
        category: "pools",
        categoryLabel: "Luxury Pools & Spas",
        location: "Belle Meade, TN",
        description: "Comprehensive home automation controls spa heating, mood lighting, and water feature pumps from your iPhone.",
      },
      {
        id: 23,
        src: "/assets/gallery/341762916040.jpg",
        title: "Hand-Crafted Tennessee Limestone Waterfall & Stream",
        category: "waterfalls",
        categoryLabel: "Waterfalls & Grottos",
        location: "Leiper's Fork, TN",
        description: "Locally sourced Tennessee limestone slabs stacked into a 7-foot mountain brook spilling directly into the pool.",
      },
      {
        id: 24,
        src: "/assets/gallery/341762917040.jpg",
        title: "Lush Tropical Rock Grotto with Hidden Slide Entry",
        category: "waterfalls",
        categoryLabel: "Waterfalls & Grottos",
        location: "Franklin, TN",
        description: "Custom flume slide nestled behind a massive boulder grotto, blending high-energy family fun with organic beauty.",
      },
      {
        id: 25,
        src: "/assets/gallery/341762942040.jpg",
        title: "Opryland Resort Commercial Water Attraction Installation",
        category: "commercial",
        categoryLabel: "Commercial & Resorts",
        location: "Nashville, TN",
        description: "Commercial-grade hydraulics and concrete engineering built to the exacting standards of Gaylord Opryland.",
      },
      {
        id: 26,
        src: "/assets/gallery/341762943040.jpg",
        title: "High-Capacity Community Aquatic Center Facility",
        category: "commercial",
        categoryLabel: "Commercial & Resorts",
        location: "Murfreesboro, TN",
        description: "Heavy bather load filtration systems with certified turnover rates and non-slip commercial decking.",
      },
      {
        id: 27,
        src: "/assets/gallery/341762944040.jpg",
        title: "Custom Zero-Entry Gunite Pool with Gentle Slope",
        category: "pools",
        categoryLabel: "Luxury Pools & Spas",
        location: "Mount Juliet, TN",
        description: "Beach-style zero-depth entry allowing toddlers, seniors, and bathers to walk into the water with ease.",
      },
      {
        id: 28,
        src: "/assets/gallery/341762945040.jpg",
        title: "Franklin Modern Architecture Pool with Custom Tanning Shelf",
        category: "pools",
        categoryLabel: "Luxury Pools & Spas",
        location: "Franklin, TN",
        description: "Crisp white coping framing crystal turquoise water with dedicated in-water umbrella sleeves and loungers.",
      },
      {
        id: 29,
        src: "/assets/gallery/341762946040.jpg",
        title: "SoundWaves Water Experience Commercial Pool System",
        category: "commercial",
        categoryLabel: "Commercial & Resorts",
        location: "Nashville, TN",
        description: "Built by Jonathan Elio Rodriguez at SoundWaves — an iconic aquatic destination showcasing our commercial pedigree.",
      },
      {
        id: 30,
        src: "/assets/gallery/341762947040.jpg",
        title: "Resort Beach-Entry Commercial Pool with Wave System",
        category: "commercial",
        categoryLabel: "Commercial & Resorts",
        location: "Nashville, TN",
        description: "Resort-scale commercial lagoon engineered with high-volume pneumatic water displacement chambers.",
      },
      {
        id: 31,
        src: "/assets/gallery/341762948040.jpg",
        title: "Family Oasis with Built-in Underwater Bench Seating",
        category: "pools",
        categoryLabel: "Luxury Pools & Spas",
        location: "Brentwood, TN",
        description: "Full-perimeter submerged sitting ledges giving family members safe resting spots anywhere in the pool.",
      },
      {
        id: 32,
        src: "/assets/gallery/341762949040-1.jpg",
        title: "Commercial Grade Filtration & Automated Control Center",
        category: "commercial",
        categoryLabel: "Commercial & Resorts",
        location: "Nashville, TN",
        description: "Industrial commercial pump manifolds, automated chemical dosers, and redundant filtration loops.",
      },
      {
        id: 33,
        src: "/assets/gallery/341762950040.jpg",
        title: "Backyard Stone Fire Pit & Poolside Lounge Pavilion",
        category: "outdoor",
        categoryLabel: "Outdoor Living & Patios",
        location: "Green Hills, TN",
        description: "Hand-laid natural stone fire pit encircled by curved sitting walls right beside the pool patio.",
      },
      {
        id: 34,
        src: "/assets/gallery/341763068040.jpg",
        title: "Gunite Pool Structural Rebar & In-House Plumbing Phase",
        category: "pools",
        categoryLabel: "Luxury Pools & Spas",
        location: "Belle Meade, TN",
        description: "Behind-the-scenes transformation: #4 and #5 heavy steel rebar tied on 10-inch centers before pneumatic gunite shoot.",
      },
      {
        id: 35,
        src: "/assets/gallery/341763069040.jpg",
        title: "Outdoor Gourmet Kitchen & Covered Granite Swim-Up Bar",
        category: "outdoor",
        categoryLabel: "Outdoor Living & Patios",
        location: "Brentwood, TN",
        description: "Full culinary kitchen with built-in gas grill, pizza oven, and sunken swim-up bar stools in pool.",
      },
      {
        id: 36,
        src: "/assets/gallery/341763070040.jpg",
        title: "Contemporary Linear Scuppers & Bronze Water Feature",
        category: "waterfalls",
        categoryLabel: "Waterfalls & Grottos",
        location: "Franklin, TN",
        description: "Solid bronze architectural water scuppers protruding from raised beam wall pouring into clear basins.",
      },
      {
        id: 37,
        src: "/assets/gallery/341763071040.jpg",
        title: "Luxury Vanishing Edge Pool with Horizon Reflection",
        category: "pools",
        categoryLabel: "Luxury Pools & Spas",
        location: "Forest Hills, TN",
        description: "Vanishing edge wall engineered on a 25-degree hillside overlooking the Williamson County hills.",
      },
      {
        id: 38,
        src: "/assets/gallery/341763072040.jpg",
        title: "Contemporary Nashville Gunite Pool with Dual Spillover Spas",
        category: "pools",
        categoryLabel: "Luxury Pools & Spas",
        location: "Nashville, TN",
        description: "Dual symmetrical hydrotherapy spas flanking the deep end with dual waterfalls pouring into the main pool.",
      },
      {
        id: 39,
        src: "/assets/gallery/341763073040.jpg",
        title: "Cascading Sheet Waterfall with Deep Plunge Basin",
        category: "waterfalls",
        categoryLabel: "Waterfalls & Grottos",
        location: "Hendersonville, TN",
        description: "Continuous 8-foot wide sheet waterfall dropping into a 9-foot diving basin, perfectly balanced for acoustics.",
      },
      {
        id: 40,
        src: "/assets/gallery/341763074040.jpg",
        title: "Nashville Luxury Hotel Rooftop Pool with Skyline Backdrop",
        category: "commercial",
        categoryLabel: "Commercial & Resorts",
        location: "Downtown Nashville, TN",
        description: "Elevated rooftop pool engineered with structural weight distribution and wind-deflecting perimeter glass.",
      },
      {
        id: 41,
        src: "/assets/gallery/341763075040.jpg",
        title: "Resort-Scale Sunshelf with 16 In-Water Commercial Loungers",
        category: "commercial",
        categoryLabel: "Commercial & Resorts",
        location: "Franklin, TN",
        description: "Massive commercial sunshelf built for an upscale residential resort community with integrated bubblers.",
      },
      {
        id: 42,
        src: "/assets/gallery/341763076040.jpg",
        title: "French Travertine Paver Patio Deck with Fire Bowls",
        category: "outdoor",
        categoryLabel: "Outdoor Living & Patios",
        location: "Brentwood, TN",
        description: "French pattern honed travertine pavers set over concrete slab, accented with gas fire urns.",
      },
      {
        id: 43,
        src: "/assets/gallery/341763077040.jpg",
        title: "Custom Cedar Pergola with Poolside Seating & Ambient Lights",
        category: "outdoor",
        categoryLabel: "Outdoor Living & Patios",
        location: "Oak Hill, TN",
        description: "Western Red Cedar timber pergola providing afternoon shade over outdoor living couches and fire table.",
      },
      {
        id: 44,
        src: "/assets/gallery/341763082040.jpg",
        title: "Resort Style Gunite Pool with Ambient Twilight Glow",
        category: "pools",
        categoryLabel: "Luxury Pools & Spas",
        location: "Belle Meade, TN",
        description: "Twilight photography highlighting subtle warm underwater LED lighting and reflective water calm.",
      },
      {
        id: 45,
        src: "/assets/gallery/341763083040.jpg",
        title: "Artisanal Tile Border & Precision Gunite Craftsmanship",
        category: "pools",
        categoryLabel: "Luxury Pools & Spas",
        location: "Green Hills, TN",
        description: "Detailed view of hand-laid glass mosaic waterline tiles and hand-troweled coping transitions.",
      },
      {
        id: 46,
        src: "/assets/gallery/341763084040.jpg",
        title: "Country Club Semi-Olympic Competition Gunite Pool",
        category: "commercial",
        categoryLabel: "Commercial & Resorts",
        location: "Brentwood, TN",
        description: "25-meter six-lane competition swimming pool complete with starting blocks and racing lane lines.",
      },
      {
        id: 47,
        src: "/assets/gallery/344570339040.jpg",
        title: "Custom Kidney Freeform Pool with Natural Stone Coping",
        category: "pools",
        categoryLabel: "Luxury Pools & Spas",
        location: "Gallatin, TN",
        description: "Timeless kidney curve enhanced with thick Tennessee quarry coping and tropical planting beds.",
      },
      {
        id: 48,
        src: "/assets/gallery/344570340040.jpg",
        title: "Commercial Hospitality Swimming Facility with Dual Spas",
        category: "commercial",
        categoryLabel: "Commercial & Resorts",
        location: "Nashville, TN",
        description: "High-volume hotel resort pool featuring dual hot tubs, safety zero-entry ramps, and commercial filtration.",
      },
      {
        id: 49,
        src: "/assets/gallery/344570341040.jpg",
        title: "Dramatic Estate Rock Cascade with Natural Creek Integration",
        category: "waterfalls",
        categoryLabel: "Waterfalls & Grottos",
        location: "Franklin, TN",
        description: "Artisanal boulder work mimicking Tennessee mountain streams with natural biological filtration.",
      },
      {
        id: 50,
        src: "/assets/gallery/344802738040.jpg",
        title: "Luxury Heated Gunite Spa with 12 Therapy Hydro Jets",
        category: "pools",
        categoryLabel: "Luxury Pools & Spas",
        location: "Belle Meade, TN",
        description: "Therapeutic hot tub featuring targeted back, calf, and neck jet clusters powered by 5HP commercial pumps.",
      },
      {
        id: 51,
        src: "/assets/gallery/344802739040.jpg",
        title: "Estate Landscaped Hardscape with Retaining Wall & Pool Deck",
        category: "outdoor",
        categoryLabel: "Outdoor Living & Patios",
        location: "Brentwood, TN",
        description: "Complete outdoor environment with engineered stone retaining walls, stepped terrace, and landscape lighting.",
      },
      {
        id: 52,
        src: "/assets/gallery/counter-img.png",
        title: "Commercial Aquatic Center Custom Engineering & Design",
        category: "commercial",
        categoryLabel: "Commercial & Resorts",
        location: "Nashville, TN",
        description: "Technical schematics and hydraulic routing for high-flow municipal and private water attractions.",
      },
      {
        id: 53,
        src: "/assets/gallery/download.webp",
        title: "Hospitality Resort Complex Pool with Architectural Island",
        category: "commercial",
        categoryLabel: "Commercial & Resorts",
        location: "Murfreesboro, TN",
        description: "Resort pool featuring a central palm island connected by arched pedestrian footbridges.",
      },
      {
        id: 54,
        src: "/assets/gallery/g1.png",
        title: "Modern Geometric Pool with Custom Step Entry",
        category: "pools",
        categoryLabel: "Luxury Pools & Spas",
        location: "Franklin, TN",
        description: "Wide full-width entry steps with contrasting tile markers and integrated LED handrail lighting.",
      },
      {
        id: 55,
        src: "/assets/gallery/g11.png",
        title: "Covered Poolside Cabana with Dining & Entertainment",
        category: "outdoor",
        categoryLabel: "Outdoor Living & Patios",
        location: "Green Hills, TN",
        description: "Shaded poolside pavilion with mounted 4K TV, outdoor wet bar, and overhead marine ceiling fans.",
      },
      {
        id: 56,
        src: "/assets/gallery/g18.webp",
        title: "Midnight Smart Illuminated Pool & Spillover Spa",
        category: "pools",
        categoryLabel: "Luxury Pools & Spas",
        location: "Belle Meade, TN",
        description: "Deep midnight blue plaster reflecting moonlight, paired with vibrant cobalt underwater LED glow.",
      },
      {
        id: 57,
        src: "/assets/gallery/g2.png",
        title: "Natural Stone Pool Decking & Sunbathing Terrace",
        category: "outdoor",
        categoryLabel: "Outdoor Living & Patios",
        location: "Oak Hill, TN",
        description: "Broad hand-cut limestone terrace with sun loungers, umbrella stands, and seamless yard drainage.",
      },
      {
        id: 58,
        src: "/assets/gallery/g22.png",
        title: "Custom Fire & Water Feature Pillars along Gunite Pool",
        category: "outdoor",
        categoryLabel: "Outdoor Living & Patios",
        location: "Brentwood, TN",
        description: "Dramatic fire and water bowls mounted atop masonry pillars discharging illuminated sheet water.",
      },
      {
        id: 59,
        src: "/assets/gallery/g3.png",
        title: "Handcrafted Boulder Waterfall with Continuous Soundscape",
        category: "waterfalls",
        categoryLabel: "Waterfalls & Grottos",
        location: "Leiper's Fork, TN",
        description: "Heavy granite and limestone stones hand-placed to produce a rich, resonant white-noise water acoustic.",
      },
      {
        id: 60,
        src: "/assets/gallery/g33.png",
        title: "Backyard Oasis Hardscaping with Outdoor Fireplace",
        category: "outdoor",
        categoryLabel: "Outdoor Living & Patios",
        location: "Franklin, TN",
        description: "Full-height Tennessee stone outdoor masonry fireplace anchoring a poolside conversation patio.",
      },
    ],
    []
  );

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

  // Filtered & Searched Items
  const filteredItems = useMemo(() => {
    let result = galleryItems;

    if (activeFilter !== "all") {
      result = result.filter((item) => item.category === activeFilter);
    }

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.location.toLowerCase().includes(q) ||
          item.categoryLabel.toLowerCase().includes(q)
      );
    }

    return result;
  }, [galleryItems, activeFilter, searchQuery]);

  const displayedItems = filteredItems.slice(0, visibleCount);

  // Lightbox handlers
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

  // Keyboard controls
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

  const currentStudy = transformationCaseStudies[activeCaseStudy];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-cyan-200 selection:text-blue-950">
      {/* 1. Header */}
      <Header />

      <main className="flex-grow">
        {/* =====================================================================
            SECTION 1: HERO / REAL TRANSFORMATIONS. REAL CRAFTSMANSHIP.
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
              src="/assets/banner2.png"
              alt="Pools By Elio Before and After Project Transformations"
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
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/25 text-cyan-200 text-xs font-bold tracking-widest uppercase">
                    Before &amp; After Portfolio
                  </span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-white tracking-tight leading-[1.12]">
                  Real Transformations. Real Craftsmanship.
                </h1>

                <p className="text-lg sm:text-2xl font-bold text-cyan-300 tracking-tight leading-snug">
                  Witness the Power of 100% In-House Pool Renovations &amp; Custom Builds
                </p>

                <p className="text-blue-50/90 text-[15.5px] sm:text-[16.5px] leading-[1.8] font-normal">
                  Whether converting an obsolete, cracked 1980s pool into a sleek modern gunite resort or transforming a bare, muddy Tennessee hillside into an infinity-edge oasis with waterfalls and outdoor bars — Jonathan Elio Rodriguez is hands-on on every single project.
                </p>

                <p className="text-blue-50/90 text-[15.5px] sm:text-[16.5px] leading-[1.8] font-normal">
                  Everything is done in-house with zero subcontractors. That means no finger-pointing, no endless delays, and total control over every steel rebar tie, gunite shoot, plumbing line, and hand-chiseled stone tile.
                </p>

                {/* Highlight Quote */}
                <blockquote className="p-4 sm:p-5 rounded-xl bg-white/[0.08] border border-cyan-400/30 text-white shadow-md">
                  <p className="text-sm sm:text-[16px] font-semibold italic text-cyan-200 leading-relaxed">
                    “Don&apos;t settle for an outdated or leaking pool. We take the toughest backyard challenges in Middle Tennessee and turn them into private resort masterpieces.”
                  </p>
                </blockquote>

                {/* Action Row */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    href="/quote"
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm sm:text-base font-bold text-[#021838] bg-cyan-300 hover:bg-cyan-200 shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                  >
                    <Sparkles className="w-4 h-4 text-[#021838]" />
                    <span>Request Transformation Quote</span>
                    <ArrowRight className="w-4 h-4 text-[#021838]" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 transition-all duration-200"
                  >
                    <span>Schedule Free On-Site Inspection</span>
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

              {/* Right Column: Key Trust Metrics Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-cyan-400/30 bg-blue-950/60 p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/15 pb-4">
                    <div>
                      <span className="text-xs uppercase tracking-widest text-cyan-300 font-bold">
                        Documented Craftsmanship
                      </span>
                      <h3 className="text-2xl font-extrabold text-white">
                        60+ Completed Works
                      </h3>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                      <Layers className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-blue-100">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-semibold">100% In-House Demolition &amp; Build</strong>
                        <span>We own our excavators, gunite rigs, and plumbing equipment. Zero subcontractors touch your pool.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-semibold">Tennessee Bedrock &amp; Clay Experts</strong>
                        <span>Specialized structural shotcrete engineering built to withstand Middle Tennessee freeze-thaw cycles.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-semibold">Sound Waves Opryland Pedigree</strong>
                        <span>Commercial-grade precision applied directly to private residential estates across Nashville.</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 text-center">
                    <p className="text-[11px] text-cyan-200/80">
                      Serving Belle Meade • Brentwood • Franklin • Green Hills • Hendersonville • Nashville
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 2: INTERACTIVE BEFORE & AFTER TRANSFORMATION SHOWCASE
           ===================================================================== */}
        <section
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
          }}
          className="relative py-[50px] lg:py-[65px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-slate-50 border border-slate-200 shadow-md"
        >
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0055a5] bg-blue-100/70 px-4 py-1.5 rounded-full inline-block mb-3">
                Interactive Case Studies
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Featured Pool Transformations
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Select a real Middle Tennessee project below and toggle between the construction phase and completed luxury sanctuary.
              </p>
            </div>

            {/* Case Study Selection Pills */}
            <div className="flex flex-wrap justify-center gap-2.5 mb-8">
              {transformationCaseStudies.map((study, idx) => (
                <button
                  key={study.id}
                  onClick={() => {
                    setActiveCaseStudy(idx);
                    setSliderPosition(50);
                  }}
                  type="button"
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 border ${
                    activeCaseStudy === idx
                      ? "bg-[#071684] text-white border-[#071684] shadow-lg scale-105"
                      : "bg-white text-slate-700 border-slate-200 hover:border-blue-400 hover:bg-blue-50/50"
                  }`}
                >
                  <span>{study.title.split("–")[0]}</span>
                </button>
              ))}
            </div>

            {/* Active Case Study Spotlight */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Visual Frame: Interactive Before/After Viewer */}
                <div className="lg:col-span-7">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 aspect-[4/3] sm:aspect-[16/10]">
                    
                    {/* View Modes: Slider, Before, or After */}
                    {viewMode === "slider" ? (
                      <div className="relative w-full h-full select-none overflow-hidden">
                        {/* AFTER Image (Full background) */}
                        <div className="absolute inset-0">
                          <Image
                            src={currentStudy.afterImage}
                            alt={`After: ${currentStudy.title}`}
                            fill
                            unoptimized
                            className="object-cover"
                          />
                          <span className="absolute top-2.5 sm:top-4 right-2.5 sm:right-4 bg-emerald-600 text-white text-[10px] sm:text-xs font-extrabold uppercase px-2.5 sm:px-3 py-1 rounded-full shadow-md z-10">
                            COMPLETED (AFTER)
                          </span>
                        </div>

                        {/* BEFORE Image (Clipped cleanly by clipPath without squishing) */}
                        <div
                          className="absolute inset-0 overflow-hidden"
                          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                        >
                          <div className="relative w-full h-full">
                            <Image
                              src={currentStudy.beforeImage}
                              alt={`Before: ${currentStudy.title}`}
                              fill
                              unoptimized
                              className="object-cover"
                            />
                            <span className="absolute top-2.5 sm:top-4 left-2.5 sm:left-4 bg-amber-600 text-white text-[10px] sm:text-xs font-extrabold uppercase px-2.5 sm:px-3 py-1 rounded-full shadow-md z-10">
                              BEFORE / REBAR PHASE
                            </span>
                          </div>
                        </div>

                        {/* Interactive Drag Divider Bar */}
                        <div
                          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_15px_rgba(0,0,0,0.8)]"
                          style={{ left: `${sliderPosition}%` }}
                        >
                          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#0055a5] border-2 border-white text-white flex items-center justify-center shadow-2xl">
                            <Repeat className="w-4 h-4" />
                          </div>
                        </div>

                        {/* Hidden Range Input for full touch and mouse interaction */}
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={sliderPosition}
                          onChange={(e) => setSliderPosition(Number(e.target.value))}
                          aria-label="Comparison slider"
                          className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-30"
                        />
                      </div>
                    ) : viewMode === "before" ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={currentStudy.beforeImage}
                          alt={`Before: ${currentStudy.title}`}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                        <span className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-extrabold uppercase px-3 py-1 rounded-full shadow-md">
                          BEFORE TRANSFORMATION
                        </span>
                      </div>
                    ) : (
                      <div className="relative w-full h-full">
                        <Image
                          src={currentStudy.afterImage}
                          alt={`After: ${currentStudy.title}`}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                        <span className="absolute top-4 right-4 bg-emerald-600 text-white text-xs font-extrabold uppercase px-3 py-1 rounded-full shadow-md">
                          COMPLETED LUXURY RESORT
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Mode Toggles */}
                  <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setViewMode("slider")}
                        className={`px-3 py-1.5 rounded-lg font-bold transition-colors ${
                          viewMode === "slider"
                            ? "bg-[#0055a5] text-white"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`}
                      >
                        Interactive Slider
                      </button>
                      <button
                        onClick={() => setViewMode("before")}
                        className={`px-3 py-1.5 rounded-lg font-bold transition-colors ${
                          viewMode === "before"
                            ? "bg-amber-600 text-white"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`}
                      >
                        View Before
                      </button>
                      <button
                        onClick={() => setViewMode("after")}
                        className={`px-3 py-1.5 rounded-lg font-bold transition-colors ${
                          viewMode === "after"
                            ? "bg-emerald-600 text-white"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`}
                      >
                        View After
                      </button>
                    </div>

                    <span className="hidden sm:inline font-medium">
                      Drag slider or click buttons
                    </span>
                  </div>
                </div>

                {/* Case Study Details Column */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0055a5] bg-blue-100 px-3 py-1 rounded-full">
                      {currentStudy.badge}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-500 font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-[#0055a5]" />
                      {currentStudy.location}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                    {currentStudy.title}
                  </h3>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-2 gap-3 py-1">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <p className="text-[11px] font-bold text-slate-400 uppercase">Turnaround Time</p>
                      <p className="text-sm font-extrabold text-slate-900 flex items-center gap-1 mt-0.5">
                        <Clock className="w-4 h-4 text-[#0055a5]" />
                        <span>{currentStudy.timeline}</span>
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <p className="text-[11px] font-bold text-slate-400 uppercase">Subcontractors</p>
                      <p className="text-sm font-extrabold text-emerald-600 flex items-center gap-1 mt-0.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span>0 (100% In-House)</span>
                      </p>
                    </div>
                  </div>

                  {/* Before / After Notes */}
                  <div className="space-y-3 pt-1">
                    <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-xs">
                      <strong className="text-amber-900 block font-bold mb-1">Before State:</strong>
                      <p className="text-amber-800 leading-relaxed">{currentStudy.beforeDesc}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs">
                      <strong className="text-emerald-900 block font-bold mb-1">After Transformation:</strong>
                      <p className="text-emerald-800 leading-relaxed">{currentStudy.afterDesc}</p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="pt-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Key Engineering Upgrades:
                    </p>
                    <div className="space-y-1.5">
                      {currentStudy.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#0055a5] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-3">
                    <Link
                      href="/quote"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#0055a5] hover:bg-[#004488] shadow transition-colors"
                    >
                      <span>Quote a Similar Project</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 3: 4-STAGE IN-HOUSE RENOVATION PROCESS
           ===================================================================== */}
        <section
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
          }}
          className="relative py-[55px] lg:py-[70px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-white shadow-md border border-slate-200/80"
        >
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0055a5] bg-blue-100/70 px-4 py-1.5 rounded-full inline-block mb-3">
                Methodology &amp; Standards
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                The Pools By Elio Transformation Process
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                How we take tired, failing, or unfinished backyards and convert them into structurally impervious private escapes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Structural Laser Scan & 3D Renderings",
                  desc: "We perform digital elevation surveys of your yard, inspect existing plumbing pressure, test soil strata, and generate full photorealistic 3D architectural renders.",
                  badge: "Evaluation",
                  icon: Compass,
                },
                {
                  step: "02",
                  title: "In-House Demolition & Bedrock Prep",
                  desc: "Our own crews surgically remove cracked decking and old vinyl liners. We excavate down to solid limestone bedrock, securing footings against Tennessee shifting clay.",
                  badge: "Heavy Excavation",
                  icon: Wrench,
                },
                {
                  step: "03",
                  title: "Steel Gunite & Commercial Hydraulics",
                  desc: "Gridwork of #4 & #5 grade-60 steel rebar tied on tight centers, pneumatically shot with high-density commercial gunite, and plumbed with Schedule-40/80 conduits.",
                  badge: "Impervious Shell",
                  icon: ShieldCheck,
                },
                {
                  step: "04",
                  title: "Artisanal Tile, Sheen Finish & Hand-Off",
                  desc: "Hand-laid frost-proof glass tiles, French travertine coping, and Caribbean pebble sheen plaster, calibrated and tested by Jonathan Elio personally.",
                  badge: "White-Glove Finish",
                  icon: Sparkles,
                },
              ].map((process, pIdx) => {
                const IconComponent = process.icon;
                return (
                  <div
                    key={pIdx}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-blue-50/30 transition-all duration-200 relative group flex flex-col justify-between shadow-sm"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-black text-[#0055a5]/30 group-hover:text-[#0055a5] transition-colors">
                          {process.step}
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#0055a5] bg-blue-100 px-2.5 py-1 rounded-md">
                          {process.badge}
                        </span>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-blue-100/80 text-[#0055a5] flex items-center justify-center mb-3">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-extrabold text-slate-900 mb-2">
                        {process.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {process.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 4: COMPLETE 60-PROJECT EXTRACTED GALLERY
           ===================================================================== */}
        <section
          id="gallery"
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
          }}
          className="relative py-[50px] lg:py-[70px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-gradient-to-b from-slate-50 via-sky-50/20 to-white border border-slate-200/70 shadow-sm"
        >
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Gallery Header */}
            <div className="text-center w-full max-w-none mx-auto space-y-3 mb-8 flex flex-col items-center justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#004b93]/10 border border-[#004b93]/20 text-[#004b93] text-xs font-bold uppercase tracking-widest backdrop-blur-sm shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#004b93]" />
                <span>COMPLETE PROJECT ARCHIVE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#003870] tracking-tight text-center">
                All 60 Completed Masterpieces
              </h2>

              <p className="text-center w-full text-slate-600 text-sm sm:text-base font-medium max-w-3xl mx-auto leading-relaxed">
                Extracted directly from our master archives. Every photograph represents authentic gunite pool construction, waterfall fabrication, and outdoor living built in Middle Tennessee.
              </p>
            </div>

            {/* Filter Tabs & Search Controls Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
              
              {/* Filter Tabs */}
              <div className="flex flex-wrap items-center justify-center gap-2">
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
                      className={`px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                        isActive
                          ? "bg-[#004b93] text-white shadow-md shadow-[#004b93]/25 scale-[1.02]"
                          : "bg-white text-slate-700 border border-slate-200 hover:border-[#004b93]/40 hover:text-[#004b93] hover:bg-slate-50 shadow-sm"
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

              {/* Search by City / Feature Input */}
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search city, spa, waterfall..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setVisibleCount(15);
                  }}
                  className="w-full pl-9 pr-4 py-2 rounded-full text-xs sm:text-sm border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#0055a5] focus:border-transparent text-slate-800 placeholder-slate-400 shadow-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Gallery Grid (5 cols desktop, 3 tablet, 2 mobile) */}
            {displayedItems.length > 0 ? (
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
            ) : (
              <div className="py-16 text-center bg-white rounded-2xl border border-slate-200">
                <Search className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                <h3 className="text-base font-bold text-slate-800">No matching projects found</h3>
                <p className="text-xs text-slate-500 mt-1">Try resetting the filter or searching for another keyword like &quot;Belle Meade&quot; or &quot;Spa&quot;.</p>
                <button
                  onClick={() => {
                    setActiveFilter("all");
                    setSearchQuery("");
                  }}
                  className="mt-4 px-4 py-2 rounded-full text-xs font-bold text-[#0055a5] bg-blue-50 hover:bg-blue-100 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}

            {/* Load More Controls */}
            {visibleCount < filteredItems.length && (
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
            )}

            {visibleCount >= filteredItems.length && filteredItems.length > 0 && (
              <div className="mt-10 text-center">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Showing all {filteredItems.length} documented projects</span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* =====================================================================
            SECTION 5: COMMON POOL RENOVATIONS WE FIX
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1 space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-300 bg-white/10 px-3.5 py-1 rounded-full inline-block">
                  Specialized Remodeling
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  Common Pool Problems We Permanently Solve
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
                  Many pools in Middle Tennessee were built decades ago without modern soil engineering or energy-efficient hydraulics. Here is what we renovate every week.
                </p>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl bg-white/10 border border-white/15">
                  <Wrench className="w-6 h-6 text-cyan-300 mb-2" />
                  <h4 className="text-sm font-bold text-white mb-1">Vinyl-To-Gunite Conversions</h4>
                  <p className="text-xs text-blue-100 leading-relaxed">
                    Stop replacing torn vinyl liners every 5 years. We replace flimsy steel walls with permanent monolithic steel gunite.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white/10 border border-white/15">
                  <Flame className="w-6 h-6 text-cyan-300 mb-2" />
                  <h4 className="text-sm font-bold text-white mb-1">Adding Heated Spas &amp; Sunshelves</h4>
                  <p className="text-xs text-blue-100 leading-relaxed">
                    We plumb and shoot new raised hydrotherapy spas and shallow tanning shelves directly attached to your existing pool structure.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white/10 border border-white/15">
                  <TrendingUp className="w-6 h-6 text-cyan-300 mb-2" />
                  <h4 className="text-sm font-bold text-white mb-1">Energy-Efficient Automation</h4>
                  <p className="text-xs text-blue-100 leading-relaxed">
                    Cut pool electrical costs by up to 70% with variable speed Pentair commercial pumps, saltwater conversion, and smartphone Wi-Fi controls.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 6: BOTTOM CTA CARD / READY FOR YOUR BACKYARD TRANSFORMATION
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
              src="/assets/banner3.png"
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
                <span>Begin Your Renovation</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Ready for Your Own Backyard Transformation?
              </h2>

              <p className="text-base sm:text-xl text-blue-100 font-normal leading-relaxed max-w-2xl mx-auto">
                Schedule a consultation directly with Jonathan Elio Rodriguez. We will evaluate your existing pool or yard, provide a 3D digital proposal, and give you an upfront, transparent estimate.
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
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-[#0055a5] hover:bg-[#004488] border-2 border-white shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <span>Contact Us Directly</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-bold text-[#021838] bg-cyan-300 hover:bg-cyan-200 transition-all duration-200 shadow-lg"
                >
                  <Sparkles className="w-4 h-4 text-[#021838]" />
                  <span>Request Free 3D Estimate</span>
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
            <div className="relative w-full h-[50dvh] sm:h-[62dvh] rounded-[5px] overflow-hidden shadow-2xl border border-white/10 bg-black/50">
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

      {/* Floating Call & Quote Widget */}
      <FloatingContact />

      {/* Global Footer */}
      <Footer />
    </div>
  );
}


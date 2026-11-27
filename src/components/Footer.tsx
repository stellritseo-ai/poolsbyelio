"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUp,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  GoogleIcon,
  YelpIcon,
  BBBIcon,
  SocialMediaBar,
} from "./SocialIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = [
    { label: "All Services Hub", href: "/services" },
    { label: "Custom Pools & Spas", href: "/pools-and-spas" },
    { label: "Gunite Pool Construction", href: "/gunite-pool-construction" },
    { label: "Infinity Edge Pools", href: "/infinity-edge-pools" },
    { label: "Pool Remodeling & Repair", href: "/pool-remodeling" },
    { label: "Water Features & Waterfalls", href: "/water-features" },
    { label: "Pool Technology & Automation", href: "/technology" },
    { label: "Backyard Living & Cabanas", href: "/backyard-concepts" },
    { label: "Commercial Pools & Water Parks", href: "/commercial-pool-construction" },
    { label: "Lazy River Construction", href: "/lazy-river-construction" },
    { label: "Architectural Fountains", href: "/fountains" },
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our 4-Stage Process", href: "/process" },
    { label: "Our Projects", href: "/projects" },
    { label: "Before & After Gallery", href: "/before-after" },
    { label: "Customer Reviews", href: "/reviews" },
    { label: "Pool Construction FAQ", href: "/faq" },
    { label: "Guides & Resources", href: "/resources" },
    { label: "Areas We Serve", href: "/areas-we-serve" },
    { label: "Request A Quote", href: "/quote" },
    { label: "Contact Us", href: "/contact" },
  ];

  const serviceAreaLinks = [
    { label: "Nashville, TN", href: "/pool-builders-nashville-tn" },
    { label: "Franklin, TN", href: "/pool-builders-franklin-tn" },
    { label: "Brentwood, TN", href: "/pool-builders-brentwood-tn" },
    { label: "All Middle TN Areas", href: "/areas-we-serve" },
  ];

  const resourceLinks = [
    { label: "Pool Cost in Nashville", href: "/resources/custom-pool-cost-nashville" },
    { label: "Gunite vs. Fiberglass", href: "/resources/gunite-vs-fiberglass-pools" },
    { label: "Build Timeline", href: "/resources/pool-construction-timeline" },
    { label: "Choose a TN Contractor", href: "/resources/how-to-choose-a-pool-contractor-tennessee" },
  ];

  return (
    <footer
      style={{
        marginRight: "10px",
        marginBottom: "10px",
        marginLeft: "10px",
        borderRadius: "5px",
      }}
      className="relative mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-gradient-to-b from-[#021329] via-[#031b3b] to-[#010b1a] text-white pt-16 pb-8 border border-blue-950/80 shadow-2xl"
    >
      {/* Specular Top Rim Reflection */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none" />

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-blue-900/60">
          {/* Column 1: Brand & Executive Story (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <div className="relative h-14 w-48 bg-white rounded-[5px] p-2.5 shadow-md flex items-center justify-center transition-transform hover:scale-[1.02] duration-200">
                <Image
                  src="/assets/logo.png"
                  alt="Pools By Elio Logo"
                  fill
                  sizes="192px"
                  className="object-contain p-1"
                />
              </div>
            </Link>

            <p className="text-blue-100/75 text-sm leading-relaxed">
              Jonathan Elio Rodriguez &amp; David Elio Rodriguez are the visionary
              founders of Pools By Elio. With over 25 years of master gunite pool
              craftsmanship in Middle Tennessee, they bring an experienced,
              in-house team to execute every project to the highest architectural
              standards.
            </p>

            <p className="text-blue-100/75 text-sm leading-relaxed">
              Jonathan is hands-on with every build to ensure structural
              integrity and flawless execution. Zero subcontractors, 100%
              accountability. We set the standards!
            </p>

            {/* Social Media Links (Facebook, Instagram, Google, Yelp, BBB) */}
            <div className="pt-2">
              <span className="block text-xs uppercase font-bold text-cyan-300 tracking-wider mb-2.5">
                Connect &amp; Verify With Us:
              </span>
              <SocialMediaBar variant="footer" />
            </div>
          </div>

          {/* Column 2: Services (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold text-white tracking-wider uppercase border-b-2 border-cyan-500/80 pb-2 inline-block">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-[13.5px] text-blue-200/80 hover:text-cyan-300 transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold text-white tracking-wider uppercase border-b-2 border-cyan-500/80 pb-2 inline-block">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-[13.5px] text-blue-200/80 hover:text-cyan-300 transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Dispatch (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold text-white tracking-wider uppercase border-b-2 border-cyan-500/80 pb-2 inline-block">
              Contact &amp; Dispatch
            </h3>
            <div className="space-y-3.5 text-sm text-blue-100/85">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <a
                  href="https://maps.google.com/?q=412+Ezell+Pike,+Nashville,+TN+37217"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors leading-snug"
                >
                  <span>412 Ezell Pike, Nashville, TN 37217</span>
                  <ExternalLink className="w-3 h-3 inline-block ml-1 opacity-70" />
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <a
                    href="tel:6155683154"
                    className="hover:text-cyan-300 transition-colors font-bold block"
                  >
                    (615) 568-3154
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
                <a
                  href="mailto:eliocustompools@live.com"
                  className="hover:text-cyan-300 transition-colors truncate"
                >
                  eliocustompools@live.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs sm:text-sm">
                    Mon - Fri: 8:00 AM – 6:00 PM
                  </span>
                  <span className="block text-xs text-cyan-300/80 mt-0.5">
                    Saturday: By Appointment (On-Site Surveys)
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[4px] bg-blue-900/40 border border-blue-700/60 text-xs text-cyan-300 shadow-inner">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>TN Licensed General Contractor • Insured &amp; Bonded</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle TN Local Pages & Planning Guides Ribbon */}
        <div className="py-4 border-b border-blue-900/60 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-blue-200/80 text-center">
          <span className="text-white font-bold uppercase tracking-wider text-[11px]">
            Local Service Pages:
          </span>
          {serviceAreaLinks.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className="hover:text-cyan-300 transition-colors font-medium"
            >
              {area.label}
            </Link>
          ))}
        </div>

        {/* Homeowner Planning Guides */}
        <div className="py-4 border-b border-blue-900/60 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-blue-200/75 text-center">
          <span className="text-white font-bold uppercase tracking-wider text-[11px]">
            Planning Guides:
          </span>
          {resourceLinks.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="hover:text-cyan-300 transition-colors"
            >
              {guide.label}
            </Link>
          ))}
        </div>

        {/* Bottom Bar: Copyright & Navigation */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-blue-300/70 gap-4">
          <div>
            Copyright &copy; 2026 Pools by Elio | All Rights Reserved. Design By :{" "}
            <span className="font-semibold text-white tracking-wider">
              STELLR IT
            </span>
            .
          </div>

          <div className="flex items-center space-x-6">
            <Link href="/faq" className="hover:text-white transition-colors">
              FAQ
            </Link>
            <Link href="/resources" className="hover:text-white transition-colors">
              Resources
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-blue-900/60 hover:bg-[#004b93] text-white transition-all duration-200 flex items-center justify-center border border-blue-700/60 hover:border-cyan-400/50 shadow-sm"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

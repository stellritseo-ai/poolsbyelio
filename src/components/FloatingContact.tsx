"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageSquare, ArrowUp, X } from "lucide-react";

export default function FloatingContact() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowScrollTop(window.scrollY > 400);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <aside aria-label="Quick contact actions" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto p-3 rounded-full bg-white text-slate-700 shadow-xl border border-slate-200 hover:bg-slate-50 hover:text-[#004b93] transition-all transform hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Call & Quote Actions */}
      <div className="pointer-events-auto flex items-center gap-2">
        <a
          href="tel:6155683154"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-2xl transition-all transform hover:scale-105"
          aria-label="Call (615) 568-3154"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">(615) 568-3154</span>
        </a>

        <a
          href="#contact"
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#004b93] hover:bg-[#003870] text-white font-bold text-sm shadow-2xl transition-all transform hover:scale-105"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Get Quote</span>
        </a>
      </div>
    </aside>
  );
}


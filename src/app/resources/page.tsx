import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, BookOpen, HelpCircle, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { PageJsonLd } from "@/components/JsonLdSchema";
import { SITE_CONFIG, createPageMetadata } from "@/lib/seo-config";
import { guidePages } from "@/content/guides";
import { ALT } from "@/content/images";

export const metadata: Metadata = createPageMetadata({
  title: "Pool Construction Guides & Resources | Nashville, TN",
  description:
    "Practical guides for Middle Tennessee homeowners and developers: custom pool costs, gunite vs. fiberglass, build timelines and vetting a Tennessee contractor.",
  path: "/resources",
  keywords: [
    "pool construction guides Nashville TN",
    "custom pool planning resources Tennessee",
    "gunite pool cost and timeline guides",
  ],
});

export default function ResourcesIndexPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <PageJsonLd
        pageType="CollectionPage"
        pageName="Pool Construction Guides & Resources"
        pageDescription="Practical guides for Middle Tennessee homeowners planning a custom gunite pool or commercial aquatic project."
        pagePath="/resources"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
        ]}
      />

      <Header />

      <main className="flex-1">
        <section className="relative mx-[10px] mb-[10px] rounded-[5px] overflow-hidden bg-[#001a40] text-white shadow-2xl">
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/banner1.png"
              alt={ALT.nightPool}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#001535]/95 via-[#00285c]/90 to-[#00285c]/75" />
          </div>

          <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
            <nav aria-label="Breadcrumb" className="mb-5 text-xs text-blue-200 flex items-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-cyan-300 font-bold" aria-current="page">
                Resources
              </span>
            </nav>

            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-cyan-300/30 text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-cyan-200">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Homeowner &amp; Commercial Guides</span>
              </span>
              <h1 className="text-[clamp(1.85rem,4vw,3.1rem)] font-extrabold tracking-tight leading-[1.1]">
                Custom Pool Planning Guides for Middle Tennessee
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-blue-100/90 leading-relaxed">
                Straightforward, field-grounded answers on gunite construction, Nashville pricing factors, project timelines and how to vet a Tennessee pool contractor.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-[10px] mb-[10px] rounded-[5px] bg-slate-50 border border-slate-200/80 py-10 sm:py-14 px-4 sm:px-8 lg:px-12">
          <div className="max-w-[1200px] mx-auto space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {guidePages.map((guide) => (
                <Link
                  key={guide.slug}
                  href={guide.path}
                  className="group rounded-2xl bg-white border border-slate-200/90 hover:border-[#00509e]/40 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col"
                >
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={guide.heroImage.src}
                      alt={guide.heroImage.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001535]/70 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#00285c]/90 text-cyan-200 text-[11px] font-extrabold uppercase tracking-wider">
                      {guide.eyebrow}
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-[#00509e] transition-colors leading-snug">
                        {guide.h1}
                      </h2>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {guide.metaDescription}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-extrabold text-[#00509e]">
                      <span>Read Full Guide</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/faq"
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#00509e]/40 hover:shadow-md transition-all space-y-2"
              >
                <div className="flex items-center gap-2 text-[#00509e] font-extrabold text-sm">
                  <HelpCircle className="w-4 h-4" />
                  <span>Pool Construction FAQ</span>
                </div>
                <p className="text-sm text-slate-600">
                  Direct answers to 15 common residential and commercial pool questions.
                </p>
              </Link>

              <Link
                href="/process"
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#00509e]/40 hover:shadow-md transition-all space-y-2"
              >
                <div className="text-[#00509e] font-extrabold text-sm">
                  Our 4-Stage Build Process &rarr;
                </div>
                <p className="text-sm text-slate-600">
                  See how consultation, 3D design, in-house construction and start-up work.
                </p>
              </Link>

              <a
                href="tel:6155683154"
                className="p-6 rounded-2xl bg-[#00285c] text-white hover:bg-[#003b80] transition-colors space-y-2"
              >
                <div className="flex items-center gap-2 text-cyan-300 font-extrabold text-sm">
                  <Phone className="w-4 h-4" />
                  <span>Call {SITE_CONFIG.phonePrimary}</span>
                </div>
                <p className="text-sm text-blue-100">
                  Prefer to ask directly? Speak with our Nashville team about your property.
                </p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
}


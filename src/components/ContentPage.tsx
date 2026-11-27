import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { PageJsonLd } from "@/components/JsonLdSchema";
import { SITE_CONFIG, createPageMetadata } from "@/lib/seo-config";
import type { ContentPageData } from "@/content/types";

export function buildContentMetadata(data: ContentPageData): Metadata {
  return createPageMetadata({
    title: data.metaTitle,
    description: data.metaDescription,
    path: data.path,
    keywords: data.keywords,
    ogType: data.article ? "article" : "website",
    publishedTime: data.article?.datePublished,
    modifiedTime: data.article?.dateModified,
  });
}

/**
 * Server-rendered content template. Every heading, paragraph, table and FAQ is
 * plain HTML (FAQs use native <details>), so search engines and AI crawlers can
 * read all content without executing JavaScript.
 */
export default function ContentPage({ data }: { data: ContentPageData }) {
  const lastCrumb = data.breadcrumbs[data.breadcrumbs.length - 1];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <PageJsonLd
        pageType={data.slug === "faq" ? "FAQPage" : "WebPage"}
        pageName={data.h1}
        pageDescription={data.metaDescription}
        pagePath={data.path}
        breadcrumbs={data.breadcrumbs}
        faqs={data.faqs}
        serviceName={data.serviceSchema?.name}
        serviceDescription={data.serviceSchema?.description}
        servicePath={data.serviceSchema ? data.path : undefined}
        article={
          data.article
            ? {
                headline: data.h1,
                description: data.metaDescription,
                path: data.path,
                datePublished: data.article.datePublished,
                dateModified: data.article.dateModified,
              }
            : undefined
        }
      />

      <Header />

      <main id="main-content" className="flex-1">
        {/* HERO */}
        <section className="relative mx-[10px] mb-[10px] rounded-[5px] overflow-hidden bg-[#001a40] text-white shadow-2xl">
          <div className="absolute inset-0 z-0">
            <Image
              src={data.heroImage.src}
              alt={data.heroImage.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#001535]/95 via-[#00285c]/90 to-[#00285c]/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00122e]/80 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
            <nav
              aria-label="Breadcrumb"
              className="mb-5 text-xs text-blue-200 flex flex-wrap items-center gap-2"
            >
              {data.breadcrumbs.map((crumb, i) => {
                const isLast = i === data.breadcrumbs.length - 1;
                return (
                  <span key={crumb.path} className="flex items-center gap-2">
                    {isLast ? (
                      <span className="text-cyan-300 font-bold" aria-current="page">
                        {crumb.name}
                      </span>
                    ) : (
                      <Link href={crumb.path} className="hover:text-white transition-colors">
                        {crumb.name}
                      </Link>
                    )}
                    {!isLast && <span aria-hidden="true">/</span>}
                  </span>
                );
              })}
            </nav>

            <div className="max-w-3xl space-y-5">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-cyan-300/30 backdrop-blur-md text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-cyan-200">
                {data.eyebrow}
              </span>
              <h1 className="text-[clamp(1.85rem,4vw,3.25rem)] font-extrabold tracking-tight leading-[1.1] text-white">
                {data.h1}
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-blue-100/90 leading-relaxed">
                {data.intro}
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Link
                  href={data.cta.primaryHref}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-[#00285c] hover:bg-cyan-50 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-xl transition-all duration-200"
                >
                  <span>{data.cta.primaryLabel}</span>
                  <ArrowRight className="w-4 h-4 text-[#00509e]" />
                </Link>
                <a
                  href="tel:6155683154"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0047a0]/90 hover:bg-[#0055c4] text-white border border-white/25 font-bold text-xs sm:text-sm shadow-lg transition-all duration-200"
                >
                  <Phone className="w-4 h-4 fill-white" />
                  <span>{SITE_CONFIG.phonePrimary}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* BODY */}
        <section className="mx-[10px] mb-[10px] rounded-[5px] bg-slate-50 border border-slate-200/80 py-10 sm:py-14 px-4 sm:px-8 lg:px-12">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <article className="lg:col-span-8 space-y-12 min-w-0">
              {data.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-32 space-y-4">
                  <h2 className="text-[clamp(1.4rem,2.6vw,2rem)] font-extrabold text-slate-900 tracking-tight leading-tight">
                    {section.heading}
                  </h2>

                  {section.paragraphs?.map((p, i) => (
                    <p key={i} className="text-slate-700 text-[15px] sm:text-base leading-[1.75]">
                      {p}
                    </p>
                  ))}

                  {section.bullets && (
                    <ul className="space-y-2.5">
                      {section.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-slate-700 text-[15px] leading-relaxed">
                          <CheckCircle2 className="w-4.5 h-4.5 mt-0.5 text-[#00509e] shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.steps && (
                    <ol className="space-y-3">
                      {section.steps.map((s, i) => (
                        <li
                          key={i}
                          className="flex gap-4 p-4 sm:p-5 rounded-xl bg-white border border-slate-200/90 shadow-xs"
                        >
                          <span className="w-9 h-9 shrink-0 rounded-lg bg-[#00285c] text-cyan-300 font-black text-sm flex items-center justify-center">
                            {i + 1}
                          </span>
                          <div>
                            <h3 className="font-extrabold text-slate-900 text-base">{s.title}</h3>
                            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mt-1">
                              {s.body}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  )}

                  {section.table && (
                    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
                      <table className="w-full text-left text-sm">
                        <thead className="bg-[#00285c] text-white">
                          <tr>
                            {section.table.headers.map((h) => (
                              <th key={h} scope="col" className="px-4 py-3 font-bold whitespace-nowrap">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row, r) => (
                            <tr key={r} className="border-t border-slate-100 even:bg-slate-50/70">
                              {row.map((cell, c) => (
                                <td
                                  key={c}
                                  className={`px-4 py-3 align-top ${c === 0 ? "font-bold text-slate-900" : "text-slate-700"}`}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {section.callout && (
                    <div className="p-5 rounded-xl bg-blue-50 border border-blue-200/80">
                      <h3 className="font-extrabold text-[#003870] text-sm uppercase tracking-wider">
                        {section.callout.title}
                      </h3>
                      <p className="text-slate-700 text-[15px] leading-relaxed mt-1.5">
                        {section.callout.body}
                      </p>
                    </div>
                  )}
                </section>
              ))}

              {/* FAQ — native <details>, fully crawlable */}
              {data.faqs && data.faqs.length > 0 && (
                <section id="faq" className="scroll-mt-32 space-y-4">
                  <h2 className="text-[clamp(1.4rem,2.6vw,2rem)] font-extrabold text-slate-900 tracking-tight">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-3">
                    {data.faqs.map((f, i) => (
                      <details
                        key={i}
                        open={i === 0}
                        className="group rounded-xl bg-white border border-slate-200/90 shadow-xs overflow-hidden"
                      >
                        <summary className="cursor-pointer list-none px-5 py-4 flex items-center justify-between gap-4 font-extrabold text-slate-900 text-[15px] hover:bg-slate-50 transition-colors">
                          <span>{f.q}</span>
                          <ChevronDown className="w-5 h-5 text-[#00509e] shrink-0 transition-transform group-open:rotate-180" />
                        </summary>
                        <div className="px-5 pb-5 pt-1 text-slate-700 text-[15px] leading-relaxed border-t border-slate-100">
                          {f.a}
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              )}
            </article>

            {/* ASIDE */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28 space-y-4">
                {data.keyFacts && data.keyFacts.length > 0 && (
                  <div className="rounded-2xl bg-white border border-slate-200/90 shadow-md p-5">
                    <h2 className="text-xs font-extrabold uppercase tracking-widest text-[#00509e] mb-3">
                      At a glance
                    </h2>
                    <dl className="space-y-3">
                      {data.keyFacts.map((k) => (
                        <div key={k.label} className="border-b border-slate-100 last:border-0 pb-3 last:pb-0">
                          <dt className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">
                            {k.label}
                          </dt>
                          <dd className="text-sm font-bold text-slate-900 mt-0.5">{k.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                )}

                {data.sections.length > 2 && (
                  <nav aria-label="On this page" className="rounded-2xl bg-white border border-slate-200/90 p-5">
                    <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-500 mb-3">
                      On this page
                    </h2>
                    <ul className="space-y-2 text-sm">
                      {data.sections.map((s) => (
                        <li key={s.id}>
                          <a href={`#${s.id}`} className="text-slate-700 hover:text-[#00509e] font-medium transition-colors">
                            {s.heading}
                          </a>
                        </li>
                      ))}
                      {data.faqs && data.faqs.length > 0 && (
                        <li>
                          <a href="#faq" className="text-slate-700 hover:text-[#00509e] font-medium transition-colors">
                            Frequently asked questions
                          </a>
                        </li>
                      )}
                    </ul>
                  </nav>
                )}

                <div className="rounded-2xl bg-gradient-to-br from-[#00285c] to-[#0047a0] text-white p-5 shadow-xl space-y-3">
                  <div className="flex items-center gap-2 text-cyan-300 text-xs font-extrabold uppercase tracking-widest">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Talk to the builder</span>
                  </div>
                  <p className="text-sm text-blue-100 leading-relaxed">
                    Family-owned, based in Nashville. Call or request a consultation and we&apos;ll
                    walk through your property and goals.
                  </p>
                  <a
                    href="tel:6155683154"
                    className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-[#00285c] font-extrabold text-sm hover:bg-cyan-50 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{SITE_CONFIG.phonePrimary}</span>
                  </a>
                  <Link
                    href="/quote"
                    className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 border border-white/25 text-white font-bold text-sm hover:bg-white/20 transition-colors"
                  >
                    <span>Request a Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <p className="flex items-start gap-1.5 text-[11px] text-blue-200 pt-1">
                    <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                    <span>{SITE_CONFIG.address.full}</span>
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* RELATED */}
        {data.related.length > 0 && (
          <section className="mx-[10px] mb-[10px] rounded-[5px] bg-white border border-slate-200/80 py-10 sm:py-14 px-4 sm:px-8 lg:px-12">
            <div className="max-w-[1200px] mx-auto">
              <h2 className="text-[clamp(1.3rem,2.4vw,1.85rem)] font-extrabold text-slate-900 mb-6">
                Related services &amp; resources
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.related.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className="group p-5 rounded-xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#00509e]/40 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-extrabold text-slate-900 group-hover:text-[#00509e] text-[15px]">
                        {r.label}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#00509e] group-hover:translate-x-0.5 transition-all shrink-0" />
                    </div>
                    <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">{r.blurb}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FINAL CTA */}
        <section className="mx-[10px] mb-[10px] rounded-[5px] bg-gradient-to-r from-[#00285c] via-[#0047a0] to-[#00285c] text-white py-10 sm:py-12 px-4 sm:px-8 lg:px-12 shadow-xl">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left space-y-2">
              <h2 className="text-xl sm:text-2xl font-extrabold">{data.cta.heading}</h2>
              <p className="text-sm text-blue-100 max-w-2xl">{data.cta.body}</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <Link
                href={data.cta.primaryHref}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#00285c] hover:bg-cyan-50 font-extrabold text-xs sm:text-sm shadow-lg transition-all"
              >
                <span>{data.cta.primaryLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#001838]/70 hover:bg-[#001838] text-white border border-white/25 font-bold text-xs sm:text-sm transition-all"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
          <p className="sr-only">{lastCrumb?.name}</p>
        </section>
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
}


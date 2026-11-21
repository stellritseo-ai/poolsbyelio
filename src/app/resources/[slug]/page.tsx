import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ContentPage, { buildContentMetadata } from "@/components/ContentPage";
import { guidePages, getGuideBySlug } from "@/content";

export function generateStaticParams() {
  return guidePages.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = getGuideBySlug(slug);
  if (!data) return {};
  return buildContentMetadata(data);
}

export default async function GuideDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getGuideBySlug(slug);
  if (!data) notFound();
  return <ContentPage data={data} />;
}


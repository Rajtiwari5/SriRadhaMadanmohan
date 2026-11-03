import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPackage, tourPackages } from "@/lib/data";
import { PackageDetailView } from "@/components/views/PackageDetailView";

export const dynamicParams = false;

export function generateStaticParams() {
  return tourPackages.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const p = getPackage(id);
  if (!p) return {};
  return {
    title: `${p.nameEn} · ${p.datesEn}`,
    description: p.descEn.slice(0, 160),
    openGraph: { images: [p.brochure ?? p.image] },
  };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = getPackage(id);
  if (!p) notFound();
  return <PackageDetailView id={p.id} />;
}

import type { MetadataRoute } from "next";
import { tourPackages } from "@/lib/data";
const base = "https://www.srimadanmohantirthyatra.in";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...["", "/packages", "/about", "/gallery", "/videos", "/contact"].map((p) => ({ url: base + p, changeFrequency: "weekly" as const })),
    ...tourPackages.map((p) => ({ url: `${base}/packages/${p.id}`, changeFrequency: "weekly" as const })),
  ];
}

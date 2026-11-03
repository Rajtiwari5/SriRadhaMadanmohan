"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLang } from "../LanguageProvider";
import { galleryExtra, galleryImages } from "@/lib/data";

const all = [...galleryExtra, ...galleryImages];

export function GalleryView() {
  const { t } = useLang();
  const cats = useMemo(() => Array.from(new Map(all.map((g) => [g.categoryEn, g.categoryHi])).entries()), []);
  const [cat, setCat] = useState<string | null>(null);
  const [open, setOpen] = useState<number | null>(null);
  const list = cat ? all.filter((g) => g.categoryEn === cat) : all;

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i === null ? i : (i + 1) % list.length));
      if (e.key === "ArrowLeft") setOpen((i) => (i === null ? i : (i - 1 + list.length) % list.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, list.length]);

  return (
    <>
      <section className="bg-indigo-night text-white">
        <div className="container-x py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl" style={{ color: "#fff" }}>{t("Gallery", "गैलरी")}</h1>
          <p className="mt-3 max-w-2xl text-lg text-white/75">{t("Tirths, temples and moments from our yatras.", "हमारी यात्राओं के तीर्थ, मंदिर और क्षण।")}</p>
        </div>
      </section>
      <div className="container-x py-10 md:py-14">
        <div className="flex flex-wrap gap-2" role="group" aria-label={t("Filter photos", "फ़ोटो छांटें")}>
          <button type="button" aria-pressed={cat === null} onClick={() => setCat(null)} className={`rounded-full px-4 py-2 font-semibold ${cat === null ? "bg-indigo-night text-white" : "bg-sandstone text-indigo-night hover:bg-sandstone-deep"}`}>{t("All", "सभी")}</button>
          {cats.map(([en, hi]) => (
            <button key={en} type="button" aria-pressed={cat === en} onClick={() => setCat(en)} className={`rounded-full px-4 py-2 font-semibold ${cat === en ? "bg-indigo-night text-white" : "bg-sandstone text-indigo-night hover:bg-sandstone-deep"}`}>{t(en, hi)}</button>
          ))}
        </div>
        <ul className="mt-8 columns-2 gap-3 md:columns-3 lg:columns-4">
          {list.map((g, i) => (
            <li key={g.id} className="mb-3 break-inside-avoid">
              <button type="button" onClick={() => setOpen(i)} className="group block w-full text-left">
                <span className="relative block overflow-hidden rounded-xl bg-sandstone">
                  <Image src={g.src} alt={t(g.captionEn, g.captionHi)} width={600} height={i % 3 === 0 ? 760 : 450} sizes="(min-width:1024px) 25vw, 50vw" className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </span>
                <span className="mt-1.5 block text-sm text-ink-soft">{t(g.captionEn, g.captionHi)}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      {open !== null && list[open] && (
        <div role="dialog" aria-modal="true" aria-label={t(list[open].captionEn, list[open].captionHi)} className="fixed inset-0 z-50 flex items-center justify-center bg-indigo-deep/95 p-4" onClick={() => setOpen(null)}>
          <button type="button" autoFocus onClick={() => setOpen(null)} className="absolute top-4 right-4 rounded-full p-2 text-white hover:bg-white/10" aria-label={t("Close", "बंद करें")}><X className="h-7 w-7" /></button>
          <button type="button" onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + list.length) % list.length); }} className="absolute left-2 rounded-full p-3 text-white hover:bg-white/10" aria-label={t("Previous", "पिछला")}><ChevronLeft className="h-8 w-8" /></button>
          <figure className="max-w-4xl" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={list[open].src} alt={t(list[open].captionEn, list[open].captionHi)} className="max-h-[78vh] w-auto rounded-xl" />
            <figcaption className="mt-3 text-center text-white/80">{t(list[open].captionEn, list[open].captionHi)}</figcaption>
          </figure>
          <button type="button" onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % list.length); }} className="absolute right-2 rounded-full p-3 text-white hover:bg-white/10" aria-label={t("Next", "अगला")}><ChevronRight className="h-8 w-8" /></button>
        </div>
      )}
    </>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { CalendarDays, Clock } from "lucide-react";
import { useLang } from "../LanguageProvider";
import { tourPackages } from "@/lib/data";
import { headlinePrice, isUpcoming, sortByDate } from "@/lib/dates";

type Filter = "all" | "upcoming" | "india" | "international";

export function PackagesView() {
  const { t } = useLang();
  const [filter, setFilter] = useState<Filter>("upcoming");
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => setNow(new Date()), []);

  const filters: { id: Filter; label: string }[] = [
    { id: "upcoming", label: t("Upcoming", "आगामी") },
    { id: "all", label: t("All yatras", "सभी यात्राएं") },
    { id: "india", label: t("In India", "भारत में") },
    { id: "international", label: t("Abroad", "विदेश") },
  ];

  const list = useMemo(() => {
    const sorted = sortByDate(tourPackages);
    const up = (p: (typeof sorted)[number]) => (now ? isUpcoming(p, now) : true);
    const filtered = sorted.filter((p) => {
      if (filter === "upcoming") return up(p);
      if (filter === "india") return (p.region ?? "india") === "india";
      if (filter === "international") return p.region === "international";
      return true;
    });
    return [...filtered.filter(up), ...filtered.filter((p) => !up(p))];
  }, [filter, now]);

  return (
    <>
      <section className="bg-indigo-night text-white">
        <div className="container-x py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl" style={{ color: "#fff" }}>{t("Yatras 2026–27", "यात्राएं 2026–27")}</h1>
          <p className="mt-3 max-w-2xl text-lg text-white/75">
            {t(
              "Every yatra departs from Jaipur with Dr. J. P. Agrawal. Fares are per person; seats are confirmed when the booking advance is received.",
              "हर यात्रा डॉ. जे. पी. अग्रवाल के साथ जयपुर से। किराया प्रति व्यक्ति है; अग्रिम राशि मिलने पर सीट पक्की होती है।"
            )}
          </p>
        </div>
      </section>

      <div className="container-x py-10 md:py-14">
        <div role="tablist" aria-label={t("Filter yatras", "यात्राएं छांटें")} className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={`rounded-full px-4 py-2 font-semibold transition-colors ${
                filter === f.id ? "bg-indigo-night text-white" : "bg-sandstone text-indigo-night hover:bg-sandstone-deep"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {list.length === 0 ? (
          <p className="mt-10 text-ink-soft">
            {t("No yatras in this list right now. Call us to ask about the next batch.", "इस सूची में अभी कोई यात्रा नहीं। अगले बैच के लिए कॉल करें।")}
          </p>
        ) : (
          <ul className="mt-8 divide-y divide-indigo-night/10 border-y border-indigo-night/10">
            {list.map((p) => {
              const done = now ? !isUpcoming(p, now) : false;
              return (
                <li key={p.id}>
                  <Link href={`/packages/${p.id}`} className="group grid gap-5 py-6 sm:grid-cols-[14rem_1fr] md:grid-cols-[16rem_1fr_auto] md:items-center">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-sandstone">
                      <Image src={p.image} alt="" fill sizes="(min-width:768px) 16rem, 100vw" className={`object-cover transition-transform duration-300 group-hover:scale-105 ${done ? "grayscale-[60%]" : ""}`} />
                      {p.tagEn && !done && (
                        <span className="absolute top-2 left-2 rounded-full bg-kumkum px-2.5 py-0.5 text-xs font-semibold text-white">{t(p.tagEn, p.tagHi ?? p.tagEn)}</span>
                      )}
                    </div>
                    <div className="min-w-0">
                      <h2 className="text-2xl group-hover:text-kumkum md:text-3xl">{t(p.nameEn, p.nameHi)}</h2>
                      <p className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-ink-soft">
                        <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-4 w-4" aria-hidden />{t(p.datesEn, p.datesHi)}</span>
                        <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" aria-hidden />{t(p.duration, p.durationHi)}</span>
                      </p>
                      <p className="mt-2 line-clamp-2 max-w-2xl text-ink-soft">{t(p.descEn, p.descHi)}</p>
                      {done && <p className="mt-2 font-semibold text-kumkum">{t("This batch has departed — ask us about the next one.", "यह बैच रवाना हो चुका — अगले बैच के लिए पूछें।")}</p>}
                    </div>
                    <div className="md:text-right">
                      <p className="font-display text-3xl text-indigo-night">{headlinePrice(p.price)}</p>
                      <p className="text-sm text-ink-soft">
                        {t("per person", "प्रति व्यक्ति")}
                        {p.bookingAmount && <> · {t(`advance ${p.bookingAmount}`, `अग्रिम ${p.bookingAmount}`)}</>}
                      </p>
                      <span className="mt-3 inline-block font-semibold text-kumkum underline-offset-4 group-hover:underline">{t("See details", "विवरण देखें")}</span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}

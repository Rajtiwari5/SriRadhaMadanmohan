"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { useLang } from "./LanguageProvider";
import type { TourPackage } from "@/lib/data";
import { daysUntil, headlinePrice, isUpcoming, sortByDate } from "@/lib/dates";

function splitDate(p: TourPackage, lang: "en" | "hi") {
  if (!p.startDate) return { day: "—", month: lang === "hi" ? "शीघ्र" : "TBA", year: "" };
  const d = new Date(p.startDate + "T00:00:00+05:30");
  const month = d.toLocaleString(lang === "hi" ? "hi-IN" : "en-IN", { month: "short", timeZone: "Asia/Kolkata" });
  return { day: String(d.getDate()).padStart(2, "0"), month, year: String(d.getFullYear()) };
}

export function DepartureBoard({
  packages,
  showPast = false,
  title,
}: {
  packages: TourPackage[];
  showPast?: boolean;
  title?: string;
}) {
  const { t, lang } = useLang();
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => setNow(new Date()), []);

  const list = sortByDate(packages).filter((p) => showPast || !now || isUpcoming(p, now));
  const upcoming = now ? list.filter((p) => isUpcoming(p, now)) : list;
  const past = now && showPast ? list.filter((p) => !isUpcoming(p, now)) : [];
  const rows = [...upcoming, ...past];

  return (
    <section className="board overflow-hidden" aria-label={title ?? t("Upcoming departures", "आगामी प्रस्थान")}>
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4 md:px-7">
        <h2 className="font-display text-2xl text-marigold md:text-3xl" style={{ color: "var(--color-marigold)" }}>
          {title ?? t("Departures from Jaipur", "जयपुर से प्रस्थान")}
        </h2>
        <span className="flex items-center gap-2 text-sm text-white/70">
          <span className="h-2 w-2 animate-pulse rounded-full bg-leaf" style={{ background: "#3ecf7e" }} aria-hidden />
          {t("Booking open", "बुकिंग जारी")}
        </span>
      </div>

      <div
        className="hidden grid-cols-[7rem_1fr_10rem_11rem_2rem] gap-4 px-7 pt-4 pb-2 text-sm text-white/50 md:grid"
        aria-hidden
      >
        <span>{t("Departs", "प्रस्थान")}</span>
        <span>{t("Yatra", "यात्रा")}</span>
        <span>{t("Duration", "अवधि")}</span>
        <span>{t("Fare per person", "प्रति व्यक्ति")}</span>
        <span />
      </div>

      <ul>
        {rows.map((p, i) => {
          const d = splitDate(p, lang);
          const done = now ? !isUpcoming(p, now) : false;
          const left = now ? daysUntil(p, now) : null;
          return (
            <li key={p.id} className="board-row border-t border-white/10 first:border-t-0 md:first:border-t" style={{ animationDelay: `${i * 70}ms` }}>
              <Link
                href={`/packages/${p.id}`}
                className={`group grid grid-cols-[4.5rem_1fr_auto] items-center gap-x-4 gap-y-1 px-5 py-4 transition-colors hover:bg-white/5 md:grid-cols-[7rem_1fr_10rem_11rem_2rem] md:px-7 ${
                  done ? "opacity-55" : ""
                }`}
              >
                <span className="board-cell row-span-2 flex flex-col items-start md:row-span-1">
                  <span className="flap font-display text-3xl leading-none text-white">{d.day}</span>
                  <span className="mt-1 text-sm text-white/70">
                    {d.month} {d.year}
                  </span>
                </span>

                <span className="min-w-0">
                  <span className="block font-semibold text-white group-hover:text-marigold-light">
                    {t(p.nameEn, p.nameHi)}
                  </span>
                  <span className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/60">
                    <span>{t(p.datesEn, p.datesHi)}</span>
                    {p.tagEn && !done && (
                      <span className="rounded-full bg-kumkum px-2 py-0.5 text-xs font-semibold text-white">{t(p.tagEn, p.tagHi ?? p.tagEn)}</span>
                    )}
                    {done && <span className="text-white/70">{t("Completed · next batch on request", "संपन्न · अगला बैच पूछें")}</span>}
                    {!done && left !== null && left <= 90 && (
                      <span className="text-marigold-light">
                        {t(`Leaves in ${left} days`, `${left} दिन शेष`)}
                      </span>
                    )}
                  </span>
                </span>

                <span className="board-cell hidden text-white/80 md:block">{t(p.duration, p.durationHi)}</span>

                <span className="board-cell col-start-2 text-sm text-white/80 md:col-start-auto md:text-base">
                  <span className="font-semibold text-white">{headlinePrice(p.price)}</span>
                  <span className="text-white/60 md:block md:text-sm">
                    <span className="md:hidden"> · {t(p.duration, p.durationHi)}</span>
                    {p.bookingAmount && (
                      <span className="hidden md:inline">{t(`Advance ${p.bookingAmount}`, `अग्रिम ${p.bookingAmount}`)}</span>
                    )}
                  </span>
                </span>

                <ChevronRight className="col-start-3 row-span-2 row-start-1 h-5 w-5 text-white/40 group-hover:text-marigold md:col-start-auto md:row-span-1 md:row-start-auto" aria-hidden />
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

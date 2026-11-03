"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CalendarDays, Check, Clock, Download, MessageCircle, Phone, Share2, X } from "lucide-react";
import { useLang } from "../LanguageProvider";
import { CONTACT, getPackage, whatsappLink } from "@/lib/data";
import { isUpcoming } from "@/lib/dates";

export function PackageDetailView({ id }: { id: string }) {
  const { t, lang } = useLang();
  const p = getPackage(id)!;
  const [done, setDone] = useState(false);
  const [copied, setCopied] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  useEffect(() => setDone(!!p.startDate && !isUpcoming(p, new Date())), [p]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const bookMsg = t(
    `Namaste Dr. Agrawal ji, I want to book seats for ${p.nameEn} (${p.datesEn}). Number of yatris: `,
    `नमस्ते डॉ. अग्रवाल जी, मुझे ${p.nameHi} (${p.datesHi}) के लिए सीट बुक करनी है। यात्रियों की संख्या: `
  );

  const share = async () => {
    const url = window.location.href;
    const title = t(p.nameEn, p.nameHi);
    try {
      if (navigator.share) await navigator.share({ title, url });
      else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {}
  };

  const sections = [
    { id: "plan", label: t("Day-by-day", "दिनवार") },
    p.hotels && { id: "stay", label: t("Hotels", "होटल") },
    { id: "included", label: t("Included", "शामिल") },
    (p.paymentPolicy || p.cancellationPolicy) && { id: "policies", label: t("Payment & cancellation", "भुगतान व रद्दीकरण") },
    p.gallery && { id: "photos", label: t("Photos", "फ़ोटो") },
  ].filter(Boolean) as { id: string; label: string }[];

  const BookingCard = () => (
    <div className="rounded-2xl border border-indigo-night/10 bg-white p-6 shadow-[0_12px_40px_-20px_rgb(27_33_85/0.45)]">
      <p className="text-sm text-ink-soft">{t("Fare per person", "किराया प्रति व्यक्ति")}</p>
      <p className="font-display text-4xl text-indigo-night">{p.price.split("|")[0].trim()}</p>
      {p.price.includes("|") && <p className="text-sm text-ink-soft">{p.price.split("|").slice(1).join(" · ")}</p>}
      <dl className="mt-5 space-y-3 border-t border-indigo-night/10 pt-5">
        <div className="flex justify-between gap-4">
          <dt className="text-ink-soft">{t("Dates", "तिथि")}</dt>
          <dd className="text-right font-semibold">{t(p.datesEn, p.datesHi)}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-ink-soft">{t("Duration", "अवधि")}</dt>
          <dd className="text-right font-semibold">{t(p.duration, p.durationHi)}</dd>
        </div>
        {p.bookingAmount && (
          <div className="flex justify-between gap-4">
            <dt className="text-ink-soft">{t("Advance to book", "बुकिंग अग्रिम")}</dt>
            <dd className="text-right font-semibold">{p.bookingAmount}</dd>
          </div>
        )}
      </dl>
      {done && (
        <p className="mt-5 rounded-lg bg-sandstone p-3 text-sm text-indigo-night">
          {t("This batch has departed. Message us to join the next one.", "यह बैच रवाना हो चुका है। अगले बैच के लिए संदेश भेजें।")}
        </p>
      )}
      <div className="mt-6 grid gap-2">
        <a href={whatsappLink(bookMsg)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp w-full">
          <MessageCircle className="h-5 w-5" aria-hidden />
          {done ? t("Ask about next batch", "अगले बैच के बारे में पूछें") : t("Book on WhatsApp", "WhatsApp पर बुक करें")}
        </a>
        <a href={`tel:+${CONTACT.phoneRaw}`} className="btn btn-ghost w-full text-indigo-night">
          <Phone className="h-4 w-4" aria-hidden />
          {CONTACT.phone}
        </a>
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
        {p.brochure && (
          <a href={p.brochure} download className="inline-flex items-center gap-1.5 font-semibold text-kumkum hover:underline">
            <Download className="h-4 w-4" aria-hidden />
            {t("Download poster", "पोस्टर डाउनलोड")}
          </a>
        )}
        <button type="button" onClick={share} className="inline-flex items-center gap-1.5 font-semibold text-kumkum hover:underline">
          <Share2 className="h-4 w-4" aria-hidden />
          {copied ? t("Link copied", "लिंक कॉपी हुआ") : t("Share with family", "परिवार को भेजें")}
        </button>
      </div>
    </div>
  );

  return (
    <>
      <section className="relative isolate overflow-hidden bg-indigo-night text-white">
        <Image src={p.image} alt="" fill priority sizes="100vw" className="-z-10 object-cover opacity-45" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-indigo-night via-indigo-night/70 to-indigo-night/20" aria-hidden />
        <div className="container-x pt-24 pb-10 md:pt-36 md:pb-14">
          <nav aria-label={t("Breadcrumb", "पथ")} className="text-sm text-white/70">
            <Link href="/packages" className="hover:text-white">{t("Yatras", "यात्राएं")}</Link>
            <span aria-hidden> / </span>
            <span>{t(p.nameEn, p.nameHi)}</span>
          </nav>
          {p.tagEn && <p className="mt-4 inline-block rounded-full bg-kumkum px-3 py-1 text-sm font-semibold">{t(p.tagEn, p.tagHi ?? p.tagEn)}</p>}
          <h1 className="mt-3 max-w-3xl text-4xl md:text-6xl" style={{ color: "#fff" }}>{t(p.nameEn, p.nameHi)}</h1>
          <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-lg text-white/85">
            <span className="inline-flex items-center gap-2"><CalendarDays className="h-5 w-5 text-marigold" aria-hidden />{t(p.datesEn, p.datesHi)}</span>
            <span className="inline-flex items-center gap-2"><Clock className="h-5 w-5 text-marigold" aria-hidden />{t(p.duration, p.durationHi)}</span>
          </p>
        </div>
      </section>

      {sections.length > 2 && (
        <nav aria-label={t("On this page", "इस पृष्ठ पर")} className="sticky top-16 z-20 border-b border-indigo-night/10 bg-white/95 backdrop-blur md:top-20">
          <ul className="container-x flex gap-1 overflow-x-auto py-2 [scrollbar-width:none]">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="block rounded-full px-4 py-2 font-medium whitespace-nowrap text-ink-soft hover:bg-sandstone hover:text-indigo-night">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <div className="container-x grid gap-10 py-10 md:py-14 lg:grid-cols-[1fr_22rem] lg:gap-14">
        <aside className="lg:order-2">
          <div className="lg:sticky lg:top-40">
            <BookingCard />
          </div>
        </aside>

        <article className="min-w-0 lg:order-1">
          <p className="max-w-[68ch] text-lg leading-relaxed text-ink">{t(p.descEn, p.descHi)}</p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {p.highlights.map((h) => (
              <li key={h.en} className="flex gap-3 rounded-xl bg-sandstone/60 p-4">
                <span className="tilak mt-1 shrink-0" aria-hidden />
                <span>{lang === "hi" ? h.hi : h.en}</span>
              </li>
            ))}
          </ul>

          <section id="plan" className="scroll-mt-36 pt-14">
            <h2 className="text-3xl md:text-4xl">{t("Day-by-day plan", "दिनवार कार्यक्रम")}</h2>
            <ol className="relative mt-8 border-l-2 border-sandstone-deep pl-8">
              {p.itinerary.map((d, i) => (
                <li key={i} className="relative pb-10 last:pb-0">
                  <span className="absolute top-0 -left-[3.05rem] flex h-9 w-9 items-center justify-center rounded-full bg-indigo-night font-display text-lg text-white ring-4 ring-white" aria-hidden>
                    {i + 1}
                  </span>
                  <p className="text-sm font-semibold text-kumkum">{t(d.dayEn, d.dayHi)}</p>
                  <h3 className="mt-1 text-2xl">{t(d.titleEn, d.titleHi)}</h3>
                  <p className="mt-2 max-w-[68ch] text-ink-soft">{t(d.descEn, d.descHi)}</p>
                </li>
              ))}
            </ol>
          </section>

          {p.hotels && (
            <section id="stay" className="scroll-mt-36 pt-14">
              <h2 className="text-3xl md:text-4xl">{t("Where you stay", "ठहराव")}</h2>
              <div className="mt-6 overflow-hidden rounded-xl border border-indigo-night/10">
                <table className="w-full text-left">
                  <thead className="bg-indigo-night text-white">
                    <tr>
                      <th scope="col" className="px-4 py-3 font-semibold">{t("Night", "रात")}</th>
                      <th scope="col" className="px-4 py-3 font-semibold">{t("City", "शहर")}</th>
                      <th scope="col" className="px-4 py-3 font-semibold">{t("Hotel (4-star)", "होटल (4 स्टार)")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {p.hotels.map((h) => (
                      <tr key={h.dayEn} className="border-t border-indigo-night/10 even:bg-sandstone/40">
                        <td className="px-4 py-3">{t(h.dayEn, h.dayHi)}</td>
                        <td className="px-4 py-3">{t(h.cityEn, h.cityHi)}</td>
                        <td className="px-4 py-3 font-semibold">{h.hotel}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          <section id="included" className="scroll-mt-36 pt-14">
            <h2 className="text-3xl md:text-4xl">{t("What the fare covers", "किराये में क्या शामिल है")}</h2>
            <div className="mt-6 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl text-leaf" style={{ color: "var(--color-leaf)" }}>{t("Included", "शामिल")}</h3>
                <ul className="mt-3 space-y-3">
                  {p.includes.map((x) => (
                    <li key={x.en} className="flex gap-3">
                      <Check className="mt-1 h-5 w-5 shrink-0 text-leaf" aria-hidden />
                      <span>{lang === "hi" ? x.hi : x.en}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl text-kumkum" style={{ color: "var(--color-kumkum)" }}>{t("Not included", "शामिल नहीं")}</h3>
                <ul className="mt-3 space-y-3">
                  {p.excludes.map((x) => (
                    <li key={x.en} className="flex gap-3">
                      <X className="mt-1 h-5 w-5 shrink-0 text-kumkum" aria-hidden />
                      <span>{lang === "hi" ? x.hi : x.en}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {(p.paymentPolicy || p.cancellationPolicy || p.notes) && (
            <section id="policies" className="scroll-mt-36 pt-14">
              <h2 className="text-3xl md:text-4xl">{t("Payment & cancellation", "भुगतान व रद्दीकरण")}</h2>
              <div className="mt-6 grid gap-8 md:grid-cols-2">
                {p.paymentPolicy && (
                  <div>
                    <h3 className="text-xl">{t("Payment", "भुगतान")}</h3>
                    <ol className="mt-3 list-decimal space-y-2 pl-5 text-ink-soft">
                      {p.paymentPolicy.map((x) => <li key={x.en}>{lang === "hi" ? x.hi : x.en}</li>)}
                    </ol>
                  </div>
                )}
                {p.cancellationPolicy && (
                  <div>
                    <h3 className="text-xl">{t("Cancellation", "रद्दीकरण")}</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-soft">
                      {p.cancellationPolicy.map((x) => <li key={x.en}>{lang === "hi" ? x.hi : x.en}</li>)}
                    </ul>
                  </div>
                )}
              </div>
              {p.notes && (
                <div className="mt-8 rounded-xl border-l-4 border-marigold bg-sandstone/60 p-5">
                  <h3 className="text-xl">{t("Good to know", "ध्यान दें")}</h3>
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-ink-soft">
                    {p.notes.map((x) => <li key={x.en}>{lang === "hi" ? x.hi : x.en}</li>)}
                  </ul>
                </div>
              )}
            </section>
          )}

          {p.gallery && (
            <section id="photos" className="scroll-mt-36 pt-14">
              <h2 className="text-3xl md:text-4xl">{t("Places you will visit", "दर्शनीय स्थल")}</h2>
              <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
                {p.gallery.map((g, i) => (
                  <li key={g.src}>
                    <button type="button" onClick={() => setLightbox(i)} className="group block w-full text-left">
                      <span className="relative block aspect-[4/3] overflow-hidden rounded-xl bg-sandstone">
                        <Image src={g.src} alt={t(g.en, g.hi)} fill sizes="(min-width:768px) 20vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" />
                      </span>
                      <span className="mt-1.5 block text-sm text-ink-soft">{t(g.en, g.hi)}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>
      </div>

      {lightbox !== null && p.gallery && (
        <div role="dialog" aria-modal="true" aria-label={t(p.gallery[lightbox].en, p.gallery[lightbox].hi)} className="fixed inset-0 z-50 flex items-center justify-center bg-indigo-deep/95 p-4" onClick={() => setLightbox(null)}>
          <button type="button" onClick={() => setLightbox(null)} className="absolute top-4 right-4 rounded-full p-2 text-white hover:bg-white/10" aria-label={t("Close", "बंद करें")} autoFocus>
            <X className="h-7 w-7" />
          </button>
          <figure className="max-w-3xl" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.gallery[lightbox].src} alt={t(p.gallery[lightbox].en, p.gallery[lightbox].hi)} className="max-h-[75vh] w-auto rounded-xl" />
            <figcaption className="mt-3 text-center text-white/80">{t(p.gallery[lightbox].en, p.gallery[lightbox].hi)}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}

"use client";

import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useLang } from "../LanguageProvider";
import { CONTACT, faqs, tourPackages, whatsappLink } from "@/lib/data";
import { sortByDate } from "@/lib/dates";

export function ContactView() {
  const { t, lang } = useLang();
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim();
    const phone = String(f.get("phone") || "").trim();
    if (!name || phone.replace(/\D/g, "").length < 10) {
      setError(t("Enter your name and a 10-digit mobile number so we can call you back.", "कृपया नाम और 10 अंकों का मोबाइल नंबर लिखें ताकि हम आपको कॉल कर सकें।"));
      return;
    }
    setError(null);
    const yatra = String(f.get("yatra") || "");
    const count = String(f.get("count") || "");
    const note = String(f.get("message") || "").trim();
    const lines = [
      t("Namaste Dr. Agrawal ji,", "नमस्ते डॉ. अग्रवाल जी,"),
      `${t("Name", "नाम")}: ${name}`,
      `${t("Mobile", "मोबाइल")}: ${phone}`,
      yatra && `${t("Yatra", "यात्रा")}: ${yatra}`,
      count && `${t("Yatris", "यात्री")}: ${count}`,
      note && `${t("Message", "संदेश")}: ${note}`,
    ].filter(Boolean);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener");
  };

  const field = "mt-1.5 w-full rounded-xl border border-indigo-night/20 bg-white px-4 py-3 text-base focus:border-indigo-night focus:outline-none focus:ring-2 focus:ring-marigold";

  return (
    <>
      <section className="bg-indigo-night text-white">
        <div className="container-x py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl" style={{ color: "#fff" }}>{t("Contact us", "संपर्क करें")}</h1>
          <p className="mt-3 max-w-2xl text-lg text-white/75">{t("Ask about dates, seats or anything for your elders — we are happy to help.", "तिथि, सीट या बुज़ुर्गों की किसी भी आवश्यकता के बारे में पूछें — हमें सहायता करके प्रसन्नता होगी।")}</p>
        </div>
      </section>

      <div className="container-x grid gap-12 py-12 md:py-16 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sandstone text-indigo-night"><Phone className="h-5 w-5" aria-hidden /></span>
              <div>
                <p className="font-display text-xl text-indigo-night">{t(CONTACT.organiser, CONTACT.organiserHi)}</p>
                <p><a href={`tel:+${CONTACT.phoneRaw}`} className="text-lg font-semibold hover:text-kumkum">{CONTACT.phone}</a> · <a href="tel:+917414895189" className="hover:text-kumkum">{CONTACT.altPhone}</a></p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sandstone text-leaf"><MessageCircle className="h-5 w-5" aria-hidden /></span>
              <div>
                <p className="font-display text-xl text-indigo-night">WhatsApp</p>
                <a href={whatsappLink(t("Namaste!", "नमस्ते!"))} target="_blank" rel="noopener noreferrer" className="hover:text-kumkum">{t("Message us any time", "कभी भी संदेश भेजें")}</a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sandstone text-indigo-night"><Mail className="h-5 w-5" aria-hidden /></span>
              <div>
                <p className="font-display text-xl text-indigo-night">{t("Email", "ईमेल")}</p>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-kumkum">{CONTACT.email}</a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sandstone text-indigo-night"><MapPin className="h-5 w-5" aria-hidden /></span>
              <div>
                <p className="font-display text-xl text-indigo-night">{t("Office", "कार्यालय")}</p>
                <p>{t(CONTACT.addressEn, CONTACT.addressHi)}</p>
              </div>
            </li>
          </ul>
          <div className="mt-8 aspect-[4/3] overflow-hidden rounded-2xl border border-indigo-night/10">
            <iframe src={CONTACT.mapEmbed} title={t("Office location on map", "मानचित्र पर कार्यालय")} loading="lazy" className="h-full w-full" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>

        <form onSubmit={onSubmit} noValidate className="rounded-2xl bg-sandstone p-6 md:p-8" aria-describedby="form-help">
          <h2 className="text-3xl">{t("Send an enquiry", "पूछताछ भेजें")}</h2>
          <p id="form-help" className="mt-2 text-ink-soft">{t("This opens WhatsApp with your details filled in — just press send.", "इससे आपकी जानकारी के साथ WhatsApp खुलेगा — बस भेजें दबाएं।")}</p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <label className="block font-semibold">{t("Your name", "आपका नाम")}<input name="name" autoComplete="name" required className={field} /></label>
            <label className="block font-semibold">{t("Mobile number", "मोबाइल नंबर")}<input name="phone" type="tel" inputMode="tel" autoComplete="tel" required className={field} /></label>
            <label className="block font-semibold sm:col-span-2">{t("Which yatra?", "कौन सी यात्रा?")}
              <select name="yatra" className={field} defaultValue="">
                <option value="">{t("Not sure yet", "अभी तय नहीं")}</option>
                {sortByDate(tourPackages).map((p) => <option key={p.id} value={`${p.nameEn} (${p.datesEn})`}>{t(p.nameEn, p.nameHi)} — {t(p.datesEn, p.datesHi)}</option>)}
              </select>
            </label>
            <label className="block font-semibold">{t("Number of yatris", "यात्रियों की संख्या")}<input name="count" type="number" min={1} max={60} inputMode="numeric" className={field} /></label>
            <label className="block font-semibold sm:col-span-2">{t("Message (optional)", "संदेश (वैकल्पिक)")}<textarea name="message" rows={3} className={field} placeholder={t("e.g. two senior citizens, need lower berths", "जैसे दो वरिष्ठ नागरिक, नीचे की बर्थ चाहिए")} /></label>
          </div>
          {error && <p role="alert" className="mt-4 font-semibold text-kumkum">{error}</p>}
          <button type="submit" className="btn btn-whatsapp mt-6 w-full sm:w-auto">
            <MessageCircle className="h-5 w-5" aria-hidden />
            {t("Send on WhatsApp", "WhatsApp पर भेजें")}
          </button>
        </form>
      </div>

      <section className="bg-white">
        <div className="container-x pb-16 md:pb-24">
          <h2 className="text-4xl md:text-5xl">{t("Common questions", "अक्सर पूछे जाने वाले प्रश्न")}</h2>
          <div className="mt-8 max-w-3xl divide-y divide-indigo-night/10 border-y border-indigo-night/10">
            {faqs.map((f) => (
              <details key={f.qEn} className="group py-2">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-3 text-lg font-semibold text-indigo-night">
                  {lang === "hi" ? f.qHi : f.qEn}
                  <span className="text-2xl text-kumkum transition-transform group-open:rotate-45" aria-hidden>+</span>
                </summary>
                <p className="pb-4 text-ink-soft">{lang === "hi" ? f.aHi : f.aEn}</p>
              </details>
            ))}
          </div>
          <p className="mt-4 max-w-3xl text-sm text-ink-soft">{t("Each yatra page lists its own advance and cancellation terms; those apply to that yatra.", "हर यात्रा पृष्ठ पर उसकी अपनी अग्रिम व रद्दीकरण शर्तें दी हैं; वही उस यात्रा पर लागू होंगी।")}</p>
        </div>
      </section>
    </>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MessageCircle, Plane, Star, Utensils } from "lucide-react";
import { useLang } from "../LanguageProvider";
import { DepartureBoard } from "../DepartureBoard";
import { CONTACT, team, testimonials, tourPackages, whatsappLink } from "@/lib/data";
import { sriLankaRamayana2027 as sl } from "@/lib/sri-lanka";

export function HomeView() {
  const { t } = useLang();

  return (
    <>
      {/* Hero: the departure board is the first thing a pilgrim needs */}
      <section className="relative overflow-hidden bg-indigo-night text-white">
        <Image
          src="/images/south-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-night/70 via-indigo-night/90 to-indigo-night" aria-hidden />
        <div className="container-x relative grid gap-10 py-12 md:py-16 lg:gap-12">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-14">
           <div>
            <p className="flex items-center gap-3 text-marigold-light">
              <span className="tilak" aria-hidden />
              {t("Jaipur · since 2019", "जयपुर · 2019 से")}
            </p>
            <h1 className="mt-4 text-4xl text-white md:text-5xl lg:text-6xl" style={{ color: "#fff" }}>
              {t("Tirth yatra with the care of family", "परिवार जैसी देखभाल के साथ तीर्थ यात्रा")}
            </h1>
           </div>
           <div>
            <p className="max-w-xl text-lg text-white/80">
              {t(
                "Led by Dr. J. P. Agrawal. Our own cooks prepare satvik meals without onion and garlic, stays are air-conditioned, and every darshan is arranged so you can focus on prayer.",
                "डॉ. जे. पी. अग्रवाल के सान्निध्य में। हमारे अपने रसोइये बिना प्याज-लहसुन का सात्विक भोजन बनाते हैं, ठहराव एसी कमरों में और हर दर्शन की व्यवस्था पहले से — ताकि आप केवल भक्ति पर ध्यान दें।"
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappLink(t("Namaste! I want to book a seat for an upcoming yatra.", "नमस्ते! मुझे आगामी यात्रा में सीट बुक करनी है।"))}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                {t("Book a seat on WhatsApp", "WhatsApp पर सीट बुक करें")}
              </a>
              <Link href="/packages" className="btn btn-ghost text-white">
                {t("See all yatras", "सभी यात्राएं देखें")}
              </Link>
            </div>
           </div>
          </div>
          <DepartureBoard packages={tourPackages} />
        </div>
      </section>

      {/* Featured: Sri Lanka */}
      <section className="bg-sandstone">
        <div className="container-x grid gap-10 py-16 md:py-20 lg:grid-cols-2 lg:items-center">
          <ul className="grid grid-cols-3 gap-3">
            {[
              ["/images/sri-lanka/sigiriya.jpg", t("Sigiriya — Ravana's fort", "सिगिरिया — रावण का किला")],
              ["/images/sri-lanka/ram-darbar.jpg", t("Shri Ram darbar", "श्री राम दरबार")],
              ["/images/sri-lanka/munneshwaram.jpg", t("Munneshwaram", "मुन्नेश्वरम")],
              ["/images/sri-lanka/koneswaram.jpg", t("Koneswaram", "कोनेश्वरम")],
              ["/images/sri-lanka/sita-amman-murtis.jpg", t("Sita Amman temple", "सीता अम्मन मंदिर")],
              ["/images/sri-lanka/ramboda-falls.jpg", t("Ramboda falls", "रामबोडा जलप्रपात")],
            ].map(([src, alt]) => (
              <li key={src} className="relative aspect-[4/5] overflow-hidden rounded-xl">
                <Image src={src} alt={alt} fill sizes="(min-width:1024px) 15vw, 30vw" className="object-cover" />
              </li>
            ))}
          </ul>
          <div>
            <p className="font-semibold text-kumkum">{t("New for 2027 · our first yatra abroad", "2027 में नई · हमारी पहली विदेश यात्रा")}</p>
            <h2 className="mt-2 text-4xl md:text-5xl">{t(sl.nameEn, sl.nameHi)}</h2>
            <p className="mt-4 max-w-xl text-ink-soft">
              {t(
                "Six days along the Ramayana trail — Manavari where Shri Ram installed the sand Shivalingam, Ashok Vatika in Sita Eliya, the Agni Pariksha site at Divurumpola, Koneswaram and the Panchamukha Hanuman temple in Colombo.",
                "रामायण पथ पर छह दिन — मनावरी जहां श्री राम ने बालू का शिवलिंग स्थापित किया, सीता एलिया की अशोक वाटिका, दिवुरुम्पोला का अग्नि परीक्षा स्थल, कोनेश्वरम और कोलंबो का पंचमुखी हनुमान मंदिर।"
              )}
            </p>
            <dl className="mt-6 grid max-w-xl grid-cols-2 gap-x-6 gap-y-4 border-y border-indigo-night/15 py-5">
              <div className="flex gap-3">
                <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-kumkum" aria-hidden />
                <div>
                  <dt className="text-sm text-ink-soft">{t("Dates", "तिथि")}</dt>
                  <dd className="font-semibold">{t(sl.datesEn, sl.datesHi)}</dd>
                </div>
              </div>
              <div className="flex gap-3">
                <Plane className="mt-0.5 h-5 w-5 shrink-0 text-kumkum" aria-hidden />
                <div>
                  <dt className="text-sm text-ink-soft">{t("Per person", "प्रति व्यक्ति")}</dt>
                  <dd className="font-semibold">{t(`${sl.price} with flights`, `${sl.price} हवाई टिकट सहित`)}</dd>
                </div>
              </div>
              <div className="flex gap-3">
                <Star className="mt-0.5 h-5 w-5 shrink-0 text-kumkum" aria-hidden />
                <div>
                  <dt className="text-sm text-ink-soft">{t("Stay", "ठहराव")}</dt>
                  <dd className="font-semibold">{t("4-star hotels", "4 स्टार होटल")}</dd>
                </div>
              </div>
              <div className="flex gap-3">
                <Utensils className="mt-0.5 h-5 w-5 shrink-0 text-kumkum" aria-hidden />
                <div>
                  <dt className="text-sm text-ink-soft">{t("Meals", "भोजन")}</dt>
                  <dd className="font-semibold">{t("Jain, no onion-garlic", "जैन, बिना प्याज-लहसुन")}</dd>
                </div>
              </div>
            </dl>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href={`/packages/${sl.id}`} className="btn bg-indigo-night text-white hover:bg-indigo-soft">
                {t("View day-by-day plan", "दिनवार कार्यक्रम देखें")}
              </Link>
              <a
                href={whatsappLink(t("Namaste Dr. Agrawal ji, I want to book the Sri Lanka Ramayana Yatra (20–25 Jan 2027).", "नमस्ते डॉ. अग्रवाल जी, मुझे श्रीलंका रामायण यात्रा (20–25 जनवरी 2027) बुक करनी है।"))}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                {t("Reserve on WhatsApp", "WhatsApp पर आरक्षित करें")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How we travel — prose, not a card grid */}
      <section className="container-x grid gap-12 py-16 md:py-24 lg:grid-cols-[1fr_1fr]">
        <div>
          <h2 className="text-4xl md:text-5xl">{t("How we travel", "हम कैसे यात्रा कराते हैं")}</h2>
          <p className="mt-4 max-w-md text-ink-soft">
            {t(
              "Most of our yatris are families and senior devotees. Everything is planned around them.",
              "हमारे अधिकतर यात्री परिवार और वरिष्ठ भक्त हैं। सारी व्यवस्था उन्हीं को ध्यान में रखकर।"
            )}
          </p>
        </div>
        <dl className="divide-y divide-indigo-night/10 border-y border-indigo-night/10">
          {[
            [t("Our own kitchen", "अपनी रसोई"), t("Cooks travel with the group and make fresh, home-style satvik food — no onion, no garlic.", "रसोइये साथ चलते हैं और ताज़ा, घर जैसा सात्विक भोजन बनाते हैं — बिना प्याज-लहसुन।")],
            [t("Comfortable journeys", "आरामदायक सफ़र"), t("3-AC train berths or flights, AC buses and AC rooms, with help for elders at every step.", "3-AC ट्रेन या हवाई यात्रा, एसी बस और एसी कमरे — हर कदम पर बुज़ुर्गों की सहायता।")],
            [t("Darshan with meaning", "अर्थपूर्ण दर्शन"), t("Satsang and katha on the way, so you know the story of each tirth before you stand before the deity.", "रास्ते में सत्संग और कथा — ताकि हर तीर्थ की महिमा जानकर दर्शन करें।")],
            [t("One person to call", "एक ही संपर्क"), t("Dr. J. P. Agrawal answers your questions himself, before and during the yatra.", "यात्रा से पहले और दौरान डॉ. जे. पी. अग्रवाल स्वयं आपके प्रश्नों का उत्तर देते हैं।")],
          ].map(([k, v]) => (
            <div key={k} className="grid gap-1 py-5 sm:grid-cols-[12rem_1fr] sm:gap-6">
              <dt className="font-display text-xl text-indigo-night">{k}</dt>
              <dd className="text-ink-soft">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Organiser */}
      <section className="bg-indigo-night text-white">
        <div className="container-x grid gap-10 py-16 md:py-20 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <h2 className="text-white" style={{ color: "#fff" }}>
              <span className="block font-display text-3xl leading-snug md:text-4xl">
                {t(
                  "Our mission is to make spiritual journeys meaningful, comfortable and accessible for every devotee.",
                  "हमारा मिशन है — आध्यात्मिक यात्राओं को हर भक्त के लिए अर्थपूर्ण, आरामदायक और सुलभ बनाना।"
                )}
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-white/70">
              {t(
                "Founded in 2019 by Dr. J. P. Agrawal, Sri Madanmohan Tirth Yatra has taken devotees to Char Dham, Jagannath Puri, Nepal, Dwarka–Somnath and the temples of South India.",
                "2019 में डॉ. जे. पी. अग्रवाल द्वारा स्थापित श्री मदनमोहन तीर्थ यात्रा भक्तों को चार धाम, जगन्नाथ पुरी, नेपाल, द्वारका–सोमनाथ और दक्षिण भारत के मंदिरों की यात्रा करा चुकी है।"
              )}
            </p>
          </div>
          <div className="space-y-6">
            {team.map((m) => (
              <div key={m.nameEn} className="border-l-2 border-marigold pl-5">
                <p className="font-semibold text-white">
                  {t(m.nameEn, m.nameHi)} <span className="font-normal text-white/60">· {t(m.roleEn, m.roleHi)}</span>
                </p>
                <p className="mt-1 line-clamp-3 text-white/70">{t(m.descEn, m.descHi)}</p>
              </div>
            ))}
            <Link href="/about" className="inline-block font-semibold text-marigold-light underline underline-offset-4">
              {t("Read our story", "हमारी कहानी पढ़ें")}
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-x py-16 md:py-24">
        <h2 className="text-4xl md:text-5xl">{t("From our yatris", "हमारे यात्रियों से")}</h2>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {testimonials.map((r) => (
            <figure key={r.id}>
              <p className="text-kumkum" aria-label={t(`${r.rating} out of 5`, `5 में से ${r.rating}`)}>
                {"★".repeat(r.rating)}
                <span className="text-sandstone-deep">{"★".repeat(5 - r.rating)}</span>
              </p>
              <blockquote className="mt-3 text-lg text-ink">{t(r.textEn, r.textHi)}</blockquote>
              <figcaption className="mt-4 text-ink-soft">
                <span className="font-semibold text-indigo-night">{t(r.nameEn, r.nameHi)}</span>, {t(r.locationEn, r.locationHi)}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Closing call */}
      <section className="bg-sandstone">
        <div className="container-x flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl">{t("Have a question before you book?", "बुकिंग से पहले कोई प्रश्न?")}</h2>
            <p className="mt-2 text-ink-soft">
              {t("Call or WhatsApp Dr. J. P. Agrawal — usually answered the same day.", "डॉ. जे. पी. अग्रवाल को कॉल या WhatsApp करें — प्रायः उसी दिन उत्तर।")}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={`tel:+${CONTACT.phoneRaw}`} className="btn bg-indigo-night text-white hover:bg-indigo-soft">
              {t("Call", "कॉल करें")} {CONTACT.phone}
            </a>
            <Link href="/contact" className="btn btn-ghost text-indigo-night">
              {t("Contact & FAQ", "संपर्क व प्रश्न")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

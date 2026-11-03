"use client";

import Image from "next/image";
import { useLang } from "../LanguageProvider";
import { IMAGES, team, values } from "@/lib/data";

export function AboutView() {
  const { t } = useLang();
  return (
    <>
      <section className="bg-indigo-night text-white">
        <div className="container-x py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl" style={{ color: "#fff" }}>{t("About us", "हमारे बारे में")}</h1>
          <p className="mt-3 max-w-2xl text-lg text-white/75">
            {t("A Jaipur yatra family, founded by Dr. J. P. Agrawal in 2019.", "जयपुर का एक यात्रा परिवार, 2019 में डॉ. जे. पी. अग्रवाल द्वारा स्थापित।")}
          </p>
        </div>
      </section>

      <section className="container-x grid gap-12 py-14 md:py-20 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        <div className="prose-yatra max-w-[68ch] text-lg text-ink">
          <p>
            {t(
              "Every journey we organise is meant to nourish the soul while giving the comfort and care of home. We take devotees to Char Dham, Jagannath Puri with Gangasagar and Baidyanath Dham, Nepal, Dwarka–Somnath and the great temples of South India — and from 2027, to the Ramayana sites of Sri Lanka.",
              "हमारी हर यात्रा आत्मा को पोषित करने के साथ घर जैसा आराम और देखभाल देने के लिए है। हम भक्तों को चार धाम, गंगासागर व बैद्यनाथ धाम सहित जगन्नाथ पुरी, नेपाल, द्वारका–सोमनाथ और दक्षिण भारत के महान मंदिरों की यात्रा कराते हैं — और 2027 से श्रीलंका के रामायण स्थलों की।"
            )}
          </p>
          <p>
            {t(
              "What makes our yatras different is the homely, spiritual atmosphere. Our own experienced cooks travel with the group and prepare fresh, pure, home-style meals. Stays and transport are arranged in advance, so travellers can focus on devotion rather than logistics.",
              "हमारी यात्राओं की विशेषता है घर जैसा, आध्यात्मिक वातावरण। हमारे अनुभवी रसोइये साथ चलते हैं और ताज़ा, शुद्ध, घर जैसा भोजन बनाते हैं। ठहराव और वाहन पहले से तय रहते हैं, ताकि यात्री व्यवस्था की चिंता छोड़ भक्ति पर ध्यान दें।"
            )}
          </p>
          <p>
            {t(
              "Our mission also goes beyond travel: through satsang, katha and conversation along the way, we share the wisdom of our scriptures so each tirth is understood, not just seen.",
              "हमारा उद्देश्य यात्रा से आगे भी है: रास्ते में सत्संग, कथा और चर्चा के माध्यम से शास्त्रों का ज्ञान बांटना — ताकि हर तीर्थ को केवल देखा नहीं, समझा भी जाए।"
            )}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl"><Image src={IMAGES.aarti} alt={t("Aarti ceremony", "आरती")} fill sizes="25vw" className="object-cover" /></div>
          <div className="relative mt-10 aspect-[3/4] overflow-hidden rounded-2xl"><Image src={IMAGES.pilgrims} alt={t("Pilgrims at a holy river", "पवित्र नदी पर यात्री")} fill sizes="25vw" className="object-cover" /></div>
        </div>
      </section>

      <section className="bg-sandstone">
        <div className="container-x py-14 md:py-20">
          <h2 className="text-4xl md:text-5xl">{t("What we stand for", "हमारे मूल्य")}</h2>
          <dl className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.titleEn}>
                <dt className="flex items-center gap-3 font-display text-2xl text-indigo-night"><span className="tilak" aria-hidden />{t(v.titleEn, v.titleHi)}</dt>
                <dd className="mt-2 text-ink-soft">{t(v.descEn, v.descHi)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="container-x py-14 md:py-20">
        <h2 className="text-4xl md:text-5xl">{t("The people who travel with you", "जो आपके साथ चलते हैं")}</h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {team.map((m) => (
            <div key={m.nameEn} className="flex gap-5">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-indigo-night font-display text-2xl text-marigold" aria-hidden>
                {t(m.nameEn, m.nameHi).replace(/^Dr\.\s*|^डॉ\.\s*/, "").charAt(0)}
              </span>
              <div>
                <h3 className="text-2xl">{t(m.nameEn, m.nameHi)}</h3>
                <p className="font-semibold text-kumkum">{t(m.roleEn, m.roleHi)}</p>
                <p className="mt-2 max-w-[60ch] text-ink-soft">{t(m.descEn, m.descHi)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { useLang } from "./LanguageProvider";
import { CONTACT, tourPackages } from "@/lib/data";
import { sortByDate } from "@/lib/dates";

export function Footer() {
  const { t, lang } = useLang();
  return (
    <footer className="bg-indigo-deep pb-24 text-white/80 md:pb-0">
      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl text-white">{t("Sri Madanmohan Tirth Yatra", "श्री मदनमोहन तीर्थ यात्रा")}</p>
          <p className="mt-3 max-w-sm">
            {t(
              "Pilgrimages from Jaipur since 2019, with our own cooks, satvik meals and the care of family.",
              "2019 से जयपुर से तीर्थ यात्राएं — अपने रसोइयों, सात्विक भोजन और परिवार जैसी देखभाल के साथ।"
            )}
          </p>
          <ul className="mt-6 space-y-3">
            <li className="flex gap-3">
              <Phone className="mt-1 h-4 w-4 shrink-0 text-marigold" aria-hidden />
              <span>
                <a className="hover:text-white" href={`tel:+${CONTACT.phoneRaw}`}>{CONTACT.phone}</a>
                {" · "}
                <a className="hover:text-white" href="tel:+917414895189">{CONTACT.altPhone}</a>
                <span className="block text-sm text-white/60">{lang === "hi" ? CONTACT.organiserHi : CONTACT.organiser}</span>
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-1 h-4 w-4 shrink-0 text-marigold" aria-hidden />
              <a className="hover:text-white" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-marigold" aria-hidden />
              <span>{t(CONTACT.addressEn, CONTACT.addressHi)}</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white">{t("Yatras", "यात्राएं")}</p>
          <ul className="mt-4 space-y-2">
            {sortByDate(tourPackages).map((p) => (
              <li key={p.id}>
                <Link href={`/packages/${p.id}`} className="hover:text-white">
                  {t(p.nameEn, p.nameHi)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white">{t("Explore", "देखें")}</p>
          <ul className="mt-4 space-y-2">
            <li><Link href="/about" className="hover:text-white">{t("About us", "हमारे बारे में")}</Link></li>
            <li><Link href="/gallery" className="hover:text-white">{t("Gallery", "गैलरी")}</Link></li>
            <li><Link href="/videos" className="hover:text-white">{t("Videos", "वीडियो")}</Link></li>
            <li><Link href="/contact" className="hover:text-white">{t("Contact & FAQ", "संपर्क व प्रश्न")}</Link></li>
          </ul>
          <p className="mt-6 font-semibold text-white">{t("Follow", "जुड़ें")}</p>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
            <li><a href={CONTACT.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</a></li>
            <li><a href={CONTACT.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a></li>
            <li><a href={CONTACT.social.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-white">YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="container-x py-5 text-sm text-white/50">
          © {new Date().getFullYear()} {t("Sri Madanmohan Tirth Yatra, Jaipur", "श्री मदनमोहन तीर्थ यात्रा, जयपुर")}
        </p>
      </div>
    </footer>
  );
}

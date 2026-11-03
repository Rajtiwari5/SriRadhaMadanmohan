"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { useLang } from "./LanguageProvider";
import { CONTACT } from "@/lib/data";

export function Header() {
  const { lang, setLang, t } = useLang();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const nav = [
    { href: "/packages", label: t("Yatras", "यात्राएं") },
    { href: "/about", label: t("About", "परिचय") },
    { href: "/gallery", label: t("Gallery", "गैलरी") },
    { href: "/videos", label: t("Videos", "वीडियो") },
    { href: "/contact", label: t("Contact", "संपर्क") },
  ];

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  const LangToggle = ({ className = "" }: { className?: string }) => (
    <div
      role="group"
      aria-label={t("Language", "भाषा")}
      className={`inline-flex rounded-full bg-indigo-night/8 p-1 text-sm ${className}`}
    >
      {(["en", "hi"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-3 py-1 font-semibold transition-colors ${
            lang === l ? "bg-indigo-night text-white" : "text-indigo-night hover:bg-indigo-night/10"
          }`}
        >
          {l === "en" ? "English" : "हिंदी"}
        </button>
      ))}
    </div>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-indigo-night/10 bg-white/95 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-4 md:h-20">
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label={t("Sri Madanmohan Tirth Yatra — home", "श्री मदनमोहन तीर्थ यात्रा — होम")}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={CONTACT.logo} alt="" className="h-12 w-auto md:h-16" />
        </Link>

        <nav aria-label={t("Main", "मुख्य")} className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={isActive(n.href) ? "page" : undefined}
              className={`rounded-full px-4 py-2 font-medium transition-colors ${
                isActive(n.href) ? "bg-sandstone text-indigo-night" : "text-ink-soft hover:text-indigo-night"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle className="hidden sm:inline-flex" />
          <a href={`tel:+${CONTACT.phoneRaw}`} className="btn btn-primary hidden md:inline-flex">
            <Phone className="h-4 w-4" aria-hidden />
            {CONTACT.phone}
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t("Close menu", "मेनू बंद करें") : t("Open menu", "मेनू खोलें")}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-indigo-night hover:bg-sandstone lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-white md:top-20 lg:hidden">
          <nav aria-label={t("Main", "मुख्य")} className="container-x flex flex-col py-4">
            <Link href="/" className="border-b border-indigo-night/10 py-4 font-display text-2xl text-indigo-night">
              {t("Home", "होम")}
            </Link>
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                aria-current={isActive(n.href) ? "page" : undefined}
                className="border-b border-indigo-night/10 py-4 font-display text-2xl text-indigo-night"
              >
                {n.label}
              </Link>
            ))}
            <LangToggle className="mt-6 self-start sm:hidden" />
            <a href={`tel:+${CONTACT.phoneRaw}`} className="btn btn-primary mt-6">
              <Phone className="h-4 w-4" aria-hidden />
              {t("Call", "कॉल करें")} {CONTACT.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

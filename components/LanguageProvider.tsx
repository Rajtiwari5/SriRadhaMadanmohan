"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

export type Lang = "en" | "hi";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (en: string, hi: string) => string };

const LanguageContext = createContext<Ctx>({ lang: "en", setLang: () => {}, t: (en) => en });

const KEY = "smty-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved === "hi" || saved === "en") setLangState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "hi" ? "hi" : "en";
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(KEY, l);
    } catch {}
  }, []);

  const t = useCallback((en: string, hi: string) => (lang === "hi" ? hi : en), [lang]);

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
}

export const useLang = () => useContext(LanguageContext);

/** Inline bilingual text for use inside server-rendered trees */
export function T({ en, hi }: { en: string; hi: string }) {
  const { t } = useLang();
  return <>{t(en, hi)}</>;
}

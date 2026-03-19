import React, { createContext, useContext, useState } from "react";

type Lang = "en" | "hi";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (en: string, hi: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: (en) => en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const t = (en: string, hi: string) => (lang === "en" ? en : hi);
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <div style={{ fontFamily: lang === "hi" ? "'Noto Sans Devanagari', sans-serif" : "'Poppins', sans-serif" }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);

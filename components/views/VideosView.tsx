"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { useLang } from "../LanguageProvider";
import { CONTACT, youtubeVideos } from "@/lib/data";

export function VideosView() {
  const { t, lang } = useLang();
  const [playing, setPlaying] = useState<string | null>(null);
  return (
    <>
      <section className="bg-indigo-night text-white">
        <div className="container-x py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl" style={{ color: "#fff" }}>{t("Videos", "वीडियो")}</h1>
          <p className="mt-3 max-w-2xl text-lg text-white/75">{t("See the tirths before you travel.", "यात्रा से पहले तीर्थों के दर्शन करें।")}</p>
        </div>
      </section>
      <div className="container-x py-10 md:py-14">
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {youtubeVideos.map((v) => (
            <li key={v.id}>
              <div className="relative aspect-video overflow-hidden rounded-xl bg-indigo-deep">
                {playing === v.id ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${v.videoId}?autoplay=1`}
                    title={lang === "hi" ? v.title.hi : v.title.en}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                ) : (
                  <button type="button" onClick={() => setPlaying(v.id)} className="group absolute inset-0" aria-label={t(`Play: ${v.title.en}`, `चलाएं: ${v.title.hi}`)}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`https://i.ytimg.com/vi/${v.videoId}/hqdefault.jpg`} alt="" loading="lazy" className="h-full w-full object-cover opacity-85 transition-opacity group-hover:opacity-100" />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-marigold text-indigo-deep shadow-lg transition-transform group-hover:scale-110">
                        <Play className="ml-1 h-7 w-7" fill="currentColor" aria-hidden />
                      </span>
                    </span>
                  </button>
                )}
              </div>
              <p className="mt-3 text-sm font-semibold text-kumkum">{lang === "hi" ? v.category.hi : v.category.en}</p>
              <h2 className="mt-0.5 text-xl">{lang === "hi" ? v.title.hi : v.title.en}</h2>
            </li>
          ))}
        </ul>
        <a href={CONTACT.social.youtube} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-12 text-indigo-night">
          {t("More on our YouTube channel", "हमारे YouTube चैनल पर और देखें")}
        </a>
      </div>
    </>
  );
}

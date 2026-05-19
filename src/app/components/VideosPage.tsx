import { useState } from "react";
import { Play } from "lucide-react";
import { useLang } from "./LanguageContext";
import { IMAGES, youtubeVideos } from "./data";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function VideosPage() {
  const { t, lang } = useLang();
  const [activeVideo, setActiveVideo] = useState(youtubeVideos[0]);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { en: "All", hi: "सभी" },
    { en: "Char Dham", hi: "चार धाम" },
    { en: "Varanasi", hi: "वाराणसी" },
    { en: "Vrindavan", hi: "वृंदावन" },
    { en: "Tirupati", hi: "तिरुपति" },
    { en: "Amarnath", hi: "अमरनाथ" },
    { en: "Dwarka", hi: "द्वारका" },
    { en: "Spiritual", hi: "आध्यात्मिक" },
  ];

  const filteredVideos = activeCategory === "All"
    ? youtubeVideos
    : youtubeVideos.filter((v) => v.category.en === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <ImageWithFallback src={IMAGES.ganges} alt="Videos" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#E65100]/90 to-[#BF360C]/80" />
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl mb-2" style={{ fontWeight: 700 }}>
            {t("Videos", "वीडियो")}
          </h1>
          <p className="text-orange-100 text-lg">
            {t("Watch Our Yatra Videos & Spiritual Content", "हमारी यात्रा वीडियो और आध्यात्मिक सामग्री देखें")}
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Featured Video */}
          <div className="mb-12">
            <h2 className="text-xl text-gray-800 mb-4" style={{ fontWeight: 700 }}>
              {t("Now Playing", "अभी चल रहा है")}
            </h2>
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden shadow-lg bg-black">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${activeVideo.videoId}?rel=0`}
                    title={lang === "en" ? activeVideo.title.en : activeVideo.title.hi}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <h3 className="text-lg text-gray-800 mt-4" style={{ fontWeight: 600 }}>
                  {lang === "en" ? activeVideo.title.en : activeVideo.title.hi}
                </h3>
                <span className="text-sm text-[#E65100]">
                  {lang === "en" ? activeVideo.category.en : activeVideo.category.hi}
                </span>
              </div>

              {/* Playlist */}
              <div className="bg-white rounded-xl shadow-md border border-orange-100 overflow-hidden">
                <div className="bg-[#E65100] text-white px-4 py-3" style={{ fontWeight: 600 }}>
                  {t("Video Playlist", "वीडियो प्लेलिस्ट")}
                </div>
                <div className="max-h-[400px] overflow-y-auto">
                  {youtubeVideos.map((video) => (
                    <button
                      key={video.id}
                      onClick={() => setActiveVideo(video)}
                      className={`w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-orange-50 transition-colors border-b border-orange-50 ${
                        activeVideo.id === video.id ? "bg-orange-50" : ""
                      }`}
                    >
                      <div className="relative w-20 h-12 shrink-0 rounded overflow-hidden bg-gray-200">
                        <img
                          src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                        {activeVideo.id === video.id && (
                          <div className="absolute inset-0 bg-[#E65100]/50 flex items-center justify-center">
                            <Play className="w-4 h-4 text-white fill-white" />
                          </div>
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm text-gray-800 truncate" style={{ fontWeight: activeVideo.id === video.id ? 600 : 400 }}>
                          {lang === "en" ? video.title.en : video.title.hi}
                        </p>
                        <span className="text-xs text-gray-500">
                          {lang === "en" ? video.category.en : video.category.hi}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.en}
                onClick={() => setActiveCategory(cat.en)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  activeCategory === cat.en
                    ? "bg-[#E65100] text-white"
                    : "bg-orange-50 text-gray-600 hover:bg-orange-100"
                }`}
                style={{ fontWeight: 500 }}
              >
                {lang === "en" ? cat.en : cat.hi}
              </button>
            ))}
          </div>

          {/* All Videos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-orange-100 cursor-pointer group hover:shadow-lg transition-shadow"
                onClick={() => {
                  setActiveVideo(video);
                  window.scrollTo({ top: 300, behavior: "smooth" });
                }}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                    alt={lang === "en" ? video.title.en : video.title.hi}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-[#E65100]/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-white fill-white ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm text-gray-800 mb-1 line-clamp-2" style={{ fontWeight: 600 }}>
                    {lang === "en" ? video.title.en : video.title.hi}
                  </h3>
                  <span className="text-xs text-[#E65100]">
                    {lang === "en" ? video.category.en : video.category.hi}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* YouTube Channel CTA */}
          <div className="mt-12 bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl mb-3" style={{ fontWeight: 700 }}>
              {t("Subscribe to Our YouTube Channel", "हमारे YouTube चैनल को सब्सक्राइब करें")}
            </h2>
            <p className="text-red-100 mb-6">
              {t(
                "Watch more spiritual videos, live darshans, aarti, and yatra vlogs on our YouTube channel.",
                "हमारे YouTube चैनल पर अधिक आध्यात्मिक वीडियो, लाइव दर्शन, आरती और यात्रा व्लॉग देखें।"
              )}
            </p>
            <a
              href="https://youtube.com/@purebhakticenterjaipur7577?si=tXJQtGdGYKbRsiri"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-3 rounded-full hover:bg-red-50 transition-colors"
              style={{ fontWeight: 600 }}
            >
              ▶️ {t("Visit YouTube Channel", "YouTube चैनल पर जाएं")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

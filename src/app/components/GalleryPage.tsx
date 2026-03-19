import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { useLang } from "./LanguageContext";
import { IMAGES, galleryImages } from "./data";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function GalleryPage() {
  const { t, lang } = useLang();
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<typeof galleryImages[0] | null>(null);

  const categories = [
    { en: "All", hi: "सभी" },
    { en: "Temples", hi: "मंदिर" },
    { en: "Ghats", hi: "घाट" },
    { en: "Ceremonies", hi: "अनुष्ठान" },
    { en: "Pilgrimage", hi: "तीर्थयात्रा" },
    { en: "Spiritual", hi: "आध्यात्मिक" },
  ];

  const filtered = activeFilter === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.categoryEn === activeFilter);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <ImageWithFallback src={IMAGES.festival} alt="Gallery" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#E65100]/90 to-[#BF360C]/80" />
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl mb-2" style={{ fontWeight: 700 }}>
            {t("Photo Gallery", "फोटो गैलरी")}
          </h1>
          <p className="text-orange-100 text-lg">
            {t("Glimpses of Our Sacred Journeys", "हमारी पवित्र यात्राओं की झलकियां")}
          </p>
        </div>
      </section>

      {/* Cloudinary Info */}
      <section className="py-4 px-4 bg-[#FFF3E0] text-center">
        <p className="text-sm text-gray-600">
          {t(
            "📸 Images managed via Cloudinary CDN for optimized delivery. Upload your tour photos to your Cloudinary account.",
            "📸 अनुकूलित वितरण के लिए Cloudinary CDN के माध्यम से छवियां प्रबंधित। अपनी यात्रा की फोटो अपने Cloudinary खाते में अपलोड करें।"
          )}
        </p>
      </section>

      {/* Filters */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.en}
                onClick={() => setActiveFilter(cat.en)}
                className={`px-5 py-2 rounded-full text-sm transition-colors ${
                  activeFilter === cat.en
                    ? "bg-[#E65100] text-white"
                    : "bg-orange-50 text-gray-600 hover:bg-orange-100"
                }`}
                style={{ fontWeight: 500 }}
              >
                {lang === "en" ? cat.en : cat.hi}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((img) => (
              <div
                key={img.id}
                className="relative group cursor-pointer rounded-xl overflow-hidden shadow-md h-64"
                onClick={() => setLightboxImage(img)}
              >
                <ImageWithFallback
                  src={img.src}
                  alt={lang === "en" ? img.captionEn : img.captionHi}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-white text-sm" style={{ fontWeight: 500 }}>
                    {lang === "en" ? img.captionEn : img.captionHi}
                  </p>
                  <span className="text-orange-200 text-xs">
                    {lang === "en" ? img.categoryEn : img.categoryHi}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-orange-300 transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl max-h-[85vh] w-full" onClick={(e) => e.stopPropagation()}>
            <ImageWithFallback
              src={lightboxImage.src}
              alt={lang === "en" ? lightboxImage.captionEn : lightboxImage.captionHi}
              className="w-full max-h-[75vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-white text-lg" style={{ fontWeight: 500 }}>
                {lang === "en" ? lightboxImage.captionEn : lightboxImage.captionHi}
              </p>
              <span className="text-orange-300 text-sm">
                {lang === "en" ? lightboxImage.categoryEn : lightboxImage.categoryHi}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

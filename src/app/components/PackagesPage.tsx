import { Link } from "react-router";
import { Clock, ChevronRight } from "lucide-react";
import { useLang } from "./LanguageContext";
import { IMAGES, tourPackages } from "./data";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function PackagesPage() {
  const { t, lang } = useLang();

  return (
    <div>
      {/* Hero */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <ImageWithFallback src={IMAGES.architecture} alt="Packages" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#E65100]/90 to-[#BF360C]/80" />
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl mb-2" style={{ fontWeight: 700 }}>
            {t("Tour Packages", "तीर्थ यात्रा पैकेज")}
          </h1>
          <p className="text-orange-100 text-lg">
            {t("Choose Your Sacred Pilgrimage", "अपनी पवित्र तीर्थयात्रा चुनें")}
          </p>
        </div>
      </section>

      {/* Package Listing */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#E65100] text-sm tracking-widest uppercase" style={{ fontWeight: 600 }}>
              {t("Our Yatra Packages", "हमारे यात्रा पैकेज")}
            </span>
            <h2 className="text-2xl md:text-3xl text-gray-800 mt-2" style={{ fontWeight: 700 }}>
              {t("Sacred Pilgrimage Tours Across India", "भारत भर में पवित्र तीर्थ यात्राएं")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-orange-100 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={pkg.image}
                    alt={lang === "en" ? pkg.nameEn : pkg.nameHi}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#E65100] text-white px-4 py-1.5 rounded-full" style={{ fontWeight: 700 }}>
                    {pkg.price}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <h3 className="text-white text-xl" style={{ fontWeight: 700 }}>
                      {lang === "en" ? pkg.nameEn : pkg.nameHi}
                    </h3>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Clock className="w-4 h-4" />
                    {lang === "en" ? pkg.duration : pkg.durationHi}
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {lang === "en" ? pkg.descEn : pkg.descHi}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm text-gray-700 mb-2" style={{ fontWeight: 600 }}>
                      {t("Highlights:", "मुख्य आकर्षण:")}
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {pkg.highlights.slice(0, 3).map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#E65100] mt-0.5">✓</span>
                          {lang === "en" ? h.en : h.hi}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to={`/packages/${pkg.id}`}
                    className="w-full inline-flex items-center justify-center gap-1 bg-[#E65100] hover:bg-[#BF360C] text-white px-5 py-2.5 rounded-full transition-colors text-sm"
                  >
                    {t("View Details", "विवरण देखें")} <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-[#E65100] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl mb-4" style={{ fontWeight: 700 }}>
            {t("Can't Find Your Desired Yatra?", "अपनी मनचाही यात्रा नहीं मिल रही?")}
          </h2>
          <p className="text-orange-100 mb-6">
            {t(
              "We also organize custom pilgrimage tours as per your requirements. Contact us for personalized yatra packages.",
              "हम आपकी आवश्यकताओं के अनुसार कस्टम तीर्थयात्रा भी आयोजित करते हैं। व्यक्तिगत यात्रा पैकेज के लिए हमसे संपर्क करें।"
            )}
          </p>
          <a
            href="https://wa.me/919414248951?text=Namaste! I need a custom yatra package."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full transition-colors"
          >
            📱 {t("WhatsApp for Custom Tour", "कस्टम यात्रा के लिए WhatsApp करें")}
          </a>
        </div>
      </section>
    </div>
  );
}

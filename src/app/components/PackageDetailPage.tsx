import { useParams, Link } from "react-router";
import { Clock, ChevronRight, ChevronLeft, Check, X, MapPin } from "lucide-react";
import { useState } from "react";
import { useLang } from "./LanguageContext";
import { tourPackages } from "./data";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function PackageDetailPage() {
  const { id } = useParams();
  const { t, lang } = useLang();
  const [activeTab, setActiveTab] = useState<"itinerary" | "includes">("itinerary");

  const pkg = tourPackages.find((p) => p.id === id);

  if (!pkg) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <span className="text-6xl mb-4">🕉</span>
        <h1 className="text-2xl text-gray-800 mb-4" style={{ fontWeight: 700 }}>
          {t("Package Not Found", "पैकेज नहीं मिला")}
        </h1>
        <Link to="/packages" className="text-[#E65100] hover:underline flex items-center gap-1">
          <ChevronLeft className="w-4 h-4" /> {t("Back to Packages", "पैकेज पर वापस जाएं")}
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <ImageWithFallback src={pkg.image} alt={lang === "en" ? pkg.nameEn : pkg.nameHi} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        <div className="relative h-full flex flex-col justify-end p-6 md:p-12 max-w-7xl mx-auto">
          <Link to="/packages" className="text-orange-200 hover:text-white flex items-center gap-1 mb-4 text-sm">
            <ChevronLeft className="w-4 h-4" /> {t("All Packages", "सभी पैकेज")}
          </Link>
          <h1 className="text-3xl md:text-5xl text-white mb-2" style={{ fontWeight: 700 }}>
            {lang === "en" ? pkg.nameEn : pkg.nameHi}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-white/80">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> {lang === "en" ? pkg.duration : pkg.durationHi}
            </span>
            <span className="bg-[#E65100] text-white px-4 py-1 rounded-full" style={{ fontWeight: 700 }}>
              {t("Starting from", "शुरू")} {pkg.price} {t("per person", "प्रति व्यक्ति")}
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-orange-100 mb-8">
              <h2 className="text-xl text-gray-800 mb-4" style={{ fontWeight: 700 }}>
                {t("About This Yatra", "इस यात्रा के बारे में")}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {lang === "en" ? pkg.descEn : pkg.descHi}
              </p>

              {/* Highlights */}
              <h3 className="text-lg text-gray-800 mb-3" style={{ fontWeight: 600 }}>
                {t("Tour Highlights", "यात्रा मुख्य आकर्षण")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {pkg.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-[#E65100] mt-0.5 shrink-0">✦</span>
                    <span className="text-gray-600">{lang === "en" ? h.en : h.hi}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-md border border-orange-100 overflow-hidden mb-8">
              <div className="flex border-b border-orange-100">
                <button
                  onClick={() => setActiveTab("itinerary")}
                  className={`flex-1 py-3 px-4 text-sm transition-colors ${
                    activeTab === "itinerary"
                      ? "bg-[#E65100] text-white"
                      : "text-gray-600 hover:bg-orange-50"
                  }`}
                  style={{ fontWeight: 600 }}
                >
                  {t("Day-wise Itinerary", "दिन-वार कार्यक्रम")}
                </button>
                <button
                  onClick={() => setActiveTab("includes")}
                  className={`flex-1 py-3 px-4 text-sm transition-colors ${
                    activeTab === "includes"
                      ? "bg-[#E65100] text-white"
                      : "text-gray-600 hover:bg-orange-50"
                  }`}
                  style={{ fontWeight: 600 }}
                >
                  {t("Inclusions & Exclusions", "शामिल और अशामिल")}
                </button>
              </div>

              <div className="p-6">
                {activeTab === "itinerary" ? (
                  <div className="space-y-6">
                    {pkg.itinerary.map((day, i) => (
                      <div key={i} className="relative pl-8 pb-6 border-l-2 border-orange-200 last:border-l-0 last:pb-0">
                        <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-[#E65100] border-4 border-orange-100" />
                        <div className="bg-orange-50 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="bg-[#E65100] text-white text-xs px-2 py-0.5 rounded" style={{ fontWeight: 600 }}>
                              {lang === "en" ? day.dayEn : day.dayHi}
                            </span>
                            <h4 className="text-gray-800" style={{ fontWeight: 600 }}>
                              {lang === "en" ? day.titleEn : day.titleHi}
                            </h4>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {lang === "en" ? day.descEn : day.descHi}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg text-green-700 mb-4 flex items-center gap-2" style={{ fontWeight: 600 }}>
                        <Check className="w-5 h-5" /> {t("Included", "शामिल")}
                      </h3>
                      <ul className="space-y-2">
                        {pkg.includes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                            <span className="text-gray-600">{lang === "en" ? item.en : item.hi}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg text-red-700 mb-4 flex items-center gap-2" style={{ fontWeight: 600 }}>
                        <X className="w-5 h-5" /> {t("Not Included", "शामिल नहीं")}
                      </h3>
                      <ul className="space-y-2">
                        {pkg.excludes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                            <span className="text-gray-600">{lang === "en" ? item.en : item.hi}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-orange-100 sticky top-24">
              <div className="text-center mb-4">
                <span className="text-3xl text-[#E65100]" style={{ fontWeight: 700 }}>{pkg.price}</span>
                <span className="text-gray-500 text-sm block">{t("per person", "प्रति व्यक्ति")}</span>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4 text-[#E65100]" />
                  {lang === "en" ? pkg.duration : pkg.durationHi}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-[#E65100]" />
                  {t("Multiple destinations", "विभिन्न गंतव्य")}
                </div>
              </div>
              <a
                href={`https://wa.me/919414248951?text=${encodeURIComponent(
                  `Namaste! I am interested in the ${pkg.nameEn} package (${pkg.price}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full flex items-center justify-center gap-2 transition-colors mb-3"
              >
                📱 {t("Enquire on WhatsApp", "WhatsApp पर पूछताछ करें")}
              </a>
              <Link
                to="/contact"
                className="w-full border-2 border-[#E65100] text-[#E65100] hover:bg-[#E65100] hover:text-white px-5 py-2.5 rounded-full flex items-center justify-center gap-2 transition-colors text-sm"
              >
                {t("Contact Us", "संपर्क करें")} <ChevronRight className="w-4 h-4" />
              </Link>

              <div className="mt-6 pt-4 border-t border-orange-100">
                <p className="text-xs text-gray-500 text-center">
                  {t(
                    "Call Dr J P Agrawal (Jagannath Das): +91 94142 48951",
                    "कॉल करें: डॉ. जे पी अग्रवाल (जगन्नाथ दास): +91 94142 48951"
                  )}
                </p>
              </div>
            </div>

            {/* Other Packages */}
            {/* <div className="bg-white rounded-xl p-6 shadow-md border border-orange-100">
              <h3 className="text-gray-800 mb-4" style={{ fontWeight: 600 }}>
                {t("Other Packages", "अन्य पैकेज")}
              </h3>
              <div className="space-y-3">
                {tourPackages
                  .filter((p) => p.id !== pkg.id)
                  .slice(0, 4)
                  .map((p) => (
                    <Link
                      key={p.id}
                      to={`/packages/${p.id}`}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-orange-50 transition-colors group"
                    >
                      <ImageWithFallback
                        src={p.image}
                        alt={lang === "en" ? p.nameEn : p.nameHi}
                        className="w-14 h-14 rounded-lg object-cover shrink-0"
                      />
                      <div className="min-w-0">
                        <div className="text-sm text-gray-800 truncate" style={{ fontWeight: 500 }}>
                          {lang === "en" ? p.nameEn : p.nameHi}
                        </div>
                        <div className="text-xs text-[#E65100]">{p.price}</div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400 shrink-0 ml-auto group-hover:text-[#E65100]" />
                    </Link>
                  ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

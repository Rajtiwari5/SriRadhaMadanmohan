import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Globe, Phone } from "lucide-react";
import { useLang } from "./LanguageContext";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLang();
  const location = useLocation();

  const navItems = [
    { path: "/", label: t("Home", "होम") },
    { path: "/about", label: t("About Us", "हमारे बारे में") },
    { path: "/packages", label: t("Tour Packages", "तीर्थ यात्रा पैकेज") },
<<<<<<< HEAD
=======
    { path: "/gallery", label: t("Gallery", "गैलरी") },
>>>>>>> f2a13046bc83064117438c4523f0547f3831b477
    { path: "/videos", label: t("Videos", "वीडियो") },
    { path: "/contact", label: t("Contact", "संपर्क") },
  ];

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#BF360C] text-white py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" />
              +91 94142 48951
            </span>
            <span>|</span>
            <span>{t("srimadanmohan@tirthyatra.com", "srimadanmohan@tirthyatra.com")}</span>
          </div>
          <div className="flex items-center gap-3">
            <span>{t("Follow Us:", "हमसे जुड़ें:")}</span>
            <a href="#" className="hover:text-orange-200">Facebook</a>
<<<<<<< HEAD
            <a href="https://www.instagram.com/srimadanmohan_tirth_yatra?igsh=ajZnMjExbmtoamgw" target="_blank" rel="noopener noreferrer" className="hover:text-orange-200">Instagram</a>
=======
            <a href="#" className="hover:text-orange-200">Instagram</a>
>>>>>>> f2a13046bc83064117438c4523f0547f3831b477
            <a href="https://youtube.com/@purebhakticenterjaipur7577?si=tXJQtGdGYKbRsiri" target="_blank" rel="noopener noreferrer" className="hover:text-orange-200">YouTube</a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
<<<<<<< HEAD
          <Link to="/" className="flex items-center">
            <img
              src="https://res.cloudinary.com/dikn5wjzs/image/upload/v1779121565/trithyatra_logo-removebg-preview_szoobf.png"
              alt={t("Sri Madanmohan Tirth Yatra", "श्री मदनमोहन तीर्थ यात्रा")}
              className="h-15 md:h-27 w-auto"
            />
=======
          <Link to="/" className="flex items-center gap-2">
            <span className="text-3xl md:text-4xl text-[#E65100]">🕉</span>
            <div className="leading-tight">
              <span className="text-[#E65100] text-lg md:text-xl" style={{ fontWeight: 700 }}>
                {t("Sri Madanmohan", "श्री मदनमोहन")}
              </span>
              <span className="block text-[#BF360C] text-xs md:text-sm">
                {t("Tirth Yatra", "तीर्थ यात्रा")}
              </span>
            </div>
>>>>>>> f2a13046bc83064117438c4523f0547f3831b477
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md transition-colors text-sm ${
                  location.pathname === item.path
                    ? "bg-[#E65100] text-white"
                    : "text-gray-700 hover:bg-orange-50 hover:text-[#E65100]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language + Mobile toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "en" ? "hi" : "en")}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-[#E65100] text-[#E65100] hover:bg-[#E65100] hover:text-white transition-colors text-sm"
            >
              <Globe className="w-4 h-4" />
              {lang === "en" ? "हिंदी" : "English"}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-[#E65100] p-1"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-orange-100 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-6 py-3 transition-colors ${
                  location.pathname === item.path
                    ? "bg-orange-50 text-[#E65100] border-l-4 border-[#E65100]"
                    : "text-gray-700 hover:bg-orange-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-6 pt-3 flex items-center gap-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" /> +91 94142 48951
            </div>
          </div>
        )}
      </header>
    </>
  );
}

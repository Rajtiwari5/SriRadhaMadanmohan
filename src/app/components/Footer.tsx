import { Link } from "react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLang } from "./LanguageContext";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-[#3E2723] text-orange-100">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-3xl">🕉</span>
            <div>
              <span className="text-white text-lg" style={{ fontWeight: 700 }}>
                {t("Sri Madanmohan", "श्री मदनमोहन")}
              </span>
              <span className="block text-orange-300 text-sm">{t("Tirth Yatra", "तीर्थ यात्रा")}</span>
            </div>
          </div>
          <p className="text-orange-200/80 text-sm leading-relaxed">
            {t(
              "Your trusted partner for spiritual pilgrimages across India. We organize sacred journeys to the holiest Hindu temples and pilgrimage sites.",
              "भारत भर में आध्यात्मिक तीर्थयात्राओं के लिए आपका विश्वसनीय साथी। हम पवित्र हिंदू मंदिरों और तीर्थ स्थलों की पवित्र यात्राओं का आयोजन करते हैं।"
            )}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white mb-4" style={{ fontWeight: 600 }}>{t("Quick Links", "त्वरित लिंक")}</h3>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", label: t("Home", "होम") },
              { to: "/about", label: t("About Us", "हमारे बारे में") },
              { to: "/packages", label: t("Tour Packages", "तीर्थ यात्रा पैकेज") },
              { to: "/gallery", label: t("Gallery", "गैलरी") },
              { to: "/videos", label: t("Videos", "वीडियो") },
              { to: "/contact", label: t("Contact", "संपर्क") },
            ].map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-white transition-colors">
                  → {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Popular Tours */}
        <div>
          <h3 className="text-white mb-4" style={{ fontWeight: 600 }}>{t("Popular Tours", "लोकप्रिय यात्राएं")}</h3>
          <ul className="space-y-2 text-sm">
            <li>{t("Char Dham Yatra", "चार धाम यात्रा")}</li>
            <li>{t("Vrindavan-Mathura Tour", "वृंदावन-मथुरा दर्शन")}</li>
            <li>{t("Kashi Vishwanath Yatra", "काशी विश्वनाथ यात्रा")}</li>
            <li>{t("Dwarka-Somnath Tour", "द्वारका-सोमनाथ यात्रा")}</li>
            <li>{t("Tirupati Balaji Darshan", "तिरुपति बालाजी दर्शन")}</li>
            <li>{t("Amarnath Yatra", "अमरनाथ यात्रा")}</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white mb-4" style={{ fontWeight: 600 }}>{t("Contact Us", "हमसे संपर्क करें")}</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-orange-300" />
              <span>{t("Sri Madanmohan Tirth Yatra, Jaipur, Rajasthan", "श्री मदनमोहन तीर्थ यात्रा, जयपुर, राजस्थान")}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0 text-orange-300" />
              +91 94142 48951
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 shrink-0 text-orange-300" />
              srimadanmohan@tirthyatra.com
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-orange-900/50 py-6">
        <div className="max-w-7xl mx-auto px-4 flex justify-center items-center gap-6 mb-4">
          <span className="text-orange-200/60 text-sm">{t("Follow Us:", "हमसे जुड़ें:")}</span>
          <a href="#" className="text-orange-100 hover:text-white transition-colors">Facebook</a>
          <a href="#" className="text-orange-100 hover:text-white transition-colors">Instagram</a>
          <a href="https://youtube.com/@purebhakticenterjaipur7577?si=tXJQtGdGYKbRsiri" target="_blank" rel="noopener noreferrer" className="text-orange-100 hover:text-white transition-colors">YouTube</a>
        </div>
        <div className="text-center text-sm text-orange-200/60">
          <p>© 2026 {t("Sri Madanmohan Tirth Yatra. All Rights Reserved.", "श्री मदनमोहन तीर्थ यात्रा। सर्वाधिकार सुरक्षित।")}</p>
        </div>
      </div>
    </footer>
  );
}

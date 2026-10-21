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
          <div className="flex items-center mb-4">
            <img
              src="https://res.cloudinary.com/dikn5wjzs/image/upload/v1779121565/trithyatra_logo-removebg-preview_szoobf.png"
              alt={t("Sri Madanmohan Tirth Yatra", "श्री मदनमोहन तीर्थ यात्रा")}
              className="h-12 w-auto"
            />
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
            <li>
              <Link to="/packages/south-yatra-2027" className="hover:text-white transition-colors">
                → {t("South Yatra 2027 (14 Days)", "साउथ यात्रा २०२७ (१४ दिन)")}
              </Link>
            </li>
            <li>
              <Link to="/packages/dwarka-somnath" className="hover:text-white transition-colors">
                → {t("Dwarka-Somnath Yatra (7 Days)", "द्वारका-सोमनाथ यात्रा (७ दिन)")}
              </Link>
            </li>
            <li>
              <Link to="/packages/char-dham" className="hover:text-white transition-colors">
                → {t("Char Dham Yatra 2026", "चार धाम यात्रा २०२६")}
              </Link>
            </li>
            <li>
              <Link to="/packages/puri-gangasagar-2026" className="hover:text-white transition-colors">
                → {t("Jagannath Puri & Baidhyanath Dham", "जगन्नाथ पुरी व बैद्यनाथ धाम")}
              </Link>
            </li>
            <li>
              <Link to="/packages/nepal-kathmandu-pokhara-muktinath" className="hover:text-white transition-colors">
                → {t("Nepal Muktinath Yatra", "नेपाल मुक्तिनाथ यात्रा")}
              </Link>
            </li>
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
          <a href="https://www.instagram.com/srimadanmohan_tirth_yatra?igsh=ajZnMjExbmtoamgw" target="_blank" rel="noopener noreferrer" className="text-orange-100 hover:text-white transition-colors">Instagram</a>
          <a href="https://youtube.com/@purebhakticenterjaipur7577?si=tXJQtGdGYKbRsiri" target="_blank" rel="noopener noreferrer" className="text-orange-100 hover:text-white transition-colors">YouTube</a>
        </div>
        <div className="text-center text-sm text-orange-200/60">
          <p>© 2026 {t("Sri Madanmohan Tirth Yatra. All Rights Reserved.", "श्री मदनमोहन तीर्थ यात्रा। सर्वाधिकार सुरक्षित।")}</p>
        </div>
      </div>
    </footer>
  );
}

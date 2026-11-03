"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { MapPin, Users, Star, Shield, Clock, HeartHandshake, ChevronRight, Calendar } from "lucide-react";
import { useLang } from "../LanguageProvider";
import { IMAGES, tourPackages, testimonials } from "@/lib/data";

export function LegacyHomePage() {
  const { t, lang } = useLang();

  const features = [
    { icon: <Shield className="w-8 h-8" />, titleEn: "Safe & Secure", titleHi: "सुरक्षित यात्रा", descEn: "Complete safety measures with experienced guides and medical support throughout the journey.", descHi: "अनुभवी गाइड और पूरी यात्रा में चिकित्सा सहायता के साथ पूर्ण सुरक्षा उपाय।" },
    { icon: <Users className="w-8 h-8" />, titleEn: "Expert Guides", titleHi: "विशेषज्ञ गाइड", descEn: "Knowledgeable pandits and tour guides who make your spiritual journey meaningful.", descHi: "जानकार पंडित और टूर गाइड जो आपकी आध्यात्मिक यात्रा को सार्थक बनाते हैं।" },
    { icon: <Star className="w-8 h-8" />, titleEn: "Premium Service", titleHi: "प्रीमियम सेवा", descEn: "Quality accommodation, hygienic vegetarian meals, and comfortable AC transport.", descHi: "गुणवत्तापूर्ण आवास, स्वच्छ शाकाहारी भोजन और आरामदायक एसी परिवहन।" },
    { icon: <Clock className="w-8 h-8" />, titleEn: "7+ Years Experience", titleHi: "7+ वर्षों का अनुभव", descEn: "Seven years of organizing successful spiritual pilgrimages across India.", descHi: "भारत भर में सफल आध्यात्मिक तीर्थयात्राओं के आयोजन का सात वर्षों का अनुभव।" },
    { icon: <HeartHandshake className="w-8 h-8" />, titleEn: "Affordable Prices", titleHi: "किफायती कीमतें", descEn: "Best value packages without compromising on quality and comfort.", descHi: "गुणवत्ता और आराम से समझौता किए बिना सर्वोत्तम मूल्य पैकेज।" },
    { icon: <MapPin className="w-8 h-8" />, titleEn: "20+ Destinations", titleHi: "20+ गंतव्य", descEn: "Covering major Hindu pilgrimage sites across India.", descHi: "भारत भर के प्रमुख हिंदू तीर्थ स्थलों को कवर करते हैं।" },
  ];

  return (
    <div className="legacy-home">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[500px] overflow-hidden">
        <img
          src={IMAGES.hero}
          alt="Hindu Temple"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          {/* <span className="text-6xl md:text-8xl mb-4 drop-shadow-lg">🕉</span> */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl mb-4 drop-shadow-lg" style={{ fontWeight: 700 }}>
            {t("Sri Madanmohan", "श्री मदनमोहन")}
          </h1>
          <h2 className="text-xl md:text-3xl lg:text-4xl text-orange-200 mb-6" style={{ fontWeight: 500 }}>
            {t("Tirth Yatra", "तीर्थ यात्रा")}
          </h2>
          <p className="max-w-2xl text-base md:text-lg text-orange-50 mb-8 leading-relaxed">
            {t(
              "Your Trusted Partner for Sacred Pilgrimages Across India. Experience Divine Journeys to the Holiest Hindu Temples.",
              "भारत भर में पवित्र तीर्थयात्राओं के लिए आपका विश्वसनीय साथी। पवित्र हिंदू मंदिरों की दिव्य यात्राओं का अनुभव करें।"
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/packages"
              className="bg-[#E65100] hover:bg-[#BF360C] text-white px-8 py-3 rounded-full transition-colors text-lg flex items-center gap-2"
            >
              {t("Explore Packages", "पैकेज देखें")} <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-[#E65100] px-8 py-3 rounded-full transition-colors text-lg"
            >
              {t("Contact Us", "संपर्क करें")}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#E65100] text-white py-6">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { num: "5,000+", label: t("Happy Pilgrims", "खुश तीर्थयात्री") },
            { num: "20+", label: t("Destinations", "गंतव्य") },
            { num: "7+", label: t("Years Experience", "वर्षों का अनुभव") },
            { num: "100%", label: t("Satisfaction", "संतुष्टि") },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl md:text-3xl" style={{ fontWeight: 700 }}>{stat.num}</div>
              <div className="text-orange-200 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Upcoming Yatras Spotlight */}
      <section className="py-12 px-4 bg-amber-50/60 border-b border-orange-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-[#E65100] text-xs font-bold tracking-widest uppercase">
                {t("Special Departure from Jaipur Junction", "जयपुर जंक्शन से विशेष प्रस्थान")}
              </span>
              <h2 className="text-2xl md:text-3xl text-gray-900 mt-1" style={{ fontWeight: 700 }}>
                {t("Featured Upcoming Yatras 2027", "आगामी प्रमुख तीर्थ यात्राएं २०२७")}
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                {t("Organized by Dr. J. P. Agrawal (9414248951) with 3-AC train, AC bus, AC rooms & pure satvik prasadam", "डॉ. जे. पी. अग्रवाल (9414248951) द्वारा आयोजित: 3-AC ट्रेन, एसी बस, एसी रूम्स व सात्विक प्रसादम")}
              </p>
            </div>
            <Link
              href="/packages"
              className="text-[#E65100] hover:text-[#BF360C] text-sm font-semibold inline-flex items-center gap-1 self-start md:self-auto"
            >
              {t("Explore All Packages →", "सभी पैकेज देखें →")}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Sri Lanka Ramayana Yatra 2027 Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border-2 border-orange-200/80 hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src="/images/sri-lanka/sigiriya.jpg"
                    alt="Sri Lanka Ramayana Yatra 2027"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute top-3 left-3 bg-[#BF360C] text-white text-xs px-3 py-1 rounded-full font-bold">
                    {t("New · International", "नई · अंतरराष्ट्रीय")}
                  </div>
                  <div className="absolute top-3 right-3 bg-[#E65100] text-white px-3.5 py-1 rounded-full text-base font-bold tabular-nums">
                    ₹72,500
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-xs text-orange-200 font-semibold mb-0.5">20 Jan – 25 Jan 2027 · 6 Days / 5 Nights</div>
                    <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                      {t("Sri Lanka Ramayana Yatra 2027", "श्रीलंका रामायण यात्रा २०२७")}
                    </h3>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-gray-600 text-xs sm:text-sm line-clamp-3 mb-4 leading-relaxed">
                    {t(
                      "Return flight tickets included. Chilaw, Trincomalee, Sigiriya, Dambulla, Matale, Kandy, Ramboda, Nuwara Eliya, Kitulgala and Colombo — Munneshwaram, Manavari Rama temple, Ashok Vatika, Sita Agni Pariksha site, Koneswaram and Panchamukha Hanuman temple.",
                      "आने-जाने का हवाई टिकट शामिल। चिलाव, त्रिंकोमाली, सिगिरिया, दाम्बुला, माताले, कैंडी, रामबोडा, नुवारा एलिया, कितुलगाला व कोलंबो — मुन्नेश्वरम, मनावरी राम मंदिर, अशोक वाटिका, सीता अग्नि परीक्षा स्थल, कोनेश्वरम व पंचमुखी हनुमान मंदिर।"
                    )}
                  </p>

                  <div className="space-y-1.5 text-xs text-gray-700 bg-orange-50/60 p-3 rounded-lg border border-orange-100 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-800">{t("Booking Advance Token:", "बुकिंग अग्रिम राशि:")}</span>
                      <strong className="text-emerald-800 font-bold tabular-nums">₹8,500 / seat</strong>
                    </div>
                    <div className="flex items-center justify-between text-gray-600">
                      <span>{t("Stays Included:", "ठहराव:")}</span>
                      <span>{t("4 Star Hotels & Resorts", "4 स्टार होटल व रिसॉर्ट")}</span>
                    </div>
                    <div className="flex items-center justify-between text-gray-600">
                      <span>{t("Prasadam:", "प्रसादम:")}</span>
                      <span>{t("Breakfast-Lunch-Dinner, Jain (No Onion/Garlic)", "नाश्ता-लंच-डिनर, जैन (बिना प्याज-लहसुन)")}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center gap-3">
                <Link
                  href="/packages/sri-lanka-ramayana-2027"
                  className="flex-1 bg-[#E65100] hover:bg-[#BF360C] text-white py-2.5 px-4 rounded-lg font-semibold text-xs sm:text-sm text-center transition-colors shadow-xs"
                >
                  {t("View Itinerary & Book", "पूरा कार्यक्रम व बुकिंग")}
                </Link>
                <a
                  href={`https://wa.me/919414248951?text=${encodeURIComponent("Namaste Dr. J. P. Agrawal ji, I want to book seats for Sri Lanka Ramayana Yatra 2027 (20-25 Jan).")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg text-xs font-semibold"
                  title="WhatsApp Dr. Agrawal"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* South Yatra 2027 Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border-2 border-orange-200/80 hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={IMAGES.southYatraHero || IMAGES.tirupati}
                    alt="South Yatra 2027"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute top-3 left-3 bg-[#BF360C] text-white text-xs px-3 py-1 rounded-full font-bold">
                    {t("Marquee Pilgrimage", "प्रमुख महातीर्थ")}
                  </div>
                  <div className="absolute top-3 right-3 bg-[#E65100] text-white px-3.5 py-1 rounded-full text-base font-bold tabular-nums">
                    ₹41,000
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-xs text-orange-200 font-semibold mb-0.5">31 Jan – 13 Feb 2027 · 14 Days / 13 Nights</div>
                    <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                      {t("South Yatra 2027 (Dakshin Bharat)", "साउथ यात्रा २०२७ (दक्षिण भारत महातीर्थ)")}
                    </h3>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-gray-600 text-xs sm:text-sm line-clamp-3 mb-4 leading-relaxed">
                    {t(
                      "Train tickets in Anuvrat SF express & Rajdhani express from Jaipur. Sacred darshan of Rameswaram (22 Kuon Snan & Samudra Snan), Dhanushkodi, Tirupati Balaji, Srisailam Mallikarjuna, Ahobilam, Srirangam, Vellore Golden Temple, Kanyakumari, and Padmanabhaswamy.",
                      "जयपुर से अणुव्रत सुपरफास्ट व राजधानी एक्सप्रेस में 3-AC ट्रेन टिकट। रामेश्वरम (22 कुआं व समुद्र स्नान), धनुषकोडी, तिरुपति बालाजी, श्रीशैलम, अहोबिलम, श्रीरंगम, वेल्लोर, कन्याकुमारी और पद्मनाभ स्वामी दर्शन।"
                    )}
                  </p>

                  <div className="space-y-1.5 text-xs text-gray-700 bg-orange-50/60 p-3 rounded-lg border border-orange-100 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-800">{t("Booking Advance Token:", "बुकिंग अग्रिम राशि:")}</span>
                      <strong className="text-emerald-800 font-bold tabular-nums">₹7,000 / seat</strong>
                    </div>
                    <div className="flex items-center justify-between text-gray-600">
                      <span>{t("Stays Included:", "ठहराव:")}</span>
                      <span>2 N Rameshwaram, 2 N Tirupati, AC Rooms</span>
                    </div>
                    <div className="flex items-center justify-between text-gray-600">
                      <span>{t("Prasadam:", "प्रसादम:")}</span>
                      <span>100% Satvik (No Onion/Garlic) + Train Meals</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center gap-3">
                <Link
                  href="/packages/south-yatra-2027"
                  className="flex-1 bg-[#E65100] hover:bg-[#BF360C] text-white py-2.5 px-4 rounded-lg font-semibold text-xs sm:text-sm text-center transition-colors shadow-xs"
                >
                  {t("View Itinerary & Book", "पूरा कार्यक्रम व बुकिंग")}
                </Link>
                <a
                  href={`https://wa.me/919414248951?text=${encodeURIComponent("Namaste Dr. J. P. Agrawal ji, I want to book seats for South Yatra 2027.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg text-xs font-semibold"
                  title="WhatsApp Dr. Agrawal"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Dwarka-Somnath Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border-2 border-orange-200/80 hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={IMAGES.dwarkaSomnathHero || IMAGES.dwarka}
                    alt="Dwarka-Somnath Yatra 2027"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute top-3 left-3 bg-[#BF360C] text-white text-xs px-3 py-1 rounded-full font-bold">
                    {t("Saurashtra Panch Tirth", "सौराष्ट्र पंचतीर्थ")}
                  </div>
                  <div className="absolute top-3 right-3 bg-[#E65100] text-white px-3.5 py-1 rounded-full text-base font-bold tabular-nums">
                    ₹17,000
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-xs text-orange-200 font-semibold mb-0.5">05 Jan – 11 Jan 2027 · 7 Days / 6 Nights</div>
                    <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                      {t("Dwarka – Somnath Yatra 2027", "द्वारका — सोमनाथ यात्रा २०२७")}
                    </h3>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-gray-600 text-xs sm:text-sm line-clamp-3 mb-4 leading-relaxed">
                    {t(
                      "Travel comfortably from Jaipur by 3-AC or 2-AC train. Sacred darshan of Lord Dwarkadhish, Rukmani Temple, Nageswar Jyotirling, Bet Dwarka, Gopi Tala, Somnath Jyotirling on the ocean, Diu Beach, and Gir National Park.",
                      "जयपुर से 3-AC या 2-AC ट्रेन द्वारा यात्रा। द्वारकाधीश मंदिर, रुक्मिणी मंदिर, नागेश्वर ज्योतिर्लिंग, बेट द्वारका, गोपी तालाब, सोमनाथ ज्योतिर्लिंग, दीव बीच व गिर नेशनल पार्क दर्शन।"
                    )}
                  </p>

                  <div className="space-y-1.5 text-xs text-gray-700 bg-orange-50/60 p-3 rounded-lg border border-orange-100 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-800">{t("Booking Advance Token:", "बुकिंग अग्रिम राशि:")}</span>
                      <strong className="text-emerald-800 font-bold tabular-nums">₹5,000 / seat</strong>
                    </div>
                    <div className="flex items-center justify-between text-gray-600">
                      <span>{t("Stays Included:", "ठहराव:")}</span>
                      <span>2 N Dwarka + 2 N Somnath (AC Rooms)</span>
                    </div>
                    <div className="flex items-center justify-between text-gray-600">
                      <span>{t("Prasadam:", "प्रसादम:")}</span>
                      <span>Pure Satvik (No Onion/Garlic) + Train Meals</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center gap-3">
                <Link
                  href="/packages/dwarka-somnath"
                  className="flex-1 bg-[#E65100] hover:bg-[#BF360C] text-white py-2.5 px-4 rounded-lg font-semibold text-xs sm:text-sm text-center transition-colors shadow-xs"
                >
                  {t("View Itinerary & Book", "पूरा कार्यक्रम व बुकिंग")}
                </Link>
                <a
                  href={`https://wa.me/919414248951?text=${encodeURIComponent("Namaste Dr. J. P. Agrawal ji, I want to book seats for Dwarka-Somnath Yatra.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg text-xs font-semibold"
                  title="WhatsApp Dr. Agrawal"
                >
                  WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={IMAGES.aarti}
              alt="Aarti Ceremony"
              className="rounded-2xl shadow-xl w-full h-80 object-cover"
            />
            <div className="absolute -bottom-4 -right-4 bg-[#E65100] text-white px-6 py-3 rounded-xl shadow-lg hidden md:block">
              <span className="text-2xl" style={{ fontWeight: 700 }}>7+</span>
              <span className="block text-sm">{t("Years of Service", "सेवा के वर्ष")}</span>
            </div>
          </div>
          <div>
            <span className="text-[#E65100] text-sm tracking-widest uppercase" style={{ fontWeight: 600 }}>
              {t("About Us", "हमारे बारे में")}
            </span>
            <h2 className="text-2xl md:text-3xl text-gray-800 mt-2 mb-4" style={{ fontWeight: 700 }}>
              {t("Welcome to Our Spiritual Travel Platform", "हमारे आध्यात्मिक यात्रा मंच में स्वागत है")}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t(
                "Welcome to our spiritual travel platform, where every journey is designed to nourish the soul while ensuring comfort and care just like home. Sri Madanmohan tirth yatra was founded in 2019 by Dr J.P.Agrawal. We specialize in organizing meaningful pilgrimage tours to some of the most sacred destinations in India and nearby regions.",
                "श्री मदनमोहन तीर्थ यात्रा 7 से अधिक वर्षों से पवित्र तीर्थयात्राओं का आयोजन कर रही है। हम भारत भर के सभी प्रमुख हिंदू तीर्थ स्थलों पर आरामदायक, सुरक्षित और आध्यात्मिक रूप से समृद्ध यात्रा अनुभव प्रदान करने के लिए समर्पित हैं।"
              )}
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t(
                "Our experienced team of pandits, guides, and travel experts ensure every aspect of your yatra is well-organized, from comfortable transportation and quality accommodation to special puja arrangements and VIP darshan.",
                "हमारी पंडितों, गाइडों और ट्रैवल विशेषज्ञों की अनुभवी टीम आपकी यात्रा के हर पहलू को सुनिश्चित करती है - आरामदायक परिवहन और गुणवत्तापूर्ण आवास से लेकर विशेष पूजा व्यवस्था और VIP दर्शन तक।"
              )}
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#E65100] hover:text-[#BF360C] transition-colors"
              style={{ fontWeight: 600 }}
            >
              {t("Read More", "और पढ़ें")} <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Tour Packages */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#E65100] text-sm tracking-widest uppercase" style={{ fontWeight: 600 }}>
              {t("Our Packages", "हमारे पैकेज")}
            </span>
            <h2 className="text-2xl md:text-3xl text-gray-800 mt-2" style={{ fontWeight: 700 }}>
              {t("Popular Tirth Yatra Packages", "लोकप्रिय तीर्थ यात्रा पैकेज")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourPackages.slice(0, 6).map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-orange-100 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={lang === "en" ? pkg.nameEn : pkg.nameHi}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#E65100] text-white px-3 py-1 rounded-full text-sm" style={{ fontWeight: 600 }}>
                    {pkg.price}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-gray-800 text-lg mb-1" style={{ fontWeight: 600 }}>
                    {lang === "en" ? pkg.nameEn : pkg.nameHi}
                  </h3>
                  <div className="flex flex-col gap-1 mb-3 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#E65100]" />
                      {lang === "en" ? pkg.duration : pkg.durationHi}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#E65100]" />
                      {lang === "en" ? pkg.datesEn : pkg.datesHi}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {lang === "en" ? pkg.descEn : pkg.descHi}
                  </p>
                  <Link
                    href={`/packages/${pkg.id}`}
                    className="inline-flex items-center gap-1 bg-[#E65100] hover:bg-[#BF360C] text-white px-5 py-2 rounded-full transition-colors text-sm"
                  >
                    {t("View Details", "विवरण देखें")} <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 border-2 border-[#E65100] text-[#E65100] hover:bg-[#E65100] hover:text-white px-8 py-3 rounded-full transition-colors"
            >
              {t("View All Packages", "सभी पैकेज देखें")} <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#E65100] text-sm tracking-widest uppercase" style={{ fontWeight: 600 }}>
              {t("Why Choose Us", "हमें क्यों चुनें")}
            </span>
            <h2 className="text-2xl md:text-3xl text-gray-800 mt-2" style={{ fontWeight: 700 }}>
              {t("Your Journey, Our Responsibility", "आपकी यात्रा, हमारी जिम्मेदारी")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-orange-100"
              >
                <div className="text-[#E65100] mb-4">{f.icon}</div>
                <h3 className="text-gray-800 mb-2" style={{ fontWeight: 600 }}>
                  {lang === "en" ? f.titleEn : f.titleHi}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {lang === "en" ? f.descEn : f.descHi}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#E65100] text-sm tracking-widest uppercase" style={{ fontWeight: 600 }}>
              {t("Testimonials", "प्रशंसापत्र")}
            </span>
            <h2 className="text-2xl md:text-3xl text-gray-800 mt-2" style={{ fontWeight: 700 }}>
              {t("What Our Pilgrims Say", "हमारे तीर्थयात्री क्या कहते हैं")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="bg-white rounded-xl p-6 shadow-md border border-orange-100"
              >
                <div className="flex mb-3">
                  {Array.from({ length: test.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-4 italic leading-relaxed">
                  "{lang === "en" ? test.textEn : test.textHi}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E65100] text-white flex items-center justify-center" style={{ fontWeight: 600 }}>
                    {(lang === "en" ? test.nameEn : test.nameHi).charAt(0)}
                  </div>
                  <div>
                    <div className="text-gray-800 text-sm" style={{ fontWeight: 600 }}>
                      {lang === "en" ? test.nameEn : test.nameHi}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {lang === "en" ? test.locationEn : test.locationHi}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <img
          src={IMAGES.ganges}
          alt="Sacred Journey"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#E65100]/85" />
        <div className="relative max-w-3xl mx-auto text-center text-white">
          <span className="text-5xl mb-4 block">🙏</span>
          <h2 className="text-2xl md:text-4xl mb-4" style={{ fontWeight: 700 }}>
            {t("Begin Your Sacred Journey Today", "आज ही अपनी पवित्र यात्रा शुरू करें")}
          </h2>
          <p className="text-orange-100 mb-8 text-lg">
            {t(
              "Join thousands of devotees who have experienced divine pilgrimages with us. Book your spiritual journey now!",
              "हजारों भक्तों से जुड़ें जिन्होंने हमारे साथ दिव्य तीर्थयात्राओं का अनुभव किया है। अभी अपनी आध्यात्मिक यात्रा बुक करें!"
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919414248951?text=Namaste! I am interested in Tirth Yatra packages."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full transition-colors flex items-center justify-center gap-2"
            >
              📱 {t("WhatsApp Us", "WhatsApp करें")}
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-[#E65100] px-8 py-3 rounded-full transition-colors"
            >
              {t("Contact Us", "संपर्क करें")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useState } from "react";
import { MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { useLang } from "./LanguageContext";
import { IMAGES } from "./data";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ContactPage() {
  const { t, lang } = useLang();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      qEn: "How do I book a Tirth Yatra package?",
      qHi: "मैं तीर्थ यात्रा पैकेज कैसे बुक करूं?",
      aEn: "You can book by contacting us via WhatsApp at +91 94142 48951 (Dr J P Agrawal - Jagannath Das), calling us directly, or filling the contact form on this page. Our team will get back to you within 24 hours with all the details and payment instructions.",
      aHi: "आप +91 94142 48951 (डॉ. जे पी अग्रवाल - जगन्नाथ दास) पर WhatsApp, सीधे कॉल या इस पेज पर संपर्क फॉर्म भरकर बुक कर सकते हैं। हमारी टीम 24 घंटे के भीतर सभी विवरण और भुगतान निर्देशों के साथ आपसे संपर्क करेगी।",
    },

    {
      qEn: "What is included in the tour packages?",
      qHi: "टूर पैकेज में क्या शामिल है?",
      aEn: "Our packages typically include AC transportation, hotel accommodation, breakfast and dinner, temple darshan arrangements, experienced tour guide, and first aid support. Specific inclusions vary by package - please check the package details page.",
      aHi: "हमारे पैकेज में आमतौर पर एसी परिवहन, होटल ठहरना, नाश्ता और रात का खाना, मंदिर दर्शन व्यवस्था, अनुभवी टूर गाइड और प्राथमिक चिकित्सा सहायता शामिल होती है। विशिष्ट समावेशन पैकेज के अनुसार भिन्न होते हैं।",
    },

    {
      qEn: "Is the food vegetarian?",
      qHi: "क्या खाना शाकाहारी है?",
      aEn: "Yes, we serve only pure vegetarian (sattvic) food during all our yatras. The meals are freshly prepared, hygienic, and include both North Indian and local cuisines. We also accommodate special dietary requirements if informed in advance.",
      aHi: "हां, हम अपनी सभी यात्राओं में केवल शुद्ध शाकाहारी (सात्विक) भोजन परोसते हैं। भोजन ताजा, स्वच्छ होता है और इसमें उत्तर भारतीय और स्थानीय दोनों व्यंजन शामिल होते हैं।",
    },

    {
      qEn: "What about safety for senior citizens?",
      qHi: "वरिष्ठ नागरिकों की सुरक्षा के बारे में क्या?",
      aEn: "We take special care of senior citizens with comfortable seating arrangements, medical support, oxygen cylinders for high-altitude yatras, pony/palki arrangements where needed, and dedicated staff to assist them throughout the journey.",
      aHi: "हम वरिष्ठ नागरिकों का विशेष ध्यान रखते हैं - आरामदायक बैठने की व्यवस्था, चिकित्सा सहायता, उच्च ऊंचाई की यात्राओं के लिए ऑक्सीजन सिलेंडर, घोड़ा/पालकी व्यवस्था और समर्पित कर्मचारी।",
    },

    {
      qEn: "Can I customize a tour package?",
      qHi: "क्या मैं टूर पैकेज को कस्टमाइज कर सकता हूं?",
      aEn: "Absolutely! We offer customized yatra packages for families, groups, and special occasions. Contact us with your requirements and we'll create a personalized itinerary that suits your needs and budget.",
      aHi: "बिल्कुल! हम परिवारों, समूहों और विशेष अवसरों के लिए कस्टमाइज्ड यात्रा पैकेज प्रदान करते हैं। अपनी आवश्यकताओं के साथ हमसे संपर्क करें।",
    },

    {
      qEn: "What is the payment and cancellation policy?",
      qHi: "भुगतान और रद्दीकरण नीति क्या है?",
      aEn: "We require 30% advance payment at the time of booking and the remaining 70% 15 days before the yatra. Cancellation before 30 days gets 90% refund, 15-30 days gets 50% refund, and less than 15 days is non-refundable.",
      aHi: "हमें बुकिंग के समय 30% अग्रिम भुगतान और शेष 70% यात्रा से 15 दिन पहले चाहिए। 30 दिन पहले रद्द करने पर 90% रिफंड, 15-30 दिन पर 50% रिफंड, और 15 दिन से कम पर कोई रिफंड नहीं।",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <ImageWithFallback src={IMAGES.pilgrims} alt="Contact" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#E65100]/90 to-[#BF360C]/80" />
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl mb-2" style={{ fontWeight: 700 }}>
            {t("Contact Us", "हमसे संपर्क करें")}
          </h1>
          <p className="text-orange-100 text-lg">
            {t("We're Here to Help You Plan Your Sacred Journey", "हम आपकी पवित्र यात्रा की योजना बनाने में मदद के लिए यहां हैं")}
          </p>
        </div>
      </section>

      {/* Map + Address */}
      <section className="py-12 px-4 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl overflow-hidden shadow-md border border-orange-100">
            <iframe
              // src="https://www.google.com/maps?q=26.884253,75.746532&z=15&output=embed"
              src="https://www.google.com/maps?q=26.8842158,75.7465589&z=17&output=embed"
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
              className="w-full"
            />
            <div className="p-5">
              <h3 className="text-gray-800 mb-3" style={{ fontWeight: 600 }}>
                {t("Our Office", "हमारा कार्यालय")}
              </h3>
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <MapPin className="w-5 h-5 text-[#E65100] shrink-0 mt-0.5" />
                <div>
                  <p style={{ fontWeight: 500 }}>{t("Sri Madanmohan Tirth Yatra", "श्री मदनमोहन तीर्थ यात्रा")}</p>
                  <p>{t("Near Bus Stand, Jaipur", "बस स्टैंड के पास, जयपुर")}</p>
                  <p>{t("Rajasthan, India", "राजस्थान, भारत")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#E65100] text-sm tracking-widest uppercase" style={{ fontWeight: 600 }}>
              {t("FAQ", "अक्सर पूछे जाने वाले प्रश्न")}
            </span>
            <h2 className="text-2xl md:text-3xl text-gray-800 mt-2" style={{ fontWeight: 700 }}>
              {t("Frequently Asked Questions", "अक्सर पूछे जाने वाले प्रश्न")}
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-orange-100 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-orange-50 transition-colors"
                >
                  <span className="text-gray-800" style={{ fontWeight: 500 }}>
                    {lang === "en" ? faq.qEn : faq.qHi}
                  </span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-[#E65100] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed border-t border-orange-50 pt-3">
                    {lang === "en" ? faq.aEn : faq.aHi}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

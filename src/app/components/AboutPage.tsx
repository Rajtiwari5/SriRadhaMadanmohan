import { useLang } from "./LanguageContext";
import { IMAGES } from "./data";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Shield, Heart, Users, Award, MapPin, BookOpen } from "lucide-react";

export function AboutPage() {
  const { t, lang } = useLang();

  const values = [
    { icon: <Heart className="w-7 h-7" />, titleEn: "Devotion & Faith", titleHi: "भक्ति और श्रद्धा", descEn: "Every journey we organize is rooted in deep devotion and respect for Hindu traditions and scriptures.", descHi: "हम जो भी यात्रा आयोजित करते हैं वह हिंदू परंपराओं और शास्त्रों के प्रति गहरी भक्ति और सम्मान पर आधारित है।" },
    { icon: <Shield className="w-7 h-7" />, titleEn: "Our Unique Approach", titleHi: "हमारा अनोखा दृष्टिकोण", descEn: "What truly sets us apart is the care and personal attention we give to every traveler. We treat every traveler like a member of our own family and respect their feelings, faith, and expectations. We celebrate special moments—birthdays, anniversaries, and special days—among our group, creating beautiful memories and strengthening togetherness.", descHi: "जो हमें अलग करता है वह हर यात्री को दिया जाने वाला देखभाल और व्यक्तिगत ध्यान है। हम हर यात्री को अपने परिवार के सदस्य की तरह मानते हैं और उनकी भावनाओं, आस्था और अपेक्षाओं का सम्मान करते हैं। हम विशेष क्षणों - जन्मदिन, वर्षगांठ और विशेष दिनों को मनाते हैं, सुंदर यादें बनाते हैं।" },
    { icon: <Users className="w-7 h-7" />, titleEn: "Family Values", titleHi: "पारिवारिक मूल्य", descEn: "We treat every pilgrim as family. Special care for senior citizens, women, and children.", descHi: "हम हर तीर्थयात्री को परिवार मानते हैं। वरिष्ठ नागरिकों, महिलाओं और बच्चों के लिए विशेष देखभाल।" },
    { icon: <Award className="w-7 h-7" />, titleEn: "Quality Service", titleHi: "गुणवत्ता सेवा", descEn: "From hygienic vegetarian meals to comfortable stays, we never compromise on quality.", descHi: "स्वच्छ शाकाहारी भोजन से लेकर आरामदायक ठहरने तक, हम गुणवत्ता से कभी समझौता नहीं करते।" },
    { icon: <MapPin className="w-7 h-7" />, titleEn: "Pan-India Coverage", titleHi: "पूरे भारत में सेवा", descEn: "We cover all major Hindu pilgrimage sites from Char Dham to Rameshwaram, Dwarka to Jagannath Puri.", descHi: "हम चार धाम से रामेश्वरम, द्वारका से जगन्नाथ पुरी तक सभी प्रमुख हिंदू तीर्थ स्थलों को कवर करते हैं।" },
    { icon: <BookOpen className="w-7 h-7" />, titleEn: "Spiritual Knowledge", titleHi: "आध्यात्मिक ज्ञान", descEn: "Our pandits share the significance, history, and legends of each sacred place during the journey.", descHi: "हमारे पंडित यात्रा के दौरान प्रत्येक पवित्र स्थान का महत्व, इतिहास और कथाएं साझा करते हैं।" },
  ];

  const team = [
    { nameEn: "Dr. J. P. Agrawal", nameHi: "डॉ. जे. पी. अग्रवाल", roleEn: "Founder", roleHi: "संस्थापक", descEn: "Dr. J. P. Agrawal has been dedicated to spreading spiritual knowledge based on the teachings of our Sanatan scriptures for many years, especially among the youth. With deep understanding and passion for spirituality, he guides travelers not only through sacred destinations but also towards a better understanding of spiritual values and life wisdom, making every journey more meaningful and enriching.", descHi: "डॉ. जे. पी. अग्रवाल कई वर्षों से हमारे सनातन शास्त्रों की शिक्षाओं पर आधारित आध्यात्मिक ज्ञान फैलाने के लिए समर्पित हैं, विशेष रूप से युवाओं के बीच। आध्यात्मिकता के प्रति गहरी समझ और जुनून के साथ, वह यात्रियों को न केवल पवित्र गंतव्यों के माध्यम से बल्कि आध्यात्मिक मूल्यों और जीवन ज्ञान की बेहतर समझ के दिशा में भी मार्गदर्शन करते हैं।" },
    { nameEn: "Akhileswari Dasi", nameHi: "अखिलेश्वरी दासी", roleEn: "Coordinator", roleHi: "समन्वयक", descEn: "Akhileswari Dasi serves as the Coordinator and is a spiritual and motivational guide. She actively organizes spiritual programs among the masses to spread devotion and preach the chanting of the Holy Name, inspiring people to connect with spirituality and lead a more meaningful life.", descHi: "अखिलेश्वरी दासी समन्वयक के रूप में कार्य करती हैं और एक आध्यात्मिक और प्रेरक गाइड हैं। वह लोगों के बीच आध्यात्मिक कार्यक्रमों का सक्रिय रूप से आयोजन करती हैं, भक्ति को फैलाने और पवित्र नाम के जाप का प्रचार करने के लिए, लोगों को आध्यात्मिकता से जुड़ने और अधिक सार्थक जीवन जीने के लिए प्रेरित करती हैं।" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <ImageWithFallback src={IMAGES.meditation} alt="About" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#E65100]/90 to-[#BF360C]/80" />
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl mb-2" style={{ fontWeight: 700 }}>
            {t("About Us", "हमारे बारे में")}
          </h1>
          <p className="text-orange-100 text-lg">
            {t("Know Our Journey of Faith & Service", "विश्वास और सेवा की हमारी यात्रा जानें")}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#E65100] text-sm tracking-widest uppercase" style={{ fontWeight: 600 }}>
              {t("About Us", "हमारे बारे में")}
            </span>
            <h2 className="text-2xl md:text-3xl text-gray-800 mt-2 mb-6" style={{ fontWeight: 700 }}>
              {t("Welcome to Our Spiritual Travel Platform", "हमारे आध्यात्मिक यात्रा मंच में स्वागत है")}
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                {t(
                  "Welcome to our spiritual travel platform, where every journey is designed to nourish the soul while ensuring comfort and care just like home. Sri Madanmohan tirth yatra was founded in 2019 by Dr J.P.Agrawal. We specialize in organizing meaningful pilgrimage tours to some of the most sacred destinations in India and nearby regions, helping devotees experience spirituality, culture, and devotion in a peaceful environment.",
                  "आमंत्रित है हमारे आध्यात्मिक यात्रा मंच पर, जहां हर यात्रा आत्मा को पोषित करने के लिए डिज़ाइन की गई है जबकि आराम और देखभाल घर की तरह प्रदान की जाती है। श्री मदनमोहन तीर्थ यात्रा की स्थापना 2019 में डॉ जे.पी. अग्रवाल द्वारा की गई थी। हम भारत और पास के क्षेत्रों के सबसे पवित्र गंतव्यों के लिए अर्थपूर्ण तीर्थयात्रा यात्राओं का आयोजन करने में विशेषज्ञ हैं।"
                )}
              </p>
              <p>
                {t(
                  "Our carefully curated tours include the divine Char Dham Yatra (Yamunotri, Gangotri, Kedarnath, and Badrinath), the sacred pilgrimage to Jagannath Puri, with Gangasagar and Baijnath dham, spiritually enriching journeys to Nepal, the holy Dwarka–Somnath tour in Gujarat, and temple tours across South India including Mallikarjun, Tirupati Balaji, Srirangam, Rameswaram Kanyakumari and Padmnabh. Each journey is thoughtfully planned so that travelers can focus on devotion and spiritual experience rather than logistics.",
                  "हमारे सावधानीपूर्वक चुनी गई यात्राओं में दिव्य चार धाम यात्रा (यमुनोत्री, गंगोत्री, केदारनाथ, और बद्रीनाथ), जगन्नाथ पुरी की पवित्र तीर्थयात्रा, गंगासागर और बैजनाथ धाम के साथ, नेपाल की आध्यात्मिक यात्राएं, गुजरात में पवित्र द्वारका-सोमनाथ दर्शन, और दक्षिण भारत में मंदिर यात्राएं शामिल हैं।"
                )}
              </p>
              <p>
                {t(
                  "What makes our tours unique is the homely and spiritual atmosphere we create during the entire journey. We travel with our own experienced cooks who prepare fresh, pure, home-style meals, ensuring comfort, hygiene, and taste that feels just like food from home. We also arrange comfortable stays and reliable transportation so that every traveler can enjoy a peaceful and hassle-free pilgrimage.",
                  "हमारी यात्राओं को अनोखा क्या बनाता है वह है घरेलू और आध्यात्मिक वातावरण जो हम संपूर्ण यात्रा के दौरान बनाते हैं। हम अपने अनुभवी रसोइयों के साथ यात्रा करते हैं जो ताजे, शुद्ध, घर जैसे भोजन तैयार करते हैं, आराम, स्वच्छता और स्वाद सुनिश्चित करते हैं।"
                )}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <ImageWithFallback src={IMAGES.vrindavan} alt="Temple" className="rounded-xl h-48 w-full object-cover" />
            <ImageWithFallback src={IMAGES.varanasi} alt="Ghats" className="rounded-xl h-48 w-full object-cover mt-8" />
            <ImageWithFallback src={IMAGES.pilgrims} alt="Pilgrims" className="rounded-xl h-48 w-full object-cover" />
            <ImageWithFallback src={IMAGES.architecture} alt="Architecture" className="rounded-xl h-48 w-full object-cover mt-8" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-md border border-orange-100">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl text-gray-800 mb-4" style={{ fontWeight: 700 }}>
              {t("Our Mission", "हमारा मिशन")}
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
              <p>
                {t(
                  "Our mission is to make spiritual journeys meaningful, comfortable, and accessible for every devotee. We aim to guide travelers to sacred destinations with care, devotion, and well-organized services so they can focus on prayer, peace, and spiritual growth.",
                  "हमारा मिशन आध्यात्मिक यात्राओं को हर भक्त के लिए अर्थपूर्ण, आरामदायक और सुलभ बनाना है। हम यात्रियों को पवित्र गंतव्यों के लिए देखभाल, भक्ति और अच्छी तरह से आयोजित सेवाओं के साथ मार्गदर्शन करना चाहते हैं ताकि वे प्रार्थना, शांति और आध्यात्मिक विकास पर ध्यान केंद्रित कर सकें।"
                )}
              </p>
              <p>
                {t(
                  "We strive to provide pilgrimage experiences that combine faith, comfort, and community. From home-style vegetarian meals prepared by our own cooks to comfortable accommodation and reliable transportation, our goal is to ensure that every traveler feels safe, cared for, and at home throughout the journey.",
                  "हम ऐसी तीर्थयात्रा का अनुभव प्रदान करने का प्रयास करते हैं जो faith, आराम और समुदाय को जोड़ता है। हमारे अपने रसोइयों द्वारा तैयार किए गए घर जैसे शाकाहारी भोजन से लेकर आरामदायक आवास और विश्वसनीय परिवहन तक, हमारा लक्ष्य यह सुनिश्चित करना है कि हर यात्री पूरी यात्रा के दौरान सुरक्षित, देखभाल में और घर जैसा महसूस करे।"
                )}
              </p>
              <p>
                {t(
                  "Our mission also extends beyond travel. We aspire to increase spiritual and moral values in people's lives by sharing the wisdom of our sacred scriptures and traditions. Through spiritual discussions, inspiring lectures, and meaningful conversations, we encourage travelers to understand and connect with the deeper teachings of our culture.",
                  "हमारा मिशन यात्रा से परे भी विस्तारित है। हम अपने पवित्र शास्त्रों और परंपराओं की बुद्धिमत्ता साझा करके लोगों के जीवन में आध्यात्मिक और नैतिक मूल्य बढ़ाना चाहते हैं। आध्यात्मिक चर्चाओं, प्रेरणादायक व्याख्यानों और सार्थक बातचीत के माध्यम से, हम यात्रियों को हमारी संस्कृति की गहरी शिक्षाओं को समझने और जुड़ने के लिए प्रोत्साहित करते हैं।"
                )}
              </p>
              <p>
                {t(
                  "With dedication, sincerity, and service, our goal is to be a trusted companion in your spiritual journey, helping devotees experience faith, knowledge, joy, and inner peace while visiting sacred destinations like Char Dham, Jagannath Puri, Nepal, Dwarka–Somnath, and the temples of South India.",
                  "समर्पण, ईमानदारी और सेवा के साथ, हमारा लक्ष्य आपकी आध्यात्मिक यात्रा में एक विश्वसनीय साथी बनना है, भक्तों को Char Dham, Jagannath Puri, Nepal, Dwarka–Somnath और दक्षिण भारत के मंदिरों जैसे पवित्र गंतव्यों का दौरा करते हुए faith, ज्ञान, आनंद और आंतरिक शांति का अनुभव करने में मदद करना।"
                )}
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-md border border-orange-100">
            <div className="text-4xl mb-4">👁️</div>
            <h3 className="text-xl text-gray-800 mb-4" style={{ fontWeight: 700 }}>
              {t("Our Vision", "हमारा विजन")}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t(
                "To become India's most trusted and respected tirth yatra organization, known for excellence in service, deep spiritual knowledge, and unwavering commitment to the welfare of every pilgrim. We envision a world where every Hindu devotee can experience the divine blessings of all sacred pilgrimage sites.",
                "भारत का सबसे विश्वसनीय और सम्मानित तीर्थ यात्रा संगठन बनना, जो सेवा में उत्कृष्टता, गहन आध्यात्मिक ज्ञान और प्रत्येक तीर्थयात्री के कल्याण के प्रति अटूट प्रतिबद्धता के लिए जाना जाता है।"
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#E65100] text-sm tracking-widest uppercase" style={{ fontWeight: 600 }}>
              {t("Our Values", "हमारे मूल्य")}
            </span>
            <h2 className="text-2xl md:text-3xl text-gray-800 mt-2" style={{ fontWeight: 700 }}>
              {t("What We Stand For", "हम किसके लिए खड़े हैं")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md border border-orange-100 hover:shadow-lg transition-shadow">
                <div className="text-[#E65100] mb-3">{v.icon}</div>
                <h3 className="text-gray-800 mb-2" style={{ fontWeight: 600 }}>
                  {lang === "en" ? v.titleEn : v.titleHi}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {lang === "en" ? v.descEn : v.descHi}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#E65100] text-sm tracking-widest uppercase" style={{ fontWeight: 600 }}>
              {t("Our Team", "हमारी टीम")}
            </span>
            <h2 className="text-2xl md:text-3xl text-gray-800 mt-2" style={{ fontWeight: 700 }}>
              {t("Meet Our Spiritual Guides", "हमारे आध्यात्मिक गाइड से मिलें")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-center shadow-md border border-orange-100">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#E65100] to-[#FF6F00] mx-auto mb-4 flex items-center justify-center text-white text-3xl" style={{ fontWeight: 700 }}>
                  {(lang === "en" ? member.nameEn : member.nameHi).charAt(0)}
                </div>
                <h3 className="text-gray-800 text-lg" style={{ fontWeight: 600 }}>
                  {lang === "en" ? member.nameEn : member.nameHi}
                </h3>
                <p className="text-[#E65100] text-sm mb-3">{lang === "en" ? member.roleEn : member.roleHi}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {lang === "en" ? member.descEn : member.descHi}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloudinary Note */}
      <section className="py-12 px-4 bg-[#FFF3E0]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-gray-800 mb-3" style={{ fontWeight: 600 }}>
            {t("📸 Image Management with Cloudinary", "📸 Cloudinary के साथ छवि प्रबंधन")}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {t(
              "This website uses Cloudinary for image management and delivery. To upload and manage images, configure your Cloudinary cloud name in the environment settings. Cloudinary provides optimized image delivery, automatic format conversion, and responsive image transformations for the best performance.",
              "यह वेबसाइट छवि प्रबंधन और वितरण के लिए Cloudinary का उपयोग करती है। छवियों को अपलोड और प्रबंधित करने के लिए, अपने Cloudinary क्लाउड नाम को पर्यावरण सेटिंग्स में कॉन्फ़िगर करें। Cloudinary सर्वोत्तम प्रदर्शन के लिए अनुकूलित छवि वितरण प्रदान करता है।"
            )}
          </p>
          <p className="text-gray-500 text-xs mt-2">
            {t(
              "Cloudinary URL format: https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/v1/folder/image.jpg",
              "Cloudinary URL प्रारूप: https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/v1/folder/image.jpg"
            )}
          </p>
        </div>
      </section>
    </div>
  );
}

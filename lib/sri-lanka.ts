import type { TourPackage } from "./data";

const IMG = "/images/sri-lanka";

/**
 * Sri Lanka Ramayana Yatra 2027
 * Source: organiser poster (20–25 Jan 2027, ₹72,500 incl. flight) and the
 * day-wise brochure PDF (itinerary, hotels, inclusions, policies).
 */
export const sriLankaRamayana2027: TourPackage = {
  id: "sri-lanka-ramayana-2027",
  nameEn: "Sri Lanka Ramayana Yatra 2027",
  nameHi: "श्रीलंका रामायण यात्रा 2027",
  descEn:
    "Walk in the footsteps of Shri Ram, Sita Mata and Hanumanji across Lanka — from Munneshwaram and Manavari (where Shri Ram installed the sand Shivalingam) to Ashok Vatika in Sita Eliya, the Sita Agni Pariksha site at Divurumpola, Koneswaram, Ravana's hot water wells and the Panchamukha Hanuman temple in Colombo. 4-star hotels, luxury AC transport, Hindi/English guide and pure vegetarian Jain meals (no onion, no garlic). Return flight tickets included.",
  descHi:
    "श्री राम, सीता माता और हनुमानजी के पदचिह्नों पर लंका की पावन यात्रा — मुन्नेश्वरम और मनावरी (जहां श्री राम ने बालू का शिवलिंग स्थापित किया) से सीता एलिया की अशोक वाटिका, दिवुरुम्पोला का सीता अग्नि परीक्षा स्थल, कोनेश्वरम, रावण के गर्म पानी के कुएं और कोलंबो के पंचमुखी हनुमान मंदिर तक। 4 स्टार होटल, लग्ज़री एसी वाहन, हिंदी/अंग्रेज़ी गाइड और शुद्ध शाकाहारी जैन भोजन (बिना प्याज-लहसुन)। आने-जाने का हवाई टिकट शामिल।",
  duration: "6 Days / 5 Nights",
  durationHi: "6 दिन / 5 रातें",
  price: "₹72,500",
  bookingAmount: "₹8,500",
  datesEn: "20 Jan – 25 Jan 2027",
  datesHi: "20 जनवरी – 25 जनवरी 2027",
  startDate: "2027-01-20",
  image: `${IMG}/sigiriya.jpg`,
  region: "international",
  featured: true,
  tagEn: "New · International",
  tagHi: "नई · अंतरराष्ट्रीय",
  brochure: `${IMG}/poster.jpg`,
  highlights: [
    { en: "Return flight tickets included in ₹72,500 per person", hi: "₹72,500 प्रति व्यक्ति में आने-जाने का हवाई टिकट शामिल" },
    { en: "4-star hotels & resorts on twin / double sharing (AC rooms)", hi: "4 स्टार होटल व रिसॉर्ट, ट्विन/डबल शेयरिंग (एसी कमरे)" },
    { en: "Luxury air-conditioned private vehicle for all transfers", hi: "सभी स्थानांतरण के लिए लग्ज़री एसी निजी वाहन" },
    { en: "Breakfast, lunch & dinner — pure vegetarian Jain food, no onion, no garlic", hi: "नाश्ता, दोपहर व रात्रि भोजन — शुद्ध शाकाहारी जैन भोजन, बिना प्याज-लहसुन" },
    { en: "Hindi / English speaking guide lectures at every site", hi: "हर स्थल पर हिंदी/अंग्रेज़ी गाइड द्वारा कथा व जानकारी" },
    { en: "30 sacred & scenic places: Chilaw, Trincomalee, Sigiriya, Dambulla, Matale, Kandy, Ramboda, Nuwara Eliya, Kitulgala, Colombo", hi: "30 पावन व दर्शनीय स्थल: चिलाव, त्रिंकोमाली, सिगिरिया, दाम्बुला, माताले, कैंडी, रामबोडा, नुवारा एलिया, कितुलगाला, कोलंबो" },
    { en: "Organiser: Dr. J. P. Agrawal (9414248951)", hi: "आयोजक: डॉ. जे. पी. अग्रवाल (9414248951)" },
  ],
  gallery: [
    { src: `${IMG}/madampe-murugan.jpg`, en: "Murugan temple, Madampe", hi: "मुरुगन मंदिर, मदम्पे" },
    { src: `${IMG}/munneshwaram.jpg`, en: "Munneshwaram Shiva temple", hi: "मुन्नेश्वरम शिव मंदिर" },
    { src: `${IMG}/ravana-hot-wells.jpg`, en: "Ravana hot water wells, Kanniya", hi: "रावण गर्म जल कुएं, कन्निया" },
    { src: `${IMG}/koneswaram.jpg`, en: "Koneswaram, Trincomalee", hi: "कोनेश्वरम, त्रिंकोमाली" },
    { src: `${IMG}/sigiriya-aerial.jpg`, en: "Ravana's fort, Sigiriya", hi: "रावण का किला, सिगिरिया" },
    { src: `${IMG}/hill-temple.jpg`, en: "Hill-country Ramayana temple", hi: "पहाड़ी रामायण मंदिर" },
    { src: `${IMG}/sita-amman-murtis.jpg`, en: "Sita Amman temple, Sita Eliya", hi: "सीता अम्मन मंदिर, सीता एलिया" },
    { src: `${IMG}/ramboda-falls.jpg`, en: "Ramboda falls", hi: "रामबोडा जलप्रपात" },
    { src: `${IMG}/nallur-gopuram.jpg`, en: "Temple gopuram", hi: "मंदिर गोपुरम" },
    { src: `${IMG}/lotus-tower.jpg`, en: "Lotus Tower, Colombo", hi: "लोटस टावर, कोलंबो" },
  ],
  itinerary: [
    {
      dayEn: "Day 1 · 20 Jan",
      dayHi: "दिन 1 · 20 जन",
      titleEn: "Colombo Airport → Chilaw",
      titleHi: "कोलंबो एयरपोर्ट → चिलाव",
      descEn:
        "Warm welcome at Colombo airport by our representative; mineral water, money exchange and guide briefing. Drive to Chilaw visiting the replica Murugan temple at Madampe and the ancient Munneshwaram Shiva temple. Evening at leisure on Chilaw beach. Dinner & overnight in Chilaw.",
      descHi:
        "कोलंबो एयरपोर्ट पर हमारे प्रतिनिधि द्वारा स्वागत; पानी की बोतलें, मुद्रा विनिमय और गाइड द्वारा परिचय। चिलाव की ओर प्रस्थान — मार्ग में मदम्पे का मुरुगन मंदिर और प्राचीन मुन्नेश्वरम शिव मंदिर दर्शन। शाम चिलाव समुद्र तट पर विश्राम। रात्रि भोजन व ठहराव चिलाव में।",
    },
    {
      dayEn: "Day 2 · 21 Jan",
      dayHi: "दिन 2 · 21 जन",
      titleEn: "Chilaw → Trincomalee",
      titleHi: "चिलाव → त्रिंकोमाली",
      descEn:
        "After breakfast, darshan at Manavari Rama temple — where Shri Ram installed the sand Shivalingam. Continue to Trincomalee via Ravana's hot water wells at Kanniya and the Lakshmi Narayana Perumal temple at Nilaveli. Dinner & overnight in Trincomalee.",
      descHi:
        "नाश्ते के बाद मनावरी राम मंदिर दर्शन — जहां श्री राम ने बालू का शिवलिंग स्थापित किया। कन्निया में रावण के गर्म पानी के कुएं और निलावेली के लक्ष्मी नारायण पेरुमल मंदिर होते हुए त्रिंकोमाली। रात्रि भोजन व ठहराव त्रिंकोमाली में।",
    },
    {
      dayEn: "Day 3 · 22 Jan",
      dayHi: "दिन 3 · 22 जन",
      titleEn: "Trincomalee → Sigiriya → Dambulla → Matale",
      titleHi: "त्रिंकोमाली → सिगिरिया → दाम्बुला → माताले",
      descEn:
        "Early breakfast. Attend pooja at Shankari Devi Shakti Peetham, then Thirukoneswaram Shiva temple and Ravana Vettu (the rock cleft by Ravana). View Ravana's fort at Sigiriya (seen from below), the Golden Buddha at Dambulla and a herbal & spice garden in Matale. Evening darshan at Muthumariamman temple. Dinner & overnight in the Kandy / Matale area.",
      descHi:
        "जल्दी नाश्ता। शंकरी देवी शक्तिपीठ में पूजा, फिर थिरुकोनेश्वरम शिव मंदिर और रावण वेट्टु (रावण द्वारा काटी गई चट्टान)। सिगिरिया में रावण का किला (नीचे से दर्शन), दाम्बुला का स्वर्ण बुद्ध और माताले का हर्बल-मसाला उद्यान। शाम मुथुमारी अम्मन मंदिर दर्शन। रात्रि भोजन व ठहराव कैंडी/माताले क्षेत्र में।",
    },
    {
      dayEn: "Day 4 · 23 Jan",
      dayHi: "दिन 4 · 23 जन",
      titleEn: "Matale → Kandy → Ramboda → Nuwara Eliya",
      titleHi: "माताले → कैंडी → रामबोडा → नुवारा एलिया",
      descEn:
        "Visit the Temple of the Sacred Tooth Relic in Kandy and a gem museum. Climb into the tea country — tea plantation & factory, the Hanuman temple and waterfall at Ramboda, and the Gayathri Peetham Ramayana temple in Nuwara Eliya (‘Little England’, ~2,000 m). Dinner & overnight in Nuwara Eliya.",
      descHi:
        "कैंडी में दंत अवशेष मंदिर और रत्न संग्रहालय। चाय बागानों की ओर — चाय बागान व फैक्ट्री, रामबोडा का हनुमान मंदिर और जलप्रपात, तथा नुवारा एलिया (‘लिटिल इंग्लैंड’, ~2000 मी.) का गायत्री पीठम रामायण मंदिर। रात्रि भोजन व ठहराव नुवारा एलिया में।",
    },
    {
      dayEn: "Day 5 · 24 Jan",
      dayHi: "दिन 5 · 24 जन",
      titleEn: "Nuwara Eliya → Kitulgala → Colombo",
      titleHi: "नुवारा एलिया → कितुलगाला → कोलंबो",
      descEn:
        "Ashok Vatika (Ashoka Vanam) and Sita Amman temple at Sita Eliya — believed to be where Ravana held Sita Mata — then the Sita Agni Pariksha site at Divurumpola. St. Clair’s & Devon falls on the way; optional white-water rafting at Kitulgala. Check in at Colombo. Dinner & overnight in Colombo.",
      descHi:
        "सीता एलिया में अशोक वाटिका और सीता अम्मन मंदिर — जहां रावण ने सीता माता को रखा था — फिर दिवुरुम्पोला का सीता अग्नि परीक्षा स्थल। मार्ग में सेंट क्लेयर व डेवन जलप्रपात; कितुलगाला में वैकल्पिक रिवर राफ्टिंग। कोलंबो होटल में चेक-इन। रात्रि भोजन व ठहराव कोलंबो में।",
    },
    {
      dayEn: "Day 6 · 25 Jan",
      dayHi: "दिन 6 · 25 जन",
      titleEn: "Colombo darshan → Airport",
      titleHi: "कोलंबो दर्शन → एयरपोर्ट",
      descEn:
        "Panchamukha Anjaneyar Hanuman temple, Vibhishana temple and the historic Kelaniya temple. Colombo city tour — Independence Memorial, Lotus Tower, Old Parliament, floating market, Galle Face Green — and a shopping stop (ODEL / House of Fashion). Transfer to the airport for the return flight. Yatra Mangal!",
      descHi:
        "पंचमुखी आंजनेय हनुमान मंदिर, विभीषण मंदिर और ऐतिहासिक केलानिया मंदिर। कोलंबो शहर भ्रमण — इंडिपेंडेंस मेमोरियल, लोटस टावर, पुरानी संसद, फ्लोटिंग मार्केट, गॉल फेस ग्रीन — और खरीदारी (ODEL / हाउस ऑफ फैशन)। वापसी उड़ान हेतु एयरपोर्ट। यात्रा मंगलमय!",
    },
  ],
  includes: [
    { en: "Return flight tickets", hi: "आने-जाने का हवाई टिकट" },
    { en: "All transfers in an air-conditioned private vehicle", hi: "सभी स्थानांतरण एसी निजी वाहन में" },
    { en: "Accommodation in 4-star hotels, double / twin sharing AC rooms", hi: "4 स्टार होटल, डबल/ट्विन शेयरिंग एसी कमरे" },
    { en: "Breakfast, lunch & dinner — pure vegetarian Jain food without onion & garlic", hi: "नाश्ता, दोपहर व रात्रि भोजन — बिना प्याज-लहसुन का शुद्ध शाकाहारी जैन भोजन" },
    { en: "Entrance fees as per itinerary", hi: "कार्यक्रम अनुसार प्रवेश शुल्क" },
    { en: "English / Hindi speaking guide lectures", hi: "अंग्रेज़ी/हिंदी गाइड द्वारा जानकारी" },
    { en: "All current hotel taxes & service charges — no hidden costs", hi: "होटल के सभी वर्तमान कर व सेवा शुल्क — कोई छिपा खर्च नहीं" },
  ],
  excludes: [
    { en: "White-water rafting at Kitulgala (optional, approx. USD 10 per person)", hi: "कितुलगाला राफ्टिंग (वैकल्पिक, लगभग USD 10 प्रति व्यक्ति)" },
    { en: "Soft drinks and beverages during the tour", hi: "यात्रा के दौरान शीतल पेय व अन्य पेय" },
    { en: "Expenses of a personal nature", hi: "व्यक्तिगत प्रकृति के खर्च" },
  ],
  hotels: [
    { dayEn: "Night 1", dayHi: "रात 1", cityEn: "Chilaw", cityHi: "चिलाव", hotel: "Carolina Beach" },
    { dayEn: "Night 2", dayHi: "रात 2", cityEn: "Trincomalee", cityHi: "त्रिंकोमाली", hotel: "Trincomalee Beach" },
    { dayEn: "Night 3", dayHi: "रात 3", cityEn: "Kandy / Matale", cityHi: "कैंडी / माताले", hotel: "Lavendish Hills" },
    { dayEn: "Night 4", dayHi: "रात 4", cityEn: "Nuwara Eliya", cityHi: "नुवारा एलिया", hotel: "Araliya Red" },
    { dayEn: "Night 5", dayHi: "रात 5", cityEn: "Colombo", cityHi: "कोलंबो", hotel: "Best Western Elyon" },
  ],
  paymentPolicy: [
    { en: "Advance of ₹8,500 per person to confirm hotel reservations", hi: "होटल आरक्षण हेतु ₹8,500 प्रति व्यक्ति अग्रिम" },
    { en: "Balance payable up to five days before the arrival date", hi: "शेष राशि आगमन तिथि से पांच दिन पहले तक देय" },
  ],
  cancellationPolicy: [
    { en: "Cancellation must be notified at least 15 days before arrival", hi: "रद्दीकरण की सूचना आगमन से कम से कम 15 दिन पहले दें" },
    { en: "More than 72 hours before the tour: 25% of tour cost", hi: "यात्रा से 72 घंटे से अधिक पहले: यात्रा राशि का 25%" },
    { en: "Less than 72 hours before the tour: 50% of tour cost", hi: "यात्रा से 72 घंटे से कम पहले: यात्रा राशि का 50%" },
    { en: "Within 24 hours of the tour: 100% of tour cost", hi: "यात्रा से 24 घंटे के भीतर: यात्रा राशि का 100%" },
    { en: "Charges apply for any change of tour dates", hi: "यात्रा तिथि में किसी भी बदलाव पर शुल्क लागू" },
  ],
  notes: [
    { en: "Hotel check-in 14:00, check-out 12:00. Early check-in / late check-out subject to availability.", hi: "होटल चेक-इन 14:00, चेक-आउट 12:00। जल्दी चेक-इन/देर से चेक-आउट उपलब्धता पर।" },
    { en: "A valid passport is required for travel to Sri Lanka.", hi: "श्रीलंका यात्रा हेतु वैध पासपोर्ट आवश्यक है।" },
    { en: "Hotels listed are planned; equivalent 4-star properties may be used if unavailable.", hi: "सूचीबद्ध होटल प्रस्तावित हैं; उपलब्ध न होने पर समकक्ष 4 स्टार होटल।" },
  ],
};

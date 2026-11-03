import { sriLankaRamayana2027 } from "./sri-lanka";

export const IMAGES = {
  hero: "https://res.cloudinary.com/dbtn0vhtf/image/upload/v1784649969/small_govid_dev-Picsart-AiImageEnhancer_bpyffr.jpg",
  varanasi: "https://images.unsplash.com/photo-1741485332074-fa55a9c68fda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWYXJhbmFzaSUyMGdoYXQlMjBzdW5yaXNlfGVufDF8fHx8MTc3MjEyNjA2NXww&ixlib=rb-4.1.0&q=80&w=1080",
  //kedarnath: "https://images.unsplash.com/photo-1706752227538-d3a0c4c9cd2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaGFyJTIwRGhhbSUyMEtlZGFybmF0aCUyMHRlbXBsZXxlbnwxfHx8fDE3NzIxMjYwNjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  kedarnath:"https://res.cloudinary.com/dbtn0vhtf/image/upload/v1782474434/shikhar-sharma-Pf-rTGteWyc-unsplash_oskexr.jpg",
  vrindavan: "https://images.unsplash.com/photo-1723741799382-363a277a05d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWcmluZGF2YW4lMjB0ZW1wbGUlMjBLcmlzaG5hfGVufDF8fHx8MTc3MjEyNjA2NXww&ixlib=rb-4.1.0&q=80&w=1080",
  tirupati: "https://images.unsplash.com/photo-1701309171892-ddd6161fb004?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUaXJ1cGF0aSUyMEJhbGFqaSUyMHRlbXBsZXxlbnwxfHx8fDE3NzIxMjYwNjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  dwarka: "https://res.cloudinary.com/dbtn0vhtf/image/upload/v1783240553/somnath-temple-banner-1536x559_lmth65.jpg",
  pilgrims: "https://images.unsplash.com/photo-1758811402999-3551dd15d357?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIaW5kdSUyMHBpbGdyaW1zJTIwaG9seSUyMHJpdmVyfGVufDF8fHx8MTc3MjEyNjA2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
  architecture: "https://images.unsplash.com/photo-1759990251993-3e350f67cd31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB0ZW1wbGUlMjBhcmNoaXRlY3R1cmUlMjBvcm5hdGV8ZW58MXx8fHwxNzcyMTI2MDY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  aarti: "https://images.unsplash.com/photo-1766344599202-233ef34a3482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIaW5kdSUyMHByYXllciUyMGNlcmVtb255JTIwYWFydGl8ZW58MXx8fHwxNzcyMTI2MDY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  mathura: "https://images.unsplash.com/photo-1703233491579-5a32609206a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYXRodXJhJTIwdGVtcGxlJTIwYW5jaWVudHxlbnwxfHx8fDE3NzIxMjYwNjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  meditation: "https://images.unsplash.com/photo-1763336342966-51e84b8f052f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGlyaXR1YWwlMjBtZWRpdGF0aW9uJTIwdGVtcGxlJTIwcGVhY2VmdWx8ZW58MXx8fHwxNzcyMTI2MDY5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  himalaya: "https://images.unsplash.com/photo-1767763713180-4ecf77279861?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIaW1hbGF5YSUyMG1vdW50YWluJTIwc25vdyUyMHBpbGdyaW1hZ2V8ZW58MXx8fHwxNzcyMTI2MDcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  festival: "https://images.unsplash.com/photo-1761810255396-a52187ceec8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIaW5kdSUyMGRldm90ZWVzJTIwZmVzdGl2YWwlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzIxMjYwNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  ganges: "https://images.unsplash.com/photo-1762006222577-0d44ab596183?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWNyZWQlMjByaXZlciUyMEdhbmdlcyUyMGNlcmVtb255fGVufDF8fHx8MTc3MjEyNjA3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
  nepal: "https://res.cloudinary.com/dbtn0vhtf/image/upload/v1783240747/images_idgrab.jpg",
  puri: "https://res.cloudinary.com/dbtn0vhtf/image/upload/v1783240249/327_yzs6ze.jpg",
  southYatraHero: "/images/south-hero.jpg",
  dwarkaSomnathHero: "/images/dwarka-somnath.jpg",
  rameshwaramCorridor: "/images/rameshwaram-corridor.jpg",
  tirupatiBalaji: "/images/tirupati-gopuram.jpg",
};

export interface TourPackage {
  id: string;
  nameEn: string;
  nameHi: string;
  descEn: string;
  descHi: string;
  duration: string;
  durationHi: string;
  price: string;
  bookingAmount?: string;
  datesEn: string;
  datesHi: string;
  image: string;
  highlights: { en: string; hi: string }[];
  itinerary: { dayEn: string; dayHi: string; titleEn: string; titleHi: string; descEn: string; descHi: string }[];
  includes: { en: string; hi: string }[];
  excludes: { en: string; hi: string }[];
  /** Optional extras used by richer package pages */
  region?: "india" | "international";
  featured?: boolean;
  tagEn?: string;
  tagHi?: string;
  startDate?: string; // ISO date, used for sorting / "upcoming" badges
  gallery?: { src: string; en: string; hi: string }[];
  hotels?: { dayEn: string; dayHi: string; cityEn: string; cityHi: string; hotel: string }[];
  paymentPolicy?: { en: string; hi: string }[];
  cancellationPolicy?: { en: string; hi: string }[];
  notes?: { en: string; hi: string }[];
  brochure?: string;
}

export const tourPackages: TourPackage[] = [
  sriLankaRamayana2027,
  {
    id: "char-dham",
    nameEn: "Char Dham Yatra 2026",
    nameHi: "चार धाम यात्रा 2026",
    descEn: "Sri Madanmohan Tirth Yatra, Jaipur presents Char Dham 2026 with two batches (30 Apr–13 May or 28 May–10 Jun). AC 27-seater bus from Jaipur, AC rooms in Haridwar, Kedarnath & Badrinath stays, satvik meals without onion/garlic, and guided darshan across all four dhams.",
    descHi: "श्री मदनमोहन तीर्थ यात्रा, जयपुर द्वारा चार धाम 2026 (दो बैच: 30 अप्रैल–13 मई या 28 मई–10 जून)। जयपुर से एसी 27 सीटर बस, हरिद्वार में एसी कमरे, केदारनाथ और बद्रीनाथ में ठहराव, बिना प्याज-लहसुन के सत्स्वादी भोजन और चारों धामों का मार्गदर्शित दर्शन।",
    duration: "14 Days / 13 Nights",
    durationHi: "14 दिन / 13 रातें",
    price: "₹27,000",
    datesEn: "23 Sept – 06 Oct 2026",
    startDate: "2026-09-23",
    datesHi: "23 सितंबर – 06 अक्टूबर 2026",
    image: IMAGES.kedarnath,
    highlights: [
      { en: "AC 27-seater bus from Jaipur (round trip)", hi: "जयपुर से एसी 27 सीटर बस (आना-जाना)" },
      { en: "Booking ₹2,000 non-refundable", hi: "बुकिंग ₹2,000 नॉन-रिफंडेबल" },
      { en: "Darshan: Shukratal, Lakshagrah, Shiv Gufa, Haridwar, Yamunotri, Gangotri, Kedarnath, Badrinath", hi: "दर्शन: शुक्रताल, लाक्षागृह, शिव गुफा, हरिद्वार, यमुनोत्री, गंगोत्री, केदारनाथ, बद्रीनाथ" },
    ],
    itinerary: [
      { dayEn: "Day 1", dayHi: "दिन 1", titleEn: "Jaipur to Haridwar (9:00 PM bus)", titleHi: "जयपुर से हरिद्वार (रात 9:00 बस)", descEn: "Departure 30 Apr 9:00 PM from Jaipur by AC 27-seater bus towards Haridwar.", descHi: "30 अप्रैल रात 9:00 बजे जयपुर से एसी 27 सीटर बस द्वारा हरिद्वार के लिए प्रस्थान।" },
      { dayEn: "Day 2", dayHi: "दिन 2", titleEn: "Haridwar stay & Ganga snan", titleHi: "हरिद्वार ठहराव और गंगा स्नान", descEn: "01 May: Check-in AC rooms Haridwar. Ganga snan and Har Ki Pauri aarti.", descHi: "01 मई: हरिद्वार में एसी कमरों में ठहराव। गंगा स्नान और हर की पौड़ी आरती।" },
      { dayEn: "Day 3", dayHi: "दिन 3", titleEn: "Haridwar to Barkot via Lakhamandal", titleHi: "हरिद्वार से बड़कोट (लाक्षागृह)", descEn: "02 May: Travel to Barkot; Lakhamandal/Lakshagrah darshan en route. Stay in Barkot.", descHi: "02 मई: बड़कोट प्रस्थान; मार्ग में लाक्षागृह/लखामंडल दर्शन। बड़कोट में ठहराव।" },
      { dayEn: "Day 4", dayHi: "दिन 4", titleEn: "Yamunotri darshan", titleHi: "यमुनोत्री दर्शन", descEn: "03 May: Yamunotri trek/doli/horse as needed; darshan and return to Barkot stay.", descHi: "03 मई: यमुनोत्री ट्रेक/डोली/घोड़ा आवश्यकता अनुसार; दर्शन कर बड़कोट वापसी।" },
      { dayEn: "Day 5", dayHi: "दिन 5", titleEn: "Barkot to Uttarkashi (Shiv Gufa)", titleHi: "बड़कोट से उत्तरकाशी (शिव गुफा)", descEn: "04 May: Move to Uttarkashi; Shiv Gufa darshan. Night stay Uttarkashi.", descHi: "04 मई: उत्तरकाशी प्रस्थान; शिव गुफा दर्शन। रात्रि विश्राम उत्तरकाशी।" },
      { dayEn: "Day 6", dayHi: "दिन 6", titleEn: "Gangotri darshan", titleHi: "गंगोत्री दर्शन", descEn: "05 May: Visit Gangotri temple, holy dip at Bhagirathi. Return Uttarkashi stay.", descHi: "05 मई: गंगोत्री मंदिर दर्शन, भागीरथी में पवित्र स्नान। उत्तरकाशी में ठहराव।" },
      { dayEn: "Day 7", dayHi: "दिन 7", titleEn: "Uttarkashi to Narayan Koti", titleHi: "उत्तरकाशी से नारायण कोटी", descEn: "06 May: Travel towards Kedarnath side; stay at Narayan Koti.", descHi: "06 मई: केदारनाथ मार्ग में यात्रा; नारायण कोटी में ठहराव।" },
      { dayEn: "Day 8", dayHi: "दिन 8", titleEn: "Kedarnath darshan (hill stay)", titleHi: "केदारनाथ दर्शन (पहाड़ी ठहराव)", descEn: "07 May: Kedarnath trek/pony/heli as arranged; evening stay near Kedarnath hill.", descHi: "07 मई: केदारनाथ ट्रेक/पोनी/हेली व्यवस्था अनुसार; शाम का ठहराव केदारनाथ पहाड़ी पर।" },
      { dayEn: "Day 9", dayHi: "दिन 9", titleEn: "Return to Narayan Koti", titleHi: "नारायण कोटी वापसी", descEn: "08 May: Descend from Kedarnath hill; overnight at Narayan Koti.", descHi: "08 मई: केदारनाथ पहाड़ी से उतरकर नारायण कोटी में रात्रि विश्राम।" },
      { dayEn: "Day 10", dayHi: "दिन 10", titleEn: "Narayan Koti to Badrinath", titleHi: "नारायण कोटी से बद्रीनाथ", descEn: "09 May: Travel to Badrinath; temple darshan and stay in Badrinath.", descHi: "09 मई: बद्रीनाथ प्रस्थान; मंदिर दर्शन और बद्रीनाथ में ठहराव।" },
      { dayEn: "Day 11", dayHi: "दिन 11", titleEn: "Badrivishal, Mana, Vyas Gufa", titleHi: "बद्रीविशाल, माणा, व्यास गुफा", descEn: "10 May: Badrivishal darshan, Mana village visit, Vyas Gufa, Tapt Kund. Night stay Badrinath.", descHi: "10 मई: बद्रीविशाल दर्शन, माणा गाँव, व्यास गुफा, तप्त कुंड। रात्रि विश्राम बद्रीनाथ।" },
      { dayEn: "Day 12", dayHi: "दिन 12", titleEn: "Badrinath to Haridwar", titleHi: "बद्रीनाथ से हरिद्वार", descEn: "11 May: Return towards Haridwar; night stay Haridwar.", descHi: "11 मई: हरिद्वार की ओर वापसी; रात्रि विश्राम हरिद्वार।" },
      { dayEn: "Day 13", dayHi: "दिन 13", titleEn: "Haridwar snan, Shukratal, return", titleHi: "हरिद्वार स्नान, शुक्रताल, वापसी", descEn: "12 May: Ganga snan at Har Ki Pauri, Shukratal darshan; depart for Jaipur.", descHi: "12 मई: हर की पौड़ी गंगा स्नान, शुक्रताल दर्शन; जयपुर के लिए प्रस्थान।" },
      { dayEn: "Day 14", dayHi: "दिन 14", titleEn: "Arrival Jaipur", titleHi: "जयपुर आगमन", descEn: "13 May: Arrival back in Jaipur. Yatra mangal.", descHi: "13 मई: जयपुर आगमन। यात्रा मंगल।" },
    ],
    includes: [
      { en: "AC 27-seater bus from Jaipur for full tour", hi: "पूरी यात्रा के लिए जयपुर से एसी 27 सीटर बस" },
      { en: "AC rooms in Haridwar; non-AC rooms at other stops", hi: "हरिद्वार में एसी कमरे; अन्य स्थानों पर नॉन-एसी कमरे" },
      { en: "Lunch and dinner included (satvik, no onion/garlic)", hi: "लंच और डिनर शामिल (सात्विक, बिना प्याज-लहसुन)" },
      { en: "Kedarnath hill stay with dinner included", hi: "केदारनाथ पहाड़ी ठहराव व डिनर शामिल" },
      { en: "Two-night stay in Badrinath", hi: "बद्रीनाथ में दो रात ठहराव" },
      { en: "Darshan coordination: Shukratal, Lakshagrah, Shiv Gufa, Yamunotri, Gangotri, Kedarnath, Badrinath", hi: "दर्शन समन्वय: शुक्रताल, लाक्षागृह, शिव गुफा, यमुनोत्री, गंगोत्री, केदारनाथ, बद्रीनाथ" },
    ],
    excludes: [
      { en: "Helicopter, horse, palki, taxi, auto charges", hi: "हेलीकॉप्टर, घोड़ा, पालकी, टैक्सी, ऑटो शुल्क" },
      { en: "Coffee, cold drinks, and personal expenses", hi: "कॉफी, कोल्ड ड्रिंक और व्यक्तिगत खर्च" },
      { en: "Special puja or services beyond itinerary", hi: "विशेष पूजा या यात्रा से बाहर की सेवाएं" },
      { en: "Travel/medical insurance", hi: "यात्रा/चिकित्सा बीमा" },
    ],
  },
  // {
  //   id: "vrindavan-mathura",
  //   nameEn: "Vrindavan-Mathura Tour",
  //   nameHi: "वृंदावन-मथुरा दर्शन",
  //   descEn: "Visit the divine land of Lord Krishna - Vrindavan and Mathura. Experience the enchanting temples, ghats, and the spiritual essence of Braj Bhoomi where Lord Krishna spent his childhood.",
  //   descHi: "भगवान कृष्ण की दिव्य भूमि - वृंदावन और मथुरा के दर्शन करें। ब्रज भूमि के मनमोहक मंदिरों, घाटों और आध्यात्मिक सार का अनुभव करें जहां भगवान कृष्ण ने अपना बचपन बिताया।",
  //   duration: "4 Days / 3 Nights",
  //   durationHi: "4 दिन / 3 रातें",
  //   price: "₹8,999",
  //   datesEn: "Dates to be Announced",
  //   datesHi: "तारीखें घोषित की जाएंगी",
  //   image: IMAGES.vrindavan,
  //   highlights: [
  //     { en: "Banke Bihari Temple darshan", hi: "बांके बिहारी मंदिर दर्शन" },
  //     { en: "Krishna Janmabhoomi visit", hi: "कृष्ण जन्मभूमि दर्शन" },
  //     { en: "Govardhan Parikrama", hi: "गोवर्धन परिक्रमा" },
  //     { en: "Yamuna Aarti at Keshi Ghat", hi: "केशी घाट पर यमुना आरती" },
  //     { en: "ISKCON Temple visit", hi: "इस्कॉन मंदिर दर्शन" },
  //   ],
  //   itinerary: [
  //     { dayEn: "Day 1", dayHi: "दिन 1", titleEn: "Arrival in Mathura", titleHi: "मथुरा आगमन", descEn: "Arrive Mathura. Visit Krishna Janmabhoomi temple, Dwarkadhish temple, and Vishram Ghat. Evening Yamuna Aarti.", descHi: "मथुरा पहुंचें। कृष्ण जन्मभूमि मंदिर, द्वारकाधीश मंदिर और विश्राम घाट के दर्शन। शाम को यमुना आरती।" },
  //     { dayEn: "Day 2", dayHi: "दिन 2", titleEn: "Vrindavan Temples", titleHi: "वृंदावन मंदिर दर्शन", descEn: "Full day in Vrindavan. Visit Banke Bihari, Radha Raman, ISKCON, Prem Mandir, Nidhivan, and Rangji temple.", descHi: "वृंदावन में पूरा दिन। बांके बिहारी, राधा रमण, इस्कॉन, प्रेम मंदिर, निधिवन और रंगजी मंदिर के दर्शन।" },
  //     { dayEn: "Day 3", dayHi: "दिन 3", titleEn: "Govardhan & Barsana", titleHi: "गोवर्धन और बरसाना", descEn: "Visit Govardhan Hill for parikrama. Visit Barsana - birthplace of Radha Rani. Ladli Ji temple darshan.", descHi: "गोवर्धन पर्वत की परिक्रमा। बरसाना - राधा रानी का जन्मस्थान। लाडली जी मंदिर दर्शन।" },
  //     { dayEn: "Day 4", dayHi: "दिन 4", titleEn: "Departure", titleHi: "वापसी", descEn: "Morning visit to Galteshwar Mahadev and Kusum Sarovar. Departure with blessed memories.", descHi: "सुबह गल्तेश्वर महादेव और कुसुम सरोवर के दर्शन। पवित्र यादों के साथ वापसी।" },
  //   ],
  //   includes: [
  //     { en: "AC transport from Delhi", hi: "दिल्ली से एसी परिवहन" },
  //     { en: "3-star hotel accommodation", hi: "3-स्टार होटल में ठहरना" },
  //     { en: "Breakfast and dinner", hi: "नाश्ता और रात का खाना" },
  //     { en: "All temple visits with guide", hi: "गाइड के साथ सभी मंदिर दर्शन" },
  //     { en: "Govardhan Parikrama arrangements", hi: "गोवर्धन परिक्रमा की व्यवस्था" },
  //   ],
  //   excludes: [
  //     { en: "Personal expenses & donations", hi: "व्यक्तिगत खर्च और दान" },
  //     { en: "Lunch", hi: "दोपहर का भोजन" },
  //     { en: "Special puja charges", hi: "विशेष पूजा शुल्क" },
  //   ],
  // },
  // {
  //   id: "kashi-vishwanath",
  //   nameEn: "Kashi Vishwanath Yatra",
  //   nameHi: "काशी विश्वनाथ यात्रा",
  //   descEn: "Visit the ancient city of Varanasi - the spiritual capital of India. Experience the divine Ganga Aarti, visit Kashi Vishwanath Jyotirlinga, and explore the timeless ghats along the sacred Ganges.",
  //   descHi: "वाराणसी के प्राचीन शहर - भारत की आध्यात्मिक राजधानी के दर्शन करें। दिव्य गंगा आरती का अनुभव करें, काशी विश्वनाथ ज्योतिर्लिंग के दर्शन करें और पवित्र गंगा के किनारे शाश्वत घाटों का अन्वेषण करें।",
  //   duration: "5 Days / 4 Nights",
  //   durationHi: "5 दिन / 4 रातें",
  //   price: "₹12,999",
  //   datesEn: "Dates to be Announced",
  //   datesHi: "तारीखें घोषित की जाएंगी",
  //   image: IMAGES.varanasi,
  //   highlights: [
  //     { en: "Kashi Vishwanath Jyotirlinga darshan", hi: "काशी विश्वनाथ ज्योतिर्लिंग दर्शन" },
  //     { en: "Ganga Aarti at Dashashwamedh Ghat", hi: "दशाश्वमेध घाट पर गंगा आरती" },
  //     { en: "Boat ride on the Ganges at sunrise", hi: "सूर्योदय पर गंगा नौका विहार" },
  //     { en: "Sarnath Buddhist site visit", hi: "सारनाथ बौद्ध स्थल दर्शन" },
  //     { en: "Prayagraj Sangam visit", hi: "प्रयागराज संगम दर्शन" },
  //   ],
  //   itinerary: [
  //     { dayEn: "Day 1", dayHi: "दिन 1", titleEn: "Arrival in Varanasi", titleHi: "वाराणसी आगमन", descEn: "Arrive Varanasi. Check-in hotel. Evening Ganga Aarti at Dashashwamedh Ghat - a mesmerizing ceremony with thousands of diyas.", descHi: "वाराणसी पहुंचें। होटल चेक-इन। शाम को दशाश्वमेध घाट पर गंगा आरती - हजारों दीयों के साथ मनमोहक समारोह।" },
  //     { dayEn: "Day 2", dayHi: "दिन 2", titleEn: "Varanasi Temple Tour", titleHi: "वाराणसी मंदिर दर्शन", descEn: "Early morning boat ride. Visit Kashi Vishwanath temple, Annapurna temple, Sankat Mochan Hanuman temple, Tulsi Manas temple, and BHU.", descHi: "सुबह जल्दी नौका विहार। काशी विश्वनाथ मंदिर, अन्नपूर्णा मंदिर, संकट मोचन हनुमान मंदिर, तुलसी मानस मंदिर और BHU दर्शन।" },
  //     { dayEn: "Day 3", dayHi: "दिन 3", titleEn: "Sarnath Excursion", titleHi: "सारनाथ भ्रमण", descEn: "Visit Sarnath where Lord Buddha gave his first sermon. See Ashoka Pillar, Dhamek Stupa, and Sarnath Museum.", descHi: "सारनाथ के दर्शन जहां भगवान बुद्ध ने अपना पहला उपदेश दिया। अशोक स्तंभ, धमेक स्तूप और सारनाथ संग्रहालय देखें।" },
  //     { dayEn: "Day 4", dayHi: "दिन 4", titleEn: "Prayagraj Visit", titleHi: "प्रयागराज दर्शन", descEn: "Day trip to Prayagraj. Visit Triveni Sangam (confluence of Ganga, Yamuna, Saraswati). Holy dip and boat ride at Sangam.", descHi: "प्रयागराज का दिन भ्रमण। त्रिवेणी संगम (गंगा, यमुना, सरस्वती का संगम) दर्शन। संगम पर पवित्र स्नान और नौका विहार।" },
  //     { dayEn: "Day 5", dayHi: "दिन 5", titleEn: "Departure", titleHi: "वापसी", descEn: "Morning free for shopping (Banarasi silk sarees). Departure with blessed memories.", descHi: "सुबह खरीदारी (बनारसी सिल्क साड़ियां) के लिए खाली। पवित्र यादों के साथ वापसी।" },
  //   ],
  //   includes: [
  //     { en: "Train/AC bus transport", hi: "ट्रेन/एसी बस परिवहन" },
  //     { en: "Hotel near Kashi Vishwanath", hi: "काशी विश्वनाथ के पास होटल" },
  //     { en: "All meals (breakfast & dinner)", hi: "सभी भोजन (नाश्ता और रात का खाना)" },
  //     { en: "Boat rides included", hi: "नौका विहार शामिल" },
  //     { en: "Expert local guide", hi: "अनुभवी स्थानीय गाइड" },
  //   ],
  //   excludes: [
  //     { en: "Special puja & donation", hi: "विशेष पूजा और दान" },
  //     { en: "Shopping expenses", hi: "खरीदारी का खर्च" },
  //     { en: "Personal expenses", hi: "व्यक्तिगत खर्च" },
  //   ],
  // },
  {
    id: "dwarka-somnath",
    nameEn: "Dwarka-Somnath Yatra 2027",
    nameHi: "द्वारका-सोमनाथ यात्रा 2027",
    descEn: "Sri Madanmohan Tirth Yatra Jaipur presents Dwarka-Somnath Yatra (05 Jan to 11 Jan). Travel comfortably by 3-AC or 2-AC Train from Jaipur. Package includes AC Bus, AC Rooms, Lunch, Dinner and Breakfast Prasadam (strictly without onion & garlic), and train meals (Lunch & Dinner) included. Complete Darshan of Dwarkadish Temple, Rukmani Temple, Nageswar Jyotirling, Bet Dwarka, Gopi Tala, Somnath (Jyotirling), Gir, and Diu. Two night stay in Dwarka and Two nights stay at Somnath. To book your seat kindly contact Dr J P Agrawal (9414248951).",
    descHi: "श्री मदनमोहन तीर्थ यात्रा जयपुर द्वारा आयोजित द्वारका-सोमनाथ यात्रा (05 जनवरी से 11 जनवरी)। जयपुर से 3-AC या 2-AC ट्रेन द्वारा यात्रा। एसी बस, एसी रूम्स, ट्रेन में प्रसादम (लंच व डिनर) और बिना लहसुन-प्याज का सात्विक भोजन (नाश्ता, दोपहर व रात्रि भोजन)। प्रमुख दर्शन: द्वारकाधीश मंदिर, रुक्मिणी मंदिर, नागेश्वर ज्योतिर्लिंग, बेट द्वारका, गोपी तालाब, सोमनाथ ज्योतिर्लिंग, गिर नेशनल पार्क और दीव बीच। द्वारका में 2 रात व सोमनाथ में 2 रात ठहराव। सीट बुकिंग हेतु संपर्क करें: डॉ. जे. पी. अग्रवाल (9414248951)।",
    duration: "7 Days / 6 Nights",
    durationHi: "7 दिन / 6 रातें",
    price: "₹17,000",
    bookingAmount: "₹5,000",
    datesEn: "05 Jan – 11 Jan 2027",
    startDate: "2027-01-05",
    featured: true,
    datesHi: "05 जनवरी – 11 जनवरी 2027",
    image: IMAGES.dwarkaSomnathHero,
    highlights: [
      { en: "3-AC Train tickets from Jaipur included (2-AC option available)", hi: "जयपुर से 3-AC ट्रेन टिकट शामिल (2-AC का विकल्प भी उपलब्ध)" },
      { en: "Booking Advance: ₹5,000/- per person", hi: "बुकिंग राशि: ₹5,000/- अग्रिम प्रति व्यक्ति" },
      { en: "Two nights stay in Dwarka and Two nights stay at Somnath (AC Rooms)", hi: "द्वारका में 2 रात और सोमनाथ में 2 रात एसी कमरों में ठहराव" },
      { en: "Darshan: Dwarkadish Temple, Rukmani, Nageswar Jyotirling, Bet Dwarka, Gopi Tala, Somnath (Jyotirling), Gir, Diu", hi: "दर्शन: द्वारकाधीश मंदिर, रुक्मिणी, नागेश्वर ज्योतिर्लिंग, बेट द्वारका, गोपी तालाब, सोमनाथ (ज्योतिर्लिंग), गिर, दीव" },
      { en: "Pure Satvik Prasadam (without onion/garlic) + Train Meals (Lunch & Dinner)", hi: "शुद्ध सात्विक प्रसादम (बिना प्याज-लहसुन) + ट्रेन में लंच व डिनर प्रसादम" },
      { en: "Auto charges are included in package", hi: "ऑटो रिक्शा किराया पैकेज में शामिल है" },
      { en: "Contact Dr J P Agrawal: 9414248951", hi: "संपर्क: डॉ. जे. पी. अग्रवाल (9414248951)" }
    ],
    itinerary: [
      { dayEn: "Day 1", dayHi: "दिन 1", titleEn: "Departure from Jaipur by Train", titleHi: "जयपुर से ट्रेन द्वारा प्रस्थान", descEn: "Departure from Jaipur by 3-AC OR 2-AC train. Reserved berths and fresh pure Vaishnava dinner prasadam served on board.", descHi: "जयपुर से 3-AC या 2-AC ट्रेन द्वारा प्रस्थान। आरक्षित बर्थ एवं ट्रेन में रात्रि प्रसादम।" },
      { dayEn: "Day 2", dayHi: "दिन 2", titleEn: "Arrival at Dwarka & Stay & Dwarkadish Darshan", titleHi: "द्वारका आगमन, विश्राम एवं द्वारकाधीश दर्शन", descEn: "Arrival at Dwarka and stay at Dwarka in AC rooms. Divine evening Darshan of Lord Dwarkadhish at Jagat Mandir and Gomti Ghat. Stay at Dwarka (Night 1).", descHi: "द्वारका आगमन और एसी कमरों में ठहराव। जगत मंदिर में श्री द्वारकाधीश जी के पावन संध्या दर्शन। द्वारका में पहली रात का ठहराव।" },
      { dayEn: "Day 3", dayHi: "दिन 3", titleEn: "Nageswar Jyotirling, Gopi Tala, Bet Dwarka Darshan", titleHi: "नागेश्वर ज्योतिर्लिंग, गोपी तालाब, बेट द्वारका दर्शन", descEn: "Sacred darshan of Nageswar Jyotirling, holy Gopi Tala, boat crossing to Bet Dwarka, and Rukmani Temple darshan. Stay at Dwarka (Night 2).", descHi: "नागेश्वर ज्योतिर्लिंग दर्शन, पवित्र गोपी तालाब, बेट द्वारका कृष्ण मंदिर और रुक्मिणी मंदिर दर्शन। द्वारका में दूसरी रात का ठहराव।" },
      { dayEn: "Day 4", dayHi: "दिन 4", titleEn: "Depart to Somnath and Stay at Somnath", titleHi: "सोमनाथ प्रस्थान एवं सोमनाथ में ठहराव", descEn: "Depart to holy Somnath by AC Bus and stay at Somnath in AC rooms. Attend the magnificent evening Aarti & Sound-Light show at Somnath (Jyotirling) on the ocean shore. Stay at Somnath (Night 1).", descHi: "एसी बस द्वारा सोमनाथ के लिए प्रस्थान और एसी कमरों में ठहराव। समुद्र तट पर स्थित सोमनाथ (ज्योतिर्लिंग) की भव्य संध्या आरती व दर्शन। सोमनाथ में पहली रात का ठहराव।" },
      { dayEn: "Day 5", dayHi: "दिन 5", titleEn: "Depart to Diu Beach and Gir National Park, Stay at Somnath", titleHi: "दीव बीच और गिर नेशनल पार्क भ्रमण, सोमनाथ में ठहराव", descEn: "Depart to Diu beach coastal promenade and Gir National Park forest borders. Return to Somnath for evening darshan. Stay at Somnath (Night 2).", descHi: "दीव बीच और गिर नेशनल पार्क का भ्रमण। शाम को सोमनाथ वापसी व दर्शन। सोमनाथ में दूसरी रात का ठहराव।" },
      { dayEn: "Day 6", dayHi: "दिन 6", titleEn: "Depart to Jaipur by Train", titleHi: "जयपुर के लिए ट्रेन द्वारा प्रस्थान", descEn: "Morning prayers at Somnath. Depart to Jaipur by train with onboard lunch & dinner prasadam served.", descHi: "सोमनाथ में दर्शन उपरांत जयपुर के लिए ट्रेन द्वारा प्रस्थान। ट्रेन में लंच व डिनर प्रसादम।" },
      { dayEn: "Day 7", dayHi: "दिन 7", titleEn: "Arrival to Jaipur - Yatra Mangal", titleHi: "जयपुर आगमन — यात्रा मंगल", descEn: "Arrival to Jaipur Junction. Sacred Saurashtra pilgrimage concludes with divine blessings. Yatra Mangal!", descHi: "सकुशल जयपुर आगमन। भगवान द्वारकाधीश व सोमनाथ महादेव के आशीर्वाद से यात्रा संपन्न। यात्रा मंगल!" },
    ],
    includes: [
      { en: "3-AC Train tickets from Jaipur and return (2-AC option available)", hi: "जयपुर से आने-जाने के 3-AC ट्रेन टिकट (2-AC का विकल्प उपलब्ध)" },
      { en: "AC Bus for entire road travel & local sightseeing", hi: "पूरी यात्रा में आरामदायक एसी बस सुविधा" },
      { en: "AC Rooms: Two night stay in Dwarka and Two nights stay at Somnath", hi: "एसी कमरे: द्वारका में 2 रात और सोमनाथ में 2 रात ठहराव" },
      { en: "Breakfast, Lunch and Dinner (without onion garlic) included in package", hi: "नाश्ता, दोपहर व रात्रि भोजन (बिना प्याज-लहसुन का शुद्ध सात्विक भोजन)" },
      { en: "Prasadam in train (Lunch and Dinner) included in package", hi: "ट्रेन में प्रसादम (लंच और डिनर) पैकेज में शामिल है" },
      { en: "Auto charges are included in package", hi: "लोकल ऑटो रिक्शा किराया पैकेज में शामिल है" },
      { en: "Complete guidance by Dr J P Agrawal (9414248951)", hi: "डॉ. जे. पी. अग्रवाल (9414248951) द्वारा व्यक्तिगत मार्गदर्शन" },
    ],
    excludes: [
      { en: "Rs 5000/- booking amount (advance token required)", hi: "₹5,000/- बुकिंग राशि अग्रिम टोकन" },
      { en: "Coffee, colddrink are not included in package", hi: "कॉफी, कोल्डड्रिंक पैकेज में शामिल नहीं है" },
      { en: "Boat riding, taxi charges are not included in package", hi: "बोट राइडिंग, स्पेशल टैक्सी चार्ज पैकेज में शामिल नहीं है" },
      { en: "Darshan charges are not included in package", hi: "विशेष दर्शन शुल्क पैकेज में शामिल नहीं है" },
    ],
  },
  {
    id: "south-yatra-2027",
    nameEn: "South Yatra 2027",
    nameHi: "साउथ यात्रा 2027 (दक्षिण भारत महातीर्थ)",
    descEn: "Sri Madan Mohan Tirth yatra Jaipur presents South Yatra 2027 (31 January to 13 February 2027). Amount: 41,000/- per person (3-AC train tickets in Anuvrat SF express and Rajdhani express from Jaipur). AC Bus, AC Rooms, Lunch, Dinner and Breakfast Prasadam (strictly without onion garlic). Darshan: Rameswaram (Jyotirling), Dhanushkoti (Ram Setu), Srirangam (Rangnath Swami), Tirupati (Vanktesh Swami), Mallikarjuna (Jyotirling), Golden temple Vellore, Ahobilam (Narsingh Swami), Kanyakumari Darshan, Padmnabh temple. We will go by 3-AC OR 2-AC Train from Jaipur. Stays: Two night stay in Rameswaram and Two nights stay at Tirupati. One-one night stay at Srisailam (Mallikarjun), Ahobilam, Srirangam, Kanyakumari and Thiruvananthapuram. To book your seat kindly contact Dr J P Agrawal (9414248951).",
    descHi: "श्री मदन मोहन तीर्थ यात्रा जयपुर — साउथ यात्रा 2027 (31 जनवरी से 13 फरवरी 2027)। राशि: ₹41,000/- प्रति व्यक्ति (अणुव्रत सुपरफास्ट एक्सप्रेस एवं राजधानी एक्सप्रेस में 3-AC ट्रेन टिकट)। एसी बस, एसी रूम्स, नाश्ता, दोपहर व रात्रि भोजन प्रसादम (बिना प्याज-लहसुन का शुद्ध सात्विक)। प्रमुख दर्शन: रामेश्वरम (ज्योतिर्लिंग), धनुषकोडी (राम सेतु), श्रीरंगम (रंगनाथ स्वामी), तिरुपति (वेंकटेश स्वामी), मल्लिकार्जुन (ज्योतिर्लिंग), लक्ष्मी गोल्डन टेम्पल वेल्लोर, अहोबिलम (नरसिंह स्वामी), कन्याकुमारी दर्शन, पद्मनाभ मंदिर। जयपुर से 3-AC या 2-AC ट्रेन द्वारा प्रस्थान। ठहराव: रामेश्वरम में 2 रात, तिरुपति में 2 रात, और श्रीशैलम, अहोबिलम, श्रीरंगम, कन्याकुमारी तथा तिरुवनंतपुरम में 1-1 रात का ठहराव। सीट बुकिंग हेतु संपर्क करें: डॉ. जे. पी. अग्रवाल (9414248951)।",
    duration: "14 Days / 13 Nights",
    durationHi: "14 दिन / 13 रातें",
    price: "₹41,000",
    bookingAmount: "₹7,000",
    datesEn: "31 Jan – 13 Feb 2027",
    startDate: "2027-01-31",
    featured: true,
    datesHi: "31 जनवरी – 13 फरवरी 2027",
    image: IMAGES.southYatraHero,
    highlights: [
      { en: "3-AC train tickets in Anuvrat SF express and Rajdhani express from Jaipur (2-AC option available)", hi: "जयपुर से अणुव्रत सुपरफास्ट और राजधानी एक्सप्रेस में 3-AC ट्रेन टिकट (2-AC उपलब्ध)" },
      { en: "Booking Amount: ₹7,000/- advance per person", hi: "बुकिंग राशि: ₹7,000/- अग्रिम प्रति व्यक्ति" },
      { en: "Two night stay in Rameswaram and Two nights stay at Tirupati (AC Rooms)", hi: "रामेश्वरम में 2 रात और तिरुपति में 2 रात एसी कमरों में ठहराव" },
      { en: "One-one night stay at Srisailam (Mallikarjun), Ahobilam, Srirangam, Kanyakumari and Thiruvananthapuram", hi: "श्रीशैलम, अहोबिलम, श्रीरंगम, कन्याकुमारी और तिरुवनंतपुरम में 1-1 रात का ठहराव" },
      { en: "Darshan: Rameswaram (Jyotirling, 22 Kuon Snan, Samudra snan), Dhanushkoti (Ram Setu), Srirangam, Tirupati Balaji, Mallikarjuna, Golden temple Vellore, Ahobilam, Kanyakumari, Padmnabh temple", hi: "दर्शन: रामेश्वरम (22 कुआं व समुद्र स्नान), धनुषकोडी (राम सेतु), श्रीरंगम, तिरुपति बालाजी, मल्लिकार्जुन, गोल्डन टेम्पल वेल्लोर, अहोबिलम, कन्याकुमारी, पद्मनाभ मंदिर" },
      { en: "Breakfast, Lunch and Dinner (without onion garlic) & Prasadam in train (Lunch & Dinner) included", hi: "बिना लहसुन-प्याज का सात्विक प्रसादम + ट्रेन में लंच व डिनर प्रसादम शामिल" },
      { en: "Auto charges are included in package", hi: "ऑटो रिक्शा किराया पैकेज में शामिल है" },
      { en: "To book your seat kindly contact: Dr J P Agrawal (9414248951)", hi: "सीट बुकिंग हेतु संपर्क: डॉ. जे. पी. अग्रवाल (9414248951)" }
    ],
    itinerary: [
      { dayEn: "Day 1 (31 Jan)", dayHi: "दिन 1 (31 जन)", titleEn: "31 January Sunday: Departure from Jaipur by train", titleHi: "31 जनवरी रविवार: जयपुर से ट्रेन द्वारा प्रस्थान", descEn: "31 January Sunday departure from Jaipur by train (Anuvrat SF express) with confirmed 3-AC / 2-AC berths. Pure Vaishnava dinner prasadam served in train.", descHi: "31 जनवरी रविवार: जयपुर से अणुव्रत सुपरफास्ट एक्सप्रेस द्वारा प्रस्थान। ट्रेन में ताजा व स्वादिष्ट शुद्ध वैष्णव डिनर प्रसादम।" },
      { dayEn: "Day 2 (01 Feb)", dayHi: "दिन 2 (01 फर)", titleEn: "01 February Monday: Journey in Train with Prasadam", titleHi: "01 फरवरी सोमवार: ट्रेन यात्रा एवं सत्संग", descEn: "Comfortable scenic train journey through Central & Southern India. Daily meals (morning tea, breakfast, lunch, and dinner) served fresh in train.", descHi: "01 फरवरी सोमवार: ट्रेन में सुगम यात्रा। ट्रेन में चाय, नाश्ता, दोपहर व रात्रि प्रसादम सेवा में।" },
      { dayEn: "Day 3 (02 Feb)", dayHi: "दिन 3 (02 फर)", titleEn: "02 February Tuesday: Arrival at Ongole and stay at Srisailam and Mallikarjuna Darshan", titleHi: "02 फरवरी मंगलवार: ओंगोल आगमन, श्रीशैलम ठहराव और मल्लिकार्जुन दर्शन", descEn: "02 February Tuesday arrival at Ongole railway station. Proceed by deluxe AC bus to holy Srisailam. Stay at Srisailam and divine Mallikarjuna (Jyotirling) Darshan.", descHi: "02 फरवरी मंगलवार: ओंगोल आगमन। एसी बस द्वारा श्रीशैलम प्रस्थान। श्रीशैलम में एसी कमरों में ठहराव और पावन मल्लिकार्जुन (ज्योतिर्लिंग) दर्शन।" },
      { dayEn: "Day 4 (03 Feb)", dayHi: "दिन 4 (03 फर)", titleEn: "03 February Wednesday: Depart to Ahobilam, Narsingh Swami Darshan and Stay", titleHi: "03 फरवरी बुधवार: अहोबिलम प्रस्थान, नरसिंह स्वामी दर्शन और ठहराव", descEn: "03 February Wednesday depart to Ahobilam. Sacred Narsingh Swami Darshan and night stay at Ahobilam.", descHi: "03 फरवरी बुधवार: अहोबिलम के लिए प्रस्थान। भगवान नरसिंह स्वामी के दिव्य दर्शन और अहोबिलम में रात्रि ठहराव।" },
      { dayEn: "Day 5 (04 Feb)", dayHi: "दिन 5 (04 फर)", titleEn: "04 February Thursday: Depart to Tirupati and stay", titleHi: "04 फरवरी गुरुवार: तिरुपति प्रस्थान और ठहराव", descEn: "04 February Thursday depart to holy Tirupati. Check-in to AC hotel and night stay at Tirupati (Night 1).", descHi: "04 फरवरी गुरुवार: तिरुपति के लिए प्रस्थान। एसी होटल में चेक-इन और तिरुपति में ठहराव (पहली रात)।" },
      { dayEn: "Day 6 (05 Feb)", dayHi: "दिन 6 (05 फर)", titleEn: "05 February Friday: Venkatesh Swami (Tirupati Balaji) Darshan and stay at Tirupati", titleHi: "05 फरवरी शुक्रवार: वेंकटेश स्वामी (तिरुपति बालाजी) दर्शन और तिरुपति में ठहराव", descEn: "05 February Friday Venkatesh Swami (Tirupati Balaji) Darshan at Tirumala holy hills. Receive authentic laddu prasadam and spend second night stay at Tirupati (Night 2).", descHi: "05 फरवरी शुक्रवार: तिरुमाला पहाड़ी पर भगवान वेंकटेश स्वामी (तिरुपति बालाजी) के अलौकिक दर्शन, लड्डू प्रसादम और तिरुपति में दूसरी रात का ठहराव।" },
      { dayEn: "Day 7 (06 Feb)", dayHi: "दिन 7 (06 फर)", titleEn: "06 February Saturday: Depart to Srirangam darshan, laxmi Goldan temple Vellore and Rangnath Swami and stay", titleHi: "06 फरवरी शनिवार: श्रीरंगम दर्शन, लक्ष्मी गोल्डन टेम्पल वेल्लोर और रंगनाथ स्वामी दर्शन व ठहराव", descEn: "06 February Saturday depart to Srirangam darshan, laxmi Goldan temple Vellore and Rangnath Swami and stay at Srirangam.", descHi: "06 फरवरी शनिवार: श्रीरंगम प्रस्थान, मार्ग में वेल्लोर का विख्यात लक्ष्मी गोल्डन टेम्पल दर्शन, श्रीरंगम में रंगनाथ स्वामी दर्शन और रात्रि ठहराव।" },
      { dayEn: "Day 8 (07 Feb)", dayHi: "दिन 8 (07 फर)", titleEn: "07 February Sunday: Depart to Rameshwaram stay", titleHi: "07 फरवरी रविवार: रामेश्वरम प्रस्थान और ठहराव", descEn: "07 February Sunday depart to holy island of Rameshwaram. Hotel check-in, seaside walk at Agni Teertham, and restful stay at Rameshwaram (Night 1).", descHi: "07 फरवरी रविवार: पावन रामेश्वरम धाम के लिए प्रस्थान। होटल चेक-इन और रामेश्वरम में पहली रात का ठहराव।" },
      { dayEn: "Day 9 (08 Feb)", dayHi: "दिन 9 (08 फर)", titleEn: "08 February Monday: Rameswaram Darshan, 22 Kuon Snan, Samudra snan, Dhanushkoti Darshan and stay", titleHi: "08 फरवरी सोमवार: रामेश्वरम दर्शन, 22 कुआं स्नान, समुद्र स्नान, धनुषकोडी दर्शन और ठहराव", descEn: "08 February Monday Rameswaram (Jyotirling) Darshan, holy bath at 22 Kuon Snan (22 sacred wells inside temple), Samudra snan in Agni Teertham, Dhanushkoti (Ram Setu) Darshan, and second night stay at Rameshwaram (Night 2).", descHi: "08 फरवरी सोमवार: रामेश्वरम (ज्योतिर्लिंग) दर्शन, 22 कुओं का पवित्र स्नान, अग्नि तीर्थ समुद्र स्नान, धनुषकोडी (राम सेतु) दर्शन और रामेश्वरम में दूसरी रात का ठहराव।" },
      { dayEn: "Day 10 (09 Feb)", dayHi: "दिन 10 (09 फर)", titleEn: "09 February Tuesday: Depart to Kanyakumari darshan and stay", titleHi: "09 फरवरी मंगलवार: कन्याकुमारी दर्शन के लिए प्रस्थान और ठहराव", descEn: "09 February Tuesday Depart to Kanyakumari darshan (Triveni Sangam sunset, Devi Kanyakumari Amman Temple, Vivekananda Rock view) and stay at Kanyakumari.", descHi: "09 फरवरी मंगलवार: कन्याकुमारी प्रस्थान। त्रिवेणी संगम, देवी कन्याकुमारी मंदिर दर्शन, विवेकानंद रॉक मेमोरियल और कन्याकुमारी में ठहराव।" },
      { dayEn: "Day 11 (10 Feb)", dayHi: "दिन 11 (10 फर)", titleEn: "10 February Wednesday: Depart to Thiruvananthapuram, Padmnabhji darshan and stay", titleHi: "10 फरवरी बुधवार: तिरुवनंतपुरम प्रस्थान, पद्मनाभजी दर्शन और ठहराव", descEn: "10 February Wednesday depart to Thiruvananthapuram. Holy Padmnabhji (Sri Anantha Padmanabhaswamy) darshan in traditional attire and stay at Thiruvananthapuram.", descHi: "10 फरवरी बुधवार: तिरुवनंतपुरम प्रस्थान। पारंपरिक वेशभूषा में भगवान पद्मनाभजी के अलौकिक दर्शन और तिरुवनंतपुरम में रात्रि विश्राम।" },
      { dayEn: "Day 12 (11 Feb)", dayHi: "दिन 12 (11 फर)", titleEn: "11 February Thursday: Depart to Jaipur by Rajdhani express", titleHi: "11 फरवरी गुरुवार: राजधानी एक्सप्रेस द्वारा जयपुर के लिए प्रस्थान", descEn: "11 February depart to Jaipur by premier Rajdhani express with reserved AC berths. Fresh catering meals provided on board.", descHi: "11 फरवरी गुरुवार: प्रतिष्ठित राजधानी एक्सप्रेस द्वारा जयपुर वापसी हेतु प्रस्थान। ट्रेन में स्वादिष्ट भोजन प्रसादम।" },
      { dayEn: "Day 13 (12 Feb)", dayHi: "दिन 13 (12 फर)", titleEn: "12 February Friday: Journey on Rajdhani Express", titleHi: "12 फरवरी शुक्रवार: राजधानी एक्सप्रेस में यात्रा", descEn: "12 February comfortable journey traversing the Konkan & Western railway tracks with satsang and fellow devotees.", descHi: "12 फरवरी शुक्रवार: राजधानी एक्सप्रेस में भजन-कीर्तन व प्रसादम के साथ सुगम सफर।" },
      { dayEn: "Day 14 (13 Feb)", dayHi: "दिन 14 (13 फर)", titleEn: "13 February Saturday: Arrival to Jaipur - Yatra Mangal", titleHi: "13 फरवरी शनिवार: जयपुर आगमन — यात्रा मंगल", descEn: "13 February arrival To Jaipur Junction. Our South India pilgrimage concludes happily with divine grace. Yatra Mangal!", descHi: "13 फरवरी शनिवार: सकुशल जयपुर आगमन। श्री राधा मदनमोहन जी महाराज की असीम कृपा से यात्रा संपन्न। यात्रा मंगल!" },
    ],
    includes: [
      { en: "3-AC train tickets in Anuvrat SF express and Rajdhani express from Jaipur (2-AC option available)", hi: "जयपुर से अणुव्रत सुपरफास्ट और राजधानी एक्सप्रेस में 3-AC ट्रेन टिकट (2-AC उपलब्ध)" },
      { en: "AC Bus for all transfers and temple sightseeing", hi: "पूरी यात्रा में आरामदायक एसी बस सुविधा" },
      { en: "AC Rooms: Two night stay in Rameswaram and Two nights stay at Tirupati", hi: "एसी कमरे: रामेश्वरम में 2 रात और तिरुपति में 2 रात ठहराव" },
      { en: "One-one night stay at Srisailam (Mallikarjun), Ahobilam, Srirangam, Kanyakumari and Thiruvananthapuram", hi: "श्रीशैलम, अहोबिलम, श्रीरंगम, कन्याकुमारी और तिरुवनंतपुरम में 1-1 रात का ठहराव" },
      { en: "Breakfast, Lunch and Dinner (without onion garlic) included in package", hi: "नाश्ता, दोपहर व रात्रि भोजन (बिना लहसुन-प्याज का सात्विक प्रसादम)" },
      { en: "Prasadam in train (Lunch and Dinner) included in package", hi: "ट्रेन में प्रसादम (लंच और डिनर) पैकेज में शामिल है" },
      { en: "Auto charges are included in package", hi: "लोकल ऑटो रिक्शा किराया पैकेज में शामिल है" },
      { en: "Chief Organizer: Dr J P Agrawal (9414248951)", hi: "आयोजक: डॉ. जे. पी. अग्रवाल (9414248951)" },
    ],
    excludes: [
      { en: "Rs 7000/- booking amount (advance token to confirm berth)", hi: "₹7,000/- बुकिंग राशि (बर्थ कन्फर्मेशन हेतु अग्रिम)" },
      { en: "Coffee, colddrink are not included in package", hi: "कॉफी, कोल्डड्रिंक पैकेज में शामिल नहीं है" },
      { en: "Boat riding, taxi charges are not included in package", hi: "बोट राइडिंग, टैक्सी शुल्क पैकेज में शामिल नहीं है" },
      { en: "Darshan charges are not included in package", hi: "दर्शन शुल्क पैकेज में शामिल नहीं है" },
    ],
  },
  {
    id: "puri-gangasagar-2026",
    nameEn: "Jagannath Puri- Gangasagar- Baidhyanath Dham Yatra 2026",
    nameHi: "जगन्नाथ पुरी- गंगासागर- बैद्यनाथ धाम यात्रा 2026",
    descEn: "Sri Radha Madan Mohan Tirth Yatra, Jaipur presents a holy 10-day pilgrimage to Jagannath Puri, Gangasagar, and Baidhyanath Dham. Travels with AC Bus, AC rooms, and Satvik prasadam, including train ticket options from Jaipur.",
    descHi: "श्री राधा मदन मोहन तीर्थ यात्रा, जयपुर प्रस्तुत करते हैं जगन्नाथ पुरी, गंगासागर और बैद्यनाथ धाम की पवित्र 10 दिवसीय यात्रा। एसी बस, एसी कमरों में आवास, सात्विक प्रसादम तथा जयपुर से ट्रेन टिकट शामिल हैं।",
    duration: "10 Days / 9 Nights",
    durationHi: "10 दिन / 9 रातें",
    price: "₹29,000 (3-AC) | ₹31,000 (2-AC)",
    datesEn: "22 Nov – 01 Dec 2026",
    startDate: "2026-11-22",
    datesHi: "22 नवंबर – 01 दिसंबर 2026",
    image: IMAGES.puri,
    highlights: [
      { en: "Darshan: Jagannath ji, Tota-gopinath, Gambhira, Sakshi gopal, Konark, Alarnath, Lingraj, Kheerchora Gopinath, Gangasagar, Baidhyanath dham", hi: "दर्शन: जगन्नाथ जी, तोता-गोपीनाथ, गंभीरा, साक्षी गोपाल, कोणार्क, अलारनाथ, लिंगराज, खीरचोरा गोपीनाथ, गंगासागर, बैद्यनाथ धाम" },
      { en: "Kolkata to Baidhyanath dham transfer by modern Vande Bharat train", hi: "कोलकाता से बैद्यनाथ धाम तक आधुनिक वंदे भारत एक्सप्रेस द्वारा यात्रा" },
      { en: "Three nights stay in holy Jagannath Puri", hi: "पवित्र जगन्नाथ पुरी धाम में 3 रात का ठहराव" },
      { en: "Booking Amount: ₹5,000 / Booking: Dr JP Agrawal (9414248951)", hi: "बुकिंग राशि: ₹5,000 / संपर्क: डॉ जे पी अग्रवाल (9414248951)" }
    ],
    itinerary: [
      { dayEn: "Day 1", dayHi: "दिन 1", titleEn: "Departure from Jaipur", titleHi: "जयपुर से प्रस्थान", descEn: "Departure from Jaipur by train.", descHi: "जयपुर से ट्रेन द्वारा प्रस्थान और यात्रा की शुरुआत।" },
      { dayEn: "Day 2", dayHi: "दिन 2", titleEn: "Train Journey", titleHi: "ट्रेन यात्रा", descEn: "En route train journey with onboard prasadam.", descHi: "ट्रेन में प्रसादम (लंच व डिनर) के साथ यात्रा।" },
      { dayEn: "Day 3", dayHi: "दिन 3", titleEn: "Arrive Puri & Konark Darshan", titleHi: "पुरी आगमन और कोणार्क दर्शन", descEn: "Arrive at Puri, visit Konark Sun Temple and stay.", descHi: "पुरी आगमन, प्रसिद्ध कोणार्क सूर्य मंदिर के दर्शन और पुरी में विश्राम।" },
      { dayEn: "Day 4", dayHi: "दिन 4", titleEn: "Puri Local Sightseeing", titleHi: "पुरी स्थानीय दर्शन", descEn: "Visit Tota Gopinath, Gundicha Mandir, Indradyumna Lake, Gambhira, and relax at Puri beach.", descHi: "तोता गोपीनाथ, गुंडिचा मंदिर, इंद्रद्युम्न सरोवर, गंभीरा दर्शन और पुरी समुद्र तट पर विश्राम।" },
      { dayEn: "Day 5", dayHi: "दिन 5", titleEn: "Alarnath & Chilika Lake", titleHi: "अलारनाथ और चिल्का झील", descEn: "Visit Alarnath Temple and explore the scenic Chilika Lake; return to Puri for stay.", descHi: "अलारनाथ मंदिर दर्शन और मनमोहक चिल्का झील का भ्रमण; पुरी वापसी व ठहराव।" },
      { dayEn: "Day 6", dayHi: "दिन 6", titleEn: "Bhubaneswar Darshan to Balasore", titleHi: "भुवनेश्वर दर्शन से बालासोर", descEn: "Sakshi Gopal, Ananta Vasudeva, and Lingraj Temple Darshan. Proceed and stay at Balasore.", descHi: "साक्षी गोपाल, अनंत वासुदेव, और लिंगराज मंदिर दर्शन। आगे प्रस्थान कर बालासोर में रात्रि विश्राम।" },
      { dayEn: "Day 7", dayHi: "दिन 7", titleEn: "Kheerchora Gopinath to Gangasagar", titleHi: "खीरचोरा गोपीनाथ से गंगासागर", descEn: "Khirchora Gopinath Darshan; travel to Gangasagar for night stay.", descHi: "खीरचोरा गोपीनाथ मंदिर दर्शन; तत्पश्चात गंगासागर के लिए प्रस्थान और ठहराव।" },
      { dayEn: "Day 8", dayHi: "दिन 8", titleEn: "Gangasagar Holy Bath & Vande Bharat to Baidhyanath Dham", titleHi: "गंगासागर स्नान व वंदे भारत द्वारा बैद्यनाथ प्रस्थान", descEn: "Gangasagar holy snan, depart to Kolkata. Travel from Kolkata to Baidhyanath Dham by Vande Bharat train.", descHi: "पवित्र गंगासागर स्नान, कोलकाता वापसी। कोलकाता से बैद्यनाथ धाम के लिए वंदे भारत एक्सप्रेस द्वारा प्रस्थान और ठहराव।" },
      { dayEn: "Day 9", dayHi: "दिन 9", titleEn: "Baidhyanath Dham Darshan & Return Journey", titleHi: "बैद्यनाथ धाम दर्शन और वापसी", descEn: "Baidhyanath Dham Jyotirlinga Darshan. Departure towards Jaipur.", descHi: "बैद्यनाथ धाम ज्योतिर्लिंग के दर्शन। तत्पश्चात जयपुर के लिए वापसी यात्रा।" },
      { dayEn: "Day 10", dayHi: "दिन 10", titleEn: "Arrival in Jaipur", titleHi: "जयपुर आगमन", descEn: "Arrive back in Jaipur. Yatra Mangal.", descHi: "सकुशल जयपुर आगमन। यात्रा मंगल।" }
    ],
    includes: [
      { en: "Train tickets from Jaipur (3-AC or 2-AC options)", hi: "जयपुर से ट्रेन टिकट (3-AC या 2-AC विकल्प)" },
      { en: "Vande Bharat train from Kolkata to Baidhyanath Dham", hi: "कोलकाता से बैद्यनाथ धाम के लिए वंदे भारत ट्रेन" },
      { en: "AC Bus transport and AC Rooms for stays", hi: "आरामदायक एसी बस और ठहरने के लिए एसी कमरे" },
      { en: "Three nights stay in Jagannath Puri", hi: "जगन्नाथ पुरी में तीन रात का ठहराव" },
      { en: "Breakfast, Lunch and Dinner (Satvik, without onion/garlic)", hi: "नाश्ता, दोपहर और रात का भोजन (सात्विक, बिना प्याज-लहसुन)" },
      { en: "Train meals prasadam and local Auto charges included", hi: "ट्रेन भोजन प्रसादम और स्थानीय ऑटो किराया शामिल" }
    ],
    excludes: [
      { en: "Darshan and special temple entrance fees", hi: "विशेष दर्शन एवं मंदिर प्रवेश शुल्क" },
      { en: "Boat riding, ferry and taxi charges", hi: "नाव की सवारी और स्थानीय टैक्सी खर्च" },
      { en: "Coffee, cold drinks and personal expenses", hi: "कॉफी, कोल्ड ड्रिंक और व्यक्तिगत खर्च" }
    ]
  },
  {
    id: "nepal-kathmandu-pokhara-muktinath",
    nameEn: "Kathmandu, Pokhara & Muktinath Tour Package",
    nameHi: "काठमांडू, पोखरा और मुक्तिनाथ यात्रा",
    descEn: "Sri Madan Mohan Tirth Yatra Jaipur presents a 06 Nights 07 Days scenic and spiritual package. Travel comfortably by A/C Coaster with premium stays in 4-Star hotels, local guide assistance, ACAP Muktinath permit, and daily mineral water.",
    descHi: "श्री मदन मोहन तीर्थ यात्रा जयपुर द्वारा 6 रात और 7 दिन का सुरम्य एवं आध्यात्मिक टूर पैकेज। 4-स्टार होटलों में ठहरने की व्यवस्था, एसी कोस्टर वाहन, मुक्तिनाथ परमिट (ACAP) और लोकल टूर गाइड की सहायता शामिल हैं।",
    duration: "6 Days / 5 Nights",
    durationHi: "7 दिन / 6 रातें",
    price: "₹23,000 (Delhi to Delhi) | ₹25,500 (Jaipur to Jaipur) + Airfare",
    datesEn: "08 Sept – 13 Sept 2026",
    startDate: "2026-09-08",
    region: "international",
    datesHi: "08 सितंबर – 13 सितंबर 2026",
    image: IMAGES.nepal,
    highlights: [
      { en: "Pashupatinath Temple, Guheshwori Temple, Swyambhunath, Boudhanath & Kathmandu Durbar Square", hi: "पशुपतिनाथ, गुह्येश्वरी मंदिर, स्वयंभूनाथ स्तूप, बौद्धनाथ एवं काठमांडू दरबार स्क्वायर के दर्शन" },
      { en: "Manakamana Temple Darshan via Cable Car en route", hi: "यात्रा के दौरान मनकामना देवी मंदिर के केबल कार द्वारा दर्शन" },
      { en: "Muktinath Temple, Jwala Mai, and Shakyamuni Buddha Statue", hi: "पवित्र मुक्तिनाथ मंदिर, ज्वाला माई मंदिर और शाक्यमुनि बुद्ध की विशाल मूर्ति" },
      { en: "Accommodation in 4-Star Hotels in Kathmandu & Pokhara", hi: "काठमांडू और पोखरा में शानदार 4-स्टार होटलों में ठहराव" }
    ],
    itinerary: [
      { dayEn: "Day 1", dayHi: "दिन 1", titleEn: "Jaipur/Delhi to Kathmandu", titleHi: "जयपुर/दिल्ली से काठमांडू", descEn: "Pickup from Jaipur by taxi to New Delhi Airport. Fly to Kathmandu, hotel transfer with welcome drink and dinner.", descHi: "जयपुर से टैक्सी द्वारा नई दिल्ली एयरपोर्ट। दिल्ली से काठमांडू के लिए उड़ान, होटल ट्रांसफर, वेलकम ड्रिंक और डिनर।" },
      { dayEn: "Day 2", dayHi: "दिन 2", titleEn: "Kathmandu Full Day Sightseeing", titleHi: "काठमांडू पूर्ण दर्शनीय स्थल", descEn: "Full day sightseeing covering Pashupatinath, Guheshwori, Boudhanath Stupa, Swyambhunath, and Kathmandu Durbar Square.", descHi: "पशुपतिनाथ, गुह्येश्वरी, बौद्धनाथ, स्वयंभूनाथ और काठमांडू दरबार स्क्वायर के पूर्ण दर्शन।" },
      { dayEn: "Day 3", dayHi: "दिन 3", titleEn: "Kathmandu to Pokhara (via Manakamana)", titleHi: "काठमांडू से पोखरा (मनकामना मार्ग)", descEn: "Drive to Pokhara en route enjoying Manakamana Temple Darshan by Cable Car. Evening boating at Fewa lake to Tal Barahi Temple.", descHi: "पोखरा के लिए प्रस्थान; मार्ग में केबल कार द्वारा मनकामना मंदिर दर्शन। शाम को फेवा झील में बोटिंग और ताल बाराही मंदिर दर्शन।" },
      { dayEn: "Day 4", dayHi: "दिन 4", titleEn: "Pokhara to Jomsom & Muktinath", titleHi: "पोखरा से जोमसोम और मुक्तिनाथ", descEn: "Transfer to Muktinath by road. Visit Muktinath Temple, Jwala Mai, and the big Shakyamuni Buddha Statue. Stay at Jomsom.", descHi: "सड़क मार्ग द्वारा मुक्तिनाथ प्रस्थान। मुक्तिनाथ मंदिर, ज्वाला माई मंदिर और बुद्ध मूर्ति दर्शन। जोमसोम में ठहराव।" },
      { dayEn: "Day 5", dayHi: "दिन 5", titleEn: "Return to Pokhara", titleHi: "पोखरा वापसी", descEn: "Drive back to Pokhara. Visit Bindhyabasini Temple and Gupteshwor Mahadev Cave.", descHi: "सड़क मार्ग से पोखरा वापसी। विंध्यवासिनी मंदिर और गुप्तेश्वर महादेव गुफा के दर्शन।" },
      { dayEn: "Day 6", dayHi: "दिन 6", titleEn: "Pokhara to Kathmandu", titleHi: "पोखरा से काठमांडू", descEn: "Drive back to Kathmandu (210 KM). Check-in hotel, dinner, and stay.", descHi: "पोखरा से काठमांडू वापसी (210 किमी)। होटल चेक-इन, डिनर और विश्राम।" },
      { dayEn: "Day 7", dayHi: "दिन 7", titleEn: "Departure", titleHi: "वापसी", descEn: "Morning breakfast at hotel, transfer to Kathmandu International Airport. Yatra Mangal.", descHi: "सुबह नाश्ते के बाद होटल से काठमांडू एयरपोर्ट ट्रांसफर। यात्रा मंगल।" }
    ],
    includes: [
      { en: "Twin/Double sharing standard in Kathmandu & Pokhara; Triple/Quad sharing in Jomsom", hi: "काठमांडू-पोखरा में ट्विन/डबल शेयरिंग; जोमसोम में ट्रिपल/क्वाड शेयरिंग होटल कमरे" },
      { en: "Airport pickup & drop and sightseeing with AC Coaster", hi: "एसी कोस्टर वाहन द्वारा हवाई अड्डा पिक-अप, ड्रॉप एवं भ्रमण" },
      { en: "03 Nights Kathmandu (4-Star), 02 Nights Pokhara (4-Star), 01 Night Jomsom on MAP Plan", hi: "काठमांडू (3 रात 4-स्टार), पोखरा (2 रात 4-स्टार) और जोमसोम (1 रात) में MAP प्लान आवास" },
      { en: "ACAP Permit to visit Muktinath Temple & local tour guide assistance", hi: "मुक्तिनाथ यात्रा हेतु एसीएपी (ACAP) परमिट और लोकल गाइड सहायता" },
      { en: "1 Liter daily mineral water during sightseeing", hi: "भ्रमण के दौरान रोजाना प्रति व्यक्ति 1 लीटर मिनरल वॉटर बोतल" }
    ],
    excludes: [
      { en: "Airfare (Delhi-Kathmandu-Delhi or Jaipur-Delhi-Kathmandu)", hi: "हवाई यात्रा टिकट किराया (दिल्ली या जयपुर से)" },
      { en: "Manakamana Temple Cable Car Tickets", hi: "मनकामना देवी मंदिर केबल कार टिकट खर्च" },
      { en: "Fewa Lake boating charges & guide fees", hi: "फेवा झील बोटिंग और गाइड शुल्क" },
      { en: "Monument and museum entrance fees", hi: "स्मारकों, दर्शनीय स्थलों और संग्रहालयों के प्रवेश टिकट" }
    ]
  },
  // {
  //   id: "amarnath",
  //   nameEn: "Amarnath Yatra",
  //   nameHi: "अमरनाथ यात्रा",
  //   descEn: "Undertake the sacred Amarnath Yatra to the holy ice Shivalinga in the Himalayan cave at 3,888 meters. This challenging yet spiritually rewarding pilgrimage takes you through stunning Himalayan landscapes to one of Hinduism's holiest shrines.",
  //   descHi: "3,888 मीटर की ऊंचाई पर... (कमेंटेड कोड वैसे ही रखा गया है)",
  //   duration: "7 Days / 6 Nights",
  //   durationHi: "7 दिन / 6 रातें",
  //   price: "₹22,999",
  //   datesEn: "Dates to be Announced",
  //   datesHi: "तारीखें घोषित की जाएंगी",
  //   image: IMAGES.himalaya,
  //   highlights: [
  //     { en: "Holy cave darshan of ice Shivalinga", hi: "बर्फ के शिवलिंग के पवित्र गुफा दर्शन" },
  //     { en: "Pahalgam/Baltal route options", hi: "पहलगाम/बालटाल मार्ग विकल्प" },
  //     { en: "Helicopter service available", hi: "हेलीकॉप्टर सेवा उपलब्ध" },
  //     { en: "Medical support throughout trek", hi: "पूरे ट्रेक में चिकित्सा सहायता" },
  //     { en: "Stunning Kashmir valley views", hi: "कश्मीर घाटी के शानदार दृश्य" },
  //   ],
  //   itinerary: [
  //     { dayEn: "Day 1", dayHi: "दिन 1", titleEn: "Delhi to Srinagar", titleHi: "दिल्ली से श्रीनगर", descEn: "Fly to Srinagar. Transfer to hotel near Dal Lake. Evening Shikara ride and acclimatization.", descHi: "श्रीनगर फ्लाइट। डल लेक के पास होटल में चेक-इन। शाम को शिकारा राइड और अनुकूलन।" },
  //     { dayEn: "Day 2", dayHi: "दिन 2", titleEn: "Srinagar to Pahalgam", titleHi: "श्रीनगर से पहलगाम", descEn: "Drive to Pahalgam through scenic Kashmir valley. Visit Anantnag and Betaab Valley en route. Registration and medical check-up.", descHi: "सुंदर कश्मीर घाटी के माध्यम से पहलगाम तक ड्राइव। रास्ते में अनंतनाग और बेताब वैली दर्शन। पंजीकरण और मेडिकल चेक-अप।" },
  //     { dayEn: "Day 3", dayHi: "दिन 3", titleEn: "Pahalgam to Sheshnag", titleHi: "पहलगाम से शेषनाग", descEn: "Begin trek from Chandanwari (16 km). Pass through Pissu Top. Camp at beautiful Sheshnag Lake.", descHi: "चंदनवाड़ी से ट्रेक शुरू (16 किमी)। पिस्सू टॉप से गुजरें। खूबसूरत शेषनाग झील पर कैम्प।" },
  //     { dayEn: "Day 4", dayHi: "दिन 4", titleEn: "Sheshnag to Panchtarni", titleHi: "शेषनाग से पंचतरणी", descEn: "Trek from Sheshnag to Panchtarni via Mahagunas Top (14,500 ft). Camp at Panchtarni.", descHi: "शेषनाग से महागुणस टॉप (14,500 फीट) होते हुए पंचतरणी तक ट्रेक। पंचतरणी पर कैम्प।" },
  //     { dayEn: "Day 5", dayHi: "दिन 5", titleEn: "Holy Cave Darshan", titleHi: "पवित्र गुफा दर्शन", descEn: "Early morning trek to Amarnath Holy Cave (6 km). Darshan of the sacred ice Shivalinga. Return to Panchtarni.", descHi: "सुबह जल्दी अमरनाथ पवित्र गुफा तक ट्रेक (6 किमी)। पवित्र बर्फ के शिवलिंग के दर्शन। पंचतरणी वापसी।" },
  //     { dayEn: "Day 6", dayHi: "दिन 6", titleEn: "Return Trek", titleHi: "वापसी ट्रेक", descEn: "Trek back to Pahalgam. Rest and celebrate the completion of the sacred yatra.", descHi: "पहलगाम तक वापसी ट्रेक। विश्राम और पवित्र यात्रा की सफलता का जश्न।" },
  //     { dayEn: "Day 7", dayHi: "दिन 7", titleEn: "Return to Delhi", titleHi: "दिल्ली वापसी", descEn: "Drive to Srinagar. Fly back to Delhi. Tour ends.", descHi: "श्रीनगर तक ड्राइव। दिल्ली वापसी फ्लाइट। यात्रा समाप्त।" },
  //   ],
  //   includes: [
  //     { en: "Flights (Delhi-Srinagar-Delhi)", hi: "फ्लाइट (दिल्ली-श्रीनगर-दिल्ली)" },
  //     { en: "All accommodation & camping", hi: "सभी आवास और कैम्पिंग" },
  //     { en: "All meals during trek", hi: "ट्रेक के दौरान सभी भोजन" },
  //     { en: "Pony/Porter support", hi: "घोड़ा/कुली सहायता" },
  //     { en: "Medical kit & oxygen", hi: "मेडिकल किट और ऑक्सीजन" },
  //     { en: "Registration & permits", hi: "पंजीकरण और परमिट" },
  //   ],
  //   excludes: [
  //     { en: "Helicopter charges", hi: "हेलीकॉप्टर शुल्क" },
  //     { en: "Personal trekking gear", hi: "व्यक्तिगत ट्रेकिंग गियर" },
  //     { en: "Tips and gratitudes", hi: "टिप्स और आभार" },
  //     { en: "Travel insurance", hi: "यात्रा बीमा" },
  //   ],
  // },
];

export const galleryImages = [
  { id: 1, src: IMAGES.hero, categoryEn: "Temples", categoryHi: "मंदिर", captionEn: "Golden Temple Architecture", captionHi: "स्वर्ण मंदिर वास्तुकला" },
  { id: 2, src: IMAGES.varanasi, categoryEn: "Ghats", categoryHi: "घाट", captionEn: "Varanasi Ghats at Sunrise", captionHi: "सूर्योदय पर वाराणसी के घाट" },
  { id: 3, src: IMAGES.kedarnath, categoryEn: "Temples", categoryHi: "मंदिर", captionEn: "Kedarnath Temple", captionHi: "केदारनाथ मंदिर" },
  { id: 4, src: IMAGES.vrindavan, categoryEn: "Temples", categoryHi: "मंदिर", captionEn: "Vrindavan Krishna Temple", captionHi: "वृंदावन कृष्ण मंदिर" },
  { id: 5, src: IMAGES.tirupati, categoryEn: "Temples", categoryHi: "मंदिर", captionEn: "Tirupati Balaji", captionHi: "तिरुपति बालाजी" },
  { id: 6, src: IMAGES.dwarka, categoryEn: "Temples", categoryHi: "मंदिर", captionEn: "Dwarka Temple", captionHi: "द्वारका मंदिर" },
  { id: 7, src: IMAGES.pilgrims, categoryEn: "Pilgrimage", categoryHi: "तीर्थयात्रा", captionEn: "Holy River Pilgrims", captionHi: "पवित्र नदी तीर्थयात्री" },
  { id: 8, src: IMAGES.architecture, categoryEn: "Temples", categoryHi: "मंदिर", captionEn: "Ornate Temple Architecture", captionHi: "सुंदर मंदिर वास्तुकला" },
  { id: 9, src: IMAGES.aarti, categoryEn: "Ceremonies", categoryHi: "अनुष्ठान", captionEn: "Aarti Ceremony", captionHi: "आरती अनुष्ठान" },
  { id: 10, src: IMAGES.mathura, categoryEn: "Temples", categoryHi: "मंदिर", captionEn: "Ancient Mathura Temple", captionHi: "प्राचीन मथुरा मंदिर" },
  { id: 11, src: IMAGES.meditation, categoryEn: "Spiritual", categoryHi: "आध्यात्मिक", captionEn: "Spiritual Meditation", captionHi: "आध्यात्मिक ध्यान" },
  { id: 12, src: IMAGES.himalaya, categoryEn: "Pilgrimage", categoryHi: "तीर्थयात्रा", captionEn: "Himalayan Pilgrimage", captionHi: "हिमालय तीर्थयात्रा" },
  { id: 13, src: IMAGES.festival, categoryEn: "Ceremonies", categoryHi: "अनुष्ठान", captionEn: "Festival Celebration", captionHi: "त्योहार उत्सव" },
  { id: 14, src: IMAGES.ganges, categoryEn: "Ghats", categoryHi: "घाट", captionEn: "Sacred Ganges Ceremony", captionHi: "पवित्र गंगा अनुष्ठान" },
  { id: 15, src: IMAGES.nepal, categoryEn: "Temples", categoryHi: "मंदिर", captionEn: "Pashupatinath Temple Nepal", captionHi: "पशुपतिनाथ मंदिर नेपाल" },
  { id: 16, src: IMAGES.puri, categoryEn: "Temples", categoryHi: "मंदिर", captionEn: "Jagannath Temple Puri", captionHi: "जगन्नाथ मंदिर पुरी" }
];

export const youtubeVideos = [
  { id: "v1", title: { en: "Char Dham Yatra Complete Guide", hi: "चार धाम यात्रा पूर्ण गाइड" }, videoId: "MZc5aXVHK-s", category: { en: "Char Dham", hi: "चार धाम" } },
  { id: "v2", title: { en: "Varanasi Ganga Aarti Full Video", hi: "वाराणसी गंगा आरती पूर्ण वीडियो" }, videoId: "6ate2Q7Tq2g", category: { en: "Varanasi", hi: "वाराणसी" } },
  { id: "v3", title: { en: "Vrindavan Temples Tour", hi: "वृंदावन मंदिर भ्रमण" }, videoId: "yP30A_PnY9Q", category: { en: "Vrindavan", hi: "वृंदावन" } },
  { id: "v4", title: { en: "Kedarnath Temple Documentary", hi: "केदारनाथ मंदिर वृत्तचित्र" }, videoId: "w7F8UrteTtI", category: { en: "Char Dham", hi: "चार धाम" } },
  { id: "v5", title: { en: "Tirupati Balaji Darshan Guide", hi: "तिरुपति बालाजी दर्शन गाइड" }, videoId: "fftQp57nGns", category: { en: "Tirupati", hi: "तिरुपति" } },
  { id: "v6", title: { en: "Amarnath Yatra Experience", hi: "अमरनाथ यात्रा अनुभव" }, videoId: "iXBuRoT8REA", category: { en: "Amarnath", hi: "अमरनाथ" } },
  { id: "v7", title: { en: "Dwarka Somnath Complete Tour", hi: "द्वारका सोमनाथ पूर्ण यात्रा" }, videoId: "nDNUhkclvww", category: { en: "Dwarka", hi: "द्वारका" } },
  { id: "v8", title: { en: "Spiritual India Journey", hi: "आध्यात्मिक भारत यात्रा" }, videoId: "a5IzcMoKy64", category: { en: "Spiritual", hi: "आध्यात्मिक" } },
];

export const testimonials = [
  {
    id: 1,
    nameEn: "Rajesh Kumar",
    nameHi: "राजेश कुमार",
    locationEn: "Delhi",
    locationHi: "दिल्ली",
    textEn: "The Char Dham Yatra was perfectly organized. Every detail was taken care of. The guides were knowledgeable and the spiritual experience was unforgettable. Highly recommended!",
    textHi: "चार धाम यात्रा पूरी तरह से व्यवस्थित थी। हर विवरण का ध्यान रखा गया। गाइड जानकार थे और आध्यात्मिक अनुभव अविस्मरणीय था। अत्यधिक अनुशंसित!",
    rating: 5,
  },
  {
    id: 2,
    nameEn: "Sunita Sharma",
    nameHi: "सुनीता शर्मा",
    locationEn: "Jaipur",
    locationHi: "जयपुर",
    textEn: "Vrindavan-Mathura tour was divine. The team arranged special pujas and the accommodation was excellent. Will definitely travel with them again.",
    textHi: "वृंदावन-मथुरा यात्रा दिव्य थी। टीम ने विशेष पूजाओं की व्यवस्था की और आवास उत्कृष्ट था। निश्चित रूप से उनके साथ फिर से यात्रा करूंगी।",
    rating: 5,
  },
  {
    id: 3,
    nameEn: "Amit Patel" ,
    nameHi: "अमित पटेल",
    locationEn: "Ahmedabad",
    locationHi: "अहमदाबाद",
    textEn: "Dwarka-Somnath tour was well planned. The Somnath aarti was the highlight. Professional service and great value for money.",
    textHi: "द्वारका-सोमनाथ यात्रा अच्छी तरह से नियोजित थी। सोमनाथ आरती मुख्य आकर्षण थी। पेशेवर सेवा और पैसे का बढ़िया मूल्य।",
    rating: 4,
  },
];

export const features = [
    { icon: "Shield", titleEn: "Safe & Secure", titleHi: "सुरक्षित यात्रा", descEn: "Complete safety measures with experienced guides and medical support throughout the journey.", descHi: "अनुभवी गाइड और पूरी यात्रा में चिकित्सा सहायता के साथ पूर्ण सुरक्षा उपाय।" },
    { icon: "Users", titleEn: "Expert Guides", titleHi: "विशेषज्ञ गाइड", descEn: "Knowledgeable pandits and tour guides who make your spiritual journey meaningful.", descHi: "जानकार पंडित और टूर गाइड जो आपकी आध्यात्मिक यात्रा को सार्थक बनाते हैं।" },
    { icon: "Star", titleEn: "Premium Service", titleHi: "प्रीमियम सेवा", descEn: "Quality accommodation, hygienic vegetarian meals, and comfortable AC transport.", descHi: "गुणवत्तापूर्ण आवास, स्वच्छ शाकाहारी भोजन और आरामदायक एसी परिवहन।" },
    { icon: "Clock", titleEn: "7+ Years Experience", titleHi: "7+ वर्षों का अनुभव", descEn: "Seven years of organizing successful spiritual pilgrimages across India.", descHi: "भारत भर में सफल आध्यात्मिक तीर्थयात्राओं के आयोजन का सात वर्षों का अनुभव।" },
    { icon: "HeartHandshake", titleEn: "Affordable Prices", titleHi: "किफायती कीमतें", descEn: "Best value packages without compromising on quality and comfort.", descHi: "गुणवत्ता और आराम से समझौता किए बिना सर्वोत्तम मूल्य पैकेज।" },
    { icon: "MapPin", titleEn: "20+ Destinations", titleHi: "20+ गंतव्य", descEn: "Covering major Hindu pilgrimage sites across India.", descHi: "भारत भर के प्रमुख हिंदू तीर्थ स्थलों को कवर करते हैं।" },
  ];

export const values = [
    { icon: "Heart", titleEn: "Devotion & Faith", titleHi: "भक्ति और श्रद्धा", descEn: "Every journey we organize is rooted in deep devotion and respect for Hindu traditions and scriptures.", descHi: "हम जो भी यात्रा आयोजित करते हैं वह हिंदू परंपराओं और शास्त्रों के प्रति गहरी भक्ति और सम्मान पर आधारित है।" },
    { icon: "Shield", titleEn: "Our Unique Approach", titleHi: "हमारा अनोखा दृष्टिकोण", descEn: "What truly sets us apart is the care and personal attention we give to every traveler. We treat every traveler like a member of our own family and respect their feelings, faith, and expectations. We celebrate special moments—birthdays, anniversaries, and special days—among our group, creating beautiful memories and strengthening togetherness.", descHi: "जो हमें अलग करता है वह हर यात्री को दिया जाने वाला देखभाल और व्यक्तिगत ध्यान है। हम हर यात्री को अपने परिवार के सदस्य की तरह मानते हैं और उनकी भावनाओं, आस्था और अपेक्षाओं का सम्मान करते हैं। हम विशेष क्षणों - जन्मदिन, वर्षगांठ और विशेष दिनों को मनाते हैं, सुंदर यादें बनाते हैं।" },
    { icon: "Users", titleEn: "Family Values", titleHi: "पारिवारिक मूल्य", descEn: "We treat every pilgrim as family. Special care for senior citizens, women, and children.", descHi: "हम हर तीर्थयात्री को परिवार मानते हैं। वरिष्ठ नागरिकों, महिलाओं और बच्चों के लिए विशेष देखभाल।" },
    { icon: "Award", titleEn: "Quality Service", titleHi: "गुणवत्ता सेवा", descEn: "From hygienic vegetarian meals to comfortable stays, we never compromise on quality.", descHi: "स्वच्छ शाकाहारी भोजन से लेकर आरामदायक ठहरने तक, हम गुणवत्ता से कभी समझौता नहीं करते।" },
    { icon: "MapPin", titleEn: "Pan-India Coverage", titleHi: "पूरे भारत में सेवा", descEn: "We cover all major Hindu pilgrimage sites from Char Dham to Rameshwaram, Dwarka to Jagannath Puri.", descHi: "हम चार धाम से रामेश्वरम, द्वारका से जगन्नाथ पुरी तक सभी प्रमुख हिंदू तीर्थ स्थलों को कवर करते हैं।" },
    { icon: "BookOpen", titleEn: "Spiritual Knowledge", titleHi: "आध्यात्मिक ज्ञान", descEn: "Our pandits share the significance, history, and legends of each sacred place during the journey.", descHi: "हमारे पंडित यात्रा के दौरान प्रत्येक पवित्र स्थान का महत्व, इतिहास और कथाएं साझा करते हैं।" },
  ];

export const team = [
    { nameEn: "Dr. J. P. Agrawal", nameHi: "डॉ. जे. पी. अग्रवाल", roleEn: "Founder", roleHi: "संस्थापक", descEn: "Dr. J. P. Agrawal has been dedicated to spreading spiritual knowledge based on the teachings of our Sanatan scriptures for many years, especially among the youth. With deep understanding and passion for spirituality, he guides travelers not only through sacred destinations but also towards a better understanding of spiritual values and life wisdom, making every journey more meaningful and enriching.", descHi: "डॉ. जे. पी. अग्रवाल कई वर्षों से हमारे सनातन शास्त्रों की शिक्षाओं पर आधारित आध्यात्मिक ज्ञान फैलाने के लिए समर्पित हैं, विशेष रूप से युवाओं के बीच। आध्यात्मिकता के प्रति गहरी समझ और जुनून के साथ, वह यात्रियों को न केवल पवित्र गंतव्यों के माध्यम से बल्कि आध्यात्मिक मूल्यों और जीवन ज्ञान की बेहतर समझ के दिशा में भी मार्गदर्शन करते हैं।" },
    { nameEn: "Akhileswari Dasi", nameHi: "अखिलेश्वरी दासी", roleEn: "Coordinator", roleHi: "समन्वयक", descEn: "Akhileswari Dasi serves as the Coordinator and is a spiritual and motivational guide. She actively organizes spiritual programs among the masses to spread devotion and preach the chanting of the Holy Name, inspiring people to connect with spirituality and lead a more meaningful life.", descHi: "अखिलेश्वरी दासी समन्वयक के रूप में कार्य करती हैं और एक आध्यात्मिक और प्रेरक गाइड हैं। वह लोगों के बीच आध्यात्मिक कार्यक्रमों का सक्रिय रूप से आयोजन करती हैं, भक्ति को फैलाने और पवित्र नाम के जाप का प्रचार करने के लिए, लोगों को आध्यात्मिकता से जुड़ने और अधिक सार्थक जीवन जीने के लिए प्रेरित करती हैं।" },
  ];

export const faqs = [
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

export const galleryExtra = (sriLankaRamayana2027.gallery ?? []).map((g, i) => ({
  id: 100 + i,
  src: g.src,
  categoryEn: "Sri Lanka",
  categoryHi: "श्रीलंका",
  captionEn: g.en,
  captionHi: g.hi,
}));

export const CONTACT = {
  organiser: "Dr. J. P. Agrawal",
  organiserHi: "डॉ. जे. पी. अग्रवाल",
  phone: "+91 94142 48951",
  phoneRaw: "919414248951",
  altPhone: "+91 74148 95189",
  email: "srimadanmohan@tirthyatra.com",
  website: "https://www.srimadanmohantirthyatra.in",
  addressEn: "Sri Madanmohan Tirth Yatra, Near Bus Stand, Jaipur, Rajasthan",
  addressHi: "श्री मदनमोहन तीर्थ यात्रा, बस स्टैंड के पास, जयपुर, राजस्थान",
  mapEmbed: "https://www.google.com/maps?q=26.8842158,75.7465589&z=17&output=embed",
  logo: "https://res.cloudinary.com/dikn5wjzs/image/upload/v1779121565/trithyatra_logo-removebg-preview_szoobf.png",
  social: {
    facebook: "https://www.facebook.com/people/Sri-Madanmohan-Tirth-Yatra/61589828699943/",
    instagram: "https://www.instagram.com/srimadanmohan_tirth_yatra",
    youtube: "https://youtube.com/@purebhakticenterjaipur7577",
  },
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${CONTACT.phoneRaw}?text=${encodeURIComponent(message)}`;

export const getPackage = (id: string) => tourPackages.find((p) => p.id === id);

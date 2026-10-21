export interface DaySchedule {
  dayNumber: number;
  date: string;
  dayOfWeek: string;
  location: string;
  stayCity: string;
  highlights: string[];
  description: string;
  mealPlan: string;
  transport: string;
}

export interface TempleDarshan {
  name: string;
  deity: string;
  city: string;
  state: string;
  significance: string;
  specialRitual?: string;
}

export interface YatraPackage {
  id: 'south-2027' | 'dwarka-somnath-2027';
  title: string;
  hindiTitle: string;
  subtitle: string;
  organizer: string;
  organizerContact: string;
  dates: string;
  duration: string;
  pricePerPerson: number;
  bookingAdvance: number;
  trainDetails: string;
  trainClassAvailable: ('3-AC' | '2-AC')[];
  twoAcUpgradeDiff: number;
  stayHighlights: string;
  heroImage: string;
  darshanList: TempleDarshan[];
  itinerary: DaySchedule[];
  inclusions: string[];
  exclusions: string[];
  importantNotes: string[];
}

export const YATRA_PACKAGES: Record<string, YatraPackage> = {
  'south-2027': {
    id: 'south-2027',
    title: 'South Yatra 2027 (Dakshin Bharat Maha Tirth Yatra)',
    hindiTitle: 'दक्षिण भारत महातीर्थ यात्रा २०२७',
    subtitle: 'Sri Madan Mohan Tirth Yatra Jaipur',
    organizer: 'Dr. J. P. Agrawal',
    organizerContact: '9414248951',
    dates: '31 January to 13 February 2027',
    duration: '14 Days / 13 Nights',
    pricePerPerson: 41000,
    bookingAdvance: 7000,
    trainDetails: '3-AC train tickets in Anuvrat SF Express and Rajdhani Express (Departure & Return Jaipur)',
    trainClassAvailable: ['3-AC', '2-AC'],
    twoAcUpgradeDiff: 5500,
    stayHighlights: '2 Nights Rameshwaram, 2 Nights Tirupati, 1 Night each at Srisailam, Ahobilam, Srirangam, Kanyakumari & Thiruvananthapuram',
    heroImage: '/src/assets/images/hero_south_temple_1792593727448.jpg',
    darshanList: [
      {
        name: 'Rameswaram Jyotirlinga (Ramanathaswamy)',
        deity: 'Lord Shiva (Jyotirlinga consecrated by Lord Sri Ram)',
        city: 'Rameshwaram',
        state: 'Tamil Nadu',
        significance: 'One of the four sacred Char Dham and holy 12 Jyotirlingas.',
        specialRitual: '22 Sacred Kuon Snan (22 holy well baths) and holy Samudra Snan in Agni Teertham.'
      },
      {
        name: 'Dhanushkodi & Ram Setu',
        deity: 'Lord Sri Rama & Vibhishana',
        city: 'Dhanushkodi',
        state: 'Tamil Nadu',
        significance: 'Historic bridge point built by Vanara Sena towards Lanka; where Indian Ocean & Bay of Bengal converge.'
      },
      {
        name: 'Srirangam (Sri Ranganathaswamy Temple)',
        deity: 'Lord Sri Ranganatha Swamy (Maha Vishnu in reclining posture)',
        city: 'Tiruchirappalli (Trichy)',
        state: 'Tamil Nadu',
        significance: 'Premier Vaishnava Divya Desam, world-renowned stone architecture and rajagopuram.'
      },
      {
        name: 'Tirupati Balaji (Sri Venkateswara Swamy)',
        deity: 'Lord Sri Venkateswara (Kaliyuga Varada)',
        city: 'Tirupati (Tirumala Hills)',
        state: 'Andhra Pradesh',
        significance: 'World-famous sacred hill shrine offering wish-fulfilling divine darshan & authentic laddu prasadam.'
      },
      {
        name: 'Mallikarjuna Jyotirlinga (Srisailam)',
        deity: 'Lord Shiva & Goddess Bhramaramba Devi',
        city: 'Srisailam',
        state: 'Andhra Pradesh',
        significance: 'Sacred Jyotirlinga and Mahashakti Peeth nestled on the Nallamala forested hills overlooking the Krishna river.'
      },
      {
        name: 'Sri Lakshmi Narayani Golden Temple',
        deity: 'Goddess Mahalakshmi',
        city: 'Vellore',
        state: 'Tamil Nadu',
        significance: 'Ornate temple overlaid with over 1,500 kg of pure gold foil amidst star-shaped path.'
      },
      {
        name: 'Ahobilam (Sri Nava Narasimha Kshetram)',
        deity: 'Lord Narasimha Swamy',
        city: 'Ahobilam',
        state: 'Andhra Pradesh',
        significance: 'The historic holy ground where Lord Narasimha emerged from the pillar to protect devotee Prahlada.'
      },
      {
        name: 'Kanyakumari Darshan',
        deity: 'Devi Kanyakumari & Swami Vivekananda',
        city: 'Kanyakumari',
        state: 'Tamil Nadu',
        significance: 'Triveni Sangam of Arabian Sea, Bay of Bengal, and Indian Ocean, with Vivekananda Rock Memorial.'
      },
      {
        name: 'Padmanabhaswamy Temple',
        deity: 'Lord Anantha Padmanabha Swamy',
        city: 'Thiruvananthapuram',
        state: 'Kerala',
        significance: 'World-renowned sacred treasure temple of Lord Vishnu resting on serpent Adi Shesha.'
      }
    ],
    itinerary: [
      {
        dayNumber: 1,
        date: '31 January 2027',
        dayOfWeek: 'Sunday',
        location: 'Jaipur Departure',
        stayCity: 'In Train (Anuvrat SF Express)',
        highlights: ['Departure from Jaipur Junction', 'Confirmed 3-AC / 2-AC Coach', 'Hot Vaishnava dinner prasadam served on board'],
        description: 'Pilgrims assemble at Jaipur Junction to commence our sacred South India pilgrimage. Board the Anuvrat SF Express with comfortable AC reserved berths. Evening satsang and dinner prasadam served in train.',
        mealPlan: 'Dinner Prasadam in train',
        transport: 'Train (Anuvrat SF Express)'
      },
      {
        dayNumber: 2,
        date: '01 February 2027',
        dayOfWeek: 'Monday',
        location: 'En Route Deccan & South India',
        stayCity: 'In Train',
        highlights: ['Full day scenic train journey', 'Morning tea, breakfast, lunch & dinner onboard', 'Devotional bhajans & kirtan'],
        description: 'Smooth and leisurely journey through the picturesque landscapes of Central and Southern India. Fellow yatris participate in devotional kirtans with pure Satvik prasadam served on time.',
        mealPlan: 'Breakfast, Lunch & Dinner in train',
        transport: 'Train'
      },
      {
        dayNumber: 3,
        date: '02 February 2027',
        dayOfWeek: 'Tuesday',
        location: 'Arrival Ongole ➔ Srisailam',
        stayCity: 'Srisailam (1 Night Stay)',
        highlights: ['Arrival at Ongole station', 'Transfer by deluxe AC Bus to Srisailam', 'Mallikarjuna Jyotirlinga Darshan & evening Aarti'],
        description: 'Train arrives at Ongole railway station. Yatris board our private AC Bus and proceed through the scenic Nallamala forest hills to holy Srisailam. Check-in to AC rooms, take holy bath, and proceed for divine darshan of Mallikarjuna Jyotirlinga and Bhramaramba Devi.',
        mealPlan: 'Breakfast, Lunch & Dinner Prasadam',
        transport: 'AC Bus from Ongole'
      },
      {
        dayNumber: 4,
        date: '03 February 2027',
        dayOfWeek: 'Wednesday',
        location: 'Srisailam ➔ Ahobilam',
        stayCity: 'Ahobilam (1 Night Stay)',
        highlights: ['Scenic hill drive to Ahobilam', 'Narasimha Swamy Darshan', 'Check-in to AC hotel'],
        description: 'Depart after morning breakfast to holy Ahobilam, celebrated as the sacred land of Lord Narasimha. Arrive, settle into AC accommodation, and experience the divine darshan of Sri Narasimha Swamy. Evening spiritual discourse.',
        mealPlan: 'Breakfast, Lunch & Dinner Prasadam',
        transport: 'AC Bus'
      },
      {
        dayNumber: 5,
        date: '04 February 2027',
        dayOfWeek: 'Thursday',
        location: 'Ahobilam ➔ Tirupati',
        stayCity: 'Tirupati (Night 1 of 2)',
        highlights: ['Depart to holy Tirupati foothills', 'Check-in to comfortable AC hotel', 'Rest & briefing for Tirumala darshan'],
        description: 'Depart towards the sacred city of Tirupati. Smooth AC highway drive, arrival and check-in. Evening at leisure with Satvik dinner and preparation for Lord Venkateswara Balaji darshan.',
        mealPlan: 'Breakfast, Lunch & Dinner Prasadam',
        transport: 'AC Bus'
      },
      {
        dayNumber: 6,
        date: '05 February 2027',
        dayOfWeek: 'Friday',
        location: 'Tirupati & Tirumala Balaji',
        stayCity: 'Tirupati (Night 2 of 2)',
        highlights: ['Ascent to Tirumala holy hills', 'Lord Venkateswara Balaji Darshan', 'Holy Laddu Prasadam', 'Second night stay at Tirupati'],
        description: 'An unforgettable day on the seven sacred hills of Tirumala. Divine Darshan of Sri Venkateswara Swamy (Tirupati Balaji). Receive authentic Tirupati laddu prasadam, visit Sri Padmavathi Ammavari Temple at Alamelu Mangapuram. Return to AC hotel for dinner.',
        mealPlan: 'Breakfast, Lunch & Dinner Prasadam',
        transport: 'AC Bus / Local Auto'
      },
      {
        dayNumber: 7,
        date: '06 February 2027',
        dayOfWeek: 'Saturday',
        location: 'Vellore Golden Temple ➔ Srirangam',
        stayCity: 'Srirangam / Trichy (1 Night Stay)',
        highlights: ['Darshan at Sri Lakshmi Narayani Golden Temple Vellore', 'Srirangam Ranganatha Swamy Darshan', 'Grand Rajagopuram'],
        description: 'Morning departure towards Tamil Nadu. Stop at Vellore for the magnificent Sri Lakshmi Narayani Golden Temple glistening with pure gold. Proceed to Tiruchirappalli (Srirangam) to worship Sri Ranganatha Swamy in the sacred island temple. Overnight AC stay.',
        mealPlan: 'Breakfast, Lunch & Dinner Prasadam',
        transport: 'AC Bus'
      },
      {
        dayNumber: 8,
        date: '07 February 2027',
        dayOfWeek: 'Sunday',
        location: 'Srirangam ➔ Rameshwaram',
        stayCity: 'Rameshwaram (Night 1 of 2)',
        highlights: ['Scenic journey across the oceanic corridor', 'Arrival at holy island of Rameshwaram', 'Check-in to AC hotel & Agni Teertham walk'],
        description: 'Travel through the historic coastal landscapes to Rameshwaram Island. Check-in to AC accommodation for our 2-night stay. Evening walk near Agni Teertham seashore and peaceful temple surroundings.',
        mealPlan: 'Breakfast, Lunch & Dinner Prasadam',
        transport: 'AC Bus'
      },
      {
        dayNumber: 9,
        date: '08 February 2027',
        dayOfWeek: 'Monday',
        location: 'Rameshwaram Snan & Dhanushkodi',
        stayCity: 'Rameshwaram (Night 2 of 2)',
        highlights: ['Ramanathaswamy Jyotirlinga Darshan', 'Auspicious 22 Kund Snan (Holy Wells)', 'Agni Teertham Samudra Snan', 'Dhanushkodi Ram Setu view'],
        description: 'The pinnacle day of spiritual merit. Take sacred Samudra Snan at Agni Teertham, followed by the cleansing bath in all 22 ancient stone teertham wells within the temple sanctum. Darshan of Ramanathaswamy and Spatika Lingam. Afternoon excursion to Dhanushkodi (Ram Setu point).',
        mealPlan: 'Breakfast, Lunch & Dinner Prasadam',
        transport: 'AC Bus & Included Auto'
      },
      {
        dayNumber: 10,
        date: '09 February 2027',
        dayOfWeek: 'Tuesday',
        location: 'Rameshwaram ➔ Kanyakumari',
        stayCity: 'Kanyakumari (1 Night Stay)',
        highlights: ['Travel to the southernmost tip of India', 'Triveni Sangam sunset view', 'Devi Kanyakumari Amman Temple'],
        description: 'Scenic drive to Kanyakumari, where the three sacred oceans meet. Visit Devi Kanyakumari Amman temple, view the sunset over Triveni Sangam, and view Vivekananda Rock Memorial. Check-in to AC hotel.',
        mealPlan: 'Breakfast, Lunch & Dinner Prasadam',
        transport: 'AC Bus'
      },
      {
        dayNumber: 11,
        date: '10 February 2027',
        dayOfWeek: 'Wednesday',
        location: 'Kanyakumari ➔ Thiruvananthapuram',
        stayCity: 'Thiruvananthapuram (1 Night Stay)',
        highlights: ['Sunrise at Triveni Sangam', 'Drive into Kerala capital Thiruvananthapuram', 'Padmanabhaswamy Temple Darshan in traditional attire'],
        description: 'Witness the morning sunrise at Kanyakumari shore. Depart into lush Kerala to Thiruvananthapuram. Wear traditional traditional attire (mundu/dhoti/saree) for the solemn divine darshan of Lord Padmanabhaswamy through the three sacred doors. Overnight AC stay.',
        mealPlan: 'Breakfast, Lunch & Dinner Prasadam',
        transport: 'AC Bus'
      },
      {
        dayNumber: 12,
        date: '11 February 2027',
        dayOfWeek: 'Thursday',
        location: 'Thiruvananthapuram Departure',
        stayCity: 'In Train (Rajdhani Express)',
        highlights: ['Board Rajdhani Express back to Jaipur', 'Fastest premier AC train route', 'Catered pure meals on train'],
        description: 'Morning transfer to Thiruvananthapuram railway station. Board the prestigious Rajdhani Express with reserved AC berths for our return journey to Jaipur. Relish delicious warm satvik meals on board.',
        mealPlan: 'Breakfast & Onboard Train Meals',
        transport: 'Train (Rajdhani Express)'
      },
      {
        dayNumber: 13,
        date: '12 February 2027',
        dayOfWeek: 'Friday',
        location: 'En Route Konkan & Western Route',
        stayCity: 'In Train',
        highlights: ['Relaxing day on Rajdhani Express', 'Satsang and reflections on yatra blessings', 'Train meals served fresh'],
        description: 'Comfortable day on board the Rajdhani Express traversing the scenic Konkan and Western railway tracks. Share joyful memories, photos, and divine experiences with co-devotees.',
        mealPlan: 'Train Meals Included',
        transport: 'Train (Rajdhani Express)'
      },
      {
        dayNumber: 14,
        date: '13 February 2027',
        dayOfWeek: 'Saturday',
        location: 'Arrival Back in Jaipur',
        stayCity: 'Home Sweet Home',
        highlights: ['Arrival at Jaipur Junction', 'Yatra Mangal celebrations', 'Blessings of all 9 Teerths'],
        description: 'Rajdhani Express arrives safely back at Jaipur Junction with the divine grace of Sri Radha Madan Mohan Ji. Conclude this transformative 14-day South India pilgrimage with everlasting spiritual merit. Yatra Mangal!',
        mealPlan: 'Morning tea / Breakfast on arrival',
        transport: 'Train arrival at Jaipur'
      }
    ],
    inclusions: [
      '3-AC confirmed train tickets in Anuvrat SF Express & Rajdhani Express (Jaipur to Jaipur)',
      'Deluxe AC Bus for all road travel between cities and shrines',
      'AC Hotel Rooms throughout: 2 Nights in Rameshwaram, 2 Nights in Tirupati, 1 Night Srisailam, Ahobilam, Srirangam, Kanyakumari, and Thiruvananthapuram',
      'Pure Satvik Prasadam: Daily Breakfast, Lunch, and Dinner (strictly prepared without onion & garlic)',
      'Prasadam in train: Both Lunch and Dinner included during train journeys',
      'Local Auto-rickshaw charges for temple approaches included in package',
      'Dedicated group leader, yatra management & coordination by Dr. J. P. Agrawal'
    ],
    exclusions: [
      'Special VIP / Quick Darshan entry passes (available directly at temple counters)',
      'Personal beverages like Coffee, Cold drinks, mineral water bottles',
      'Boat riding charges, ferry tickets (e.g. Vivekananda Rock ferry)',
      'Private taxi hires for personal sightseeing outside scheduled itinerary',
      'Personal luggage porter charges & laundry'
    ],
    importantNotes: [
      'Token booking advance: ₹7,000/- per person to confirm seat reservation.',
      'Package fare: ₹41,000/- per person (inclusive of 3-AC train, AC bus, AC rooms & satvik prasadam). 2-AC upgrade option available upon request.',
      'Traditional dress code is mandatory for Padmanabhaswamy Temple (Dhoti/Veshti for men, Saree/Pavada for women) and Tirupati.',
      'Carrying valid original Government Photo ID (Aadhaar Card / Voter ID) is compulsory for train travel and temple verification.'
    ]
  },

  'dwarka-somnath-2027': {
    id: 'dwarka-somnath-2027',
    title: 'Dwarka - Somnath - Saurashtra Tirth Yatra',
    hindiTitle: 'द्वारकाधीश - सोमनाथ - सौराष्ट्र तीर्थ यात्रा',
    subtitle: 'Sri Madanmohan Tirth Yatra Jaipur',
    organizer: 'Dr. J. P. Agrawal',
    organizerContact: '9414248951',
    dates: '05 January to 11 January',
    duration: '7 Days / 6 Nights',
    pricePerPerson: 17000,
    bookingAdvance: 5000,
    trainDetails: '3-AC train tickets (Departure & Return Jaipur)',
    trainClassAvailable: ['3-AC', '2-AC'],
    twoAcUpgradeDiff: 2800,
    stayHighlights: '2 Nights stay at Dwarka & 2 Nights stay at Somnath (AC Rooms)',
    heroImage: '/src/assets/images/dwarka_somnath_temple_1792593727974.jpg',
    darshanList: [
      {
        name: 'Dwarkadhish Temple (Jagat Mandir)',
        deity: 'Lord Sri Krishna (King of Dwarka)',
        city: 'Dwarka',
        state: 'Gujarat',
        significance: 'One of the prestigious Char Dham holy pilgrimage shrines situated at the Gomti river sangam.',
        specialRitual: 'Dhwajaa Aarohan (Flag changing ceremony) and Gomti Ghat Snan.'
      },
      {
        name: 'Somnath Jyotirlinga',
        deity: 'Lord Shiva (First among the 12 Sacred Jyotirlingas)',
        city: 'Prabhas Patan, Somnath',
        state: 'Gujarat',
        significance: 'Sacred timeless coastal temple where the ocean waves wash Lord Shiva\'s sanctum at sunset.',
        specialRitual: 'Grand Evening Aarti and laser Light & Sound Show on the Arabian Sea shore.'
      },
      {
        name: 'Nageshwar Jyotirlinga',
        deity: 'Lord Shiva (Nageshvara Jyotirlinga)',
        city: 'Near Dwarka',
        state: 'Gujarat',
        significance: 'Prominent Jyotirlinga shrine with a towering 80-foot Lord Shiva statue.'
      },
      {
        name: 'Bet Dwarka (Shankhodhar)',
        deity: 'Lord Sri Krishna & Sudama',
        city: 'Bet Dwarka Island',
        state: 'Gujarat',
        significance: 'The historic residence of Lord Krishna where friendship with Sudama was celebrated.'
      },
      {
        name: 'Rukmini Devi Temple',
        deity: 'Goddess Rukmini (Consort of Sri Krishna)',
        city: 'Dwarka',
        state: 'Gujarat',
        significance: 'Ancient 12th-century stone temple dedicated to Maharani Rukmini, known for holy Jal-Daan ritual.'
      },
      {
        name: 'Gopi Talav',
        deity: 'Gopis of Vrindavan & Sri Krishna',
        city: 'Dwarka',
        state: 'Gujarat',
        significance: 'Holy pond where the Gopis united with Krishna; source of sacred Gopi Chandan.'
      },
      {
        name: 'Gir National Park Periphery',
        deity: 'Sasan Gir Wildlife Sanctuary',
        city: 'Gir',
        state: 'Gujarat',
        significance: 'World famous sanctuary, the sole natural habitat of the Asiatic Lion.'
      },
      {
        name: 'Diu Beach & Coastal Promenade',
        deity: 'Coastal Beauty & Portuguese Fort',
        city: 'Diu',
        state: 'Union Territory',
        significance: 'Peaceful Arabian Sea beach retreat with clean golden sands and gentle breezes.'
      }
    ],
    itinerary: [
      {
        dayNumber: 1,
        date: '05 January',
        dayOfWeek: 'Day 1',
        location: 'Jaipur Departure',
        stayCity: 'In Train (From Jaipur)',
        highlights: ['Departure from Jaipur Junction', 'Confirmed 3-AC / 2-AC berths', 'Train dinner prasadam provided'],
        description: 'Yatris gather at Jaipur railway station to board the express train to Dwarka. Settle comfortably into reserved AC coaches. Pure Vaishnava prasadam served in train.',
        mealPlan: 'Dinner Prasadam in train',
        transport: 'Train from Jaipur'
      },
      {
        dayNumber: 2,
        date: '06 January',
        dayOfWeek: 'Day 2',
        location: 'Arrival Dwarka & Jagat Mandir',
        stayCity: 'Dwarka (Night 1 of 2)',
        highlights: ['Arrival at Dwarka', 'Hotel check-in (AC Rooms)', 'Dwarkadhish Temple Evening Darshan & Gomti Ghat'],
        description: 'Arrive at the holy city of Lord Krishna, Dwarka. Transfer to AC hotel, freshen up, and visit the magnificent 2500-year-old Jagat Mandir for divine darshan of Dwarkadhish. Evening walk at Gomti Ghat.',
        mealPlan: 'Breakfast, Lunch & Dinner Prasadam',
        transport: 'AC Bus & Local Auto'
      },
      {
        dayNumber: 3,
        date: '07 January',
        dayOfWeek: 'Day 3',
        location: 'Nageshwar, Gopi Talav & Bet Dwarka',
        stayCity: 'Dwarka (Night 2 of 2)',
        highlights: ['Nageshwar Jyotirlinga Darshan', 'Gopi Talav holy chandan', 'Ferry ride to Bet Dwarka', 'Rukmini Temple darshan'],
        description: 'Full day holy circuit. Visit Nageshwar Jyotirlinga for sacred prayers, sacred Gopi Talav pond, boat crossing to island of Bet Dwarka to witness the King\'s palace temple, and visit Rukmini Devi Temple.',
        mealPlan: 'Breakfast, Lunch & Dinner Prasadam',
        transport: 'AC Bus'
      },
      {
        dayNumber: 4,
        date: '08 January',
        dayOfWeek: 'Day 4',
        location: 'Dwarka ➔ Somnath',
        stayCity: 'Somnath (Night 1 of 2)',
        highlights: ['Scenic drive along Saurashtra coast', 'Check-in at Somnath AC hotel', 'Somnath Jyotirlinga Sunset Aarti & Light Show'],
        description: 'Depart Dwarka for holy Prabhas Patan (Somnath). Check in to our AC hotel in Somnath. In the evening, attend the awe-inspiring Sandhya Aarti at the Somnath Jyotirlinga overlooking the roaring Arabian Sea, followed by the sound and light narrative.',
        mealPlan: 'Breakfast, Lunch & Dinner Prasadam',
        transport: 'AC Bus'
      },
      {
        dayNumber: 5,
        date: '09 January',
        dayOfWeek: 'Day 5',
        location: 'Diu Beach & Gir National Park',
        stayCity: 'Somnath (Night 2 of 2)',
        highlights: ['Excursion to Diu Beach promenade', 'Drive around Gir National Park forested area', 'Return for quiet stay at Somnath'],
        description: 'Day trip across Saurashtra: visit the scenic coast of Diu and the peripheral forest roads of Gir National Park. Return to Somnath for evening prayers and our second night stay.',
        mealPlan: 'Breakfast, Lunch & Dinner Prasadam',
        transport: 'AC Bus'
      },
      {
        dayNumber: 6,
        date: '10 January',
        dayOfWeek: 'Day 6',
        location: 'Somnath ➔ Departure to Jaipur',
        stayCity: 'In Train',
        highlights: ['Morning final darshan & prasadam', 'Board return train to Jaipur', 'Train lunch & dinner prasadam'],
        description: 'Morning prayers at Bhalka Tirth (Lord Krishna avatar conclusion site) and Somnath. Transfer to railway station to board our return train to Jaipur. Enjoy hot satvik meals on board.',
        mealPlan: 'Breakfast & Train Meals',
        transport: 'Train to Jaipur'
      },
      {
        dayNumber: 7,
        date: '11 January',
        dayOfWeek: 'Day 7',
        location: 'Arrival in Jaipur',
        stayCity: 'Home Sweet Home',
        highlights: ['Safe arrival at Jaipur', 'Completion of Saurashtra Panch Tirth', 'Yatra Mangal!'],
        description: 'Train arrives at Jaipur Junction. With hearts full of devotion and Krishna-Shiva blessings, our sacred journey concludes happily. Yatra Mangal!',
        mealPlan: 'Morning tea / on arrival',
        transport: 'Train arrival at Jaipur'
      }
    ],
    inclusions: [
      '3-AC train tickets from Jaipur and return to Jaipur',
      'Comfortable AC Bus throughout Saurashtra road tour',
      'AC Hotel Rooms: 2 Nights stay in Dwarka + 2 Nights stay in Somnath',
      'Pure Satvik Prasadam: Daily Breakfast, Lunch, and Dinner (cooked strictly without onion & garlic)',
      'Train Meals: Both Lunch & Dinner provided on train journeys',
      'Local Auto charges for temple approaches included in package',
      'Experienced group coordination & guidance by Dr. J. P. Agrawal'
    ],
    exclusions: [
      'VIP Darshan special passes (direct counter booking if needed)',
      'Boat riding tickets for Bet Dwarka ferry and Diu water rides',
      'Personal beverages like Coffee, Cold drinks, packaged snacks',
      'Private taxi charges or personal deviations from group route',
      'Safari entry tickets inside Gir National Park'
    ],
    importantNotes: [
      'Token booking advance: ₹5,000/- per person to secure AC train berths & hotel reservations.',
      'Total package cost: ₹17,000/- per person (including 3-AC train, AC bus, AC rooms & all satvik meals). 2-AC upgrade option available.',
      'Carry valid original Government Photo ID (Aadhaar Card) at all times.',
      'Darshan charges and temple offerings are not included.'
    ]
  }
};

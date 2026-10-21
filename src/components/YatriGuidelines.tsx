import React from 'react';
import { Shirt, ShieldAlert, Sparkles, FileText, CheckCircle2, HeartPulse, Luggage } from 'lucide-react';

export const YatriGuidelines: React.FC = () => {
  return (
    <section id="guidelines" className="py-14 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
            Important Information for Pilgrims
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-cinzel text-stone-900 tracking-tight">
            Yatri Guidelines & Sacred Protocol
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Please review these essential guidelines to ensure a smooth, spiritually uplifting, and comfortable pilgrimage for all devotees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Dress Code Rules */}
          <div className="p-5 rounded-xl border border-stone-200 bg-stone-50/50 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-stone-900 font-bold text-base mb-2">
                <Shirt className="w-5 h-5 text-amber-700" />
                <span>Strict Temple Dress Codes</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                South Indian shrines observe ancient dress codes:
              </p>
              <ul className="mt-2.5 space-y-2 text-xs text-stone-700">
                <li className="flex items-start gap-1.5">
                  <span className="text-amber-700 font-bold">·</span>
                  <span><strong>Padmanabhaswamy Temple (Kerala):</strong> Men must wear traditional white Dhoti/Mundu (shirts/pants prohibited). Women must wear Sarees or traditional long skirts.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-amber-700 font-bold">·</span>
                  <span><strong>Tirupati Balaji:</strong> Traditional Dhoti-Kurta or Pyjama for men; Saree or traditional Salwar Kameez with Dupatta for women. Western wear / bermudas not permitted.</span>
                </li>
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-200 text-[11px] text-amber-900 font-medium">
              We guide all yatris in purchasing authentic local dhotis if needed.
            </div>
          </div>

          {/* 22 Kund Snan & Samudra Snan */}
          <div className="p-5 rounded-xl border border-stone-200 bg-stone-50/50 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-stone-900 font-bold text-base mb-2">
                <Sparkles className="w-5 h-5 text-amber-700" />
                <span>22 Kund Snan (Rameshwaram)</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Bath in the 22 sacred teertham wells inside Rameshwaram Ramanathaswamy temple is believed to wash away all past karmas.
              </p>
              <ul className="mt-2.5 space-y-2 text-xs text-stone-700">
                <li className="flex items-start gap-1.5">
                  <span className="text-amber-700 font-bold">·</span>
                  <span>Bring a separate set of quick-drying cotton clothes and extra towel for the Snan.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-amber-700 font-bold">·</span>
                  <span>Dry changing rooms are available right after the snan before entering the primary Shiva lingam sanctum.</span>
                </li>
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-200 text-[11px] text-amber-900 font-medium">
              Temple priests assist in pouring holy water from each teertham.
            </div>
          </div>

          {/* Identification & Documents */}
          <div className="p-5 rounded-xl border border-stone-200 bg-stone-50/50 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-stone-900 font-bold text-base mb-2">
                <FileText className="w-5 h-5 text-amber-700" />
                <span>Mandatory Documents</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Important identity proofs required during travel:
              </p>
              <ul className="mt-2.5 space-y-2 text-xs text-stone-700">
                <li className="flex items-start gap-1.5">
                  <span className="text-amber-700 font-bold">·</span>
                  <span><strong>Original Aadhaar Card:</strong> Mandatory for checking into 3-AC Indian Railways coaches and verification at Tirupati darshan gates.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-amber-700 font-bold">·</span>
                  <span>Keep 2 passport-size photographs and a printed copy of your booking receipt.</span>
                </li>
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-200 text-[11px] text-emerald-800 font-medium">
              Verified identity ensures hassle-free entry at all checkpoints.
            </div>
          </div>

          {/* Senior Citizen Care */}
          <div className="p-5 rounded-xl border border-stone-200 bg-stone-50/50 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-stone-900 font-bold text-base mb-2">
                <HeartPulse className="w-5 h-5 text-amber-700" />
                <span>Senior Citizen Care & Health</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Sri Madanmohan Tirth Yatra treats every senior devotee like our own family:
              </p>
              <ul className="mt-2.5 space-y-2 text-xs text-stone-700">
                <li className="flex items-start gap-1.5">
                  <span className="text-amber-700 font-bold">·</span>
                  <span>Lower/middle berths in 3-AC prioritized for elders during railway reservation.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-amber-700 font-bold">·</span>
                  <span>Auto charges included so you do not have to walk long outer distances to temple rajagopurams.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-amber-700 font-bold">·</span>
                  <span>Please carry your regular prescribed medications for the 14-day duration.</span>
                </li>
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-200 text-[11px] text-amber-900 font-medium">
              First-aid kit and basic medical assistance are always with the bus manager.
            </div>
          </div>

          {/* Packing Essentials */}
          <div className="p-5 rounded-xl border border-stone-200 bg-stone-50/50 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-stone-900 font-bold text-base mb-2">
                <Luggage className="w-5 h-5 text-amber-700" />
                <span>Luggage & Packing Checklist</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Recommended packing for 14-day comfortable travel:
              </p>
              <ul className="mt-2.5 space-y-2 text-xs text-stone-700">
                <li className="flex items-start gap-1.5">
                  <span className="text-amber-700 font-bold">·</span>
                  <span>1 medium trolley suitcase per person + 1 small shoulder bag for train journeys.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-amber-700 font-bold">·</span>
                  <span>Light cotton wear, slip-on sandals (easy to remove at temple gates), socks for walking on warm stone courtyards.</span>
                </li>
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-200 text-[11px] text-stone-600">
              Luggage stays securely locked inside the AC Bus during local temple visits.
            </div>
          </div>

          {/* Seat Booking Advance */}
          <div className="p-5 rounded-xl border border-amber-300/80 bg-amber-50/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-amber-950 font-bold text-base mb-2">
                <CheckCircle2 className="w-5 h-5 text-amber-700" />
                <span>Booking Advance & Confirmation</span>
              </div>
              <p className="text-xs text-stone-700 leading-relaxed">
                Railway 3-AC berths open months in advance. Early token booking is essential:
              </p>
              <ul className="mt-2.5 space-y-2 text-xs text-stone-800">
                <li className="flex items-start gap-1.5">
                  <span className="text-amber-700 font-bold">·</span>
                  <span><strong>South Yatra 2027:</strong> ₹7,000/- per person booking advance.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-amber-700 font-bold">·</span>
                  <span><strong>Dwarka-Somnath Yatra:</strong> ₹5,000/- per person booking advance.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-amber-700 font-bold">·</span>
                  <span>Remaining balance payable comfortably prior to yatra departure.</span>
                </li>
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-amber-200 text-xs text-amber-900 font-semibold">
              Contact Dr. J. P. Agrawal (9414248951) for instant bank/UPI payment receipt.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

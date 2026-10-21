import React from 'react';
import { Phone, MapPin, Heart } from 'lucide-react';

interface FooterProps {
  onSelectYatra: (id: 'south-2027' | 'dwarka-somnath-2027') => void;
  onOpenBookingModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectYatra,
  onOpenBookingModal
}) => {
  return (
    <footer className="bg-stone-950 text-stone-300 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-stone-800/80">
          
          {/* Brand & Purpose */}
          <div className="md:col-span-2">
            <div className="text-xl font-bold font-cinzel text-white flex items-center gap-2">
              <span className="text-amber-500">ॐ</span>
              <span>Sri Radha Madanmohan Tirth Yatra</span>
            </div>
            <div className="text-xs text-amber-400 font-medium mt-1">
              Sri Madan Mohan Tirth Yatra Jaipur · Dr. J. P. Agrawal
            </div>
            <p className="text-xs text-stone-400 leading-relaxed mt-3 max-w-md">
              Serving the devotee community of Jaipur, Rajasthan, and nationwide since 2012 with meticulously planned pilgrimages. Featuring 3-AC / 2-AC train tickets, AC bus transfers, AC hotel stays, and pure satvik prasadam prepared strictly without onion and garlic.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <div className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
              Pilgrimage Tours
            </div>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  type="button"
                  onClick={() => onSelectYatra('south-2027')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  South Yatra 2027 (14 Days) · ₹41,000/-
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectYatra('dwarka-somnath-2027')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Dwarka–Somnath Yatra · ₹17,000/-
                </button>
              </li>
              <li>
                <a href="#itinerary" className="hover:text-amber-400 transition-colors">
                  Day-by-Day Itineraries
                </a>
              </li>
              <li>
                <a href="#inclusions" className="hover:text-amber-400 transition-colors">
                  Inclusions & Satvik Prasadam
                </a>
              </li>
              <li>
                <a href="#guidelines" className="hover:text-amber-400 transition-colors">
                  Yatri Guidelines & Dress Code
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <div className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
              Booking & Assistance
            </div>
            <div className="space-y-2 text-xs text-stone-400">
              <div>Chief Organizer: <strong className="text-white">Dr. J. P. Agrawal</strong></div>
              <div>
                Mobile:{' '}
                <a href="tel:9414248951" className="text-amber-400 font-bold hover:underline">
                  9414248951
                </a>
              </div>
              <div>Departure Station: <strong className="text-stone-300">Jaipur Junction (Rajasthan)</strong></div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenBookingModal}
                  className="px-3.5 py-1.5 bg-amber-600 hover:bg-amber-500 text-white rounded text-xs font-semibold cursor-pointer transition-colors"
                >
                  Reserve Your Seat
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Sri Radha Madanmohan Tirth Yatra Jaipur. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-stone-400">
            <span>Organized with devotion & seva</span>
            <span className="text-amber-500">·</span>
            <span>Yatra Mangal</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

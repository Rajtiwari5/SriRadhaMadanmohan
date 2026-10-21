import React, { useState } from 'react';
import { Volume2, VolumeX, PhoneCall } from 'lucide-react';
import { devotionalAudio } from '../utils/devotionalAudio';

interface NavbarProps {
  activeTab: 'south-2027' | 'dwarka-somnath-2027';
  onSelectYatra: (id: 'south-2027' | 'dwarka-somnath-2027') => void;
  onOpenBookingModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectYatra,
  onOpenBookingModal
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const toggleSound = () => {
    const state = devotionalAudio.toggle();
    setIsPlayingAudio(state);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-900/10 shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 h-18">
        
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a 
          href="#home" 
          className="text-lg sm:text-xl font-bold tracking-tight text-amber-950 font-cinzel whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span className="text-amber-600 select-none">ॐ</span>
          <span>Sri Radha Madanmohan Tirth Yatra</span>
        </a>

        {/* Zone 2: 4-5 concise single-line navigation links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-stone-700">
          <button
            onClick={() => onSelectYatra('south-2027')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer pb-0.5 border-b-2 ${
              activeTab === 'south-2027'
                ? 'border-amber-600 text-amber-900 font-semibold'
                : 'border-transparent hover:text-amber-900 hover:border-amber-300'
            }`}
          >
            South Yatra 2027
          </button>

          <button
            onClick={() => onSelectYatra('dwarka-somnath-2027')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer pb-0.5 border-b-2 ${
              activeTab === 'dwarka-somnath-2027'
                ? 'border-amber-600 text-amber-900 font-semibold'
                : 'border-transparent hover:text-amber-900 hover:border-amber-300'
            }`}
          >
            Dwarka–Somnath
          </button>

          <a
            href="#itinerary"
            className="whitespace-nowrap shrink-0 transition-colors hover:text-amber-900"
          >
            Day-by-Day Itinerary
          </a>

          <a
            href="#inclusions"
            className="whitespace-nowrap shrink-0 transition-colors hover:text-amber-900"
          >
            Package Inclusions
          </a>

          <a
            href="#guidelines"
            className="whitespace-nowrap shrink-0 transition-colors hover:text-amber-900"
          >
            Yatri Guidelines
          </a>
        </nav>

        {/* Zone 3: 1 primary action (+ sound ambiance toggle) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={toggleSound}
            title={isPlayingAudio ? 'Mute sacred ambient chimes' : 'Listen to sacred temple chimes & tanpura'}
            className="p-2 text-stone-600 hover:text-amber-800 rounded-md border border-stone-200 hover:bg-amber-50/50 transition-colors flex items-center gap-1.5 text-xs font-medium cursor-pointer"
          >
            {isPlayingAudio ? (
              <>
                <Volume2 className="w-4 h-4 text-amber-600 animate-pulse" />
                <span className="hidden sm:inline">Chants On</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-stone-400" />
                <span className="hidden sm:inline">Chants</span>
              </>
            )}
          </button>

          <a
            href="tel:9414248951"
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-stone-800 bg-stone-100 rounded-md hover:bg-stone-200 transition-colors whitespace-nowrap shrink-0"
          >
            <PhoneCall className="w-3.5 h-3.5 text-amber-700" />
            <span>9414248951</span>
          </a>

          <button
            onClick={onOpenBookingModal}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-amber-700 hover:bg-amber-800 rounded-md shadow-xs transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Book Seat
          </button>
        </div>

      </div>
    </header>
  );
};

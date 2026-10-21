import React, { useState } from 'react';
import { YATRA_PACKAGES, YatraPackage } from './data/yatraData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DarshanShowcase } from './components/DarshanShowcase';
import { ItineraryTimeline } from './components/ItineraryTimeline';
import { InclusionsExclusions } from './components/InclusionsExclusions';
import { SatvikPrasadamSection } from './components/SatvikPrasadamSection';
import { YatriGuidelines } from './components/YatriGuidelines';
import { OrganizerSection } from './components/OrganizerSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { QuickBrochureModal } from './components/QuickBrochureModal';
import { Phone, Calendar, ArrowRight, MessageCircle } from 'lucide-react';

export default function App() {
  const [activeYatraId, setActiveYatraId] = useState<'south-2027' | 'dwarka-somnath-2027'>('south-2027');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  const currentYatra = YATRA_PACKAGES[activeYatraId];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-amber-600 selection:text-white flex flex-col">
      
      {/* Top Navigation */}
      <Navbar
        activeTab={activeYatraId}
        onSelectYatra={(id) => setActiveYatraId(id)}
        onOpenBookingModal={() => setIsBookingModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <Hero
          yatra={currentYatra}
          activeId={activeYatraId}
          onSelectYatra={(id) => setActiveYatraId(id)}
          onOpenBookingModal={() => setIsBookingModalOpen(true)}
          onOpenQuickBrochure={() => setIsBrochureModalOpen(true)}
        />

        {/* Shrines & Sacred Darshans */}
        <DarshanShowcase yatra={currentYatra} />

        {/* Day-by-Day Complete Itinerary */}
        <ItineraryTimeline yatra={currentYatra} />

        {/* Package Inclusions & Exclusions */}
        <InclusionsExclusions
          yatra={currentYatra}
          onOpenBookingModal={() => setIsBookingModalOpen(true)}
        />

        {/* Pure Vaishnava Satvik Prasadam Experience */}
        <SatvikPrasadamSection />

        {/* Yatri Guidelines & Dress Code Protocol */}
        <YatriGuidelines />

        {/* Organizer Leadership & FAQs */}
        <OrganizerSection
          yatra={currentYatra}
          onOpenBookingModal={() => setIsBookingModalOpen(true)}
        />

      </main>

      {/* Footer */}
      <Footer
        onSelectYatra={(id) => setActiveYatraId(id)}
        onOpenBookingModal={() => setIsBookingModalOpen(true)}
      />

      {/* Modals */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        yatra={currentYatra}
        onSelectYatra={(id) => setActiveYatraId(id)}
      />

      <QuickBrochureModal
        isOpen={isBrochureModalOpen}
        onClose={() => setIsBrochureModalOpen(false)}
        yatra={currentYatra}
      />

      {/* Floating Quick Contact Pill for Mobile (Within 15% Mobile Sticky Cap) */}
      <div className="md:hidden fixed bottom-3 inset-x-3 z-30 flex items-center justify-between gap-2 p-2 bg-stone-900/95 backdrop-blur-md rounded-xl shadow-lg border border-stone-800 text-white">
        <a
          href="tel:9414248951"
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold bg-stone-800 rounded-lg text-white"
        >
          <Phone className="w-3.5 h-3.5 text-amber-400" />
          <span>Call 9414248951</span>
        </a>

        <button
          type="button"
          onClick={() => setIsBookingModalOpen(true)}
          className="flex-1 py-2 px-3 text-xs font-bold bg-amber-600 hover:bg-amber-500 rounded-lg text-white text-center cursor-pointer"
        >
          Book Seat (₹{currentYatra.bookingAdvance.toLocaleString('en-IN')})
        </button>
      </div>

    </div>
  );
}

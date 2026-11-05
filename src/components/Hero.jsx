import React, { useState } from 'react';
import { ArrowRight, MapPin, Calendar, Users, MessageSquare, ShieldCheck, Compass } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export default function Hero({ onOpenBooking }) {
  // Inline quick bar state
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [guests, setGuests] = useState('2');
  const [roomType, setRoomType] = useState('Not Decided');

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    onOpenBooking({
      checkIn,
      checkOut,
      guests,
      roomType
    });
  };

  const handleScrollToStay = (e) => {
    e.preventDefault();
    const el = document.getElementById('stay');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Subtle background ambient texture */}
      <div className="absolute inset-0 bg-[#FAF9F6] pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 varanasi-pattern pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Main Grid: Editorial Typography + Real Architectural Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Location Indicator Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-[#F1EEE7] border border-border text-primary text-[11px] sm:text-xs font-medium tracking-[0.16em] uppercase">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              <span>{HOTEL_INFO.locationBadge}</span>
            </div>

            {/* Eyebrow */}
            <div className="flex items-center space-x-3">
              <span className="w-8 h-[1px] bg-accent inline-block"></span>
              <p className="text-xs sm:text-sm font-semibold tracking-[0.24em] text-accent uppercase">
                A WELCOMING STAY IN THE HEART OF VARANASI
              </p>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-normal leading-[1.08] text-primary tracking-tight">
              Experience Varanasi.<br />
              <span className="italic font-light text-primary/90">Stay in Comfort.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-secondary text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              Discover a comfortable and welcoming stay in the spiritual heart of Varanasi, just moments away from the city's iconic temples, markets and cultural attractions.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3.5 sm:space-y-0 sm:space-x-5 w-full sm:w-auto">
              <a
                href="#stay"
                onClick={handleScrollToStay}
                className="btn-primary group"
              >
                <span>EXPLORE OUR ROOMS</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="btn-secondary"
              >
                <span>BOOK YOUR STAY</span>
              </button>
            </div>

            {/* Genuine Hotel Key Metrics */}
            <div className="pt-8 border-t border-border grid grid-cols-3 gap-6 w-full max-w-lg">
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-medium text-primary block">
                  24
                </span>
                <span className="text-[11px] sm:text-xs text-secondary tracking-wider uppercase block mt-0.5">
                  Boutique Rooms
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-medium text-primary block">
                  ~250m
                </span>
                <span className="text-[11px] sm:text-xs text-secondary tracking-wider uppercase block mt-0.5">
                  To Kashi Temple
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-medium text-accent block">
                  24/7
                </span>
                <span className="text-[11px] sm:text-xs text-secondary tracking-wider uppercase block mt-0.5">
                  Front Desk Care
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Real Exterior Architectural Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative group">
              {/* Outer architectural frame */}
              <div className="relative overflow-hidden bg-[#F1EEE7] p-2.5 sm:p-3 border border-border shadow-elevated">
                <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-primary/5">
                  <img
                    src="/images/hotel-exterior-dusk.jpg"
                    alt="Hotel Four Seasons Varanasi - Modern Exterior illuminated at dusk"
                    className="w-full h-full object-cover object-center img-editorial"
                    loading="eager"
                  />
                  {/* Subtle photographic vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent opacity-60 pointer-events-none" />

                  {/* On-image caption badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-surface/95 backdrop-blur-md border border-border flex items-center justify-between">
                    <div>
                      <p className="font-serif text-sm font-medium text-primary tracking-wide">
                        Hotel Four Seasons
                      </p>
                      <p className="text-[10px] text-secondary tracking-wider uppercase">
                        D.39/24, Kodai Ki Chowki · Varanasi
                      </p>
                    </div>
                    <span className="text-[10px] uppercase font-semibold tracking-widest text-accent bg-accent/10 px-2 py-1">
                      REAL PROPERTY
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative accent element behind image */}
              <div className="absolute -bottom-4 -left-4 -z-10 w-full h-full border border-accent/30 pointer-events-none hidden sm:block" />
            </div>
          </div>

        </div>

        {/* Integrated Quick Reservation Bar */}
        <div className="mt-14 lg:mt-20">
          <form
            onSubmit={handleQuickSubmit}
            aria-label="Quick Room Reservation Inquiry Form"
            className="bg-surface border border-border p-5 sm:p-7 shadow-elevated"
          >
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
              
              {/* Check-In */}
              <div className="flex-1 min-w-[150px]">
                <label htmlFor="quick-checkin" className="flex items-center text-[10px] font-semibold tracking-[0.2em] uppercase text-secondary mb-1.5">
                  <Calendar className="w-3 h-3 text-accent mr-1.5" />
                  Check-In
                </label>
                <input
                  id="quick-checkin"
                  type="date"
                  value={checkIn}
                  min={today}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full px-3 py-2 text-xs font-medium text-primary bg-[#FAF9F6] border border-border focus:border-accent focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Check-Out */}
              <div className="flex-1 min-w-[150px]">
                <label htmlFor="quick-checkout" className="flex items-center text-[10px] font-semibold tracking-[0.2em] uppercase text-secondary mb-1.5">
                  <Calendar className="w-3 h-3 text-accent mr-1.5" />
                  Check-Out
                </label>
                <input
                  id="quick-checkout"
                  type="date"
                  value={checkOut}
                  min={checkIn || today}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full px-3 py-2 text-xs font-medium text-primary bg-[#FAF9F6] border border-border focus:border-accent focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Guests */}
              <div className="flex-1 min-w-[130px]">
                <label htmlFor="quick-guests" className="flex items-center text-[10px] font-semibold tracking-[0.2em] uppercase text-secondary mb-1.5">
                  <Users className="w-3 h-3 text-accent mr-1.5" />
                  Guests
                </label>
                <select
                  id="quick-guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full px-3 py-2 text-xs font-medium text-primary bg-[#FAF9F6] border border-border focus:border-accent focus:outline-none transition-colors"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5+">5+ Guests (Family)</option>
                </select>
              </div>

              {/* Room Category */}
              <div className="flex-1 min-w-[160px]">
                <label htmlFor="quick-roomtype" className="flex items-center text-[10px] font-semibold tracking-[0.2em] uppercase text-secondary mb-1.5">
                  <Compass className="w-3 h-3 text-accent mr-1.5" />
                  Room Preference
                </label>
                <select
                  id="quick-roomtype"
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="w-full px-3 py-2 text-xs font-medium text-primary bg-[#FAF9F6] border border-border focus:border-accent focus:outline-none transition-colors"
                >
                  <option value="Not Decided">Any / Not Decided</option>
                  <option value="Executive Room">Executive Room</option>
                  <option value="Super Deluxe Room">Super Deluxe Room</option>
                </select>
              </div>

              {/* Action Button */}
              <div className="pt-2 lg:pt-5 lg:min-w-[210px]">
                <button
                  type="submit"
                  className="w-full btn-whatsapp flex items-center justify-center space-x-2 py-3"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span className="whitespace-nowrap">CHECK ON WHATSAPP</span>
                </button>
              </div>

            </div>
          </form>
        </div>

      </div>
    </section>
  );
}

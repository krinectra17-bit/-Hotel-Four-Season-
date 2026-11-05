import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, ExternalLink, Sparkles, Compass, MessageSquare } from 'lucide-react';
import { HOTEL_INFO, LOCATION_HIGHLIGHTS } from '../data/hotelData';
import { buildGeneralWhatsAppLink } from '../utils/whatsapp';

export default function LocationSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(HOTEL_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-24 md:py-32 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-6 h-[1px] bg-accent"></span>
            <p className="text-xs font-semibold tracking-[0.26em] text-accent uppercase">
              PRIME LOCATION & ACCESS
            </p>
            <span className="w-6 h-[1px] bg-accent"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-primary tracking-tight">
            "Stay Close to the Spirit of Varanasi."
          </h2>

          <p className="text-secondary text-sm sm:text-base leading-relaxed mt-4">
            Discover the spiritual energy and vibrant culture of Varanasi while staying at a conveniently located hotel in the heart of the city.
          </p>
        </div>

        {/* Content Layout: Highlights Grid + Address & Directions Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: 4 Key Location Highlights (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {LOCATION_HIGHLIGHTS.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-surface p-6 sm:p-7 border border-border hover:border-accent transition-all duration-300 shadow-subtle flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-semibold tracking-[0.2em] text-accent uppercase">
                        {item.tag}
                      </span>
                      <Compass className="w-3.5 h-3.5 text-accent/70" />
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl text-primary font-medium mb-1.5">
                      {item.name}
                    </h3>

                    <p className="text-xs font-semibold text-accent tracking-wide mb-2">
                      {item.distance}
                    </p>

                    <p className="text-secondary text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Cultural Varanasi Context Banner */}
            <div className="bg-[#F1EEE7] p-6 border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-accent block">
                  PILGRIMAGE CONVENIENCE
                </span>
                <p className="text-xs sm:text-sm text-primary font-medium mt-1">
                  Walking distance to both morning Mangala Aarti and evening Ganga Aarti.
                </p>
              </div>
              <a
                href={buildGeneralWhatsAppLink('Location and Temple Darshan Assistance')}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap px-4 py-2.5 bg-surface border border-border text-xs font-medium text-primary hover:text-accent flex items-center space-x-1.5 shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 text-accent" />
                <span>Ask Front Desk</span>
              </a>
            </div>
          </div>

          {/* Right Column: Official Address & Interactive Directions Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-surface border border-border p-7 sm:p-8 shadow-elevated">
              <div className="flex items-center space-x-2 text-accent text-xs font-semibold tracking-[0.22em] uppercase mb-3">
                <MapPin className="w-4 h-4" />
                <span>OFFICIAL HOTEL ADDRESS</span>
              </div>

              <h3 className="font-serif text-2xl text-primary font-medium mb-3">
                Hotel Four Seasons
              </h3>

              <address className="not-italic text-secondary text-sm sm:text-base leading-relaxed space-y-1 mb-6">
                <p className="text-primary font-medium">D.39/24, Kodai Ki Chowki,</p>
                <p>Dashaswamedh,</p>
                <p>Varanasi, Uttar Pradesh – 221001,</p>
                <p>India.</p>
              </address>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={HOTEL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-primary flex items-center justify-center space-x-2 py-3.5"
                >
                  <Navigation className="w-4 h-4" />
                  <span>GET DIRECTIONS ON MAPS</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="w-full btn-secondary flex items-center justify-center space-x-2 py-3"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700">ADDRESS COPIED TO CLIPBOARD</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-accent" />
                      <span>COPY ADDRESS</span>
                    </>
                  )}
                </button>
              </div>

              {/* Transit Note */}
              <div className="mt-6 pt-5 border-t border-border text-[11px] text-secondary space-y-1.5">
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>Auto-rickshaws, e-rickshaws & taxis stop near Kodai Ki Chowki</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  <span>24-Hour dedicated on-premise parking for hotel guests</span>
                </div>
              </div>
            </div>

            {/* Visual Location Frame with Architectural Marker */}
            <div className="relative aspect-[16/9] border border-border overflow-hidden bg-[#EFE9DF] group">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent mb-2">
                  <MapPin className="w-6 h-6 animate-bounce" />
                </div>
                <p className="font-serif text-lg font-medium text-primary">
                  Heart of Varanasi
                </p>
                <p className="text-xs text-secondary mt-1">
                  Dashaswamedh · Kashi Vishwanath Corridor
                </p>
                <a
                  href={HOTEL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-[11px] font-semibold tracking-widest uppercase text-accent underline underline-offset-4 hover:text-primary transition-colors"
                >
                  Open Interactive Map View →
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

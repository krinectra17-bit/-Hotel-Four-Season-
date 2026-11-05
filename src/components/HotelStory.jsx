import React from 'react';
import { Sparkles, MapPin, CheckCircle2, Shield, HeartHandshake } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export default function HotelStory({ onOpenBooking }) {
  return (
    <section id="experiences" className="py-20 md:py-28 bg-[#F1EEE7]/50 relative border-y border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Asymmetric Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Showcase (Left side, 6 cols) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              {/* Primary Image: Real Lobby & Reception Photo */}
              <div className="relative z-10 bg-surface p-2.5 sm:p-3 border border-border shadow-elevated">
                <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden group">
                  <img
                    src="/images/lobby-reception.jpg"
                    alt="Hotel Four Seasons Varanasi - Reception and Welcome Lobby with Italian marble and decorative ceiling"
                    className="w-full h-full object-cover object-center img-editorial"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-40 pointer-events-none" />
                  <div className="absolute bottom-3 left-3 bg-surface/90 backdrop-blur-sm px-3 py-1.5 border border-border">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-primary">
                      Reception & Welcome Lounge
                    </span>
                  </div>
                </div>
              </div>

              {/* Overlapping Highlight Card: 24 thoughtfully arranged rooms */}
              <div className="relative lg:absolute lg:-bottom-8 lg:-right-8 z-20 mt-4 lg:mt-0 bg-surface border border-border p-5 sm:p-6 shadow-modal max-w-sm">
                <div className="flex items-center space-x-2 text-accent text-xs font-semibold tracking-wider uppercase mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Property Highlight</span>
                </div>
                <p className="font-serif text-xl sm:text-2xl text-primary font-medium leading-snug">
                  24 thoughtfully arranged rooms.
                </p>
                <p className="text-secondary text-xs leading-relaxed mt-2">
                  Tailored for tranquil rest after traversing the bustling alleys of Dashaswamedh and temple ghats.
                </p>
              </div>

              {/* Decorative background framing */}
              <div className="absolute -top-4 -left-4 w-32 h-32 border-t-2 border-l-2 border-accent/40 pointer-events-none hidden sm:block" />
            </div>
          </div>

          {/* Editorial Content (Right side, 6 cols) */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col space-y-6">
            
            {/* Small Label */}
            <div className="flex items-center space-x-3">
              <span className="w-6 h-[1px] bg-accent"></span>
              <p className="text-xs font-semibold tracking-[0.26em] text-accent uppercase">
                WELCOME TO HOTEL FOUR SEASONS
              </p>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.15] text-primary tracking-tight">
              "A Comfortable Address in the Heart of Varanasi."
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-secondary text-base leading-relaxed">
              <p>
                Experience warm hospitality and comfortable accommodation at Hotel Four Seasons. Located in the heart of Varanasi, our property offers convenient access to the city's spiritual landmarks, vibrant local markets and cultural attractions.
              </p>
              <p>
                With thoughtfully arranged rooms, attentive front-desk assistance and convenient guest facilities, we aim to make every stay comfortable and memorable.
              </p>
            </div>

            {/* Hospitality Values Checklist */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="text-xs font-medium text-primary tracking-wide">
                  Prime Dashaswamedh location
                </span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="text-xs font-medium text-primary tracking-wide">
                  Prompt WhatsApp-first service
                </span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="text-xs font-medium text-primary tracking-wide">
                  On-site dining & 24/7 parking
                </span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="text-xs font-medium text-primary tracking-wide">
                  Airport transfer coordination
                </span>
              </div>
            </div>

            {/* Story CTA */}
            <div className="pt-4 flex items-center space-x-4">
              <button
                onClick={() => onOpenBooking()}
                className="btn-primary"
              >
                <span>RESERVE WITH US</span>
              </button>

              <a
                href="#location"
                className="text-xs font-semibold tracking-[0.18em] uppercase text-primary hover:text-accent transition-colors flex items-center space-x-1.5"
              >
                <span>VIEW LOCATION</span>
                <span className="text-accent">→</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

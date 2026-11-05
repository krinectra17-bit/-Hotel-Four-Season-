import React from 'react';
import { Clock, UtensilsCrossed, Car, ShieldCheck, PlaneTakeoff, ArrowRight } from 'lucide-react';
import { AMENITIES_DATA } from '../data/hotelData';

const iconMap = {
  Clock: Clock,
  UtensilsCrossed: UtensilsCrossed,
  Car: Car,
  ShieldCheck: ShieldCheck,
  PlaneTakeoff: PlaneTakeoff,
};

export default function AmenitiesSection({ onOpenBooking }) {
  return (
    <section id="amenities" className="py-24 md:py-32 bg-[#F1EEE7]/40 border-y border-border relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-6 h-[1px] bg-accent"></span>
            <p className="text-xs font-semibold tracking-[0.26em] text-accent uppercase">
              GUEST FACILITIES
            </p>
            <span className="w-6 h-[1px] bg-accent"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-primary tracking-tight">
            Essential Comforts for Your Pilgrimage & Stay
          </h2>

          <p className="text-secondary text-sm sm:text-base leading-relaxed mt-4">
            Designed to ensure seamless convenience from the moment you arrive in Varanasi to your onward journey.
          </p>
        </div>

        {/* 5 Authentic Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {AMENITIES_DATA.map((item, idx) => {
            const Icon = iconMap[item.iconName] || Clock;

            return (
              <div
                key={item.id}
                className="group relative bg-surface p-7 sm:p-8 border border-border transition-all duration-300 hover:border-accent/60 hover:shadow-elevated flex flex-col justify-between"
              >
                <div>
                  {/* Icon Frame */}
                  <div className="w-12 h-12 flex items-center justify-center bg-[#FAF9F6] border border-border group-hover:border-accent group-hover:bg-[#F4EFE6] transition-colors duration-300 mb-6">
                    <Icon className="w-5 h-5 text-accent group-hover:text-primary transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl text-primary font-medium mb-3 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-secondary text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtle card bottom accent line */}
                <div className="pt-6 mt-6 border-t border-border/60 flex items-center justify-between text-[11px] font-medium tracking-wider uppercase text-secondary">
                  <span>FACILITY {String(idx + 1).padStart(2, '0')}</span>
                  <span className="text-accent group-hover:translate-x-1 transition-transform">
                    Available
                  </span>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Direct Inquiry & Concierge Card */}
          <div className="bg-primary text-white p-7 sm:p-8 border border-primary flex flex-col justify-between shadow-elevated">
            <div>
              <span className="text-[10px] font-semibold tracking-[0.24em] text-accent uppercase block mb-3">
                FRONT DESK ASSISTANCE
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-white mb-3">
                Have a Custom Schedule or Special Requirement?
              </h3>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                Whether you need early morning temple coordination, luggage holding, or airport assistance, our team is directly reachable on WhatsApp.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <button
                onClick={() => onOpenBooking()}
                className="w-full py-3 px-4 bg-accent hover:bg-accent-hover text-white text-xs font-semibold tracking-[0.2em] uppercase transition-colors flex items-center justify-center space-x-2"
              >
                <span>CONNECT WITH US</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

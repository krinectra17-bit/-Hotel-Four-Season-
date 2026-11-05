import React from 'react';
import { TRUST_POINTS } from '../data/hotelData';

export default function WhyChooseUs({ onOpenBooking }) {
  return (
    <section className="py-24 md:py-32 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-border">
          <div className="max-w-xl">
            <div className="flex items-center space-x-3 mb-3">
              <span className="w-6 h-[1px] bg-accent"></span>
              <p className="text-xs font-semibold tracking-[0.26em] text-accent uppercase">
                DISTINCTIVE ADVANTAGES
              </p>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-primary tracking-tight">
              Why Discerning Guests Choose Hotel Four Seasons
            </h2>
          </div>

          <div className="mt-6 lg:mt-0 max-w-md">
            <p className="text-secondary text-sm sm:text-base leading-relaxed">
              We focus on what matters most for a peaceful stay in sacred Varanasi: prime central location, transparent direct booking, attentive 24-hour service, and comfortable spaces.
            </p>
          </div>
        </div>

        {/* Editorial Numbered Columns (Not a generic card grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {TRUST_POINTS.map((point) => (
            <div
              key={point.number}
              className="group flex flex-col justify-between pt-6 border-t border-border/80 hover:border-accent transition-colors duration-300"
            >
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-accent/60 font-light block mb-4 group-hover:text-accent transition-colors">
                  {point.number}
                </span>

                <h3 className="font-serif text-xl sm:text-2xl text-primary font-medium mb-3 group-hover:text-accent transition-colors">
                  {point.title}
                </h3>

                <p className="text-secondary text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="pt-6 mt-6 flex items-center space-x-2 text-[10px] tracking-widest uppercase text-accent font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>OUR COMMITMENT</span>
                <span>—</span>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Bottom Quote / Assurance */}
        <div className="mt-20 p-8 sm:p-10 bg-[#F1EEE7] border border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <h4 className="font-serif text-2xl text-primary font-medium">
              Transparent, Direct & Personal Hospitality
            </h4>
            <p className="text-secondary text-xs sm:text-sm">
              No hidden broker fees or inflated third-party commission rates. Our Varanasi reservations desk communicates directly with you.
            </p>
          </div>

          <button
            onClick={() => onOpenBooking()}
            className="btn-primary whitespace-nowrap"
          >
            <span>RESERVE ON WHATSAPP</span>
          </button>
        </div>

      </div>
    </section>
  );
}

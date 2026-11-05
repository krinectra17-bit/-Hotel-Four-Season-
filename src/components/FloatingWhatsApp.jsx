import React, { useState } from 'react';
import { MessageSquare, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export default function FloatingWhatsApp({ onOpenBooking }) {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      
      {/* Speech preview bubble */}
      {tooltipVisible && (
        <div className="mb-3 max-w-xs bg-surface border border-border p-4 shadow-modal text-left animate-fadeIn relative">
          <button
            onClick={() => setTooltipVisible(false)}
            className="absolute top-2 right-2 text-secondary hover:text-primary p-1"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center space-x-1.5 text-accent text-[10px] font-semibold tracking-wider uppercase mb-1">
            <Sparkles className="w-3 h-3" />
            <span>Front Desk Online</span>
          </div>
          <p className="text-xs text-primary font-medium">
            Namaste! Planning your stay in Varanasi?
          </p>
          <p className="text-[11px] text-secondary mt-1">
            Check real-time room availability & rates directly with our reception.
          </p>
          <div className="mt-3 flex items-center space-x-2">
            <button
              onClick={() => {
                setTooltipVisible(false);
                onOpenBooking();
              }}
              className="text-[11px] font-semibold uppercase tracking-wider bg-primary text-white px-3 py-1.5 hover:bg-black transition-colors"
            >
              Enquire Dates
            </button>
            <a
              href={`https://wa.me/${HOTEL_INFO.whatsappDigits}?text=Hello%20Hotel%20Four%20Seasons%2C%20I%20have%20an%20enquiry%20regarding%20a%20stay.`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-semibold text-[#1E7E34] hover:underline flex items-center"
            >
              Quick Chat <ArrowUpRight className="w-3 h-3 ml-0.5" />
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="relative group">
        {/* Pulsing beacon */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping opacity-75 pointer-events-none" />

        <button
          onClick={() => onOpenBooking()}
          onMouseEnter={() => setTooltipVisible(true)}
          className="relative flex items-center space-x-2.5 bg-[#1E7E34] hover:bg-[#166527] text-white px-4 py-3 sm:px-5 sm:py-3.5 shadow-float hover:shadow-xl transition-all duration-300 rounded-full"
          aria-label="Enquire on WhatsApp with Hotel Four Seasons Front Desk"
        >
          <MessageSquare className="w-5 h-5 shrink-0" />
          <span className="text-xs font-semibold tracking-wider uppercase hidden sm:inline-block">
            Book on WhatsApp
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
        </button>
      </div>

    </div>
  );
}

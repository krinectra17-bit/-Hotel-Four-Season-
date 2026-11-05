import React, { useState, useEffect } from 'react';
import { X, Users, BedDouble, Check, MessageSquare, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function RoomModal({ room, onClose, onBookRoom }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!room) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-primary/70 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-surface border border-border shadow-modal my-auto overflow-hidden animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-border bg-[#FAF9F6]">
          <div>
            <span className="text-[10px] font-semibold tracking-[0.24em] text-accent uppercase block">
              {room.eyebrow}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-primary font-medium">
              {room.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-secondary hover:text-primary transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 max-h-[75vh] overflow-y-auto">
          {/* Main Photo Gallery */}
          <div className="space-y-3">
            <div className="relative aspect-[16/10] overflow-hidden bg-bg-secondary border border-border">
              <img
                src={room.allImages[activeImageIndex]}
                alt={`${room.name} - View ${activeImageIndex + 1}`}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-sm px-3 py-1 text-[10px] font-medium tracking-widest uppercase text-primary border border-border">
                Photograph {activeImageIndex + 1} of {room.allImages.length}
              </div>
            </div>

            {/* Thumbnail switcher */}
            {room.allImages.length > 1 && (
              <div className="flex space-x-3">
                {room.allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-24 h-16 border overflow-hidden transition-all ${
                      activeImageIndex === idx
                        ? 'border-accent ring-2 ring-accent/30'
                        : 'border-border opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Room Details Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left Column: Description & Specifications */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-2">
                  Room Overview
                </h4>
                <p className="text-secondary text-sm sm:text-base leading-relaxed">
                  {room.shortDescription}
                </p>
                <p className="text-primary/80 italic text-xs mt-3 bg-[#FAF9F6] p-3 border-l-2 border-accent">
                  {room.idealFor}
                </p>
              </div>

              {/* Occupancy and Configuration */}
              <div className="grid grid-cols-2 gap-4 p-4 bg-[#F1EEE7]/50 border border-border">
                <div className="flex items-start space-x-3">
                  <Users className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-secondary font-medium block">
                      Occupancy
                    </span>
                    <span className="text-xs font-medium text-primary">
                      {room.occupancy}
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <BedDouble className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-secondary font-medium block">
                      Extra Bed
                    </span>
                    <span className="text-xs font-medium text-primary">
                      {room.extraBed}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Key Features */}
            <div className="md:col-span-5 space-y-4">
              <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary">
                Room Features & Amenities
              </h4>
              <ul className="space-y-2.5">
                {room.highlights.map((feat, i) => (
                  <li key={i} className="flex items-start space-x-2.5 text-xs text-primary">
                    <Check className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2 text-[11px] text-secondary">
                * Rates & availability are confirmed directly by the hotel front desk via WhatsApp.
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer with Direct WhatsApp Action */}
        <div className="p-5 sm:p-6 border-t border-border bg-[#FAF9F6] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="text-xs text-secondary">
            Interested in staying in our <strong className="text-primary">{room.name}</strong>?
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 text-xs font-medium tracking-wider uppercase text-secondary hover:text-primary transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookRoom(room.name);
              }}
              className="btn-whatsapp flex items-center justify-center space-x-2 py-3 px-6"
            >
              <MessageSquare className="w-4 h-4" />
              <span>ENQUIRE ON WHATSAPP</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

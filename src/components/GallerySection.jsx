import React, { useState, useEffect } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, MessageSquare, Camera } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/hotelData';

export default function GallerySection({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['All', 'Exterior', 'Lobby', 'Rooms'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  const handleNext = () => {
    setLightboxIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  };

  const currentLightboxItem = lightboxIndex !== null ? GALLERY_ITEMS[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#F1EEE7]/40 border-t border-border relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-6 h-[1px] bg-accent"></span>
            <p className="text-xs font-semibold tracking-[0.26em] text-accent uppercase">
              VISUAL JOURNAL
            </p>
            <span className="w-6 h-[1px] bg-accent"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-primary tracking-tight">
            An Authentic Glimpse Inside
          </h2>

          <p className="text-secondary text-sm sm:text-base leading-relaxed mt-4">
            Explore genuine photographs of our property in Dashaswamedh, Varanasi — from our modern architectural façade to comfortable guest sanctuaries.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-surface text-secondary hover:text-primary border border-border'
                }`}
              >
                {cat === 'All' ? 'All Photographs' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Masonry/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => {
            const globalIndex = GALLERY_ITEMS.findIndex((g) => g.id === item.id);

            return (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(globalIndex)}
                className="group relative bg-surface p-2.5 border border-border shadow-subtle hover:shadow-elevated transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-primary/5">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover object-center img-editorial"
                    loading="lazy"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                    <div className="flex justify-end">
                      <span className="p-2 bg-surface/30 backdrop-blur-md rounded-full">
                        <Maximize2 className="w-4 h-4 text-white" />
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] tracking-[0.2em] uppercase text-accent font-semibold block mb-1">
                        {item.category}
                      </span>
                      <h3 className="font-serif text-lg font-medium">
                        {item.title}
                      </h3>
                      <p className="text-white/80 text-xs mt-1 line-clamp-1">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Below photo label */}
                <div className="p-3 bg-surface flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-base text-primary font-medium group-hover:text-accent transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-secondary tracking-wider uppercase mt-0.5">
                      {item.category}
                    </p>
                  </div>
                  <span className="text-[10px] font-semibold tracking-widest text-accent uppercase bg-[#FAF9F6] border border-border px-2 py-1">
                    VIEW
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && currentLightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-primary/95 backdrop-blur-md"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 z-50 p-2.5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors focus:outline-none"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Image */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors focus:outline-none"
            aria-label="Previous photograph"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Image */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors focus:outline-none"
            aria-label="Next photograph"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div
            className="relative max-w-5xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[75vh] overflow-hidden border border-white/10 shadow-2xl bg-black/40">
              <img
                src={currentLightboxItem.src}
                alt={currentLightboxItem.title}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Lightbox Details Bar */}
            <div className="w-full mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-white px-2">
              <div className="text-center sm:text-left">
                <span className="text-accent text-[11px] font-semibold tracking-[0.2em] uppercase block">
                  {currentLightboxItem.category} · Photo {lightboxIndex + 1} of {GALLERY_ITEMS.length}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-medium mt-0.5">
                  {currentLightboxItem.title}
                </h3>
                <p className="text-white/70 text-xs mt-0.5">
                  {currentLightboxItem.subtitle}
                </p>
              </div>

              {currentLightboxItem.roomType && (
                <button
                  onClick={() => {
                    setLightboxIndex(null);
                    onOpenBooking({ roomType: currentLightboxItem.roomType });
                  }}
                  className="btn-whatsapp py-2.5 px-5 text-xs whitespace-nowrap"
                >
                  <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                  <span>Enquire This Room</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

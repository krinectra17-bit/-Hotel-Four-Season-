import React from 'react';
import { MessageSquare, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Stay', href: '#stay' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Location', href: '#location' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#F1EEE7] text-primary border-t border-border pt-16 sm:pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-border">
          
          {/* Brand & Introduction (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-[0.16em] uppercase text-primary font-medium">
                Hotel Four Seasons
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-accent font-semibold">
                Varanasi · Uttar Pradesh · India
              </span>
            </div>

            <p className="text-secondary text-xs sm:text-sm leading-relaxed max-w-sm">
              A comfortable boutique hospitality address in the spiritual heart of Varanasi. Offering 24 thoughtfully appointed rooms situated moments from Shri Kashi Vishwanath Temple and the sacred Ganga Ghats.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="btn-whatsapp text-xs py-3 px-6"
              >
                <MessageSquare className="w-3.5 h-3.5 mr-2" />
                <span>BOOK VIA WHATSAPP</span>
              </button>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-accent block">
              NAVIGATION
            </span>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs uppercase tracking-wider text-secondary hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Room Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-accent block">
              ROOM CATEGORIES
            </span>
            <div className="space-y-3">
              <div>
                <a
                  href="#stay"
                  onClick={() => onOpenBooking({ roomType: 'Executive Room' })}
                  className="font-serif text-base text-primary hover:text-accent font-medium block"
                >
                  Executive Room
                </a>
                <span className="text-[11px] text-secondary">
                  2 Guests · Minimalist Comfort
                </span>
              </div>

              <div>
                <a
                  href="#stay"
                  onClick={() => onOpenBooking({ roomType: 'Super Deluxe Room' })}
                  className="font-serif text-base text-primary hover:text-accent font-medium block"
                >
                  Super Deluxe Room
                </a>
                <span className="text-[11px] text-secondary">
                  Up to 3 Guests · Generous Space
                </span>
              </div>

              <div className="pt-2 text-xs text-secondary italic">
                Total 24 rooms across the property. Extra bed available upon request.
              </div>
            </div>
          </div>

          {/* Contact & Address (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-accent block">
              PROPERTY ADDRESS
            </span>
            
            <address className="not-italic text-xs text-secondary leading-relaxed space-y-1">
              <p className="text-primary font-medium">Hotel Four Seasons</p>
              <p>D.39/24, Kodai Ki Chowki,</p>
              <p>Dashaswamedh, Varanasi,</p>
              <p>Uttar Pradesh – 221001, India.</p>
            </address>

            <div className="space-y-1.5 pt-2 text-xs">
              <div className="flex items-center space-x-2 text-secondary">
                <Phone className="w-3.5 h-3.5 text-accent shrink-0" />
                <a href={`tel:${HOTEL_INFO.phoneRaw}`} className="hover:text-primary">
                  {HOTEL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2 text-secondary">
                <MessageSquare className="w-3.5 h-3.5 text-[#1E7E34] shrink-0" />
                <a
                  href={`https://wa.me/${HOTEL_INFO.whatsappDigits}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  {HOTEL_INFO.whatsappNumber}
                </a>
              </div>
              <div className="flex items-center space-x-2 text-secondary">
                <Mail className="w-3.5 h-3.5 text-accent shrink-0" />
                <a href={`mailto:${HOTEL_INFO.email}`} className="hover:text-primary break-all">
                  {HOTEL_INFO.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-secondary gap-4">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Hotel Four Seasons, Varanasi. All rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            <span className="tracking-wider uppercase text-[10px]">
              Direct WhatsApp Hospitality
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1.5 text-primary hover:text-accent tracking-wider uppercase text-[11px] font-medium transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

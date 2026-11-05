import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, MapPin } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export default function Header({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Stay', href: '#stay' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Location', href: '#location' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#FAF9F6]/95 backdrop-blur-md shadow-sm border-b border-border py-4'
            : 'bg-[#FAF9F6]/85 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none py-5 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex flex-col focus:outline-none"
          >
            <span className="font-serif text-xl sm:text-2xl tracking-[0.18em] text-primary font-medium uppercase group-hover:text-accent transition-colors duration-300">
              Hotel Four Seasons
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-secondary font-medium">
              Varanasi · India
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs tracking-[0.2em] uppercase font-medium text-primary/80 hover:text-accent transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-accent hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action / CTA */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="hidden xl:inline-flex items-center space-x-2 text-xs tracking-wider text-secondary hover:text-primary transition-colors py-2 px-3"
              title="Call Reception"
            >
              <Phone className="w-3.5 h-3.5 text-accent" />
              <span>+91 542 2414243</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="relative inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold tracking-[0.2em] uppercase text-primary border border-primary/30 hover:bg-primary hover:text-white transition-all duration-300 ease-out shadow-sm rounded-none"
            >
              RESERVE YOUR STAY
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-3.5 py-1.5 text-[11px] font-semibold tracking-wider uppercase text-white bg-accent rounded-none shadow-sm"
            >
              RESERVE
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-primary focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-50 bg-[#FAF9F6] transition-transform duration-500 ease-in-out sm:hidden flex flex-col justify-between p-6 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-border pb-5">
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-[0.16em] text-primary uppercase font-medium">
              Hotel Four Seasons
            </span>
            <span className="text-[10px] tracking-[0.25em] text-secondary uppercase">
              Varanasi
            </span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-primary focus:outline-none"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col space-y-5 my-auto py-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-serif text-2xl tracking-wide text-primary hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="border-t border-border pt-6 space-y-4">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full py-3.5 text-xs font-semibold tracking-[0.2em] uppercase text-white bg-primary text-center block"
          >
            RESERVE YOUR STAY
          </button>

          <div className="flex items-center justify-between text-xs text-secondary pt-2">
            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="flex items-center space-x-1.5 hover:text-primary"
            >
              <Phone className="w-3.5 h-3.5 text-accent" />
              <span>Call Us</span>
            </a>
            <a
              href={`https://wa.me/${HOTEL_INFO.whatsappDigits}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-[#1E7E34] font-medium"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

          <div className="text-[11px] text-secondary flex items-start space-x-2 pt-1">
            <MapPin className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
            <span>Kodai Ki Chowki, Dashaswamedh, Varanasi</span>
          </div>
        </div>
      </div>
    </>
  );
}

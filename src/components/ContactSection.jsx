import React from 'react';
import { MessageSquare, Phone, MapPin, Mail, Navigation, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export default function ContactSection({ onOpenBooking }) {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#FAF9F6] relative border-t border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-6 h-[1px] bg-accent"></span>
            <p className="text-xs font-semibold tracking-[0.26em] text-accent uppercase">
              RESERVATIONS & ASSISTANCE
            </p>
            <span className="w-6 h-[1px] bg-accent"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-primary tracking-tight">
            "Your Varanasi Stay Begins Here."
          </h2>

          <p className="text-secondary text-sm sm:text-base leading-relaxed mt-4">
            Planning your visit to Varanasi? Get in touch with our team for room availability, booking enquiries and assistance.
          </p>
        </div>

        {/* Main Grid: Details Card & Direct 4-Button Action Suite */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Left Column: Official Contact Card (7 cols) */}
          <div className="lg:col-span-7 bg-surface border border-border p-8 sm:p-10 shadow-elevated flex flex-col justify-between">
            <div className="space-y-8">
              
              <div className="border-b border-border pb-6">
                <span className="text-[10px] font-semibold tracking-[0.24em] text-accent uppercase block mb-1">
                  OFFICIAL CONTACT REPOSITORY
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-primary font-medium">
                  Hotel Four Seasons, Varanasi
                </h3>
                <p className="text-secondary text-xs sm:text-sm mt-1">
                  Hospitality address in Dashaswamedh · 24-Hour Front Desk Support
                </p>
              </div>

              {/* Contact Items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Physical Address */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-secondary">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span>Physical Address</span>
                  </div>
                  <address className="not-italic text-sm text-primary leading-relaxed pl-6">
                    <p className="font-medium">Hotel Four Seasons</p>
                    <p>D.39/24, Kodai Ki Chowki,</p>
                    <p>Dashaswamedh, Varanasi,</p>
                    <p>Uttar Pradesh – 221001, India.</p>
                  </address>
                </div>

                {/* Telephone */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-secondary">
                    <Phone className="w-4 h-4 text-accent" />
                    <span>Telephone</span>
                  </div>
                  <div className="pl-6 space-y-1">
                    <a
                      href={`tel:${HOTEL_INFO.phoneRaw}`}
                      className="text-base font-serif font-medium text-primary hover:text-accent transition-colors block"
                    >
                      {HOTEL_INFO.phone}
                    </a>
                    <p className="text-[11px] text-secondary">
                      Available for reception inquiries & arrival coordination
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-secondary">
                    <MessageSquare className="w-4 h-4 text-[#1E7E34]" />
                    <span>WhatsApp Booking</span>
                  </div>
                  <div className="pl-6 space-y-1">
                    <a
                      href={`https://wa.me/${HOTEL_INFO.whatsappDigits}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-serif font-medium text-[#1E7E34] hover:underline block"
                    >
                      {HOTEL_INFO.whatsappNumber}
                    </a>
                    <p className="text-[11px] text-secondary">
                      Fastest response for real-time room availability & rates
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-secondary">
                    <Mail className="w-4 h-4 text-accent" />
                    <span>Official Email</span>
                  </div>
                  <div className="pl-6 space-y-1">
                    <a
                      href={`mailto:${HOTEL_INFO.email}?subject=Reservation%20Inquiry%20-%20Hotel%20Four%20Seasons%20Varanasi`}
                      className="text-sm font-medium text-primary hover:text-accent transition-colors break-all block"
                    >
                      {HOTEL_INFO.email}
                    </a>
                    <p className="text-[11px] text-secondary">
                      For corporate stays, group requests & advance correspondence
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Check-In / Check-Out Hours Strip */}
            <div className="mt-8 pt-6 border-t border-border flex items-center justify-between text-xs text-secondary bg-[#FAF9F6] p-4">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-accent" />
                <span>Standard Check-In: <strong className="text-primary">{HOTEL_INFO.checkIn}</strong></span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-accent" />
                <span>Standard Check-Out: <strong className="text-primary">{HOTEL_INFO.checkOut}</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Mandatory Functional Action Buttons (5 cols) */}
          <div className="lg:col-span-5 bg-[#F1EEE7] border border-border p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-semibold tracking-[0.24em] text-accent uppercase block mb-2">
                INSTANT REACH
              </span>
              <h3 className="font-serif text-2xl text-primary font-medium mb-3">
                Connect Directly with Hotel Staff
              </h3>
              <p className="text-secondary text-xs sm:text-sm leading-relaxed mb-8">
                Select your preferred mode of communication. Every request is handled by our in-house property team.
              </p>

              {/* 4 Interactive Buttons Suite */}
              <div className="space-y-4">
                
                {/* 1. BOOK ON WHATSAPP */}
                <button
                  onClick={() => onOpenBooking()}
                  className="w-full btn-whatsapp py-4 flex items-center justify-center space-x-2.5 text-xs tracking-[0.18em]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>BOOK ON WHATSAPP</span>
                </button>

                {/* 2. CALL HOTEL */}
                <a
                  href={`tel:${HOTEL_INFO.phoneRaw}`}
                  className="w-full btn-primary py-4 flex items-center justify-center space-x-2.5 text-xs tracking-[0.18em]"
                >
                  <Phone className="w-4 h-4" />
                  <span>CALL HOTEL</span>
                </a>

                {/* 3. GET DIRECTIONS */}
                <a
                  href={HOTEL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-secondary py-3.5 flex items-center justify-center space-x-2.5 text-xs tracking-[0.18em]"
                >
                  <Navigation className="w-4 h-4 text-accent" />
                  <span>GET DIRECTIONS</span>
                </a>

                {/* 4. SEND EMAIL */}
                <a
                  href={`mailto:${HOTEL_INFO.email}?subject=Reservation%20Enquiry%20-%20Hotel%20Four%20Seasons%20Varanasi`}
                  className="w-full py-3.5 text-xs font-medium tracking-[0.18em] uppercase text-primary/80 hover:text-primary border border-primary/20 hover:border-primary/50 text-center flex items-center justify-center space-x-2 bg-surface transition-colors"
                >
                  <Mail className="w-4 h-4 text-secondary" />
                  <span>SEND EMAIL</span>
                </a>

              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border/80 text-[11px] text-secondary text-center">
              Official Direct Contact · No Broker Fees · Instant Local Coordination
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Users, BedDouble, Check, ArrowRight, MessageSquare, Eye } from 'lucide-react';
import { ROOMS_DATA } from '../data/hotelData';
import RoomModal from './RoomModal';

export default function RoomsSection({ onOpenBooking }) {
  const [selectedRoomForModal, setSelectedRoomForModal] = useState(null);

  const handleOpenBookingWithRoom = (roomName) => {
    onOpenBooking({ roomType: roomName });
  };

  return (
    <section id="stay" className="py-24 md:py-32 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-6 h-[1px] bg-accent"></span>
            <p className="text-xs font-semibold tracking-[0.26em] text-accent uppercase">
              ACCOMMODATION · 24 GUEST ROOMS
            </p>
            <span className="w-6 h-[1px] bg-accent"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-primary tracking-tight">
            Rest in Serene Comfort
          </h2>

          <p className="text-secondary text-sm sm:text-base leading-relaxed mt-4">
            Hotel Four Seasons features 24 thoughtfully appointed rooms designed for restorative rest amidst the vibrancy of Varanasi. Choose between our tailored Executive and expansive Super Deluxe configurations.
          </p>
        </div>

        {/* Room Showcases - Alternating Editorial Layouts */}
        <div className="space-y-24 sm:space-y-32">
          {ROOMS_DATA.map((room, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={room.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center group"
              >
                {/* Image Showcase */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? 'order-1' : 'order-1 lg:order-2'
                  }`}
                >
                  <div className="relative">
                    {/* Main Architectural Room Frame */}
                    <div className="relative bg-surface p-2.5 sm:p-3 border border-border shadow-elevated">
                      <div className="relative aspect-[16/11] sm:aspect-[4/3] overflow-hidden bg-primary/5">
                        <img
                          src={room.image}
                          alt={`Hotel Four Seasons Varanasi - ${room.name}`}
                          className="w-full h-full object-cover object-center img-editorial"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent opacity-30 pointer-events-none" />

                        {/* Category Floating Badge */}
                        <div className="absolute top-4 left-4 bg-surface/95 backdrop-blur-sm px-3.5 py-1.5 border border-border text-[10px] font-semibold tracking-[0.24em] text-primary uppercase">
                          {room.eyebrow}
                        </div>

                        {/* Occupancy pill */}
                        <div className="absolute bottom-4 right-4 bg-surface/95 backdrop-blur-sm px-3 py-1.5 border border-border flex items-center space-x-2 text-xs font-medium text-primary">
                          <Users className="w-3.5 h-3.5 text-accent" />
                          <span>{room.occupancy}</span>
                        </div>
                      </div>
                    </div>

                    {/* Secondary Accent Thumbnail Preview */}
                    {room.secondaryImage && (
                      <div className="hidden sm:block absolute -bottom-6 -left-6 lg:-bottom-6 lg:-left-6 w-36 h-28 p-1.5 bg-surface border border-border shadow-modal overflow-hidden z-20">
                        <img
                          src={room.secondaryImage}
                          alt={`${room.name} interior detail`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Editorial Content */}
                <div
                  className={`lg:col-span-5 ${
                    isEven ? 'order-2' : 'order-2 lg:order-1'
                  } flex flex-col space-y-5`}
                >
                  {/* Category Pill */}
                  <div className="flex items-center space-x-2">
                    <span className="text-[11px] font-semibold tracking-[0.24em] text-accent uppercase">
                      {room.eyebrow}
                    </span>
                    <span className="text-secondary/50">·</span>
                    <span className="text-xs text-secondary tracking-wider">
                      {room.occupancy}
                    </span>
                  </div>

                  {/* Heading */}
                  <h3 className="font-serif text-3xl sm:text-4xl font-normal text-primary tracking-tight">
                    {room.name}
                  </h3>

                  {/* Description */}
                  <p className="text-secondary text-sm sm:text-base leading-relaxed">
                    {room.shortDescription}
                  </p>

                  {/* Occupancy & Extra Bed Specifications */}
                  <div className="py-3 border-y border-border space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-secondary uppercase tracking-wider font-medium text-[11px]">
                        Standard Occupancy
                      </span>
                      <span className="text-primary font-medium">
                        {room.occupancy}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-secondary uppercase tracking-wider font-medium text-[11px]">
                        Extra Bed
                      </span>
                      <span className="text-primary font-medium">
                        {room.extraBed}
                      </span>
                    </div>
                  </div>

                  {/* Curated Highlights */}
                  <div className="grid grid-cols-2 gap-2 text-xs text-primary/80 pt-1">
                    {room.highlights.slice(0, 4).map((h, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <button
                      onClick={() => handleOpenBookingWithRoom(room.name)}
                      className="btn-whatsapp flex items-center justify-center space-x-2 py-3.5"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>CHECK AVAILABILITY</span>
                    </button>

                    <button
                      onClick={() => setSelectedRoomForModal(room)}
                      className="btn-secondary flex items-center justify-center space-x-1.5 py-3.5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>EXPLORE ROOM</span>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Detailed Room Modal */}
      {selectedRoomForModal && (
        <RoomModal
          room={selectedRoomForModal}
          onClose={() => setSelectedRoomForModal(null)}
          onBookRoom={handleOpenBookingWithRoom}
        />
      )}
    </section>
  );
}

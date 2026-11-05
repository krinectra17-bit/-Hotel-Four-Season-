import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HotelStory from './components/HotelStory';
import RoomsSection from './components/RoomsSection';
import AmenitiesSection from './components/AmenitiesSection';
import LocationSection from './components/LocationSection';
import GallerySection from './components/GallerySection';
import WhyChooseUs from './components/WhyChooseUs';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingModalData, setBookingModalData] = useState({});

  const handleOpenBooking = (customData = {}) => {
    setBookingModalData(customData);
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-bg text-primary flex flex-col font-sans selection:bg-accent/20 selection:text-primary">
      {/* Top Header Navigation */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. Introduction & Hotel Story */}
        <HotelStory onOpenBooking={handleOpenBooking} />

        {/* 3. Rooms & Accommodation (24 rooms, 2 categories) */}
        <RoomsSection onOpenBooking={handleOpenBooking} />

        {/* 4. Hotel Amenities (5 Authentic Facilities) */}
        <AmenitiesSection onOpenBooking={handleOpenBooking} />

        {/* 5. Location & Varanasi Experience */}
        <LocationSection onOpenBooking={handleOpenBooking} />

        {/* 6. Gallery Section (Real Hotel Photos & Lightbox) */}
        <GallerySection onOpenBooking={handleOpenBooking} />

        {/* 7. Why Choose Hotel Four Seasons (Trust Editorial) */}
        <WhyChooseUs onOpenBooking={handleOpenBooking} />

        {/* 8. Contact & Booking Conversion Suite */}
        <ContactSection onOpenBooking={handleOpenBooking} />
      </main>

      {/* Sophisticated Ivory Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Floating WhatsApp Booking Button */}
      <FloatingWhatsApp onOpenBooking={handleOpenBooking} />

      {/* Interactive WhatsApp Booking Modal Engine */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
        initialData={bookingModalData}
      />
    </div>
  );
}

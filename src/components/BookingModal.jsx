import React, { useState, useEffect, useMemo } from 'react';
import { X, Calendar, Users, DoorClosed, MessageSquare, Phone, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';
import { buildWhatsAppLink, formatReadableDate, validateBookingForm } from '../utils/whatsapp';

export default function BookingModal({ isOpen, onClose, initialData = {} }) {
  const today = useMemo(() => new Date().toISOString().split('T')[0], []);
  const tomorrow = useMemo(() => new Date(Date.now() + 86400000).toISOString().split('T')[0], []);

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [guests, setGuests] = useState('2');
  const [rooms, setRooms] = useState('1');
  const [roomType, setRoomType] = useState('Not Decided');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData.checkIn) setCheckIn(initialData.checkIn);
    if (initialData.checkOut) setCheckOut(initialData.checkOut);
    if (initialData.guests) setGuests(initialData.guests);
    if (initialData.roomType) setRoomType(initialData.roomType);
  }, [initialData]);

  // Ensure checkOut is at least next day when checkIn changes
  useEffect(() => {
    if (checkIn && checkOut && checkOut <= checkIn) {
      const nextDay = new Date(new Date(checkIn).getTime() + 86400000).toISOString().split('T')[0];
      setCheckOut(nextDay);
    }
  }, [checkIn, checkOut]);

  // Escape key listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Live WhatsApp message preview
  const previewMessage = useMemo(() => {
    const checkInFormatted = formatReadableDate(checkIn) || checkIn || '[Check-in Date]';
    const checkOutFormatted = formatReadableDate(checkOut) || checkOut || '[Check-out Date]';

    let msg = `Hello Hotel Four Seasons,
I would like to enquire about a room booking.
Check-in: ${checkInFormatted}
Check-out: ${checkOutFormatted}
Guests: ${guests || 2}
Rooms: ${rooms || 1}
Preferred Room Type: ${roomType || 'Not Decided'}
Please share the availability and best available rates.`;

    if (notes && notes.trim().length > 0) {
      msg += `\nSpecial Request: ${notes.trim()}`;
    }

    msg += `\nThank you.`;
    return msg;
  }, [checkIn, checkOut, guests, rooms, roomType, notes]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = validateBookingForm({ checkIn, checkOut, guests, rooms });
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});

    const whatsappUrl = buildWhatsAppLink({
      checkIn,
      checkOut,
      guests,
      rooms,
      roomType,
      notes
    });

    // Open WhatsApp in new tab or native application
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-primary/70 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-surface border border-border shadow-modal my-auto overflow-hidden animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-5 sm:p-6 border-b border-border bg-[#FAF9F6]">
          <div>
            <div className="flex items-center space-x-2 text-accent text-[11px] font-semibold tracking-[0.24em] uppercase mb-1">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>DIRECT WHATSAPP RESERVATION</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-primary font-medium">
              Enquire Room Availability
            </h3>
            <p className="text-secondary text-xs sm:text-sm mt-1">
              Connect directly with our Varanasi front desk team for live availability and best direct rates.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-secondary hover:text-primary transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-7 space-y-6 max-h-[78vh] overflow-y-auto">
          
          {/* Validation Alert */}
          {Object.keys(errors).length > 0 && (
            <div className="p-3.5 bg-red-50 border border-red-200 text-red-800 text-xs flex items-start space-x-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
              <div>
                <p className="font-semibold">Please check the following:</p>
                <ul className="list-disc list-inside mt-1 space-y-0.5">
                  {Object.values(errors).map((err, idx) => (
                    <li key={idx}>{err}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Dates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="modal-checkin" className="flex items-center text-xs font-semibold tracking-wider uppercase text-secondary mb-1.5">
                <Calendar className="w-3.5 h-3.5 text-accent mr-1.5" />
                Check-in Date *
              </label>
              <input
                id="modal-checkin"
                type="date"
                min={today}
                value={checkIn}
                onChange={(e) => {
                  setCheckIn(e.target.value);
                  setErrors((prev) => ({ ...prev, checkIn: null }));
                }}
                className={`w-full px-3.5 py-2.5 text-xs sm:text-sm text-primary bg-[#FAF9F6] border ${
                  errors.checkIn ? 'border-red-400' : 'border-border'
                } focus:border-accent focus:outline-none transition-colors`}
                required
              />
            </div>

            <div>
              <label htmlFor="modal-checkout" className="flex items-center text-xs font-semibold tracking-wider uppercase text-secondary mb-1.5">
                <Calendar className="w-3.5 h-3.5 text-accent mr-1.5" />
                Check-out Date *
              </label>
              <input
                id="modal-checkout"
                type="date"
                min={checkIn || today}
                value={checkOut}
                onChange={(e) => {
                  setCheckOut(e.target.value);
                  setErrors((prev) => ({ ...prev, checkOut: null }));
                }}
                className={`w-full px-3.5 py-2.5 text-xs sm:text-sm text-primary bg-[#FAF9F6] border ${
                  errors.checkOut ? 'border-red-400' : 'border-border'
                } focus:border-accent focus:outline-none transition-colors`}
                required
              />
            </div>
          </div>

          {/* Guests and Rooms Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="modal-guests" className="flex items-center text-xs font-semibold tracking-wider uppercase text-secondary mb-1.5">
                <Users className="w-3.5 h-3.5 text-accent mr-1.5" />
                Number of Guests *
              </label>
              <select
                id="modal-guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm text-primary bg-[#FAF9F6] border border-border focus:border-accent focus:outline-none transition-colors"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6+">6+ Guests (Large Family / Group)</option>
              </select>
            </div>

            <div>
              <label htmlFor="modal-rooms" className="flex items-center text-xs font-semibold tracking-wider uppercase text-secondary mb-1.5">
                <DoorClosed className="w-3.5 h-3.5 text-accent mr-1.5" />
                Number of Rooms *
              </label>
              <select
                id="modal-rooms"
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm text-primary bg-[#FAF9F6] border border-border focus:border-accent focus:outline-none transition-colors"
              >
                <option value="1">1 Room</option>
                <option value="2">2 Rooms</option>
                <option value="3">3 Rooms</option>
                <option value="4+">4+ Rooms</option>
              </select>
            </div>
          </div>

          {/* Preferred Room Type Selection */}
          <div>
            <label className="block text-xs font-semibold tracking-wider uppercase text-secondary mb-2">
              Preferred Room Type
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { type: 'Executive Room', note: '2 Guests · Minimalist' },
                { type: 'Super Deluxe Room', note: 'Up to 3 Guests · Spacious' },
                { type: 'Not Decided', note: 'Guide me with options' }
              ].map((opt) => (
                <button
                  type="button"
                  key={opt.type}
                  onClick={() => setRoomType(opt.type)}
                  className={`p-3 text-left border transition-all ${
                    roomType === opt.type
                      ? 'border-accent bg-[#F4EFE6] text-primary ring-1 ring-accent'
                      : 'border-border bg-[#FAF9F6] text-secondary hover:border-accent/50'
                  }`}
                >
                  <div className="text-xs font-medium text-primary flex items-center justify-between">
                    <span>{opt.type}</span>
                    {roomType === opt.type && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    )}
                  </div>
                  <div className="text-[10px] text-secondary mt-0.5">
                    {opt.note}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Optional Notes */}
          <div>
            <label htmlFor="modal-notes" className="block text-xs font-semibold tracking-wider uppercase text-secondary mb-1.5">
              Special Requests / Notes (Optional)
            </label>
            <input
              id="modal-notes"
              type="text"
              placeholder="e.g. Early morning arrival, extra bed required, airport pick-up"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3.5 py-2 text-xs sm:text-sm text-primary bg-[#FAF9F6] border border-border focus:border-accent focus:outline-none transition-colors"
            />
          </div>

          {/* Real-time Message Preview Box */}
          <div className="border border-border bg-[#F1EEE7]/40 p-4">
            <div className="flex items-center justify-between text-[11px] font-semibold tracking-wider uppercase text-secondary mb-2">
              <span>WhatsApp Message Preview</span>
              <span className="text-accent text-[10px]">Formatted for Front Desk</span>
            </div>
            <pre className="font-mono text-xs text-primary/80 whitespace-pre-wrap bg-surface p-3 border border-border/80 overflow-x-auto leading-relaxed">
              {previewMessage}
            </pre>
          </div>

          {/* Actions */}
          <div className="space-y-3 pt-2">
            <button
              type="submit"
              className="w-full btn-whatsapp py-4 flex items-center justify-center space-x-2 text-sm shadow-elevated"
            >
              <MessageSquare className="w-5 h-5" />
              <span>CONTINUE ON WHATSAPP</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </button>

            <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-secondary pt-2 gap-2">
              <span className="text-center sm:text-left">
                Official WhatsApp: <strong className="text-primary">+91 82993 21450</strong>
              </span>
              <a
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                className="inline-flex items-center space-x-1.5 text-primary hover:text-accent font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span>Prefer to call? +91 542 2414243</span>
              </a>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
}

import { HOTEL_INFO } from '../data/hotelData';

export function formatReadableDate(dateString) {
  if (!dateString) return '';
  try {
    const [year, month, day] = dateString.split('-');
    if (!year || !month || !day) return dateString;
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  } catch {
    return dateString;
  }
}

export function generateBookingMessage({
  checkIn,
  checkOut,
  guests,
  rooms,
  roomType,
  notes = ''
}) {
  const checkInFormatted = formatReadableDate(checkIn) || checkIn;
  const checkOutFormatted = formatReadableDate(checkOut) || checkOut;

  let message = `Hello Hotel Four Seasons,
I would like to enquire about a room booking.
Check-in: ${checkInFormatted}
Check-out: ${checkOutFormatted}
Guests: ${guests}
Rooms: ${rooms}
Preferred Room Type: ${roomType}
Please share the availability and best available rates.`;

  if (notes && notes.trim().length > 0) {
    message += `\nSpecial Request: ${notes.trim()}`;
  }

  message += `\nThank you.`;
  return message;
}

export function buildWhatsAppLink({
  checkIn,
  checkOut,
  guests = 2,
  rooms = 1,
  roomType = 'Not Decided',
  notes = ''
}) {
  const message = generateBookingMessage({
    checkIn,
    checkOut,
    guests,
    rooms,
    roomType,
    notes
  });

  const encoded = encodeURIComponent(message);
  return `https://wa.me/${HOTEL_INFO.whatsappDigits}?text=${encoded}`;
}

export function buildGeneralWhatsAppLink(topic = 'General Enquiry') {
  const message = `Hello Hotel Four Seasons, I am planning a visit to Varanasi and would like to enquire about ${topic}. Please guide me. Thank you.`;
  return `https://wa.me/${HOTEL_INFO.whatsappDigits}?text=${encodeURIComponent(message)}`;
}

export function validateBookingForm({ checkIn, checkOut, guests, rooms }) {
  const errors = {};

  if (!checkIn) {
    errors.checkIn = 'Please select a check-in date.';
  }

  if (!checkOut) {
    errors.checkOut = 'Please select a check-out date.';
  } else if (checkIn && checkOut <= checkIn) {
    errors.checkOut = 'Check-out date must be after check-in date.';
  }

  if (!guests || Number(guests) < 1) {
    errors.guests = 'Please enter at least 1 guest.';
  }

  if (!rooms || Number(rooms) < 1) {
    errors.rooms = 'Please enter at least 1 room.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

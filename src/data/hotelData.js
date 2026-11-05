export const HOTEL_INFO = {
  name: "Hotel Four Seasons",
  city: "Varanasi",
  state: "Uttar Pradesh",
  country: "India",
  postalCode: "221001",
  address: "D.39/24, Kodai Ki Chowki, Dashaswamedh, Varanasi, Uttar Pradesh – 221001, India",
  locationBadge: "Kodai Ki Chowki · Dashaswamedh · Varanasi",
  phone: "+91 542 2414243",
  phoneRaw: "+915422414243",
  whatsappNumber: "+91 82993 21450",
  whatsappDigits: "918299321450",
  email: "htl4season@gmail.com",
  totalRooms: 24,
  checkIn: "12:00 PM",
  checkOut: "11:00 AM",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+Four+Seasons+Kodai+Ki+Chowki+Dashaswamedh+Varanasi+221001",
};

export const ROOMS_DATA = [
  {
    id: "executive-room",
    categoryNumber: "01",
    name: "Executive Room",
    eyebrow: "CATEGORY 01",
    shortDescription: "Designed for a comfortable and relaxing stay, the Executive Room features minimalist interiors, functional furnishings and an inviting atmosphere.",
    occupancy: "2 Guests",
    extraBed: "Available on request, subject to confirmation",
    image: "/images/executive-room-primary.jpg",
    secondaryImage: "/images/executive-room-seating.jpg",
    allImages: [
      "/images/executive-room-primary.jpg",
      "/images/executive-room-seating.jpg"
    ],
    highlights: [
      "2 Guests capacity",
      "Crisp white bedding & minimalist headboard",
      "Air conditioned comfort",
      "Private ensuite bathroom",
      "Flat-screen TV",
      "Electric kettle & tea station",
      "Full wooden wardrobe",
      "Extra bed upon request"
    ],
    idealFor: "Solo travelers, couples, and pilgrims seeking quiet repose after temple visits."
  },
  {
    id: "super-deluxe-room",
    categoryNumber: "02",
    name: "Super Deluxe Room",
    eyebrow: "CATEGORY 02",
    shortDescription: "Enjoy additional space and tasteful interiors in the Super Deluxe Room, designed to offer a comfortable stay for families and small groups.",
    occupancy: "Up to 3 Guests",
    extraBed: "Available on request, subject to confirmation",
    image: "/images/super-deluxe-room.jpg",
    secondaryImage: "/images/executive-room-seating.jpg",
    allImages: [
      "/images/super-deluxe-room.jpg",
      "/images/executive-room-seating.jpg"
    ],
    highlights: [
      "Up to 3 Guests occupancy",
      "Generously proportioned bedroom with seating corner",
      "Rich wood headboard with decorative throw pillows & bed runner",
      "Modern bedside reading lights & integrated power sockets",
      "Silent climate control / Air Conditioning",
      "Tea & coffee kettle station",
      "Spacious modern ensuite bathroom",
      "Extra bed upon request"
    ],
    idealFor: "Families, small groups, and guests wanting enhanced comfort and generous space."
  }
];

export const AMENITIES_DATA = [
  {
    id: "front-desk",
    title: "24-Hour Front Desk",
    description: "Round-the-clock reception assistance for smooth check-ins, early morning temple departures, and guest requests.",
    iconName: "Clock"
  },
  {
    id: "restaurant",
    title: "On-Site Restaurant",
    description: "Convenient dining on property, serving fresh, wholesome meals prepared for our hotel residents.",
    iconName: "UtensilsCrossed"
  },
  {
    id: "parking",
    title: "24-Hour Parking",
    description: "Dedicated on-premise vehicle parking available 24 hours a day for our staying guests.",
    iconName: "Car"
  },
  {
    id: "security",
    title: "Security",
    description: "Continuous premises surveillance, secured entrance, and trained staff ensuring complete peace of mind.",
    iconName: "ShieldCheck"
  },
  {
    id: "airport-transfer",
    title: "Airport Pick-up & Drop Assistance",
    description: "Coordinated transit assistance to and from Lal Bahadur Shastri International Airport and local railway stations.",
    iconName: "PlaneTakeoff"
  }
];

export const LOCATION_HIGHLIGHTS = [
  {
    name: "Shri Kashi Vishwanath Temple",
    distance: "Approx. 250 metres away",
    description: "One of the most sacred Jyotirlinga shrines in Hinduism, located just a short and convenient stroll from our doorstep.",
    tag: "Spiritual Epicenter"
  },
  {
    name: "Varanasi Saree Markets",
    distance: "Direct neighborhood access",
    description: "Surrounded by Varanasi's historic silk trading quarter, famous for handloom Banarasi sarees and authentic textiles.",
    tag: "Cultural Heritage"
  },
  {
    name: "Dashaswamedh Area & Ghats",
    distance: "Moments from the riverfront",
    description: "Immerse yourself in the iconic spiritual gatherings, morning boat rides, and the grand evening Ganga Aarti.",
    tag: "Historic Varanasi"
  },
  {
    name: "Railway Connectivity",
    distance: "Convenient city access",
    description: "Direct, accessible transit routes to Varanasi Junction (BSB) and Banaras Railway Stations for stress-free arrival.",
    tag: "Transit Hub"
  }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Hotel Four Seasons Façade",
    category: "Exterior",
    subtitle: "Dusk view showcasing modern architectural structure & grand entrance",
    src: "/images/hotel-exterior-dusk.jpg",
    aspect: "tall"
  },
  {
    id: 2,
    title: "Lobby & Reception Lounge",
    category: "Lobby",
    subtitle: "Polished Italian marble, artisanal decorative ceiling & 24/7 front desk",
    src: "/images/lobby-reception.jpg",
    aspect: "wide"
  },
  {
    id: 3,
    title: "Executive Room – Sanctuary",
    category: "Rooms",
    roomType: "Executive Room",
    subtitle: "Crisp white linens, warm lighting and functional minimalist appointments",
    src: "/images/executive-room-primary.jpg",
    aspect: "wide"
  },
  {
    id: 4,
    title: "Guest Seating & Entertainment Area",
    category: "Rooms",
    roomType: "Executive Room",
    subtitle: "Contemporary armchairs, coffee table, and flat-screen wall display",
    src: "/images/executive-room-seating.jpg",
    aspect: "wide"
  },
  {
    id: 5,
    title: "Super Deluxe Room – Expanded Suite",
    category: "Rooms",
    roomType: "Super Deluxe Room",
    subtitle: "Spacious layout with rich wood tones, premium bedding, and curated artwork",
    src: "/images/super-deluxe-room.jpg",
    aspect: "wide"
  }
];

export const TRUST_POINTS = [
  {
    number: "01",
    title: "Central Varanasi Location",
    description: "Situated in Kodai Ki Chowki, Dashaswamedh — placing you within walking distance of Kashi Vishwanath and iconic ghats."
  },
  {
    number: "02",
    title: "Two Distinct Room Categories",
    description: "Thoughtfully configured across 24 rooms — Executive Rooms for minimalist peace, and Super Deluxe for families."
  },
  {
    number: "03",
    title: "Convenient WhatsApp Booking",
    description: "Direct communication with the hotel front desk for clear availability, fair pricing, and personalized assistance."
  },
  {
    number: "04",
    title: "24-Hour Front Desk",
    description: "Experienced staff ready around the clock to support temple schedules, luggage handling, and local guidance."
  },
  {
    number: "05",
    title: "On-Site Restaurant",
    description: "Enjoy hot and freshly prepared meals in our on-premise dining area without navigating through busy streets."
  },
  {
    number: "06",
    title: "Airport Transfer Assistance",
    description: "Hassle-free transfers arranged to Lal Bahadur Shastri Airport and railway terminals for a peaceful journey."
  }
];

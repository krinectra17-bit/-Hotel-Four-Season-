# Hotel Four Seasons, Varanasi
### Luxury Hospitality Website & WhatsApp-First Reservation Engine

[![React](https://img.shields.io/badge/React-19.3-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC.svg)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A complete, production-quality hospitality website designed and developed for **Hotel Four Seasons, Varanasi, Uttar Pradesh, India**. Built with a **sophisticated light theme**, contemporary editorial aesthetics, and a **direct WhatsApp booking conversion engine**.

---

## 🏛️ About Hotel Four Seasons
- **Location**: D.39/24, Kodai Ki Chowki, Dashaswamedh, Varanasi, Uttar Pradesh – 221001, India.
- **Key Landmark**: Situated approximately **250 metres from Shri Kashi Vishwanath Temple** and walking distance from Dashaswamedh Ghat & the evening Ganga Aarti.
- **Total Capacity**: 24 thoughtfully appointed boutique guest rooms across two dedicated categories:
  - **Category 01: Executive Room** (2 Guests, minimalist interiors, extra bed on request)
  - **Category 02: Super Deluxe Room** (Up to 3 Guests, spacious layout with seating area)
- **Official Contact**:
  - **Telephone**: +91 542 2414243
  - **WhatsApp Booking**: +91 82993 21450
  - **Email**: htl4season@gmail.com

---

## 🎨 Design System & Palette

The website avoids outdated hotel website templates, dark themes, and generic card grids in favor of a quiet luxury, light-themed editorial visual identity:

| Token | Hex Code | Purpose |
|---|---|---|
| **Background** | `#FAF9F6` | Primary soft alabaster / warm ivory background |
| **Secondary Background** | `#F1EEE7` | Warm stone / linen contrast background |
| **Surface** | `#FFFFFF` | Card surface & elevated elements |
| **Primary Text** | `#25241F` | Deep charcoal umber (high legibility, no harsh blacks) |
| **Secondary Text** | `#77736B` | Muted taupe for descriptions and sub-labels |
| **Accent / Brass** | `#A58A61` | Refined brass gold accent for highlights and active states |
| **Accent Hover** | `#8E744E` | Deepened gold for interactive buttons |
| **Borders** | `#E9E4DB` | Subtle architectural framing lines |

### Typography
- **Headings**: *Cormorant Garamond* (Elegant classical serif)
- **Body & UI**: *Plus Jakarta Sans* / *Inter* (Crisp modern sans-serif)

---

## 📸 Real Hotel Photography
The website strictly utilizes **authentic property photography**:
- `public/images/hotel-exterior-dusk.jpg` — Modern architectural facade illuminated at dusk with the glowing "Hotel FOUR SEASONS" sign.
- `public/images/lobby-reception.jpg` — Italian marble welcome lobby with designer backlit ceiling and 24/7 reception desk.
- `public/images/executive-room-primary.jpg` — Executive Room sanctuary with crisp white bedding, dark wood wardrobe, and tea station.
- `public/images/executive-room-seating.jpg` — In-room seating lounge with modern armchairs, coffee table, and flat-screen display.
- `public/images/super-deluxe-room.jpg` — Super Deluxe Suite with plush king bedding, decorative runner, cushions, and artwork.

---

## 💬 WhatsApp-First Booking Engine
The primary conversion goal is direct, transparent reservations via WhatsApp without third-party commissions or fake availability countdowns:
- **Official WhatsApp Number**: `+91 82993 21450` (`https://wa.me/918299321450`)
- **Booking Form Inputs**:
  - Check-in Date (calendar picker with validation)
  - Check-out Date (validated to be later than check-in)
  - Number of Guests (1, 2, 3, 4, 5, 6+)
  - Number of Rooms (1, 2, 3, 4+)
  - Preferred Room Type (*Executive Room*, *Super Deluxe Room*, *Not Decided*)
  - Optional special requests / arrival notes
- **Live Message Preview Box** in real time:
  ```text
  Hello Hotel Four Seasons,
  I would like to enquire about a room booking.
  Check-in: [Selected Date]
  Check-out: [Selected Date]
  Guests: [Number]
  Rooms: [Number]
  Preferred Room Type: [Selected Type]
  Please share the availability and best available rates.
  Thank you.
  ```
- **CTAs Located Across All High-Intent Touchpoints**:
  - Header Navigation CTA
  - Hero Quick Availability Strip
  - Room Discovery Showcase Cards
  - Detailed Room Modals
  - Location & Pilgrimage Assistance Card
  - Contact & Inquiry Suite
  - Floating WhatsApp Widget with online status pulse

---

## 🛎️ Authentic Facilities (Strictly Verified)
1. **24-Hour Front Desk** — Round-the-clock reception assistance and early temple departure support.
2. **On-Site Restaurant** — Freshly prepared hot meals served directly on the premises.
3. **24-Hour Parking** — Dedicated on-premise vehicle parking for staying guests.
4. **Security** — Continuous premises surveillance and secured entrance.
5. **Airport Pick-up & Drop Assistance** — Coordinated transfers to Lal Bahadur Shastri Airport and railway terminals.

---

## 🗺️ Prime Location Highlights
- **Shri Kashi Vishwanath Temple**: Approximately 250 metres away.
- **Varanasi Saree Markets**: Direct access to local silk markets.
- **Dashaswamedh Area**: Steps from the historic ghats and evening Ganga Aarti.
- **Railway Connectivity**: Convenient access to Varanasi Junction (BSB) and Banaras stations.
- Interactive **"Get Directions on Maps"** and **"Copy Address"** with one-tap clipboard integration.

---

## 🚀 Quick Start & Local Development

### Prerequisites
- [Node.js](https://nodejs.org/) v18+ or v20+
- npm v9+

### Installation
```bash
# Clone the repository
git clone https://github.com/krinectra17-bit/-Hotel-Four-Season-.git
cd -Hotel-Four-Season-

# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Production Build
```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```text
├── public/
│   ├── images/
│   │   ├── hotel-exterior-dusk.jpg       # Real property facade
│   │   ├── lobby-reception.jpg           # Marble lobby & front desk
│   │   ├── executive-room-primary.jpg    # Category 01 bedroom
│   │   ├── executive-room-seating.jpg    # Seating & lounge area
│   │   └── super-deluxe-room.jpg         # Category 02 suite
│   ├── robots.txt                        # Search crawler instructions
│   └── sitemap.xml                       # Canonical XML sitemap
├── src/
│   ├── components/
│   │   ├── Header.jsx                    # Transparent-to-ivory sticky navigation
│   │   ├── Hero.jsx                      # Architectural hero + quick booking strip
│   │   ├── HotelStory.jsx                # Editorial introduction (24 rooms)
│   │   ├── RoomsSection.jsx              # Alternating room discovery showcase
│   │   ├── RoomModal.jsx                 # Full photo gallery & amenity modal
│   │   ├── BookingModal.jsx              # Direct WhatsApp booking engine
│   │   ├── AmenitiesSection.jsx          # 5 verified facilities with line icons
│   │   ├── LocationSection.jsx           # Dashaswamedh & Kashi Vishwanath access
│   │   ├── GallerySection.jsx            # Filterable masonry gallery with lightbox
│   │   ├── WhyChooseUs.jsx               # Trust-building editorial section
│   │   ├── ContactSection.jsx            # 4-button conversion suite (Call, WhatsApp, Maps, Email)
│   │   ├── Footer.jsx                    # Refined ivory footer
│   │   └── FloatingWhatsApp.jsx          # Floating WhatsApp trigger & online badge
│   ├── data/
│   │   └── hotelData.js                  # Centralized content, rooms, amenities & location data
│   ├── utils/
│   │   └── whatsapp.js                   # URL encoding, date formatters & validation
│   ├── App.jsx                           # Application root
│   ├── index.css                         # Tailwind directives & luxury styling
│   └── main.jsx                          # React 19 entry point
├── index.html                            # Semantic HTML5, Schema.org Hotel JSON-LD, SEO
├── tailwind.config.js                    # Custom palette, typography & radii
└── vite.config.js                        # Vite build configuration
```

---

## 🔍 Technical SEO & Performance
- **Title**: `Hotel Four Seasons Varanasi | Comfortable Stay Near Kashi Vishwanath Temple`
- **Schema.org Structured Data**: Complete `Hotel` / `LodgingBusiness` JSON-LD with geo coordinates (`25.3090, 83.0075`), check-in/out times, and amenities list.
- **OpenGraph & Twitter Cards**: High-resolution image preview of hotel exterior at dusk.
- **Robots.txt & Sitemap.xml**: Ready for Google Search Console indexing.

---

## 📄 License
MIT License. Created for **Hotel Four Seasons, Varanasi**.

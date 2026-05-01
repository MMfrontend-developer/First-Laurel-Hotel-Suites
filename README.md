# Royal Haven Hotel & Suites — Website

A premium, mobile-first Next.js 15 website for Royal Haven Hotel & Suites, Ibadan's #1 specialty boutique hotel.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form + Zod
- **Animations**: CSS transitions + Intersection Observer
- **Icons**: Lucide React
- **Fonts**: Playfair Display, Jost, Cormorant Garamond (Google Fonts)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — Hero, highlights, rooms preview, testimonials, attractions |
| `/rooms` | Rooms & Suites — Detailed room cards with amenities |
| `/amenities` | Amenities — Icon grid of all hotel facilities |
| `/dining` | Dining — Restaurant info, room service, nearby restaurants |
| `/booking` | Booking — Full reservation form with Zod validation |
| `/gallery` | Gallery — Masonry photo grid with category filters |
| `/contact` | Contact — Form, map embed, WhatsApp link |



```
src/
├── app/
│   ├── layout.tsx          # Root layout (Navbar + Footer)
│   ├── globals.css         # Global styles + Tailwind
│   ├── page.tsx            # Homepage
│   ├── rooms/page.tsx
│   ├── amenities/page.tsx
│   ├── dining/page.tsx
│   ├── booking/page.tsx
│   ├── gallery/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Navbar.tsx          # Sticky responsive navbar
│   ├── Footer.tsx          # Footer with map embed
│   └── ScrollReveal.tsx    # Scroll animation wrapper
└── lib/
    └── utils.ts            # cn() utility
```

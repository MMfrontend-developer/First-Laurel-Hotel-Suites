import Image from "next/image";
import Link from "next/link";
import {
  Star,
  MapPin,
  Clock,
  Wifi,
  Car,
  UtensilsCrossed,
  Dumbbell,
  ChevronRight,
  Award,
  Quote,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const highlights = [
  { icon: Car, label: "Free Parking" },
  { icon: UtensilsCrossed, label: "Restaurant & Bar" },
  { icon: Clock, label: "24-Hr Room Service" },
  { icon: Wifi, label: "Daily Housekeeping" },
  { icon: Dumbbell, label: "Spa & Gym" },
];

const rooms = [
  {
    name: "Standard Room",
    desc: "Cosy and well-appointed, perfect for solo travellers or couples seeking comfort.",
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    price: "From ₦45,000/night",
    slug: "/rooms",
  },
  {
    name: "Deluxe Room",
    desc: "Elevated space with premium furnishings, garden views, and enhanced amenities.",
    img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
    price: "From ₦65,000/night",
    slug: "/rooms",
  },
  {
    name: "Presidential Suite",
    desc: "Our finest accommodation — one queen bed, non-smoking, with panoramic views.",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    price: "From ₦120,000/night",
    slug: "/rooms",
  },
];

const testimonials = [
  {
    quote:
      "Fantastic customer experience from check-in to check-out. The staff made us feel at home. Absolutely the best hotel in Ibadan.",
    author: "Adewale O.",
    stay: "Stayed — August 2024",
    stars: 5,
  },
  {
    quote:
      "The best hotel I've seen so far in Oyo State. Clean rooms, excellent food, and incredibly attentive staff. Will definitely return!",
    author: "Chinyere A.",
    stay: "Stayed — October 2024",
    stars: 5,
  },
  {
    quote:
      "The spa, gym and all are wonderful. Perfect for a business trip or weekend getaway. Location is very convenient along the expressway.",
    author: "Emeka F.",
    stay: "Stayed — December 2024",
    stars: 5,
  },
];

const attractions = [
  { name: "Obafemi Awolowo Stadium", distance: "6 min drive" },
  { name: "Palms Shopping Mall", distance: "10 min drive" },
  { name: "Bower's Tower", distance: "15 min drive" },
  { name: "Elbow Room", distance: "Nearby" },
];

export default function Home() {
  return (
    <div className="bg-cream">
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1800&q=85"
          alt="First Laurel Hotel & Suites exterior"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-navy-950/50 to-navy-950/80" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="font-body text-gold-400 text-xs tracking-[0.35em] uppercase mb-6 animate-fade-in">
            ★ Ibadan&apos;s #1 Specialty Lodging · TripAdvisor ★
          </p>
          <h1 className="font-serif text-white text-5xl sm:text-6xl lg:text-7xl font-normal leading-tight mb-6 animate-fade-up">
            First Laurel
            <em className="block text-gold-400 font-normal italic">
              Hotel & Suites
            </em>
          </h1>
          <p className="font-body text-white/70 text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed animate-fade-up">
            Ibadan&apos;s Premier Boutique Experience — where elegance,
            warmth, and world-class hospitality meet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
            <Link href="/booking" className="btn-primary">
              Book Your Stay
            </Link>
            <Link
              href="/rooms"
              className="btn-outline text-white border-white/40 hover:border-gold-500 hover:bg-gold-500"
            >
              Explore Rooms
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs tracking-widest uppercase font-body">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* ── HIGHLIGHTS BAR ── */}
      <section className="bg-navy-950 py-5">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap justify-center gap-8 sm:gap-12">
          {highlights.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 text-white/70"
            >
              <Icon size={16} className="text-gold-500" />
              <span className="font-body text-xs tracking-widest uppercase">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80"
                alt="First Laurel Hotel lobby"
                width={600}
                height={700}
                className="object-cover w-full h-[550px]"
              />
              {/* Badge */}
              <div className="absolute -bottom-6 -right-6 bg-navy-950 border border-gold-500/30 p-6 text-center hidden sm:block">
                <Award size={28} className="text-gold-500 mx-auto mb-2" />
                <p className="font-serif text-white text-lg">#1</p>
                <p className="font-body text-white/50 text-xs tracking-wider uppercase">
                  Specialty Lodging
                </p>
                <p className="font-body text-white/50 text-xs tracking-wider uppercase">
                  Ibadan · TripAdvisor
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="font-body text-gold-500 text-xs tracking-[0.3em] uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-navy-950 text-4xl lg:text-5xl font-normal leading-tight mb-6">
              A Boutique Haven in the Heart of Ibadan
            </h2>
            <div className="gold-divider mb-8" style={{ marginLeft: 0 }} />
            <p className="font-body text-gray-600 leading-relaxed mb-4">
              Nestled conveniently at Km 2 along the Lagos-Ibadan Expressway,
              First Laurel Hotel & Suites is Ibadan&apos;s distinguished boutique
              hotel offering 20 meticulously appointed air-conditioned rooms.
            </p>
            <p className="font-body text-gray-600 leading-relaxed mb-8">
              Whether you&apos;re visiting for business or leisure, our award-winning
              hospitality, refined interiors, and world-class facilities ensure
              every stay is a memorable one.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              {[
                ["20", "Rooms"],
                ["#1", "TripAdvisor"],
                ["24/7", "Service"],
              ].map(([num, label]) => (
                <div key={label} className="border-l-2 border-gold-500 pl-4">
                  <p className="font-serif text-navy-950 text-3xl">{num}</p>
                  <p className="font-body text-gray-500 text-xs tracking-wider uppercase">
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <Link href="/rooms" className="btn-primary">
              View Our Rooms <ChevronRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FEATURED ROOMS ── */}
      <section className="py-24 px-4 bg-navy-950/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <p className="font-body text-gold-500 text-xs tracking-[0.3em] uppercase mb-3">
              Accommodation
            </p>
            <h2 className="font-serif text-navy-950 text-4xl lg:text-5xl font-normal mb-4">
              Our Rooms & Suites
            </h2>
            <div className="gold-divider" />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {rooms.map((room, i) => (
              <ScrollReveal key={room.name} delay={i * 150}>
                <div className="card-hover bg-white group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={room.img}
                      alt={room.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-navy-950/10 transition-colors" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-navy-950 text-xl mb-2">
                      {room.name}
                    </h3>
                    <p className="font-body text-gray-500 text-sm leading-relaxed mb-4">
                      {room.desc}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-body text-gold-600 text-sm font-medium">
                        {room.price}
                      </span>
                      <Link
                        href={room.slug}
                        className="font-body text-xs tracking-widest uppercase text-navy-950 hover:text-gold-500 transition-colors flex items-center gap-1"
                      >
                        Details <ChevronRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/rooms" className="btn-outline border-navy-950 text-navy-950 hover:bg-navy-950 hover:text-white">
              View All Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 px-4 bg-navy-950">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <p className="font-body text-gold-500 text-xs tracking-[0.3em] uppercase mb-3">
              Guest Reviews
            </p>
            <h2 className="font-serif text-white text-4xl lg:text-5xl font-normal mb-4">
              What Our Guests Say
            </h2>
            <div className="gold-divider" />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="testimonial-card p-8 h-full flex flex-col">
                  <Quote size={32} className="text-gold-500/40 mb-4" />
                  <p className="font-body text-white/80 leading-relaxed flex-1 italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <div className="flex gap-0.5 mb-2">
                      {Array.from({ length: t.stars }).map((_, j) => (
                        <Star
                          key={j}
                          size={14}
                          className="text-gold-500 fill-gold-500"
                        />
                      ))}
                    </div>
                    <p className="font-body text-white font-medium text-sm">
                      {t.author}
                    </p>
                    <p className="font-body text-white/40 text-xs mt-0.5">
                      {t.stay}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEARBY ATTRACTIONS ── */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <p className="font-body text-gold-500 text-xs tracking-[0.3em] uppercase mb-3">
              Location
            </p>
            <h2 className="font-serif text-navy-950 text-4xl font-normal mb-4">
              Nearby Attractions
            </h2>
            <div className="gold-divider" />
            <p className="font-body text-gray-500 mt-6 max-w-xl mx-auto text-sm leading-relaxed">
              Perfectly positioned along the Lagos-Ibadan Expressway for easy
              access to Ibadan&apos;s key landmarks.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {attractions.map((a, i) => (
              <ScrollReveal key={a.name} delay={i * 100}>
                <div className="bg-white p-6 border border-gray-100 hover:border-gold-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-center">
                  <MapPin
                    size={24}
                    className="text-gold-500 mx-auto mb-3"
                  />
                  <h3 className="font-serif text-navy-950 text-base mb-1">
                    {a.name}
                  </h3>
                  <p className="font-body text-gray-400 text-xs tracking-wider">
                    {a.distance}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative py-28 px-4 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1800&q=80"
          alt="Hotel pool at sunset"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/75" />
        <ScrollReveal className="relative z-10 text-center max-w-2xl mx-auto">
          <p className="font-body text-gold-400 text-xs tracking-[0.3em] uppercase mb-4">
            Reserve Your Stay
          </p>
          <h2 className="font-serif text-white text-4xl lg:text-5xl font-normal mb-6">
            Ready for an Unforgettable Experience?
          </h2>
          <p className="font-body text-white/70 mb-10 leading-relaxed">
            Free cancellation available. Check-in & check-out at 12:00 PM.
            Book directly for the best rates.
          </p>
          <Link href="/booking" className="btn-primary text-base">
            Book Your Stay
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}

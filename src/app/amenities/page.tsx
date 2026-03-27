import Image from "next/image";
import {
  UtensilsCrossed,
  Clock,
  Car,
  Sparkles,
  Baby,
  ShirtIcon,
  Wind,
  CheckCircle2,
  Wifi,
  Shield,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const amenities = [
  {
    icon: UtensilsCrossed,
    title: "Restaurant & Bar / Lounge",
    desc: "Savour expertly crafted Nigerian and continental dishes in our elegant restaurant. Unwind at our bar and lounge with a curated selection of spirits, wines, and cocktails.",
  },
  {
    icon: Clock,
    title: "24-Hour Room Service",
    desc: "Enjoy the comfort of meals and beverages delivered directly to your room at any hour — day or night. Our kitchen team is always ready to serve.",
  },
  {
    icon: Car,
    title: "Free Self-Parking",
    desc: "Arriving by car? We offer complimentary, secure self-parking for all hotel guests — no hidden fees, no hassle.",
  },
  {
    icon: Sparkles,
    title: "Spa & Gym",
    desc: "Rejuvenate mind and body at our in-house spa offering a range of treatments, or maintain your fitness routine in our fully equipped gym.",
  },
  {
    icon: Baby,
    title: "Kids Activities",
    desc: "Families with young ones will love our dedicated kids activities area, ensuring younger guests are entertained and happy throughout their stay.",
  },
  {
    icon: ShirtIcon,
    title: "Laundry & Dry Cleaning",
    desc: "Keep your wardrobe fresh with our professional laundry and dry cleaning service — fast, reliable, and available to all guests.",
  },
  {
    icon: Wind,
    title: "Air Conditioning",
    desc: "All 20 rooms are fitted with modern, individual air conditioning units to ensure your perfect temperature comfort throughout the year.",
  },
  {
    icon: CheckCircle2,
    title: "Daily Housekeeping",
    desc: "Our dedicated housekeeping team maintains every room to the highest standards daily — fresh linens, spotless bathrooms, and immaculate spaces.",
  },
  {
    icon: Wifi,
    title: "Complimentary Wi-Fi",
    desc: "Stay connected with high-speed Wi-Fi available throughout the hotel — in your room, the lobby, restaurant, and all common areas.",
  },
  {
    icon: Shield,
    title: "24-Hour Security",
    desc: "Your safety is our priority. Enjoy peace of mind with our round-the-clock professional security team and CCTV monitoring.",
  },
];

export default function AmenitiesPage() {
  return (
    <div className="bg-cream pt-20">
      {/* Header */}
      <section className="relative h-72 flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=80"
          alt="Amenities"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy-950/70" />
        <div className="relative z-10 text-center">
          <p className="font-body text-gold-400 text-xs tracking-[0.3em] uppercase mb-3">
            Facilities & Services
          </p>
          <h1 className="font-serif text-white text-5xl font-normal">
            Amenities
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 text-center max-w-2xl mx-auto">
        <p className="font-body text-gray-600 leading-relaxed">
          From world-class dining and spa treatments to seamless business
          facilities — First Laurel Hotel & Suites provides everything you
          need for an extraordinary stay.
        </p>
        <div className="gold-divider mt-8" />
      </section>

      {/* Amenities Grid */}
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((a, i) => (
            <ScrollReveal key={a.title} delay={i * 80}>
              <div className="amenity-card p-8 h-full">
                <div className="amenity-icon w-14 h-14 bg-navy-50 flex items-center justify-center text-navy-700 mb-6 transition-all duration-300">
                  <a.icon size={26} />
                </div>
                <h3 className="font-serif text-navy-950 text-lg mb-3">
                  {a.title}
                </h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed">
                  {a.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Feature image strip */}
      <section className="grid grid-cols-3 h-64 sm:h-80">
        {[
          "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=600&q=80",
          "https://images.unsplash.com/photo-1574279606130-09958dc756f7?w=600&q=80",
          "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80",
        ].map((src, i) => (
          <div key={i} className="relative overflow-hidden">
            <Image
              src={src}
              alt={`Amenity ${i + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}
      </section>
    </div>
  );
}

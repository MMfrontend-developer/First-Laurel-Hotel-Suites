import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, UtensilsCrossed, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const nearbyRestaurants = [
  {
    name: "Zen Restaurant",
    desc: "A serene dining destination offering a fusion of Asian and continental cuisine in a calm, elegant atmosphere.",
    distance: "5 min drive",
    img: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600&q=80",
  },
  {
    name: "Whimpy's",
    desc: "A popular local favourite serving quick, flavourful meals. Great for a casual lunch or early dinner.",
    distance: "8 min drive",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
  },
  {
    name: "Martha's",
    desc: "Hearty home-style cooking with an Ibadan twist. Known for their traditional soups and hearty Nigerian breakfasts.",
    distance: "10 min drive",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
  },
  {
    name: "Mtbakes Pizza",
    desc: "Artisan pizzas crafted with fresh, locally sourced ingredients — the go-to spot for families and casual dining.",
    distance: "12 min drive",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
  },
];

export default function DiningPage() {
  return (
    <div className="bg-cream pt-20">
      {/* Header */}
      <section className="relative h-72 flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80"
          alt="Dining"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy-950/70" />
        <div className="relative z-10 text-center">
          <p className="font-body text-gold-400 text-xs tracking-[0.3em] uppercase mb-3">
            Culinary Experience
          </p>
          <h1 className="font-serif text-white text-5xl font-normal">Dining</h1>
        </div>
      </section>

      {/* Restaurant Feature */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                alt="Royal Haven Restaurant"
                width={700}
                height={500}
                className="object-cover w-full h-[480px]"
              />
              <div className="absolute -bottom-5 -right-5 bg-gold-500 p-5 hidden sm:block">
                <UtensilsCrossed size={32} className="text-white" />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="font-body text-gold-500 text-xs tracking-[0.3em] uppercase mb-4">
              On-Site Restaurant
            </p>
            <h2 className="font-serif text-navy-950 text-4xl lg:text-5xl font-normal mb-6">
              The Laurel Restaurant & Bar
            </h2>
            <div className="gold-divider mb-8" style={{ marginLeft: 0 }} />
            <p className="font-body text-gray-600 leading-relaxed mb-4">
              Indulge in a culinary journey at our elegant on-site restaurant,
              where our skilled chefs blend the finest Nigerian flavours with
              continental classics. From morning coffee to evening cocktails, we
              craft every dish and drink with care.
            </p>
            <p className="font-body text-gray-600 leading-relaxed mb-8">
              Our Bar & Lounge offers a refined space to unwind — whether you
              prefer a fine wine, a freshly crafted cocktail, or a local cold
              beer. Live music on select evenings adds to the warm, convivial
              atmosphere.
            </p>
            <div className="space-y-3 mb-8">
              {[
                ["Breakfast", "7:00 AM – 10:30 AM"],
                ["Lunch", "12:00 PM – 3:00 PM"],
                ["Dinner", "6:00 PM – 10:30 PM"],
                ["Bar & Lounge", "All Day until Midnight"],
              ].map(([meal, time]) => (
                <div key={meal} className="flex items-center gap-4">
                  <Clock size={14} className="text-gold-500" />
                  <span className="font-body text-gray-800 text-sm font-medium w-28">
                    {meal}
                  </span>
                  <span className="font-body text-gray-500 text-sm">{time}</span>
                </div>
              ))}
            </div>
            <Link href="/booking" className="btn-primary">
              Reserve a Table <ChevronRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Room Service */}
      <section className="bg-navy-950 py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-body text-gold-400 text-xs tracking-[0.3em] uppercase mb-4">
              In-Room Dining
            </p>
            <h2 className="font-serif text-white text-4xl font-normal mb-6">
              24-Hour Room Service
            </h2>
            <div className="gold-divider mb-8" />
            <p className="font-body text-white/70 leading-relaxed max-w-xl mx-auto">
              Prefer to dine in the comfort of your room? Our 24-hour room
              service menu brings the restaurant experience directly to you —
              freshly prepared meals, snacks, and beverages, delivered promptly
              at any time of day or night.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Nearby Restaurants */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <p className="font-body text-gold-500 text-xs tracking-[0.3em] uppercase mb-3">
              Around the Area
            </p>
            <h2 className="font-serif text-navy-950 text-4xl font-normal mb-4">
              Nearby Restaurants
            </h2>
            <div className="gold-divider" />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {nearbyRestaurants.map((r, i) => (
              <ScrollReveal key={r.name} delay={i * 100}>
                <div className="card-hover bg-white">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={r.img}
                      alt={r.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-navy-950 text-lg mb-1">
                      {r.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-3">
                      <MapPin size={12} />
                      {r.distance}
                    </div>
                    <p className="font-body text-gray-500 text-xs leading-relaxed">
                      {r.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import {
  Wind,
  Tv,
  Coffee,
  Bath,
  Sparkles,
  Monitor,
  BedDouble,
  BedSingle,
  Users,
  CheckCircle2,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const amenityIcons: Record<string, React.ReactNode> = {
  "Air Conditioning": <Wind size={14} />,
  "Flat-screen TV": <Tv size={14} />,
  Refrigerator: <Coffee size={14} />,
  "Private Bathroom": <Bath size={14} />,
  "Free Toiletries": <Sparkles size={14} />,
  "Cable TV": <Tv size={14} />,
  Desk: <Monitor size={14} />,
  "Daily Housekeeping": <CheckCircle2 size={14} />,
  "Non-Smoking": <CheckCircle2 size={14} />,
  "Sitting Area": <CheckCircle2 size={14} />,
  "Room Service": <CheckCircle2 size={14} />,
  "Mini Bar": <Coffee size={14} />,
};

const rooms = [
  {
    name: "Standard Room",
    icon: <BedSingle size={28} />,
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80",
    price: "₦45,000",
    guests: "1–2 Guests",
    size: "25 m²",
    desc: "Our Standard Room provides a cosy and peaceful retreat with all the essential comforts for a restful stay. Ideal for solo travellers and couples on a business or leisure visit.",
    amenities: [
      "Air Conditioning",
      "Flat-screen TV",
      "Refrigerator",
      "Private Bathroom",
      "Free Toiletries",
      "Cable TV",
      "Desk",
      "Daily Housekeeping",
    ],
  },
  {
    name: "Deluxe Room",
    icon: <BedDouble size={28} />,
    img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=900&q=80",
    price: "₦65,000",
    guests: "1–2 Guests",
    size: "35 m²",
    desc: "Upgrade your experience with our Deluxe Room — featuring premium furnishings, larger spaces, garden or courtyard views, and thoughtful extras that make every moment luxurious.",
    amenities: [
      "Air Conditioning",
      "Flat-screen TV",
      "Refrigerator",
      "Private Bathroom",
      "Free Toiletries",
      "Cable TV",
      "Desk",
      "Sitting Area",
      "Room Service",
      "Daily Housekeeping",
    ],
  },
  {
    name: "Presidential Suite",
    icon: <BedDouble size={28} />,
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&q=80",
    price: "₦120,000",
    guests: "1–2 Guests",
    size: "60 m²",
    desc: "Our flagship accommodation — the Presidential Suite — features a king queen bed, non-smoking environment, and panoramic views. Experience unmatched luxury with dedicated concierge service.",
    amenities: [
      "Air Conditioning",
      "Flat-screen TV",
      "Refrigerator",
      "Private Bathroom",
      "Free Toiletries",
      "Cable TV",
      "Desk",
      "Sitting Area",
      "Mini Bar",
      "Room Service",
      "Non-Smoking",
      "Daily Housekeeping",
    ],
    featured: true,
  },
  {
    name: "Family Suite",
    icon: <Users size={28} />,
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80",
    price: "₦95,000",
    guests: "Up to 4 Guests",
    size: "55 m²",
    desc: "Designed for families, our spacious Family Suite provides ample room for everyone. Includes separate sleeping areas, a shared lounge space, and all the amenities for a comfortable family retreat.",
    amenities: [
      "Air Conditioning",
      "Flat-screen TV",
      "Refrigerator",
      "Private Bathroom",
      "Free Toiletries",
      "Cable TV",
      "Desk",
      "Sitting Area",
      "Room Service",
      "Daily Housekeeping",
    ],
  },
];

export default function RoomsPage() {
  return (
    <div className="bg-cream pt-20">
      {/* Page Header */}
      <section className="relative h-72 flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1600&q=80"
          alt="Rooms header"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy-950/70" />
        <div className="relative z-10 text-center">
          <p className="font-body text-gold-400 text-xs tracking-[0.3em] uppercase mb-3">
            Accommodation
          </p>
          <h1 className="font-serif text-white text-5xl font-normal">
            Rooms & Suites
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 text-center max-w-2xl mx-auto">
        <p className="font-body text-gray-600 leading-relaxed">
          Each of our 20 air-conditioned rooms is meticulously designed to
          offer comfort, style, and all the amenities you need for a perfect
          stay — whether you&apos;re here for business or pleasure.
        </p>
        <div className="gold-divider mt-8" />
      </section>

      {/* Rooms */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto space-y-20">
          {rooms.map((room, i) => (
            <ScrollReveal key={room.name} delay={100}>
              <div
                className={`grid lg:grid-cols-2 gap-0 bg-white shadow-xl overflow-hidden ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image — swap order for even rows on desktop */}
                <div
                  className={`relative h-80 lg:h-auto min-h-[400px] ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={room.img}
                    alt={room.name}
                    fill
                    className="object-cover"
                  />
                  {room.featured && (
                    <div className="absolute top-4 left-4 bg-gold-500 text-white text-xs tracking-widest uppercase px-4 py-1.5 font-body">
                      Best Suite
                    </div>
                  )}
                </div>

                {/* Content */}
                <div
                  className={`p-10 lg:p-14 flex flex-col justify-center ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="text-gold-500 mb-4">{room.icon}</div>
                  <h2 className="font-serif text-navy-950 text-3xl mb-2">
                    {room.name}
                  </h2>
                  <div className="flex gap-6 text-xs font-body text-gray-400 tracking-wider uppercase mb-4">
                    <span>{room.guests}</span>
                    <span>·</span>
                    <span>{room.size}</span>
                  </div>
                  <p className="font-body text-gray-600 leading-relaxed mb-8 text-sm">
                    {room.desc}
                  </p>

                  {/* Amenities */}
                  <div className="grid grid-cols-2 gap-2 mb-8">
                    {room.amenities.map((a) => (
                      <div
                        key={a}
                        className="flex items-center gap-2 text-gray-600 text-xs font-body"
                      >
                        <span className="text-gold-500">
                          {amenityIcons[a] || <CheckCircle2 size={14} />}
                        </span>
                        {a}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div>
                      <span className="font-body text-gray-400 text-xs tracking-wider uppercase">
                        Starting from
                      </span>
                      <p className="font-serif text-navy-950 text-2xl">
                        {room.price}
                        <span className="text-gray-400 text-sm font-body">
                          /night
                        </span>
                      </p>
                    </div>
                    <Link
                      href={`/booking?room=${encodeURIComponent(room.name)}`}
                      className="btn-primary"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Policies */}
      <section className="bg-navy-950 py-16 px-4">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-8 text-center">
          {[
            ["Check-in", "12:00 PM"],
            ["Check-out", "12:00 PM"],
            ["Cancellation", "Free Cancellation"],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="font-body text-white/40 text-xs tracking-widest uppercase mb-2">
                {label}
              </p>
              <p className="font-serif text-gold-400 text-2xl">{value}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

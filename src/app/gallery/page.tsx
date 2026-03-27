import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const categories = [
  "All",
  "Exterior",
  "Rooms",
  "Restaurant",
  "Spa & Pool",
  "Events",
];

const images = [
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    alt: "Hotel exterior at night",
    category: "Exterior",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    alt: "Standard room",
    category: "Rooms",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
    alt: "Deluxe room interior",
    category: "Rooms",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    alt: "Restaurant interior",
    category: "Restaurant",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
    alt: "Spa treatment room",
    category: "Spa & Pool",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    alt: "Presidential suite bathroom",
    category: "Rooms",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80",
    alt: "Pool area",
    category: "Spa & Pool",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    alt: "Fine dining setup",
    category: "Restaurant",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
    alt: "Gym facility",
    category: "Spa & Pool",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80",
    alt: "Event hall",
    category: "Events",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
    alt: "Hotel lobby",
    category: "Exterior",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    alt: "Family suite",
    category: "Rooms",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
    alt: "Hotel bedroom",
    category: "Rooms",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1574279606130-09958dc756f7?w=800&q=80",
    alt: "Spa pool",
    category: "Spa & Pool",
    span: "",
  },
];

export default function GalleryPage() {
  return (
    <div className="bg-cream pt-20">
      {/* Header */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1600&q=80"
          alt="Gallery"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy-950/70" />
        <div className="relative z-10 text-center">
          <p className="font-body text-gold-400 text-xs tracking-[0.3em] uppercase mb-3">
            Visual Journey
          </p>
          <h1 className="font-serif text-white text-5xl font-normal">Gallery</h1>
        </div>
      </section>

      {/* Category filter (decorative — in a real app, add interactivity) */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`font-body text-xs tracking-widest uppercase px-5 py-2.5 border transition-all duration-200 ${
                  i === 0
                    ? "bg-navy-950 text-white border-navy-950"
                    : "border-gray-200 text-gray-500 hover:border-gold-500 hover:text-gold-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style grid using CSS columns */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
            {images.map((img, i) => (
              <ScrollReveal key={i} delay={i * 50} className="mb-4 break-inside-avoid">
                <div className="gallery-item overflow-hidden group relative">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={500}
                    height={400}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{
                      height: i % 5 === 0 ? "350px" : i % 3 === 0 ? "280px" : "220px",
                    }}
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/40 transition-all duration-400 flex items-end p-4">
                    <span className="font-body text-xs tracking-widest uppercase text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {img.category}
                    </span>
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

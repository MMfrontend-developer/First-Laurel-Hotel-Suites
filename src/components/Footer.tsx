import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      {/* Gold line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <p className="font-serif text-gold-500 text-2xl mb-1">Royal Haven</p>
          <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-4">
            Hotel & Suites
          </p>
          <p className="text-white/60 text-sm leading-relaxed font-body mb-6">
            Ibadan&apos;s #1 specialty boutique hotel, rated by TripAdvisor. Where
            comfort meets elegance along the Lagos-Ibadan Expressway.
          </p>
          <div className="flex gap-4">
            {[
              { icon: Instagram, href: "#", label: "Instagram" },
              { icon: Facebook, href: "#", label: "Facebook" },
              { icon: Twitter, href: "#", label: "Twitter" },
              {
                icon: MessageCircle,
                href: "https://wa.me/2348113644444",
                label: "WhatsApp",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/60 hover:border-gold-500 hover:text-gold-500 transition-all duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-body text-xs tracking-[0.2em] uppercase text-gold-500 mb-6">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {[
              ["Home", "/"],
              ["Rooms & Suites", "/rooms"],
              ["Amenities", "/amenities"],
              ["Dining", "/dining"],
              ["Gallery", "/gallery"],
              ["Book a Stay", "/booking"],
              ["Contact Us", "/contact"],
            ].map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-white/60 hover:text-gold-400 text-sm font-body transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-body text-xs tracking-[0.2em] uppercase text-gold-500 mb-6">
            Contact
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <MapPin size={16} className="text-gold-500 mt-0.5 shrink-0" />
              <span className="text-white/60 text-sm font-body leading-relaxed">
                Km 2, Soka Bus Stop, Along Idi-Mango, Lagos-Ibadan Expressway,
                Ibadan, Oyo State, Nigeria
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={16} className="text-gold-500 shrink-0" />
              <a
                href="tel:+2348113644444"
                className="text-white/60 hover:text-gold-400 text-sm font-body transition-colors"
              >
                +234 811 364 4444
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={16} className="text-gold-500 shrink-0" />
              <a
                href="mailto:info@royalhavenhotel.com"
                className="text-white/60 hover:text-gold-400 text-sm font-body transition-colors"
              >
                info@royalhavenhotel.com
              </a>
            </li>
          </ul>
          <div className="mt-6 p-4 border border-white/10">
            <p className="text-xs tracking-wider uppercase text-white/40 font-body mb-1">
              Check-in / Check-out
            </p>
            <p className="text-white/70 text-sm font-body">12:00 PM / 12:00 PM</p>
          </div>
        </div>

        {/* Map */}
        <div>
          <h3 className="font-body text-xs tracking-[0.2em] uppercase text-gold-500 mb-6">
            Find Us
          </h3>
          <div className="overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.2!2d3.9167!3d7.4167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103943b8dd8a2d49%3A0x15fefb9a6baf2dfb!2sSoka%20Bus%20Stop%2C%20Ibadan%2C%20Oyo!5e0!3m2!1sen!2sng!4v1234567890"
              width="100%"
              height="180"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Royal Haven Hotel Location"
            />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-white/30 text-xs font-body">
            © {new Date().getFullYear()} Royal Haven Hotel & Suites. All rights reserved.
          </p>
          <p className="text-white/30 text-xs font-body">
            Ibadan&apos;s #1 Specialty Lodging · TripAdvisor
          </p>
        </div>
      </div>
    </footer>
  );
}

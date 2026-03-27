"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms & Suites" },
  { href: "/amenities", label: "Amenities" },
  { href: "/dining", label: "Dining" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg =
    scrolled || !isHome
      ? "bg-white/95 shadow-md border-b border-gray-100 backdrop-blur-md"
      : "bg-transparent";

  const textColor = scrolled || !isHome ? "text-navy-950" : "text-white";
  const subTextColor = scrolled || !isHome ? "text-gray-400" : "text-white/70";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span className="font-serif text-gold-500 text-xl font-semibold tracking-wide group-hover:text-gold-400 transition-colors">
              First Laurel
            </span>
            <span className={`font-body ${subTextColor} text-[10px] tracking-[0.25em] uppercase`}>
              Hotel & Suites
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-xs tracking-widest uppercase font-body ${
                  pathname === link.href
                    ? "text-gold-500"
                    : `${textColor} hover:text-gold-500`
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+2348113644444"
              className={`flex items-center gap-2 ${subTextColor} hover:text-gold-500 transition-colors text-xs tracking-wider`}
            >
              <Phone size={14} />
              +234 811 364 4444
            </a>
            <Link
              href="/booking"
              className="bg-gold-500 hover:bg-gold-600 text-white text-xs tracking-widest uppercase px-5 py-2.5 font-body font-medium transition-all duration-300 hover:-translate-y-0.5"
            >
              Book Now
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className={`lg:hidden ${textColor} p-2`}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-navy-950 flex flex-col">
          <div className="flex justify-between items-center p-6">
            <span className="font-serif text-gold-500 text-xl">
              First Laurel
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-white p-2"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-1 gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`font-serif text-3xl transition-colors ${
                  pathname === link.href
                    ? "text-gold-500"
                    : "text-white hover:text-gold-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/booking"
              onClick={() => setMobileOpen(false)}
              className="mt-4 bg-gold-500 text-white text-sm tracking-widest uppercase px-8 py-3 font-body"
            >
              Book Now
            </Link>
          </nav>
          <div className="p-6 text-center text-white/40 text-xs tracking-wider">
            Km 2, Soka Bus Stop, Lagos-Ibadan Expressway, Ibadan
          </div>
        </div>
      )}
    </>
  );
}

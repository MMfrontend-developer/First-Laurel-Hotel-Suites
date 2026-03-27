"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { CheckCircle2, Calendar, Users, ChevronDown } from "lucide-react";

const bookingSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  checkIn: z.string().min(1, "Please select a check-in date"),
  checkOut: z.string().min(1, "Please select a check-out date"),
  roomType: z.string().min(1, "Please select a room type"),
  guests: z.string().min(1, "Please select number of guests"),
  specialRequests: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const roomTypes = [
  "Standard Room",
  "Deluxe Room",
  "Presidential Suite",
  "Family Suite",
];

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const ref = `FLH-${Date.now().toString().slice(-6)}`;
    setBookingRef(ref);
    setSubmitted(true);
    console.log("Booking data:", data);
  };

  if (submitted) {
    return (
      <div className="bg-cream min-h-screen pt-20 flex items-center justify-center px-4">
        <div className="bg-white max-w-lg w-full p-12 text-center shadow-xl">
          <CheckCircle2 size={56} className="text-gold-500 mx-auto mb-6" />
          <h2 className="font-serif text-navy-950 text-3xl mb-3">
            Booking Confirmed!
          </h2>
          <p className="font-body text-gray-500 mb-2">
            Thank you for choosing First Laurel Hotel & Suites.
          </p>
          <p className="font-body text-gray-400 text-sm mb-6">
            Your booking reference is:
          </p>
          <div className="bg-navy-950 text-gold-400 font-serif text-2xl py-4 px-8 mb-8 tracking-widest">
            {bookingRef}
          </div>
          <p className="font-body text-gray-500 text-sm leading-relaxed mb-8">
            A confirmation email will be sent to your inbox. Our team will
            contact you within 24 hours to finalise your reservation. For
            urgent enquiries, please call us or reach us on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                setSubmitted(false);
                setBookingRef("");
                reset();
              }}
              className="btn-outline border-navy-950 text-navy-950 hover:bg-navy-950 hover:text-white"
            >
              Make Another Booking
            </button>
            <a
              href="https://wa.me/2348113644444"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Contact via WhatsApp
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream pt-20">
      {/* Header */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&q=80"
          alt="Booking"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy-950/70" />
        <div className="relative z-10 text-center">
          <p className="font-body text-gold-400 text-xs tracking-[0.3em] uppercase mb-3">
            Reserve Your Stay
          </p>
          <h1 className="font-serif text-white text-5xl font-normal">Booking</h1>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-16">
          {/* Sidebar */}
          <aside className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-serif text-navy-950 text-2xl mb-4">
                Plan Your Stay
              </h2>
              <div className="gold-divider mb-6" style={{ marginLeft: 0 }} />
              <p className="font-body text-gray-500 text-sm leading-relaxed">
                Fill in your details and we&apos;ll confirm your reservation within
                24 hours. All rooms are air-conditioned and include daily
                housekeeping.
              </p>
            </div>

            <div className="space-y-4">
              {[
                [Calendar, "Check-in & Check-out", "Both at 12:00 PM"],
                [CheckCircle2, "Free Cancellation", "Cancel anytime at no charge"],
                [Users, "Group Bookings", "Contact us for groups of 5+"],
              ].map(([Icon, title, desc]) => (
                <div key={String(title)} className="flex gap-3">
                  <Icon
                    size={18}
                    className="text-gold-500 mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="font-body text-navy-950 text-sm font-medium">
                      {String(title)}
                    </p>
                    <p className="font-body text-gray-400 text-xs">{String(desc)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-navy-950 p-6">
              <p className="font-body text-gold-400 text-xs tracking-widest uppercase mb-2">
                Need Help?
              </p>
              <p className="font-body text-white/70 text-sm mb-4">
                Call us or chat on WhatsApp for immediate assistance.
              </p>
              <a
                href="https://wa.me/2348113644444"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-green-600 hover:bg-green-700 text-white text-xs tracking-widest uppercase py-3 font-body transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </aside>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="lg:col-span-3 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="form-label">Full Name *</label>
                <input
                  {...register("fullName")}
                  placeholder="Adewale Johnson"
                  className="form-input"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>
              <div>
                <label className="form-label">Email Address *</label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="your@email.com"
                  className="form-input"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="form-label">Phone Number *</label>
              <input
                {...register("phone")}
                placeholder="+234 811 364 4444"
                className="form-input"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="form-label">Check-in Date *</label>
                <input
                  {...register("checkIn")}
                  type="date"
                  className="form-input"
                  min={new Date().toISOString().split("T")[0]}
                />
                {errors.checkIn && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.checkIn.message}
                  </p>
                )}
              </div>
              <div>
                <label className="form-label">Check-out Date *</label>
                <input
                  {...register("checkOut")}
                  type="date"
                  className="form-input"
                  min={new Date().toISOString().split("T")[0]}
                />
                {errors.checkOut && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.checkOut.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="form-label">Room Type *</label>
                <div className="relative">
                  <select
                    {...register("roomType")}
                    className="form-input appearance-none pr-10"
                  >
                    <option value="">Select a room</option>
                    {roomTypes.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={16}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  />
                </div>
                {errors.roomType && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.roomType.message}
                  </p>
                )}
              </div>
              <div>
                <label className="form-label">Number of Guests *</label>
                <div className="relative">
                  <select
                    {...register("guests")}
                    className="form-input appearance-none pr-10"
                  >
                    <option value="">Select guests</option>
                    {["1 Guest", "2 Guests", "3 Guests", "4 Guests"].map(
                      (g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      )
                    )}
                  </select>
                  <ChevronDown
                    size={16}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  />
                </div>
                {errors.guests && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.guests.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="form-label">Special Requests</label>
              <textarea
                {...register("specialRequests")}
                rows={4}
                placeholder="Early check-in, dietary requirements, accessibility needs..."
                className="form-input resize-none"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full justify-center text-base disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing...
                  </span>
                ) : (
                  "Confirm Reservation"
                )}
              </button>
              <p className="font-body text-gray-400 text-xs text-center mt-3">
                ✓ Free cancellation &nbsp;·&nbsp; ✓ No payment required now
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

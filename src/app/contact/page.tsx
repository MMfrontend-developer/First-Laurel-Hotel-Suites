"use client";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, MessageCircle, Clock, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Contact form:", data);
    setSent(true);
    reset();
  };

  return (
    <div className="bg-cream pt-20">
      {/* Header */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1423946996993-bc6a2a98fa60?w=1600&q=80"
          alt="Contact"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy-950/70" />
        <div className="relative z-10 text-center">
          <p className="font-body text-gold-400 text-xs tracking-[0.3em] uppercase mb-3">
            Get in Touch
          </p>
          <h1 className="font-serif text-white text-5xl font-normal">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <ScrollReveal>
            <p className="font-body text-gold-500 text-xs tracking-[0.3em] uppercase mb-4">
              We&apos;re Here for You
            </p>
            <h2 className="font-serif text-navy-950 text-4xl font-normal mb-6">
              Reach Out Anytime
            </h2>
            <div className="gold-divider mb-8" style={{ marginLeft: 0 }} />
            <p className="font-body text-gray-500 leading-relaxed mb-10">
              Whether you have a question about our rooms, need help planning
              your visit, or want to make a group reservation, our team is
              always ready to assist.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-navy-50 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-navy-700" />
                </div>
                <div>
                  <p className="font-body text-xs tracking-widest uppercase text-gray-400 mb-1">
                    Address
                  </p>
                  <p className="font-body text-gray-700 text-sm leading-relaxed">
                    Km 2, Soka Bus Stop, Along Idi-Mango,
                    <br />
                    Lagos-Ibadan Expressway, Ibadan,
                    <br />
                    Oyo State, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-navy-50 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-navy-700" />
                </div>
                <div>
                  <p className="font-body text-xs tracking-widest uppercase text-gray-400 mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+2348113644444"
                    className="font-body text-gray-700 text-sm hover:text-gold-500 transition-colors"
                  >
                    +234 811 364 4444
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-navy-50 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-navy-700" />
                </div>
                <div>
                  <p className="font-body text-xs tracking-widest uppercase text-gray-400 mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:info@firstlaurelhotel.com"
                    className="font-body text-gray-700 text-sm hover:text-gold-500 transition-colors"
                  >
                    info@firstlaurelhotel.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-50 flex items-center justify-center shrink-0">
                  <MessageCircle size={20} className="text-green-600" />
                </div>
                <div>
                  <p className="font-body text-xs tracking-widest uppercase text-gray-400 mb-1">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/2348113644444"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-green-600 text-sm hover:text-green-700 transition-colors font-medium"
                  >
                    Chat with us on WhatsApp →
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-navy-50 flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-navy-700" />
                </div>
                <div>
                  <p className="font-body text-xs tracking-widest uppercase text-gray-400 mb-1">
                    Operating Hours
                  </p>
                  <p className="font-body text-gray-700 text-sm">
                    Reception: 24 Hours, 7 Days a Week
                  </p>
                  <p className="font-body text-gray-500 text-xs">
                    Restaurant: 7:00 AM – 10:30 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.2!2d3.9167!3d7.4167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103943b8dd8a2d49%3A0x15fefb9a6baf2dfb!2sSoka%20Bus%20Stop%2C%20Ibadan%2C%20Oyo!5e0!3m2!1sen!2sng!4v1234567890"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="First Laurel Hotel Location"
              />
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={200}>
            <div className="bg-white p-10 shadow-lg">
              <h3 className="font-serif text-navy-950 text-2xl mb-6">
                Send Us a Message
              </h3>

              {sent ? (
                <div className="text-center py-12">
                  <CheckCircle2
                    size={48}
                    className="text-gold-500 mx-auto mb-4"
                  />
                  <h4 className="font-serif text-navy-950 text-xl mb-2">
                    Message Sent!
                  </h4>
                  <p className="font-body text-gray-500 text-sm mb-6">
                    Thank you for reaching out. We&apos;ll get back to you within
                    24 hours.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="btn-outline border-navy-950 text-navy-950 hover:bg-navy-950 hover:text-white text-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div>
                    <label className="form-label">Your Name *</label>
                    <input
                      {...register("name")}
                      placeholder="Adewale Johnson"
                      className="form-input"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.name.message}
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

                  <div>
                    <label className="form-label">Subject *</label>
                    <input
                      {...register("subject")}
                      placeholder="Room enquiry, Group booking..."
                      className="form-input"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="form-label">Message *</label>
                    <textarea
                      {...register("message")}
                      rows={6}
                      placeholder="Tell us how we can help you..."
                      className="form-input resize-none"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

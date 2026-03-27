import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "First Laurel Hotel & Suites | Ibadan's Premier Boutique Experience",
  description:
    "First Laurel Hotel & Suites — Ibadan's #1 specialty lodging on TripAdvisor. 20 air-conditioned rooms, restaurant & bar, spa, gym, and free parking. Located along the Lagos-Ibadan Expressway, Ibadan, Nigeria.",
  keywords:
    "hotel Ibadan, boutique hotel Nigeria, First Laurel Hotel, luxury lodging Ibadan, Oyo State hotel, Lagos-Ibadan Expressway hotel",
  openGraph: {
    title: "First Laurel Hotel & Suites | Ibadan's Premier Boutique Experience",
    description:
      "Ibadan's #1 specialty lodging. 20 air-conditioned rooms, restaurant & bar, spa & gym, and free parking.",
    type: "website",
    locale: "en_NG",
    siteName: "First Laurel Hotel & Suites",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

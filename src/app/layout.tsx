import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Royal Haven Hotel & Suites | Ibadan's Premier Boutique Experience",
  description:
    "Royal Haven Hotel & Suites — Ibadan's #1 specialty lodging on TripAdvisor. 20 air-conditioned rooms, restaurant & bar, spa, gym, and free parking. Located along the Lagos-Ibadan Expressway, Ibadan, Nigeria.",
  keywords:
    "hotel Ibadan, boutique hotel Nigeria, Royal Haven Hotel, luxury lodging Ibadan, Oyo State hotel, Lagos-Ibadan Expressway hotel",
  openGraph: {
    title: "Royal Haven Hotel & Suites | Ibadan's Premier Boutique Experience",
    description:
      "Ibadan's #1 specialty lodging. 20 air-conditioned rooms, restaurant & bar, spa & gym, and free parking.",
    type: "website",
    locale: "en_NG",
    siteName: "Royal Haven Hotel & Suites",
  },
  icons: {
    icon: "/first-laurel.png",
    apple: "/first-laurel.png",
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

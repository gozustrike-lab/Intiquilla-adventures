import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BookingProvider } from "@/lib/booking-context";
import { I18nProvider } from "@/lib/i18n-context";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BookingModal } from "@/components/booking-modal";
import { Preloader } from "@/components/preloader";
import { WhatsAppWidget } from "@/components/whatsapp-widget";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Intiquilla Adventures | Turismo de Aventura en Huaraz, Peru",
  description:
    "Descubre las montanas mas altas del Peru con Intiquilla Adventures. Trekking, tours astronomicos y expediciones en la Cordillera Blanca y Huayhuash. Reserva directa en Huaraz.",
  keywords: [
    "Huaraz",
    "Cordillera Blanca",
    "Laguna 69",
    "Santa Cruz trek",
    "Huayhuash",
    "turismo aventura Peru",
    "Chavin",
    "Intiquilla Adventures",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Preload first hero slide for instant display */}
        <link rel="preload" as="image" href="/images/hero-slide-nightcamp.webp" type="image/webp" />
        <link rel="preload" as="image" href="/images/hero-slide-nightcamp-sm.webp" type="image/webp" media="(max-width: 767px)" />
        <link rel="preload" as="image" href="/images/hero-slide-chakana.webp" type="image/webp" />
        <link rel="preload" as="image" href="/images/hero-slide-mountainlake.webp" type="image/webp" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-[#0B1311] text-white`}>
        {/* Immersive logo background */}
        <div className="immersive-bg" aria-hidden="true" />
        <I18nProvider>
          <BookingProvider>
            <Preloader />
            <Navbar />
            <main className="pt-12 md:pt-14">{children}</main>
            <Footer />
            <BookingModal />
            <WhatsAppWidget />
          </BookingProvider>
        </I18nProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BookingProvider } from "@/lib/booking-context";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BookingModal } from "@/components/booking-modal";

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
      <body className={`${inter.variable} font-sans antialiased bg-[#0B1311] text-white`}>
        <BookingProvider>
          <Navbar />
          <main className="pt-16 md:pt-20">{children}</main>
          <Footer />
          <BookingModal />
        </BookingProvider>
      </body>
    </html>
  );
}

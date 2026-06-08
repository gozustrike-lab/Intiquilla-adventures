import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BookingProvider } from "@/lib/booking-context";
import { FavoritesProvider } from "@/lib/favorites-context";
import { I18nProvider } from "@/lib/i18n-context";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BookingModal } from "@/components/booking-modal";
import { Preloader } from "@/components/preloader";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import { SocialSidebar } from "@/components/social-sidebar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IntiQuilla Adventures | Luxury Amazon & Andean Experiences",
  description:
    "Descubre las montañas más altas del Perú con IntiQuilla Adventures. Trekking, tours astronómicos y expediciones en la Cordillera Blanca y Huayhuash. Reserva directa en Huaraz.",
  keywords: [
    "Huaraz",
    "Cordillera Blanca",
    "Laguna 69",
    "Santa Cruz trek",
    "Huayhuash",
    "turismo aventura Perú",
    "Chavín",
    "IntiQuilla Adventures",
    "Peru luxury travel",
    "Amazon Rainforest",
    "Andean expeditions",
    "Machu Picchu",
    "Sustainable tourism",
  ],
  icons: {
    icon: [
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/images/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: "IntiQuilla Adventures",
    title: "IntiQuilla Adventures | Luxury Amazon & Andean Experiences",
    description:
      "Discover extraordinary journeys through Peru, the Amazon rainforest, and the Andes with curated luxury travel experiences.",
    url: "https://www.intiquilladventures.com/",
    images: [
      {
        url: "https://www.intiquilladventures.com/images/intiquilla-open-graph.jpg",
        width: 1200,
        height: 630,
        alt: "IntiQuilla Adventures Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IntiQuilla Adventures",
    description: "Luxury Amazon & Andean Experiences",
    images: ["https://www.intiquilladventures.com/images/intiquilla-open-graph.jpg"],
  },
  metadataBase: new URL("https://www.intiquilladventures.com"),
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
        <link rel="preload" as="image" href="/images/hero-slide-mountain.webp" type="image/webp" />
        <link rel="preload" as="image" href="/images/hero-slide-mountainlake.webp" type="image/webp" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-[#111111] text-white`}>
        {/* Subtle ambient background glow */}
        <div className="ambient-glow" aria-hidden="true" />
        <I18nProvider>
          <FavoritesProvider>
            <BookingProvider>
            <Preloader />
            <Navbar />
            <main className="pt-12 md:pt-14">{children}</main>
            <Footer />
            <BookingModal />
            <WhatsAppWidget />
            <SocialSidebar />
          </BookingProvider>
          </FavoritesProvider>
        </I18nProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
  openGraph: {
    title: "Intiquilla Adventures | Turismo de Aventura en Huaraz",
    description:
      "Explora las montanas mas altas del Peru. Trekking, tours y expediciones en la Cordillera Blanca y Huayhuash.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

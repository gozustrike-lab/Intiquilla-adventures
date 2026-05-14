"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Compass, Phone, Globe, ChevronRight, ChevronDown } from "lucide-react";
import { useBooking } from "@/lib/booking-context";

export function Navbar() {
  const { setBookingOpen } = useBooking();
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();

  const handleBookingFromDrawer = () => {
    setIsOpen(false);
    setBookingOpen(true);
  };

  const navLinks = [
    { label: "Destinos", href: "/#destinos" },
    { label: "Tours", href: "/#tours" },
    { label: "Sobre Nosotros", href: "/nosotros" },
    { label: "Tips de Viaje", href: "/#tips" },
  ];

  const drawerLinks = [
    { label: "Destinos", href: "/#destinos" },
    { label: "Tours", href: "/#tours" },
    { label: "Sobre Nosotros", href: "/nosotros" },
    { label: "Tips de Viaje", href: "/#tips" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B1311]/80 backdrop-blur-md border-b border-[#D4AF37]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 rounded-full border border-[#D4AF37]/30 flex items-center justify-center bg-[#1A332B]">
              <Compass className="w-5 h-5 text-[#D4AF37] transition-transform group-hover:rotate-45" />
            </div>
            <span className="text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-[#D4AF37]">
              INTIQUILLA
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm tracking-wide rounded-lg transition-all duration-300 ${
                    isActive
                      ? "text-[#D4AF37] bg-[#D4AF37]/10"
                      : "text-white/80 hover:text-[#D4AF37] hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="relative ml-2">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-sm tracking-wide text-white/80 hover:text-[#D4AF37] transition-colors rounded-lg hover:bg-white/5"
              >
                <Globe className="w-4 h-4" />
                <span>ES</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`} />
              </button>
              {langOpen && (
                <div className="absolute top-full right-0 mt-1 flex bg-[#1A332B]/90 backdrop-blur-xl p-1 rounded-lg border border-[#D4AF37]/20 shadow-xl">
                  <button className="px-3 py-1.5 rounded-md bg-[#D4AF37] text-[#0B1311] text-xs font-bold">ES</button>
                  <button className="px-3 py-1.5 rounded-md text-white/60 hover:text-white text-xs">EN</button>
                </div>
              )}
            </div>

            <button
              onClick={() => setBookingOpen(true)}
              className="ml-3 flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1A332B] border border-[#D4AF37]/30 text-white text-sm font-medium tracking-wide hover:border-[#D4AF37] hover:bg-[#132720] transition-all duration-300"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span className="hidden lg:inline">Reservar por WhatsApp</span>
              <span className="lg:hidden">Reservar</span>
            </button>
          </nav>

          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 text-white hover:text-[#D4AF37] transition-colors"
            aria-label="Abrir menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`fixed top-0 right-0 h-screen w-[85vw] max-w-[380px] bg-[#0B1311]/95 backdrop-blur-xl border-l border-[#D4AF37]/20 p-6 z-50 flex flex-col justify-between transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex justify-between items-center pb-6 border-b border-gray-800/60">
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Explorar</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-400 hover:text-white border border-gray-800 rounded-lg transition-colors"
              aria-label="Cerrar menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="mt-8 space-y-3">
            {drawerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="group flex justify-between items-center p-3 text-lg font-medium text-gray-200 hover:text-white rounded-xl hover:bg-[#1A332B]/40 transition-all border border-transparent hover:border-[#D4AF37]/10"
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </nav>
        </div>
        <div className="space-y-4 pt-6 border-t border-gray-800/60">
          <div className="flex items-center justify-between px-3 text-xs text-gray-400">
            <span>Idioma del sitio</span>
            <div className="flex bg-[#1A332B]/40 p-1 rounded-md border border-gray-800">
              <button className="px-2 py-1 rounded bg-[#D4AF37] text-[#0B1311] font-bold text-xs">ES</button>
              <button className="px-2 py-1 rounded hover:text-white text-xs text-gray-400">EN</button>
            </div>
          </div>
          <button
            onClick={handleBookingFromDrawer}
            className="w-full bg-[#1A332B] hover:bg-[#132720] text-white border border-[#D4AF37]/30 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all shadow-lg flex items-center justify-center space-x-2"
          >
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            <span>Reservar por WhatsApp</span>
          </button>
        </div>
      </div>
    </header>
  );
}

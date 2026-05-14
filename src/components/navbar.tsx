"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Phone, Globe, ChevronRight } from "lucide-react";
import { useBooking } from "@/lib/booking-context";
import { useI18n, type Lang } from "@/lib/i18n-context";

export function Navbar() {
  const { setBookingOpen } = useBooking();
  const { lang, setLang, t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Lock body scroll when drawer is open */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleBookingFromDrawer = () => {
    setIsOpen(false);
    setBookingOpen(true);
  };

  const toggleLang = () => {
    setLang(lang === "es" ? "en" : "es");
  };

  const navLinks = [
    { label: t("nav.destinos"), href: "/#destinos" },
    { label: t("nav.tours"), href: "/#tours" },
    { label: t("nav.sobre"), href: "/nosotros" },
  ];

  const drawerLinks = [
    { label: t("nav.destinos"), href: "/#destinos" },
    { label: t("nav.tours"), href: "/#tours" },
    { label: t("nav.sobre"), href: "/nosotros" },
    { label: t("nav.tips"), href: "/#tips" },
  ];

  return (
    <>
      {/* ── FULL-BLEED HEADER ── */}
      <header
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 px-4 md:px-8 ${
          isScrolled
            ? "py-2 bg-[#0B1311]/85 backdrop-blur-md border-b border-[#D4AF37]/10 shadow-lg"
            : "py-3 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* BRAND */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-lg md:text-xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-[#D4AF37]">
              INTIQUILLA
            </span>
          </Link>

          {/* DESKTOP LINKS */}
          <nav className="hidden md:flex items-center space-x-6 text-xs uppercase tracking-wider font-semibold">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors duration-200 ${
                    isActive
                      ? "text-[#D4AF37]"
                      : "text-gray-300 hover:text-[#D4AF37]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Desktop language toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 transition-colors text-gray-300 hover:text-[#D4AF37]"
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="font-bold">{lang === "es" ? "ES" : "EN"}</span>
            </button>
          </nav>

          {/* QUICK ACTIONS */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setBookingOpen(true)}
              className="hidden sm:flex items-center gap-2 bg-[#1A332B] hover:bg-[#132720] text-white border border-[#D4AF37]/30 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-200"
            >
              <Phone className="w-3 h-3 text-[#D4AF37]" />
              {t("nav.whatsapp")}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-1.5 text-white hover:text-[#D4AF37] transition-colors"
              aria-label="Open menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE DRAWER BACKDROP ── */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ── MOBILE RTL DRAWER ── */}
      <div
        className={`fixed top-0 right-0 h-screen w-[85vw] max-w-[380px] bg-[#0B1311]/95 backdrop-blur-xl border-l border-[#D4AF37]/20 p-6 z-[70] flex flex-col justify-between transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          {/* Drawer header */}
          <div className="flex justify-between items-center pb-6 border-b border-gray-800/60">
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                {t("nav.explorar")}
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-400 hover:text-white border border-gray-800 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer links */}
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

        {/* Drawer footer */}
        <div className="space-y-4 pt-6 border-t border-gray-800/60">
          {/* Language toggle */}
          <div className="flex items-center justify-between px-3 text-xs text-gray-400">
            <span>{t("nav.idioma")}</span>
            <button
              onClick={toggleLang}
              className="flex bg-[#1A332B]/40 p-1 rounded-lg border border-gray-800 transition-all hover:border-[#D4AF37]/30"
            >
              <span
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                  lang === "es"
                    ? "bg-[#D4AF37] text-[#0B1311]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                ES
              </span>
              <span
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                  lang === "en"
                    ? "bg-[#D4AF37] text-[#0B1311]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                EN
              </span>
            </button>
          </div>
          <button
            onClick={handleBookingFromDrawer}
            className="w-full bg-[#1A332B] hover:bg-[#132720] text-white border border-[#D4AF37]/30 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all shadow-lg flex items-center justify-center space-x-2"
          >
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            <span>{t("nav.whatsapp")}</span>
          </button>
        </div>
      </div>
    </>
  );
}

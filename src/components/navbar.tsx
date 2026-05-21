"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, Phone, Globe, ChevronRight, Search, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useBooking } from "@/lib/booking-context";
import { useI18n } from "@/lib/i18n-context";

export function Navbar() {
  const { setBookingOpen, drawerOpen, setDrawerOpen } = useBooking();
  const { lang, setLang, t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openDrawer = () => { setIsOpen(true); setDrawerOpen(true); };
  const closeDrawer = () => { setIsOpen(false); setDrawerOpen(false); };
  useEffect(() => {
    if (isOpen) { document.body.style.overflow = "hidden"; }
    else { document.body.style.overflow = ""; }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleBookingFromDrawer = () => { closeDrawer(); setBookingOpen(true); };
  const toggleLang = () => { setLang(lang === "es" ? "en" : "es"); };

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
      {/* ═══ FULL-BLEED HEADER ═══ */}
      <header
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 px-3 md:px-8 ${
          isScrolled
            ? "py-2 bg-[#111111]/90 backdrop-blur-md border-b border-[#C89B3C]/10 shadow-lg"
            : "py-3 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full">

          {/* ── LOGO: symmetric horizontal PNG, forced 1:1 height ── */}
          <Link
            href="/"
            className="flex items-center transition-transform hover:scale-[1.01] focus:outline-none flex-shrink-0 py-1"
          >
            {/* Mobile: h-7 forced, wide container for object-contain symmetry */}
            <div className="relative h-7 w-[200px] md:hidden mix-blend-screen brightness-125">
              <Image
                src="/images/logo-simetrico.png"
                alt="Intiquilla Adventures"
                fill
                priority
                className="object-contain object-left scale-y-110 origin-left"
                sizes="200px"
              />
            </div>
            {/* Desktop: h-9 forced, wider for prominence */}
            <div className="relative hidden md:block h-9 w-[260px] lg:h-[34px] lg:w-[290px] mix-blend-screen brightness-125">
              <Image
                src="/images/logo-simetrico.png"
                alt="Intiquilla Adventures"
                fill
                priority
                className="object-contain object-left scale-y-110 origin-left"
                sizes="(max-width: 1024px) 260px, 290px"
              />
            </div>
          </Link>

          {/* ── DESKTOP NAV LINKS ── */}
          <nav className="hidden md:flex items-center space-x-6 text-xs uppercase tracking-wider font-semibold">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link key={link.href} href={link.href} className={`transition-colors duration-200 ${isActive ? "text-[#C89B3C]" : "text-gray-300 hover:text-[#C89B3C]"}`}>
                  {link.label}
                </Link>
              );
            })}
            <button onClick={toggleLang} className="flex items-center gap-1.5 transition-colors text-gray-300 hover:text-[#C89B3C]">
              <Globe className="w-3.5 h-3.5" />
              <span className="font-bold">{lang === "es" ? "ES" : "EN"}</span>
            </button>
          </nav>

          {/* ── ACTION ROW: Search, Favorites, Phone, Hamburger ── */}
          <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3">

            {/* SEARCH — scroll to booking widget */}
            <button
              onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth", block: "center" })}
              className="p-2 text-gray-300 hover:text-[#C89B3C] transition-colors focus:outline-none group relative"
              aria-label="Buscar aventuras"
            >
              <Search className="w-5 h-5 group-hover:scale-105 transition-transform" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#1C1C1C] text-white text-[10px] px-2 py-0.5 rounded border border-[#C89B3C]/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block whitespace-nowrap">
                {lang === "es" ? "Buscar Aventuras" : "Search Adventures"}
              </span>
            </button>

            {/* FAVORITES — coming soon toast */}
            <button
              onClick={() => {
                const el = document.getElementById("fav-toast");
                if (el) { el.classList.remove("opacity-0", "translate-y-2"); el.classList.add("opacity-100", "translate-y-0"); setTimeout(() => { el.classList.remove("opacity-100", "translate-y-0"); el.classList.add("opacity-0", "translate-y-2"); }, 2500); }
              }}
              className="p-2 text-gray-300 hover:text-[#C89B3C] transition-colors focus:outline-none group relative"
              aria-label="Mis favoritos"
            >
              <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#1C1C1C] text-white text-[10px] px-2 py-0.5 rounded border border-[#C89B3C]/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block whitespace-nowrap">
                {lang === "es" ? "Favoritos" : "Favorites"}
              </span>
            </button>

            {/* PHONE — native tel: link for real calls */}
            <a
              href="tel:+51943606789"
              className="p-2 text-gray-300 hover:text-[#C89B3C] transition-colors focus:outline-none group relative flex items-center justify-center"
              aria-label="Llamar a Intiquilla Adventures"
            >
              <Phone className="w-5 h-5 group-hover:scale-105 transition-transform" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#1C1C1C] text-white text-[10px] px-2 py-0.5 rounded border border-[#C89B3C]/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block whitespace-nowrap">
                {lang === "es" ? "Llamar" : "Call"}
              </span>
            </a>

            {/* HAMBURGER — mobile only */}
            <button
              onClick={openDrawer}
              className="md:hidden p-2 text-white hover:text-[#C89B3C] transition-colors z-50 shrink-0 ml-0.5"
              aria-label="Abrir menú"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ═══ FAVORITES TOAST ═══ */}
      <div
        id="fav-toast"
        className="fixed top-20 left-1/2 -translate-x-1/2 z-[80] px-5 py-2.5 rounded-xl bg-[#1C1C1C] border border-[#C89B3C]/30 shadow-xl shadow-black/30 opacity-0 translate-y-2 transition-all duration-300 pointer-events-none flex items-center gap-2"
      >
        <Heart className="w-4 h-4 text-[#C89B3C] fill-[#C89B3C]" />
        <span className="text-sm text-white/80 font-medium whitespace-nowrap">
          {lang === "es" ? "Favoritos disponible proximamente" : "Favorites coming soon"}
        </span>
      </div>

      {/* ═══ MOBILE DRAWER BACKDROP ═══ */}
      <div
        onClick={closeDrawer}
        style={{ touchAction: "manipulation" }}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-[250ms] md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ═══ MOBILE RTL DRAWER — COMPACT, NO VERTICAL OVERFLOW ═══ */}
      <div
        className={`fixed top-0 right-0 h-screen w-[85vw] max-w-[360px] bg-[#111111]/[0.98] backdrop-blur-xl border-l border-[#C89B3C]/15 z-[70] flex flex-col transform transition-transform duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden shadow-2xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-between">

          {/* ── TOP SECTION: Close + Logo + Nav Links ── */}
          <div className="space-y-3">

            {/* Close button */}
            <div className="flex justify-end items-center pt-3 pr-3">
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); closeDrawer(); }}
                onPointerDown={(e) => { e.stopPropagation(); e.preventDefault(); closeDrawer(); }}
                className="p-2 text-gray-400 hover:text-white border border-white/10 rounded-lg transition-colors focus:outline-none"
                aria-label="Cerrar menú"
                style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
              >
                <X className="w-5 h-5" strokeWidth={2.5} />
              </button>
            </div>

            {/* Horizontal brand logo — same symmetric image as header */}
            <div className="flex items-center justify-center pb-3 border-b border-white/[0.06]">
              <div className="relative h-8 w-[200px] mix-blend-screen brightness-125">
                <Image
                  src="/images/logo-simetrico.png"
                  alt="Intiquilla Adventures"
                  fill
                  priority
                  className="object-contain object-left scale-y-110 origin-left"
                  sizes="200px"
                />
              </div>
            </div>

            {/* Navigation links — reduced vertical padding */}
            <nav className="space-y-0.5 px-3 mt-1">
              {drawerLinks.map((item, idx) => (
                <motion.div
                  key={item.href}
                  initial={{ x: 30, opacity: 0 }}
                  animate={isOpen ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
                  transition={{ duration: 0.25, delay: 0.1 + idx * 0.04, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={closeDrawer}
                    className="group flex justify-between items-center py-2.5 px-3 text-sm font-medium text-gray-300 hover:text-white rounded-xl transition-all duration-200 border border-transparent hover:bg-white/[0.03] hover:border-[#C89B3C]/10"
                    style={{ touchAction: "manipulation" }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C89B3C]/50 group-hover:bg-[#C89B3C] transition-colors" />
                      <span className="uppercase tracking-wider text-xs">{item.label}</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-700 group-hover:text-[#C89B3C] group-hover:translate-x-0.5 transition-all" />
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>

          {/* ── BOTTOM SECTION: Language + WhatsApp CTA (anchored) ── */}
          <div className="space-y-3 pb-5 pt-4 border-t border-white/[0.06] px-5">

            {/* Language toggle — compact pill */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-gray-500 tracking-wider uppercase font-medium">{t("nav.idioma")}</span>
              <button
                onClick={toggleLang}
                className="relative flex bg-white/[0.04] p-[3px] rounded-full border border-white/[0.08] transition-all hover:border-[#C89B3C]/20"
              >
                <motion.div
                  className="absolute top-[3px] bottom-[3px] w-[calc(50%-3px)] bg-[#C89B3C] rounded-full shadow-lg shadow-[#C89B3C]/20"
                  animate={{ left: lang === "es" ? "3px" : "calc(50%)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
                <span className={`relative z-10 px-3 py-1.5 text-[11px] font-bold transition-colors duration-200 ${lang === "es" ? "text-[#111111]" : "text-gray-500"}`}>ES</span>
                <span className={`relative z-10 px-3 py-1.5 text-[11px] font-bold transition-colors duration-200 ${lang === "en" ? "text-[#111111]" : "text-gray-500"}`}>EN</span>
              </button>
            </div>

            {/* WhatsApp CTA — anchored at bottom */}
            <button
              onClick={handleBookingFromDrawer}
              className="w-full bg-gradient-to-r from-[#C89B3C] to-amber-500 text-[#111111] py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-[#C89B3C]/15 flex items-center justify-center gap-2"
              style={{ touchAction: "manipulation" }}
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>{t("nav.whatsapp")}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, Phone, Globe, ChevronRight, Search, Heart, Facebook, Instagram, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useBooking } from "@/lib/booking-context";
import { useFavorites } from "@/lib/favorites-context";
import { useI18n } from "@/lib/i18n-context";
import { TOURS } from "@/lib/tours-data";

export function Navbar() {
  const { setBookingOpen, drawerOpen, setDrawerOpen } = useBooking();
  const { favorites, toggleFavorite } = useFavorites();
  const { lang, setLang, t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFavDropdown, setShowFavDropdown] = useState(false);
  const favDropdownRef = useRef<HTMLDivElement>(null);
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

  // Close fav dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (favDropdownRef.current && !favDropdownRef.current.contains(e.target as Node)) {
        setShowFavDropdown(false);
      }
    };
    if (showFavDropdown) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showFavDropdown]);

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
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 px-5 md:px-10 ${
          isScrolled
            ? "py-2.5 bg-[#111111]/90 backdrop-blur-md border-b border-[#C89B3C]/10 shadow-lg"
            : "py-3.5 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full">

          {/* ── LOGO INTEGRAL — fondo transparente, responsive mobile-first ── */}
          <a href="/" className="flex items-center transition-transform hover:scale-[1.01] focus:outline-none py-0.5 flex-shrink-0">
            <div className="relative h-10 w-[190px] sm:h-11 sm:w-[225px] md:h-14 md:w-[280px] lg:h-[56px] lg:w-[320px]">
              <Image
                src="/images/logo-simetrico-transparent.png"
                alt="Intiquilla Adventures"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 640px) 190px, (max-width: 768px) 225px, (max-width: 1024px) 280px, 320px"
              />
            </div>
          </a>

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

            {/* FAVORITES — real dropdown */}
            <div className="relative" ref={favDropdownRef}>
              <button
                onClick={() => setShowFavDropdown((v) => !v)}
                className={`p-2 transition-colors focus:outline-none group relative ${showFavDropdown ? "text-[#C89B3C]" : "text-gray-300 hover:text-[#C89B3C]"}`}
                aria-label="Mis favoritos"
              >
                <Heart className={`w-5 h-5 group-hover:scale-110 transition-transform ${favorites.length > 0 ? "text-[#C89B3C] fill-[#C89B3C]" : ""}`} />
                {favorites.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                    {favorites.length}
                  </span>
                )}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#1C1C1C] text-white text-[10px] px-2 py-0.5 rounded border border-[#C89B3C]/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block whitespace-nowrap">
                  {lang === "es" ? "Favoritos" : "Favorites"}
                </span>
              </button>

              {/* Dropdown panel */}
              <AnimatePresence>
                {showFavDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute right-0 mt-3 w-72 bg-[#1C1C1C]/95 backdrop-blur-xl border border-[#C89B3C]/20 rounded-xl shadow-2xl shadow-black/40 z-[55] overflow-hidden"
                  >
                    <div className="px-4 pt-3 pb-2 border-b border-white/[0.06]">
                      <div className="flex items-center justify-between">
                        <h4 className="text-[10px] font-bold text-[#C89B3C] uppercase tracking-widest">
                          {lang === "es" ? "Mis Tours Favoritos" : "My Favorite Tours"}
                        </h4>
                        {favorites.length > 0 && (
                          <span className="text-[9px] text-gray-500 font-medium">{favorites.length} {favorites.length === 1 ? (lang === "es" ? "tour" : "tour") : (lang === "es" ? "tours" : "tours")}</span>
                        )}
                      </div>
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                      {favorites.length === 0 ? (
                        <div className="px-4 py-6 text-center">
                          <Heart className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                          <p className="text-gray-500 text-xs">
                            {lang === "es" ? "Aún no guardaste ningún tour" : "No tours saved yet"}
                          </p>
                        </div>
                      ) : (
                        <div className="py-1">
                          {favorites.map((id) => {
                            const tour = TOURS.find((t) => t.id === id);
                            if (!tour) return null;
                            return (
                              <div
                                key={id}
                                className="group/fav flex items-center gap-2 px-3 py-2 hover:bg-white/[0.03] transition-colors"
                              >
                                <Link
                                  href={`/tours/${tour.slug}`}
                                  onClick={() => setShowFavDropdown(false)}
                                  className="flex-1 min-w-0"
                                >
                                  <p className="text-xs text-gray-200 group-hover/fav:text-white truncate transition-colors">{tour.name}</p>
                                  <p className="text-[10px] text-gray-500 mt-0.5">{tour.duration} &middot; ${tour.price}</p>
                                </Link>
                                <button
                                  onClick={() => toggleFavorite(id)}
                                  className="p-1.5 text-gray-600 hover:text-red-400 transition-colors shrink-0 rounded-lg hover:bg-white/[0.05]"
                                  aria-label={lang === "es" ? "Quitar de favoritos" : "Remove from favorites"}
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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

      {/* ═══ MOBILE DRAWER BACKDROP ═══ */}
      <div
        onClick={closeDrawer}
        style={{ touchAction: "manipulation" }}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-[250ms] md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ═══ MOBILE RTL DRAWER — REBUILT: guaranteed visible on all screens ═══ */}
      <div
        className={`fixed top-0 right-0 h-dvh w-[85vw] max-w-[360px] bg-[#111111] border-l border-[#C89B3C]/15 z-[70] flex flex-col transform transition-transform duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden shadow-2xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ paddingTop: "env(safe-area-inset-top)", paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        {/* ── TOP: Close button ── */}
        <div className="flex justify-end pt-3 pr-3 flex-shrink-0">
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); closeDrawer(); }}
            className="p-2 text-gray-400 hover:text-white transition-colors focus:outline-none"
            aria-label="Cerrar menú"
            style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
          >
            <X className="w-5 h-5" strokeWidth={2.5} />
          </button>
        </div>

        {/* ── BRAND LOGO — transparente, responsive ── */}
        <div className="flex items-center justify-center px-4 py-3 flex-shrink-0 border-b border-white/[0.06]">
          <a href="/" className="flex items-center transition-transform hover:scale-[1.01] focus:outline-none flex-shrink-0">
            <div className="relative h-10 w-[190px]">
              <Image
                src="/images/logo-simetrico-transparent.png"
                alt="Intiquilla Adventures"
                fill
                priority
                className="object-contain object-left"
                sizes="190px"
              />
            </div>
          </a>
        </div>

        {/* ── NAV LINKS ── */}
        <nav className="flex-1 overflow-y-auto px-3 py-2">
          {drawerLinks.map((item, idx) => (
            <motion.div
              key={item.href}
              initial={{ x: 30, opacity: 0 }}
              animate={isOpen ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.05 + idx * 0.03, ease: [0.22, 1, 0.36, 1] }}
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

        {/* ── BOTTOM FOOTER: Language + CTA — always visible, never clipped ── */}
        <div className="flex-shrink-0 border-t border-white/[0.06] px-5 pt-3 pb-4 space-y-2.5">
          {/* FILA COMPACTA DE REDES SOCIALES INTEGRADA EN EL MENÚ */}
          <div className="flex items-center justify-center space-x-6 pb-2 border-b border-white/5 mb-2">
            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Síguenos:</span>
            <a
              href="https://www.facebook.com/share/1BmkSZU97A/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#D4AF37] active:scale-95 transition-all p-1"
              aria-label="Facebook de Intiquilla"
            >
              <Facebook className="w-[18px] h-[18px]" />
            </a>
            <a
              href="https://www.instagram.com/intiquilladventures?igsh=MW1uZnd6Z3dycDZpeQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#D4AF37] active:scale-95 transition-all p-1"
              aria-label="Instagram de Intiquilla"
            >
              <Instagram className="w-[18px] h-[18px]" />
            </a>
          </div>

          {/* Language toggle */}
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
              <span className={`relative z-10 px-3 py-1 text-[11px] font-bold transition-colors duration-200 ${lang === "es" ? "text-[#111111]" : "text-gray-500"}`}>ES</span>
              <span className={`relative z-10 px-3 py-1 text-[11px] font-bold transition-colors duration-200 ${lang === "en" ? "text-[#111111]" : "text-gray-500"}`}>EN</span>
            </button>
          </div>

          {/* WhatsApp CTA — full width, always visible */}
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
    </>
  );
}

"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Phone, Globe, ChevronRight, Mountain } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useBooking } from "@/lib/booking-context";
import { useI18n, type Lang } from "@/lib/i18n-context";

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

  /* Sync drawer state with shared context so WhatsApp FAB can hide */
  const openDrawer = () => { setIsOpen(true); setDrawerOpen(true); };
  const closeDrawer = () => { setIsOpen(false); setDrawerOpen(false); };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleBookingFromDrawer = () => {
    closeDrawer();
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
    { label: t("nav.destinos"), href: "/#destinos", icon: <Mountain className="w-4 h-4" /> },
    { label: t("nav.tours"), href: "/#tours", icon: <Globe className="w-4 h-4" /> },
    { label: t("nav.sobre"), href: "/nosotros", icon: <ChevronRight className="w-4 h-4" /> },
    { label: t("nav.tips"), href: "/#tips", icon: <ChevronRight className="w-4 h-4" /> },
  ];

  /* Reset drawer animation key each time drawer opens */
  const [animKey, setAnimKey] = useState(0);
  useEffect(() => {
    if (isOpen) setAnimKey((k) => k + 1);
  }, [isOpen]);

  /* Letter-split for INTIQUILLA reveal */
  const brandLetters = useMemo(() => "INTIQUILLA".split(""), []);

  return (
    <>
      {/* ── FULL-BLEED HEADER ── */}
      <header
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 px-4 md:px-8 ${
          isScrolled
            ? "py-1.5 bg-[#111111]/85 backdrop-blur-md border-b border-[#C89B3C]/10 shadow-lg"
            : "py-2.5 md:py-3 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* BRAND LOGO */}
          <Link href="/" className="flex items-center group shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-navbar-mobile.webp"
              alt="Intiquilla Adventures"
              className="h-12 md:hidden w-auto object-contain"
              draggable={false}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-navbar-desktop.webp"
              alt="Intiquilla Adventures"
              className="hidden md:block h-16 lg:h-[72px] w-auto object-contain"
              draggable={false}
            />
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
                      ? "text-[#C89B3C]"
                      : "text-gray-300 hover:text-[#C89B3C]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Desktop language toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 transition-colors text-gray-300 hover:text-[#C89B3C]"
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="font-bold">{lang === "es" ? "ES" : "EN"}</span>
            </button>
          </nav>

          {/* QUICK ACTIONS */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setBookingOpen(true)}
              className="hidden sm:flex items-center gap-2 bg-[#1C1C1C] hover:bg-[#171717] text-white border border-[#C89B3C]/30 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-200"
            >
              <Phone className="w-3 h-3 text-[#C89B3C]" />
              {t("nav.whatsapp")}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={openDrawer}
              className="md:hidden p-1.5 text-white hover:text-[#C89B3C] transition-colors"
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
        onClick={closeDrawer}
        style={{ touchAction: 'manipulation' }}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-[250ms] md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ── MOBILE RTL DRAWER ── */}
      <div
        className={`fixed top-0 right-0 h-screen w-[85vw] max-w-[380px] bg-[#111111]/98 backdrop-blur-xl border-l border-[#C89B3C]/15 z-[70] flex flex-col transform transition-transform duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden overflow-hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Ambient glow top-right */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#C89B3C]/[0.03] rounded-full blur-[60px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#C89B3C]/[0.02] rounded-full blur-[50px] pointer-events-none" />

        {/* Close button — golden X only, no background circle, ultra-reliable */}
        <div className="relative z-10 flex justify-end p-4 pb-0">
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); closeDrawer(); }}
            onPointerDown={(e) => { e.stopPropagation(); e.preventDefault(); closeDrawer(); }}
            onContextMenu={(e) => e.preventDefault()}
            className="p-4 text-[#C89B3C] active:text-white -mr-1 -mt-1 cursor-pointer"
            aria-label="Close menu"
            style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
          >
            <X className="w-7 h-7" strokeWidth={2.5} />
          </button>
        </div>

        {/* ═══ CENTERED BRAND HERO ═══ */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center -mt-8 px-6">
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                key={animKey}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center"
              >
                {/* Animated Chakana brand mark */}
                <motion.div
                  initial={{ scale: 0.6, opacity: 0, rotate: -90 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-14 h-14 mb-4"
                >
                  <svg viewBox="0 0 56 56" fill="none" className="w-full h-full">
                    {/* Outer diamond */}
                    <motion.path
                      d="M28 2L52 28L28 54L4 28Z"
                      stroke="#C89B3C"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.7 }}
                      transition={{ duration: 0.5, delay: 0.08, ease: "easeInOut" }}
                    />
                    {/* Inner diamond */}
                    <motion.path
                      d="M28 12L42 28L28 44L14 28Z"
                      stroke="#C89B3C"
                      strokeWidth="0.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.4 }}
                      transition={{ duration: 0.4, delay: 0.12, ease: "easeInOut" }}
                    />
                    {/* Cross lines - vertical */}
                    <motion.line
                      x1="28" y1="2" x2="28" y2="54"
                      stroke="#C89B3C"
                      strokeWidth="0.6"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.3 }}
                      transition={{ duration: 0.35, delay: 0.1, ease: "easeInOut" }}
                    />
                    {/* Cross lines - horizontal */}
                    <motion.line
                      x1="4" y1="28" x2="52" y2="28"
                      stroke="#C89B3C"
                      strokeWidth="0.6"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.3 }}
                      transition={{ duration: 0.35, delay: 0.1, ease: "easeInOut" }}
                    />
                    {/* Center circle */}
                    <motion.circle
                      cx="28" cy="28" r="4"
                      stroke="#C89B3C"
                      strokeWidth="0.8"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.6 }}
                      transition={{ duration: 0.25, delay: 0.2, ease: "easeInOut" }}
                    />
                    {/* Center dot */}
                    <motion.circle
                      cx="28" cy="28" r="1.2"
                      fill="#C89B3C"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.15, delay: 0.3, ease: "easeOut" }}
                    />
                  </svg>
                  {/* Pulsing ring */}
                  <motion.div
                    className="absolute inset-[-4px] rounded-full border border-[#C89B3C]/20"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1.3, opacity: [0, 0.3, 0] }}
                    transition={{ duration: 2.5, delay: 0.4, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>

                {/* INTIQUILLA - letter reveal */}
                <div className="flex overflow-hidden">
                  {brandLetters.map((letter, i) => (
                    <motion.span
                      key={i}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      transition={{
                        duration: 0.28,
                        delay: 0.08 + i * 0.03,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="inline-block text-[1.65rem] font-black tracking-[0.18em] bg-gradient-to-b from-white via-[#C89B3C] to-[#C89B3C]/80 bg-clip-text text-transparent"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>

                {/* ADVENTURES - subtitle with expanding tracking */}
                <motion.div
                  initial={{ letterSpacing: "0.2em", opacity: 0, y: 8 }}
                  animate={{ letterSpacing: "0.45em", opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-1.5 text-[0.6rem] font-bold text-[#C89B3C]/60 uppercase"
                >
                  ADVENTURES
                </motion.div>

                {/* Gold divider line - expands from center */}
                <div className="relative mt-4 flex justify-center">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 48 }}
                    transition={{ duration: 0.3, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="h-[1px] bg-gradient-to-r from-transparent via-[#C89B3C]/60 to-transparent"
                  />
                </div>

                {/* Tagline */}
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: 0.4, ease: "easeOut" }}
                  className="mt-3 text-[10px] text-gray-500 tracking-wider text-center"
                >
                  {lang === "es" ? "Huaraz, Peru" : "Huaraz, Peru"}
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ═══ DRAWER LINKS ═══ */}
        <div className="relative z-10 px-5 pb-2">
          <nav className="space-y-1">
            {drawerLinks.map((item, idx) => (
              <motion.div
                key={item.href}
                initial={{ x: 40, opacity: 0 }}
                animate={isOpen ? { x: 0, opacity: 1 } : { x: 40, opacity: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.2 + idx * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={item.href}
                  onClick={closeDrawer}
                  className="group flex items-center justify-between px-3 py-3 text-[15px] font-medium text-gray-300 hover:text-white rounded-xl transition-all duration-200 border border-transparent hover:bg-white/[0.03] hover:border-[#C89B3C]/10"
                  style={{ touchAction: 'manipulation' }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[#C89B3C]/50 group-hover:text-[#C89B3C] transition-colors">
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-700 group-hover:text-[#C89B3C] group-hover:translate-x-0.5 transition-all" />
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>

        {/* ═══ DRAWER FOOTER ═══ */}
        <div className="relative z-10 p-5 pt-4 space-y-3 border-t border-white/[0.04]">
          {/* Language toggle - compact pill */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isOpen ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
            className="flex items-center justify-between px-1"
          >
            <span className="text-[10px] text-gray-600 tracking-wider uppercase font-medium">{t("nav.idioma")}</span>
            <button
              onClick={toggleLang}
              className="relative flex bg-white/[0.04] p-[3px] rounded-full border border-white/[0.08] transition-all hover:border-[#C89B3C]/20"
            >
              <motion.div
                className="absolute top-[3px] bottom-[3px] w-[calc(50%-3px)] bg-[#C89B3C] rounded-full shadow-lg shadow-[#C89B3C]/20"
                animate={{ left: lang === "es" ? "3px" : "calc(50%)" }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
              <span className={`relative z-10 px-3 py-1.5 text-[11px] font-bold transition-colors duration-200 ${lang === "es" ? "text-[#111111]" : "text-gray-500"}`}>
                ES
              </span>
              <span className={`relative z-10 px-3 py-1.5 text-[11px] font-bold transition-colors duration-200 ${lang === "en" ? "text-[#111111]" : "text-gray-500"}`}>
                EN
              </span>
            </button>
          </motion.div>

          {/* WhatsApp CTA */}
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={isOpen ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.35, ease: "easeOut" }}
            onClick={handleBookingFromDrawer}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-gradient-to-r from-[#C89B3C] to-amber-500 text-[#111111] py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-[#C89B3C]/15 flex items-center justify-center gap-2"
            style={{ touchAction: 'manipulation' }}
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{t("nav.whatsapp")}</span>
          </motion.button>
        </div>
      </div>
    </>
  );
}

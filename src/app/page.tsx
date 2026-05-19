"use client";

import React, { useState, useEffect, type ChangeEvent } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Mountain,
  CalendarDays,
  Users,
  Search,
  Clock,
  ArrowRight,
  CheckCircle,
  Sparkles,
  MapPin,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useBooking } from "@/lib/booking-context";
import { useI18n } from "@/lib/i18n-context";
import { TOURS } from "@/lib/tours-data";

const HERO_IMAGES = [
  { image: "/images/hero-slide-nightcamp.webp", imageMobile: "/images/hero-slide-nightcamp-sm.webp", imageFallback: "/images/hero-slide-nightcamp.png" },
  { image: "/images/hero-slide-chakana.webp", imageMobile: "/images/hero-slide-chakana-sm.webp", imageFallback: "/images/hero-slide-chakana.png" },
  { image: "/images/hero-slide-mountainlake.webp", imageMobile: "/images/hero-slide-mountainlake-sm.webp", imageFallback: "/images/hero-slide-mountainlake.png" },
];

function InteractiveTipsModule() {
  const { t } = useI18n();
  const [activeItem, setActiveItem] = useState(0);
  const adviceData = [
    { title: t("tips.acclimation.title"), desc: t("tips.acclimation.desc") },
    { title: t("tips.safety.title"), desc: t("tips.safety.desc") },
    { title: t("tips.nature.title"), desc: t("tips.nature.desc") },
  ];

  return (
    <div className="w-full mx-auto px-2 sm:px-4 md:px-0">
      <div className="space-y-0">
        {adviceData.map((item, idx) => (
          <div key={idx} className="border-b border-white/[0.08]">
            <button
              onClick={() => setActiveItem(activeItem === idx ? -1 : idx)}
              className="w-full flex justify-between items-center text-left py-4 sm:py-5 text-white hover:text-[#C89B3C] transition-colors focus:outline-none group"
            >
              <span className="font-bold text-sm md:text-base uppercase tracking-wide pr-4">{item.title}</span>
              <motion.span
                animate={{ rotate: activeItem === idx ? 45 : 0 }}
                transition={{ duration: 0.25 }}
                className="text-[#C89B3C] text-lg sm:text-xl font-light shrink-0 ml-2"
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {activeItem === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-400 text-xs sm:text-sm pb-5 leading-[1.8] font-light max-w-3xl">{item.desc}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  const { bookingOpen, setBookingOpen, selectedTour, setSelectedTour, travelDate, setTravelDate, travelers, setTravelers } = useBooking();
  const { t, lang } = useI18n();
  const [activeSlide, setActiveSlide] = useState(0);
  const [localTour, setLocalTour] = useState("");
  const [localDate, setLocalDate] = useState("");
  const [localTravelers, setLocalTravelers] = useState(1);
  const dateInputRef = React.useRef<HTMLInputElement>(null);
  const bookingWidgetRef = React.useRef<HTMLDivElement>(null);

  /* Re-derived data from current lang */
  const heroSlides = [
    { ...HERO_IMAGES[0], title: t("hero.slide1.title"), subtitle: t("hero.slide1.subtitle") },
    { ...HERO_IMAGES[1], title: t("hero.slide2.title"), subtitle: t("hero.slide2.subtitle") },
    { ...HERO_IMAGES[2], title: t("hero.slide3.title"), subtitle: t("hero.slide3.subtitle") },
  ];

  const testimonials = [
    { text: t("testimonials.1.text"), author: t("testimonials.1.author"), geo: t("testimonials.1.geo") },
    { text: t("testimonials.2.text"), author: t("testimonials.2.author"), geo: t("testimonials.2.geo") },
    { text: t("testimonials.3.text"), author: t("testimonials.3.author"), geo: t("testimonials.3.geo") },
  ];

  const destinos = [
    { name: "Cordillera Blanca", desc: t("destinos.blanca"), image: "/images/hero-1.webp", href: "/tours/santa-cruz" },
    { name: "Laguna 69", desc: t("destinos.laguna"), image: "/images/tour-laguna69.webp", href: "/tours/laguna-69" },
    { name: "Cordillera Huayhuash", desc: t("destinos.huayhuash"), image: "/images/hero-3.webp", href: "/tours/cordillera-huayhuash" },
    { name: "Chavin de Huantar", desc: t("destinos.chavin"), image: "/images/tour-chavin.webp", href: "/tours/tour-astronomico" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToBooking = () => {
    bookingWidgetRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => {
      dateInputRef.current?.showPicker?.() ?? dateInputRef.current?.focus();
    }, 600);
  };

  const handleSearchAdventure = () => {
    if (localTour && localDate) {
      setSelectedTour(localTour);
      setTravelDate(localDate);
      setTravelers(localTravelers);
      setBookingOpen(true);
    } else if (!localTour) {
      // No tour selected — scroll to widget and open date picker
      bookingWidgetRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => {
        dateInputRef.current?.showPicker?.() ?? dateInputRef.current?.focus();
      }, 600);
    } else {
      // Tour selected but no date — open date picker
      dateInputRef.current?.showPicker?.() ?? dateInputRef.current?.focus();
    }
  };

  return (
    <>
      {/* ═══ HERO SLIDER ═══ */}
      <section className="relative w-full h-[calc(100vh-3.5rem)] md:h-[calc(100vh-3.5rem)] min-h-[480px] max-h-[950px] overflow-hidden -mt-12 md:-mt-14 pt-12 md:pt-14">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeSlide === index ? "opacity-100 z-[2]" : "opacity-0 z-[1]"
            }`}
          >
            <picture>
              <source media="(max-width: 767px)" srcSet={slide.imageMobile} type="image/webp" />
              <source srcSet={slide.image} type="image/webp" />
              <img
                src={slide.imageFallback}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                draggable={false}
              />
            </picture>
          </div>
        ))}
        <div className="vignette-overlay absolute inset-0 z-[3]" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center [&>*]:translate-y-[-5%] md:[&>*]:translate-y-[-8%]">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C89B3C]/10 border border-[#C89B3C]/30 mb-6">
              <Sparkles className="w-4 h-4 text-[#C89B3C]" />
              <span className="text-xs sm:text-sm tracking-widest text-[#C89B3C] font-medium uppercase">{t("hero.badge")}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider leading-[1.1] text-white text-shadow-gold">
              {heroSlides[activeSlide].title}
            </h1>
            <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed tracking-wide">
              {heroSlides[activeSlide].subtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#booking"
                onClick={(e) => { e.preventDefault(); handleScrollToBooking(); }}
                className="group flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#C89B3C] text-[#111111] font-bold text-sm tracking-wide hover:bg-yellow-500 transition-all duration-300 hover:scale-105"
              >
                {t("hero.explore")}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/nosotros"
                className="flex items-center gap-2 px-8 py-3.5 rounded-lg border border-white/30 text-white text-sm tracking-wide hover:border-[#C89B3C] hover:text-[#C89B3C] transition-all duration-300"
              >
                {t("hero.more")}
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`transition-all duration-500 rounded-full ${
                activeSlide === index ? "w-8 h-2 bg-[#C89B3C]" : "w-2 h-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ═══ BOOKING WIDGET ═══ */}
      <section id="booking" ref={bookingWidgetRef} className="relative z-30 -mt-14 sm:-mt-16 px-3 sm:px-4">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl bg-[#1C1C1C]/90 backdrop-blur-md border border-[#C89B3C]/20 p-3 sm:p-5 md:p-6 shadow-2xl shadow-black/40">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 items-end">
              {/* Experience — full width on mobile */}
              <div className="col-span-2 sm:col-span-1 lg:col-span-1 flex flex-col gap-1">
                <label className="text-[10px] sm:text-xs font-medium tracking-wider text-[#C89B3C]/80 uppercase">{t("booking.experience")}</label>
                <div className="relative">
                  <select
                    value={localTour}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => setLocalTour(e.target.value)}
                    className="w-full appearance-none bg-[#171717] border border-[#C89B3C]/20 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C89B3C]/60 transition-colors cursor-pointer truncate pr-8"
                  >
                    <option value="">{t("booking.select")}</option>
                    {TOURS.map((tour) => (
                      <option key={tour.id} value={tour.id}>{tour.name} (S/ {tour.price})</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C89B3C]/60 pointer-events-none" />
                </div>
              </div>
              {/* Date */}
              <div className="col-span-1 flex flex-col gap-1">
                <label className="text-[10px] sm:text-xs font-medium tracking-wider text-[#C89B3C]/80 uppercase">{t("booking.date")}</label>
                <div className="relative">
                  <CalendarDays className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C89B3C]/60 pointer-events-none" />
                  <input
                    ref={dateInputRef}
                    type="date"
                    value={localDate}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setLocalDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full bg-[#171717] border border-[#C89B3C]/20 rounded-lg pl-8 sm:pl-10 pr-2 sm:pr-4 py-2.5 sm:py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C89B3C]/60 transition-colors [color-scheme:dark]"
                  />
                </div>
              </div>
              {/* Travelers */}
              <div className="col-span-1 flex flex-col gap-1">
                <label className="text-[10px] sm:text-xs font-medium tracking-wider text-[#C89B3C]/80 uppercase">{t("booking.travelers")}</label>
                <div className="relative">
                  <Users className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C89B3C]/60 pointer-events-none" />
                  <select
                    value={localTravelers}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => setLocalTravelers(parseInt(e.target.value, 10))}
                    className="w-full appearance-none bg-[#171717] border border-[#C89B3C]/20 rounded-lg pl-8 sm:pl-10 pr-7 sm:pr-4 py-2.5 sm:py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C89B3C]/60 transition-colors cursor-pointer"
                  >
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? t("booking.person") : t("booking.people")}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C89B3C]/60 pointer-events-none" />
                </div>
              </div>
              {/* Search button — full width on mobile, spans on sm */}
              <button
                onClick={handleSearchAdventure}
                className="col-span-2 sm:col-span-2 lg:col-span-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-lg bg-[#C89B3C] text-[#111111] font-bold text-xs sm:text-sm tracking-wider hover:bg-yellow-500 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#C89B3C]/20 whitespace-nowrap"
              >
                <Search className="w-4 h-4" />
                {t("booking.search")}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ DESTINOS ═══ */}
      <section id="destinos" className="py-20 md:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-xs tracking-[0.3em] text-[#C89B3C] uppercase font-medium mb-3">{t("destinos.badge")}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-white">{t("destinos.title")}</h2>
            <p className="mt-4 text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              {t("destinos.desc")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinos.map((dest) => (
              <Link key={dest.name} href={dest.href} className="group relative rounded-2xl overflow-hidden h-72 sm:h-80 cursor-pointer">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${dest.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-lg font-bold tracking-wide text-white">{dest.name}</h3>
                  <p className="mt-1 text-sm text-white/70 leading-relaxed line-clamp-2">{dest.desc}</p>
                  <div className="mt-3 flex items-center gap-1 text-[#C89B3C] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {t("destinos.details")} <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TOURS ═══ */}
      <section id="tours" className="py-20 md:py-28 px-4 bg-[#171717]/30 relative overflow-hidden">
        {/* Top gradient fade — blends from base bg (#111111) into section tint */}
        <div className="absolute top-0 inset-x-0 h-5 bg-gradient-to-b from-[#111111] to-transparent pointer-events-none" />
        {/* Bottom gradient fade — blends from section tint back to base bg */}
        <div className="absolute bottom-0 inset-x-0 h-5 bg-gradient-to-b from-transparent to-[#111111] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-xs tracking-[0.3em] text-[#C89B3C] uppercase font-medium mb-3">{t("tours.badge")}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-white">{t("tours.title")}</h2>
            <p className="mt-4 text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              {t("tours.desc")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {TOURS.map((tour) => (
              <div key={tour.id} className="group rounded-2xl overflow-hidden bg-[#1C1C1C] border border-[#C89B3C]/20 hover:border-[#C89B3C]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#C89B3C]/5">
                <Link href={`/tours/${tour.slug}`}>
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${tour.image})` }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#111111]/70 backdrop-blur-sm text-xs font-medium text-[#C89B3C] border border-[#C89B3C]/20">
                        <Clock className="w-3 h-3" />{tour.duration}
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#111111]/70 backdrop-blur-sm text-xs font-medium text-white/80 border border-white/10">
                        <Mountain className="w-3 h-3" />{tour.difficulty}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className="text-2xl sm:text-3xl font-bold text-[#C89B3C]">S/ {tour.price}</span>
                    </div>
                  </div>
                </Link>
                <div className="p-5 sm:p-6">
                  <Link href={`/tours/${tour.slug}`}>
                    <h3 className="text-lg sm:text-xl font-bold tracking-wide text-white hover:text-[#C89B3C] transition-colors">{tour.name}</h3>
                  </Link>
                  <div className="flex items-center gap-1 mt-2">
                    <MapPin className="w-3.5 h-3.5 text-[#C89B3C]/60" />
                    <span className="text-xs text-white/50">{t("tours.altitude")} {tour.altitude}</span>
                  </div>
                  <p className="mt-3 text-sm text-white/60 leading-relaxed line-clamp-2">{tour.description}</p>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {tour.highlights.slice(0, 4).map((h, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-white/50">
                        <CheckCircle className="w-3.5 h-3.5 text-[#C89B3C]/60 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-3">
                    <Link href={`/tours/${tour.slug}`} className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#C89B3C]/10 border border-[#C89B3C]/30 text-[#C89B3C] text-sm font-medium tracking-wide hover:bg-[#C89B3C]/20 hover:border-[#C89B3C]/50 transition-all duration-300">
                      {t("tours.details")} <ArrowRight className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={() => {
                        setSelectedTour(tour.id);
                        setBookingOpen(true);
                      }}
                      className="px-4 py-3 rounded-lg bg-[#C89B3C] text-[#111111] text-sm font-bold tracking-wide hover:bg-yellow-500 transition-all duration-300"
                    >
                      {t("tours.book")}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ IMMERSIVE TESTIMONIAL STRIP ═══ */}
      <section className="py-20 md:py-28 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="text-[#C89B3C] text-[10px] tracking-widest uppercase font-bold block mb-3">{t("testimonials.badge")}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase text-white tracking-tight">{t("testimonials.title")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="pl-6 pr-4 py-6 flex flex-col justify-between relative rounded-2xl border border-white/[0.06] bg-white/[0.02]"
              >
                {/* elegant left accent border */}
                <div className="absolute left-0 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#C89B3C] via-[#C89B3C]/40 to-transparent rounded-full" />
                <div>
                  <div className="flex text-[#C89B3C] gap-0.5 mb-4 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>&#9733;</span>
                    ))}
                  </div>
                  <p className="text-gray-300 italic text-sm md:text-[15px] leading-[1.8] font-light">&ldquo;{item.text}&rdquo;</p>
                </div>
                <div className="mt-6 pl-1">
                  <div className="w-6 h-px bg-[#C89B3C]/30 mb-3" />
                  <h4 className="text-white font-bold text-sm tracking-wide">{item.author}</h4>
                  <span className="text-gray-500 text-xs mt-0.5 block">{item.geo}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INTERACTIVE TIPS MODULE ═══ */}
      <section id="tips" className="py-20 md:py-28 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#C89B3C] text-[10px] tracking-widest uppercase font-bold block mb-3">{t("tips.badge")}</span>
            <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight">{t("tips.title")}</h2>
          </div>
          <InteractiveTipsModule />
        </div>
      </section>

      {/* ═══ CINEMATIC CTA ═══ */}
      <section className="py-24 px-4 relative flex justify-center items-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.008 }}
          className="relative w-full max-w-3xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 md:p-14 text-center shadow-2xl z-10 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1C1C1C]/20 via-transparent to-[#C89B3C]/5 pointer-events-none" />
          <div className="relative z-10">
            <span className="text-[#C89B3C] text-lg block mb-4">&#10022;</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white uppercase tracking-tight mb-4">{t("cta.title")}</h2>
            <p className="text-gray-300 text-xs md:text-sm max-w-md mx-auto mb-8 font-light leading-relaxed">
              {t("cta.desc")}
            </p>
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => setBookingOpen(true)}
              className="bg-gradient-to-r from-[#C89B3C] to-amber-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] text-[#111111] font-black py-4 px-10 rounded-xl text-xs uppercase tracking-widest transition-shadow"
            >
              {t("cta.button")}
            </motion.button>
          </div>
        </motion.div>
      </section>
    </>
  );
}

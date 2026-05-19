"use client";

import { useState, useEffect, type ChangeEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Mountain,
  MapPin,
  CalendarDays,
  Users,
  CheckCircle,
  XCircle,
  MessageCircle,
  Navigation,
  Star,
  ChevronRight,
  Backpack,
} from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { getTourBySlug, localizeTour, TOURS } from "@/lib/tours-data";
import { ImageLightbox, useLightbox } from "@/components/image-lightbox";

/* ─── animation presets ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeRight = {
  hidden: { opacity: 0, x: -24 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function TourPage() {
  const params = useParams();
  const slug = params.slug as string;
  const rawTour = getTourBySlug(slug);
  const { t, lang } = useI18n();
  const lt = rawTour ? localizeTour(rawTour, lang) : null;

  const [travelDate, setTravelDate] = useState("");
  const [travelers, setTravelers] = useState(1);
  const lightbox = useLightbox();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  /* ─── not found ─── */
  if (!rawTour || !lt) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">
            {t("tour.notFound")}
          </h1>
          <p className="text-white/60 mb-8">{t("tour.notFoundDesc")}</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#C89B3C] text-[#111111] font-bold text-sm hover:bg-yellow-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> {t("tour.back")}
          </Link>
        </div>
      </div>
    );
  }

  const totalPrice = lt.price * travelers;

  const relatedTours = TOURS.filter((r) => r.slug !== lt.slug)
    .slice(0, 2)
    .map((r) => localizeTour(r, lang));

  const handleConfirmWhatsApp = () => {
    if (!travelDate) return;
    const raw = t("tour.whatsappMsg");
    const message = raw
      .replace("{tour}", lt.name)
      .replace("{date}", travelDate)
      .replace("{travelers}", String(travelers))
      .replace("{total}", String(totalPrice));
    window.open(
      `https://wa.me/51943606789?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener"
    );
  };

  return (
    <div>
      {/* ═══════════════════════════════════════════
          1 · FULL-BLEED HERO
         ═══════════════════════════════════════════ */}
      <section className="relative w-full min-h-[65vh] overflow-hidden -mt-12 md:-mt-14 pt-12 md:pt-14">
        {/* hero image — clickable to lightbox */}
        <div
          className="absolute inset-0 cursor-zoom-in"
          onClick={() => lightbox.open([lt.image, ...lt.gallery], 0, lt.name)}
          style={{ touchAction: "manipulation" }}
        >
          <Image
            src={lt.image}
            alt={lt.name}
            fill
            className="object-cover object-center scale-105"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-[#111111]/30" />

        <div className="relative z-10 flex flex-col items-center justify-end h-full min-h-[65vh] pb-10 sm:pb-14 px-4 text-center">
          {/* back link */}
          <Link
            href="/"
            className="absolute top-20 md:top-24 left-4 sm:left-8 z-20 inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-[#C89B3C] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t("tour.back")}</span>
          </Link>

          {/* tags */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap justify-center gap-2 mb-5"
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#111111]/50 backdrop-blur-sm text-xs font-medium text-[#C89B3C] border border-[#C89B3C]/20">
              <Clock className="w-3.5 h-3.5" />
              {lt.duration}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#111111]/50 backdrop-blur-sm text-xs font-medium text-white/80 border border-white/10">
              <Mountain className="w-3.5 h-3.5" />
              {lt.difficulty}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#111111]/50 backdrop-blur-sm text-xs font-medium text-white/80 border border-white/10">
              <MapPin className="w-3.5 h-3.5" />
              {lt.maxAltitude}
            </span>
          </motion.div>

          {/* title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-white leading-tight max-w-5xl"
          >
            {lt.name}
          </motion.h1>

          {/* price */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-5 flex items-baseline gap-2"
          >
            <span className="text-sm text-white/50 uppercase tracking-wider">
              {t("tour.from")}
            </span>
            <span className="text-3xl sm:text-4xl font-bold text-[#C89B3C]">
              S/ {lt.price}
            </span>
            <span className="text-sm text-white/50">
              {t("tour.perPerson")}
            </span>
          </motion.div>

          {/* quick info row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-1 text-xs text-white/50"
          >
            <span className="flex items-center gap-1.5">
              <Navigation className="w-3.5 h-3.5 text-[#C89B3C]/60" />
              {lt.startLocation}
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-[#C89B3C]" />
              <Star className="w-3.5 h-3.5 text-[#C89B3C]" />
              <Star className="w-3.5 h-3.5 text-[#C89B3C]" />
              <Star className="w-3.5 h-3.5 text-[#C89B3C]" />
              <Star className="w-3.5 h-3.5 text-[#C89B3C]" />
            </span>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2 · DESCRIPTION
         ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            variants={fadeUp}
            className="text-center mb-10"
          >
            <span className="inline-block text-[10px] tracking-[0.3em] text-[#C89B3C] uppercase font-bold mb-3">
              {t("tour.description")}
            </span>
            <div className="w-16 h-px bg-[#C89B3C]/40 mx-auto" />
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            custom={1}
            variants={fadeUp}
            className="text-base md:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto text-center"
          >
            {lt.longDescription}
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3 · HORIZONTAL GALLERY STRIP
         ═══════════════════════════════════════════ */}
      {lt.gallery.length > 0 && (
        <section className="py-8 md:py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={0}
              variants={fadeUp}
              className="mb-6"
            >
              <span className="inline-block text-[10px] tracking-[0.3em] text-[#C89B3C] uppercase font-bold">
                {t("tour.gallery")}
              </span>
            </motion.div>

            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none masking-gradient">
              {lt.gallery.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative min-w-[75vw] sm:min-w-[340px] md:min-w-[420px] h-64 sm:h-80 md:h-96 snap-center shrink-0 rounded-2xl overflow-hidden border border-white/[0.06] flex-shrink-0 cursor-zoom-in"
                  onClick={() => lightbox.open(lt.gallery, i, lt.name)}
                >
                  <Image
                    src={img}
                    alt={`${lt.name} gallery ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 420px, 75vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  {/* zoom icon hint */}
                  <div className="absolute bottom-3 right-3 p-2 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white/60">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" /></svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ LIGHTBOX ═══ */}
      <ImageLightbox
        images={lightbox.images}
        alt={lightbox.alt}
        initialIndex={lightbox.initialIndex}
        isOpen={lightbox.isOpen}
        onClose={lightbox.close}
      />

      {/* ═══════════════════════════════════════════
          4 · HIGHLIGHTS MARQUEE
         ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            custom={0}
            variants={fadeUp}
            className="text-center mb-10"
          >
            <span className="inline-block text-[10px] tracking-[0.3em] text-[#C89B3C] uppercase font-bold mb-3">
              {t("tour.highlights")}
            </span>
            <div className="w-16 h-px bg-[#C89B3C]/40 mx-auto" />
          </motion.div>

          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-none masking-gradient">
            {lt.highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="min-w-[260px] sm:min-w-[300px] snap-start shrink-0 border-l-2 border-[#C89B3C]/30 pl-5 py-1"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C89B3C] mt-0.5 shrink-0" />
                  <span className="text-sm md:text-base text-white/80 leading-relaxed">
                    {h}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5 · ITINERARY TIMELINE
         ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 bg-[#171717]/20 relative overflow-hidden">
        {/* Top gradient fade */}
        <div className="absolute top-0 inset-x-0 h-5 bg-gradient-to-b from-[#111111] to-transparent pointer-events-none" />
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 inset-x-0 h-5 bg-gradient-to-b from-transparent to-[#111111] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            custom={0}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="inline-block text-[10px] tracking-[0.3em] text-[#C89B3C] uppercase font-bold mb-3">
              {t("tour.itinerary")}
            </span>
            <div className="w-16 h-px bg-[#C89B3C]/40 mx-auto" />
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {lt.itinerary.map((day, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={idx}
                variants={fadeRight}
                className="relative flex gap-5 sm:gap-8"
              >
                {/* timeline line + circle */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#C89B3C] flex items-center justify-center text-[#C89B3C] font-bold text-sm sm:text-base shrink-0 bg-[#111111]">
                    {idx + 1}
                  </div>
                  {idx < lt.itinerary.length - 1 && (
                    <div className="w-px flex-1 bg-[#C89B3C]/20 mt-2" />
                  )}
                </div>

                {/* content */}
                <div className="pb-10">
                  <span className="text-xs text-[#C89B3C] font-semibold uppercase tracking-widest">
                    {day.day}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white mt-1.5 tracking-wide">
                    {day.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/55 leading-relaxed">
                    {day.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6 · INCLUSIONS / EXCLUSIONS / WHAT TO BRING
         ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
            {/* Includes */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={0}
              variants={fadeUp}
            >
              <h3 className="text-sm font-bold text-[#C89B3C] uppercase tracking-widest mb-5 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                {t("tour.includes")}
              </h3>
              <ul className="space-y-3">
                {lt.inclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-white/65 leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-[#C89B3C] mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Excludes */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={1}
              variants={fadeUp}
            >
              <h3 className="text-sm font-bold text-red-400/80 uppercase tracking-widest mb-5 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                {t("tour.excludes")}
              </h3>
              <ul className="space-y-3">
                {lt.exclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-white/65 leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-red-400/50 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* What to bring */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={2}
              variants={fadeUp}
            >
              <h3 className="text-sm font-bold text-[#C89B3C] uppercase tracking-widest mb-5 flex items-center gap-2">
                <Backpack className="w-5 h-5" />
                {t("tour.whatToBring")}
              </h3>
              <ul className="space-y-3">
                {lt.whatToBring.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-white/65 leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-[#C89B3C] mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          7 · BOOKING SECTION
         ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl overflow-hidden"
          >
            {/* glass-morphism background */}
            <div className="absolute inset-0 bg-[#1C1C1C]/60 backdrop-blur-xl border border-white/[0.06]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1C1C1C]/40 via-transparent to-[#C89B3C]/[0.03]" />

            <div className="relative z-10 p-6 sm:p-10 md:p-14">
              {/* header */}
              <div className="text-center mb-10">
                <span className="inline-block text-[10px] tracking-[0.3em] text-[#C89B3C] uppercase font-bold mb-3">
                  {t("tour.bookNow")}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                  {lt.name}
                </h2>
                <div className="mt-3 flex items-center justify-center gap-6 text-sm text-white/50">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#C89B3C]/60" />
                    {lt.durationDays}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Mountain className="w-4 h-4 text-[#C89B3C]/60" />
                    {t("tour.difficulty")}: {lt.difficulty}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#C89B3C]/60" />
                    {t("tour.maxAlt")}: {lt.maxAltitude}
                  </span>
                </div>
              </div>

              {/* form */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
                {/* date */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium tracking-wider text-[#C89B3C]/80 uppercase">
                    {t("tour.date")}
                  </label>
                  <div className="relative">
                    <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C89B3C]/50 pointer-events-none" />
                    <input
                      type="date"
                      value={travelDate}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setTravelDate(e.target.value)
                      }
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl pl-10 pr-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#C89B3C]/50 transition-colors [color-scheme:dark] backdrop-blur-sm"
                    />
                  </div>
                </div>

                {/* travelers */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium tracking-wider text-[#C89B3C]/80 uppercase">
                    {t("tour.travelers")}
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C89B3C]/50 pointer-events-none" />
                    <select
                      value={travelers}
                      onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                        setTravelers(parseInt(e.target.value, 10))
                      }
                      className="w-full appearance-none bg-white/[0.04] border border-white/[0.08] rounded-xl pl-10 pr-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#C89B3C]/50 transition-colors cursor-pointer backdrop-blur-sm"
                    >
                      {Array.from({ length: 15 }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n} className="bg-[#1C1C1C] text-white">
                          {n} {n === 1 ? t("tour.person") : t("tour.persons")}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* price display */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium tracking-wider text-[#C89B3C]/80 uppercase">
                    {t("tour.total")}
                  </label>
                  <div className="flex items-end gap-1 h-[52px]">
                    <span className="text-sm text-white/50 self-end mb-3">S/</span>
                    <span className="text-3xl font-bold text-[#C89B3C] leading-none">
                      {totalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* CTA button */}
                <div className="flex flex-col gap-1.5 justify-end">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleConfirmWhatsApp}
                    disabled={!travelDate}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#C89B3C] text-[#111111] font-bold text-sm tracking-wider hover:bg-yellow-500 transition-all duration-300 shadow-lg shadow-[#C89B3C]/15 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {t("tour.confirmWA")}
                  </motion.button>
                </div>
              </div>

              {!travelDate && (
                <p className="mt-4 text-center text-xs text-white/30">
                  {t("tour.selectDate")}
                </p>
              )}

              {/* per-person breakdown */}
              <div className="mt-8 text-center text-sm text-white/40">
                {t("tour.from")} <span className="text-[#C89B3C]/80 font-semibold">S/ {lt.price}</span> {t("tour.perPerson")} &middot; {travelers} {travelers === 1 ? t("tour.person") : t("tour.persons")}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          8 · RELATED TOURS
         ═══════════════════════════════════════════ */}
      {relatedTours.length > 0 && (
        <section className="py-16 md:py-24 px-4 bg-[#171717]/20 relative overflow-hidden">
          {/* Top gradient fade */}
          <div className="absolute top-0 inset-x-0 h-5 bg-gradient-to-b from-[#111111] to-transparent pointer-events-none" />
          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 inset-x-0 h-5 bg-gradient-to-b from-transparent to-[#111111] pointer-events-none" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={0}
              variants={fadeUp}
              className="text-center mb-10"
            >
              <span className="inline-block text-[10px] tracking-[0.3em] text-[#C89B3C] uppercase font-bold mb-3">
                {t("tour.youMayLike")}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                {t("tour.otherTours")}
              </h2>
              <div className="w-16 h-px bg-[#C89B3C]/40 mx-auto mt-4" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {relatedTours.map((rt, i) => (
                <motion.div
                  key={rt.slug}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  custom={i}
                  variants={fadeUp}
                >
                  <Link
                    href={`/tours/${rt.slug}`}
                    className="group relative block rounded-2xl overflow-hidden h-56 sm:h-64"
                  >
                    <Image
                      src={rt.image}
                      alt={rt.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(min-width: 640px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span className="text-xs text-[#C89B3C]/90 font-medium">
                        {rt.duration} &middot; {rt.difficulty}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white mt-1 tracking-wide leading-snug line-clamp-2">
                        {rt.name}
                      </h3>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-xl font-bold text-[#C89B3C]">
                          S/ {rt.price}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-[#C89B3C] font-medium group-hover:gap-2 transition-all">
                          {t("tour.viewDetails")}
                          <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

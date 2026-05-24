"use client";

import React, { useState, type ChangeEvent } from "react";
import { X, CalendarDays, Users, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n-context";
import { TOURS } from "@/lib/tours-data";
import { useBooking } from "@/lib/booking-context";

export function WhatsAppWidget() {
  const { t, lang } = useI18n();
  const { drawerOpen } = useBooking();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [travelers, setTravelers] = useState(1);

  const currentTour = TOURS.find((tour) => tour.id === selectedTour);
  const totalPrice = currentTour ? currentTour.price * travelers : 0;

  const handleReservar = () => {
    if (!selectedTour) return;
    const raw = t("widget.whatsappMsg");
    const message = raw
      .replace("{tour}", currentTour.name)
      .replace("{date}", travelDate || (lang === "es" ? "Por confirmar" : "To be confirmed"))
      .replace("{travelers}", String(travelers))
      .replace("{total}", String(totalPrice));
    window.open(
      `https://wa.me/51943606789?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener"
    );
  };

  return (
    <>
      {/* Floating FAB button — official WhatsApp icon, hidden when mobile drawer is open */}
      <div className={`fixed bottom-5 right-5 z-[90] md:bottom-8 md:right-8 transition-opacity duration-200 ${drawerOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <motion.button
          whileTap={{ scale: 0.92 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => setIsOpen(true)}
          className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_4px_15px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_22px_rgba(37,211,102,0.5)] transition-all duration-300 flex items-center justify-center group"
          aria-label="Abrir WhatsApp"
          style={{ touchAction: "manipulation" }}
        >
          {/* ping pulse — subtle attention-grabbing ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366]/25 animate-ping" />
          {/* Official WhatsApp SVG icon */}
          <svg
            className="w-7 h-7 md:w-8 md:h-8 relative z-10 fill-current group-hover:scale-105 transition-transform duration-200"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </motion.button>
      </div>

      {/* Widget Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[95]"
              onClick={() => setIsOpen(false)}
            />

            {/* panel — slides up from bottom on mobile, centers on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 80, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed bottom-0 right-0 md:bottom-auto md:top-1/2 md:right-8 md:-translate-y-1/2 z-[100] w-full md:w-[380px] md:max-w-[90vw]"
            >
              <div className="bg-[#111111] border border-[#C89B3C]/20 rounded-t-2xl md:rounded-2xl shadow-2xl overflow-hidden max-h-[85vh] overflow-y-auto">
                {/* Header */}
                <div className="relative bg-gradient-to-r from-[#25D366]/20 to-[#25D366]/5 p-5 pb-4 border-b border-white/[0.06]">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    onTouchStart={(e) => { e.preventDefault(); setIsOpen(false); }}
                    className="absolute top-3 right-3 p-2 text-[#C89B3C] active:text-white"
                    aria-label="Close"
                    style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
                  >
                    <X className="w-5 h-5" strokeWidth={2.5} />
                  </button>

                  {/* Agent avatar */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-full bg-[#25D366]/20 border border-[#25D366]/30 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-[#25D366] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white tracking-wide">{lang === "es" ? "Intiquilla Adventures" : "Intiquilla Adventures"}</h3>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                        <span className="text-[11px] text-white/50">{lang === "es" ? "En linea — Responde rapido" : "Online — Replies quickly"}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[13px] text-white/70 leading-relaxed">
                    {lang === "es"
                      ? "Hola! 🏔️ Selecciona tu aventura y te contactamos por WhatsApp con toda la información."
                      : "Hello! 🏔️ Select your adventure and we'll reach out on WhatsApp with all the details."}
                  </p>
                </div>

                {/* Form */}
                <div className="p-5 space-y-4">
                  {/* Experience select */}
                  <div>
                    <label className="block text-[10px] font-bold tracking-widest text-[#C89B3C] uppercase mb-1.5">
                      {lang === "es" ? "Selecciona Experiencia" : "Select Experience"}
                    </label>
                    <div className="relative">
                      <select
                        value={selectedTour}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedTour(e.target.value)}
                        className="w-full appearance-none bg-[#171717] border border-[#C89B3C]/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C89B3C]/60 transition-colors cursor-pointer"
                      >
                        <option value="">{lang === "es" ? "Seleccionar..." : "Select..."}</option>
                        {TOURS.map((tour) => (
                          <option key={tour.id} value={tour.id}>{tour.name} — S/ {tour.price}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C89B3C]/60 pointer-events-none" />
                    </div>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-[10px] font-bold tracking-widest text-[#C89B3C] uppercase mb-1.5">
                      {lang === "es" ? "Fecha de Inicio" : "Start Date"}
                    </label>
                    <div className="relative">
                      <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C89B3C]/50 pointer-events-none" />
                      <input
                        type="date"
                        value={travelDate}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setTravelDate(e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full bg-[#171717] border border-[#C89B3C]/20 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#C89B3C]/60 transition-colors [color-scheme:dark]"
                      />
                    </div>
                  </div>

                  {/* Travelers */}
                  <div>
                    <label className="block text-[10px] font-bold tracking-widest text-[#C89B3C] uppercase mb-1.5">
                      {lang === "es" ? "Aventureros" : "Adventurers"}
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C89B3C]/50 pointer-events-none" />
                      <select
                        value={travelers}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => setTravelers(parseInt(e.target.value, 10))}
                        className="w-full appearance-none bg-[#171717] border border-[#C89B3C]/20 rounded-xl pl-10 pr-10 py-3 text-sm text-white focus:outline-none focus:border-[#C89B3C]/60 transition-colors cursor-pointer"
                      >
                        {Array.from({ length: 15 }, (_, i) => i + 1).map((n) => (
                          <option key={n} value={n}>{n} {n === 1 ? (lang === "es" ? "persona" : "person") : (lang === "es" ? "personas" : "people")}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C89B3C]/60 pointer-events-none" />
                    </div>
                  </div>

                  {/* Price summary */}
                  {selectedTour && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 rounded-xl bg-[#C89B3C]/5 border border-[#C89B3C]/15"
                    >
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-white/50">{lang === "es" ? "Total Estimado" : "Estimated Total"}</span>
                        <span className="text-xl font-bold text-[#C89B3C]">S/ {totalPrice.toLocaleString()}</span>
                      </div>
                    </motion.div>
                  )}

                  {/* CTA button */}
                  <button
                    onClick={handleReservar}
                    disabled={!selectedTour}
                    className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm tracking-wider transition-all duration-200 shadow-lg shadow-[#25D366]/20 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-[#25D366]"
                    style={{ touchAction: "manipulation" }}
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    {lang === "es" ? "Buscar Aventura" : "Search Adventure"}
                  </button>

                  <p className="text-[10px] text-white/25 text-center leading-relaxed">
                    {lang === "es"
                      ? "Al presionar, seras redirigido a WhatsApp para coordinar tu reserva."
                      : "By pressing, you'll be redirected to WhatsApp to coordinate your booking."}
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import React, { useState, type ChangeEvent } from "react";
import { X, MessageCircle, Search, CalendarDays, Users, ChevronDown } from "lucide-react";
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
      {/* Floating FAB button — hidden when mobile drawer is open */}
      <div className={`fixed bottom-5 right-5 z-[90] md:bottom-8 md:right-8 transition-opacity duration-200 ${drawerOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-200 flex items-center justify-center"
          aria-label="Abrir WhatsApp"
          style={{ touchAction: "manipulation" }}
        >
          <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
          {/* ping pulse */}
          <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping" />
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
              <div className="bg-[#0B1311] border border-[#D4AF37]/20 rounded-t-2xl md:rounded-2xl shadow-2xl overflow-hidden max-h-[85vh] overflow-y-auto">
                {/* Header */}
                <div className="relative bg-gradient-to-r from-[#25D366]/20 to-[#25D366]/5 p-5 pb-4 border-b border-white/[0.06]">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    onTouchStart={(e) => { e.preventDefault(); setIsOpen(false); }}
                    className="absolute top-3 right-3 p-2 text-[#D4AF37] active:text-white"
                    aria-label="Close"
                    style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
                  >
                    <X className="w-5 h-5" strokeWidth={2.5} />
                  </button>

                  {/* Agent avatar */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-full bg-[#25D366]/20 border border-[#25D366]/30 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 text-[#25D366]" />
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
                      ? "Hola! 🏔️ Selecciona tu aventura y te contactamos por WhatsApp con toda la informacion."
                      : "Hello! 🏔️ Select your adventure and we'll reach out on WhatsApp with all the details."}
                  </p>
                </div>

                {/* Form */}
                <div className="p-5 space-y-4">
                  {/* Experience select */}
                  <div>
                    <label className="block text-[10px] font-bold tracking-widest text-[#D4AF37] uppercase mb-1.5">
                      {lang === "es" ? "Selecciona Experiencia" : "Select Experience"}
                    </label>
                    <div className="relative">
                      <select
                        value={selectedTour}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedTour(e.target.value)}
                        className="w-full appearance-none bg-[#132720] border border-[#D4AF37]/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]/60 transition-colors cursor-pointer"
                      >
                        <option value="">{lang === "es" ? "Seleccionar..." : "Select..."}</option>
                        {TOURS.map((tour) => (
                          <option key={tour.id} value={tour.id}>{tour.name} — S/ {tour.price}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]/60 pointer-events-none" />
                    </div>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-[10px] font-bold tracking-widest text-[#D4AF37] uppercase mb-1.5">
                      {lang === "es" ? "Fecha de Inicio" : "Start Date"}
                    </label>
                    <div className="relative">
                      <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]/50 pointer-events-none" />
                      <input
                        type="date"
                        value={travelDate}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setTravelDate(e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full bg-[#132720] border border-[#D4AF37]/20 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]/60 transition-colors [color-scheme:dark]"
                      />
                    </div>
                  </div>

                  {/* Travelers */}
                  <div>
                    <label className="block text-[10px] font-bold tracking-widest text-[#D4AF37] uppercase mb-1.5">
                      {lang === "es" ? "Aventureros" : "Adventurers"}
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]/50 pointer-events-none" />
                      <select
                        value={travelers}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => setTravelers(parseInt(e.target.value, 10))}
                        className="w-full appearance-none bg-[#132720] border border-[#D4AF37]/20 rounded-xl pl-10 pr-10 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]/60 transition-colors cursor-pointer"
                      >
                        {Array.from({ length: 15 }, (_, i) => i + 1).map((n) => (
                          <option key={n} value={n}>{n} {n === 1 ? (lang === "es" ? "persona" : "person") : (lang === "es" ? "personas" : "people")}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]/60 pointer-events-none" />
                    </div>
                  </div>

                  {/* Price summary */}
                  {selectedTour && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 rounded-xl bg-[#D4AF37]/5 border border-[#D4AF37]/15"
                    >
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-white/50">{lang === "es" ? "Total Estimado" : "Estimated Total"}</span>
                        <span className="text-xl font-bold text-[#D4AF37]">S/ {totalPrice.toLocaleString()}</span>
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
                    <Search className="w-4 h-4" />
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

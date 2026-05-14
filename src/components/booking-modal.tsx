"use client";

import { type ChangeEvent } from "react";
import { X, CalendarDays, Sparkles, MessageCircle } from "lucide-react";
import { useBooking } from "@/lib/booking-context";
import { useI18n } from "@/lib/i18n-context";
import { TOURS } from "@/lib/tours-data";

export function BookingModal() {
  const {
    bookingOpen,
    setBookingOpen,
    selectedTour,
    setSelectedTour,
    travelDate,
    setTravelDate,
    travelers,
    setTravelers,
  } = useBooking();
  const { t } = useI18n();

  if (!bookingOpen) return null;

  const currentTour = TOURS.find((t) => t.id === selectedTour);
  const totalPrice = currentTour ? currentTour.price * travelers : 0;

  const handleConfirmWhatsApp = () => {
    if (currentTour && travelDate && travelers > 0) {
      const raw = t("modal.whatsappMsg");
      const message = raw
        .replace("{tour}", currentTour.name)
        .replace("{date}", travelDate)
        .replace("{travelers}", String(travelers))
        .replace("{total}", String(totalPrice));
      const encoded = encodeURIComponent(message);
      window.open(`https://wa.me/51999999999?text=${encoded}`, "_blank", "noopener");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setBookingOpen(false)} />

      <div className="relative w-full max-w-lg rounded-2xl bg-[#0B1311] border border-[#D4AF37]/50 shadow-2xl shadow-[#D4AF37]/10 overflow-hidden max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 z-10 bg-[#0B1311] p-6 pb-4 border-b border-[#D4AF37]/15">
          <button
            onClick={() => setBookingOpen(false)}
            className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 mb-3">
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            <span className="text-[10px] tracking-widest text-[#D4AF37] font-semibold uppercase">{t("modal.badge")}</span>
          </div>
          <h3 className="text-xl font-bold tracking-wide text-white">{t("modal.title")}</h3>
          <p className="mt-1 text-sm text-white/50">{t("modal.subtitle")}</p>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-medium tracking-wider text-[#D4AF37]/80 uppercase mb-1.5">{t("modal.experience")}</label>
            {currentTour ? (
              <select
                value={selectedTour}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedTour(e.target.value)}
                className="w-full appearance-none bg-[#132720] border border-[#D4AF37]/20 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]/60 transition-colors cursor-pointer"
              >
                {TOURS.map((tour) => (
                  <option key={tour.id} value={tour.id}>{tour.name} (S/ {tour.price})</option>
                ))}
              </select>
            ) : (
              <div className="w-full bg-[#132720] border border-[#D4AF37]/20 rounded-lg px-4 py-3 text-sm text-white">{t("modal.none")}</div>
            )}
          </div>

          <div>
            <label className="block text-xs font-medium tracking-wider text-[#D4AF37]/80 uppercase mb-1.5">{t("modal.date")}</label>
            <div className="relative">
              <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]/60 pointer-events-none" />
              <input
                type="date"
                value={travelDate}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setTravelDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="w-full bg-[#132720] border border-[#D4AF37]/20 rounded-lg pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]/60 transition-colors [color-scheme:dark]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium tracking-wider text-[#D4AF37]/80 uppercase mb-1.5">{t("modal.travelers")}</label>
            <div className="flex flex-wrap items-center gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <button
                  key={n}
                  onClick={() => setTravelers(n)}
                  className={`w-9 h-9 rounded-lg text-sm font-medium transition-all duration-200 ${
                    travelers === n
                      ? "bg-[#D4AF37] text-[#0B1311] shadow-lg shadow-[#D4AF37]/30"
                      : "bg-[#132720] border border-[#D4AF37]/15 text-white/60 hover:border-[#D4AF37]/40 hover:text-white"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-2 p-4 rounded-xl bg-[#D4AF37]/5 border border-[#D4AF37]/15">
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/60">{t("modal.perPerson")}</span>
              <span className="text-white font-medium">S/ {currentTour ? currentTour.price : 0}</span>
            </div>
            <div className="flex items-center justify-between text-sm mt-2">
              <span className="text-white/60">{t("modal.travelersCount")}</span>
              <span className="text-white font-medium">{travelers} {t("modal.personShort")}</span>
            </div>
            <div className="w-full h-px bg-[#D4AF37]/15 my-3" />
            <div className="flex items-center justify-between">
              <span className="text-base font-bold text-[#D4AF37]">{t("modal.total")}</span>
              <span className="text-xl font-bold text-[#D4AF37]">S/ {totalPrice.toLocaleString()}</span>
            </div>
          </div>

          <button
            onClick={handleConfirmWhatsApp}
            disabled={!currentTour || !travelDate}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#D4AF37] text-[#0B1311] font-bold text-sm tracking-wider hover:bg-yellow-500 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-[#D4AF37]/20 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <MessageCircle className="w-5 h-5" />
            {t("modal.confirm")}
          </button>

          <p className="text-[11px] text-white/30 text-center leading-relaxed">
            {t("modal.disclaimer")}
          </p>
        </div>
      </div>
    </div>
  );
}

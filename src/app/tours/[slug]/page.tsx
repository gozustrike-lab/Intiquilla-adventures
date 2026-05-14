"use client";

import { useState, useEffect, type ChangeEvent } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
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
  Phone,
} from "lucide-react";
import { getTourBySlug, TOURS } from "@/lib/tours-data";

export default function TourPage() {
  const params = useParams();
  const slug = params.slug as string;
  const tour = getTourBySlug(slug);

  const [travelDate, setTravelDate] = useState("");
  const [travelers, setTravelers] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Tour no encontrado</h1>
          <p className="text-white/60 mb-8">El tour que buscas no existe o ha sido removido.</p>
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#D4AF37] text-[#0B1311] font-bold text-sm">
            <ArrowLeft className="w-4 h-4" /> Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  const totalPrice = tour.price * travelers;

  const handleConfirmWhatsApp = () => {
    if (travelDate && travelers > 0) {
      const message =
        `Hola Intiquilla Adventures! Deseo confirmar mi estadía y aventura.\n\n` +
        `• *Tour:* ${tour.name}\n` +
        `• *Fecha:* ${travelDate}\n` +
        `• *Viajeros:* ${travelers} persona(s)\n` +
        `• *Total Estimado:* S/ ${totalPrice}\n\n` +
        `Solicito disponibilidad para proceder con la reserva directa.`;
      window.open(`https://wa.me/51999999999?text=${encodeURIComponent(message)}`, "_blank", "noopener");
    }
  };

  const relatedTours = TOURS.filter((t) => t.slug !== tour.slug).slice(0, 2);

  return (
    <div>
      <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-hidden -mt-16 md:-mt-20 pt-16 md:pt-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${tour.image})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1311] via-[#0B1311]/50 to-[#0B1311]/30" />
        <div className="relative z-10 flex flex-col items-center justify-end h-full pb-10 px-4 text-center">
          <Link href="/" className="flex items-center gap-1 text-sm text-white/60 hover:text-[#D4AF37] transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Volver
          </Link>
          <div className="flex gap-2 mb-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#0B1311]/60 backdrop-blur-sm text-xs font-medium text-[#D4AF37] border border-[#D4AF37]/20">
              <Clock className="w-3 h-3" />{tour.duration}
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#0B1311]/60 backdrop-blur-sm text-xs font-medium text-white/80 border border-white/10">
              <Mountain className="w-3 h-3" />{tour.difficulty}
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#0B1311]/60 backdrop-blur-sm text-xs font-medium text-white/80 border border-white/10">
              <MapPin className="w-3 h-3" />{tour.altitude}
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-wide text-white leading-tight max-w-4xl">
            {tour.name}
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Descripcion del Tour</h2>
                <p className="text-base text-white/60 leading-relaxed">{tour.longDescription}</p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6">Galeria</h2>
                <div className="space-y-4">
                  <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 md:h-[400px]">
                    <div className="absolute inset-0 bg-cover bg-center transition-all duration-500" style={{ backgroundImage: `url(${tour.gallery[activeImage]})` }} />
                  </div>
                  <div className="flex gap-3">
                    {tour.gallery.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImage(i)}
                        className={`w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border-2 transition-all ${
                          activeImage === i ? "border-[#D4AF37] shadow-lg shadow-[#D4AF37]/20" : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                      >
                        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${img})` }} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6">Itinerario</h2>
                <div className="space-y-6">
                  {tour.itinerary.map((day, idx) => (
                    <div key={idx} className="flex gap-4 md:gap-6">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] font-bold text-sm shrink-0">
                          {idx + 1}
                        </div>
                        {idx < tour.itinerary.length - 1 && <div className="w-px flex-1 bg-[#D4AF37]/15 mt-2" />}
                      </div>
                      <div className="pb-6">
                        <span className="text-xs text-[#D4AF37] font-semibold uppercase tracking-wider">{day.day}</span>
                        <h3 className="text-base md:text-lg font-bold text-white mt-1">{day.title}</h3>
                        <p className="mt-2 text-sm text-white/50 leading-relaxed">{day.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-[#1A332B]/60 border border-[#D4AF37]/15">
                  <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" /> Que Incluye
                  </h3>
                  <ul className="space-y-2">
                    {tour.inclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-white/60">
                        <CheckCircle className="w-4 h-4 text-[#D4AF37]/60 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 rounded-2xl bg-[#1A332B]/60 border border-[#D4AF37]/15">
                  <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-400" /> No Incluye
                  </h3>
                  <ul className="space-y-2">
                    {tour.exclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-white/60">
                        <XCircle className="w-4 h-4 text-red-400/40 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <h3 className="text-base font-bold text-white mt-6 mb-3 flex items-center gap-2">
                    <Mountain className="w-5 h-5 text-[#D4AF37]" /> Que Llevar
                  </h3>
                  <ul className="space-y-2">
                    {tour.whatToBring.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-white/60">
                        <CheckCircle className="w-4 h-4 text-[#D4AF37]/60 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="p-6 rounded-2xl bg-[#1A332B] border border-[#D4AF37]/20 shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-xs text-white/40 uppercase tracking-wider">Desde</span>
                      <div className="text-3xl font-bold text-[#D4AF37]">S/ {tour.price}</div>
                      <span className="text-xs text-white/40">por persona</span>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < 5 ? "text-[#D4AF37] fill-[#D4AF37]" : "text-white/20"}`} />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <Clock className="w-4 h-4 text-[#D4AF37]/60" />
                      <span>{tour.durationDays}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <Mountain className="w-4 h-4 text-[#D4AF37]/60" />
                      <span>{tour.difficulty}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <MapPin className="w-4 h-4 text-[#D4AF37]/60" />
                      <span>Max: {tour.maxAltitude}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <Navigation className="w-4 h-4 text-[#D4AF37]/60" />
                      <span>{tour.startLocation}</span>
                    </div>
                  </div>

                  <div className="border-t border-[#D4AF37]/15 pt-4 space-y-4">
                    <div>
                      <label className="block text-xs font-medium tracking-wider text-[#D4AF37]/80 uppercase mb-1.5">Fecha de Viaje</label>
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
                      <label className="block text-xs font-medium tracking-wider text-[#D4AF37]/80 uppercase mb-1.5">Viajeros</label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]/60 pointer-events-none" />
                        <select
                          value={travelers}
                          onChange={(e: ChangeEvent<HTMLSelectElement>) => setTravelers(parseInt(e.target.value, 10))}
                          className="w-full appearance-none bg-[#132720] border border-[#D4AF37]/20 rounded-lg pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]/60 transition-colors cursor-pointer"
                        >
                          {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                            <option key={n} value={n}>{n} {n === 1 ? "persona" : "personas"}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#D4AF37]/5 border border-[#D4AF37]/15">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-white/60">Total Neto:</span>
                        <span className="text-xl font-bold text-[#D4AF37]">S/ {totalPrice.toLocaleString()}</span>
                      </div>
                    </div>

                    <button
                      onClick={handleConfirmWhatsApp}
                      disabled={!travelDate}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#D4AF37] text-[#0B1311] font-bold text-sm tracking-wider hover:bg-yellow-500 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-[#D4AF37]/20 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Confirmar en WhatsApp
                    </button>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#1A332B]/60 border border-[#D4AF37]/15">
                  <h3 className="text-base font-bold text-white mb-3">Destacados</h3>
                  <ul className="space-y-2">
                    {tour.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-white/50">
                        <CheckCircle className="w-4 h-4 text-[#D4AF37]/60 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-[#1A332B]/60 border border-[#D4AF37]/15">
                  <h3 className="text-base font-bold text-white mb-3">Coordenadas</h3>
                  <div className="flex items-start gap-2 text-sm text-white/50">
                    <Navigation className="w-4 h-4 text-[#D4AF37]/60 mt-0.5 shrink-0" />
                    <span>{tour.coordinates.name}</span>
                  </div>
                  <div className="mt-2 text-xs text-white/30 font-mono">
                    {tour.coordinates.lat}, {tour.coordinates.lng}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#132720]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-xs tracking-[0.3em] text-[#D4AF37] uppercase font-medium mb-3">Te puede interesar</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-white">Otros Tours</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedTours.map((rt) => (
              <Link key={rt.id} href={`/tours/${rt.slug}`} className="group flex gap-4 p-4 rounded-2xl bg-[#1A332B]/60 border border-[#D4AF37]/15 hover:border-[#D4AF37]/30 transition-all">
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-xl overflow-hidden shrink-0">
                  <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url(${rt.image})` }} />
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <span className="text-xs text-[#D4AF37] font-medium">{rt.duration} &middot; {rt.difficulty}</span>
                  <h3 className="text-base font-bold text-white mt-1 line-clamp-2">{rt.name}</h3>
                  <span className="text-lg font-bold text-[#D4AF37] mt-2">S/ {rt.price}</span>
                  <span className="flex items-center gap-1 text-xs text-[#D4AF37] mt-1">Ver detalles <ChevronRight className="w-3 h-3" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

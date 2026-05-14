"use client";

import { useState, useEffect, type ChangeEvent } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Star,
  Mountain,
  CalendarDays,
  Users,
  Search,
  Clock,
  Shield,
  Heart,
  Compass,
  ArrowRight,
  CheckCircle,
  Sparkles,
  MessageCircle,
  MapPin,
} from "lucide-react";
import { useBooking } from "@/lib/booking-context";
import { TOURS } from "@/lib/tours-data";

const HERO_SLIDES = [
  {
    image: "/images/hero-slide-nightcamp.png",
    title: "HUARAZ: LAS MONTANAS MAS ALTAS DEL PERU",
    subtitle:
      "Explora los glaciares milenarios de la Cordillera Blanca y vive aventuras que transforman tu forma de ver el mundo.",
  },
  {
    image: "/images/hero-slide-chakana.png",
    title: "LAGUNAS TURQUESAS EN EL CORAZON DE LOS ANDES",
    subtitle:
      "Desciende a lagunas de un azul imposible, alimentadas por nevados que desafian las nubes.",
  },
  {
    image: "/images/hero-slide-mountainlake.png",
    title: "CIRCUITO HUAYHUASH: LA AVENTURA DEFINITIVA",
    subtitle:
      "Diez dias de trekking a traves de la cordillera mas dramatica de Sudamerica.",
  },
];

const TIPS_DATA = [
  {
    icon: Mountain,
    title: "Aclimatacion",
    text: "Llega a Huaraz al menos 2 dias antes de tu trek para aclimarte a la altitud. Bebe mucha agua y evita comidas pesadas.",
  },
  {
    icon: Shield,
    title: "Seguridad Primero",
    text: "Todos nuestros tours incluyen guias certificados, botiquin de primeros auxilios y oxigeno medicinal para emergencias.",
  },
  {
    icon: Heart,
    title: "Respeta la Naturaleza",
    text: "Practica el turismo responsable. No dejes basura en los senderos y respeta a las comunidades locales.",
  },
  {
    icon: Compass,
    title: "Mejor Epoca",
    text: "La temporada ideal es de mayo a septiembre. Dias soleados y noches claras perfectas para la observacion astronomica.",
  },
];

export default function HomePage() {
  const { bookingOpen, setBookingOpen, selectedTour, setSelectedTour, travelDate, setTravelDate, travelers, setTravelers } = useBooking();
  const [activeSlide, setActiveSlide] = useState(0);
  const [localTour, setLocalTour] = useState("");
  const [localDate, setLocalDate] = useState("");
  const [localTravelers, setLocalTravelers] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleSearchAdventure = () => {
    if (localTour) {
      setSelectedTour(localTour);
      setTravelDate(localDate);
      setTravelers(localTravelers);
      setBookingOpen(true);
    }
  };

  return (
    <>
      <section className="relative w-full h-[calc(100vh-5rem)] md:h-[calc(100vh-5rem)] min-h-[500px] max-h-[950px] overflow-hidden -mt-16 md:-mt-20 pt-16 md:pt-20">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeSlide === index ? "opacity-100 z-[2]" : "opacity-0 z-[1]"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover scale-105"
              draggable={false}
            />
          </div>
        ))}
        <div className="vignette-overlay absolute inset-0 z-[3]" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-6">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs sm:text-sm tracking-widest text-[#D4AF37] font-medium uppercase">Turismo de Aventura en Huaraz</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider leading-[1.1] text-white text-shadow-gold">
              {HERO_SLIDES[activeSlide].title}
            </h1>
            <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed tracking-wide">
              {HERO_SLIDES[activeSlide].subtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#tours"
                className="group flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#D4AF37] text-[#0B1311] font-bold text-sm tracking-wide hover:bg-yellow-500 transition-all duration-300 hover:scale-105"
              >
                Explorar Tours
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/nosotros"
                className="flex items-center gap-2 px-8 py-3.5 rounded-lg border border-white/30 text-white text-sm tracking-wide hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
              >
                Conoce Mas
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-28 sm:bottom-32 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`transition-all duration-500 rounded-full ${
                activeSlide === index ? "w-8 h-2 bg-[#D4AF37]" : "w-2 h-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="relative z-30 -mt-14 sm:-mt-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl bg-[#1A332B]/90 backdrop-blur-md border border-[#D4AF37]/20 p-4 sm:p-6 shadow-2xl shadow-black/40">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-end">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium tracking-wider text-[#D4AF37]/80 uppercase">Selecciona Experiencia</label>
                <div className="relative">
                  <select
                    value={localTour}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => setLocalTour(e.target.value)}
                    className="w-full appearance-none bg-[#132720] border border-[#D4AF37]/20 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]/60 transition-colors cursor-pointer"
                  >
                    <option value="">Seleccionar...</option>
                    {TOURS.map((tour) => (
                      <option key={tour.id} value={tour.id}>{tour.name} (S/ {tour.price})</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]/60 pointer-events-none" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium tracking-wider text-[#D4AF37]/80 uppercase">Fecha de Inicio</label>
                <div className="relative">
                  <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]/60 pointer-events-none" />
                  <input
                    type="date"
                    value={localDate}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setLocalDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full bg-[#132720] border border-[#D4AF37]/20 rounded-lg pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]/60 transition-colors [color-scheme:dark]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium tracking-wider text-[#D4AF37]/80 uppercase">Aventureros</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]/60 pointer-events-none" />
                  <select
                    value={localTravelers}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => setLocalTravelers(parseInt(e.target.value, 10))}
                    className="w-full appearance-none bg-[#132720] border border-[#D4AF37]/20 rounded-lg pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]/60 transition-colors cursor-pointer"
                  >
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? "persona" : "personas"}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]/60 pointer-events-none" />
                </div>
              </div>
              <button
                onClick={handleSearchAdventure}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#D4AF37] text-[#0B1311] font-bold text-sm tracking-wider hover:bg-yellow-500 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#D4AF37]/20"
              >
                <Search className="w-4 h-4" />
                BUSCAR AVENTURA
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="destinos" className="py-20 md:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-xs tracking-[0.3em] text-[#D4AF37] uppercase font-medium mb-3">Destinos</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-white">Paraisos por Descubrir</h2>
            <p className="mt-4 text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Cada destino en los Andes de Ancash guarda una experiencia unica que conecta tu espiritu con la majestuosidad de la naturaleza.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Cordillera Blanca", desc: "El corazon nevado del Peru con mas de 30 picos por encima de los 6,000 metros.", image: "/images/hero-1.jpg", href: "/tours/santa-cruz" },
              { name: "Laguna 69", desc: "Joya turquesa a los pies del Chacraraju, una de las caminatas mas populares del Peru.", image: "/images/tour-laguna.jpg", href: "/tours/laguna-69" },
              { name: "Cordillera Huayhuash", desc: "Considerada la cordillera mas dramatica de Sudamerica, un circuito de nivel mundial.", image: "/images/hero-3.jpg", href: "/tours/cordillera-huayhuash" },
              { name: "Chavin de Huantar", desc: "Centro ceremonial de la cultura Chavin, Patrimonio Mundial de la Humanidad UNESCO.", image: "/images/tour-chavin.jpg", href: "/tours/tour-astronomico" },
            ].map((dest) => (
              <Link key={dest.name} href={dest.href} className="group relative rounded-2xl overflow-hidden h-72 sm:h-80 cursor-pointer">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${dest.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1311] via-[#0B1311]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-lg font-bold tracking-wide text-white">{dest.name}</h3>
                  <p className="mt-1 text-sm text-white/70 leading-relaxed line-clamp-2">{dest.desc}</p>
                  <div className="mt-3 flex items-center gap-1 text-[#D4AF37] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Ver Detalles <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="tours" className="py-20 md:py-28 px-4 bg-[#132720]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-xs tracking-[0.3em] text-[#D4AF37] uppercase font-medium mb-3">Nuestros Tours</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-white">Aventuras que Transforman</h2>
            <p className="mt-4 text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Cada expedicion esta disenada para ofrecerte una experiencia autentica con los mas altos estandares de seguridad y servicio.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {TOURS.map((tour) => (
              <div key={tour.id} className="group rounded-2xl overflow-hidden bg-[#1A332B] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#D4AF37]/5">
                <Link href={`/tours/${tour.slug}`}>
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${tour.image})` }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A332B] via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#0B1311]/70 backdrop-blur-sm text-xs font-medium text-[#D4AF37] border border-[#D4AF37]/20">
                        <Clock className="w-3 h-3" />{tour.duration}
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#0B1311]/70 backdrop-blur-sm text-xs font-medium text-white/80 border border-white/10">
                        <Mountain className="w-3 h-3" />{tour.difficulty}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className="text-2xl sm:text-3xl font-bold text-[#D4AF37]">S/ {tour.price}</span>
                    </div>
                  </div>
                </Link>
                <div className="p-5 sm:p-6">
                  <Link href={`/tours/${tour.slug}`}>
                    <h3 className="text-lg sm:text-xl font-bold tracking-wide text-white hover:text-[#D4AF37] transition-colors">{tour.name}</h3>
                  </Link>
                  <div className="flex items-center gap-1 mt-2">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]/60" />
                    <span className="text-xs text-white/50">Altitud maxima: {tour.altitude}</span>
                  </div>
                  <p className="mt-3 text-sm text-white/60 leading-relaxed line-clamp-2">{tour.description}</p>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {tour.highlights.slice(0, 4).map((h, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-white/50">
                        <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37]/60 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-3">
                    <Link href={`/tours/${tour.slug}`} className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-medium tracking-wide hover:bg-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300">
                      Ver Detalles <ArrowRight className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={() => {
                        setSelectedTour(tour.id);
                        setBookingOpen(true);
                      }}
                      className="px-4 py-3 rounded-lg bg-[#D4AF37] text-[#0B1311] text-sm font-bold tracking-wide hover:bg-yellow-500 transition-all duration-300"
                    >
                      Reservar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-fixed bg-cover bg-center opacity-[0.06] mix-blend-screen pointer-events-none" style={{ backgroundImage: "url(/images/fondo-chakana.jpg)" }} />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-xs tracking-[0.3em] text-[#D4AF37] uppercase font-medium mb-3">Testimonios</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-white">Lo que Dicen Nuestros Viajeros</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { name: "Maria Fernandez", country: "Argentina", tour: "Laguna 69", text: "Una experiencia increible. El equipo de Intiquilla hace que todo sea facil y seguro, incluso para principiantes. La laguna es simplemente magica." },
              { name: "Thomas Mueller", country: "Alemania", tour: "Circuito Huayhuash", text: "El mejor trekking de mi vida. Diez dias de paisajes que parecian de otro planeta. La logistica fue perfecta y el guide excepcional." },
              { name: "Carolina Vega", country: "Colombia", tour: "Santa Cruz", text: "Hice el tour de Santa Cruz con mi pareja y fue la mejor decision de nuestro viaje por Peru. Los campamentos, la comida y las vistas fueron de primera." },
            ].map((review) => (
              <div key={review.name} className="p-6 rounded-2xl bg-[#1A332B]/60 border border-[#D4AF37]/20 hover:border-[#D4AF37]/30 transition-all duration-300">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-sm text-white/70 leading-relaxed italic">&ldquo;{review.text}&rdquo;</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] font-bold text-sm">{review.name.charAt(0)}</div>
                  <div>
                    <span className="text-sm font-semibold text-white block">{review.name}</span>
                    <span className="text-xs text-white/40">{review.country} &middot; {review.tour}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tips" className="py-20 md:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-xs tracking-[0.3em] text-[#D4AF37] uppercase font-medium mb-3">Tips de Viaje</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-white">Preparate para tu Aventura</h2>
            <p className="mt-4 text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Recomendaciones esenciales para que tu expedicion por los Andes sea segura, comoda y verdaderamente inolvidable.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIPS_DATA.map((tip) => (
              <div key={tip.title} className="group p-6 rounded-2xl bg-[#1A332B]/50 border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-4 group-hover:bg-[#D4AF37]/20 transition-colors">
                  <tip.icon className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-base font-bold tracking-wide text-white">{tip.title}</h3>
                <p className="mt-2 text-sm text-white/50 leading-relaxed">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-[#1A332B] border border-[#D4AF37]/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-[#D4AF37]/5" />
            <div className="relative z-10">
              <Sparkles className="w-8 h-8 text-[#D4AF37] mx-auto mb-4" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-white">Tu Aventura en los Andes Comienza Aqui</h2>
              <p className="mt-4 text-base text-white/60 max-w-xl mx-auto leading-relaxed">
                Reserva directamente con nosotros y obtiene la mejor experiencia al mejor precio. Atencion personalizada y confirmacion inmediata por WhatsApp.
              </p>
              <button
                onClick={() => setBookingOpen(true)}
                className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#D4AF37] text-[#0B1311] font-bold text-sm tracking-wider hover:bg-yellow-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-[#D4AF37]/20"
              >
                <MessageCircle className="w-5 h-5" />
                Reservar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

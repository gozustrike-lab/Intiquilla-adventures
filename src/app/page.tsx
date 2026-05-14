"use client";

import { useState, useEffect, useCallback, useRef, type ChangeEvent } from "react";
import {
  Phone,
  Globe,
  ChevronDown,
  ChevronRight,
  Star,
  Mountain,
  CalendarDays,
  Users,
  Search,
  MapPin,
  Clock,
  Shield,
  Heart,
  Compass,
  Menu,
  X,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Instagram,
  Facebook,
  Mail,
  MessageCircle,
} from "lucide-react";

interface TourCatalogItem {
  id: string;
  name: string;
  shortName: string;
  duration: string;
  price: number;
  image: string;
  difficulty: string;
  altitude: string;
  description: string;
  highlights: string[];
}

const TOUR_CATALOG: TourCatalogItem[] = [
  {
    id: "laguna-69",
    name: "Laguna 69 - Trekking Full Day",
    shortName: "Laguna 69",
    duration: "1 Dia",
    price: 90,
    image: "/images/tour-laguna.jpg",
    difficulty: "Moderado",
    altitude: "4,600 m.s.n.m.",
    description:
      "Una de las caminatas mas impresionantes de la Cordillera Blanca. Atraviesa valles andinos rodeados de quenuales hasta llegar a la legendaria laguna esmeralda, alimentada por los glaciares del Chacraraju.",
    highlights: [
      "Laguna turquesa a 4,600 m",
      "Vistas del Chacraraju y Pisco",
      "Flora andina nativa",
      "Transporte incluido desde Huaraz",
    ],
  },
  {
    id: "santa-cruz",
    name: "Clasico Trek Santa Cruz - 4 Dias",
    shortName: "Santa Cruz",
    duration: "4 Dias",
    price: 550,
    image: "/images/tour-santacruz.jpg",
    difficulty: "Moderado-Alto",
    altitude: "4,750 m.s.n.m.",
    description:
      "El trekking clasico por excelencia de la Cordillera Blanca. Cruza el imponente paso de Puerta del Carmen y recorre valles de ensueno con vistas a los picos mas altos del Peru.",
    highlights: [
      "Paso Puerta del Carmen (4,750 m)",
      "Vistas del Huascaran y Alpamayo",
      "Lagunas Taullipampa y Arhuaycocha",
      "Campamentos equipados",
    ],
  },
  {
    id: "huayhuash",
    name: "Circuito Cordillera Huayhuash - 10 Dias",
    shortName: "Huayhuash",
    duration: "10 Dias",
    price: 1400,
    image: "/images/tour-huayhuash.jpg",
    difficulty: "Exigente",
    altitude: "5,100 m.s.n.m.",
    description:
      "Considerado uno de los circuitos de trekking mas espectaculares del mundo. Circunda la compacta y dramatica Cordillera Huayhuash pasando por pasos de altitud superiores a 5,000 metros.",
    highlights: [
      "10 dias de expedicion completa",
      "Cruce de 6 pasos mayores a 4,500 m",
      "Laguna de Jancarurish y Siula",
      "Arriero y cocinero profesional",
    ],
  },
  {
    id: "chavin",
    name: "Tour Astronomico & Mistico Chavin - 1 Noche",
    shortName: "Chavin Mistico",
    duration: "1 Noche",
    price: 120,
    image: "/images/tour-chavin.jpg",
    difficulty: "Facil",
    altitude: "3,175 m.s.n.m.",
    description:
      "Un viaje mistico al sitio arqueologico de Chavin de Huantar, centro ceremonial de la cultura Chavin. Incluye observacion astronomica con telescopio en una de las zonas con mejor cielo del Peru.",
    highlights: [
      "Observacion estelar profesional",
      "Visita guiada a Chavin de Huantar",
      "Cielo limpio sin contaminacion luminica",
      "Alojamiento y transporte incluidos",
    ],
  },
];

const HERO_SLIDES = [
  {
    image: "/images/hero-astronomico.jpg",
    title: "HUARAZ: LAS MONTANAS MAS ALTAS DEL PERU",
    subtitle:
      "Explora los glaciares milenarios de la Cordillera Blanca y vive aventuras que transforman tu forma de ver el mundo.",
  },
  {
    image: "/images/hero-2.jpg",
    title: "LAGUNAS TURQUESAS EN EL CORAZON DE LOS ANDES",
    subtitle:
      "Desciende a lagunas de un azul imposible, alimentadas por nevados que desafian las nubes.",
  },
  {
    image: "/images/hero-3.jpg",
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
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const [selectedTour, setSelectedTour] = useState<string>("");
  const [travelDate, setTravelDate] = useState<string>("");
  const [travelers, setTravelers] = useState<number>(1);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentTour = TOUR_CATALOG.find((t) => t.id === selectedTour);
  const totalPrice = currentTour ? currentTour.price * travelers : 0;

  const buildWhatsAppUrl = useCallback(
    (tourName: string, date: string, count: number, total: number) => {
      const message =
        `Hola Intiquilla Adventures! Deseo confirmar mi estadía y aventura.\n\n` +
        `• *Tour:* ${tourName}\n` +
        `• *Fecha:* ${date}\n` +
        `• *Viajeros:* ${count} persona(s)\n` +
        `• *Total Estimado:* S/ ${total}\n\n` +
        `Solicito disponibilidad para proceder con la reserva directa.`;
      const encoded = encodeURIComponent(message);
      window.open(`https://wa.me/51999999999?text=${encoded}`, "_blank", "noopener");
    },
    []
  );

  const handleSearchAdventure = () => {
    if (selectedTour) {
      setBookingOpen(true);
    }
  };

  const handleConfirmWhatsApp = () => {
    if (currentTour && travelDate && travelers > 0) {
      buildWhatsAppUrl(currentTour.name, travelDate, travelers, totalPrice);
    }
  };

  const handleQuickBooking = () => {
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#" className="flex items-center gap-2 group">
              <Mountain className="w-7 h-7 text-gold transition-transform group-hover:scale-110" />
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-wider text-white leading-tight">
                  INTIQUILLA
                </span>
                <span className="text-[10px] tracking-[0.3em] text-gold/80 font-medium uppercase leading-tight">
                  Adventures
                </span>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {[
                { label: "Destinos", href: "#destinos" },
                { label: "Tours", href: "#tours" },
                { label: "Sobre Nosotros", href: "#sobre-nosotros" },
                { label: "Tips de Viaje", href: "#tips" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm tracking-wide text-white/80 hover:text-gold transition-colors duration-300 rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}

              <div className="relative ml-2" ref={langRef}>
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-1.5 px-3 py-2 text-sm tracking-wide text-white/80 hover:text-gold transition-colors rounded-lg hover:bg-white/5"
                >
                  <Globe className="w-4 h-4" />
                  <span>ES</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`} />
                </button>
                {langOpen && (
                  <div className="absolute top-full right-0 mt-1 w-28 rounded-lg bg-secondary border border-gold-border shadow-xl py-1">
                    <button className="w-full px-4 py-2 text-left text-sm text-gold hover:bg-pine-dark transition-colors">
                      Espanol (ES)
                    </button>
                    <button className="w-full px-4 py-2 text-left text-sm text-white/70 hover:bg-pine-dark hover:text-white transition-colors">
                      English (EN)
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={handleQuickBooking}
                className="ml-3 flex items-center gap-2 px-4 py-2.5 rounded-lg bg-pine border border-gold/40 text-gold text-sm font-medium tracking-wide hover:border-gold hover:bg-pine-dark transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">Reservar por WhatsApp</span>
                <span className="lg:hidden">Reservar</span>
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white/80 hover:text-gold transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pb-4 pt-2 bg-background/98 backdrop-blur-md border-t border-gold/10">
            {[
              { label: "Destinos", href: "#destinos" },
              { label: "Tours", href: "#tours" },
              { label: "Sobre Nosotros", href: "#sobre-nosotros" },
              { label: "Tips de Viaje", href: "#tips" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-base tracking-wide text-white/80 hover:text-gold border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleQuickBooking();
              }}
              className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-pine border border-gold/40 text-gold font-medium"
            >
              <Phone className="w-4 h-4" />
              Reservar por WhatsApp
            </button>
          </div>
        </div>
      </nav>

      <section className="relative w-full h-screen min-h-[600px] max-h-[1000px] overflow-hidden">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              activeSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          </div>
        ))}

        <div className="vignette-overlay absolute inset-0 z-10" />

        <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 mb-6">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-xs sm:text-sm tracking-widest text-gold font-medium uppercase">
                Turismo de Aventura en Huaraz
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider leading-[1.1] text-white text-shadow-gold">
              {HERO_SLIDES[activeSlide].title}
            </h1>
            <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed tracking-wide">
              {HERO_SLIDES[activeSlide].subtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#tours"
                className="group flex items-center gap-2 px-8 py-3.5 rounded-lg bg-gold text-background font-bold text-sm tracking-wide hover:bg-yellow-500 transition-all duration-300 hover:scale-105"
              >
                Explorar Tours
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#sobre-nosotros"
                className="flex items-center gap-2 px-8 py-3.5 rounded-lg border border-white/30 text-white text-sm tracking-wide hover:border-gold hover:text-gold transition-all duration-300"
              >
                Conoce Mas
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-28 sm:bottom-32 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`transition-all duration-500 rounded-full ${
                activeSlide === index ? "w-8 h-2 bg-gold" : "w-2 h-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="relative z-30 -mt-14 sm:-mt-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl bg-secondary/90 backdrop-blur-md border border-gold-border p-4 sm:p-6 shadow-2xl shadow-black/40">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-end">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium tracking-wider text-gold/80 uppercase">
                  Selecciona Experiencia
                </label>
                <div className="relative">
                  <select
                    value={selectedTour}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedTour(e.target.value)}
                    className="w-full appearance-none bg-pine-dark border border-gold/20 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-gold/60 transition-colors cursor-pointer"
                  >
                    <option value="">Seleccionar...</option>
                    {TOUR_CATALOG.map((tour) => (
                      <option key={tour.id} value={tour.id}>
                        {tour.name} (S/ {tour.price})
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60 pointer-events-none" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium tracking-wider text-gold/80 uppercase">
                  Fecha de Inicio
                </label>
                <div className="relative">
                  <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60 pointer-events-none" />
                  <input
                    type="date"
                    value={travelDate}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setTravelDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full bg-pine-dark border border-gold/20 rounded-lg pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-gold/60 transition-colors [color-scheme:dark]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium tracking-wider text-gold/80 uppercase">
                  Aventureros
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60 pointer-events-none" />
                  <select
                    value={travelers}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => setTravelers(parseInt(e.target.value, 10))}
                    className="w-full appearance-none bg-pine-dark border border-gold/20 rounded-lg pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-gold/60 transition-colors cursor-pointer"
                  >
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "persona" : "personas"}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60 pointer-events-none" />
                </div>
              </div>

              <button
                onClick={handleSearchAdventure}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gold text-background font-bold text-sm tracking-wider hover:bg-yellow-500 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-gold/20"
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
            <span className="inline-block text-xs tracking-[0.3em] text-gold uppercase font-medium mb-3">
              Destinos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-white">
              Paraisos por Descubrir
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Cada destino en los Andes de Ancash guarda una experiencia unica que
              conecta tu espiritu con la majestuosidad de la naturaleza.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Cordillera Blanca",
                desc: "El corazon nevado del Peru con mas de 30 picos por encima de los 6,000 metros.",
                image: "/images/hero-1.jpg",
              },
              {
                name: "Laguna 69",
                desc: "Joya turquesa a los pies del Chacraraju, una de las caminatas mas populares del Peru.",
                image: "/images/tour-laguna.jpg",
              },
              {
                name: "Cordillera Huayhuash",
                desc: "Considerada la cordillera mas dramatica de Sudamerica, un circuito de nivel mundial.",
                image: "/images/hero-3.jpg",
              },
              {
                name: "Chavin de Huantar",
                desc: "Centro ceremonial de la cultura Chavin, Patrimonio Mundial de la Humanidad UNESCO.",
                image: "/images/tour-chavin.jpg",
              },
            ].map((dest, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden h-72 sm:h-80 cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${dest.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-lg font-bold tracking-wide text-white">{dest.name}</h3>
                  <p className="mt-1 text-sm text-white/70 leading-relaxed line-clamp-2">{dest.desc}</p>
                  <div className="mt-3 flex items-center gap-1 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explorar <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tours" className="py-20 md:py-28 px-4 bg-pine-dark/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-xs tracking-[0.3em] text-gold uppercase font-medium mb-3">
              Nuestros Tours
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-white">
              Aventuras que Transforman
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Cada expedicion esta disenada para ofrecerte una experiencia autentica
              con los mas altos estandares de seguridad y servicio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {TOUR_CATALOG.map((tour) => (
              <div
                key={tour.id}
                className="group rounded-2xl overflow-hidden bg-secondary border border-gold-border/30 hover:border-gold/50 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5"
              >
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${tour.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-background/70 backdrop-blur-sm text-xs font-medium text-gold border border-gold/20">
                      <Clock className="w-3 h-3" />
                      {tour.duration}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-background/70 backdrop-blur-sm text-xs font-medium text-white/80 border border-white/10">
                      <Mountain className="w-3 h-3" />
                      {tour.difficulty}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-2xl sm:text-3xl font-bold text-gold">S/ {tour.price}</span>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold tracking-wide text-white">{tour.name}</h3>
                  <div className="flex items-center gap-1 mt-2">
                    <MapPin className="w-3.5 h-3.5 text-gold/60" />
                    <span className="text-xs text-white/50">Altitud maxima: {tour.altitude}</span>
                  </div>
                  <p className="mt-3 text-sm text-white/60 leading-relaxed line-clamp-3">{tour.description}</p>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {tour.highlights.slice(0, 4).map((h, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-white/50">
                        <CheckCircle className="w-3.5 h-3.5 text-gold/60 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      setSelectedTour(tour.id);
                      setBookingOpen(true);
                    }}
                    className="mt-5 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gold/10 border border-gold/30 text-gold text-sm font-medium tracking-wide hover:bg-gold/20 hover:border-gold/50 transition-all duration-300"
                  >
                    Reservar Ahora
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="sobre-nosotros"
        className="relative py-20 md:py-28 px-4 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center opacity-[0.06] mix-blend-screen pointer-events-none"
          style={{ backgroundImage: "url(/images/fondo-chakana.jpg)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden h-72 sm:h-96">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url(/images/hero-1.jpg)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-4">
                  <div className="text-center px-4">
                    <span className="block text-3xl font-bold text-gold">10+</span>
                    <span className="text-xs text-white/60 uppercase tracking-wider">Anos</span>
                  </div>
                  <div className="w-px h-10 bg-gold/20" />
                  <div className="text-center px-4">
                    <span className="block text-3xl font-bold text-gold">5K+</span>
                    <span className="text-xs text-white/60 uppercase tracking-wider">Viajeros</span>
                  </div>
                  <div className="w-px h-10 bg-gold/20" />
                  <div className="text-center px-4">
                    <span className="block text-3xl font-bold text-gold">4.9</span>
                    <span className="text-xs text-white/60 uppercase tracking-wider">Rating</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="inline-block text-xs tracking-[0.3em] text-gold uppercase font-medium mb-3">
                Sobre Nosotros
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-white leading-tight">
                Mas que una Agencia de Viajes, somos tu Conexion con los Andes
              </h2>
              <p className="mt-5 text-base text-white/60 leading-relaxed">
                Intiquilla Adventures nacio de la pasion por las montanas de Huaraz
                y el deseo de compartir con el mundo la majestuosidad de la
                Cordillera Blanca y Huayhuash. Nuestro equipo de guias locales
                certificados ha recorrido cada sendero, cada laguna y cada paso de
                montana para ofrecerte experiencias seguras, autenticas e
                inolvidables.
              </p>
              <p className="mt-4 text-base text-white/60 leading-relaxed">
                Operamos directamente desde Huaraz, lo que nos permite ofrecer precios
                justos, conocimiento local profundo y un compromiso real con el
                desarrollo sostenible de las comunidades andinas. Cada tour es una
                oportunidad para conectar con la cultura, la naturaleza y contigo
                mismo.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: Shield,
                    label: "Guias Certificados",
                    text: "Profesionales con certificacion internacional en montanismo.",
                  },
                  {
                    icon: Heart,
                    label: "Turismo Responsable",
                    text: "Comprometidos con el medio ambiente y las comunidades.",
                  },
                  {
                    icon: Star,
                    label: "Excelencia Garantizada",
                    text: "Mas de 5,000 viajeros satisfechos nos respaldan.",
                  },
                  {
                    icon: MessageCircle,
                    label: "Atencion Directa",
                    text: "Comunicacion personalizada antes, durante y despues de tu viaje.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 border border-gold/10"
                  >
                    <item.icon className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <div>
                      <span className="text-sm font-semibold text-white block">{item.label}</span>
                      <span className="text-xs text-white/50 leading-relaxed">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative py-20 md:py-28 px-4 bg-pine-dark/30 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center opacity-[0.04] mix-blend-screen pointer-events-none"
          style={{ backgroundImage: "url(/images/fondo-chakana.jpg)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-xs tracking-[0.3em] text-gold uppercase font-medium mb-3">
              Testimonios
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-white">
              Lo que Dicen Nuestros Viajeros
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                name: "Maria Fernandez",
                country: "Argentina",
                tour: "Laguna 69",
                text: "Una experiencia increible. El equipo de Intiquilla hace que todo sea facil y seguro, incluso para principiantes. La laguna es simplemente magica.",
              },
              {
                name: "Thomas Mueller",
                country: "Alemania",
                tour: "Circuito Huayhuash",
                text: "El mejor trekking de mi vida. Diez dias de paisajes que parecian de otro planeta. La logistica fue perfecta y el guide excepcional.",
              },
              {
                name: "Carolina Vega",
                country: "Colombia",
                tour: "Santa Cruz",
                text: "Hice el tour de Santa Cruz con mi pareja y fue la mejor decision de nuestro viaje por Peru. Los campamentos, la comida y las vistas fueron de primera.",
              },
            ].map((review, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-secondary/60 border border-gold-border/20 hover:border-gold/30 transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-sm text-white/70 leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-white block">{review.name}</span>
                    <span className="text-xs text-white/40">
                      {review.country} &middot; {review.tour}
                    </span>
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
            <span className="inline-block text-xs tracking-[0.3em] text-gold uppercase font-medium mb-3">
              Tips de Viaje
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-white">
              Preparate para tu Aventura
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Recomendaciones esenciales para que tu expedicion por los Andes sea
              segura, comoda y verdaderamente inolvidable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIPS_DATA.map((tip, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-secondary/50 border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <tip.icon className="w-6 h-6 text-gold" />
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
          <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-secondary border border-gold-border/40 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/5" />
            <div className="relative z-10">
              <Sparkles className="w-8 h-8 text-gold mx-auto mb-4" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-white">
                Tu Aventura en los Andes Comienza Aqui
              </h2>
              <p className="mt-4 text-base text-white/60 max-w-xl mx-auto leading-relaxed">
                Reserva directamente con nosotros y obtiene la mejor experiencia al
                mejor precio. Atencion personalizada y confirmacion inmediata por
                WhatsApp.
              </p>
              <button
                onClick={handleQuickBooking}
                className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gold text-background font-bold text-sm tracking-wider hover:bg-yellow-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-gold/20"
              >
                <MessageCircle className="w-5 h-5" />
                Reservar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-auto border-t border-gold/10 bg-pine-dark/50">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Mountain className="w-6 h-6 text-gold" />
                <div className="flex flex-col">
                  <span className="text-base font-bold tracking-wider text-white leading-tight">
                    INTIQUILLA
                  </span>
                  <span className="text-[9px] tracking-[0.3em] text-gold/80 font-medium uppercase leading-tight">
                    Adventures
                  </span>
                </div>
              </div>
              <p className="text-sm text-white/40 leading-relaxed max-w-xs">
                Turismo de aventura responsable en la Cordillera Blanca y
                Huayhuash, Huaraz, Peru.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center text-gold/60 hover:text-gold hover:bg-gold/20 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center text-gold/60 hover:text-gold hover:bg-gold/20 transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center text-gold/60 hover:text-gold hover:bg-gold/20 transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-widest text-gold uppercase mb-4">Navegacion</h4>
              <ul className="space-y-2.5">
                {[
                  { label: "Destinos", href: "#destinos" },
                  { label: "Tours", href: "#tours" },
                  { label: "Sobre Nosotros", href: "#sobre-nosotros" },
                  { label: "Tips de Viaje", href: "#tips" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white/40 hover:text-gold transition-colors inline-flex items-center gap-1"
                    >
                      <ChevronRight className="w-3 h-3" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-widest text-gold uppercase mb-4">Tours Populares</h4>
              <ul className="space-y-2.5">
                {TOUR_CATALOG.map((tour) => (
                  <li key={tour.id}>
                    <button
                      onClick={() => {
                        setSelectedTour(tour.id);
                        setBookingOpen(true);
                      }}
                      className="text-sm text-white/40 hover:text-gold transition-colors inline-flex items-center gap-1"
                    >
                      <ChevronRight className="w-3 h-3" />
                      {tour.shortName}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-widest text-gold uppercase mb-4">Contacto</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gold/50 mt-0.5 shrink-0" />
                  <span className="text-sm text-white/40">Jr. Jose de la Riva Aguero 682, Huaraz, Peru</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-gold/50 mt-0.5 shrink-0" />
                  <span className="text-sm text-white/40">+51 999 999 999</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-gold/50 mt-0.5 shrink-0" />
                  <span className="text-sm text-white/40">info@intiquillaadventures.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gold/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-white/30">
              &copy; {new Date().getFullYear()} Intiquilla Adventures. Todos los derechos reservados.
            </p>
            <p className="text-xs text-white/20">
              Diseno y desarrollo web por Fastpagepro.
            </p>
          </div>
        </div>
      </footer>

      {bookingOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setBookingOpen(false)}
          />

          <div className="relative w-full max-w-lg rounded-2xl bg-background border border-gold/50 shadow-2xl shadow-gold/10 overflow-hidden">
            <div className="relative p-6 pb-4 border-b border-gold/15">
              <button
                onClick={() => setBookingOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 mb-3">
                <Sparkles className="w-3 h-3 text-gold" />
                <span className="text-[10px] tracking-widest text-gold font-semibold uppercase">
                  Reserva Rapida Directa
                </span>
              </div>
              <h3 className="text-xl font-bold tracking-wide text-white">Confirma tu Aventura</h3>
              <p className="mt-1 text-sm text-white/50">
                Completa los detalles para enviar tu solicitud de reserva.
              </p>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-medium tracking-wider text-gold/80 uppercase mb-1.5">
                  Experiencia Seleccionada
                </label>
                <div className="w-full bg-pine-dark border border-gold/20 rounded-lg px-4 py-3 text-sm text-white">
                  {currentTour ? currentTour.name : "No seleccionada"}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium tracking-wider text-gold/80 uppercase mb-1.5">
                  Fecha de Viaje
                </label>
                <div className="relative">
                  <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60 pointer-events-none" />
                  <input
                    type="date"
                    value={travelDate}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setTravelDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full bg-pine-dark border border-gold/20 rounded-lg pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-gold/60 transition-colors [color-scheme:dark]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium tracking-wider text-gold/80 uppercase mb-1.5">
                  Cantidad de Viajeros
                </label>
                <div className="flex flex-wrap items-center gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                    <button
                      key={n}
                      onClick={() => setTravelers(n)}
                      className={`w-9 h-9 rounded-lg text-sm font-medium transition-all duration-200 ${
                        travelers === n
                          ? "bg-gold text-background shadow-lg shadow-gold/30"
                          : "bg-pine-dark border border-gold/15 text-white/60 hover:border-gold/40 hover:text-white"
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-2 p-4 rounded-xl bg-gold/5 border border-gold/15">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60">Precio por persona</span>
                  <span className="text-white font-medium">S/ {currentTour ? currentTour.price : 0}</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-white/60">Viajeros</span>
                  <span className="text-white font-medium">{travelers} persona(s)</span>
                </div>
                <div className="w-full h-px bg-gold/15 my-3" />
                <div className="flex items-center justify-between">
                  <span className="text-base font-bold text-gold">Total Neto:</span>
                  <span className="text-xl font-bold text-gold">S/ {totalPrice.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={handleConfirmWhatsApp}
                disabled={!currentTour || !travelDate}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gold text-background font-bold text-sm tracking-wider hover:bg-yellow-500 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-gold/20 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <MessageCircle className="w-5 h-5" />
                Confirmar en WhatsApp
              </button>

              <p className="text-[11px] text-white/30 text-center leading-relaxed">
                Al confirmar, seras redirigido a WhatsApp para completar tu
                reserva. Un asesor te atendera personalmente.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

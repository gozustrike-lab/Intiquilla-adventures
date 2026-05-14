"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "es" | "en";

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  const t = (key: string): string => {
    const dict = lang === "es" ? es : en;
    return (dict as Record<string, string>)[key] ?? key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nContextType {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

/* ═══════════════════════════════════════════
   SPANISH (default)
   ═══════════════════════════════════════════ */
const es: Record<string, string> = {
  // Navbar
  "nav.destinos": "Destinos",
  "nav.tours": "Tours",
  "nav.sobre": "Sobre Nosotros",
  "nav.tips": "Tips de Viaje",
  "nav.whatsapp": "Reservar por WhatsApp",
  "nav.explorar": "Explorar",
  "nav.idioma": "Idioma del sitio",

  // Hero
  "hero.badge": "Turismo de Aventura en Huaraz",
  "hero.slide1.title": "HUARAZ: LAS MONTANAS MAS ALTAS DEL PERU",
  "hero.slide1.subtitle": "Explora los glaciares milenarios de la Cordillera Blanca y vive aventuras que transforman tu forma de ver el mundo.",
  "hero.slide2.title": "LAGUNAS TURQUESAS EN EL CORAZON DE LOS ANDES",
  "hero.slide2.subtitle": "Desciende a lagunas de un azul imposible, alimentadas por nevados que desafian las nubes.",
  "hero.slide3.title": "CIRCUITO HUAYHUASH: LA AVENTURA DEFINITIVA",
  "hero.slide3.subtitle": "Diez dias de trekking a traves de la cordillera mas dramatica de Sudamerica.",
  "hero.explore": "Explorar Tours",
  "hero.more": "Conoce Mas",

  // Booking Widget
  "booking.experience": "Selecciona Experiencia",
  "booking.select": "Seleccionar...",
  "booking.date": "Fecha de Inicio",
  "booking.travelers": "Aventureros",
  "booking.person": "persona",
  "booking.people": "personas",
  "booking.search": "BUSCAR AVENTURA",

  // Destinos
  "destinos.badge": "Destinos",
  "destinos.title": "Paraisos por Descubrir",
  "destinos.desc": "Cada destino en los Andes de Ancash guarda una experiencia unica que conecta tu espiritu con la majestuosidad de la naturaleza.",
  "destinos.blanca": "El corazon nevado del Peru con mas de 30 picos por encima de los 6,000 metros.",
  "destinos.laguna": "Joya turquesa a los pies del Chacraraju, una de las caminatas mas populares del Peru.",
  "destinos.huayhuash": "Considerada la cordillera mas dramatica de Sudamerica, un circuito de nivel mundial.",
  "destinos.chavin": "Centro ceremonial de la cultura Chavin, Patrimonio Mundial de la Humanidad UNESCO.",
  "destinos.details": "Ver Detalles",

  // Tours
  "tours.badge": "Nuestros Tours",
  "tours.title": "Aventuras que Transforman",
  "tours.desc": "Cada expedicion esta disenada para ofrecerte una experiencia autentica con los mas altos estandares de seguridad y servicio.",
  "tours.altitude": "Altitud maxima:",
  "tours.details": "Ver Detalles",
  "tours.book": "Reservar",

  // Testimonials
  "testimonials.badge": "Testimonios",
  "testimonials.title": "Lo que Dicen Nuestros Viajeros",
  "testimonials.1.text": "Una experiencia increible. El equipo de Intiquilla hace que todo sea facil y seguro, incluso para principiantes. La laguna es simplemente magica.",
  "testimonials.1.author": "Maria Fernandez",
  "testimonials.1.geo": "Argentina \u2022 Laguna 69",
  "testimonials.2.text": "El mejor trekking de mi vida. Diez dias de paisajes que parecian de otro planeta. La logistica fue perfecta y el guia excepcional.",
  "testimonials.2.author": "Thomas Mueller",
  "testimonials.2.geo": "Alemania \u2022 Cordillera Huayhuash",
  "testimonials.3.text": "Hice el tour de Santa Cruz con mi pareja y fue la mejor decision de nuestro viaje por Peru. Los campamentos, la comida y las vistas fueron de primera.",
  "testimonials.3.author": "Carolina Vega",
  "testimonials.3.geo": "Colombia \u2022 Santa Cruz",

  // Tips
  "tips.badge": "Tips de Viaje",
  "tips.title": "Preparate para tu Aventura",
  "tips.acclimation.title": "Aclimatacion",
  "tips.acclimation.desc": "Llega a Huaraz al menos 2 dias antes de tu trek para aclimatarte a la altitud. Bebe mucha agua y evita comidas pesadas durante los primeros dias.",
  "tips.safety.title": "Seguridad Primero",
  "tips.safety.desc": "Todos nuestros tours incluyen guias certificados, botiquin de primeros auxilios y oxigeno medicinal para emergencias en altitud.",
  "tips.nature.title": "Respecta la Naturaleza",
  "tips.nature.desc": "Practicamos turismo responsable. Todo residuo generado regresa con nosotros a la ciudad. No dejes rastro en los senderos.",
  "tips.season.title": "Mejor Epoca",
  "tips.season.desc": "La temporada ideal es de mayo a septiembre. Dias soleados y noches claras perfectas para la observacion astronomica y trekking.",

  // CTA
  "cta.title": "Tu Aventura en los Andes Comienza Aqui",
  "cta.desc": "Reserva directamente con nosotros y obtiene la mejor experiencia al mejor precio. Atencion personalizada y confirmacion inmediata por WhatsApp.",
  "cta.button": "Reservar por WhatsApp",

  // Booking Modal
  "modal.badge": "Reserva Rapida Directa",
  "modal.title": "Confirma tu Aventura",
  "modal.subtitle": "Completa los detalles para enviar tu solicitud de reserva.",
  "modal.experience": "Experiencia Seleccionada",
  "modal.none": "No seleccionada",
  "modal.date": "Fecha de Viaje",
  "modal.travelers": "Cantidad de Viajeros",
  "modal.perPerson": "Precio por persona",
  "modal.travelersCount": "Viajeros",
  "modal.personShort": "persona(s)",
  "modal.total": "Total Neto:",
  "modal.confirm": "Confirmar en WhatsApp",
  "modal.disclaimer": "Al confirmar, seras redirigido a WhatsApp para completar tu reserva. Un asesor te atendera personalmente.",
  "modal.whatsappMsg": "Hola Intiquilla Adventures! Deseo confirmar mi reserva.\n\n\u2022 *Tour:* {tour}\n\u2022 *Fecha:* {date}\n\u2022 *Viajeros:* {travelers} persona(s)\n\u2022 *Total Estimado:* S/ {total}\n\nSolicito disponibilidad para proceder con la reserva directa.",

  // Footer
  "footer.desc": "Turismo de aventura responsable en la Cordillera Blanca y Huayhuash, Huaraz, Peru.",
  "footer.nav": "Navegacion",
  "footer.popular": "Tours Populares",
  "footer.contact": "Contacto",
  "footer.rights": "Todos los derechos reservados.",
  "footer.credit": "Diseno y desarrollo web por Fastpagepro.",
};

/* ═══════════════════════════════════════════
   ENGLISH
   ═══════════════════════════════════════════ */
const en: Record<string, string> = {
  // Navbar
  "nav.destinos": "Destinations",
  "nav.tours": "Tours",
  "nav.sobre": "About Us",
  "nav.tips": "Travel Tips",
  "nav.whatsapp": "Book via WhatsApp",
  "nav.explorar": "Explore",
  "nav.idioma": "Site language",

  // Hero
  "hero.badge": "Adventure Tourism in Huaraz",
  "hero.slide1.title": "HUARAZ: THE HIGHEST MOUNTAINS IN PERU",
  "hero.slide1.subtitle": "Explore the millenary glaciers of the Cordillera Blanca and live adventures that transform the way you see the world.",
  "hero.slide2.title": "TURQUOISE LAGOONS IN THE HEART OF THE ANDES",
  "hero.slide2.subtitle": "Descend to lagoons of an impossible blue, fed by snow-capped peaks that defy the clouds.",
  "hero.slide3.title": "HUAYHUASH CIRCUIT: THE DEFINITIVE ADVENTURE",
  "hero.slide3.subtitle": "Ten days of trekking through the most dramatic mountain range in South America.",
  "hero.explore": "Explore Tours",
  "hero.more": "Learn More",

  // Booking Widget
  "booking.experience": "Select Experience",
  "booking.select": "Select...",
  "booking.date": "Start Date",
  "booking.travelers": "Adventurers",
  "booking.person": "person",
  "booking.people": "people",
  "booking.search": "SEARCH ADVENTURE",

  // Destinos
  "destinos.badge": "Destinations",
  "destinos.title": "Paradises to Discover",
  "destinos.desc": "Each destination in the Andes of Ancash holds a unique experience that connects your spirit with the majesty of nature.",
  "destinos.blanca": "The snowy heart of Peru with over 30 peaks above 6,000 meters.",
  "destinos.laguna": "A turquoise jewel at the foot of Chacraraju, one of the most popular hikes in Peru.",
  "destinos.huayhuash": "Considered the most dramatic mountain range in South America, a world-class circuit.",
  "destinos.chavin": "Ceremonial center of the Chavin culture, a UNESCO World Heritage Site.",
  "destinos.details": "View Details",

  // Tours
  "tours.badge": "Our Tours",
  "tours.title": "Adventures that Transform",
  "tours.desc": "Each expedition is designed to offer you an authentic experience with the highest safety and service standards.",
  "tours.altitude": "Max altitude:",
  "tours.details": "View Details",
  "tours.book": "Book",

  // Testimonials
  "testimonials.badge": "Testimonials",
  "testimonials.title": "What Our Travelers Say",
  "testimonials.1.text": "An incredible experience. The Intiquilla team makes everything easy and safe, even for beginners. The lagoon is simply magical.",
  "testimonials.1.author": "Maria Fernandez",
  "testimonials.1.geo": "Argentina \u2022 Laguna 69",
  "testimonials.2.text": "The best trekking of my life. Ten days of landscapes that seemed like another planet. The logistics were perfect and the guide exceptional.",
  "testimonials.2.author": "Thomas Mueller",
  "testimonials.2.geo": "Germany \u2022 Huayhuash Circuit",
  "testimonials.3.text": "I did the Santa Cruz tour with my partner and it was the best decision of our trip to Peru. The camps, food and views were top-notch.",
  "testimonials.3.author": "Carolina Vega",
  "testimonials.3.geo": "Colombia \u2022 Santa Cruz",

  // Tips
  "tips.badge": "Travel Tips",
  "tips.title": "Get Ready for Your Adventure",
  "tips.acclimation.title": "Acclimatization",
  "tips.acclimation.desc": "Arrive in Huaraz at least 2 days before your trek to acclimatize to the altitude. Drink plenty of water and avoid heavy meals during the first days.",
  "tips.safety.title": "Safety First",
  "tips.safety.desc": "All our tours include certified guides, first aid kits and medical oxygen for high-altitude emergencies.",
  "tips.nature.title": "Respect Nature",
  "tips.nature.desc": "We practice responsible tourism. All waste generated returns with us to the city. Leave no trace on the trails.",
  "tips.season.title": "Best Season",
  "tips.season.desc": "The ideal season is from May to September. Sunny days and clear nights perfect for stargazing and trekking.",

  // CTA
  "cta.title": "Your Adventure in the Andes Starts Here",
  "cta.desc": "Book directly with us and get the best experience at the best price. Personalized attention and instant confirmation via WhatsApp.",
  "cta.button": "Book via WhatsApp",

  // Booking Modal
  "modal.badge": "Quick Direct Booking",
  "modal.title": "Confirm Your Adventure",
  "modal.subtitle": "Fill in the details to send your booking request.",
  "modal.experience": "Selected Experience",
  "modal.none": "Not selected",
  "modal.date": "Travel Date",
  "modal.travelers": "Number of Travelers",
  "modal.perPerson": "Price per person",
  "modal.travelersCount": "Travelers",
  "modal.personShort": "person(s)",
  "modal.total": "Total:",
  "modal.confirm": "Confirm on WhatsApp",
  "modal.disclaimer": "By confirming, you will be redirected to WhatsApp to complete your booking. An advisor will assist you personally.",
  "modal.whatsappMsg": "Hello Intiquilla Adventures! I would like to confirm my booking.\n\n\u2022 *Tour:* {tour}\n\u2022 *Date:* {date}\n\u2022 *Travelers:* {travelers} person(s)\n\u2022 *Estimated Total:* S/ {total}\n\nPlease check availability to proceed with the booking.",

  // Footer
  "footer.desc": "Responsible adventure tourism in the Cordillera Blanca and Huayhuash, Huaraz, Peru.",
  "footer.nav": "Navigation",
  "footer.popular": "Popular Tours",
  "footer.contact": "Contact",
  "footer.rights": "All rights reserved.",
  "footer.credit": "Web design and development by Fastpagepro.",
};

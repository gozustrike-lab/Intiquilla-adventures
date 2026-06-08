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
  "hero.slide1.title": "La montaña y el trekking más bellos del mundo.",
  "hero.slide1.subtitle": "Explora los glaciares milenarios de la Cordillera Blanca y vive aventuras que transforman tu forma de ver el mundo.",
  "hero.slide2.title": "Exploración, consciente de montañas sagradas",
  "hero.slide2.subtitle": "Desciende a lagunas de un azul imposible, alimentadas por nevados que desafían las nubes.",
  "hero.slide3.title": "The Complete Huayhuash Mountain Range Mystical Journey",
  "hero.slide3.subtitle": "Diez días de trekking a través de la cordillera más dramática de Sudamérica.",
  "hero.explore": "Explorar Tours",
  "hero.more": "Conoce Más",

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
  "destinos.title": "Paraísos por Descubrir",
  "destinos.desc": "Cada destino en los Andes de Ancash guarda una experiencia única que conecta tu espíritu con la majestuosidad de la naturaleza.",
  "destinos.blanca": "El corazón nevado del Perú con más de 30 picos por encima de los 6,000 metros.",
  "destinos.laguna": "Joya turquesa a los pies del Chacraraju, una de las caminatas más populares del Perú.",
  "destinos.huayhuash": "Considerada la cordillera más dramática de Sudamérica, un circuito de nivel mundial.",
  "destinos.chavin": "Centro ceremonial de la cultura Chavín, Patrimonio Mundial de la Humanidad UNESCO.",
  "destinos.details": "Ver Detalles",

  // Tours
  "tours.badge": "Nuestros Tours",
  "tours.title": "Aventuras que Transforman",
  "tours.desc": "Cada expedición está diseñada para ofrecerte una experiencia auténtica con los más altos estándares de seguridad y servicio.",
  "tours.altitude": "Altitud máxima:",
  "tours.details": "Ver Detalles",
  "tours.book": "Reservar",

  // Testimonials
  "testimonials.badge": "Testimonios",
  "testimonials.title": "Lo que Dicen Nuestros Viajeros",
  "testimonials.1.text": "Una experiencia increíble. El equipo de Intiquilla hace que todo sea fácil y seguro, incluso para principiantes. La laguna es simplemente mágica.",
  "testimonials.1.author": "María Fernández",
  "testimonials.1.geo": "Argentina \u2022 Laguna 69",
  "testimonials.2.text": "El mejor trekking de mi vida. Diez días de paisajes que parecían de otro planeta. La logística fue perfecta y el guía excepcional.",
  "testimonials.2.author": "Thomas Mueller",
  "testimonials.2.geo": "Alemania \u2022 Cordillera Huayhuash",
  "testimonials.3.text": "Hice el tour de Santa Cruz con mi pareja y fue la mejor decisión de nuestro viaje por Perú. Los campamentos, la comida y las vistas fueron de primera.",
  "testimonials.3.author": "Carolina Vega",
  "testimonials.3.geo": "Colombia \u2022 Santa Cruz",

  // Tips
  "tips.badge": "Tips de Viaje",
  "tips.title": "Prepárate para tu Aventura",
  "tips.acclimation.title": "Aclimatación",
  "tips.acclimation.desc": "Llega a Huaraz al menos 2 días antes de tu trek para aclimatarte a la altitud. Bebe mucha agua y evita comidas pesadas durante los primeros días.",
  "tips.safety.title": "Seguridad Primero",
  "tips.safety.desc": "Todos nuestros tours incluyen guías certificados, botiquín de primeros auxilios y oxígeno medicinal para emergencias en altitud.",
  "tips.nature.title": "Respecta la Naturaleza",
  "tips.nature.desc": "Practicamos turismo responsable. Todo residuo generado regresa con nosotros a la ciudad. No dejes rastro en los senderos.",
  "tips.season.title": "Mejor Época",
  "tips.season.desc": "La temporada ideal es de mayo a septiembre. Días soleados y noches claras perfectas para la observación astronómica y trekking.",

  // Manifesto
  "manifesto.quote": "No llevamos personas a la montaña.",
  "manifesto.quoteLine2": "La montaña las transforma.",
  "manifesto.p1": "Hay marcas de aventura que venden rutas.",
  "manifesto.p2": "Otras venden paisajes.",
  "manifesto.p3": "Algunas venden adrenalina.",
  "manifesto.p4": "Pero Intiquilla Adventures no nace para hacer trekking.",
  "manifesto.p5": "Nace para provocar una transición humana.",
  "manifesto.p6": "Porque en los Andes, especialmente en las montañas sagradas de la Cordillera Blanca y la Cordillera Huayhuash, nadie regresa exactamente igual.",

  // CTA
  "cta.title": "Tu Aventura en los Andes Comienza Aqui",
  "cta.desc": "Reserva directamente con nosotros y obtiene la mejor experiencia al mejor precio. Atención personalizada y confirmación inmediata por WhatsApp.",
  "cta.button": "Reservar por WhatsApp",

  // Booking Modal
  "modal.badge": "Reserva Rápida Directa",
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
  "modal.disclaimer": "Al confirmar, serás redirigido a WhatsApp para completar tu reserva. Un asesor te atenderá personalmente.",
  "modal.whatsappMsg": "Hola Intiquilla Adventures! \u{1F44B}\n\nEstoy interesado/a en reservar una aventura y me gustaría solicitar información.\n\n\u{1F3D4}\u{FE0F} *Experiencia:* {tour}\n\u{1F4C5} *Fecha:* {date}\n\u{1F465} *Viajeros:* {travelers} persona(s)\n\u{1F4B0} *Total Estimado:* $ {total}\n\nMe gustaría conocer disponibilidad y detalles para proceder con la reserva. Muchas gracias! \u{1F64C}",

  // ── WhatsApp Widget ──
  "widget.whatsappMsg": "Hola Intiquilla Adventures! \u{1F44B}\n\nMe gustaría reservar una aventura y solicitar información.\n\n\u{1F3D4}\u{FE0F} *Experiencia:* {tour}\n\u{1F4C5} *Fecha:* {date}\n\u{1F465} *Viajeros:* {travelers} persona(s)\n\u{1F4B0} *Total Estimado:* $ {total}\n\nPor favor confirmen disponibilidad. Gracias! \u{1F64C}",

  // Footer
  "footer.desc": "Turismo de aventura responsable en la Cordillera Blanca y Huayhuash, Huaraz, Perú.",
  "footer.nav": "Navegación",
  "footer.popular": "Tours Populares",
  "footer.contact": "Contacto",
  "footer.rights": "Todos los derechos reservados.",
  "footer.credit": "Diseño y desarrollo web por Fastpagepro.",

  // ── Tour Detail Page ──
  "tour.notFound": "Tour no encontrado",
  "tour.notFoundDesc": "El tour que buscas no existe o ha sido removido.",
  "tour.back": "Volver",
  "tour.description": "Descripción del Tour",
  "tour.gallery": "Galería",
  "tour.itinerary": "Itinerario",
  "tour.includes": "Qué Incluye",
  "tour.excludes": "No Incluye",
  "tour.whatToBring": "Qué Llevar",
  "tour.from": "Desde",
  "tour.perPerson": "por persona",
  "tour.date": "Fecha de Viaje",
  "tour.travelers": "Viajeros",
  "tour.total": "Total Neto",
  "tour.confirmWA": "Reservar por WhatsApp",
  "tour.selectDate": "Selecciona una fecha para continuar",
  "tour.highlights": "Destacados del Tour",
  "tour.youMayLike": "Te puede interesar",
  "tour.otherTours": "Otros Tours",
  "tour.viewDetails": "Ver detalles",
  "tour.person": "persona",
  "tour.persons": "personas",
  "tour.difficulty": "Dificultad",
  "tour.duration": "Duración",
  "tour.maxAlt": "Altitud máxima",
  "tour.startPoint": "Punto de inicio",
  "tour.whatsappMsg": "Hola Intiquilla Adventures! \u{1F44B}\n\nQuiero reservar mi aventura y solicitar información completa.\n\n\u{1F3D4}\u{FE0F} *Tour:* {tour}\n\u{1F4C5} *Fecha:* {date}\n\u{1F465} *Viajeros:* {travelers} persona(s)\n\u{1F4B0} *Total Estimado:* $ {total}\n\nPor favor confirmen disponibilidad para proceder con la reserva. Muchas gracias! \u{1F64C}",
  "tour.bookNow": "Reservar Ahora",

  // ── Nosotros Page ──
  "nos.badge": "Sobre Nosotros",
  "nos.title": "Más que una Agencia de Viajes, somos tu Conexión con los Andes",
  "nos.desc": "Intiquilla Adventures nació de la pasión por las montañas de Huaraz y el deseo de compartir con el mundo la majestuosidad de la Cordillera Blanca y Huayhuash. Nuestro nombre rinde homenaje al dios Sol Inca, Inti, fuente de vida y energía que ilumina los picos más altos del Perú cada mañana.",
  "nos.stat.years": "Años de experiencia",
  "nos.stat.travelers": "Viajeros satisfechos",
  "nos.stat.rating": "Rating promedio",
  "nos.stat.routes": "Rutas exclusivas",
  "nos.history": "Nuestra Historia",
  "nos.historyP1": "Fundada en 2014 por un grupo de guías de montaña apasionados por su tierra, Intiquilla Adventures comenzó como un pequeño operador local con la visión de ofrecer experiencias de trekking auténticas y seguras en los Andes de Ancash. Lo que empezó como un proyecto entre amigos se ha convertido en una de las empresas de turismo de aventura más respetadas de la región de Huaraz.",
  "nos.historyP2": "Nuestros fundadores crecieron en las comunidades andinas rodeados de las montañas más altas del Perú. Desde niños aprendieron a respetar la naturaleza, a leer el clima en las nubes y a navegar los senderos que sus ancestros recorrieron durante miles de años. Esta conexión profunda con el territorio es lo que diferencia a Intiquilla de cualquier otra operadora.",
  "nos.historyP3": "Operamos directamente desde Huaraz, sin intermediarios, lo que nos permite ofrecer precios justos, conocimiento local profundo y un compromiso real con el desarrollo sostenible de las comunidades andinas. Cada tour es una oportunidad para conectar con la cultura, la naturaleza y contigo mismo.",
  "nos.valuesBadge": "Nuestros Valores",
  "nos.valuesTitle": "Lo que nos Define",
  "nos.safety.title": "Seguridad Certificada",
  "nos.safety.text": "Todos nuestros guías poseen certificación internacional en montañismo y primeros auxilios. Contamos con equipo de emergencia completo, incluyendo oxígeno medicinal, botiquín avanzado y radio de comunicación para cada expedición.",
  "nos.responsible.title": "Turismo Responsable",
  "nos.responsible.text": "Practicamos un turismo de bajo impacto ambiental. Colaboramos con comunidades andinas locales, empleamos guías y arrieros de la zona, y contribuimos activamente a la conservación de las áreas naturales protegidas donde operamos.",
  "nos.excellence.title": "Excelencia Operativa",
  "nos.excellence.text": "Cada detalle de nuestras expediciones está planificado con precisión: desde la selección de campamentos con las mejores vistas hasta la preparación de comidas nutritivas adaptadas a la altitud. Nuestro estándar de calidad nos ha posicionado como referente en la región.",
  "nos.personalized.title": "Atención Personalizada",
  "nos.personalized.text": "Cada viajero es único para nosotros. Ofrecemos asesoramiento personalizado antes, durante y después de cada expedición. Nuestro equipo está disponible 24/7 para resolver cualquier consulta o necesidad que pueda surgir durante tu aventura.",
  "nos.teamBadge": "Nuestro Equipo",
  "nos.teamTitle": "Los Expertos detrás de tu Aventura",
  "nos.teamDesc": "Profesionales certificados con años de experiencia recorriendo cada rincón de los Andes de Ancash.",
  "nos.team1Role": "Director de Operaciones",
  "nos.team1Bio": "Con más de 15 años guiando expediciones en la Cordillera Blanca y Huayhuash. Certificado por la UIAGM en guiamiento de alta montaña. Ha liderado más de 500 expediciones exitosas.",
  "nos.team2Role": "Coordinadora de Viajes",
  "nos.team2Bio": "Especialista en logística de expediciones con 8 años de experiencia. Bilingüe en español e inglés. Responsable de que cada detalle de tu viaje esté perfectamente coordinado.",
  "nos.team3Role": "Guía Principal de Montaña",
  "nos.team3Bio": "Certificado por la UIAGM y la escuela nacional de guías de montaña del Perú. Conocimiento profundo de flora, fauna y geología andina. Rescatista certificado en altitud.",
  "nos.team4Role": "Guía Cultural y Astronómica",
  "nos.team4Bio": "Licenciada en turismo con maestría en patrimonio cultural andino. Especialista en astronomía observacional y cosmovisión andina. Transforma cada excursión en una experiencia educativa profunda.",
  "nos.mvBadge": "Misión y Visión",
  "nos.mvTitle": "Hacia donde Caminamos",
  "nos.mission": "Misión",
  "nos.missionText": "Facilitar experiencias de aventura transformadoras en los Andes peruanos, combinando la excelencia operativa con el respeto profundo por la naturaleza y las comunidades locales. Nos comprometemos a ofrecer expediciones seguras, auténticas y sostenibles que conecten a los viajeros con la majestuosidad de la Cordillera Blanca y Huayhuash, generando un impacto positivo en el desarrollo económico y social de las comunidades andinas.",
  "nos.vision": "Visión",
  "nos.visionText": "Ser reconocidos como el operador de turismo de aventura líder en los Andes centrales del Perú, estableciendo nuevos estándares de calidad, seguridad y sostenibilidad en la industria. Aspiramos a ser el puente que conecta al mundo con la riqueza natural y cultural de Ancash, contribuyendo a posicionar a Huaraz como destino de clase mundial para el trekking y el turismo de aventura responsable.",
  "nos.ctaTitle": "Comienza tu Aventura con Nosotros",
  "nos.ctaDesc": "Estamos listos para ayudarte a planificar la expedición perfecta. Contáctanos directamente y recibe asesoramiento personalizado.",
  "nos.viewTours": "Ver Nuestros Tours",
  "nos.travelTips": "Tips de Viaje",
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
  "hero.slide1.title": "The most beautiful mountain and trekking in the world.",
  "hero.slide1.subtitle": "Explore the millenary glaciers of the Cordillera Blanca and live adventures that transform the way you see the world.",
  "hero.slide2.title": "Exploration, conscious of sacred mountains",
  "hero.slide2.subtitle": "Descend to lagoons of an impossible blue, fed by snow-capped peaks that defy the clouds.",
  "hero.slide3.title": "The Complete Huayhuash Mountain Range Mystical Journey",
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

  // Manifesto
  "manifesto.quote": "We don't take people to the mountain.",
  "manifesto.quoteLine2": "The mountain transforms them.",
  "manifesto.p1": "Some adventure brands sell routes.",
  "manifesto.p2": "Others sell landscapes.",
  "manifesto.p3": "Some sell adrenaline.",
  "manifesto.p4": "But Intiquilla Adventures was not born to go trekking.",
  "manifesto.p5": "It was born to provoke a human transition.",
  "manifesto.p6": "Because in the Andes, especially in the sacred mountains of the Cordillera Blanca and the Cordillera Huayhuash, nobody returns exactly the same.",

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
  "modal.whatsappMsg": "Hello Intiquilla Adventures! \u{1F44B}\n\nI'm interested in booking an adventure and would like to request information.\n\n\u{1F3D4}\u{FE0F} *Experience:* {tour}\n\u{1F4C5} *Date:* {date}\n\u{1F465} *Travelers:* {travelers} person(s)\n\u{1F4B0} *Estimated Total:* $ {total}\n\nI'd like to check availability and details to proceed with the booking. Thank you! \u{1F64C}",

  // ── WhatsApp Widget ──
  "widget.whatsappMsg": "Hello Intiquilla Adventures! \u{1F44B}\n\nI'd like to book an adventure and request information.\n\n\u{1F3D4}\u{FE0F} *Experience:* {tour}\n\u{1F4C5} *Date:* {date}\n\u{1F465} *Travelers:* {travelers} person(s)\n\u{1F4B0} *Estimated Total:* $ {total}\n\nPlease confirm availability. Thank you! \u{1F64C}",

  // Footer
  "footer.desc": "Responsible adventure tourism in the Cordillera Blanca and Huayhuash, Huaraz, Peru.",
  "footer.nav": "Navigation",
  "footer.popular": "Popular Tours",
  "footer.contact": "Contact",
  "footer.rights": "All rights reserved.",
  "footer.credit": "Web design and development by Fastpagepro.",

  // ── Tour Detail Page ──
  "tour.notFound": "Tour Not Found",
  "tour.notFoundDesc": "The tour you are looking for does not exist or has been removed.",
  "tour.back": "Back",
  "tour.description": "Tour Description",
  "tour.gallery": "Gallery",
  "tour.itinerary": "Itinerary",
  "tour.includes": "What's Included",
  "tour.excludes": "Not Included",
  "tour.whatToBring": "What to Bring",
  "tour.from": "From",
  "tour.perPerson": "per person",
  "tour.date": "Travel Date",
  "tour.travelers": "Travelers",
  "tour.total": "Total",
  "tour.confirmWA": "Book via WhatsApp",
  "tour.selectDate": "Select a date to continue",
  "tour.highlights": "Tour Highlights",
  "tour.youMayLike": "You May Also Like",
  "tour.otherTours": "Other Tours",
  "tour.viewDetails": "View details",
  "tour.person": "person",
  "tour.persons": "people",
  "tour.difficulty": "Difficulty",
  "tour.duration": "Duration",
  "tour.maxAlt": "Max altitude",
  "tour.startPoint": "Starting point",
  "tour.whatsappMsg": "Hello Intiquilla Adventures! \u{1F44B}\n\nI want to book my adventure and request complete information.\n\n\u{1F3D4}\u{FE0F} *Tour:* {tour}\n\u{1F4C5} *Date:* {date}\n\u{1F465} *Travelers:* {travelers} person(s)\n\u{1F4B0} *Estimated Total:* $ {total}\n\nPlease confirm availability to proceed with the booking. Thank you! \u{1F64C}",
  "tour.bookNow": "Book Now",

  // ── Nosotros Page ──
  "nos.badge": "About Us",
  "nos.title": "More than a Travel Agency, We Are Your Connection to the Andes",
  "nos.desc": "Intiquilla Adventures was born from a passion for the mountains of Huaraz and the desire to share with the world the majesty of the Cordillera Blanca and Huayhuash. Our name pays homage to the Inca Sun God, Inti, source of life and energy that illuminates the highest peaks of Peru every morning.",
  "nos.stat.years": "Years of experience",
  "nos.stat.travelers": "Satisfied travelers",
  "nos.stat.rating": "Average rating",
  "nos.stat.routes": "Exclusive routes",
  "nos.history": "Our History",
  "nos.historyP1": "Founded in 2014 by a group of mountain guides passionate about their land, Intiquilla Adventures began as a small local operator with the vision of offering authentic and safe trekking experiences in the Andes of Ancash. What started as a project among friends has become one of the most respected adventure tourism companies in the Huaraz region.",
  "nos.historyP2": "Our founders grew up in Andean communities surrounded by the highest mountains in Peru. Since childhood, they learned to respect nature, read the weather in the clouds, and navigate the trails their ancestors walked for thousands of years. This deep connection to the land is what sets Intiquilla apart from any other operator.",
  "nos.historyP3": "We operate directly from Huaraz, without intermediaries, which allows us to offer fair prices, deep local knowledge, and a real commitment to the sustainable development of Andean communities. Every tour is an opportunity to connect with culture, nature, and yourself.",
  "nos.valuesBadge": "Our Values",
  "nos.valuesTitle": "What Defines Us",
  "nos.safety.title": "Certified Safety",
  "nos.safety.text": "All our guides hold international certification in mountaineering and first aid. We have complete emergency equipment, including medical oxygen, advanced first aid kits, and communication radios for every expedition.",
  "nos.responsible.title": "Responsible Tourism",
  "nos.responsible.text": "We practice low-impact environmental tourism. We collaborate with local Andean communities, employ guides and muleteers from the area, and actively contribute to the conservation of the protected natural areas where we operate.",
  "nos.excellence.title": "Operational Excellence",
  "nos.excellence.text": "Every detail of our expeditions is meticulously planned: from selecting campsites with the best views to preparing nutritious meals adapted to high altitude. Our quality standards have positioned us as a benchmark in the region.",
  "nos.personalized.title": "Personalized Attention",
  "nos.personalized.text": "Every traveler is unique to us. We offer personalized advice before, during, and after each expedition. Our team is available 24/7 to resolve any questions or needs that may arise during your adventure.",
  "nos.teamBadge": "Our Team",
  "nos.teamTitle": "The Experts Behind Your Adventure",
  "nos.teamDesc": "Certified professionals with years of experience exploring every corner of the Andes of Ancash.",
  "nos.team1Role": "Operations Director",
  "nos.team1Bio": "With over 15 years leading expeditions in the Cordillera Blanca and Huayhuash. UIAGM certified in high mountain guiding. Has led over 500 successful expeditions.",
  "nos.team2Role": "Travel Coordinator",
  "nos.team2Bio": "Expedition logistics specialist with 8 years of experience. Bilingual in Spanish and English. Responsible for ensuring every detail of your trip is perfectly coordinated.",
  "nos.team3Role": "Lead Mountain Guide",
  "nos.team3Bio": "UIAGM certified and graduated from the national mountain guide school of Peru. Deep knowledge of Andean flora, fauna, and geology. Certified high-altitude rescue specialist.",
  "nos.team4Role": "Cultural & Astronomical Guide",
  "nos.team4Bio": "Licensed in tourism with a master's degree in Andean cultural heritage. Specialist in observational astronomy and Andean worldview. Transforms every excursion into a profound educational experience.",
  "nos.mvBadge": "Mission & Vision",
  "nos.mvTitle": "Where We're Heading",
  "nos.mission": "Mission",
  "nos.missionText": "To facilitate transformative adventure experiences in the Peruvian Andes, combining operational excellence with deep respect for nature and local communities. We are committed to offering safe, authentic, and sustainable expeditions that connect travelers with the majesty of the Cordillera Blanca and Huayhuash, generating a positive impact on the economic and social development of Andean communities.",
  "nos.vision": "Vision",
  "nos.visionText": "To be recognized as the leading adventure tourism operator in the central Andes of Peru, setting new standards of quality, safety, and sustainability in the industry. We aspire to be the bridge that connects the world with the natural and cultural wealth of Ancash, contributing to positioning Huaraz as a world-class destination for trekking and responsible adventure tourism.",
  "nos.ctaTitle": "Start Your Adventure With Us",
  "nos.ctaDesc": "We are ready to help you plan the perfect expedition. Contact us directly and receive personalized advice.",
  "nos.viewTours": "View Our Tours",
  "nos.travelTips": "Travel Tips",
};

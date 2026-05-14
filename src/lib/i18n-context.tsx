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
  "modal.whatsappMsg": "Hola Intiquilla Adventures! 👋\n\nEstoy interesado/a en reservar una aventura y me gustaria solicitar informacion.\n\n🏔️ *Experiencia:* {tour}\n📅 *Fecha:* {date}\n🧑‍🤝‍🧑 *Viajeros:* {travelers} persona(s)\n💰 *Total Estimado:* S/ {total}\n\nMe gustaria conocer disponibilidad y detalles para proceder con la reserva. Muchas gracias! 🙌",

  // ── WhatsApp Widget ──
  "widget.whatsappMsg": "Hola Intiquilla Adventures! 👋\n\nMe gustaria reservar una aventura y solicitar informacion.\n\n🏔️ *Experiencia:* {tour}\n📅 *Fecha:* {date}\n🧑‍🤝‍🧑 *Viajeros:* {travelers} persona(s)\n💰 *Total Estimado:* S/ {total}\n\nPor favor confirmen disponibilidad. Gracias! 🙌",

  // Footer
  "footer.desc": "Turismo de aventura responsable en la Cordillera Blanca y Huayhuash, Huaraz, Peru.",
  "footer.nav": "Navegacion",
  "footer.popular": "Tours Populares",
  "footer.contact": "Contacto",
  "footer.rights": "Todos los derechos reservados.",
  "footer.credit": "Diseno y desarrollo web por Fastpagepro.",

  // ── Tour Detail Page ──
  "tour.notFound": "Tour no encontrado",
  "tour.notFoundDesc": "El tour que buscas no existe o ha sido removido.",
  "tour.back": "Volver",
  "tour.description": "Descripcion del Tour",
  "tour.gallery": "Galeria",
  "tour.itinerary": "Itinerario",
  "tour.includes": "Que Incluye",
  "tour.excludes": "No Incluye",
  "tour.whatToBring": "Que Llevar",
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
  "tour.duration": "Duracion",
  "tour.maxAlt": "Altitud maxima",
  "tour.startPoint": "Punto de inicio",
  "tour.whatsappMsg": "Hola Intiquilla Adventures! 👋\n\nQuiero reservar mi aventura y solicitar informacion completa.\n\n🏔️ *Tour:* {tour}\n📅 *Fecha:* {date}\n🧑‍🤝‍🧑 *Viajeros:* {travelers} persona(s)\n💰 *Total Estimado:* S/ {total}\n\nPor favor confirmen disponibilidad para proceder con la reserva. Muchas gracias! 🙌",
  "tour.bookNow": "Reservar Ahora",

  // ── Nosotros Page ──
  "nos.badge": "Sobre Nosotros",
  "nos.title": "Mas que una Agencia de Viajes, somos tu Conexion con los Andes",
  "nos.desc": "Intiquilla Adventures nacio de la pasion por las montanas de Huaraz y el deseo de compartir con el mundo la majestuosidad de la Cordillera Blanca y Huayhuash. Nuestro nombre rinde homenaje al dios Sol Inca, Inti, fuente de vida y energia que ilumina los picos mas altos del Peru cada manana.",
  "nos.stat.years": "Anos de experiencia",
  "nos.stat.travelers": "Viajeros satisfechos",
  "nos.stat.rating": "Rating promedio",
  "nos.stat.routes": "Rutas exclusivas",
  "nos.history": "Nuestra Historia",
  "nos.historyP1": "Fundada en 2014 por un grupo de guias de montana apasionados por su tierra, Intiquilla Adventures comenzo como un pequeno operador local con la vision de ofrecer experiencias de trekking autenticas y seguras en los Andes de Ancash. Lo que empezo como un proyecto entre amigos se ha convertido en una de las empresas de turismo de aventura mas respetadas de la region de Huaraz.",
  "nos.historyP2": "Nuestros fundadores crecieron en las comunidades andinas rodeados de las montanas mas altas del Peru. Desde ninos aprendieron a respetar la naturaleza, a leer el clima en las nubes y a navegar los senderos que sus ancestros recorrieron durante miles de anos. Esta conexion profunda con el territorio es lo que diferencia a Intiquilla de cualquier otra operadora.",
  "nos.historyP3": "Operamos directamente desde Huaraz, sin intermediarios, lo que nos permite ofrecer precios justos, conocimiento local profundo y un compromiso real con el desarrollo sostenible de las comunidades andinas. Cada tour es una oportunidad para conectar con la cultura, la naturaleza y contigo mismo.",
  "nos.valuesBadge": "Nuestros Valores",
  "nos.valuesTitle": "Lo que nos Define",
  "nos.safety.title": "Seguridad Certificada",
  "nos.safety.text": "Todos nuestros guias poseen certificacion internacional en montanismo y primeros auxilios. Contamos con equipo de emergencia completo, incluyendo oxigeno medicinal, botiquin avanzado y radio de comunicacion para cada expedicion.",
  "nos.responsible.title": "Turismo Responsable",
  "nos.responsible.text": "Practicamos un turismo de bajo impacto ambiental. Colaboramos con comunidades andinas locales, empleamos guias y arrieros de la zona, y contribuimos activamente a la conservacion de las areas naturales protegidas donde operamos.",
  "nos.excellence.title": "Excelencia Operativa",
  "nos.excellence.text": "Cada detalle de nuestras expediciones esta planificado con precision: desde la seleccion de campamentos con las mejores vistas hasta la preparacion de comidas nutritivas adaptadas a la altitud. Nuestro estandar de calidad nos ha posicionado como referente en la region.",
  "nos.personalized.title": "Atencion Personalizada",
  "nos.personalized.text": "Cada viajero es unico para nosotros. Ofrecemos asesoramiento personalizado antes, durante y despues de cada expedicion. Nuestro equipo esta disponible 24/7 para resolver cualquier consulta o necesidad que pueda surgir durante tu aventura.",
  "nos.teamBadge": "Nuestro Equipo",
  "nos.teamTitle": "Los Expertos detras de tu Aventura",
  "nos.teamDesc": "Profesionales certificados con anos de experiencia recorriendo cada rincon de los Andes de Ancash.",
  "nos.team1Role": "Director de Operaciones",
  "nos.team1Bio": "Con mas de 15 anos guiando expediciones en la Cordillera Blanca y Huayhuash. Certificado por la UIAGM en guiamento de alta montana. Ha liderado mas de 500 expediciones exitosas.",
  "nos.team2Role": "Coordinadora de Viajes",
  "nos.team2Bio": "Especialista en logistica de expediciones con 8 anos de experiencia. Bilingue en espanol e ingles. Responsable de que cada detalle de tu viaje este perfectamente coordinado.",
  "nos.team3Role": "Guia Principal de Montana",
  "nos.team3Bio": "Certificado por la UIAGM y la escuela nacional de guias de montana del Peru. Conocimiento profundo de flora, fauna y geologia andina. Rescatista certificado en altitud.",
  "nos.team4Role": "Guia Cultural y Astronomica",
  "nos.team4Bio": "Licenciada en turismo con maestria en patrimonio cultural andino. Especialista en astronomia observacional y cosmovision andina. Transforma cada excursion en una experiencia educativa profunda.",
  "nos.mvBadge": "Mision y Vision",
  "nos.mvTitle": "Hacia donde Caminamos",
  "nos.mission": "Mision",
  "nos.missionText": "Facilitar experiencias de aventura transformadoras en los Andes peruanos, combinando la excelencia operativa con el respeto profundo por la naturaleza y las comunidades locales. Nos comprometemos a ofrecer expediciones seguras, autenticas y sostenibles que conecten a los viajeros con la majestuosidad de la Cordillera Blanca y Huayhuash, generando un impacto positivo en el desarrollo economico y social de las comunidades andinas.",
  "nos.vision": "Vision",
  "nos.visionText": "Ser reconocidos como el operador de turismo de aventura lider en los Andes centrales del Peru, estableciendo nuevos estandares de calidad, seguridad y sostenibilidad en la industria. Aspiramos a ser el puente que conecta al mundo con la riqueza natural y cultural de Ancash, contribuyendo a posicionar a Huaraz como destino de clase mundial para el trekking y el turismo de aventura responsable.",
  "nos.ctaTitle": "Comienza tu Aventura con Nosotros",
  "nos.ctaDesc": "Estamos listos para ayudarte a planificar la expedicion perfecta. Contactanos directamente y recibe asesoramiento personalizado.",
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
  "modal.whatsappMsg": "Hello Intiquilla Adventures! 👋\n\nI'm interested in booking an adventure and would like to request information.\n\n🏔️ *Experience:* {tour}\n📅 *Date:* {date}\n🧑‍🤝‍🧑 *Travelers:* {travelers} person(s)\n💰 *Estimated Total:* S/ {total}\n\nI'd like to check availability and details to proceed with the booking. Thank you! 🙌",

  // ── WhatsApp Widget ──
  "widget.whatsappMsg": "Hello Intiquilla Adventures! 👋\n\nI'd like to book an adventure and request information.\n\n🏔️ *Experience:* {tour}\n📅 *Date:* {date}\n🧑‍🤝‍🧑 *Travelers:* {travelers} person(s)\n💰 *Estimated Total:* S/ {total}\n\nPlease confirm availability. Thank you! 🙌",

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
  "tour.whatsappMsg": "Hello Intiquilla Adventures! 👋\n\nI want to book my adventure and request complete information.\n\n🏔️ *Tour:* {tour}\n📅 *Date:* {date}\n🧑‍🤝‍🧑 *Travelers:* {travelers} person(s)\n💰 *Estimated Total:* S/ {total}\n\nPlease confirm availability to proceed with the booking. Thank you! 🙌",
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

import type { Lang } from "./i18n-context";

export interface TourData {
  slug: string;
  id: string;
  name: string;
  shortName: string;
  duration: string;
  durationDays: string;
  price: number;
  image: string;
  gallery: string[];
  difficulty: string;
  difficultyLevel: number;
  altitude: string;
  maxAltitude: string;
  startLocation: string;
  endLocation: string;
  description: string;
  longDescription: string;
  highlights: string[];
  itinerary: { day: string; title: string; description: string }[];
  inclusions: string[];
  exclusions: string[];
  whatToBring: string[];
  coordinates: { lat: number; lng: number; name: string };
}

export const TOURS: TourData[] = [
  {
    slug: "laguna-69",
    id: "laguna-69",
    name: "Laguna 69 - Trekking Full Day",
    shortName: "Laguna 69",
    duration: "1 Dia",
    durationDays: "Full Day",
    price: 90,
    image: "/images/tour-laguna.webp",
    gallery: [
      "/images/tour-laguna.webp",
      "/images/hero-astronomico.webp",
      "/images/hero-1.jpg",
    ],
    difficulty: "Moderado",
    difficultyLevel: 3,
    altitude: "4,600 m.s.n.m.",
    maxAltitude: "4,600 m",
    startLocation: "Huaraz (3,100 m)",
    endLocation: "Huaraz",
    description:
      "Una de las caminatas mas impresionantes de la Cordillera Blanca. Atraviesa valles andinos rodeados de quenuales hasta llegar a la legendaria laguna esmeralda, alimentada por los glaciares del Chacraraju.",
    longDescription:
      "La Laguna 69 es mundialmente reconocida como una de las caminatas de un dia mas espectaculares de los Andes peruanos. Ubicada en el Parque Nacional Huascaran, esta laguna de color turquesa intenso esta rodeada por los imponentes picos nevados del Chacraraju (6,112 m), Pisco (5,752 m) y Yanapaccha (5,460 m). El trekking comienza en el kilometro 110 de la carretera Huaraz-Caraz, desde donde se asciende gradualmente a traves de bosques de quenuales y praderas alpinas hasta alcanzar la laguna a 4,600 metros de altitud. El camino esta perfectamente señalizado y ofrece vistas panoramicas increibles durante todo el trayecto.",
    highlights: [
      "Laguna turquesa a 4,600 m rodeada de nevados",
      "Vistas del Chacraraju, Pisco y Yanapaccha",
      "Flora andina nativa con bosques de quenuales",
      "Transporte incluido desde Huaraz",
      "Guia profesional certificado",
      "Almuerzo de montaña incluido",
    ],
    itinerary: [
      {
        day: "Dia 1",
        title: "Huaraz — Cebollapampa — Laguna 69 — Retorno",
        description:
          "Salida desde Huaraz a las 5:00 AM en transporte privado hacia el kilometro 110 de la carretera Huaraz-Caraz. Llegada a Cebollapampa (3,900 m) donde comenzamos la caminata ascendente a traves de quebradas y bosques de quenuales. Tras aproximadamente 2.5 horas de caminata llegamos a la base del glaciar, y despues de 1 hora mas alcanzamos la imponente Laguna 69 a 4,600 m. Tiempo libre para disfrutar del paisaje, tomar fotografias y descansar junto a la laguna. Descenso por el mismo camino hasta Cebollapampa donde nos espera el almuerzo. Retorno a Huaraz estimado a las 6:00 PM.",
      },
    ],
    inclusions: [
      "Transporte privado Huaraz — Cebollapampa — Huaraz",
      "Guia profesional certificado en montanismo",
      "Almuerzo de montaña (snacks energeticos, sandwich, frutas)",
      "Agua mineral durante la caminata",
      "Botiquin de primeros auxilios y oxigeno medicinal",
      "Entrada al Parque Nacional Huascaran",
    ],
    exclusions: [
      "Desayuno antes de la salida",
      "Cena al retorno",
      "Arriendo de equipo de camping o trekking (bastones, ropa)",
      "Propinas",
      "Gastos personales",
    ],
    whatToBring: [
      "Ropa térmica en capas (base, media, impermeable)",
      "Zapatillas de trekking impermeables",
      "Protector solar y lentes de sol",
      "Gorra o sombrero",
      "Baston de trekking (recomendado)",
      "Mochila pequena (20-30L)",
      "Camara fotografica y baterias extra",
      "Agua adicional (1.5L recomendado)",
    ],
    coordinates: { lat: -8.9797, lng: -77.6543, name: "Laguna 69, Cordillera Blanca" },
  },
  {
    slug: "santa-cruz",
    id: "santa-cruz",
    name: "Clasico Trek Santa Cruz - 4 Dias",
    shortName: "Santa Cruz",
    duration: "4 Dias",
    durationDays: "3 Noches / 4 Dias",
    price: 550,
    image: "/images/tour-santacruz.jpg",
    gallery: [
      "/images/tour-santacruz.jpg",
      "/images/hero-2.jpg",
      "/images/hero-1.jpg",
    ],
    difficulty: "Moderado-Alto",
    difficultyLevel: 4,
    altitude: "4,750 m.s.n.m.",
    maxAltitude: "4,750 m",
    startLocation: "Huaraz (3,100 m)",
    endLocation: "Huaraz",
    description:
      "El trekking clasico por excelencia de la Cordillera Blanca. Cruza el imponente paso de Puerta del Carmen y recorre valles de ensueno con vistas a los picos mas altos del Peru.",
    longDescription:
      "El Trek Santa Cruz es considerado el circuito de trekking mas emblematico de la Cordillera Blanca y uno de los mejores del mundo. Durante 4 dias, atravesaras valles glaciares, lagunas cristalinas y pasos de montana que superan los 4,700 metros. El punto culminante es el Paso Puerta del Carmen a 4,750 m, desde donde se obtienen vistas panoramicas del Huascaran (6,768 m), el pico mas alto del Peru, y del espectacular Alpamayo (5,947 m), considerado la montana mas hermosa del mundo por la revista Alpinismo. Este circuito combina paisajes de ensueno con una experiencia cultural autentica al pasar por comunidades andinas tradicionales.",
    highlights: [
      "Cruce del Paso Puerta del Carmen a 4,750 m",
      "Vistas del Huascaran y el Alpamayo",
      "Lagunas de Taullipampa y Arhuaycocha",
      "Campamentos equipados con comida caliente",
      "Vistas panoramicas de 14 picos nevados",
      "Fauna andina (condores, vicunas, vizcachas)",
    ],
    itinerary: [
      {
        day: "Dia 1",
        title: "Huaraz — Cashap — Llamacorral",
        description:
          "Salida desde Huaraz a las 6:00 AM en transporte privado hacia el pueblo de Cashap (2,900 m). Inicio de la caminata ascendiendo por el valle del Rio Santa Cruz con vistas al Taulliraju. Despues de 4-5 horas de caminata, llegamos al campamento de Llamacorral (3,750 m) donde nos esperan las tiendas de campana y la cena.",
      },
      {
        day: "Dia 2",
        title: "Llamacorral — Base Arhuaycocha",
        description:
          "Continuacion ascendente por el valle con vistas a las cumbres nevadas. Pasamos por las lagunas Ichiccocha y Jancarurish hasta llegar a la base del Arhuaycocha (4,200 m). Opcional: caminata adicional hasta la Laguna Arhuaycocha bajo el Alpamayo. Campamento con vistas espectaculares.",
      },
      {
        day: "Dia 3",
        title: "Base Arhuaycocha — Paso Puerta del Carmen — Taullipampa",
        description:
          "El dia mas desafiante y recompensante. Ascenso gradual hacia el Paso Puerta del Carmen (4,750 m) con vistas panoramicas del Huascaran, Alpamayo y multiples cumbres nevadas. Descenso hacia Taullipampa (4,250 m) donde tenemos uno de los campamentos mas hermosos del circuito.",
      },
      {
        day: "Dia 4",
        title: "Taullipampa — Vaqueria — Huaraz",
        description:
          "Descenso hacia el pueblo de Vaqueria atravesando el hermoso valle de Huaripampa con comunidades andinas tradicionales y vistas al Pishtac (5,300 m). Llegada a Vaqueria donde nos espera el transporte de retorno hacia Huaraz, pasando por el mirador de Laguna de Llanganuco.",
      },
    ],
    inclusions: [
      "Transporte privado Huaraz — Cashap y Vaqueria — Huaraz",
      "Guia profesional certificado",
      "Arriero y cocinero profesional",
      "Comida completa durante el trek (desayuno, almuerzo, cena)",
      "Tiendas de campana 2 personas con colchoneta",
      "Equipo de cocina completo",
      "Botiquin de primeros auxilios y oxigeno medicinal",
      "Entrada al Parque Nacional Huascaran",
    ],
    exclusions: [
      "Sacramento de dormir (disponible para alquilar S/ 30)",
      "Baston de trekking",
      "Ropa de trekking y equipo personal",
      "Propinas para guia, arriero y cocinero",
      "Comida antes y despues del trek",
    ],
    whatToBring: [
      "Sacramento de dormir (-10 C recomendado)",
      "Ropa termica en capas (base, media, polar, impermeable)",
      "Zapatillas de trekking impermeables",
      "Baston de trekking",
      "Linterna frontal y baterias",
      "Proteccion solar y lentes de sol",
      "Mochila de trekking (40-50L)",
      "Botella de agua 1.5L",
      "Toalla pequena y articulos de aseo personal",
    ],
    coordinates: { lat: -8.5833, lng: -77.7167, name: "Paso Puerta del Carmen, Cordillera Blanca" },
  },
  {
    slug: "cordillera-huayhuash",
    id: "huayhuash",
    name: "Circuito Cordillera Huayhuash - 10 Dias",
    shortName: "Huayhuash",
    duration: "10 Dias",
    durationDays: "9 Noches / 10 Dias",
    price: 1400,
    image: "/images/tour-huayhuash.jpg",
    gallery: [
      "/images/tour-huayhuash.jpg",
      "/images/hero-3.jpg",
      "/images/hero-astronomico.webp",
    ],
    difficulty: "Exigente",
    difficultyLevel: 5,
    altitude: "5,100 m.s.n.m.",
    maxAltitude: "5,100 m",
    startLocation: "Huaraz (3,100 m)",
    endLocation: "Huaraz",
    description:
      "Considerado uno de los circuitos de trekking mas espectaculares del mundo. Circunda la compacta y dramatica Cordillera Huayhuash pasando por pasos de altitud superiores a 5,000 metros.",
    longDescription:
      "El Circuito Huayhuash es catalogado como uno de los 10 mejores trekkings del mundo por publicaciones especializadas como National Geographic y Lonely Planet. Este circuito de 10 dias circunda la compacta y dramatica Cordillera Huayhuash, una cadena montanosa que alberga picos como el Yerupaja (6,634 m, segundo pico mas alto del Peru), el Siula Grande (6,344 m) y el Rondoy (5,879 m). El recorrido cruza 6 pasos de montana por encima de los 4,600 metros, incluyendo el legendario Paso de Carhuac (4,680 m) con su laguna esmeralda y el Paso de San Antonio (5,100 m), el punto mas alto del circuito. Cada dia ofrece paisajes dramaticamente diferentes: lagunas turquesas, praderas alpinas, glaciares colgantes, y la oportunidad de avistar condores andinos en vuelo.",
    highlights: [
      "10 dias de expedicion completa alrededor de la Huayhuash",
      "Cruce de 6 pasos mayores a 4,600 m (maximo 5,100 m)",
      "Vistas del Yerupaja, Siula Grande y Jirishanca",
      "Lagunas de Jancarurish, Carhuac y Sarapococha",
      "Arriero profesional y cocinero de montana",
      "Campamentos con vistas espectaculares",
      "Posibilidad de avistamiento de condores andinos",
    ],
    itinerary: [
      {
        day: "Dia 1",
        title: "Huaraz — Llamac — Campo Base",
        description:
          "Traslado desde Huaraz hasta el pueblo de Llamac (3,300 m). Inicio de caminata ascendente por el valle con vistas al Jirishanca y el Rondoy. Llegada al primer campamento en las proximidades del Rio Llamac (3,800 m).",
      },
      {
        day: "Dia 2",
        title: "Campo Base — Laguna Jancarurish",
        description:
          "Ascenso gradual por el valle de Querenupampa hasta llegar a la impresionante Laguna Jancarurish (4,450 m) al pie del Yerupaja Chico. Campamento con vistas dramaticas del glaciar y la laguna turquesa.",
      },
      {
        day: "Dia 3",
        title: "Paso Cacanan (4,900 m) — Mitucocha",
        description:
          "Ascenso al Paso Cacanan (4,900 m) con vistas panoramicas de la Cordillera Huayhuash. Descenso hacia la Laguna de Mitucocha donde establecemos el campamento (4,200 m).",
      },
      {
        day: "Dia 4",
        title: "Paso de Carhuac (4,680 m) — Huayhuash",
        description:
          "Cruce del Paso de Carhuac (4,680 m) con sus increibles vistas de la laguna esmeralda. Descenso hacia la comunidad de Huayhuash (4,350 m). Uno de los dias mas fotograficos del circuito.",
      },
      {
        day: "Dia 5",
        title: "Huayhuash — Vicuña — Tapush",
        description:
          "Caminata por la cara este de la cordillera pasando por las comunidades de Vicuña y Cutatambo. Llegada al campamento de Tapush (4,300 m) con vistas al Trapecio.",
      },
      {
        day: "Dia 6",
        title: "Paso San Antonio (5,100 m) — Huanacpatay",
        description:
          "El punto mas alto del circuito. Ascenso al Paso San Antonio a 5,100 metros con vistas 360 grados de toda la Cordillera Huayhuash y Cordillera Blanca en el horizonte. Descenso largo hasta el campamento en Huanacpatay (3,900 m).",
      },
      {
        day: "Dia 7",
        title: "Huanacpatay — Lagunas de Sarapococha",
        description:
          "Descenso hacia el valle de Sarapococha donde visitamos la Laguna de Sarapococha con su increible vista del famoso pico Siula Grande, inmortalizado en el libro y pelicula 'Toquemos el Viento'. Campamento junto a la laguna (4,100 m).",
      },
      {
        day: "Dia 8",
        title: "Sarapococha — Paso Portachuelo (4,770 m) — Huacrish",
        description:
          "Ascenso al Paso Portachuelo de Llamac (4,770 m) para regresar al valle de Llamac. Descenso hasta el campamento de Huacrish (3,700 m). Ultimo atardecer con vistas a la cordillera.",
      },
      {
        day: "Dia 9",
        title: "Huacrish — Llamac — Matacancha",
        description:
          "Descenso final hacia el pueblo de Llamac y continuacion hasta Matacancha (4,100 m), donde establecemos nuestro ultimo campamento celebrando la conclusion del circuito.",
      },
      {
        day: "Dia 10",
        title: "Matacancha — Huaraz",
        description:
          "Ultimo dia de trekking con descenso hacia el punto de encuentro con el transporte. Retorno a Huaraz con parada en el camino para almuerzo. Llegada estimada a Huaraz en la tarde.",
      },
    ],
    inclusions: [
      "Transporte privado Huaraz — Llamac y Matacancha — Huaraz",
      "Guia profesional certificado en alta montana",
      "Arriero profesional con bestias de carga",
      "Cocinero de montana especializado",
      "Comida completa durante los 10 dias (desayuno, almuerzo, cena, snacks)",
      "Tiendas de campana individuales con colchoneta",
      "Equipo de cocina completo y vajilla",
      "Botiquin de primeros auxilios completo y oxigeno",
      "Radio de comunicacion",
      "Entrada al area protegida de la Cordillera Huayhuash",
    ],
    exclusions: [
      "Sacramento de sleeping (alquiler S/ 50)",
      "Baston de trekking (alquiler S/ 15)",
      "Ropa de trekking y equipo personal",
      "Propinas (sugerido: S/ 150-200 total)",
      "Comida antes y despues del trek",
      "Seguro de viaje y evacuacion",
    ],
    whatToBring: [
      "Sacramento de alta montana (-15 C)",
      "Ropa termica 4 capas (base, media, polar, gore-tex)",
      "Botas de montana impermeables",
      "2 pares de bastones de trekking",
      "Linterna frontal con baterias extra",
      "Protector solar factor 50+ y labial",
      "Mochila de expedicion (50-65L)",
      "2 botellas de agua 1.5L",
      "Toalla rapida y kit de aseo personal",
      "Bolsas plasticas para ropa seca",
      "Cantimplora termica opcional",
    ],
    coordinates: { lat: -10.3000, lng: -76.8833, name: "Paso San Antonio, Cordillera Huayhuash" },
  },
  {
    slug: "tour-astronomico",
    id: "chavin",
    name: "Tour Astronomico & Mistico Chavin - 1 Noche",
    shortName: "Chavin Mistico",
    duration: "1 Noche",
    durationDays: "1 Noche / 2 Dias",
    price: 120,
    image: "/images/tour-chavin.jpg",
    gallery: [
      "/images/tour-chavin.jpg",
      "/images/hero-astronomico.webp",
      "/images/fondo-chakana.webp",
    ],
    difficulty: "Facil",
    difficultyLevel: 1,
    altitude: "3,175 m.s.n.m.",
    maxAltitude: "3,175 m",
    startLocation: "Huaraz (3,100 m)",
    endLocation: "Huaraz",
    description:
      "Un viaje mistico al sitio arqueologico de Chavin de Huantar, centro ceremonial de la cultura Chavin. Incluye observacion astronomica con telescopio en una de las zonas con mejor cielo del Peru.",
    longDescription:
      "El Tour Astronomico y Mistico de Chavin combina dos experiencias unicas en un solo viaje. Durante el dia, exploras el impresionante sitio arqueologico de Chavin de Huantar, Patrimonio de la Humanidad por la UNESCO y centro ceremonial de una de las civilizaciones mas antiguas y enigmaticas de los Andes. Construido hace mas de 3,000 anos, este complejo arquitectonico alberga el famoso Lanzon Monolitico, las cabezas clavas y el sistema de galerias subterraneas con canales de ventilacion acustica. Durante la noche, te sumerges en un espectaculo astronomico inolvidable. La zona del Callejon de Conchucos tiene una de las menores contaminaciones luminicas del Peru, permitiendo observar galaxias, nebulosas, cúmulos estelares y planetas con una claridad extraordinaria a traves de telescopios profesionales.",
    highlights: [
      "Observacion estelar profesional con telescopio",
      "Visita guiada al sitio UNESCO de Chavin de Huantar",
      "Cielo limpio sin contaminacion luminica",
      "Guia especializado en astronomia andina",
      "Alojamiento y transporte incluidos",
      "Conexion con la cosmovision andina ancestral",
    ],
    itinerary: [
      {
        day: "Dia 1",
        title: "Huaraz — Chavin de Huantar — Observacion Astronomica",
        description:
          "Salida desde Huaraz a las 9:00 AM por la carretera hacia el Callejon de Conchucos. Paradas en el mirador del Tunel del Cahuish y en el pueblo de Recuay para almuerzo. Llegada a Chavin de Huantar a las 2:00 PM. Visita guiada al sitio arqueologico: Templo Castillo, Plaza Circular, galerias subterraneas y el Lanzon Monolitico. Alojamiento en hospedaje local. A las 7:00 PM, inicio de la sesion astronomica con telescopio: observacion de la Via Lactea, constelaciones del hemisferio sur, cúmulos abiertos y planetas visibles. Explicacion de la cosmovision astronomica andina y su relacion con Chavin.",
      },
      {
        day: "Dia 2",
        title: "Chavin — Laguna de Querococha — Huaraz",
        description:
          "Amanecer en los Andes con vista panoramica. Desayuno y salida hacia la Laguna de Querococha (3,980 m), una hermosa laguna de origenes glaciaricos en el camino de regreso. Parada para fotografias y breve caminata. Continuacion hacia Huaraz con llegada estimada a las 2:00 PM.",
      },
    ],
    inclusions: [
      "Transporte privado Huaraz — Chavin — Huaraz",
      "Guia cultural profesional certificado",
      "Guia astronomico especializado con telescopio",
      "Entrada al sitio arqueologico de Chavin de Huantar",
      "Alojamiento 1 noche en hospedaje en Chavin",
      "Desayuno y cena",
      "Botiquin de primeros auxilios",
    ],
    exclusions: [
      "Almuerzos durante el viaje",
      "Propinas",
      "Gastos personales",
      "Snacks adicionales",
    ],
    whatToBring: [
      "Ropa abrigada para la noche andina (temperaturas bajo cero)",
      "Chaqueta impermeable o rompevientos",
      "Linterna o luz frontal",
      "Camara fotografica (opcional para astrofotografia)",
      "Protector solar y lentes de sol",
      "Ropa comoda para caminata ligera",
      "Agua y snacks para el viaje",
    ],
    coordinates: { lat: -9.5947, lng: -77.1717, name: "Chavin de Huantar, Ancash" },
  },
];

/* ═══════════════════════════════════════════
   ENGLISH TOUR TRANSLATIONS
   ═══════════════════════════════════════════ */

const TOURS_EN: Record<string, Partial<TourData>> = {
  "laguna-69": {
    name: "Laguna 69 - Full Day Trekking",
    duration: "1 Day",
    durationDays: "Full Day",
    difficulty: "Moderate",
    description: "One of the most impressive hikes in the Cordillera Blanca. Cross Andean valleys surrounded by quenuyal forests until you reach the legendary emerald lagoon, fed by the glaciers of Chacraraju.",
    longDescription: "Laguna 69 is world-renowned as one of the most spectacular day hikes in the Peruvian Andes. Located in Huascaran National Park, this intensely turquoise lagoon is surrounded by the imposing snow-capped peaks of Chacraraju (6,112 m), Pisco (5,752 m), and Yanapaccha (5,460 m). The trek begins at kilometer 110 of the Huaraz-Caraz highway, from where you gradually ascend through quenuyal forests and alpine meadows until reaching the lagoon at 4,600 meters altitude. The trail is perfectly marked and offers incredible panoramic views throughout the entire route.",
    highlights: [
      "Turquoise lagoon at 4,600 m surrounded by snow-capped peaks",
      "Views of Chacraraju, Pisco and Yanapaccha",
      "Native Andean flora with quenuyal forests",
      "Transport included from Huaraz",
      "Certified professional guide",
      "Mountain lunch included",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Huaraz — Cebollapampa — Laguna 69 — Return",
        description: "Departure from Huaraz at 5:00 AM in private transport to kilometer 110 of the Huaraz-Caraz highway. Arrival at Cebollapampa (3,900 m) where we begin the ascending hike through ravines and quenuyal forests. After approximately 2.5 hours of hiking, we reach the base of the glacier, and after 1 more hour we reach the imposing Laguna 69 at 4,600 m. Free time to enjoy the landscape, take photos and rest by the lagoon. Descent along the same trail to Cebollapampa where lunch awaits us. Return to Huaraz estimated at 6:00 PM.",
      },
    ],
    inclusions: [
      "Private transport Huaraz — Cebollapampa — Huaraz",
      "Certified professional mountaineering guide",
      "Mountain lunch (energy snacks, sandwich, fruits)",
      "Mineral water during the hike",
      "First aid kit and medical oxygen",
      "Huascaran National Park entrance fee",
    ],
    exclusions: [
      "Breakfast before departure",
      "Dinner upon return",
      "Camping or trekking equipment rental (poles, clothing)",
      "Tips",
      "Personal expenses",
    ],
    whatToBring: [
      "Thermal clothing in layers (base, mid, waterproof)",
      "Waterproof trekking shoes",
      "Sunscreen and sunglasses",
      "Cap or hat",
      "Trekking poles (recommended)",
      "Small backpack (20-30L)",
      "Camera and extra batteries",
      "Additional water (1.5L recommended)",
    ],
  },
  santa_cruz: {
    name: "Classic Santa Cruz Trek - 4 Days",
    duration: "4 Days",
    durationDays: "3 Nights / 4 Days",
    difficulty: "Moderate-High",
    description: "The quintessential trek of the Cordillera Blanca. Cross the imposing Puerta del Carmen pass and traverse dreamlike valleys with views of the highest peaks in Peru.",
    longDescription: "The Santa Cruz Trek is considered the most emblematic trekking circuit in the Cordillera Blanca and one of the best in the world. Over 4 days, you will cross glacial valleys, crystal-clear lagoons, and mountain passes exceeding 4,700 meters. The climax is the Puerta del Carmen Pass at 4,750 m, from where you get panoramic views of Huascaran (6,768 m), the highest peak in Peru, and the spectacular Alpamayo (5,947 m), considered the most beautiful mountain in the world by Alpinism magazine. This circuit combines dreamlike landscapes with an authentic cultural experience passing through traditional Andean communities.",
    highlights: [
      "Crossing Puerta del Carmen Pass at 4,750 m",
      "Views of Huascaran and Alpamayo",
      "Lagoons of Taullipampa and Arhuaycocha",
      "Equipped campsites with hot meals",
      "Panoramic views of 14 snow-capped peaks",
      "Andean wildlife (condors, vicunas, vizcachas)",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Huaraz — Cashap — Llamacorral",
        description: "Departure from Huaraz at 6:00 AM in private transport to the village of Cashap (2,900 m). Start of the hike ascending through the Santa Cruz River valley with views of Taulliraju. After 4-5 hours of hiking, we arrive at Llamacorral camp (3,750 m) where tents and dinner await us.",
      },
      {
        day: "Day 2",
        title: "Llamacorral — Arhuaycocha Base",
        description: "Continued ascent through the valley with views of snow-capped summits. We pass by Ichiccocha and Jancarurish lagoons until reaching the base of Arhuaycocha (4,200 m). Optional: additional hike to Arhuaycocha Lagoon beneath Alpamayo. Camp with spectacular views.",
      },
      {
        day: "Day 3",
        title: "Arhuaycocha Base — Puerta del Carmen Pass — Taullipampa",
        description: "The most challenging and rewarding day. Gradual ascent to Puerta del Carmen Pass (4,750 m) with panoramic views of Huascaran, Alpamayo and multiple snow-capped peaks. Descent to Taullipampa (4,250 m) where we have one of the most beautiful campsites on the circuit.",
      },
      {
        day: "Day 4",
        title: "Taullipampa — Vaqueria — Huaraz",
        description: "Descent to the village of Vaqueria crossing the beautiful Huaripampa valley with traditional Andean communities and views of Pishtac (5,300 m). Arrival at Vaqueria where return transport to Huaraz awaits, passing by the Llanganuco Lagoon viewpoint.",
      },
    ],
    inclusions: [
      "Private transport Huaraz — Cashap and Vaqueria — Huaraz",
      "Certified professional guide",
      "Muleteer and professional cook",
      "Complete meals during trek (breakfast, lunch, dinner)",
      "2-person tents with sleeping mats",
      "Complete kitchen equipment",
      "First aid kit and medical oxygen",
      "Huascaran National Park entrance fee",
    ],
    exclusions: [
      "Sleeping bag (available to rent S/ 30)",
      "Trekking poles",
      "Trekking clothing and personal equipment",
      "Tips for guide, muleteer and cook",
      "Meals before and after trek",
    ],
    whatToBring: [
      "Sleeping bag (-10 C recommended)",
      "Thermal clothing in layers (base, mid, fleece, waterproof)",
      "Waterproof trekking shoes",
      "Trekking poles",
      "Headlamp and extra batteries",
      "Sunscreen and sunglasses",
      "Trekking backpack (40-50L)",
      "Water bottle 1.5L",
      "Small towel and personal hygiene items",
    ],
  },
  huayhuash: {
    name: "Cordillera Huayhuash Circuit - 10 Days",
    duration: "10 Days",
    durationDays: "9 Nights / 10 Days",
    difficulty: "Demanding",
    description: "Considered one of the most spectacular trekking circuits in the world. It circles the compact and dramatic Cordillera Huayhuash, crossing passes above 5,000 meters.",
    longDescription: "The Huayhuash Circuit is rated as one of the top 10 treks in the world by publications such as National Geographic and Lonely Planet. This 10-day circuit circles the compact and dramatic Cordillera Huayhuash, a mountain range home to peaks such as Yerupaja (6,634 m, second highest peak in Peru), Siula Grande (6,344 m), and Rondoy (5,879 m). The route crosses 6 mountain passes above 4,600 meters, including the legendary Carhuac Pass (4,680 m) with its emerald lagoon and the San Antonio Pass (5,100 m), the highest point of the circuit. Each day offers dramatically different landscapes: turquoise lagoons, alpine meadows, hanging glaciers, and the chance to spot Andean condors in flight.",
    highlights: [
      "10-day complete expedition around the Huayhuash",
      "Crossing 6 passes above 4,600 m (maximum 5,100 m)",
      "Views of Yerupaja, Siula Grande and Jirishanca",
      "Lagoons of Jancarurish, Carhuac and Sarapococha",
      "Professional muleteer and mountain cook",
      "Campsites with spectacular views",
      "Possible Andean condor sightings",
    ],
    itinerary: [
      { day: "Day 1", title: "Huaraz — Llamac — Base Camp", description: "Transfer from Huaraz to the village of Llamac (3,300 m). Start of the hike ascending through the valley with views of Jirishanca and Rondoy. Arrival at the first camp near Llamac River (3,800 m)." },
      { day: "Day 2", title: "Base Camp — Jancarurish Lagoon", description: "Gradual ascent through Querenupampa valley to the impressive Jancarurish Lagoon (4,450 m) at the foot of Yerupaja Chico. Camp with dramatic views of the glacier and turquoise lagoon." },
      { day: "Day 3", title: "Cacanan Pass (4,900 m) — Mitucocha", description: "Ascent to Cacanan Pass (4,900 m) with panoramic views of the Cordillera Huayhuash. Descent to Mitucocha Lagoon where we establish camp (4,200 m)." },
      { day: "Day 4", title: "Carhuac Pass (4,680 m) — Huayhuash", description: "Crossing Carhuac Pass (4,680 m) with its incredible emerald lagoon views. Descent to the Huayhuash community (4,350 m). One of the most photographic days of the circuit." },
      { day: "Day 5", title: "Huayhuash — Vicuna — Tapush", description: "Hike along the eastern face of the range passing through the communities of Vicuna and Cutatambo. Arrival at Tapush camp (4,300 m) with views of El Trapecio." },
      { day: "Day 6", title: "San Antonio Pass (5,100 m) — Huanacpatay", description: "The highest point of the circuit. Ascent to San Antonio Pass at 5,100 meters with 360-degree views of the entire Huayhuash range and the Cordillera Blanca on the horizon. Long descent to Huanacpatay camp (3,900 m)." },
      { day: "Day 7", title: "Huanacpatay — Sarapococha Lagoons", description: "Descent to the Sarapococha valley where we visit Sarapococha Lagoon with its incredible view of the famous Siula Grande peak, immortalized in the book and film 'Touching the Void'. Camp beside the lagoon (4,100 m)." },
      { day: "Day 8", title: "Sarapococha — Portachuelo Pass (4,770 m) — Huacrish", description: "Ascent to Portachuelo de Llamac Pass (4,770 m) to return to the Llamac valley. Descent to Huacrish camp (3,700 m). Last sunset with views of the range." },
      { day: "Day 9", title: "Huacrish — Llamac — Matacancha", description: "Final descent to Llamac village and continuation to Matacancha (4,100 m), where we establish our last camp celebrating the completion of the circuit." },
      { day: "Day 10", title: "Matacancha — Huaraz", description: "Last day of trekking with descent to the transport meeting point. Return to Huaraz with a stop for lunch along the way. Estimated arrival in Huaraz in the afternoon." },
    ],
    inclusions: [
      "Private transport Huaraz — Llamac and Matacancha — Huaraz",
      "Certified high mountain professional guide",
      "Professional muleteer with pack animals",
      "Specialized mountain cook",
      "Complete meals for 10 days (breakfast, lunch, dinner, snacks)",
      "Individual tents with sleeping mats",
      "Complete kitchen equipment and tableware",
      "Complete first aid kit and oxygen",
      "Communication radio",
      "Huayhuash protected area entrance fee",
    ],
    exclusions: [
      "Sleeping bag (rental S/ 50)",
      "Trekking poles (rental S/ 15)",
      "Trekking clothing and personal equipment",
      "Tips (suggested: S/ 150-200 total)",
      "Meals before and after trek",
      "Travel insurance and evacuation",
    ],
    whatToBring: [
      "High altitude sleeping bag (-15 C)",
      "4-layer thermal clothing (base, mid, fleece, gore-tex)",
      "Waterproof mountain boots",
      "2 pairs of trekking poles",
      "Headlamp with extra batteries",
      "SPF 50+ sunscreen and lip balm",
      "Expedition backpack (50-65L)",
      "2 water bottles 1.5L",
      "Quick-dry towel and personal hygiene kit",
      "Plastic bags for dry clothing",
      "Optional thermal flask",
    ],
  },
  chavin: {
    name: "Astronomical & Mystical Chavin Tour - 1 Night",
    duration: "1 Night",
    durationDays: "1 Night / 2 Days",
    difficulty: "Easy",
    description: "A mystical journey to the archaeological site of Chavin de Huantar, ceremonial center of the Chavin culture. Includes astronomical observation with telescope in one of the best sky zones in Peru.",
    longDescription: "The Astronomical and Mystical Chavin Tour combines two unique experiences in one trip. During the day, you explore the impressive archaeological site of Chavin de Huantar, a UNESCO World Heritage Site and ceremonial center of one of the oldest and most enigmatic civilizations of the Andes. Built over 3,000 years ago, this architectural complex houses the famous Lanzon Monolitico, the tenon heads, and a system of underground galleries with acoustic ventilation channels. At night, you immerse yourself in an unforgettable astronomical spectacle. The Conchucos Valley area has some of the lowest light pollution in Peru, allowing observation of galaxies, nebulae, star clusters, and planets with extraordinary clarity through professional telescopes.",
    highlights: [
      "Professional stargazing with telescope",
      "Guided visit to UNESCO site of Chavin de Huantar",
      "Clear skies with no light pollution",
      "Specialized guide in Andean astronomy",
      "Accommodation and transport included",
      "Connection with ancestral Andean worldview",
    ],
    itinerary: [
      { day: "Day 1", title: "Huaraz — Chavin de Huantar — Astronomical Observation", description: "Departure from Huaraz at 9:00 AM along the road to the Conchucos Valley. Stops at the Cahuish Tunnel viewpoint and in the town of Recuay for lunch. Arrival at Chavin de Huantar at 2:00 PM. Guided tour of the archaeological site: Castillo Temple, Circular Plaza, underground galleries, and the Lanzon Monolitico. Overnight in local lodging. At 7:00 PM, start of astronomical session with telescope: observation of the Milky Way, southern hemisphere constellations, open star clusters, and visible planets. Explanation of Andean astronomical worldview and its connection to Chavin." },
      { day: "Day 2", title: "Chavin — Querococha Lagoon — Huaraz", description: "Andean dawn with panoramic views. Breakfast and departure to Querococha Lagoon (3,980 m), a beautiful lagoon of glacial origin on the return route. Stop for photos and a short walk. Continuation to Huaraz with estimated arrival at 2:00 PM." },
    ],
    inclusions: [
      "Private transport Huaraz — Chavin — Huaraz",
      "Certified professional cultural guide",
      "Specialized astronomical guide with telescope",
      "Chavin de Huantar archaeological site entrance",
      "1 night accommodation in Chavin lodging",
      "Breakfast and dinner",
      "First aid kit",
    ],
    exclusions: [
      "Lunches during the trip",
      "Tips",
      "Personal expenses",
      "Additional snacks",
    ],
    whatToBring: [
      "Warm clothing for the Andean night (sub-zero temperatures)",
      "Waterproof jacket or windbreaker",
      "Flashlight or headlamp",
      "Camera (optional for astrophotography)",
      "Sunscreen and sunglasses",
      "Comfortable clothing for light hiking",
      "Water and snacks for the trip",
    ],
  },
};

/** Localize a tour for the given language. Returns a new object with English fields merged. */
export function localizeTour(tour: TourData, lang: Lang): TourData {
  if (lang === "en") {
    const en = TOURS_EN[tour.id];
    return en ? { ...tour, ...en } : tour;
  }
  return tour;
}

export function getTourBySlug(slug: string): TourData | undefined {
  return TOURS.find((t) => t.slug === slug);
}

export function getAllTourSlugs(): string[] {
  return TOURS.map((t) => t.slug);
}

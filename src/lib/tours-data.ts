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
    image: "/images/tour-laguna.jpg",
    gallery: [
      "/images/tour-laguna.jpg",
      "/images/hero-astronomico.jpg",
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
      "/images/hero-astronomico.jpg",
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
      "/images/hero-astronomico.jpg",
      "/images/fondo-chakana.jpg",
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

export function getTourBySlug(slug: string): TourData | undefined {
  return TOURS.find((t) => t.slug === slug);
}

export function getAllTourSlugs(): string[] {
  return TOURS.map((t) => t.slug);
}

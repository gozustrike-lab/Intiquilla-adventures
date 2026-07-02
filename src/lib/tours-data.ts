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
    duration: "1 Día",
    durationDays: "Full Day",
    price: 65,
    image: "/images/tours/laguna-69/laguna69-new-1.webp",
    gallery: [
      "/images/tours/laguna-69/laguna69-new-1.webp",
      "/images/tours/laguna-69/laguna69-new-2.webp",
      "/images/tours/laguna-69/laguna69-new-3.webp",
      "/images/tour-laguna.webp",
      "/images/hero-astronómico.webp",
    ],
    difficulty: "Moderado",
    difficultyLevel: 3,
    altitude: "4,600 m.s.n.m.",
    maxAltitude: "4,600 m",
    startLocation: "Huaraz (3,100 m)",
    endLocation: "Huaraz",
    description:
      "Una de las caminatas más impresionantes de la Cordillera Blanca. Atraviesa valles andinos rodeados de quenuales hasta llegar a la legendaria laguna esmeralda, alimentada por los glaciares del Chacraraju.",
    longDescription:
      "La Laguna 69 es mundialmente reconocida como una de las caminatas de un día más espectaculares de los Andes peruanos. Ubicada en el Parque Nacional Huascarán, esta laguna de color turquesa intenso esta rodeada por los imponentes picos nevados del Chacraraju (6,112 m), Pisco (5,752 m) y Yanapaccha (5,460 m). El trekking comienza en el kilómetro 110 de la carretera Huaraz-Caraz, desde donde se asciende gradualmente a través de bosques de quenuales y praderas alpinas hasta alcanzar la laguna a 4,600 metros de altitud. El camino esta perfectamente señalizado y ofrece vistas panorámicas increibles durante todo el trayecto.",
    highlights: [
      "Laguna turquesa a 4,600 m rodeada de nevados",
      "Vistas del Chacraraju, Pisco y Yanapaccha",
      "Flora andina nativa con bosques de quenuales",
      "Transporte incluido desde Huaraz",
      "Guía profesional certificado",
      "Almuerzo de montaña incluido",
    ],
    itinerary: [
      {
        day: "Día 1",
        title: "Huaraz — Cebollapampa — Laguna 69 — Retorno",
        description:
          "Salida desde Huaraz a las 5:00 AM en transporte privado hacia el kilómetro 110 de la carretera Huaraz-Caraz. Llegada a Cebollapampa (3,900 m) donde comenzamos la caminata ascendente a través de quebradas y bosques de quenuales. Tras aproximadamente 2.5 horas de caminata llegamos a la base del glaciar, y después de 1 hora más alcanzamos la imponente Laguna 69 a 4,600 m. Tiempo libre para disfrutar del paisaje, tomar fotografías y descansar junto a la laguna. Descenso por el mismo camino hasta Cebollapampa donde nos espera el almuerzo. Retorno a Huaraz estimado a las 6:00 PM.",
      },
    ],
    inclusions: [
      "Transporte privado Huaraz — Cebollapampa — Huaraz",
      "Guía profesional certificado en montañismo",
      "Almuerzo de montaña (snacks energéticos, sandwich, frutas)",
      "Agua mineral durante la caminata",
      "Botiquín de primeros auxilios y oxígeno medicinal",
      "Entrada al Parque Nacional Huascarán",
    ],
    exclusions: [
      "Desayuno antes de la salida",
      "Cena al retorno",
      "Arriendo de equipo de camping o trekking (bastónes, ropa)",
      "Gastos personales",
    ],
    whatToBring: [
      "Ropa térmica en capas (base, media, impermeable)",
      "Zapatillas de trekking impermeables",
      "Protector solar y lentes de sol",
      "Gorra o sombrero",
      "Bastón de trekking (recomendado)",
      "Mochila pequeña (20-30L)",
      "Cámara fotográfica y baterías extra",
      "Agua adicional (1.5L recomendado)",
    ],
    coordinates: { lat: -8.9797, lng: -77.6543, name: "Laguna 69, Cordillera Blanca" },
  },
  {
    slug: "santa-cruz",
    id: "santa-cruz",
    name: "Clásico Trek Santa Cruz - 4 Días",
    shortName: "Santa Cruz",
    duration: "4 Días",
    durationDays: "3 Noches / 4 Días",
    price: 400,
    image: "/images/tours/santa-cruz/santa-cruz-new-1.webp",
    gallery: [
      "/images/tours/santa-cruz/santa-cruz-new-1.webp",
      "/images/tours/santa-cruz/santa-cruz-new-2.webp",
      "/images/tours/santa-cruz/santa-cruz-new-3.webp",
      "/images/tours/santa-cruz/santa-cruz-08.webp",
      "/images/tours/santa-cruz/santa-cruz-01.webp",
      "/images/tours/santa-cruz/santa-cruz-03.webp",
      "/images/tours/santa-cruz/santa-cruz-04.webp",
      "/images/tours/santa-cruz/santa-cruz-05.webp",
      "/images/tours/santa-cruz/santa-cruz-09.webp",
      "/images/tours/santa-cruz/santa-cruz-02.webp",
      "/images/tours/santa-cruz/santa-cruz-06.webp",
      "/images/tours/santa-cruz/santa-cruz-07.webp",
    ],
    difficulty: "Moderado-Alto",
    difficultyLevel: 4,
    altitude: "4,750 m.s.n.m.",
    maxAltitude: "4,750 m",
    startLocation: "Huaraz (3,100 m)",
    endLocation: "Huaraz",
    description:
      "El trekking clásico por excelencia de la Cordillera Blanca. Cruza el imponente paso de Puerta del Carmen y recorre valles de ensueño con vistas a los picos más altos del Perú.",
    longDescription:
      "El Trek Santa Cruz es considerado el circuito de trekking más emblematico de la Cordillera Blanca y uno de los mejores del mundo. Durante 4 dias, atravesarás valles glaciares, lagunas cristalinas y pasos de montaña que superan los 4,700 metros. El punto culminante es el Paso Puerta del Carmen a 4,750 m, desde donde se obtienen vistas panorámicas del Huascarán (6,768 m), el pico más alto del Perú, y del espectacular Alpamayo (5,947 m), considerado la montaña más hermosa del mundo por la revista Alpinismo. Este circuito combina paisajes de ensueño con una experiencia cultural auténtica al pasar por comunidades andinas tradicionales.",
    highlights: [
      "Cruce del Paso Puerta del Carmen a 4,750 m",
      "Vistas del Huascarán y el Alpamayo",
      "Lagunas de Taullipampa y Arhuaycocha",
      "Campamentos equipados con comida caliente",
      "Vistas panorámicas de 14 picos nevados",
      "Fauna andina (cóndores, vicuñas, vizcachas)",
    ],
    itinerary: [
      {
        day: "Día 1",
        title: "Huaraz — Cashap — Llamacorral",
        description:
          "Salida desde Huaraz a las 6:00 AM en transporte privado hacia el pueblo de Cashap (2,900 m). Inicio de la caminata ascendiendo por el valle del Rio Santa Cruz con vistas al Taulliraju. Despues de 4-5 horas de caminata, llegamos al campamento de Llamacorral (3,750 m) donde nos esperan las tiendas de carpa y la cena.",
      },
      {
        day: "Día 2",
        title: "Llamacorral — Base Arhuaycocha",
        description:
          "Continuación ascendente por el valle con vistas a las cumbres nevadas. Pasamos por las lagunas Ichiccocha y Jancarurish hasta llegar a la base del Arhuaycocha (4,200 m). Opcional: caminata adicional hasta la Laguna Arhuaycocha bajo el Alpamayo. Campamento con vistas espectaculares.",
      },
      {
        day: "Día 3",
        title: "Base Arhuaycocha — Paso Puerta del Carmen — Taullipampa",
        description:
          "El día más desafíante y recompensante. Ascenso gradual hacia el Paso Puerta del Carmen (4,750 m) con vistas panorámicas del Huascarán, Alpamayo y múltiples cumbres nevadas. Descenso hacia Taullipampa (4,250 m) donde tenemos uno de los campamentos más hermosos del circuito.",
      },
      {
        day: "Día 4",
        title: "Taullipampa — Vaqueria — Huaraz",
        description:
          "Descenso hacia el pueblo de Vaqueria atravesando el hermoso valle de Huaripampa con comunidades andinas tradicionales y vistas al Pishtac (5,300 m). Llegada a Vaqueria donde nos espera el transporte de retorno hacia Huaraz, pasando por el mirador de Laguna de Llanganuco.",
      },
    ],
    inclusions: [
      "Transporte privado Huaraz — Cashap y Vaqueria — Huaraz",
      "Guía profesional certificado",
      "Arriero y cocinero profesional",
      "Comida completa durante el trek (desayuno, almuerzo, cena)",
      "Tiendas de carpa 2 personas con colchoneta",
      "Equipo de cocina completo",
      "Botiquín de primeros auxilios y oxígeno medicinal",
      "Entrada al Parque Nacional Huascarán",
    ],
    exclusions: [
      "Saco de dormir (disponible para alquilar $9)",
      "Bastón de trekking",
      "Ropa de trekking y equipo personal",
      "Comida antes y después del trek",
    ],
    whatToBring: [
      "Saco de dormir (-10 C recomendado)",
      "Ropa térmica en capas (base, media, polar, impermeable)",
      "Zapatillas de trekking impermeables",
      "Bastón de trekking",
      "Linterna frontal y baterías",
      "Protección solar y lentes de sol",
      "Mochila de trekking (40-50L)",
      "Botella de agua 1.5L",
      "Toalla pequeña y artículos de aseo personal",
    ],
    coordinates: { lat: -8.5833, lng: -77.7167, name: "Paso Puerta del Carmen, Cordillera Blanca" },
  },
  {
    slug: "alpamayo-two-sacred-faces",
    id: "alpamayo",
    name: "Alpamayo Two Sacred Faces Expedition",
    shortName: "Alpamayo",
    duration: "10D/09N",
    durationDays: "9 Noches / 10 Días",
    price: 1300,
    image: "/images/tours/alpamayo/alpamayo-03.jpg",
    gallery: [
      "/images/tours/alpamayo/alpamayo-03.jpg",
      "/images/tours/alpamayo/alpamayo-01.jpg",
      "/images/tours/alpamayo/alpamayo-02.jpg",
      "/images/tours/alpamayo/alpamayo-04.jpg",
      "/images/tours/alpamayo/alpamayo-05.jpg",
      "/images/tours/alpamayo/alpamayo-06.jpg",
    ],
    difficulty: "Exigente",
    difficultyLevel: 5,
    altitude: "4,750 m.s.n.m.",
    maxAltitude: "4,860 m",
    startLocation: "Huaraz (3,052 m s.n.m.)",
    endLocation: "Huaraz",
    description: "Expedicion de 10 días a través de las dos caras sagradas del Alpamayo (5,947 m s.n.m.), la Montaña más Bella del Mundo.",
    longDescription: "Una travesía completa que te lleva por los senderos más impresionantes de la Cordillera Blanca, incluyendo el paso Osoruri, la cara noroeste del Alpamayo, el paso Punta Unión y la legendaria Laguna Arhuaycocha.",
    highlights: ["Vista cara noroeste del Alpamayo (5,947 m)", "Paso Osoruri (4,860 m s.n.m.)", "Lagunas Azulcocha, Yanacocha y Cullicocha", "Paso Punta Unión (4,750 m s.n.m.)", "Campo Base Alpamayo y Laguna Arhuaycocha", "Vistas del Huascarán, Chacraraju y Taulliraju"],
    itinerary: [
      { day: "Día 01", title: "Huaraz (3,052 m s.n.m.) – Hualcayan (3,140 m s.n.m.) – Huishcash (4,200 m s.n.m.)", description: "Traslado en transporte hasta el pueblo de Hualcayan, desde donde daremos inicio a la caminata ascendiendo en zigzag por un camino de herradura hasta nuestro primer camping.\n\nAlmuerzo | Cena\n\nTiempo en transporte: 3 horas\nTiempo de caminata: 5 - 6 horas aprox.\nCamping: Huishcash (4,200 m s.n.m.)" },
      { day: "Día 02", title: "Huishcash (4,200 m s.n.m.) – Osoruri", description: "Este día no espera un paso muy importante: el paso Osoruri (4,860 m s.n.m.), también tendremos una hermosa vista de las lagunas Azulcocha y Yanacocha para luego pasar por el borde de la laguna Cullicocha (4,620 m s.n.m.).\n\nDesayuno | Almuerzo | Cena\n\nTiempo de caminata: 6 - 7 horas aprox.\nCamping: Osoruri (4,550 m s.n.m.)" },
      { day: "Día 03", title: "Osoruri – Jancarurish (3,800 m s.n.m.)", description: "Este día ascenderemos hacia el paso Vientunan (4,770 m s.n.m.), luego la caminata será a través de la quebrada de los Cedros y con direccion a la quebrada Alpamayo desde donde tendremos la vista más impresionante de la cara noroeste del Alpamayo (5,947 m s.n.m.).\n\nDesayuno | Almuerzo | Cena\n\nTiempo de caminata: 6 - 7 horas aprox.\nCamping: Jancarurish (3,800 m s.n.m.)" },
      { day: "Día 04", title: "Jancarurish – Mirador Alpamayo (4,450 m s.n.m.) – Jancarurish", description: "Día de descanso.\n\nOpcional: podemos hacer una pequeña caminata hacia el \"Mirador Alpamayo\" para ver la figura piramidal del nevado Alpamayo (5,947 m s.n.m.); desde este lugar se tomo la famosa fotografía del Alpamayo \"La Montaña más Bella del Mundo\".\n\nDesayuno | Almuerzo | Cena\n\nTiempo de caminata: 3 horas aprox.\nCamping: Jancarurish (3,800 m s.n.m.)" },
      { day: "Día 05", title: "Jancarurish – Huillca (4,000 m s.n.m.)", description: "Este día salimos con direccion a Huillca para ello cruzaremos el paso Gara Gara (4,830 m s.n.m.), seguido del paso Mesapampa (4,500 m s.n.m.).\n\nDesayuno | Almuerzo | Cena\n\nTiempo de caminata: 7 horas aprox.\nCamping: Huillca valley (4,300 m s.n.m.)" },
      { day: "Día 06", title: "Huillca – Jancapampa (3,600 m s.n.m.)", description: "Salimos con direccion a Jancapampa por la quebrada de Yana Quenua. Este día atravesaremos el paso Yanacon (4,600 m).\n\nDesayuno | Almuerzo | Cena\n\nTiempo de caminata: 7 horas aprox.\nCamping: Jancapampa (3,600 m s.n.m.)" },
      { day: "Día 07", title: "Jancapampa Valley – Quishuar (3,800 m s.n.m.)", description: "Este día caminaremos con direccion al pueblo de Pishgopampa (3,600 m s.n.m.), luego ascenderemos por la quebrada de Tingopampa hacia el paso Tupa Tupa (4,400 m s.n.m.).\n\nDesayuno | Almuerzo | Cena\n\nTiempo de caminata: 7 horas aprox.\nCamping: Quishuar (3,800 m s.n.m.)" },
      { day: "Día 08", title: "Quishuar – Tuctu (4,200 m s.n.m.)", description: "Este día salimos con direccion al paso Pucaraju (4,650 m s.n.m.) desde este punto podemos ver las montañas más altas de la Cordillera Blanca como: Huascarán, Chopicalqui, Chacraraju y Taulliraju (5,830 m s.n.m.). Caminaremos a través del valle de Huaripampa, la ruta siempre estará rodeada de bosques de arboles de Quenual.\n\nDesayuno | Almuerzo | Cena\n\nTiempo de caminata: 7 horas aprox.\nCamping: Tuctu (4,200 m s.n.m.)" },
      { day: "Día 09", title: "Tuctu (4,200 m s.n.m.) – Paso Punta Unión (4,750 m s.n.m.) – Taullipampa (4,250 m s.n.m.)", description: "Este día iniciamos nuestro ascenso hacia uno de los puntos más destacados de la travesía: el paso Punta Unión. Durante la subida, disfrutaremos de vistas panorámicas espectaculares de los imponentes picos nevados y el valle Santa Cruz.\n\nDesayuno | Almuerzo | Cena\n\nTiempo de caminata: 8 horas aprox.\nDistancia: 11 km\nCamping: Taullipampa (4,250 m s.n.m.)" },
      { day: "Día 10", title: "Taullipampa – Campo Base Alpamayo – Laguna Arhuaycocha (4,420 m s.n.m.) – Llamacorral", description: "Este día nos dirigimos al campo base del Nevado Alpamayo, una de las montañas más icónicas de la Cordillera Blanca, atravesando paisajes espectaculares. Luego, exploramos la tranquila Laguna Arhuaycocha con sus vistas panorámicas, antes de descender hacia Llamacorral para culminar otro día emocionante.\n\nDesayuno | Almuerzo | Cena\n\nTiempo de caminata: 9 horas aprox.\nDistancia: 20 km\nCamping: Llamacorral (3,760 m s.n.m.)" },
      { day: "Día 11", title: "Llamacorral – Cashapampa (2,900 m s.n.m.) – Huaraz", description: "Este último día tendremos una caminata corta hacia Cashapampa donde nos espera nuestro transporte para el traslado hacia Huaraz.\n\nDesayuno\n\nTiempo de caminata: 4 horas aprox.\nDistancia: 10 km" }
    ],
    inclusions: ["Transporte privado Huaraz – Hualcayan / Cashapampa – Huaraz", "Guía profesional certificado en montañismo", "Arriero y mulas de carga", "Cocinero y cocina de montaña", "Comidas: Desayuno, Almuerzo, Cena durante el trekking", "Carpa de comedor y carpa personal", "Botiquín de primeros auxilios y oxígeno medicinal", "Entrada al Parque Nacional Huascarán"],
    exclusions: ["Desayuno del primer dia", "Cena del último dia", "Arriendo de equipo de caminata (sleeping bag, colchoneta)", "Gastos personales", "Seguro de viaje"],
    whatToBring: ["Ropa térmica en capas (base, media y exterior)", "Zapatillas de trekking impermeables", "Sleeping bag (-10C)", "Colchoneta aislante", "Protector solar y lentes de sol", "Gorra o sombrero", "Bastón de trekking", "Mochila (30-40L)", "Cantimplora o bidón (2L)", "Linterna frontal", "Cámara fotográfica", "Bolsas plásticas para ropa"],
    coordinates: { lat: -8.8333, lng: -77.6167, name: "Alpamayo, Cordillera Blanca" },
  },
  {
    slug: "cordillera-huayhuash",
    id: "huayhuash",
    name: "Huayhuash Inner Silence Expedition",
    shortName: "Huayhuash Inner Silence",
    duration: "10 Días",
    durationDays: "9 Noches / 10 Días",
    price: 1000,
    image: "/images/tours/huayhuash/huayhuash-new-01.webp",
    gallery: [
      "/images/tours/huayhuash/huayhuash-new-01.webp",
      "/images/tours/huayhuash/huayhuash-new-02.webp",
      "/images/tours/huayhuash/huayhuash-new-03.webp",
      "/images/tours/huayhuash/huayhuash-new-04.webp",
      "/images/tours/huayhuash/huayhuash-new-05.webp",
      "/images/tours/huayhuash/huayhuash-new-06.webp",
      "/images/tours/huayhuash/huayhuash-new-07.webp",
      "/images/tours/huayhuash/huayhuash-02.webp",
      "/images/tours/huayhuash/huayhuash-03.webp",
      "/images/tours/huayhuash/huayhuash-04.webp",
      "/images/tours/huayhuash/huayhuash-05.webp",
      "/images/tours/huayhuash/huayhuash-06.webp",
      "/images/tours/huayhuash/huayhuash-01.webp",
    ],
    difficulty: "Exigente",
    difficultyLevel: 5,
    altitude: "5,100 m.s.n.m.",
    maxAltitude: "5,100 m",
    startLocation: "Huaraz (3,100 m)",
    endLocation: "Huaraz",
    description:
      "Considerado uno de los circuitos de trekking más espectaculares del mundo. Circunda la compacta y dramática Cordillera Huayhuash pasando por pasos de altitud superiores a 5,000 metros.",
    longDescription:
      "El Circuito Huayhuash es catalogado como uno de los 10 mejores trekkings del mundo por publicaciones especializadas como National Geographic y Lonely Planet. Este circuito de 10 días circunda la compacta y dramática Cordillera Huayhuash, una cadena montanosa que alberga picos como el Yerupaja (6,634 m, segundo pico más alto del Perú), el Siula Grande (6,344 m) y el Rondoy (5,879 m). El recorrido cruza 6 pasos de montaña por encima de los 4,600 metros, incluyendo el legendario Paso de Carhuac (4,680 m) con su laguna esmeralda y el Paso de San Antonio (5,100 m), el punto más alto del circuito. Cada día ofrece paisajes dramáticamente diferentes: lagunas turquesas, praderas alpinas, glaciares colgantes, y la oportunidad de avistar cóndores andinos en vuelo.",
    highlights: [
      "10 días de expedición completa alrededor de la Huayhuash",
      "Cruce de 6 pasos mayores a 4,600 m (maximo 5,100 m)",
      "Vistas del Yerupaja, Siula Grande y Jirishanca",
      "Laguna Jahuacocha",
      "Arriero profesional y cocinero de montaña",
      "Campamentos con vistas espectaculares",
      "Posibilidad de avistamiento de cóndores andinos",
    ],
    itinerary: [
      { day: "Día 1", title: "Huaraz – Cuartelhuain (3,900 m s.n.m.) – Laguna Mitucocha (4,100 m s.n.m.)", description: "Salimos desde Huaraz a las 03:00 a.m. en transporte privado hacia Cuartelhuain (aprox. 6 horas).\n\nEn ruta atravesamos los pueblos tradicionales de Chiquian, Llamac, Pocpa y Pallca, con vistas espectaculares del paisaje andino.\n\nLlegada al punto de inicio del trekking e inicio de la caminata. Caminata de 6 a 7 horas. Ascenso al primer paso: Cacananpunta (4,700 m).\n\nDistancia: 9 Km aprox." },
      { day: "Día 2", title: "Laguna Mitucocha (4,100 m s.n.m.) – Laguna Carhuacocha (4,138 m s.n.m.)", description: "Caminata de 5 a 6 horas.\n\nDespues del desayuno, ascenso al Paso Punta Carhuac (4,650 m).\n\nDescenso hacia el valle hasta llegar al campamento en Carhuacocha, uno de los miradores más impresionantes del circuito, con vistas a Jirishanca Chico y Grande, Yerupaja Chico y Grande, Toro, Siula y Carnicero.\n\nDistancia: 11 Km aprox." },
      { day: "Día 3", title: "Laguna Carhuacocha – Huayhuash (4,300 m s.n.m.)", description: "Salida después del desayuno.\n\nAscenso gradual de aproximadamente 7/8 horas hasta el Paso Carnicero (4,600 m). Este es el día de la famosa vista de las tres lagunas, almuerzo y descenso suave hasta el campamento de Huayhuash.\n\nDistancia: 12 Km aprox." },
      { day: "Día 4", title: "Huayhuash – Laguna Viconga (4,400 m s.n.m.)", description: "Caminata de 5 a 6 horas.\n\nCruce del Paso Portachuelo (4,750 m) con vistas a Puscanturpa, Cuyoc y Millpo. Y la montaña León Dormido de la cordillera de Raura. Descenso hasta la laguna Viconga y luego al campamento de Viconga y tarde libre para disfrutar de los baños termales de Atuscancha.\n\nDistancia: 11 Km aprox." },
      { day: "Día 5", title: "Laguna Viconga – Pampa Cuyoc (4,400 m s.n.m.) – Campamento Elefante", description: "Caminata de 4 a 5 horas.\n\nCruce del Paso Cuyoc (5,000 m), uno de los puntos más alto del trekking.\n\nVista panorámica de númerosos nevados como Cuyoc, Yerupaja, Siula, Sarapo, Rasac, Trapecio, Jurau, Pumarinri y mas.\n\nDescenso a Pampa Cuyoc y campamento.\n\nDistancia: 10 Km aprox." },
      { day: "Día 6", title: "Campamento Elefante – Paso Santa Rosa – Campamento Cutatambo", description: "Despues del desayuno, partimos hacia Santa Rosa, un mirador ubicado a 5,000 m (16,404 pies). Llegamos a este punto después de 2 horas y media. Este punto es unico, ya que desde alli tenemos las vistas más hermosas de los nevados Carnicero, Jurao, Siula Grande y Yerupaja, así como de las lagunas Jurao y Siulacocha. Despues de descansar y tomar fotos, descendemos al valle de Cutatambo (4,250 m / 13,944 pies), nuestro próximo campamento, al que llegamos después de 2 horas, desde donde veremos la montaña Siula Grande hecho famoso por Joe Simpson en su libro \"Tocando el vacio\", y luego llevado al cine con el mismo nombre.\n\nDistancia: 12 Km aprox." },
      { day: "Día 7", title: "Cutatambo – Huayllapa", description: "Despues del desayuno iniciamos nuestra caminata por el valle de Calinca, teniendo a nuestro lado derecho las montañas Siula Grande y Yerupaja, almorzamos en la ruta y más tarde llegamos al pueblo de Huayllapa, pintoresca comunidad ganadera para luego de la cena pernoctar cerca al pueblo.\n\nDistancia: 12 Km aprox." },
      { day: "Día 8", title: "Huayllapa – Gashpapampa (4,600 m s.n.m.)", description: "Caminata de 5 a 6 horas.\n\nDespues del desayuno, iniciamos nuestra caminata y llegamos a cruzar el Paso Punta Tapush (4,900 m).\n\nExcelentes vistas de los nevados Auxilio y Diablo Mudo.\n\nCampamento en Gashpa Pampa, base del Nevado Diablo Mudo (de fácil ascenso).\n\nDistancia: 13 Km aprox." },
      { day: "Día 9", title: "Gashpa Pampa – Laguna Jahuacocha (4,100 m s.n.m.)", description: "Caminata de 4 a 5 horas.\n\nAscenso al Paso Yaucha (4,800 m) y posterior descenso por el Valle de Wacrish, con vistas a Jirishanca y Yerupaja.\n\nLlegada y campamento en Jahuacocha.\n\nDespues del almuerzo se preparará la Pachamanca, plato típico peruano que se cocina bajo la tierra con especias naturales. Cena y ultima noche en las montañas de Huayhuash.\n\nDistancia: 10 Km aprox." },
      { day: "Día 10", title: "Jahuacocha – Llamac – Huaraz", description: "Opción de levantarse temprano y contemplar el amanecer en Jahuacocha, luego del desayuno, iniciamos nuestra ultima caminata de 5 a 6 horas con un ascenso gradual hasta el Paso Pampa de Llamac (4,300 m), último punto alto que cruzaremos en el trekking y tendremos las ultimás vistas de los imponentes nevados de la Cordillera Huayhuash. Descenso hasta el pueblo de Llamac, después traslado en vehículo desde Llamac a Chiquian (aprox. 2 horas) y continuación hacia Huaraz.\n\nDistancia: 13 Km aprox." }
    ],
    inclusions: [
      "Transporte privado Huaraz — Llamac y Matacancha — Huaraz",
      "Guía profesional certificado en alta montaña",
      "Arriero profesional con bestias de carga",
      "Cocinero de montaña especializado",
      "Comida completa durante los 10 días (desayuno, almuerzo, cena, snacks)",
      "Tiendas de carpa individuales con colchoneta",
      "Equipo de cocina completo y vajilla",
      "Botiquín de primeros auxilios completo y oxigeno",
      "Radio de comunicación",
      "Entrada al area protegida de la Cordillera Huayhuash",
    ],
    exclusions: [
      "Saco de sleeping (alquiler $15)",
      "Bastón de trekking (alquiler $4)",
      "Ropa de trekking y equipo personal",
      "Comida antes y después del trek",
      "Seguro de viaje y evacuación",
    ],
    whatToBring: [
      "Saco de alta montaña (-15 C)",
      "Ropa térmica 4 capas (base, media, polar, gore-tex)",
      "Botas de montaña impermeables",
      "2 pares de bastónes de trekking",
      "Linterna frontal con baterías extra",
      "Protector solar factor 50+ y labial",
      "Mochila de expedición (50-65L)",
      "2 botellas de agua 1.5L",
      "Toalla rápida y kit de aseo personal",
      "Bolsas plásticas para ropa seca",
      "Cantimplora térmica opcional",
    ],
    coordinates: { lat: -10.3000, lng: -76.8833, name: "Paso San Antonio, Cordillera Huayhuash" },
  },
  {
    slug: "tour-astronómico",
    id: "chavin",
    name: "Tour Astronómico & Místico Chavín - 1 Noche",
    shortName: "Chavín Místico",
    duration: "1 Noche",
    durationDays: "1 Noche / 2 Días",
    price: 85,
    image: "/images/tour-chavin.webp",
    gallery: [
      "/images/tour-chavin.webp",
      "/images/hero-astronómico.webp",
      "/images/hero-1.webp",
    ],
    difficulty: "Fácil",
    difficultyLevel: 1,
    altitude: "3,175 m.s.n.m.",
    maxAltitude: "3,175 m",
    startLocation: "Huaraz (3,100 m)",
    endLocation: "Huaraz",
    description:
      "Un viaje mistico al sitio arqueológico de Chavín de Huantar, centro ceremonial de la cultura Chavín. Incluye observación astronomica con telescopio en una de las zonas con mejor cielo del Perú.",
    longDescription:
      "El Tour Astronómico y Místico de Chavín combina dos experiencias únicas en un solo viaje. Durante el dia, exploras el impresionante sitio arqueológico de Chavín de Huantar, Patrimonio de la Humanidad por la UNESCO y centro ceremonial de una de las civilizaciones más antiguas y enigmáticas de los Andes. Construido hace más de 3,000 anos, este complejo arquitectónico alberga el famoso Lanzón Monolítico, las cabezas clavas y el sistema de galerias subterráneas con canales de ventilacion acústica. Durante la noche, te sumerges en un espectaculo astronómico inolvidable. La zona del Callejón de Conchucos tiene una de las menores contaminaciónes lumínicas del Perú, permitiendo observar galaxias, nebulosas, cúmulos estelares y planetas con una claridad extraordinaria a través de telescopios profesionales.",
    highlights: [
      "Observación estelar profesional con telescopio",
      "Visita guiada al sitio UNESCO de Chavín de Huantar",
      "Cielo limpio sin contaminación lumínica",
      "Guía especializado en astronomía andina",
      "Alojamiento y transporte incluidos",
      "Conexión con la cosmovisión andina ancestral",
    ],
    itinerary: [
      {
        day: "Día 1",
        title: "Huaraz — Chavín de Huantar — Observación Astronómica",
        description:
          "Salida desde Huaraz a las 9:00 AM por la carretera hacia el Callejón de Conchucos. Paradas en el mirador del Túnel del Cahuish y en el pueblo de Recuay para almuerzo. Llegada a Chavín de Huantar a las 2:00 PM. Visita guiada al sitio arqueológico: Templo Castillo, Plaza Circular, galerias subterráneas y el Lanzón Monolítico. Alojamiento en hospedaje local. A las 7:00 PM, inicio de la sesión astronomica con telescopio: observación de la Vía Láctea, constelaciones del hemisferio sur, cúmulos abiertos y planetas visibles. Explicación de la cosmovisión astronomica andina y su relación con Chavín.",
      },
      {
        day: "Día 2",
        title: "Chavín — Laguna de Querococha — Huaraz",
        description:
          "Amanecer en los Andes con vista panorámica. Desayuno y salida hacia la Laguna de Querococha (3,980 m), una hermosa laguna de orígenes glaciares en el camino de regreso. Parada para fotografías y breve caminata. Continuación hacia Huaraz con llegada estimada a las 2:00 PM.",
      },
    ],
    inclusions: [
      "Transporte privado Huaraz — Chavín — Huaraz",
      "Guía cultural profesional certificado",
      "Guía astronómico especializado con telescopio",
      "Entrada al sitio arqueológico de Chavín de Huantar",
      "Alojamiento 1 noche en hospedaje en Chavín",
      "Desayuno y cena",
      "Botiquín de primeros auxilios",
    ],
    exclusions: [
      "Almuerzos durante el viaje",
      "Gastos personales",
      "Snacks adicionales",
    ],
    whatToBring: [
      "Ropa abrigada para la noche andina (temperaturas bajo cero)",
      "Chaqueta impermeable o rompevientos",
      "Linterna o luz frontal",
      "Cámara fotográfica (opcional para astrofotografía)",
      "Protector solar y lentes de sol",
      "Ropa cómoda para caminata ligera",
      "Agua y snacks para el viaje",
    ],
    coordinates: { lat: -9.5947, lng: -77.1717, name: "Chavín de Huantar, Ancash" },
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
      "Andean wildlife (condors, vicuñas, vizcachas)",
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
      "Sleeping bag (available to rent $9)",
      "Trekking poles",
      "Trekking clothing and personal equipment",
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
      "Laguna Jahuacocha",
      "Professional muleteer and mountain cook",
      "Campsites with spectacular views",
      "Possible Andean condor sightings",
    ],
    itinerary: [
      { day: "Day 1", title: "Huaraz — Llamac — Base Camp", description: "Transfer from Huaraz to the village of Llamac (3,300 m). Start of the hike ascending through the valley with views of Jirishanca and Rondoy. Arrival at the first camp near Llamac River (3,800 m)." },
      { day: "Day 2", title: "Base Camp — Jahuacocha Lagoon", description: "Gradual ascent through Querenupampa valley to the impressive Jahuacocha Lagoon (4,450 m) at the foot of Yerupaja Chico. Camp with dramatic views of the glacier and turquoise lagoon." },
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
      "Sleeping bag (rental $15)",
      "Trekking poles (rental $4)",
      "Trekking clothing and personal equipment",
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

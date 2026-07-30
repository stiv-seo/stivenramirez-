export interface MarketCard {
  icon: string;
  title: string;
  description: string;
}

export interface Ciudad {
  nombre: string;
  slug: string;
  departamento: string;
  descripcion: string;
  mercado: string;
  poblacion: string;
  empresas: string;
  oportunidad: string;
  keyword_h1: string;
  keyword_meta: string;
  meta_description: string;
  keywords: string[];
  // Campos enriquecidos para SEO programático
  sectorEconomicoPrincipal: string;
  poblacionAprox: string;
  oportunidadLocal: string;
  ejemplosSectores: string[];
  // Sección de mercado local
  marketSection: {
    h2: string;
    paragraph: string;
    cards: MarketCard[];
  };
  // FAQs específicas de ciudad (reemplazan las últimas 2 del template)
  faqsLocal: Array<{ q: string; a: string }>;
}

export const CIUDADES: Ciudad[] = [
  {
    nombre: "Medellín",
    slug: "medellin",
    departamento: "Antioquia",
    descripcion: "Capital de Antioquia y del Valle de Aburrá. Base real de operación, en el área metropolitana (Sabaneta).",
    mercado: "moda y confecciones, tecnología, innovación, salud, servicios profesionales",
    poblacion: "4 millones (área metropolitana)",
    empresas: "pymes de moda, tecnología, salud y servicios profesionales",
    oportunidad: "conocimiento directo del mercado local, sin intermediarios ni tercerización",
    keyword_h1: "Diseño Web en Medellín",
    keyword_meta: "diseño web Medellín",
    meta_description:
      "Diseño web en Medellín con SEO integrado, hecho desde el Valle de Aburrá. WordPress y Shopify que posicionan en Google desde el día 1. Trabajo directo, sin intermediarios.",
    keywords: ["diseño web medellin", "consultor seo medellin", "consultor seo freelance medellin", "wordpress medellin", "shopify medellin", "seo local medellin"],
    sectorEconomicoPrincipal: "Moda, tecnología e innovación",
    poblacionAprox: "4 millones de habitantes en el área metropolitana",
    oportunidadLocal: "Base real de operación — conocimiento directo del mercado del Valle de Aburrá, sin intermediarios ni tercerización",
    ejemplosSectores: ["Moda y confecciones", "Tecnología e innovación (Ruta N)", "Salud y bienestar", "Servicios profesionales"],
    marketSection: {
      h2: "Diseño web en Medellín: hecho desde el Valle de Aburrá, no vendido a distancia",
      paragraph:
        "Medellín es mi base — vivo en el área metropolitana (Sabaneta) y trabajo con negocios de Medellín, Envigado, Itagüí y Sabaneta todos los días. Conozco el mercado local: la industria de la moda (confecciones, Colombiamoda), el ecosistema tech impulsado por Ruta N, y un sector servicios que compite duro por visibilidad en Google. La diferencia frente a una agencia: no hay ejecutivo de ventas ni equipo tercerizado — hablas conmigo, y yo ejecuto.",
      cards: [
        {
          icon: "🧵",
          title: "Moda y confecciones",
          description:
            "Medellín es la capital textil de Colombia. SEO + e-commerce bien construido compite con marketplaces grandes en búsquedas de nicho.",
        },
        {
          icon: "💻",
          title: "Tecnología e innovación",
          description:
            "El ecosistema de Ruta N y las startups del Valle de Aburrá necesitan SEO técnico real, no solo un sitio bonito, para escalar tráfico orgánico.",
        },
        {
          icon: "🏥",
          title: "Salud y bienestar",
          description:
            "Clínicas, IPS y centros de estética del área metropolitana. SEO local bien hecho trae pacientes por Google, no solo por referidos.",
        },
        {
          icon: "💼",
          title: "Servicios profesionales",
          description:
            "Abogados, contadores y consultoras en Medellín, Envigado y Sabaneta compitiendo por búsquedas locales de alto valor.",
        },
      ],
    },
    faqsLocal: [
      {
        q: "¿De verdad trabajas desde Medellín o es solo una página más de la lista?",
        a: "Vivo en Sabaneta, área metropolitana de Medellín. No es una ciudad más agregada por SEO — es donde trabajo todos los días y donde conozco el mercado de primera mano.",
      },
      {
        q: "¿Atiendes también Envigado, Itagüí y Sabaneta?",
        a: "Sí, todo el Valle de Aburrá. Al estar en la zona puedo reunirme presencialmente si el proyecto lo amerita, algo que no ofrezco en las demás ciudades donde trabajo 100% remoto.",
      },
    ],
  },
  {
    nombre: "Cali",
    slug: "cali",
    departamento: "Valle del Cauca",
    descripcion: "Capital del suroccidente colombiano. Fuerte en moda, alimentos y servicios profesionales.",
    mercado: "moda, alimentos, servicios profesionales, comercio",
    poblacion: "2.2 millones",
    empresas: "pymes del sector comercial y de servicios",
    oportunidad: "más del 60% de pymes caleñas sin presencia digital optimizada",
    keyword_h1: "Diseño Web en Cali",
    keyword_meta: "diseño web Cali",
    meta_description:
      "Diseño web en Cali con SEO integrado para pymes caleñas. WordPress y Shopify que posicionan en Google desde el día 1. Trabajo remoto, resultados medibles.",
    keywords: ["diseño web cali", "consultor seo cali", "wordpress cali", "shopify cali", "seo cali"],
    sectorEconomicoPrincipal: "Industria, moda y agroindustria",
    poblacionAprox: "2.2 millones de habitantes",
    oportunidadLocal: "Más del 60% de pymes caleñas no tienen presencia digital optimizada",
    ejemplosSectores: ["Moda y confecciones", "Alimentos y bebidas", "Servicios profesionales", "Comercio"],
    marketSection: {
      h2: "Diseño web en Cali: lo que el mercado local no te dice",
      paragraph:
        "Cali tiene un ecosistema pyme activo en salud, gastronomía, construcción y retail. El problema habitual: las agencias locales cobran por diseño bonito sin integrarlo con SEO — y el cliente lo descubre 6 meses después cuando el sitio no genera ni una consulta orgánica.",
      cards: [
        {
          icon: "💆",
          title: "Clínicas y centros de estética",
          description:
            "Sector ultra-competitivo en Cali. El SEO local decide si llenas agenda por Google o dependes solo de Instagram.",
        },
        {
          icon: "🍽️",
          title: "Restaurantes y gastronomía",
          description:
            "Alta búsqueda local. Google Maps + sitio rápido = reservas sin pagar por clic.",
        },
        {
          icon: "🏗️",
          title: "Constructoras e inmobiliarias",
          description:
            "SEO desde el inicio genera leads calificados antes del lanzamiento del proyecto.",
        },
        {
          icon: "🛍️",
          title: "Comercio y retail local",
          description:
            "Tiendas físicas que necesitan posicionarse en búsquedas locales frente a grandes plataformas.",
        },
      ],
    },
    faqsLocal: [
      {
        q: "¿Hay agencias de diseño web en Cali? ¿Por qué contratarte a ti?",
        a: "Sí, hay agencias en Cali. La diferencia es que la mayoría separa diseño y SEO en dos presupuestos. Yo los integro desde el inicio y trabajas directamente conmigo, no con un ejecutivo que terceriza el trabajo.",
      },
      {
        q: "¿Trabajas con sectores específicos de Cali como salud o gastronomía?",
        a: "Sí. Tengo experiencia con sectores de alto volumen en Cali: salud y estética, gastronomía, construcción e inmobiliarias. El SEO se adapta a la intención de búsqueda real de cada sector.",
      },
    ],
  },
  {
    nombre: "Bogotá",
    slug: "bogota",
    departamento: "Cundinamarca",
    descripcion: "Capital de Colombia y mayor centro empresarial del país.",
    mercado: "startups, servicios B2B, salud, educación, fintech",
    poblacion: "8 millones",
    empresas: "empresas medianas y grandes, startups en crecimiento",
    oportunidad: "mayor volumen de búsqueda del país para diseño web y SEO",
    keyword_h1: "Diseño Web en Bogotá",
    keyword_meta: "diseño web Bogotá",
    meta_description:
      "Diseño web en Bogotá con SEO integrado para startups y pymes. WordPress y Shopify que posicionan en Google desde el día 1. Trabajo remoto, sin agencia.",
    keywords: ["diseño web bogota", "consultor seo bogota", "wordpress bogota", "shopify bogota", "seo bogota"],
    sectorEconomicoPrincipal: "Servicios B2B, tecnología y finanzas",
    poblacionAprox: "8 millones de habitantes",
    oportunidadLocal: "Mayor volumen de búsqueda del país para diseño web y SEO",
    ejemplosSectores: ["Startups y tecnología", "Servicios empresariales", "Salud y educación", "Fintech"],
    marketSection: {
      h2: "Diseño web en Bogotá: el mercado más competitivo de Colombia",
      paragraph:
        "Bogotá concentra la mayor densidad de negocios digitales del país. También tiene la mayor oferta de agencias — y la mayor cantidad de pymes que han pagado por un sitio que no posiciona. El problema habitual: el cliente habla con un ejecutivo de ventas y el trabajo lo hace un equipo anónimo. Yo soy el único interlocutor y el que ejecuta.",
      cards: [
        {
          icon: "💻",
          title: "Startups y empresas tech",
          description:
            "Alta competencia en Google. El SEO técnico desde el inicio define si escalan orgánicamente o dependen solo de pauta.",
        },
        {
          icon: "💼",
          title: "Servicios profesionales",
          description:
            "Abogados, consultoras, firmas financieras. Bogotá es el mercado con mayor intención de búsqueda para servicios B2B en Colombia.",
        },
        {
          icon: "🏥",
          title: "Salud y bienestar",
          description:
            "Clínicas, centros médicos, psicólogos. SEO local + schema de salud = agenda llena sin depender de Instagram.",
        },
        {
          icon: "🛒",
          title: "Retail y e-commerce",
          description:
            "Tiendas que compiten con Falabella y Mercado Libre necesitan SEO técnico correcto en Shopify para ganar búsquedas de nicho.",
        },
      ],
    },
    faqsLocal: [
      {
        q: "¿Por qué contratarte a ti si en Bogotá hay cientos de agencias?",
        a: "Porque en las agencias de Bogotá el cliente nunca habla con el especialista. Pagas estructura de agencia y recibes ejecución de junior. Yo hago el trabajo, conozco el resultado, y puedo explicarlo sin filtros.",
      },
      {
        q: "¿Tienes experiencia con el mercado empresarial de Bogotá?",
        a: "Sí. He trabajado con empresas tech, servicios profesionales y e-commerce bogotanos. El mercado capitalino tiene mayor competencia en Google, lo que hace más crítico tener una base técnica correcta desde el día 1.",
      },
    ],
  },
  {
    nombre: "Barranquilla",
    slug: "barranquilla",
    departamento: "Atlántico",
    descripcion: "Principal puerto comercial de Colombia. Hub de comercio exterior y logística.",
    mercado: "comercio exterior, logística, agroindustria, servicios portuarios",
    poblacion: "1.2 millones",
    empresas: "empresas de comercio e importación/exportación",
    oportunidad: "mercado digital menos saturado que Bogotá y Medellín",
    keyword_h1: "Diseño Web en Barranquilla",
    keyword_meta: "diseño web Barranquilla",
    meta_description:
      "Diseño web en Barranquilla con SEO para empresas de comercio e importación. WordPress y Shopify que posicionan en Google. Trabajo 100% remoto.",
    keywords: ["diseño web barranquilla", "consultor seo barranquilla", "wordpress barranquilla", "shopify barranquilla", "seo barranquilla"],
    sectorEconomicoPrincipal: "Comercio exterior y logística portuaria",
    poblacionAprox: "1.2 millones de habitantes",
    oportunidadLocal: "Mercado digital menos saturado que Bogotá y Medellín",
    ejemplosSectores: ["Comercio exterior", "Logística y puertos", "Agroindustria", "Servicios portuarios"],
    marketSection: {
      h2: "Diseño web en Barranquilla: la puerta digital del Caribe colombiano",
      paragraph:
        "Barranquilla es el principal hub comercial de la Costa Atlántica. Importación, logística, comercio, agroindustria — sectores con alta competencia offline pero poca presencia digital bien construida. La oportunidad: pocas empresas en Barranquilla tienen un sitio web técnicamente correcto. Quien entre primero con SEO real gana posiciones por años.",
      cards: [
        {
          icon: "📦",
          title: "Comercio e importación",
          description:
            "Uno de los sectores más activos en Barranquilla. Un sitio con SEO bien estructurado capta búsquedas B2B que ningún catálogo en PDF puede capturar.",
        },
        {
          icon: "🚢",
          title: "Logística y transporte",
          description:
            "Empresas con operaciones en el Puerto de Barranquilla que necesitan presencia digital para atraer clientes fuera de la Costa.",
        },
        {
          icon: "🏥",
          title: "Salud y clínicas",
          description:
            "Sector en crecimiento en el Atlántico. SEO local + schema médico = consultas orgánicas sin depender de referidos.",
        },
        {
          icon: "🍽️",
          title: "Gastronomía y turismo",
          description:
            "Barranquilla atrae turismo de negocios y carnaval. Restaurantes y hoteles con SEO bien hecho aparecen antes que los directorios genéricos.",
        },
      ],
    },
    faqsLocal: [
      {
        q: "¿Hay agencias de diseño web en Barranquilla?",
        a: "Sí, pero la mayoría se enfoca en diseño visual sin integrar SEO técnico. El resultado: sitios bonitos que Google no entiende. Yo integro los dos desde el inicio.",
      },
      {
        q: "¿Conoces el mercado empresarial de la Costa Atlántica?",
        a: "Sí. Barranquilla tiene características propias: alto volumen de comercio B2B, sectores de logística y una economía orientada a importación y distribución. El contenido y las keywords se adaptan a esa realidad, no a plantillas genéricas.",
      },
    ],
  },
  {
    nombre: "Pereira",
    slug: "pereira",
    departamento: "Risaralda",
    descripcion: "Corazón del Eje Cafetero. Ciudad universitaria con economía diversificada.",
    mercado: "turismo, café, textiles, comercio, servicios educativos",
    poblacion: "580.000",
    empresas: "pymes del sector comercial y turístico",
    oportunidad: "Eje Cafetero con alta demanda turística y poca inversión digital",
    keyword_h1: "Diseño Web en Pereira",
    keyword_meta: "diseño web Pereira",
    meta_description:
      "Diseño web en Pereira con SEO integrado para pymes del Eje Cafetero. WordPress y Shopify que posicionan en Google desde el día 1. Trabajo remoto.",
    keywords: ["diseño web pereira", "consultor seo pereira", "wordpress pereira", "eje cafetero seo", "seo pereira"],
    sectorEconomicoPrincipal: "Turismo, café y comercio regional",
    poblacionAprox: "580.000 habitantes",
    oportunidadLocal: "Alta demanda turística del Eje Cafetero con muy poca inversión digital",
    ejemplosSectores: ["Turismo y hotelería", "Café y agroindustria", "Textiles", "Comercio regional"],
    marketSection: {
      h2: "Diseño web para negocios en el Eje Cafetero",
      paragraph:
        "Pereira es la capital digital del Eje Cafetero — el hub de servicios para negocios en Risaralda, Caldas y Quindío. Característica clave del mercado: poca competencia digital, lo que significa posicionar en Google más rápido y más barato que en Bogotá o Cali. Los negocios que entren primero con base técnica correcta van a dominar las búsquedas locales por años.",
      cards: [
        {
          icon: "🏨",
          title: "Turismo y hospedaje",
          description:
            "Hoteles boutique, fincas y experiencias del Eje Cafetero. Schema de alojamiento + SEO = reservas directas sin OTA.",
        },
        {
          icon: "☕",
          title: "Café y gastronomía",
          description:
            "La identidad cafetera es un activo SEO real. Búsquedas de experiencias cafeteras tienen alta intención de compra.",
        },
        {
          icon: "💼",
          title: "Servicios profesionales",
          description:
            "Abogados, contadores, médicos en Pereira. La competencia digital es baja — entrar ahora es ganar posiciones rápido.",
        },
        {
          icon: "🏪",
          title: "Comercio y pymes locales",
          description:
            "Negocios de Pereira, Dosquebradas y Santa Rosa que necesitan presencia digital para competir con grandes cadenas.",
        },
      ],
    },
    faqsLocal: [
      {
        q: "¿Trabajas con negocios en todo el Eje Cafetero?",
        a: "Sí. Atiendo clientes en Pereira, Manizales, Armenia, Dosquebradas y el resto del Eje Cafetero. El trabajo es 100% remoto — la zona no afecta tiempos ni precio.",
      },
      {
        q: "¿Tiene sentido invertir en SEO en Pereira si el volumen de búsquedas es menor?",
        a: "Sí, y es exactamente la oportunidad. Menos competencia digital significa posicionar más rápido y con menor inversión que en Bogotá o Cali. Los negocios que entren primero dominan las búsquedas locales por años.",
      },
    ],
  },
  {
    nombre: "Manizales",
    slug: "manizales",
    departamento: "Caldas",
    descripcion: "Ciudad universitaria y tecnológica del Eje Cafetero.",
    mercado: "educación, tecnología, café, agroindustria, servicios",
    poblacion: "430.000",
    empresas: "empresas de tecnología, educación y agroindustria",
    oportunidad: "ciudad con alta concentración universitaria y bajo índice de digitalización empresarial",
    keyword_h1: "Diseño Web en Manizales",
    keyword_meta: "diseño web Manizales",
    meta_description:
      "Diseño web en Manizales con SEO para empresas de tecnología y educación. WordPress y Shopify que posicionan en Google. Trabajo 100% remoto.",
    keywords: ["diseño web manizales", "consultor seo manizales", "wordpress manizales", "eje cafetero diseño web", "seo manizales"],
    sectorEconomicoPrincipal: "Educación superior y tecnología",
    poblacionAprox: "430.000 habitantes",
    oportunidadLocal: "Alta concentración universitaria con bajo índice de digitalización empresarial",
    ejemplosSectores: ["Instituciones educativas", "Empresas de tecnología", "Café y agroindustria", "Servicios profesionales"],
    marketSection: {
      h2: "Diseño web en Manizales: presencia digital para la capital de Caldas",
      paragraph:
        "Manizales tiene un perfil económico particular: universidad fuerte, sector cafetero, industria manufacturera y un ecosistema de servicios profesionales en crecimiento. La presencia digital de los negocios locales está rezagada frente al potencial del mercado — la mayoría compite offline pero no en Google.",
      cards: [
        {
          icon: "☕",
          title: "Sector cafetero y agroindustria",
          description:
            "Exportadores y procesadores de café que necesitan presencia digital para llegar a compradores fuera del Eje Cafetero.",
        },
        {
          icon: "🎓",
          title: "Servicios universitarios y educación",
          description:
            "Manizales concentra una de las mayores densidades estudiantiles de Colombia. Servicios dirigidos a universitarios con alto volumen de búsqueda local.",
        },
        {
          icon: "🏭",
          title: "Industria y manufactura",
          description:
            "Empresas manufactureras del Eje Cafetero que buscan clientes B2B más allá de su red de contactos tradicional.",
        },
        {
          icon: "💼",
          title: "Servicios profesionales",
          description:
            "Poca competencia digital en Manizales significa que un sitio técnicamente correcto posiciona rápido para búsquedas locales de alto valor.",
        },
      ],
    },
    faqsLocal: [
      {
        q: "¿Hay opciones de diseño web en Manizales? ¿Por qué contratarte?",
        a: "Hay opciones locales, pero la mayoría no integra SEO técnico real. Yo ofrezco el mismo criterio técnico que una agencia de Bogotá, a precio de freelance, trabajando directamente contigo.",
      },
      {
        q: "¿Atiendes también a empresas en el resto de Caldas?",
        a: "Sí. Atiendo negocios en Manizales, La Dorada, Chinchiná y el resto de Caldas. Todo 100% remoto — la ubicación no afecta ni los tiempos ni los resultados.",
      },
    ],
  },
  {
    nombre: "Armenia",
    slug: "armenia",
    departamento: "Quindío",
    descripcion: "Capital del Quindío. Ciudad de servicios y turismo cafetero.",
    mercado: "turismo cafetero, servicios, comercio, agroindustria",
    poblacion: "300.000",
    empresas: "negocios turísticos, hoteles, restaurantes, comercio local",
    oportunidad: "turismo cafetero en auge con muy poca presencia digital optimizada",
    keyword_h1: "Diseño Web en Armenia",
    keyword_meta: "diseño web Armenia",
    meta_description:
      "Diseño web en Armenia con SEO para negocios turísticos y comercio local del Quindío. WordPress y Shopify que posicionan en Google. Trabajo remoto.",
    keywords: ["diseño web armenia", "consultor seo armenia", "wordpress armenia quindio", "eje cafetero seo", "seo armenia colombia"],
    sectorEconomicoPrincipal: "Turismo cafetero y servicios locales",
    poblacionAprox: "300.000 habitantes",
    oportunidadLocal: "Turismo cafetero en auge con muy poca presencia digital optimizada",
    ejemplosSectores: ["Hoteles y fincas cafeteras", "Restaurantes y gastronomía", "Turismo de experiencias", "Comercio local"],
    marketSection: {
      h2: "Diseño web en Armenia: el Quindío conectado con Google",
      paragraph:
        "Armenia y el Quindío tienen una economía fuertemente orientada al turismo cafetero, la agroindustria y el comercio local. El mercado digital es pequeño en volumen pero con muy poca competencia — las búsquedas como \"hotel Armenia Quindío\" o \"servicios Armenia\" tienen resultados pobres. Quien construya una base técnica sólida hoy domina esas búsquedas por años.",
      cards: [
        {
          icon: "☕",
          title: "Turismo cafetero",
          description:
            "Fincas, hoteles y experiencias del Quindío. SEO + schema de alojamiento = reservas directas sin pagar comisión a Booking o Airbnb.",
        },
        {
          icon: "🏪",
          title: "Comercio local",
          description:
            "Negocios de Armenia que compiten con grandes cadenas nacionales en búsquedas locales. El SEO local bien hecho nivela el campo de juego.",
        },
        {
          icon: "🌿",
          title: "Agroindustria y café",
          description:
            "Empresas del sector cafetero del Quindío que necesitan presencia digital para llegar a compradores y distribuidores fuera de la región.",
        },
        {
          icon: "💼",
          title: "Servicios y profesionales independientes",
          description:
            "Médicos, abogados, consultores en Armenia. Competencia digital casi nula = posicionamiento rápido con inversión razonable.",
        },
      ],
    },
    faqsLocal: [
      {
        q: "¿Tiene sentido invertir en diseño web y SEO en Armenia si es una ciudad pequeña?",
        a: "Completamente. Precisamente porque el mercado digital en Armenia es pequeño, la competencia en Google es baja. Un sitio bien hecho puede posicionar en top 3 para búsquedas clave en pocos meses — algo imposible en Bogotá o Medellín con el mismo presupuesto.",
      },
      {
        q: "¿Atiendes también a negocios en el resto del Quindío?",
        a: "Sí. Atiendo negocios en Armenia, Calarcá, Montenegro, Quimbaya y el resto del departamento. Todo remoto, mismos tiempos y precios que cualquier cliente en Colombia.",
      },
    ],
  },
];

export function getCiudad(slug: string): Ciudad | undefined {
  return CIUDADES.find((c) => c.slug === slug);
}

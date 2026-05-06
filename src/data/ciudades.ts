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
  // Campos enriquecidos para SEO programático
  sectorEconomicoPrincipal: string;
  poblacionAprox: string;
  oportunidadLocal: string;
  ejemplosSectores: string[];
}

export const CIUDADES: Ciudad[] = [
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
    sectorEconomicoPrincipal: "Industria, moda y agroindustria",
    poblacionAprox: "2.2 millones de habitantes",
    oportunidadLocal: "Más del 60% de pymes caleñas no tienen presencia digital optimizada",
    ejemplosSectores: ["Moda y confecciones", "Alimentos y bebidas", "Servicios profesionales", "Comercio"],
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
    sectorEconomicoPrincipal: "Servicios B2B, tecnología y finanzas",
    poblacionAprox: "8 millones de habitantes",
    oportunidadLocal: "Mayor volumen de búsqueda del país para diseño web y SEO",
    ejemplosSectores: ["Startups y tecnología", "Servicios empresariales", "Salud y educación", "Fintech"],
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
    sectorEconomicoPrincipal: "Comercio exterior y logística portuaria",
    poblacionAprox: "1.2 millones de habitantes",
    oportunidadLocal: "Mercado digital menos saturado que Bogotá y Medellín",
    ejemplosSectores: ["Comercio exterior", "Logística y puertos", "Agroindustria", "Servicios portuarios"],
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
    sectorEconomicoPrincipal: "Turismo, café y comercio regional",
    poblacionAprox: "580.000 habitantes",
    oportunidadLocal: "Alta demanda turística del Eje Cafetero con muy poca inversión digital",
    ejemplosSectores: ["Turismo y hotelería", "Café y agroindustria", "Textiles", "Comercio regional"],
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
    sectorEconomicoPrincipal: "Educación superior y tecnología",
    poblacionAprox: "430.000 habitantes",
    oportunidadLocal: "Alta concentración universitaria con bajo índice de digitalización empresarial",
    ejemplosSectores: ["Instituciones educativas", "Empresas de tecnología", "Café y agroindustria", "Servicios profesionales"],
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
    sectorEconomicoPrincipal: "Turismo cafetero y servicios locales",
    poblacionAprox: "300.000 habitantes",
    oportunidadLocal: "Turismo cafetero en auge con muy poca presencia digital optimizada",
    ejemplosSectores: ["Hoteles y fincas cafeteras", "Restaurantes y gastronomía", "Turismo de experiencias", "Comercio local"],
  },
];

export function getCiudad(slug: string): Ciudad | undefined {
  return CIUDADES.find((c) => c.slug === slug);
}

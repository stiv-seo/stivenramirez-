import type { Testimonial } from "@/types";

export const testimonials: Testimonial[] = [
  // Testimonios entregados por los propios clientes (citas literales). Sin métricas: no las dijeron.
  {
    id: "lbl",
    name: "Juan",
    company: "LBL",
    text: "Ha hecho un trabajo impecable en el posicionamiento SEO. Ha sabido optimizar y ajustar el sitio web estratégicamente para alcanzar grandes resultados, tanto a nivel técnico como en la experiencia de diseño.",
    stars: 5,
  },
  {
    id: "max-henry",
    name: "Max Henry",
    company: "The Loan Ranger y Telluride Live",
    city: "Colorado, EE. UU.",
    text: "Me gustó mucho su gestión y la forma en que me fue guiando durante todo el proceso, sumado a la documentación clara que nos entregó para tomar mejores decisiones. Los sitios web quedaron muy atractivos visualmente y 100% funcionales; supo plasmar exactamente lo que necesitábamos de excelente manera.",
    stars: 5,
  },
  {
    id: "axis33",
    name: "Axis33 Physio",
    company: "Clínica de fisioterapia",
    city: "Brisbane, Australia",
    text: "Destaco especialmente la calidad del diseño y la rapidez con la que logró lanzar el sitio. Supo interpretar con total precisión las necesidades de nuestro proyecto y el comportamiento de nuestros usuarios en Australia.",
    stars: 5,
  },
  {
    id: "evora-eterno",
    name: "Andrés Suescun",
    company: "Évora Eterno",
    city: "Medellín",
    text: "Logró plasmar la elegancia de nuestra joyería a la perfección. El sitio es funcional y logramos posicionar 22 keywords clave en el Top 3 de Google rápidamente.",
    stars: 5,
    metric: {
      label: "Keywords en Top 3",
      before: "4",
      after: "22",
    },
  },
  {
    id: "atta",
    name: "Juan Camila",
    company: "Atta",
    city: "Medellín",
    text: "Entendió la esencia de nuestra marca de bodys. La tienda Shopify vuela en móvil y las ventas orgánicas subieron un 3.2% apenas en el primer mes de lanzamiento.",
    stars: 5,
    metric: {
      label: "Ventas Orgánicas",
      after: "+3.2%",
      note: "Carga <1.5s",
    },
  },
];

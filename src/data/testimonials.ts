import type { Testimonial } from "@/types";

export const testimonials: Testimonial[] = [
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

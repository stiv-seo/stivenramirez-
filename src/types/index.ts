export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  price: string;
  cta: string;
  href: string;
  accent: "teal" | "amber";
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  city: string;
  text: string;
  stars: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface PortfolioCase {
  id: string;
  client: string;
  category: string;
  services: string;
  metrics: { label: string; value: string }[];
  href: string;
  bgColor: string;
}

export interface Tool {
  name: string;
  category: "seo" | "analytics" | "dev" | "design";
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
}

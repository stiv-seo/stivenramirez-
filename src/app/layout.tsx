import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import { webSiteSchema } from "@/lib/schema";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stivenramirez.com"),
  title: {
    default: "Stiven Ramírez | Consultor SEO & Diseñador Web Colombia",
    template: "%s · Stiven Ramírez",
  },
  description:
    "Diseño webs WordPress y Shopify con SEO integrado desde el primer día. Posiciona en Google y genera ventas. Medellín, Colombia.",
  keywords: [
    "diseño web colombia",
    "consultor seo colombia",
    "wordpress seo",
    "shopify seo",
    "diseño web medellin",
  ],
  authors: [{ name: "Stiven Ramírez" }],
  creator: "Stiven Ramírez",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://stivenramirez.com",
    siteName: "Stiven Ramírez",
  },
};

const websiteSchema = webSiteSchema();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${jakartaSans.variable} ${dmSans.variable}`}
    >
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {children}
      </body>
    </html>
  );
}

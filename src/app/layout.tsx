import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import Script from "next/script";
import { webSiteSchema, organizationSchema } from "@/lib/schema";
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
    default: "Stiven Ramírez | Consultor SEO & Diseño Web Medellín",
    template: "%s | Stiven Ramírez",
  },
  verification: {
    google: "odevJDKr6OjReuoKXOGtgkC8Z7h92wx88WMxXnfuyp4",
  },
  description:
    "Consultor SEO freelance y diseñador web en Medellín. WordPress y Shopify que posicionan en Google desde el día 1. Para pymes sin agencia.",
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://stivenramirez.com",
    siteName: "Stiven Ramírez",
  },
  alternates: {
    canonical: "https://stivenramirez.com/",
    languages: {
      "es-CO": "https://stivenramirez.com/",
      "x-default": "https://stivenramirez.com/",
    },
  },
};

const websiteSchema = webSiteSchema();
const orgSchema = organizationSchema();

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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5TM9G6BH');`,
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5TM9G6BH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {children}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-NE7LKWFF6B"
        />
        <Script strategy="afterInteractive" id="ga4-init">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-NE7LKWFF6B');`}
        </Script>
      </body>
    </html>
  );
}

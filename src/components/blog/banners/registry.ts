import type { ComponentType } from "react";
import { BannerWordpressVsShopify } from "./BannerWordpressVsShopify";
import { BannerAgenciaVsFreelancer } from "./BannerAgenciaVsFreelancer";
import { BannerQueEsElSeo } from "./BannerQueEsElSeo";
import { BannerCuantoCuestaSeo } from "./BannerCuantoCuestaSeo";
import { BannerSeoShopifyChecklist } from "./BannerSeoShopifyChecklist";
import { BannerGoogleMaps } from "./BannerGoogleMaps";
import { BannerErroresDisenoWebSeo } from "./BannerErroresDisenoWebSeo";
import { BannerSeoRestaurantes } from "./BannerSeoRestaurantes";
import { BannerCuantoCobraDiseñadorWeb } from "./BannerCuantoCobraDiseñadorWeb";
import { BannerSitioWebSinClientes } from "./BannerSitioWebSinClientes";
import { BannerSeoRestaurantesMedellin } from "./BannerSeoRestaurantesMedellin";
import { BannerSeoClinicasColombia } from "./BannerSeoClinicasColombia";

export const bannerRegistry: Record<string, ComponentType> = {
  "wordpress-vs-shopify-colombia":              BannerWordpressVsShopify,
  "agencia-seo-vs-freelancer-colombia":         BannerAgenciaVsFreelancer,
  "que-es-el-seo-colombia":                     BannerQueEsElSeo,
  "cuanto-cuesta-sitio-web-colombia":           BannerCuantoCuestaSeo,
  "cuanto-cuesta-el-seo-colombia":              BannerCuantoCuestaSeo,
  "seo-shopify-checklist":                      BannerSeoShopifyChecklist,
  "como-aparecer-google-maps":                  BannerGoogleMaps,
  "errores-diseno-web-seo":                     BannerErroresDisenoWebSeo,
  "seo-para-restaurantes-colombia":             BannerSeoRestaurantes,
  "cuanto-cobra-disenador-web-colombia":        BannerCuantoCobraDiseñadorWeb,
  "por-que-tu-sitio-web-no-genera-clientes":    BannerSitioWebSinClientes,
  "seo-local-restaurantes-medellin":            BannerSeoRestaurantesMedellin,
  "seo-para-clinicas-colombia":                 BannerSeoClinicasColombia,
};

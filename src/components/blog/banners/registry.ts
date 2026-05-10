import type { ComponentType } from "react";
import { BannerWordpressVsShopify } from "./BannerWordpressVsShopify";
import { BannerAgenciaVsFreelancer } from "./BannerAgenciaVsFreelancer";
import { BannerQueEsElSeo } from "./BannerQueEsElSeo";
import { BannerCuantoCuestaSeo } from "./BannerCuantoCuestaSeo";
import { BannerSeoShopifyChecklist } from "./BannerSeoShopifyChecklist";
import { BannerGoogleMaps } from "./BannerGoogleMaps";
import { BannerErroresDisenoWebSeo } from "./BannerErroresDisenoWebSeo";

export const bannerRegistry: Record<string, ComponentType> = {
  "wordpress-vs-shopify-colombia":      BannerWordpressVsShopify,
  "agencia-seo-vs-freelancer-colombia": BannerAgenciaVsFreelancer,
  "que-es-el-seo-colombia":             BannerQueEsElSeo,
  "cuanto-cuesta-sitio-web-colombia":   BannerCuantoCuestaSeo,
  "seo-shopify-checklist":              BannerSeoShopifyChecklist,
  "como-aparecer-google-maps":          BannerGoogleMaps,
  "errores-diseno-web-seo":             BannerErroresDisenoWebSeo,
};

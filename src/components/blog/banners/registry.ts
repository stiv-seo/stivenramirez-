import type { ComponentType } from "react";
import { BannerWordpressVsShopify } from "./BannerWordpressVsShopify";
import { BannerAgenciaVsFreelancer } from "./BannerAgenciaVsFreelancer";
import { BannerQueEsElSeo } from "./BannerQueEsElSeo";

export const bannerRegistry: Record<string, ComponentType> = {
  "wordpress-vs-shopify-colombia":      BannerWordpressVsShopify,
  "agencia-seo-vs-freelancer-colombia": BannerAgenciaVsFreelancer,
  "que-es-el-seo-colombia":             BannerQueEsElSeo,
};

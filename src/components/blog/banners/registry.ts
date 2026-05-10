import type { ComponentType } from "react";
import { BannerWordpressVsShopify } from "./BannerWordpressVsShopify";
import { BannerAgenciaVsFreelancer } from "./BannerAgenciaVsFreelancer";

export const bannerRegistry: Record<string, ComponentType> = {
  "wordpress-vs-shopify-colombia":    BannerWordpressVsShopify,
  "agencia-seo-vs-freelancer-colombia": BannerAgenciaVsFreelancer,
};

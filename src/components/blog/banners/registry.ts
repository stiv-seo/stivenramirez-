import type { ComponentType } from "react";
import { BannerWordpressVsShopify } from "./BannerWordpressVsShopify";

export const bannerRegistry: Record<string, ComponentType> = {
  "wordpress-vs-shopify-colombia": BannerWordpressVsShopify,
};

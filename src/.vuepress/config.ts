import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "TuneFree",
  description: "TuneFree官方网站",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

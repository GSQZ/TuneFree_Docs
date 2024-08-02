import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/tunefree_docs/",

  lang: "zh-CN",
  title: "TuneFree",
  description: "TuneFree官方网站",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

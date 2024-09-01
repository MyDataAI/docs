import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/docs/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "MyDataAI",
      description: "MyDataAI-AI驱动数据",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});

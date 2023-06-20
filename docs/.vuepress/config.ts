import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

const base = process.env["BASE"] ? '/':'/coding-time/'

export default defineUserConfig({
  base,

  dest: "./dist",

  head:[
    ['link', { rel: 'icon', href: '/assets/image/favicon.ico' }]
  ],  
  locales: {
    "/": {
      lang: "zh-CN",
      title: "",
      description: "编程时光",
    },
  },

  theme,

  shouldPrefetch: false,
});

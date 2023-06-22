import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

const base = process.env["BASE"] ? '/':'/coding-time/'

export default defineUserConfig({
  base,

  dest: "./dist",

  title: "现代Javascript高级教程",
  head:[
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['link', { rel: 'icon', href: '/assets/image/favicon.ico' }]
  ],  
  markdown: {
    // @ts-ignore
    externalLinks: { target: '_blank', rel: 'nofollow noopener noreferrer' }
  },
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

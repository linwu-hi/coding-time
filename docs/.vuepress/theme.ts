import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

const hostname =
  process.env["HOSTNAME"] || "https://www.coding-time.cn";

export default hopeTheme(
  {
    hostname,

    author: {
      name: "linwu",
      url: "https://www.coding-time.cn",
      email:'linwu.hi@gmail.com'
    },

    iconAssets: "fontawesome-with-brands",

    logo: "/logo.svg",
    navTitle:'现代Javascript高级教程',

    repo: "https://github.com/linwu-hi/coding-time",

    docsDir: "docs/",


    locales: {

      /**
       * Chinese locale config
       */
      "/": {
        // navbar
        navbar: zhNavbar,

        // sidebar
        sidebar: zhSidebar,

        footer: "默认页脚",

        displayFooter: true,

        // page meta
        metaLocales: {
          editLink: "在 GitHub 上编辑此页",
        },
      },
    },

    encrypt: {
      config: {
        "/demo/encrypt.html": ["1234"],
        "/zh/demo/encrypt.html": ["1234"],
      },
    },
    plugins: {
      comment: {
        provider: "Giscus",
        repo: "linwu-hi/coding-time",
        repoId: "R_kgDOJxIk0A",
        category: "Announcements",
        categoryId: "DIC_kwDOJxIk0M4CXWCp",
      },

      // All features are enabled for demo, only preserve features you need here
      mdEnhance: {
        align: true,
        attrs: true,
        chart: true,
        codetabs: true,
        demo: true,
        echarts: true,
        figure: true,
        flowchart: true,
        gfm: true,
        imgLazyload: true,
        imgSize: true,
        include: true,
        katex: true,
        mark: true,
        mermaid: true,
        playground: {
          presets: ["ts", "vue"],
        },
        presentation: {
          plugins: ["highlight", "math", "search", "notes", "zoom"],
        },
        stylize: [
          {
            matcher: "Recommended",
            replacer: ({ tag }) => {
              if (tag === "em")
                return {
                  tag: "Badge",
                  attrs: { type: "tip" },
                  content: "Recommended",
                };
            },
          },
        ],
        sub: true,
        sup: true,
        tabs: true,
        vPre: true,
        vuePlayground: true,
      },

      pwa: {
        favicon: "/favicon.ico",
        cacheHTML: true,
        cachePic: true,
        appendBase: true,
        apple: {
          icon: "/assets/icon/apple-icon-152.png",
          statusBarColor: "black",
        },
        msTile: {
          image: "/assets/icon/ms-icon-144.png",
          color: "#ffffff",
        },
        manifest: {
          icons: [
            {
              src: "/assets/icon/chrome-mask-512.png",
              sizes: "512x512",
              purpose: "maskable",
              type: "image/png",
            },
            {
              src: "/assets/icon/chrome-mask-192.png",
              sizes: "192x192",
              purpose: "maskable",
              type: "image/png",
            },
            {
              src: "/assets/icon/chrome-512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "/assets/icon/chrome-192.png",
              sizes: "192x192",
              type: "image/png",
            },
          ],
          shortcuts: [
            {
              name: "Demo",
              short_name: "Demo",
              url: "/demo/",
              icons: [
                {
                  src: "/assets/icon/guide-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
              ],
            },
          ],
        },
      },

      seo:
        hostname === "https://www.coding-time.cn"
          ? {}
          : { canonical: "https://www.coding-time.cn" },
    },
  },
  { custom: true }
);

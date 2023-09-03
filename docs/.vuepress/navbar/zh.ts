import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: '现代Javascript高级教程',
    link: "/js/preamble",
    icon: "javascript",
  },
  {
    text: '深入浅出Dart',
    link: "/dart/preamble",
    icon:"ability"
  },
  {
    text: 'linwu的算法笔记',
    link:"/lc/preamble",
    icon: "note",
  },
  {
    text: '现代Typescript高级教程',
    link: "/ts/preamble",
    icon: "typescript",
  },
  {
    text: '谷歌插件小册',
    link: 'https://gitee.com/linwu-hi/coding-time-chrome',
  },
  {
    text: 'Markdown编辑器',
    link: '/md',
  },
]);

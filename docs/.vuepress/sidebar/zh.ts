import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  '/': [
    {
      text: "基础",
      prefix:'base/',
      link:'base/JavaScript作用域',
      children:[
        'JavaScript作用域',
        'Javascript执行上下文与闭包',
        'JavaScript函数上下文和this关键字',
        'JavaScript数组',
        'JavaScript对象',
        '类型转换',
        'JavaScript中的原型与继承',
        '深入理解事件处理和传播机制',
      ],
    },
    {
      text: "进阶",
      prefix:'advance/',
      link:'advance/前端模块化',
      children: [
        '前端模块化',
        'JavaScript引擎的工作原理',
        'JavaScript引擎的垃圾回收机制',
        '深入理解JavaScript中的WeakMap和WeakSet',
        '面向对象之Class',
        'JavaScript函数式编程',
        'Iterator 迭代器：简化集合遍历的利器',
        '深入理解Proxy',
        'JavaScript深拷贝与浅拷贝',
        '深入理解JSON.stringify',
        '详解前端数据存储',
        '装饰器',
        '页面通信',
        'Shadow DOM',
        'Date类：日期和时间处理',
        '正则表达式的常见问题与练习',
        'JavaScript Error类',
      ]
    },
    {
      text: "异步",
      prefix:'async/',
      link:'async/JavaScript中的异步编程与Promise',
      children:[
        'JavaScript中的异步编程与Promise',
        '实现Promise',
        'JavaScript中的Generator函数',
        '异步的终极解决方案',
      ]
    },
    {
      text: "性能",
      prefix:'perf/',
      link:'perf/监测DOM变化的强大工具',
      children:[
        '监测DOM变化的强大工具',
        '优化动画和渲染的利器',
        '提升网页性能的利器',
        '页面生命周期',
      ]
    }
  ],
});

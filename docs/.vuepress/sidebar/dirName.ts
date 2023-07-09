export const dirName = {
 '/js/':[{
    text: '现代JavaScript高级教程',
    link:'preamble',
    children: [
      'preamble',
      {
        text: "基础",
        prefix: 'base/',
        link: 'base/JavaScript作用域',
        children: [
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
        prefix: 'advance/',
        link: 'advance/前端模块化',
        children: [
          '前端模块化',
          'JavaScript引擎的工作原理',
          'JavaScript引擎的垃圾回收机制',
          '深入理解JavaScript中的WeakMap和WeakSet',
          '面向对象之Class',
          'JavaScript函数式编程',
          'Iterator迭代器：简化集合遍历的利器',
          '深入理解Proxy',
          'JavaScript深拷贝与浅拷贝',
          '深入理解JSON.stringify',
          '详解前端数据存储',
          '装饰器',
          '页面通信',
          'ShadowDOM',
          'Date类：日期和时间处理',
          '正则表达式的常见问题与练习',
          'Error类',
        ]
      },
      {
        text: "异步",
        prefix: 'async/',
        link: 'async/JavaScript中的异步编程与Promise',
        children: [
          'JavaScript中的异步编程与Promise',
          '实现Promise',
          'JavaScript中的Generator函数',
          '异步的终极解决方案',
        ]
      },
      {
        text: "性能",
        prefix: 'perf/',
        link: 'perf/监测DOM变化的强大工具',
        children: [
          '监测DOM变化的强大工具',
          '优化动画和渲染的利器',
          '提升网页性能的利器',
          '页面生命周期',
        ]
      }
    ]
  }],
  '/ts/':[{
    text:"现代Typescript高级教程",
    link:'preamble',
    children:[
      'preamble',
      {
        text:'基础',
        prefix:'base/',
        link:'base/概述',
        children:[
          '概述',
          '类型',
          '函数',
          '接口和类',
          '枚举和泛型',
          '命名空间和模块'
        ]
      },
      {
        text:'进阶',
        prefix:'advance/',
        link:'advance/类型系统',
        children:[
          '类型系统',
          '高级类型',
          '类型推断',
          '类型守卫',
          '泛型和类型体操',
          '结构化类型',
          '协变和逆变',
          '扩展类型定义',
          '装饰器',
          '解读TSConfig'
        ]
      },
      {
        text:'实战',
        prefix:'practice/',
        link:'practice/fetch',
        children:[
          'fetch',
        ]
      }
    ]
  }],
  '/dart/':[{
    text:'深入浅出Dart',
    link:'preamble',
    children:[
      'preamble',
      {
        text:'基础',
        prefix:'base/',
        link:'base/搭建环境',
        children:[
          '搭建环境',
          '变量与数据类型',
          '运算符',
          '流程控制',
          '函数',
          '集合类型'
        ]
      },
      {
        text:'面向对象',
        prefix:'oop/',
        link:'oop/类和对象',
        children:[
          '类和对象',
          '类的继承',
          '多态',
          '更多特性'
        ]
      },
      {
        text:'进阶',
        prefix:'advance/',
        link:'advance/Dart模块化',
        children:[
          'Dart模块化',
          'Dart库的使用和创建',
          'Dart的命令行和Web编程',
          'Dart中使用JSON',
          'Dart的异步编程',
          '事件循环和协程机制',
          'Dart的Stream',
          'Dart的Isolate',
          'Dart中的泛型',
          '空安全',
          'Dart测试',
        ]
      },
      {
        text:'Flutter与Dart实战',
        prefix:'flutter/',
        link:'flutter/简介',
        children:[
          '简介',
          '配置',
          '编写第一个Flutter应用',
          'Widget',
          '状态管理',
          'Flutter路由管理',
          'Material和Cupertino组件',
          '网络请求',
          'TODO应用',
        ]
      }
    ]
  }]
}
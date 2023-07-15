# 序言

> 写给前端同学的算法笔记📒，这是去腾讯之前整理的算法笔记，跟着刷一遍，去面试字节、腾讯等其它大厂就轻松多了



- 数据结构和算法的重要性： 算法被称为程序的灵魂，因为优秀的算法能在处理海量数据时保持高速计算能力。计算框架和缓存技术的核心功能就源于算法。在实际工作中，一个高效的算法可以使支持数千万在线用户的服务器程序稳定运行。数据结构和算法也是许多一线IT公司面试的重要部分。如果程序员不想永远只是编写代码，那么就需要花时间研究数据结构和算法。


- 经典的算法面试题： 有一些经典的算法问题常常出现在面试中，如字符串匹配问题、动态规划问题。这些问题涉及到的算法包括暴力匹配、KMP 算法、分治算法、回溯算法、深度优先搜索 (DFS) 和贪心算法。解决这些问题不仅需要理解和掌握相关的算法，还需要能够灵活运用这些算法来优化程序。


- 本笔记📒深入讲解数据结构和算法，内容系统完整，非常适合想要深入理解数据结构和算法的学习者。我们采用了"应用场景 -> 数据结构或算法 -> 剖析原理 -> 分析实现步骤 -> 代码实现"的教学步骤，力求通俗易懂。

- 数据结构和算法的内容介绍： 本课程覆盖了各种数据结构和算法，包括但不限于字符串匹配算法、分治算法、回溯算法、深度优先搜索 (DFS) 和贪心算法。我们会通过具体的应用场，来讲解这些数据结构和算法的原理和实现步骤。


## 📒笔记目录

- [数据结构](docs/data-structures/linked-list.md)
  - [linked-list](docs/data-structures/linked-list.md)
  - [doubly-linked-list](docs/data-structures/doubly-linked-list.md)
  - [queue](docs/data-structures/queue.md)
  - [stack](docs/data-structures/stack.md)
  - [hash-table](docs/data-structures/hash-table.md)
  - [graph](docs/data-structures/graph.md)
  - [heap](docs/data-structures/heap.md)
  - [lru-cache](docs/data-structures/lru-cache.md)
  - [priority-queue](docs/data-structures/priority-queue.md)
  - [disjoint-set](docs/data-structures/disjoint-set.md)
  - [bloom-filter](docs/data-structures/bloom-filter.md)
  - [trie](docs/data-structures/trie.md)
- [算法](docs/algorithms/binary-search.md)
  - [排序](docs/algorithms/sorting/bubble-sort.md)
  - [搜索](docs/algorithms/search/binary-search.md)
  - [链表](docs/algorithms/linked-list/traversal.md)
  - [栈](docs/algorithms/stack/preamble.md)
  - [队列](docs/algorithms/queue/preamble.md)
  - [双指针](docs/algorithms/two-pointers/preamble.md)
  - [滑动窗口](docs/algorithms/sliding-window/preamble.md)
  - [动态规划](docs/algorithms/dynamic-programming/preamble.md)
  - [贪心算法](docs/algorithms/greedy-algorithm/preamble.md)
  - [字符串](docs/algorithms/string/rabin-karp.md)
  - [树](docs/algorithms/tree/breadth-first-search.md)
  - [图](docs/algorithms/graph/breadth-first-search.md)
  - [统计数据](docs/algorithms/statistics/weighted-random.md)


## 笔记代码依赖

### Comparator

```js
export default class Comparator {
  /**
   * 构造函数.
   * @param {function(a: *, b: *)} [compareFunction] - 可以是自定义的比较函数，该函数可以比较自定义的对象.
   */
  constructor(compareFunction) {
    this.compare = compareFunction || Comparator.defaultCompareFunction;
  }

  /**
   * 默认比较函数。假设 "a" 和 "b" 是字符串或数字。
   * @param {(string|number)} a
   * @param {(string|number)} b
   * @returns {number}
   */
  static defaultCompareFunction(a, b) {
    if (a === b) {
      return 0;
    }

    return a < b ? -1 : 1;
  }

  /**
   * 检查两个变量是否相等。
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  equal(a, b) {
    return this.compare(a, b) === 0;
  }

  /**
   * 检查变量 "a" 是否小于 "b"。
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  lessThan(a, b) {
    return this.compare(a, b) < 0;
  }

  /**
   * 检查变量 "a" 是否大于 "b"。
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  greaterThan(a, b) {
    return this.compare(a, b) > 0;
  }

  /**
   * 检查变量 "a" 是否小于或等于 "b"。
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  lessThanOrEqual(a, b) {
    return this.lessThan(a, b) || this.equal(a, b);
  }

  /**
   * 检查变量 "a" 是否大于或等于 "b"。
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  greaterThanOrEqual(a, b) {
    return this.greaterThan(a, b) || this.equal(a, b);
  }

  /**
   * 反转比较顺序。
   */
  reverse() {
    const compareOriginal = this.compare;
    this.compare = (a, b) => compareOriginal(b, a);
  }
}

```
## 关于我

笔名`linwu`,一枚前端开发工程师，曾入职腾讯等多家知名互联网公司，后面我会持续分享精品课程，欢迎持续关注


## 关注公众号

> 关注公众号获取代码以及最新教程和文章，也可以联系作者，获取帮助

![](https://cdn.jsdelivr.net/gh/linwu-hi/coding-time-typescript@main/docs/.vuepress/public/assets/image/wx.png)

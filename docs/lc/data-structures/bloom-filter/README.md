# 布隆过滤器


**布隆过滤器**是一种空间有效的概率数据结构，设计用来测试一个元素是否在一个集合中。它的设计目标是极快的速度和最小的内存使用，但可能会产生误报。可能会有误报，但不会有漏报 —— 换句话说，查询返回的是"可能在集合中"或"绝对不在集合中"。

布隆提出这种技术是为了应对那些使用"常规"无误差哈希技术处理会需要不切实际大量内存的源数据的应用。

## 算法描述

一个空的布隆过滤器是一个包含`m`位的位数组，所有位都设置为`0`。还必须定义`k`个不同的哈希函数，每一个都将某个集合元素映射或哈希到`m`个数组位置中的一个，生成均匀随机分布。通常，`k`是一个常数，远小于`m`，`m`与要添加的元素数量成比例；`k`的确切选择和`m`的比例常数由过滤器预期的误报率确定。

下面是一个表示集合`{x, y, z}`的布隆过滤器的例子。彩色箭头显示了每个集合元素映射到的位数组中的位置。元素`w`不在集合`{x, y, z}`中，因为它哈希到一个包含`0`的位数组位置。对于此图，`m = 18`，`k = 3`。

![Bloom Filter](https://upload.wikimedia.org/wikipedia/commons/a/ac/Bloom_filter.svg)

## 操作

布隆过滤器可以执行两个主要操作：_插入_ 和 _搜索_。搜索可能会导致误报。删除操作是不可能的。

换句话说，过滤器可以接收项目。当我们去检查一个项目是否之前已经插入，它可以告诉我们"否"或者"可能"。

插入和搜索都是`O(1)`操作。

## 构造过滤器

布隆过滤器的创建是通过分配一定的大小。在我们的例子中，我们使用`100`作为默认长度。所有的位置都初始化为`false`。

### 插入

在插入过程中，会使用多个哈希函数，我们的例子中使用了`3`个哈希函数，对输入进行哈希。这些哈希函数输出索引。在每个接收到的索引处，我们简单地将布隆过滤器中的值更改为`true`。

###

 搜索

在搜索过程中，调用相同的哈希函数并用于哈希输入。然后我们检查在布隆过滤器中接收到的索引是否_全部_为`true`。如果它们_全部_为`true`，我们知道布隆过滤器可能已经插入过这个值。

然而，这并不确定，因为有可能其他之前插入的值将这些位置的值改变为`true`。这些值并不一定是由当前搜索的项目设为`true`的。除非只有一个项目被插入，否则无法绝对确定。

在检查由我们的哈希函数返回的布隆过滤器索引时，如果其中任何一个值为`false`，我们可以确定地知道该项目之前未被插入。

## 误报

误报的概率由三个因素决定：布隆过滤器的大小，我们使用的哈希函数数量，以及已经插入到过滤器中的项目数量。

计算误报概率的公式是：

( 1 - e <sup>-kn/m</sup> ) <sup>k</sup>

`k` = 哈希函数的数量

`m` = 过滤器大小

`n` = 插入的项目数量

这些变量，`k`，`m`，和`n`，应该根据误报的接受程度进行选择。如果选择的值导致的概率过高，那么应该调整这些值并重新计算概率。

## 应用

布隆过滤器可以用于博客网站。如果目标是只向读者展示他们从未见过的文章，布隆过滤器就很完美。它可以存储基于文章的哈希值。用户阅读了几篇文章后，它们可以被插入到过滤器中。下次用户访问网站时，这些文章可以被从结果中过滤掉。

一些文章不可避免地会被误过滤掉，但这种成本是可以接受的。只要他们每次访问网站时都能看到新的文章，用户就不会介意看不到几篇文章。

## 完整代码

```js

export default class BloomFilter {
  /**
   * @param {number} size - 存储区的大小。
   */
  constructor(size = 100) {
    // 布隆过滤器的大小直接影响误报的可能性。
    // 大小越大，误报的可能性越低。
    this.size = size;
    this.storage = this.createStore(size);
  }

  /**
   * @param {string} item
   */
  insert(item) {
    const hashValues = this.getHashValues(item);

    // 将每个hash值索引设置为true。
    hashValues.forEach((val) => this.storage.setValue(val));
  }

  /**
   * @param {string} item
   * @return {boolean}
   */
  mayContain(item) {
    const hashValues = this.getHashValues(item);

    for (let hashIndex = 0; hashIndex < hashValues.length; hashIndex += 1) {
      if (!this.storage.getValue(hashValues[hashIndex])) {
        // 我们知道该项目肯定未被插入。
        return false;
      }
    }

    // 该项可能插入或可能未插入。
    return true;
  }

  /**
   * 为过滤器创建数据存储。
   * 我们使用此方法生成存储以封装数据本身并只提供访问
   * 必要方法的接口。
   *
   * @param {number} size
   * @return {Object}
   */
  createStore(size) {
    const storage = [];

    // 将所有索引初始化为false
    for (let storageCellIndex = 0; storageCellIndex < size; storageCellIndex += 1) {
      storage.push(false);
    }

    const storageInterface = {
      getValue(index) {
        return storage[index];
      },
      setValue(index) {
        storage[index] = true;
      },
    };

    return storageInterface;
  }

  /**
   * @param {string} item
   * @return {number}
   */
  hash1(item) {
    let hash = 0;

    for (let charIndex = 0; charIndex < item.length; charIndex += 1) {
      const char = item.charCodeAt(charIndex);
      hash = (hash << 5) + hash + char;
      hash &= hash; // 转换为32位整数
      hash = Math.abs(hash);
    }

    return hash % this.size;
  }

  /**
   * @param {string} item
   * @return {number}
   */
  hash2(item) {
    let hash = 5381;

    for (let charIndex = 0; charIndex < item.length; charIndex += 1) {
      const char = item.charCodeAt(charIndex);
      hash = (hash << 5) + hash + char; /* hash * 33 + c */
    }

    return Math.abs(hash % this.size);
  }

  /**
   * @param {string} item
   * @return {number}
   */
  hash3(item) {
    let hash = 0;

    for (let charIndex = 0; charIndex < item.length; charIndex += 1) {
      const char = item.charCodeAt(charIndex);
      hash = (hash << 5) - hash;
      hash += char;
      hash &= hash; // 转换为32位整数
    }

    return Math.abs(hash % this.size);
  }

  /**
   * 在输入上运行所有3个哈希函数并返回结果数组。
   *
   * @param {string} item
   * @return {number[]}
   */
  getHashValues(item) {
    return [
      this.hash1(item),
      this.hash2(item),
      this.hash3(item),
    ];
  }
}

```

## 参考

- [维基百科](https://en.wikipedia.org/wiki/Bloom_filter)
- [布隆过滤器实例讲解](http://llimllib.github.io/bloomfilter-tutorial/)
- [计算误报概率](https://hur.st/bloomfilter/?n=4&p=&m=18&k=3)
- [Medium上的布隆过滤器](https://blog.medium.com/what-are-bloom-filters-1ec2a50c68ff)
- [YouTube上的布隆过滤器](https://www.youtube.com/watch?v=bEmBh1HtYrw)
# 不相交集

**不相交集**数据结构（也称为并查集或者合并-查找集）是一种跟踪一组元素划分为许多不相交（非重叠）子集的数据结构。它提供近乎常数时间的操作（受到阿克曼函数的限制）来**添加新集合**，**合并现有集合**，以及**确定元素是否在同一集合中**。除了许多其他用途（见应用部分），不相交集在 Kruskal's 算法中起着关键作用，该算法用于查找图的最小生成树。

![不相交集](https://upload.wikimedia.org/wikipedia/commons/6/67/Dsu_disjoint_sets_init.svg)

_MakeSet_ 创建了 8 个单元素集合。

![不相交集](https://upload.wikimedia.org/wikipedia/commons/a/ac/Dsu_disjoint_sets_final.svg)

在进行了一些 _Union_ 操作之后，一些集合被组合在一起。


## 完整代码

### DisjointSetItem

```js
export default class DisjointSetItem {
  /**
   * @param {*} value
   * @param {function(value: *)} [keyCallback]
   */
  constructor(value, keyCallback) {
    // 存储元素值
    this.value = value;
    // 键回调函数用于生成键
    this.keyCallback = keyCallback;
    // 父元素，默认为 null
    this.parent = null;
    // 子元素，初始为空对象
    this.children = {};
  }

  /**
   * @return {*}
   */
  getKey() {
    // 允许用户定义自定义键生成器。
    if (this.keyCallback) {
      return this.keyCallback(this.value);
    }

    // 否则，默认使用 value 作为键。
    return this.value;
  }

  /**
   * @return {DisjointSetItem}
   */
  getRoot() {
    // 如果当前元素是根元素，返回自身，否则返回父元素的根。
    return this.isRoot() ? this : this.parent.getRoot();
  }

  /**
   * @return {boolean}
   */
  isRoot() {
    // 如果 parent 为 null，则当前元素为根元素
    return this.parent === null;
  }

  /**
   * Rank基本上意味着所有祖先的数量。
   *
   * @return {number}
   */
  getRank() {
    // 如果没有子元素，rank 为 0
    if (this.getChildren().length === 0) {
      return 0;
    }

    let rank = 0;

    /** @var {DisjointSetItem} child */
    this.getChildren().forEach((child) => {
      // 计算子节点本身。
      rank += 1;

      // 也添加当前子节点的所有子节点。
      rank += child.getRank();
    });

    return rank;
  }

  /**
   * @return {DisjointSetItem[]}
   */
  getChildren() {
    // 返回所有子元素
    return Object.values(this.children);
  }

  /**
   * @param {DisjointSetItem} parentItem
   * @param {boolean} forceSettingParentChild
   * @return {DisjointSetItem}
   */
  setParent(parentItem, forceSettingParentChild = true) {
    // 设置父元素
    this.parent = parentItem;
    // 如果 forceSettingParentChild 为 true，则把当前元素添加到父元素的子元素中
    if (forceSettingParentChild) {
      parentItem.addChild(this);
    }

    return this;
  }

  /**
   * @param {DisjointSetItem} childItem
   * @return {DisjointSetItem}
   */
  addChild(childItem) {
    // 将元素添加到子元素
    this.children[childItem.getKey()] = childItem;
    // 将当前元素设置为添加的元素的父元素
    childItem.setParent(this, false);

    return this;
  }
}

```
###  DisjointSet

```js
export default class DisjointSet {
  /**
   * @param {function(value: *)} [keyCallback]
   */
  // 构造函数，参数是键回调函数
  constructor(keyCallback) {
    this.keyCallback = keyCallback; // 键回调函数
    this.items = {}; // 存储元素
  }

  /**
   * @param {*} itemValue
   * @return {DisjointSet}
   */
  // 创建新的集合
  makeSet(itemValue) {
    const disjointSetItem = new DisjointSetItem(itemValue, this.keyCallback);

    if (!this.items[disjointSetItem.getKey()]) {
      // 如果元素尚未存在，添加新元素
      this.items[disjointSetItem.getKey()] = disjointSetItem;
    }

    return this;
  }

  /**
   * 查找集合的表示节点。
   *
   * @param {*} itemValue
   * @return {(string|null)}
   */
  find(itemValue) {
    const templateDisjointItem = new DisjointSetItem(itemValue, this.keyCallback);

    // 尝试查找元素本身
    const requiredDisjointItem = this.items[templateDisjointItem.getKey()];

    if (!requiredDisjointItem) {
      return null;
    }

    return requiredDisjointItem.getRoot().getKey();
  }

  /**
   * 按秩合并。
   *
   * @param {*} valueA
   * @param {*} valueB
   * @return {DisjointSet}
   */
  union(valueA, valueB) {
    const rootKeyA = this.find(valueA);
    const rootKeyB = this.find(valueB);

    if (rootKeyA === null || rootKeyB === null) {
      throw new Error('一个或两个值不在集合中');
    }

    if (rootKeyA === rootKeyB) {
      // 如果两个元素已经在同一集合中，只需要返回其键
      return this;
    }

    const rootA = this.items[rootKeyA];
    const rootB = this.items[rootKeyB];

    if (rootA.getRank() < rootB.getRank()) {
      // 如果rootB的树更大，那么rootB成为新的根
      rootB.addChild(rootA);

      return this;
    }

    // 如果rootA的树更大，那么rootA成为新的根
    rootA.addChild(rootB);

    return this;
  }

  /**
   * @param {*} valueA
   * @param {*} valueB
   * @return {boolean}
   */
  // 判断两个值是否在同一个集合中
  inSameSet(valueA, valueB) {
    const rootKeyA = this.find(valueA);
    const rootKeyB = this.find(valueB);

    if (rootKeyA === null || rootKeyB === null) {
      throw new Error('一个或两个值不在集合中');
    }

    return rootKeyA === rootKeyB;
  }
}
```

## 参考文献

- [维基百科](https://en.wikipedia.org/wiki/Disjoint-set_data_structure)
- [Abdul Bari 在 YouTube 上的教程](https://www.youtube.com/watch?v=wU6udHRIkcc&index=14&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
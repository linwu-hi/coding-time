# Fenwick树 / 二进制索引树

在计算机科学中，**Fenwick树**或**二进制索引树**是一种可以高效更新元素和计算前缀和的数据结构。

与一个平坦的数字数组相比，Fenwick树在两个操作之间实现了更好的平衡：元素更新和前缀和计算。在一个平坦的`n`个数字的数组中，你可以选择存储元素或前缀和。在第一种情况下，计算前缀和需要线性时间；在第二种情况下，更新数组元素需要线性时间（在两种情况下，另一个操作可以在常数时间内完成）。Fenwick树可以在`O(log n)`时间内执行这两种操作。这是通过将数字表示为一棵树来实现的，其中每个节点的值是该子树中数字的和。树结构允许仅使用`O(log n)`个节点访问执行操作。

## 实现说明

二进制索引树表示为一个数组。二进制索引树的每个节点存储了给定数组的一些元素的和。二进制索引树的大小等于输入数组的大小`n`。在当前的实现中，我们将大小设置为`n+1`以方便实现。所有的索引都是基于1的。

在下图中，您可以看到通过逐个插入来创建数组`[1, 2, 3, 4, 5]`的二进制索引树的动画示例。

![Binary Indexed Tree](https://www.geeksforgeeks.org/wp-content/uploads/BITSum.png)

在下图中，您可以看到一个动画示例，通过插入的方式创建了数组`[1, 2, 3, 4, 5]`的二进制索引树。

![Fenwick Tree](https://upload.wikimedia.org/wikipedia/commons/d/dc/BITDemo.gif)


## 完整代码

```js
export default class FenwickTree {
  /**
   * Constructor creates empty fenwick tree of size 'arraySize',
   * however, array size is size+1, because index is 1-based.
   *
   * @param  {number} arraySize
   */
  constructor(arraySize) {
    this.arraySize = arraySize;

    // Fill tree array with zeros.
    this.treeArray = Array(this.arraySize + 1).fill(0);
  }

  /**
   * Adds value to existing value at position.
   *
   * @param  {number} position
   * @param  {number} value
   * @return {FenwickTree}
   */
  increase(position, value) {
    if (position < 1 || position > this.arraySize) {
      throw new Error('Position is out of allowed range');
    }

    for (let i = position; i <= this.arraySize; i += (i & -i)) {
      this.treeArray[i] += value;
    }

    return this;
  }

  /**
   * Query sum from index 1 to position.
   *
   * @param  {number} position
   * @return {number}
   */
  query(position) {
    if (position < 1 || position > this.arraySize) {
      throw new Error('Position is out of allowed range');
    }

    let sum = 0;

    for (let i = position; i > 0; i -= (i & -i)) {
      sum += this.treeArray[i];
    }

    return sum;
  }

  /**
   * Query sum from index leftIndex to rightIndex.
   *
   * @param  {number} leftIndex
   * @param  {number} rightIndex
   * @return {number}
   */
  queryRange(leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
      throw new Error('Left index can not be greater than right one');
    }

    if (leftIndex === 1) {
      return this.query(rightIndex);
    }

    return this.query(rightIndex) - this.query(leftIndex - 1);
  }
}
```

## 参考资料

- [维基百科](https://en.wikipedia.org/wiki/Fenwick_tree)
- [GeeksForGeeks](https://www.geeksforgeeks.org/binary-indexed-tree-or-fenwick-tree-2/)
- [YouTube](https://www.youtube.com/watch?v=CWDQJGaN1gY&index=18&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
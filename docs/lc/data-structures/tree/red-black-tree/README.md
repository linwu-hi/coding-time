# 红黑树

**红黑树**是一种自平衡的二叉搜索树，常用于计算机科学中。二叉树的每个节点都有一个额外的位，这个位通常被解释为节点的颜色（红色或黑色）。通过使用这些颜色位，在插入和删除操作期间保持树的近似平衡。

红黑树通过以满足一定属性的方式将树中的每个节点染成两种颜色之一来保持平衡，这些属性共同限制了树在最坏情况下的不平衡程度。当树被修改时，新树随后被重新排列和染色，以恢复颜色属性。这些属性被设计成能够高效地执行重新排列和染色操作。

红黑树的平衡并不完美，但足以保证在`O(log n)`的时间内进行搜索，其中`n`是树中的元素总数。插入、删除操作以及树的重新排列和染色也可以在`O(log n)`的时间内完成。

以下是红黑树的示例：

![红黑树](https://upload.wikimedia.org/wikipedia/commons/6/66/Red-black_tree_example.svg)

## 属性

除了二叉搜索树的要求之外，红黑树还必须满足以下条件：

- 每个节点要么是红色，要么是黑色。
- 根节点是黑色。这条规则有时会被省略，因为根节点总是可以从红色更改为黑色，但不一定反过来。所以这条规则对分析影响不大。
- 所有叶子节点（NIL节点）都是黑色。
- 如果一个节点是红色，则它的两个子节点都是黑色。
- 从给定节点到其任意后代NIL节点的每条路径上包含相同数量的黑色节点。

一些定义：从根节点到一个节点的黑色节点数称为该节点的**黑深度**；从根节点到叶子节点的所有路径中的黑色节点数目相等，称为红黑树的**黑高度**。

这些约束条件强制红黑树具有一个关键的性质：_从根节点到最远的叶子节点的路径长度不会超过从根节点到最近的叶子节点的路径长度的两倍_。结果是，树大致上是高度平衡的。由于插入、删除和查找值等操作的最坏情况时间与树的高度成比例，这种对高度的理论上界使得红黑树在最坏情况下具有高效性，而不像普通的二叉搜索树那样。

## 插入时的平衡

### 如果叔叔节点是红色

![红黑树平衡](https://www.geeksforgeeks.org/wp-content/uploads/redBlackCase2.png)

### 如果叔叔节点是黑色

- 左左情况（`p`是`g`的左子节点，`x`是`p`的左子节点）
- 左右情况（`p`是`g`的左子节点，`x`是`p`的右子节点）
- 右右情况（`p`是`g`的右子节点，`x`是`p`的右子节点）
- 右左情况（`p`是`g`的右子节点，`x`是`p`的左子节点）

#### 左左情况（查看`g`，`p`和`x`）

![红黑树平衡](https://www.geeksforgeeks.org/wp-content/uploads/redBlackCase3a1.png)

#### 左右情况（查看`g`，`p`和`x`）

![红黑树平衡](https://www.geeksforgeeks.org/wp-content/uploads/redBlackCase3b.png)

#### 右右情况（查看`g`，`p`和`x`）

![红黑树平衡](https://www.geeksforgeeks.org/wp-content/uploads/redBlackCase3c.png)

#### 右左情

况（查看`g`，`p`和`x`）

![红黑树平衡](https://www.geeksforgeeks.org/wp-content/uploads/redBlackCase3d.png)

## 参考资料

- [维基百科](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree)
- [Tushar Roy的红黑树插入 (YouTube)](https://www.youtube.com/watch?v=UaLIHuR1t8Q&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=63)
- [Tushar Roy的红黑树删除 (YouTube)](https://www.youtube.com/watch?v=CTvfzU_uNKE&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=64)
- [GeeksForGeeks上的红黑树插入](https://www.geeksforgeeks.org/red-black-tree-set-2-insert/)
- [交互式可视化红黑树](https://www.cs.usfca.edu/~galles/visualization/RedBlack.html)
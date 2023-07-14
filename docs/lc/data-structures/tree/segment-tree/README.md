# 线段树

在计算机科学中，**线段树**（Segment Tree）也被称为统计树，用于存储有关区间或段的信息。它允许查询存储的段中是否包含给定点。从原理上讲，它是一种静态结构，即一旦构建，就无法修改的结构。类似的数据结构是区间树（Interval Tree）。

线段树是一棵二叉树。树的根节点表示整个数组。根节点的两个子节点分别表示数组的前半部分和后半部分。同样，每个节点的子节点对应于与节点相对应的数组的两个部分。

我们自底向上构建树，每个节点的值是其子节点值的“最小值”（或任何其他函数）。这将花费 `O(n log n)` 的时间。所做的操作次数是树的高度，即 `O(log n)`。要进行范围查询，每个节点将查询分成两个部分，即每个子节点的子查询。如果查询包含节点的整个子数组，我们可以使用节点上预计算的值。使用这种优化，我们可以证明只执行 `O(log n)` 个最小值操作。

![最小值线段树](https://www.geeksforgeeks.org/wp-content/uploads/RangeMinimumQuery.png)

![求和线段树](https://www.geeksforgeeks.org/wp-content/uploads/segment-tree1.png)

## 应用

线段树是一种旨在高效执行某些数组操作的数据结构，特别是涉及范围查询的操作。

线段树的应用领域包括计算几何和地理信息系统。

线段树的当前实现意味着您可以向其传递任何二元（带有两个输入参数）函数，从而可以对各种函数进行范围查询。在测试中，您可以找到对线段树进行最小值、最大值和求和范围查询的示例。

## 参考资料

- [维基百科](https://en.wikipedia.org/wiki/Segment_tree)
- [YouTube](https://www.youtube.com/watch?v=ZBHKZF5w4YU&index=65&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [GeeksForGeeks](https://www.geeksforgeeks.org/segment-tree-set-1-sum-of-given-range/)
# AVL树

在计算机科学中，**AVL树**（以发明者Adelson-Velsky和Landis的姓氏命名）是一种自平衡的二叉搜索树。它是第一种这样的数据结构。在AVL树中，任何节点的两个子树的高度最多相差一；如果它们的高度相差超过一，就会进行重新平衡以恢复这个性质。查找、插入和删除在平均情况和最坏情况下都需要 `O(log n)` 的时间，其中n是操作之前树中的节点数。插入和删除可能需要通过一个或多个树旋转来重新平衡树。

动画展示了将多个元素插入AVL树中的过程。它包括左旋、右旋、左右旋和右左旋。

![AVL树](https://upload.wikimedia.org/wikipedia/commons/f/fd/AVL_Tree_Example.gif)

带有平衡因子的AVL树（绿色）

![AVL树](https://upload.wikimedia.org/wikipedia/commons/a/ad/AVL-tree-wBalance_K.svg)

### AVL树的旋转操作

**左-左旋转**

![左-左旋转](http://btechsmartclass.com/data_structures/ds_images/LL%20Rotation.png)

**右-右旋转**

![右-右旋转](http://btechsmartclass.com/data_structures/ds_images/RR%20Rotation.png)

**左-右旋转**

![左-右旋转](http://btechsmartclass.com/data_structures/ds_images/LR%20Rotation.png)

**右-左旋转**

![右-左旋转](http://btechsmartclass.com/data_structures/ds_images/RL%20Rotation.png)

## 参考资料

- [维基百科](https://en.wikipedia.org/wiki/AVL_tree)
- [Tutorials Point](https://www.tutorialspoint.com/data_structures_algorithms/avl_tree_algorithm.htm)
- [BTech](http://btechsmartclass.com/data_structures/avl-trees.html)
- [YouTube上的AVL树插入操作](https://www.youtube.com/watch?v=rbg7Qf8GkQ4&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=12&)
- [AVL树的交互式可视化](https://www.cs.usfca.edu/~galles/visualization/AVLtree.html)
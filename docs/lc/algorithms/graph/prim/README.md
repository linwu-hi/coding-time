# 普里姆算法

在计算机科学中，**普里姆算法**是一种贪心算法，用于在加权无向图中找到最小生成树。

该算法通过从任意起始顶点开始，逐步构建这棵树，每一步都选择从树到另一个顶点的代价最小的连接。

![普里姆算法](https://upload.wikimedia.org/wikipedia/commons/f/f7/Prim%27s_algorithm.svg)

从顶点 `A` 开始的普里姆算法。在第三步中，边 `BD` 和 `AB` 的权重都是 `2`，因此任意选择 `BD`。在这一步之后，`AB` 不再作为添加到树中的候选边，因为它连接了树中已经存在的两个节点。

## 最小生成树

**最小生成树**（MST）或最小权重生成树是一个连通的、带权（非）有向图的边的子集，它将所有顶点连接在一起，没有任何环，并且具有最小可能的总边权重。也就是说，它是一个生成树，其边权重之和尽可能小。更一般地，任何带权无向图（不一定是连通的）都有一个最小生成森林，即其连通分量的最小生成树的并集。

![最小生成树](https://upload.wikimedia.org/wikipedia/commons/d/d2/Minimum_spanning_tree.svg)

一个平面图及其最小生成树。每条边都带有其权重，这里的权重大致与其长度成比例。

![最小生成树](https://upload.wikimedia.org/wikipedia/commons/c/c9/Multiple_minimum_spanning_trees.svg)

该图显示了图中可能有多个最小生成树的情况。在图中，图下方的两棵树是给定图的两种可能的最小生成树。

## 参考资料

- [维基百科上的最小生成树](https://en.wikipedia.org/wiki/Minimum_spanning_tree)
- [维基百科上的普里姆算法](https://en.wikipedia.org/wiki/Prim%27s_algorithm)
- [YouTube 上的 Tushar Roy 的普里姆算法](https://www.youtube.com/watch?v=oP2-8ysT3QQ&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [YouTube 上的 Michael Sambol 的普里姆算法](https://www.youtube.com/watch?v=cplfcGZmX7I&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
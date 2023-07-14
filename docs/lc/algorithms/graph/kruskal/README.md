# 克鲁斯卡尔算法

克鲁斯卡尔算法是一种最小生成树算法，它找到连接森林中的任意两棵树的权重最小的边。它是一种贪心算法，在图论中用于在连通的带权图中添加成本递增的边来找到最小生成树。这意味着它找到一组边，形成一个包含每个顶点的树，使得树中所有边的权重之和最小。如果图不连通，则它找到一个最小生成森林（每个连通分量的最小生成树）。

![Kruskal Algorithm](https://upload.wikimedia.org/wikipedia/commons/5/5c/MST_kruskal_en.gif)

![Kruskal Demo](https://upload.wikimedia.org/wikipedia/commons/b/bb/KruskalDemo.gif)

基于欧几里德距离的克鲁斯卡尔算法演示。

## 最小生成树

最小生成树（MST）或最小权重生成树是连接所有顶点的边的子集，没有任何环且具有最小可能的总边权重的连通带权（非）有向图。也就是说，它是一个生成树，其边权重之和尽可能小。更一般地，任何带权无向图（不一定是连通的）都有一个最小生成森林，即其连通分量的最小生成树的并集。

![最小生成树](https://upload.wikimedia.org/wikipedia/commons/d/d2/Minimum_spanning_tree.svg)

一个平面图及其最小生成树。每条边都带有其权重，这里的权重大致与其长度成比例。

![最小生成树](https://upload.wikimedia.org/wikipedia/commons/c/c9/Multiple_minimum_spanning_trees.svg)

该图显示了图中可能有多个最小生成树的情况。在图中，下面的两棵树是给定图的两种最小生成树。

## 参考资料

- [维基百科上的最小生成树](https://en.wikipedia.org/wiki/Minimum_spanning_tree)
- [维基百科上的克鲁斯卡尔算法](https://en.wikipedia.org/wiki/Kruskal%27s_algorithm)
- [YouTube上的Tushar Roy的克鲁斯卡尔算法](https://www.youtube.com/watch?v=fAuF0EuZVCk&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [YouTube上的Michael Sambol的克鲁斯卡尔算法](https://www.youtube.com/watch?v=71UQH7Pr9kU&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
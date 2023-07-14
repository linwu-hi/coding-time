# 检测图中的循环

在图论中，**循环**是指一条由边和顶点组成的路径，其中一个顶点可以从自身到达。循环有几种不同的类型，主要有**闭合路径**和**简单循环**。

## 定义

**闭合路径**由一系列从同一顶点开始和结束的顶点组成，序列中的任意两个连续顶点在图中相邻。在有向图中，每条边在路径中的遍历必须与其方向一致：边必须从序列中较早的顶点指向序列中较后的顶点。起始顶点的选择并不重要：从不同的起始顶点遍历相同的循环边序列会产生相同的闭合路径。

**简单循环**可以定义为一条闭合路径，不允许重复顶点和边，除了起始和结束顶点的重复，或者可以定义为该路径中的边的集合。在有向图中，这两种定义是等价的，简单循环也被称为有向循环：在循环中的顶点和边的循环序列完全由其使用的边的集合确定。在无向图中，循环的边集可以按照两个方向之一遍历，为每个无向循环提供两种可能的有向循环。电路可以是允许重复顶点但不允许重复边的闭合路径；然而，它也可以是简单循环，因此在使用时建议明确定义。

## 示例

![循环](https://upload.wikimedia.org/wikipedia/commons/e/e7/Graph_cycle.gif)

带有颜色边的图，用于说明路径 `H-A-B`（绿色），带有重复顶点的闭合路径或**循环路径** `B-D-E-F-D-C-B`（蓝色）以及没有重复边或顶点的**循环** `H-D-G-H`（红色）

### 无向图中的循环

![无向图中的循环](https://www.geeksforgeeks.org/wp-content/uploads/cycleGraph.png)

### 有向图中的循环

![有向图中的循环](https://cdncontribute.geeksforgeeks.org/wp-content/uploads/cycle.png)

## 参考资料

常规信息：

- [Wikipedia](https://en.wikipedia.org/wiki/Cycle_(graph_theory))

无向图中的循环：

- [GeeksForGeeks 上的无向图中检测循环](https://www.geeksforgeeks.org/detect-cycle-undirected-graph/)
- [YouTube 上的无向图中检测循环算法](https://www.youtube.com/watch?v=n_t0a_8H8VY&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

有向图中的循环：

- [GeeksForGeeks 上的有向图中检测循环](https://www.geeksforgeeks.org/detect-cycle-in-a-graph/)
- [YouTube 上的有向图中检测循环算法](https://www.youtube.com/watch?v=rKQaZuoUR4M&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
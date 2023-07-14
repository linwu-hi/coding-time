# 欧拉路径

在图论中，**欧拉路径**（或称为**欧拉路径**）是指在一个有限图中，恰好经过每条边一次的路径。类似地，**欧拉回路**或**欧拉环**是指一条欧拉路径，它从一个顶点开始并以同一个顶点结束。

欧拉证明了存在欧拉回路的必要条件是图中的所有顶点度数均为偶数，并且指出了所有顶点度数均为偶数的连通图都有欧拉回路。

![欧拉回路](https://upload.wikimedia.org/wikipedia/commons/7/72/Labelled_Eulergraph.svg)

该图的每个顶点度数均为偶数，因此它是一个欧拉图。按字母顺序遍历边即可得到欧拉回路。

对于存在欧拉路径，需要满足顶点度数为奇数的顶点数为0或2；这意味着**Königsberg 图**不是欧拉图。如果没有顶点度数为奇数，所有的欧拉路径都是欧拉回路。如果恰好有两个顶点度数为奇数，所有的欧拉路径都会从其中一个顶点开始并以另一个顶点结束。具有欧拉路径但没有欧拉回路的图被称为半欧拉图。

![Königsberg 图](https://upload.wikimedia.org/wikipedia/commons/9/96/K%C3%B6nigsberg_graph.svg)

Königsberg 桥梁多重图。该多重图不是欧拉图，因此不存在解决方案。

## 参考资料

- [Wikipedia](https://en.wikipedia.org/wiki/Eulerian_path)
- [YouTube](https://www.youtube.com/watch?v=vvP4Fg4r-Ns&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
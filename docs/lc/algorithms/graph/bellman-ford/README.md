# Bellman-Ford 算法

Bellman-Ford 算法是一种计算带权有向图中单个源顶点到其他所有顶点的最短路径的算法。相比于相同问题的 Dijkstra 算法，Bellman-Ford 算法更为灵活，因为它能够处理某些边权重为负数的图。

![Bellman-Ford](https://upload.wikimedia.org/wikipedia/commons/2/2e/Shortest_path_Dijkstra_vs_BellmanFord.gif)

## 复杂度

最坏情况下的时间复杂度：`O(|V||E|)`
最佳情况下的时间复杂度：`O(|E|)`
最坏情况下的空间复杂度：`O(|V|)`

## 参考资料

- [Wikipedia](https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm)
- [YouTube 上的 Michael Sambol 视频](https://www.youtube.com/watch?v=obWXjtg0L64&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
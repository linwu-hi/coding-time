# Dijkstra 算法

Dijkstra 算法是一种用于在图中寻找节点之间最短路径的算法，该图可以表示道路网络等。

算法存在多个变种；Dijkstra 最初的变种用于找到两个节点之间的最短路径，但更常见的变种将某个节点固定为“源”节点，并找到源节点到图中所有其他节点的最短路径，生成一个最短路径树。

![Dijkstra](https://upload.wikimedia.org/wikipedia/commons/5/57/Dijkstra_Animation.gif)

Dijkstra 算法用于找到 `a` 到 `b` 的最短路径。它选择未访问的具有最低距离的顶点，计算通过它到达每个未访问邻居的距离，并且如果较小则更新邻居的距离。完成邻居的处理后，将其标记为已访问（设置为红色）。

## 参考资料

- [Wikipedia](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)
- [YouTube 上的 Nathaniel Fan 视频](https://www.youtube.com/watch?v=gdmfOwyQlcI&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [YouTube 上的 Tushar Roy 视频](https://www.youtube.com/watch?v=lAXZGERcDf4&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
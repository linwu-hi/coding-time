# Floyd-Warshall 算法

在计算机科学中，**Floyd-Warshall 算法**是一种用于在具有正或负边权重（但没有负循环）的加权图中找到最短路径的算法。该算法的一次执行可以找到所有顶点对之间的最短路径长度（加权之和）。尽管它不返回路径的详细信息，但可以通过对算法进行简单修改来重构路径。

## 算法

Floyd-Warshall 算法比较了图中每对顶点之间的所有可能路径。在图中进行 `O(|V|^3)` 次比较。这是非常了不起的，因为图中可能有多达 `|V|^2` 条边，而且需要测试每种边的组合。算法通过逐步改进两个顶点之间的最短路径估计，直到估计达到最优解。

考虑一个图 `G`，顶点 `V` 的编号从 `1` 到 `N`。进一步考虑一个函数 `shortestPath(i, j, k)`，它返回仅使用集合 `{1, 2, ..., k}` 中的顶点作为中间点的路径，从 `i` 到 `j` 的最短路径。现在，给定该函数，我们的目标是找到每个 `i` 到每个 `j` 的最短路径，只使用顶点集 `{1, 2, ..., N}`。

![递推公式](https://wikimedia.org/api/rest_v1/media/math/render/svg/f9b75e25063384ccca499c56f9a279abf661ad3b)

![递推公式](https://wikimedia.org/api/rest_v1/media/math/render/svg/34ac7c89bbb18df3fd660225fd38997079e5e513)
![递推公式](https://wikimedia.org/api/rest_v1/media/math/render/svg/0326d6c14def89269c029da59eba012d0f2edc9d)

这个公式是 Floyd-Warshall 算法的核心。

## 示例

上述算法在下图中的图上执行：

![示例](https://upload.wikimedia.org/wikipedia/commons/2/2e/Floyd-Warshall_example.svg)

下表中 `i` 是行号，`j` 是列号。

**k = 0**

|       | 1   | 2   | 3   | 4   |
|:-----:|:---:|:---:|:---:|:---:|
| **1** | 0   | ∞   | −2  | ∞   |
| **2** | 4   | 0   | 3   | ∞   |
| **3** | ∞   | ∞   | 0   | 2   |
| **4** | ∞   | −1  | ∞   | 0   |


**k = 1**

|       | 1   | 2   | 3   | 4   |
|:-----:|:---:|:---:|:---:|:---:|
| **1** | 0   | ∞   | −2  | ∞   |
| **2** | 4   | 0   | 2   | ∞   |
| **3** | ∞   | ∞   | 0   | 2   |
| **4** | ∞   | −1  | ∞   | 0   |


**k = 2**

|       | 1   | 2   | 3   | 4   |
|:-----:|:---:|:---:|:---:|:---:|
| **1** | 0   | ∞   | −2  | ∞   |
| **2** | 4   | 0   | 2   | ∞   |
| **3** | ∞   | ∞   | 0   | 2   |
| **4** | 3   | −1  | 1   | 0   |


**k = 3**

|       | 1   | 2   | 3   | 4   |
|:-----:|:---:|:---:|:---:|:---:|
| **1** | 0   | ∞   | −2  | 0   |
| **2** | 4   | 0   | 2   | 4   |
| **3** | ∞   | ∞   | 0   | 2   |
| **4** | 3   | −1  | 1   | 0   |


**k = 4**

|       | 1   | 2   | 3   | 4   |
|:-----:|:---:|:---:|:---:|:---:|
|

 **1** | 0   | −1  | −2  | 0   |
| **2** | 4   | 0   | 2   | 4   |
| **3** | 5   | 1   | 0   | 2   |
| **4** | 3   | −1  | 1   | 0   |

## 参考资料

- [Wikipedia](https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm)
- [YouTube (by Abdul Bari)](https://www.youtube.com/watch?v=oNI0rf2P9gE&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=74)
- [YouTube (by Tushar Roy)](https://www.youtube.com/watch?v=LwJdNfdLF9s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=75)
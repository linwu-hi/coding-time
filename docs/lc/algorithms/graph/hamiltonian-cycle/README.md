# 哈密尔顿路径

**哈密尔顿路径**（或称为**可遍历路径**）是指在无向或有向图中恰好访问每个顶点一次的路径。**哈密尔顿环**（或**哈密尔顿回路**）是一条既是哈密尔顿路径又是环的路径。确定图中是否存在这样的路径和环是**哈密尔顿路径问题**。

![哈密尔顿回路](https://upload.wikimedia.org/wikipedia/commons/6/6c/Hamiltonian_path_3d.svg)

一个十二面体的可能的哈密尔顿回路示例，如图中的红色路径所示 - 像所有的柏拉图立体一样，十二面体是哈密尔顿图。

## Naive 算法

生成所有可能的顶点配置，并打印满足给定约束条件的配置。共有 `n!`（n 的阶乘）种配置。

```
当还有未尝试的配置时
{
   生成下一个配置
   如果（这个配置的连续顶点之间有边，并且最后一个顶点到第一个顶点有边）
   {
      打印这个配置;
      中断;
   }
}
```

## 回溯算法

创建一个空的路径数组，并将顶点 `0` 添加到其中。从顶点 `1` 开始添加其他顶点。在添加一个顶点之前，检查它是否与先前添加的顶点相邻且尚未添加。如果找到这样的顶点，则将其作为解的一部分添加。如果找不到这样的顶点，则返回 false。

## 参考资料

- [维基百科上的哈密尔顿路径](https://en.wikipedia.org/wiki/Hamiltonian_path)
- [YouTube 上的哈密尔顿路径](https://www.youtube.com/watch?v=dQr4wZCiJJ4&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [GeeksForGeeks 上的哈密尔顿回路](https://www.geeksforgeeks.org/backtracking-set-7-hamiltonian-cycle/)
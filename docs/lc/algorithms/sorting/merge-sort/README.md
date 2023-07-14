# 归并排序

归并排序（Merge Sort）是一种高效的通用比较排序算法。大多数实现都产生稳定排序，这意味着算法会保留排序输出中相等元素的输入顺序。归并排序是一种分治算法，由约翰·冯·诺伊曼（John von Neumann）于1945年发明。

下图是归并排序的示例。首先将列表划分为最小单位（1个元素），然后将每个元素与相邻的列表进行比较，以便排序和合并相邻的列表。最后，所有元素都被排序和合并。

![归并排序](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)

下图是用于对包含7个整数值的数组进行排序的递归归并排序算法。这些步骤是人类为了模拟归并排序而采取的操作（自顶向下）。

![归并排序](https://upload.wikimedia.org/wikipedia/commons/e/e6/Merge_sort_algorithm_diagram.svg)

## 复杂度

| 名称                  | 最佳情况          | 平均情况             | 最坏情况               | 内存      | 稳定性    | 备注      |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **归并排序**          | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | n         | 是       |           |

## 参考资料

- [维基百科](https://en.wikipedia.org/wiki/Merge_sort)
- [YouTube](https://www.youtube.com/watch?v=KF2j-9iSf4Q&index=27&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
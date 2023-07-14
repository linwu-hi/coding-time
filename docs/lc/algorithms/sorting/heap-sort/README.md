# 堆排序

堆排序（Heapsort）是一种基于比较的排序算法。堆排序可以看作是改进的选择排序：与选择排序类似，它将输入分为已排序和未排序的区域，并通过提取最大元素并将其移动到已排序区域来迭代地缩小未排序区域。改进之处在于使用堆数据结构而不是线性搜索来查找最大元素。

![算法可视化](https://upload.wikimedia.org/wikipedia/commons/1/1b/Sorting_heapsort_anim.gif)

![算法可视化](https://upload.wikimedia.org/wikipedia/commons/4/4d/Heapsort-example.gif)

## 复杂度

| 名称                  | 最佳情况          | 平均情况             | 最坏情况               | 内存      | 稳定性    | 备注      |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **堆排序**             | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | 1         | 否        |           |

## 参考资料

[维基百科](https://en.wikipedia.org/wiki/Heapsort)
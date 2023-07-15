# 希尔排序

希尔排序（Shellsort），也被称为 Shell 排序或 Shell 方法，是一种原地比较排序算法。它可以看作是交换排序（冒泡排序）或插入排序的推广。该方法从远离彼此的元素开始，对它们进行排序，然后逐渐减小要比较的元素之间的间隔。从远离彼此的元素开始，它可以更快地将一些错位的元素移动到正确的位置，而不只是简单地与最近的邻居交换。

![希尔排序](https://upload.wikimedia.org/wikipedia/commons/d/d8/Sorting_shellsort_anim.gif)

## 希尔排序的工作原理

为了方便理解，我们以间隔为4的情况作为示例。将所有间隔为4位置的值组成一个虚拟子列表。这些值是 `{35, 14}`, `{33, 19}`, `{42, 27}` 和 `{10, 44}`。

我们比较每个子列表中的值，并在原始数组中进行交换（如果需要）。经过这一步，新数组应该如下所示：

然后，我们以间隔2进行排序，这个间隔会生成两个子列表：`{14, 27, 35, 42}` 和 `{19, 10, 33, 44}`。

我们在原始数组中比较并交换值（如果需要）。经过这一步，数组应该如下所示：

> 更新：下面的图片中存在一个错误，结果数组应该是 `[14, 10, 27, 19, 35, 33, 42, 44]`。

最后，我们使用间隔值为1对数组的剩余部分进行排序。希尔排序使用插入排序来对数组进行排序。

```js
function shellSort(arr) {
  const len = arr.length;
  let gap = Math.floor(len / 2);

  while (gap > 0) {
    for (let i = gap; i < len; i++) {
      const current = arr[i];
      let j = i;

      while (j >= gap && arr[j - gap] > current) {
        arr[j] = arr[j - gap];
        j -= gap;
      }

      arr[j] = current;
    }

    gap = Math.floor(gap / 2);
  }

  return arr;
}

```

## 复杂度

| 名称                  | 最佳情况          | 平均情况             | 最坏情况               | 内存      | 稳定性    | 备注      |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **希尔排序**          | n&nbsp;log(n)   | 取决于间隔序列      | n&nbsp;(log(n))<sup>2</sup>  | 1         | 否        |           |

## 参考资料

- [Tutorials Point](https://www.tutorialspoint.com/data_structures_algorithms/shell_sort_algorithm.htm)
- [维基百科](https://en.wikipedia.org/wiki/Shellsort)
- [YouTube（Rob Edwards）](https://www.youtube.com/watch?v=ddeLSDsYVp8&index=79&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
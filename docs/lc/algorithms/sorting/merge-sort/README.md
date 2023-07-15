# 归并排序

归并排序（Merge Sort）是一种高效的通用比较排序算法。大多数实现都产生稳定排序，这意味着算法会保留排序输出中相等元素的输入顺序。归并排序是一种分治算法，由约翰·冯·诺伊曼（John von Neumann）于1945年发明。

下图是归并排序的示例。首先将列表划分为最小单位（1个元素），然后将每个元素与相邻的列表进行比较，以便排序和合并相邻的列表。最后，所有元素都被排序和合并。

![归并排序](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)

下图是用于对包含7个整数值的数组进行排序的递归归并排序算法。这些步骤是人类为了模拟归并排序而采取的操作（自顶向下）。

![归并排序](https://upload.wikimedia.org/wikipedia/commons/e/e6/Merge_sort_algorithm_diagram.svg)

## 原理

> 归并排序的基本思想是将待排序的序列不断划分为两个子序列，直到每个子序列只剩下一个元素，然后再将这些子序列两两合并，直到最终得到有序的序列。具体的排序流程如下：

- 步骤1：将待排序序列分成两个子序列，分别进行递归排序；
- 步骤2：将两个已排序的子序列合并成一个有序序列。

```javascript
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid)); // 递归排序左半部分
  const right = mergeSort(arr.slice(mid)); // 递归排序右半部分

  return merge(left, right); // 合并左右两个有序子序列
}

function merge(left, right) {
  let i = 0; // 左半部分指针
  let j = 0; // 右半部分指针
  const merged = [];

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      merged.push(left[i]); // 将较小值放入合并数组
      i++;
    } else {
      merged.push(right[j]); // 将较小值放入合并数组
      j++;
    }
  }

  // 将剩余的元素放入合并数组
  return merged.concat(left.slice(i)).concat(right.slice(j));
}
```

## 优化手段：

尽管归并排序已经是一种高效的排序算法，但我们可以通过一些优化手段进一步提高其性能。下面介绍几种常见的优化策略：

### 插入排序优化：

对于小规模的子序列，插入排序的时间复杂度较低，因此可以在归并排序的过程中使用插入排序来提高性能。具体做法是，在划分到一定规模后，将子序列采用插入排序算法进行排序。

### 优化合并过程：

在合并两个有序子序列时，如果发现左边子序列的最大元素小于等于右边子序列的最小元素，那么说明整个序列已经有序，可以直接跳过合并操作，节省时间。

### 数组复用：

为了避免在每次递归中创建新的临时数组，我们可以事先创建一个足够大的临时数组，然后在合并过程中重复使用该数组。


```javascript
// 归并排序基本实现
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let i = 0;
  let j = 0;
  const merged = [];

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }

  return merged.concat(left.slice(i)).concat(right.slice(j));
}

// 归并排序优化实现
function mergeSortOptimized(arr) {
  if (arr.length <= 16) {
    return insertionSort(arr); // 使用插入排序优化
  }

  const tempArr = new Array(arr.length); // 数组复用，避免重复创建临时数组

  function mergeSortHelper(arr, tempArr, left, right) {
    // 基本实现代码省略

    // 优化合并过程
    if (arr[mid] <= arr[mid + 1]) {
      return; // 已有序，无需合并
    }

    // 基本实现代码省略
  }

  // 基本实现代码省略

  return arr;
}

// 插入排序算法
function insertionSort(arr) {
  // 算法实现代码省略
}

// 示例用法
const array = [5, 3, 8, 4, 2, 1, 6, 7];
const sortedArray = mergeSort(array);
console.log(sortedArray); // 输出: [1, 2, 3, 4, 5, 6, 7, 8]
```

## 复杂度

| 名称                  | 最佳情况          | 平均情况             | 最坏情况               | 内存      | 稳定性    | 备注      |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **归并排序**          | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | n         | 是       |           |

## 参考资料

- [维基百科](https://en.wikipedia.org/wiki/Merge_sort)
- [YouTube](https://www.youtube.com/watch?v=KF2j-9iSf4Q&index=27&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
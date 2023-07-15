# 快速排序

快速排序是一种分而治之的算法。快速排序首先将一个大数组分成两个较小的子数组：比某个数小的元素和比某个数大的元素。然后快速排序可以递归地对子数组进行排序。


步骤是：

1. 从数组中选择一个元素，称为基点

2. 分区：对数组重新排序，使所有值小于基点的元素都在它左边，而所有值大于基点的元素都在它右边（相等的值可以放在任何一边）。在此分区之后，基点处于其最终位置（左边和右边的中间位置）。这称为分区操作。

3. 递归地将上述步骤应用于左边的数组和右边的数组。

快速排序算法的动画可视化。水平线是基点值。

![Quicksort](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif)


## 排序流程

快速排序是一种基于分治法的排序算法，其基本原理如下：

1. **选择pivot**：从待排序数组中选择一个元素作为pivot（枢纽元素）。通常，我们选择数组的中间元素作为pivot，以实现较好的平衡性。

2. **分割数组**：将数组中的元素按照与pivot的大小关系，分割为两个子数组：小于pivot的子数组和大于pivot的子数组。这一步骤通常称为partition（分割）。

   - 为了实现分割，我们使用两个指针：左指针和右指针。左指针从数组的起始位置开始，右指针从数组的末尾位置开始。
   - 左指针向右移动，直到找到一个大于等于pivot的元素。
   - 右指针向左移动，直到找到一个小于等于pivot的元素。
   - 如果左指针仍然在右指针的左侧，则交换左右指针所指的元素。
   - 重复上述步骤，直到左指针大于等于右指针。

3. **递归排序子数组**：对分割得到的两个子数组（小于pivot的子数组和大于pivot的子数组）进行递归排序。递归调用快速排序算法即可。

4. **合并结果**：将排序后的子数组合并起来，得到最终的排序结果。合并的过程可以通过将左子数组、pivot和右子数组依次连接起来来实现。

```js
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  // 选择pivot（通常是数组的中间元素）
  const pivot = arr[Math.floor(arr.length / 2)];
  
  // 分割数组为两个子数组
  const left = [];
  const right = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    }
  }
  
  // 递归地对子数组进行排序，并将结果合并
  return quickSort(left).concat(pivot, quickSort(right));
}

// 示例用法
const array = [5, 8, 2, 1, 6, 3, 9, 4, 7];
const sortedArray = quickSort(array);
console.log(sortedArray);
```


## 快速排序的优化技巧

尽管快速排序是一种高效的算法，但在某些情况下，其性能可能有所下降。为了克服这些问题，我们可以使用以下优化技巧：

### 随机选择pivot

当数组已经有序时，选择中间位置的元素作为pivot会导致分割出的两个子数组大小差异很大，从而降低算法性能。为了解决这个问题，可以使用随机选择pivot的方法。通过随机选择pivot，可以减少特定情况下的不利影响，提高整体性能。

下面是在JavaScript中实现随机选择pivot的代码示例：

```javascript
function getRandomPivot(arr, start, end) {
  const randomIndex = Math.floor(Math.random() * (end - start + 1)) + start;
  [arr[randomIndex], arr[end]] = [arr[end], arr[randomIndex]];
  return partition(arr, start, end);
}

function quickSortRandomPivot(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    const pivotIndex = getRandomPivot(arr, start, end);
    quickSortRandomPivot(arr, start, pivotIndex - 1);
    quickSortRandomPivot(arr, pivotIndex + 1, end);
  }
  return arr;
}
```

### 三数取中法

快速排序的性能在某些特定情况下可能会下降，如当数组已经有序或接近有序时。为了解决这个问题，可以使用"三数取中法"来选择pivot。该方法从子数组的起始、中间和末尾位置选择三个元素，并将它们排序后选择中间的元素作为pivot。


```javascript
function getMedianOfThree(arr, start, end) {
  const mid = Math.floor((start + end) / 2);
  if (arr[start] > arr[mid]) {
    [arr[start], arr[mid]] = [arr[mid], arr[start]];
  }
  if (arr[start] > arr[end]) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
  }
  if (arr[mid] > arr[end]) {
    [arr[mid], arr[end]] = [arr[end], arr[mid]];
  }
  return mid;
}

function quickSortMedianOfThree(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    const pivotIndex = getMedianOfThree(arr, start, end);
    const pivot = arr[pivotIndex];
    let left = start;
    let right = end - 1;

    while (left <= right) {
      while (arr[left] < pivot) {
        left++;
      }
      while (arr[right] > pivot) {
        right--;
      }
      if (left <= right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
      }
    }

    [arr[left], arr[pivotIndex]] = [arr[pivotIndex], arr[left]];

    quickSortMedianOfThree(arr, start, left - 1);
    quickSortMedianOfThree(arr, left + 1, end);
  }

  return arr;
}
```

##  使用

插入排序优化小数组

在处理小数组时，快速排序的递归调用开销可能超过排序本身的开销。为了解决这个问题，可以使用插入排序来对小数组进行排序。当数组的大小低于某个阈值时，切换到插入排序算法可以减少递归调用次数，提高性能。

下面是在JavaScript中实现使用插入排序优化小数组的代码示例：

```javascript
const INSERTION_THRESHOLD = 10;

function insertionSort(arr, start, end) {
  for (let i = start + 1; i <= end; i++) {
    const current = arr[i];
    let j = i - 1;
    while (j >= start && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
}

function quickSortOptimized(arr, start = 0, end = arr.length - 1) {
  if (end - start + 1 <= INSERTION_THRESHOLD) {
    insertionSort(arr, start, end);
  } else {
    const pivotIndex = partition(arr, start, end);
    quickSortOptimized(arr, start, pivotIndex - 1);
    quickSortOptimized(arr, pivotIndex + 1, end);
  }
  return arr;
}
```

## 优化的场景

快速排序在大多数情况下表现出色，但在某些特殊情况下，其性能可能下降。下面是一些适合使用快速排序优化的场景，并提供相应的JavaScript代码示例：

1. **适用于大型数据集的排序**：快速排序通常在处理大型数据集时表现出色，其平均时间复杂度为O(n log n)。这种情况下，可以使用标准的快速排序算法。

2. **适用于稳定性不是关键要求的排序**：快速排序是一种不稳定的排序算法，它可能改变相等元素的相对顺序。如果对排序结果的稳定性有要求，可以考虑其他稳定的排序算法。

3. **适用于数据分布相对均匀的情况**：快速排序在数据分布相对均匀的情况下表现最佳。如果数据分布不均匀，可以考虑使用其他排序算法或结合优化技巧。
## 复杂度

| Name           |     Best      |    Average    |     Worst     | Memory | Stable | Comments                                                      |
| -------------- | :-----------: | :-----------: | :-----------: | :----: | :----: | :------------------------------------------------------------ |
| **Quick sort** | n&nbsp;log(n) | n&nbsp;log(n) | n<sup>2</sup> | log(n) |   No   | Quicksort is usually done in-place with O(log(n)) stack space |

## 引用

- [Wikipedia](https://en.wikipedia.org/wiki/Quicksort)

- [YouTube](https://www.youtube.com/watch?v=SLauY6PpjW4&index=28&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

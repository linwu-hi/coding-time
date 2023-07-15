# 二分查找

在计算机科学中，二分查找（Binary Search），也称为折半查找、对数查找或二分法，是一种用于在有序数组中查找目标值位置的搜索算法。二分查找将目标值与数组的中间元素进行比较；如果它们不相等，则可以排除目标值不可能存在的一半，并在剩余的一半上继续搜索，直到找到目标值或搜索结束。如果搜索结束时剩余的一半为空，则表示数组中不存在目标值。

![二分查找](https://upload.wikimedia.org/wikipedia/commons/8/83/Binary_Search_Depiction.svg)

## 复杂度

**时间复杂度**：`O(log(n))` - 因为每次迭代都将搜索区域分成两半。


## 完整实现

```js
function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (array[mid] === target) {
      return mid; // 找到目标元素，返回索引
    } else if (array[mid] < target) {
      left = mid + 1; // 目标元素在右侧，调整左边界
    } else {
      right = mid - 1; // 目标元素在左侧，调整右边界
    }
  }

  return -1; // 未找到目标元素
}
```

## 参考资料

- [维基百科](https://en.wikipedia.org/wiki/Binary_search_algorithm)
- [YouTube](https://www.youtube.com/watch?v=P3YID7liBug&index=29&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
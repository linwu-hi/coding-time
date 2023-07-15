# 插值查找

**插值查找**（Interpolation Search）是一种用于在已按键（键值）排序的数组中搜索键的算法。

例如，我们有一个排序的数组 `arr[]`，其中包含 `n` 个均匀分布的值，并且我们需要编写一个函数在数组中搜索特定元素 `x`。

**线性搜索**的时间复杂度为 `O(n)`，**跳跃搜索**的时间复杂度为 `O(√n)`，**二分查找**的时间复杂度为 `O(logn)`。

**插值查找**是对二分查找的改进，适用于在已排序数组中元素的分布是“均匀”的情况。二分查找总是检查中间元素。而插值查找根据所搜索的键的值可能接近的位置进行搜索。例如，如果键的值更接近最后一个元素，则插值查找可能从末尾开始搜索。

要找到要搜索的位置，它使用以下公式：

```
// 这个公式的思想是，当要搜索的元素更接近 arr[hi] 时，返回较大的 pos 值。
// 当更接近 arr[lo] 时，返回较小的值。
pos = lo + ((x - arr[lo]) * (hi - lo) / (arr[hi] - arr[lo]))

arr[] - 需要进行搜索的数组
x - 要搜索的元素
lo - arr[] 中的起始索引
hi - arr[] 中的结束索引
```

## 复杂度

**时间复杂度**：`O(log(log(n)))`


## 完整实现

```js
/**
 * Interpolation search implementation.
 *
 * @param {*[]} sortedArray - sorted array with uniformly distributed values
 * @param {*} seekElement
 * @return {number}
 */
export default function interpolationSearch(sortedArray, seekElement) {
  let leftIndex = 0;
  let rightIndex = sortedArray.length - 1;

  while (leftIndex <= rightIndex) {
    const rangeDelta = sortedArray[rightIndex] - sortedArray[leftIndex];
    const indexDelta = rightIndex - leftIndex;
    const valueDelta = seekElement - sortedArray[leftIndex];

    // If valueDelta is less then zero it means that there is no seek element
    // exists in array since the lowest element from the range is already higher
    // then seek element.
    if (valueDelta < 0) {
      return -1;
    }

    // If range delta is zero then subarray contains all the same numbers
    // and thus there is nothing to search for unless this range is all
    // consists of seek number.
    if (!rangeDelta) {
      // By doing this we're also avoiding division by zero while
      // calculating the middleIndex later.
      return sortedArray[leftIndex] === seekElement ? leftIndex : -1;
    }

    // Do interpolation of the middle index.
    const middleIndex = leftIndex + Math.floor((valueDelta * indexDelta) / rangeDelta);

    // If we've found the element just return its position.
    if (sortedArray[middleIndex] === seekElement) {
      return middleIndex;
    }

    // Decide which half to choose for seeking next: left or right one.
    if (sortedArray[middleIndex] < seekElement) {
      // Go to the right half of the array.
      leftIndex = middleIndex + 1;
    } else {
      // Go to the left half of the array.
      rightIndex = middleIndex - 1;
    }
  }

  return -1;
}
```

## 参考资料

- [GeeksForGeeks](https://www.geeksforgeeks.org/interpolation-search/)
- [Wikipedia](https://en.wikipedia.org/wiki/Interpolation_search)
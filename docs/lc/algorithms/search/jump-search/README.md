# 跳跃搜索

跳跃搜索（Jump Search）又称为块搜索（Block Search），是一种用于已排序数组的搜索算法。其基本思想是通过固定的步长跳跃或跳过一些元素，而不是搜索所有元素，从而检查较少的元素（相比于线性搜索）。

例如，假设我们有一个大小为 `n` 的数组 `arr[]`，以及一个块大小 `m`。我们在索引 `arr[0]`、`arr[m]`、`arr[2 * m]`、...、`arr[k * m]` 等处进行搜索。一旦我们找到区间 `arr[k * m] < x < arr[(k+1) * m]`，我们在索引 `k * m` 开始执行线性搜索操作，以找到元素 `x`。

**什么是最优的块大小？**
在最坏的情况下，我们需要进行 `n/m` 次跳跃，如果最后一个检查的值大于要搜索的元素，则我们还需要进行 `m - 1` 次比较进行线性搜索。因此，在最坏情况下，总的比较次数为 `((n/m) + m - 1)`。当 `m = √n` 时，函数 `((n/m) + m - 1)` 的值最小。因此，最佳的步长大小是 `m = √n`。

## 复杂度

**时间复杂度**：`O(√n)` - 因为我们按块大小 `√n` 进行搜索。


## 完整实现

```js
function jumpSearch(array, target) {
  const n = array.length;
  const blockSize = Math.floor(Math.sqrt(n));
  let step = blockSize;
  let prev = 0;

  // 跳跃定位目标值的可能范围
  while (array[Math.min(step, n) - 1] < target) {
    prev = step;
    step += blockSize;
    if (prev >= n) {
      return -1; // 目标值不在数组中
    }
  }

  // 在目标值的可能范围内进行线性搜索
  while (array[prev] < target) {
    prev++;
    if (prev === Math.min(step, n)) {
      return -1; // 目标值不在数组中
    }
  }

  // 检查找到的元素是否是目标值
  if (array[prev] === target) {
    return prev; // 找到目标值，返回索引
  }

  return -1; // 未找到目标值
}

```

## 参考资料

- [GeeksForGeeks](https://www.geeksforgeeks.org/jump-search/)
- [Wikipedia](https://en.wikipedia.org/wiki/Jump_search)
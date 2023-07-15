# 基数排序

在计算机科学中，**基数排序**（Radix Sort）是一种非比较的整数排序算法，它通过将具有相同有效位置和值的数字按位进行分组来排序具有整数键的数据。这需要使用位数制表示法，但由于整数可以表示字符串（例如，名称或日期）和特定格式的浮点数，因此基数排序不仅限于整数。

*名称的由来*

在数学的数字系统中，基数或底数是用于表示位置制数字系统中的数字的唯一数字的数量，包括数字零。例如，二进制系统（使用数字0和1）的基数为2，十进制系统（使用数字0到9）的基数为10。

## 效率

基数排序与其他排序算法相比的效率问题有些棘手，并且容易引起很多误解。基数排序是否与最佳的基于比较的排序算法同样高效、低效还是更高效，取决于所做的具体假设。对于具有单词大小 `w` 的整数键的 `n` 个键，基数排序的复杂度为 `O(wn)`。有时将 `w` 视为常数，这将使基数排序（对于足够大的 `n`）优于最佳的基于比较的排序算法，因为所有这些排序算法对 `n` 个键进行排序时执行的比较次数为 `O(n log n)`。然而，一般来说，`w` 不能被视为常数：如果所有的 `n` 个键都是不同的，那么为了能够在内存中存储它们，`w` 必须至少为 `log n`，这最多可以给出时间复杂度为 `O(n log n)`。这似乎使基数排序最多与最佳的基于比较的排序算法同样高效（如果键比 `log n` 长很多，则效率会更低）。

![基数排序](./images/radix-sort.png)


## 原理：

> 基数排序是一种多次分配和收集的排序算法。它按照位数进行排序，从最低有效位（个位）到最高有效位（最高位）。具体排序流程如下：

- 步骤1：将待排序的整数序列按照个位数进行排序，形成个位数上的桶；
- 步骤2：按照十位数将桶中的元素收集起来，形成十位数上的桶；
- 步骤3：重复上述步骤，直到最高有效位。

重复这个过程后，整个序列将按照位数从低到高逐渐有序。


```javascript
function radixSort(arr) {
  const max = Math.max(...arr); // 获取数组中的最大值
  const maxDigitCount = digitCount(max); // 获取最大值的位数

  for (let i = 0; i < maxDigitCount; i++) {
    const digitBuckets = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < arr.length; j++) {
      const digit = getDigit(arr[j], i + 1);
      digitBuckets[digit].push(arr[j]);
    }

    arr = [].concat(...digitBuckets);
  }

  return arr;
}

// 获取数字的位数
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// 获取数字指定位数上的值
function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place - 1)) % 10;
}
```

## 优化手段：
基数排序的性能可以通过以下优化手段进行改进：

### 负数的处理：

基数排序默认适用于非负整数序列。若序列中包含负数，可以将负数和非负数分开进行排序，再进行合并。


```javascript

// 场景1：对非负整数数组进行排序
function radixSort(arr) {
  // 基础代码实现省略
}

// 场景2：对包含负数的整数数组进行排序
function radixSortWithNegative(arr) {
  const negatives = arr.filter((num) => num < 0);
  const positives = arr.filter((num) => num >= 0);

  const sortedNegatives = radixSort(negatives.map((num) => Math.abs(num)))
    .reverse()
    .map((num) => -num);
  const sortedPositives = radixSort(positives);

  return sortedNegatives.concat(sortedPositives);
}
// 示例用法
const array = [170, 45, 75, -90, -802, 24, 2, 66];
const sortedArray = radixSortWithNegative(array);
console.log(sortedArray); // 输出: [-802, -90, 2, 24, 45, 66, 75, 170]
```

基数排序是一种非比较性排序算法，通过按照位数进行多次分配和收集，实现整数序列的排序。我们可以使用基础的基数排序代码实现排序流程，并根据实际需求选择不同的优化手段来提高性能。通过桶的优化、桶内排序优化和处理负数的方法，我们可以进一步优化基数排序算法。在 JavaScript 中，我们可以使用上述代码实现基数排序，并根据实际场景选择适当的优化策略来满足排序需求。


## 复杂度

| 名称                  | 最佳情况          | 平均情况             | 最坏情况               | 内存      | 稳定性    | 备注      |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **基数排序**          | n * k           | n * k               | n * k               | n + k     | 是       | k - 最长键的长度 |

## 参考资料

- [维基百科](https://en.wikipedia.org/wiki/Radix_sort)
- [YouTube](https://www.youtube.com/watch?v=XiuSW_mEn7g&index=62&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [ResearchGate](https://www.researchgate.net/figure/Simplistic-illustration-of-the-steps-performed-in-a-radix-sort-In-this-example-the_fig1_291086231)
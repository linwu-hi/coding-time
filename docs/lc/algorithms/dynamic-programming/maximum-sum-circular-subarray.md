# 最大和的循环子数组

## 题目描述

给定一个由整数数组 `nums` 组成的循环数组，找到具有最大和的连续子数组（允许循环）。子数组最少包含一个元素。

## 解题步骤

为了解决循环子数组的最大和问题，我们可以使用动态规划的思想来解决。

1. 处理普通的最大和子数组问题：首先，我们可以使用动态规划来解决普通的最大和子数组问题，即找到不循环的情况下的最大和子数组。我们可以使用 Kadane's 算法来处理此问题。

2. 处理循环的最大和子数组问题：对于循环数组，存在两种情况：
   - 情况一：最大和子数组不包含循环的起始点和结束点。在这种情况下，我们可以直接应用步骤 1 中的动态规划算法来计算最大和。
   - 情况二：最大和子数组包含循环的起始点和结束点。在这种情况下，我们需要使用两次动态规划算法来计算最大和：
     - 第一次，我们计算从数组起始位置到数组的倒数第二个位置的最大和，即 `maxSum1 = kadane(nums, 0, n-2)`，其中 `kadane()` 是步骤 1 中的动态规划算法。
     - 第二次，我们计算从数组的第二个位置到数组的末尾位置的最大和，即 `maxSum2 = kadane(nums, 1, n-1)`。

3. 取最大和：最后，我们比较两个情况下的最大和，即 `maxSum = max(maxSum1, maxSum2)`，其中 `max()` 是取两个数的较大值的函数。

下面是使用动态规划解决最大和的循环子数组问题的算法框架：

```javascript
function maxSubarraySum(nums) {
  // 计算不循环的最大和子数组
  function kadane(arr, start, end) {
    let maxSum = -Infinity;
    let currSum = 0;

    for (let i = start; i <= end; i++) {
      currSum = Math.max(arr[i], currSum + arr[i]);
      maxSum = Math.max(maxSum, currSum);
    }

    return maxSum;
  }

  const n = nums.length;

  // 情况一：最大和子数组不包含循环的起始点和结束点
  const maxSum1 = kadane(nums, 0, n - 2);

  // 情况二：最大和子数组包含循环的起始点和结束点
  const maxSum2 = kadane(nums, 1, n - 1);

  // 取最大和
  const maxSum = Math.max(maxSum1, maxSum2);

  return maxSum;
}
```
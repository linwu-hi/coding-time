# 三个非重叠子数组的最大和

## 题目描述

给定一个整数数组 `nums` 和一个整数 `k`，你需要找到三个非重叠子数组的最大和。这里的非重叠是指两个子数组的起始索引不能相同。

你需要返回这个最大和。

## 解题步骤

为了解决三个非重叠子数组的最大和问题，我们可以使用动态规划的思想来解决。

1. 定义状态：我们使用一个二维数组 `dp` 来表示动态规划的状态，其中 `dp[i][j]` 表示前 `i` 个数中以第 `j` 个数结尾的长度为 `k` 的子数组的最大和。
2. 初始化状态：我们将 `dp` 数组初始化为一个全为 `0` 的二维数组。
3. 定义状态转移方程：对于每个位置 `i`，我们需要枚举可能的分割点 `j`，将前 `j` 个数划分为一个子数组，再将剩余的数划分为两个子数组。我们可以通过递归计算这三个子数组的最大和，并将其与当前位置的数相加，得到以第 `i` 个数结尾的长度为 `k` 的子数组的最大和。我们选择所有分割点中最大的结果作为当前位置的最大和，即 `dp[i][j] = Math.max(dp[i][j], dp[i-k][j-1] + nums[i])`，其中 `k` 表示子数组的长度。
4. 最终结果：最大和将会出现在 `dp[n-1][k-1]` 的位置上，其中 `n` 是数组 `nums` 的长度。

下面是使用动态规划解决三个非重叠子数组的最大和问题的算法框架：

```javascript
function maxSumOfThreeSubarrays(nums, k) {
  const n = nums.length;
  const dp = new Array(n).fill(null).map(() => new Array(3).fill(0));
  const maxSums = new Array(3).fill(0);

  // 计算每个子数组的和
  for (let i = 0; i < k; i++) {
    for (let j = 0; j < 3; j++) {
      maxSums[j] += nums[i];
    }
  }

  // 计算动态规划的状态
  for (let i = k; i < n; i++) {
    for (let j = 0; j < 3; j++) {
      maxSums[j] += nums[i];
      maxSums[j] -= nums[i - k];
      dp[i][j] = Math.max(dp[i - 1][j], (j > 0 ? dp[i - k][j - 1] : 0) + maxSums[j]);
    }
  }

  return dp[n - 1][2];
}
```

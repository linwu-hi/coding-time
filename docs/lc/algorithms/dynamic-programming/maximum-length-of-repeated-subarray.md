# 最长重复子数组

## 题目描述

给定两个整数数组 `nums1` 和 `nums2`，返回两个数组中公共的、长度最长的子数组的长度。

## 解题步骤

为了解决最长重复子数组的问题，我们可以使用动态规划的思想来解决。

1. 定义状态：我们使用一个二维数组 `dp` 来表示动态规划的状态，其中 `dp[i][j]` 表示以 `nums1[i]` 和 `nums2[j]` 结尾的最长公共子数组的长度。
2. 初始化状态：我们将 `dp` 数组初始化为一个与 `nums1` 和 `nums2` 数组大小相同的二维数组，并将第一行和第一列的元素初始化为 `0`。
3. 定义状态转移方程：对于每个位置 `(i, j)`，如果 `nums1[i]` 等于 `nums2[j]`，则 `dp[i][j] = dp[i-1][j-1] + 1`，表示以 `nums1[i]` 和 `nums2[j]` 结尾的公共子数组的长度加一；如果 `nums1[i]` 不等于 `nums2[j]`，则 `dp[i][j] = 0`，表示以 `nums1[i]` 和 `nums2[j]` 结尾的公共子数组的长度为零。
4. 最终结果：在遍历过程中，记录最长的公共子数组的长度，即 `maxLen = Math.max(maxLen, dp[i][j])`。

下面是使用动态规划解决最长重复子数组问题的算法框架：

```javascript
function findLength(nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  let maxLen = 0;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        maxLen = Math.max(maxLen, dp[i][j]);
      }
    }
  }

  return maxLen;
}
```
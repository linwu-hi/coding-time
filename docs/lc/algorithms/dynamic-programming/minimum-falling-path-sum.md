# 最小下降路径和

## 题目描述

给定一个大小为 `n x n` 的二维整数数组 `matrix`，找到从第一行到最后一行的最小下降路径和。每一步只能移动到下一行中相邻的元素上。在这里，相邻的元素指的是位于当前元素右下方和右下方的两个元素。

要求路径上的数字总和最小。

## 解题步骤

为了解决最小下降路径和的问题，我们可以使用动态规划的思想来解决。

1. 定义状态：我们使用一个二维数组 `dp` 来表示动态规划的状态，其中 `dp[i][j]` 表示从第一行到第 `i` 行的最小下降路径和，且路径的最后一个元素位于第 `i` 行的第 `j` 列。
2. 初始化状态：我们将 `dp` 数组初始化为一个与 `matrix` 数组相同大小的二维数组，并将第一行的元素复制到 `dp` 数组中。
3. 定义状态转移方程：对于每个位置 `(i, j)`，我们需要考虑从上一行的哪个位置 `(i-1, k)` 转移而来，其中 `k` 的取值范围为 `[j-1, j, j+1]`，我们选择转移过来的路径中和最小的那个路径，即 `dp[i][j] = matrix[i][j] + Math.min(dp[i-1][j-1], dp[i-1][j], dp[i-1][j+1])`。
4. 最终结果：路径的最小下降路径和将会出现在 `dp[n-1][j]` 中的最小值，其中 `n` 是数组的大小。

下面是使用动态规划解决最小下降路径和问题的算法框架：

```javascript
function minFallingPathSum(matrix) {
  const n = matrix.length;
  const dp = [...matrix];

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n; j++) {
      dp[i][j] += Math.min(
        dp[i - 1][j - 1] ?? Infinity,
        dp[i - 1][j],
        dp[i - 1][j + 1] ?? Infinity
      );
    }
  }

  return Math.min(...dp[n - 1]);
}
```
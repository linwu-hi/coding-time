# 最小叶值生成树

## 题目描述

给定一个正整数数组 `arr`，你需要构建一个满足以下条件的二叉树：

1. 每个非叶节点的值等于其左子树和右子树中的最大叶节点值的乘积。
2. 数组中每个值都可以看作是一个叶节点。

你需要计算构建的二叉树的所有叶节点值之和的最小值。

## 解题步骤

为了解决最小叶值生成树的问题，我们可以使用动态规划的思想来解决。

1. 定义状态：我们使用一个二维数组 `dp` 来表示最小叶值生成树的状态，其中 `dp[i][j]` 表示从第 `i` 个数到第 `j` 个数构建的二叉树的最小叶节点值之和。
2. 初始化状态：我们将 `dp` 数组初始化为一个全为 `Infinity` 的二维数组，表示初始状态下所有的值都为无穷大。
3. 定义状态转移方程：对于每个区间 `[i, j]`，我们需要枚举其中的每个分割点 `k`，将其划分为左右两个子区间。然后，我们可以通过递归计算左右子区间的最小叶节点值之和，并将其与当前区间的最小叶节点值相乘，得到当前区间的最小叶节点值之和。我们选择所有分割点中最小的结果作为当前区间的最小叶节点值之和，即 `dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k+1][j] + maxLeft * maxRight)`，其中 `maxLeft` 和 `maxRight` 分别表示左右子区间的最大叶节点值。
4. 最终结果：`dp[0][n-1]` 即为构建的二叉树的所有叶节点值之和的最小值，其中 `n` 是数组 `arr` 的长度。

下面是使用动态规划解决最小叶值生成树问题的算法框架：

```javascript
function mctFromLeafValues(arr) {
  const n = arr.length;
  const dp = new Array(n).fill(null).map(() => new Array(n).fill(Infinity));

  for (let len = 1; len < n; len++) {
    for (let i = 0; i < n - len; i++) {
      const j = i + len;
      for (let k = i; k < j; k++) {
        const maxLeft = Math.max(...arr.slice(i, k + 1));
        const maxRight = Math.max(...arr.slice(k + 1, j + 1));
        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k + 1][j] + maxLeft * maxRight);
      }
    }
  }

  return dp[0][n - 1];
}
```
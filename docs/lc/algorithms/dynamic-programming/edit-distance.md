# 编辑距离

## 题目描述

给定两个单词 `word1` 和 `word2`，计算将 `word1` 转换为 `word2` 所需的最小操作次数。

可以对一个单词执行以下三种操作：
1. 插入一个字符
2. 删除一个字符
3. 替换一个字符

## 解题步骤

为了计算将一个单词转换为另一个单词所需的最小操作次数，我们可以使用动态规划的思想来解决问题。

1. 定义状态：我们可以将问题转化为对于每个字符对 `(i, j)`，`word1` 的前 `i` 个字符和 `word2` 的前 `j` 个字符的最小操作次数。令 `dp[i][j]` 表示 `word1` 的前 `i` 个字符和 `word2` 的前 `j` 个字符的最小操作次数。

2. 初始状态：当一个字符串为空时，需要的操作次数等于另一个字符串的长度。因此，初始状态为 `dp[i][0] = i` 和 `dp[0][j] = j`。

3. 状态转移方程：对于每个字符对 `(i, j)`，我们需要考虑两种情况：
   - 如果 `word1[i]` 等于 `word2[j]`，那么我们不需要进行任何操作，即 `dp[i][j] = dp[i-1][j-1]`。
   - 如果 `word1[i]` 不等于 `word2[j]`，我们可以执行插入、删除或替换操作，我们需要选择其中操作次数最小的那个，即 `dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1`。

4. 最终解：问题的解即为 `dp[m][n]`，其中 `m` 是 `word1` 的长度，`n` 是 `word2` 的长度。

下面是使用动态规划解决编辑距离问题的算法框架：

```javascript
function minDistance(word1, word2) {
  const m = word1.length;
  const n = word2.length;
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }

  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }
    }
  }

  return dp[m][n];
}
```


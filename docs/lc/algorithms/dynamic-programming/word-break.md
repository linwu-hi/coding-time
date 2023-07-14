# 单词拆分

## 题目描述

给定一个非空字符串 `s` 和一个包含非空单词列表的字典 `wordDict`，确定 `s` 是否可以被拆分为一个或多个字典中的单词。

## 解题步骤

为了确定给定字符串是否可以被拆分为字典中的单词，我们可以使用动态规划的思想来解决问题。

1. 定义状态：我们可以将问题转化为对于每个字符串的前缀，判断其是否可以被拆分为字典中的单词。令 `dp[i]` 表示字符串 `s` 的前 `i` 个字符是否可以被拆分为字典中的单词。

2. 初始状态：根据题目的约束，空字符串可以被认为是可以被拆分的。因此，初始状态为 `dp[0] = true`。

3. 状态转移方程：对于每个位置 `i`，我们需要判断字符串的前缀 `s[0:i]` 是否可以被拆分为字典中的单词。我们可以遍历从 `0` 到 `i-1` 的位置 `j`，并检查前缀 `s[0:j]` 是否可以被拆分为字典中的单词，以及剩余部分 `s[j:i]` 是否存在于字典中。即 `dp[i] = dp[j] && wordDict.includes(s.substring(j, i))`。

4. 最终解：问题的解即为 `dp[n]`，其中 `n` 是字符串 `s` 的长度。

下面是使用动态规划解决单词拆分问题的算法框架：

```javascript
function wordBreak(s, wordDict) {
  const n = s.length;
  const dp = new Array(n + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDict.includes(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[n];
}
```
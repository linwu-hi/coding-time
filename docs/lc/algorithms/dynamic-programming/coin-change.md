# 零钱兑换

## 题目描述

给定不同面额的硬币 `coins` 和一个总金额 `amount`，编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能够凑出总金额，返回 `-1`。

## 解题步骤

为了计算凑成总金额的最少硬币个数，我们可以使用动态规划的思想来解决问题。

1. 定义状态：我们可以将问题转化为凑出每个金额所需的最少硬币个数。令 `dp[i]` 表示凑出金额 `i` 所需的最少硬币个数。

2. 初始状态：根据题目的约束，凑出金额为 `0` 的最少硬币个数为 `0`。即 `dp[0] = 0`。

3. 状态转移方程：对于金额 `i`，我们可以选择任意一种面额的硬币 `coin`，并从 `i-coin` 的金额中选择最少硬币个数，然后再加上一枚硬币 `coin`。因此，状态转移方程为 `dp[i] = min(dp[i - coin] + 1)`，其中 `coin` 取遍所有硬币的面额。

4. 最终解：问题的解即为凑出总金额所需的最少硬币个数，即 `dp[amount]`。

下面是使用动态规划解决零钱兑换问题的算法框架：

```javascript
function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}
```


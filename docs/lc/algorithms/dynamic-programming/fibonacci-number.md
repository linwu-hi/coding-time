# 斐波那契数

## 题目描述

给定一个非负整数 `n`，计算 Fibonacci 数列中第 `n` 个数字的值。

Fibonacci 数列是一个递归定义的数列，其中每个数字是前两个数字之和。数列的前两个数字是 0 和 1，即 `fib(0) = 0`，`fib(1) = 1`。对于 `n > 1` 的情况，`fib(n) = fib(n-1) + fib(n-2)`。

例如，Fibonacci 数列的前几个数字是：0, 1, 1, 2, 3, 5, 8, 13, 21, ...

## 解题步骤

为了计算 Fibonacci 数列中第 `n` 个数字的值，我们可以使用动态规划的思想来优化计算过程。

1. 定义状态：我们可以将 Fibonacci 数列的第 `n` 个数字作为状态。令 `dp[i]` 表示第 `i` 个数字的值。

2. 初始状态：根据 Fibonacci 数列的定义，我们知道 `dp[0] = 0`，`dp[1] = 1`。

3. 状态转移方程：根据 Fibonacci 数列的递推关系 `dp[i] = dp[i-1] + dp[i-2]`，我们可以使用状态转移方程来计算 Fibonacci 数列的其他数字。从 `i = 2` 开始，依次计算 `dp[2]` 到 `dp[n]` 的值。

4. 边界条件：无需特别处理边界条件，因为初始状态已经包含了边界情况。

下面是使用动态规划解决 Fibonacci 数问题的算法框架：

```javascript
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  const dp = new Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}
```


# 冷冻期下的买卖股票的最佳时机

## 题目描述

给定一个整数数组 `prices`，其中第 `i` 个元素代表某只股票在第 `i` 天的价格。可以无限次地完成交易（买入和卖出一支股票算作一次交易），但是有一个限制条件：卖出股票后的第二天必须休息（即冷冻期）。求能够获得的最大利润。

## 解题步骤

为了解决冷冻期下的买卖股票的最佳时机问题，我们可以使用动态规划的思想来解决。

1. 定义状态：我们使用三个一维数组来表示动态规划的状态，分别是 `buy`、`sell` 和 `cooldown`。其中，`buy[i]` 表示第 `i` 天结束时，最后一个操作是买入股票所能获得的最大利润；`sell[i]` 表示第 `i` 天结束时，最后一个操作是卖出股票所能获得的最大利润；`cooldown[i]` 表示第 `i` 天结束时，最后一个操作是休息（冷冻期）所能获得的最大利润。
2. 初始化状态：将 `buy[0]` 初始化为 `-prices[0]`，表示第一天结束时买入股票的利润为负数；`sell[0]` 和 `cooldown[0]` 初始化为 `0`。
3. 定义状态转移方程：
   - 对于 `buy[i]`，我们可以选择在第 `i` 天买入股票或者不操作。如果选择买入股票，那么前一天的操作必须是冷冻期，即 `buy[i] = cooldown[i-1] - prices[i]`。如果选择不操作，那么 `buy[i]` 与前一天的买入股票利润相同，即 `buy[i] = buy[i-1]`。
   - 对于 `sell[i]`，我们可以选择在第 `i` 天卖出股票或者不操作。如果选择卖出股票，那么前一天的操作必须是买入股票，即 `sell[i] = buy[i-1] + prices[i]`。如果选择不操作，那么 `sell[i]` 与前一天的卖出股票利润相同，即 `sell[i] = sell[i-1]`。
   - 对于 `cooldown[i]`，由于冷冻期的限制，它只能在前一天卖出股票后进入冷冻期，即 `cooldown[i] = sell[i-1]`。
4. 最终结果：遍历完所有天数后，最大利润为卖出股票所能获得的最大利润，即 `maxProfit = sell[n-1]`，其中 `n` 是数组 `prices` 的长度。

下面是使用动态规划解决冷冻期下的买卖股票的最佳时机问题的算法框架：

```javascript
function maxProfit(prices) {
  const n = prices.length;
  if (n === 0) {
    return 0;
  }

  const buy = Array(n).fill(0);
  const sell = Array(n).fill(0);
  const cooldown = Array(n).fill(0);

  buy[0] = -prices[0];

  for (let i = 1; i < n; i++) {
    buy[i] = Math.max(cooldown[i - 1] - prices[i], buy[i - 1]);
    sell[i] = Math.max(buy[i - 1] + prices[i], sell[i - 1]);
    cooldown[i] = sell[i - 1];
  }

  return sell[n - 1];
}
```
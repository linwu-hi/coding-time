# 最低票价

## 题目描述

给定一组旅行日期 `days` 和对应的票价 `costs`，你需要购买一张车票以完成整个旅行。车票有三种不同的类型：1 天通行证、7 天通行证和 30 天通行证。我们可以按任意顺序购买这些通行证。

请你计算完成旅行所需的最低票价。

## 解题步骤

为了解决最低票价问题，我们可以使用动态规划的思想来解决。

1. 定义状态：我们使用一个数组 `dp` 来表示最低票价，其中 `dp[i]` 表示在第 `i` 天需要的最低票价。
2. 初始化状态：我们将 `dp` 数组初始化为一个长度为 `days.length + 1` 的数组，初始值为 `Infinity`，表示在旅行结束后的一天，我们不需要再购买任何车票。
3. 定义状态转移方程：对于每一天 `i`，我们有三种选择：
   - 如果这一天不需要旅行，那么 `dp[i]` 等于前一天的最低票价，即 `dp[i] = dp[i-1]`。
   - 如果这一天需要旅行，我们可以考虑购买 1 天、7 天或 30 天的通行证。我们选择最低的票价作为当前的最低票价。即 `dp[i] = Math.min(dp[i], dp[i-1] + costs[0], dp[i-7] + costs[1], dp[i-30] + costs[2])`。
4. 最终结果：`dp[days.length]` 即为完成整个旅行所需的最低票价。

下面是使用动态规划解决最低票价问题的算法框架：

```javascript
function mincostTickets(days, costs) {
  const dp = new Array(days.length + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= days.length; i++) {
    if (!days.includes(i)) {
      dp[i] = dp[i - 1];
    } else {
      dp[i] = Math.min(
        dp[i - 1] + costs[0],
        dp[Math.max(i - 7, 0)] + costs[1],
        dp[Math.max(i - 30, 0)] + costs[2]
      );
    }
  }

  return dp[days.length];
}
```
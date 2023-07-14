# 加油站

## 题目描述

给定一个环形路线上的加油站数组 `gas` 和消耗汽油的数组 `cost`，其中 `gas[i]` 表示第 `i` 个加油站的汽油量，`cost[i]` 表示从第 `i` 个加油站前往下一个加油站所需的汽油量。

你的任务是找到一个出发加油站的索引，使得从该加油站出发能够环绕一圈并返回起始加油站，并且在整个过程中汽油剩余量不会为负数。如果不存在这样的加油站，返回 -1。

## 解题步骤

为了解决加油站问题，我们可以使用贪心算法来解决。

1. 初始化两个变量 `totalGas` 和 `currentGas`，分别表示加油站总的汽油量和当前汽油剩余量，初始值都为 0。
2. 初始化一个变量 `start`，表示出发加油站的索引，初始值为 0。
3. 遍历加油站数组 `gas` 和消耗数组 `cost`，计算累计汽油剩余量和总的汽油量：
   - 将当前加油站的汽油量加到 `totalGas` 上。
   - 将从当前加油站前往下一个加油站所需的汽油量加到 `currentGas` 上。
   - 如果 `currentGas` 小于 0，表示从当前加油站出发无法到达下一个加油站，因此将出发加油站设为下一个加油站，并将 `currentGas` 重置为 0。
4. 遍历结束后，判断 `totalGas` 是否大于等于 `currentGas`，如果是，则返回出发加油站的索引；否则，返回 -1。

下面是使用贪心算法解决加油站问题的算法框架：

```javascript
function canCompleteCircuit(gas, cost) {
  let totalGas = 0;
  let currentGas = 0;
  let start = 0;

  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i];
    currentGas += gas[i] - cost[i];

    if (currentGas < 0) {
      start = i + 1;
      currentGas = 0;
    }
  }

  return totalGas >= currentGas ? start : -1;
}
```

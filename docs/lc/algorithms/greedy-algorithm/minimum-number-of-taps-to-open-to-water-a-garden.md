# 最少的水龙头灌溉花园

## 题目描述

有一个长度为 `n` 的花园，每个位置都可以安装一个水龙头，用于灌溉花园。给定一个长度为 `n` 的整数数组 `ranges`，其中 `ranges[i]` 表示第 `i` 个水龙头能够覆盖的范围。现在需要找到最少需要安装多少个水龙头，才能确保整个花园中的每个位置都能被水龙头覆盖到。

## 解题步骤

为了解决最少水龙头的问题，我们可以使用贪心算法来解决。贪心算法的思路是优先选择能够覆盖尽可能多位置的水龙头。

我们按照以下步骤进行解题：

1. 创建一个长度为 `n+1` 的数组 `dp`，初始化所有元素为 `Infinity`，表示每个位置都需要一个水龙头来覆盖。
2. 遍历水龙头的范围数组 `ranges`，对于每个水龙头的范围 `(i, j)`：
   - 如果 `i <= n`，则更新 `dp[i]` 为 `Math.min(dp[i], j)`。这表示在位置 `i` 能够覆盖到的最远位置是 `j`。
3. 初始化变量 `end` 为 0，表示当前覆盖到的最远位置。
4. 初始化变量 `count` 为 0，表示需要安装的水龙头数量。
5. 从位置 0 开始，遍历数组 `dp`：
   - 如果当前位置 `i` 大于 `end`，则说明需要在位置 `i` 安装一个水龙头，更新 `end` 为 `dp[i]`，并将 `count` 增加 1。
6. 最终返回 `count`，即所需安装的最少水龙头数量。

以下是使用贪心算法解决最少水龙头问题的算法框架：

```javascript
function minTaps(n, ranges) {
  const dp = Array(n + 1).fill(Infinity);
  
  for (let i = 0; i < ranges.length; i++) {
    const left = Math.max(i - ranges[i], 0);
    const right = Math.min(i + ranges[i], n);
    dp[left] = Math.min(dp[left], right);
  }

  let end = 0;
  let count = 0;

  for (let i = 0; i <= n; i++) {
    if (i > end) {
      return -1;
    }
    if (i > end) {
      end = dp[i];
      count++;
    }
  }

  return count;
}
```


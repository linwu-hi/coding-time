# 无重叠区间

## 题目描述

给定一个由多个区间组成的数组 `intervals`，找到需要移除的区间数量，使得剩余的区间没有重叠。要求返回移除的最少区间数量。

## 解题步骤

为了解决无重叠区间的问题，我们可以使用贪心算法来解决。贪心算法的思路是优先选择结束位置较小的区间，这样可以给后面的区间留下更多的空间。

我们按照以下步骤进行解题：

1. 将区间数组 `intervals` 按照结束位置的大小进行升序排序。
2. 初始化变量 `end` 为第一个区间的结束位置。
3. 初始化变量 `count` 为 0，表示需要移除的区间数量。
4. 从第二个区间开始遍历，对于每个区间 `(start, end)`：
   - 如果当前区间的开始位置大于等于 `end`，表示当前区间与前一个区间没有重叠，更新 `end` 为当前区间的结束位置。
   - 否则，当前区间与前一个区间重叠，需要移除该区间，将 `count` 增加 1。
5. 返回 `count`，即需要移除的最少区间数量。

以下是使用贪心算法解决无重叠区间问题的算法框架：

```javascript
function eraseOverlapIntervals(intervals) {
  intervals.sort((a, b) => a[1] - b[1]);

  let end = intervals[0][1];
  let count = 0;

  for (let i = 1; i < intervals.length; i++) {
    const [start, currEnd] = intervals[i];

    if (start >= end) {
      end = currEnd;
    } else {
      count++;
    }
  }

  return count;
}
```
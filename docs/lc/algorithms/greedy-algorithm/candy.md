# 分糖果

## 题目描述

给定一个整数数组 `ratings`，表示每个孩子的评分。现在你要按照以下规则给这些孩子分糖果：

- 每个孩子至少分配到 1 个糖果。
- 如果一个孩子的评分比他相邻的孩子高，那么他应该得到更多的糖果。

你需要计算出最少需要分配多少糖果才能满足上述要求。

## 解题步骤

为了解决分糖果的问题，我们可以使用贪心算法来解决。

1. 首先初始化一个长度为 `ratings.length` 的糖果数组 `candies`，用于记录每个孩子分配到的糖果数量，初始值都为 1。
2. 从左到右遍历 `ratings` 数组，比较当前孩子的评分与前一个孩子的评分：
   - 如果当前孩子的评分大于前一个孩子的评分，将当前孩子分配到的糖果数量设为前一个孩子分配到的糖果数量加一。
   - 否则，不做任何操作。
3. 从右到左再次遍历 `ratings` 数组，比较当前孩子的评分与后一个孩子的评分：
   - 如果当前孩子的评分大于后一个孩子的评分，并且当前孩子分配到的糖果数量小于等于后一个孩子分配到的糖果数量，将当前孩子分配到的糖果数量设为后一个孩子分配到的糖果数量加一。
   - 否则，不做任何操作。
4. 遍历完成后，将糖果数组 `candies` 中的所有元素相加，得到最少需要分配的糖果数量。

下面是使用贪心算法解决分糖果问题的算法框架：

```javascript
function minCandies(ratings) {
  const candies = Array(ratings.length).fill(1);

  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) {
      candies[i] = candies[i + 1] + 1;
    }
  }

  return candies.reduce((sum, candy) => sum + candy, 0);
}
```
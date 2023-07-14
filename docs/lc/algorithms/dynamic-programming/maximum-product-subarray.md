# 最大连续乘积子数组

## 题目描述

给定一个整数数组 `nums`，找到一个具有最大乘积的连续子数组（至少包含一个数字）。

## 解题步骤

为了计算最大连续乘积子数组，我们可以使用动态规划的思想来解决问题。

1. 定义状态：我们可以将问题转化为对于每个位置的状态，即以该位置为结尾的最大乘积子数组的乘积。令 `dpMax[i]` 表示以第 `i` 个位置为结尾的最大乘积子数组的乘积。

2. 定义辅助状态：我们还需要定义一个辅助状态 `dpMin[i]`，表示以第 `i` 个位置为结尾的最小乘积子数组的乘积。这是因为乘积可能存在负数，而负数与负数相乘可以得到最大的乘积。

3. 初始状态：对于第一个位置，最大乘积和最小乘积都为 `nums[0]`，即 `dpMax[0] = dpMin[0] = nums[0]`。

4. 状态转移方程：对于位置 `i`，我们有两种情况：
   - `nums[i]` 为正数，那么最大乘积和最小乘积都有可能扩大或缩小，因此我们需要比较 `dpMax[i-1] * nums[i]` 和 `dpMin[i-1] * nums[i]` 的大小，并取最大值和最小值。
   - `nums[i]` 为负数，那么最大乘积和最小乘积的关系将会颠倒，我们同样需要比较 `dpMax[i-1] * nums[i]` 和 `dpMin[i-1] * nums[i]` 的大小，并取最大值和最小值。

   综上所述，我们可以得到状态转移方程为：

   `dpMax[i] = max(nums[i], dpMax[i-1] * nums[i], dpMin[i-1] * nums[i])`

   `dpMin[i] = min(nums[i], dpMax[i-1] * nums[i], dpMin[i-1] * nums[i])`

5. 最终解：问题的解即为所有 `dpMax[i]` 中的最大值。

下面是使用动态规划解决最大连续乘积子数组问题的算法框架：

```javascript
function maxProduct(nums) {
  const n = nums.length;

  // 初始化状态数组
  const dpMax = new Array(n);
  const dpMin = new Array(n);

  // 初始状态
  dpMax[0] = nums[0];
  dpMin[0] = nums[0];

  // 计算最大连续乘积子数组的乘积
  let maxProduct = dpMax[0];
  for (let i = 1; i < n; i++) {
    dpMax[i] = Math.max(nums[i], dpMax[i - 1] * nums[i], dpMin[i - 1] * nums[i]);
    dpMin[i] = Math.min(nums[i], dpMax[i - 1] * nums[i], dpMin[i - 1] * nums[i]);
    maxProduct = Math.max(maxProduct, dpMax[i]);
  }

  // 返回最大连续乘积
  return maxProduct;
}
```
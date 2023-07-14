# 最小长度子数组和


给定一个正整数数组`nums`和一个正整数`target`，找出数组中满足其和≥`target`的最短子数组的长度，如果不存在满足条件的子数组，返回0。

**示例：**

输入：nums = [2,3,1,2,4,3]，target = 7
输出：2
解释：子数组 [4,3] 的和为 7，且长度最小。

输入：nums = [1,4,4]，target = 4
输出：1
解释：子数组 [4] 的和为 4，且长度最小。

## **题目分析与解题步骤：**

这个问题可以使用滑动窗口算法来解决。我们可以维护一个窗口，不断地向右扩展窗口，直到窗口内的元素和≥`target`。然后，我们尝试将窗口的左边界向右收缩，以寻找更短的满足条件的子数组。

解题步骤如下：

1. 初始化两个指针`left`和`right`，都指向数组的开始位置。初始化窗口的和`windowSum`为0，最小子数组的长度`minLength`为无穷大。

2. 不断向右移动`right`指针，扩大窗口。在每次移动时，将当前元素添加到窗口的和`windowSum`中。

3. 当窗口的和≥`target`时，更新最小子数组的长度`minLength`为当前窗口的大小，并尝试将窗口的左边界向右收缩。

4. 在收缩窗口时，从窗口的左边界开始，将左边界的元素从窗口的和`windowSum`中减去，并将左边界向右移动。

5. 重复步骤2-4，直到`right`指针到达数组的末尾。

6. 返回最小子数组的长度`minLength`。如果不存在满足条件的子数组，返回0。

## **JavaScript解题框架：**


```javascript
function minSubArrayLen(nums, target) {
    let left = 0;
    let minLength = Infinity;
    let windowSum = 0;

    for (let right = 0; right < nums.length; right++) {
        windowSum += nums[right];

        while (windowSum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            windowSum -= nums[left];
            left++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}
```

在这个框架中，我们使用`left`和`right`两个指针来构建窗口，`windowSum`用于记录窗口内元素的和，`minLength`记录最小子数组的长度。

我们不断向右移动`right`指针，将当前元素添加到窗口的和`windowSum`中。当`windowSum`≥`target`时，我们尝试收缩窗口，从窗口的左边界开始，将左边界的元素从`windowSum`中减去，并将左边界向右移动。在每次收缩窗口时，我们更新最小子数组的长度`minLength`为当前窗口的大小。

最后，返回`minLength`作为结果。如果不存在满足条件的子数组，返回0。

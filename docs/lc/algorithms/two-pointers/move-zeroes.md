# 移动零

## **问题描述**：

给定一个数组 nums，编写一个函数，将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:

输入: [0,1,0,3,12]

输出: [1,3,12,0,0]

注意:

1. 必须在原数组上操作，不能拷贝额外的数组。
2. 尽量减少操作次数。

## **解题步骤**：

1. 设置两个指针，一个快指针，一个慢指针。快指针用于遍历数组，慢指针用于标记非零元素的最后一个位置。

2. 当快指针遍历数组时，如果遇到非零元素，将这个元素移到慢指针的位置，然后慢指针向前移动一位。

3. 当快指针遍历完整个数组后，慢指针及其后面的所有位置都应该被赋值为 0。

## **解题框架**：


```javascript
function moveZeroes(nums) {
    let lastNonZeroFoundAt = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZeroFoundAt++] = nums[i];
        }
    }
    for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
        nums[i] = 0;
    }
}
```

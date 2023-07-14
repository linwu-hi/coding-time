# 两数之和

## **问题描述**：

给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回它们的数组下标。你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例：
给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]

## 双指针





### **解题步骤**：

1. 首先，我们需要定义一个哈希表（在 JavaScript 中可以使用对象表示），用于保存遍历过程中每个元素的值和对应的索引。

2. 遍历给定的数组 nums，对于每个元素，首先计算 target 与当前元素的差值（称之为 complement）。

3. 检查哈希表中是否存在 complement，如果存在，那么我们已经找到了答案，返回 complement 在哈希表中的索引和当前元素的索引。

4. 如果哈希表中不存在 complement，那么将当前元素的值和索引添加到哈希表中，继续遍历下一个元素。

5. 如果遍历完整个数组都没有找到答案，那么返回 null。

### **解题框架**：


```javascript
function twoSum(nums, target) {
    // 1. 定义哈希表
    let map = {};

    // 2. 遍历数组
    for (let i = 0; i < nums.length; i++) {
        // 3. 计算 complement
        let complement = target - nums[i];

        // 4. 检查哈希表
        if (map[complement] !== undefined) {
            // 5. 如果找到答案，返回答案
            return [map[complement], i];
        } else {
            // 6. 如果没有找到答案，将当前元素添加到哈希表
            map[nums[i]] = i;
        }
    }

    // 7. 如果遍历结束还没有找到答案，返回 null
    return null;
}
```



## 基于哈希表

### **解题步骤**：

1. 首先，我们需要定义一个哈希表（在 JavaScript 中可以使用对象表示），用于保存遍历过程中每个元素的值和对应的索引。

2. 遍历给定的数组 nums，对于每个元素，首先计算 target 与当前元素的差值（称之为 complement）。

3. 检查哈希表中是否存在 complement，如果存在，那么我们已经找到了答案，返回 complement 在哈希表中的索引和当前元素的索引。

4. 如果哈希表中不存在 complement，那么将当前元素的值和索引添加到哈希表中，继续遍历下一个元素。

5. 如果遍历完整个数组都没有找到答案，那么返回 null。

### **解题框架**：


```javascript
function twoSum(nums, target) {
    // 1. 定义哈希表
    let map = {};

    // 2. 遍历数组
    for (let i = 0; i < nums.length; i++) {
        // 3. 计算 complement
        let complement = target - nums[i];

        // 4. 检查哈希表
        if (map[complement] !== undefined) {
            // 5. 如果找到答案，返回答案
            return [map[complement], i];
        } else {
            // 6. 如果没有找到答案，将当前元素添加到哈希表
            map[nums[i]] = i;
        }
    }

    // 7. 如果遍历结束还没有找到答案，返回 null
    return null;
}
```

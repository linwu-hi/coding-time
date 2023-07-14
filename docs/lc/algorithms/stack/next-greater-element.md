# **下一个更大元素**

给定一个数组`nums1`和一个数组`nums2`，其中`nums1`是`nums2`的子集。对于`nums1`中的每个元素，求出在`nums2`中对应元素的下一个更大的元素。如果不存在下一个更大的元素，则将其设为-1。

**示例：**

输入：nums1 = [4,1,2], nums2 = [1,3,4,2]
输出：[-1,3,-1]
解释：nums1中的元素4在nums2中的下一个更大的元素是-1，元素1的下一个更大的元素是3，元素2的下一个更大的元素是-1。

## **题目分析与解题步骤：**

这个问题可以使用栈来解决。我们可以遍历`nums2`，并使用一个栈来保存尚未找到下一个更大元素的元素。对于每个元素，我们将其入栈，并与栈顶元素比较。如果当前元素大于栈顶元素，则说明当前元素是栈顶元素的下一个更大元素，将栈顶元素出栈，并记录下一个更大元素的关系。最后，对于栈中剩余的元素，将其下一个更大元素设为-1。

解题步骤如下：

1. 创建一个栈`stack`，用于保存尚未找到下一个更大元素的元素。

2. 创建一个哈希表`nextGreater`，用于保存元素的下一个更大元素关系。

3. 遍历数组`nums2`，并执行以下操作：

   - 如果栈不为空且当前元素大于栈顶元素，则栈顶元素的下一个更大元素就是当前元素，将栈顶元素出栈，并在`nextGreater`中记录该关系。

   - 将当前元素入栈。

4. 遍历栈中剩余的元素，将它们的下一个更大元素设为-1，并在`nextGreater`中记录该关系。

5. 遍历数组`nums1`，根据`nextGreater`中的记录，找到每个元素的下一个更大元素，并保存在结果数组中。

6. 返回结果数组作为最终的解答。

## **JavaScript解题框架：**


```javascript

function nextGreaterElement(nums1, nums2) {
  let stack = new Stack();
  let nextGreater = new Map();
  let result = [];

  for (let num of nums2) {
    while (!stack.isEmpty() && num > stack.peek()) {
      nextGreater.set(stack.pop(), num);
    }
    stack.push(num);
  }

  while (!stack.isEmpty()) {
    nextGreater.set(stack.pop(), -1);
  }

  for (let num of nums1) {
    result.push(nextGreater.get(num));
  }

  return result;
}
```

在这个框架中，我们首先定义了一个栈类`Stack`，其中包含了常用的栈操作方法。然后，我们使用栈来解决下一个更大元素的问题。

在`nextGreaterElement`函数中，我们遍历`nums2`，并使用栈来保存尚未找到下一个更大元素的元素。对于每个元素，我们将其与栈顶元素比较，如果当前元素大于栈顶元素，则说明当前元素是栈顶元素的下一个更大元素，将栈顶元素出栈，并在`nextGreater`中记录该关系。

最后，根据`nextGreater`中的记录，遍历`nums1`，找到每个元素的下一个更大元素，并保存在结果数组`result`中。
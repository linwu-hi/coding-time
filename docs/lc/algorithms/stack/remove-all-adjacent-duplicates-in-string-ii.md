# **删除字符串中的所有相邻重复项 II**

给定一个字符串`S`，删除字符串中所有重复出现超过2次的相邻字符，使得最终的字符串中没有重复出现超过2次的相邻字符。

**示例：**

输入：S = "deeedbbcccbdaa"，K = 3
输出："aa"
解释：在字符串中，字符'd'重复3次，字符'e'重复3次，字符'c'重复3次，删除所有这些重复字符后，得到最终结果为"aa"。

输入：S = "pbbcggttciiippooaais"，K = 2
输出："ps"
解释：在字符串中，字符'g'重复2次，字符't'重复2次，字符'i'重复4次，字符'p'重复2次，删除所有这些重复字符后，得到最终结果为"ps"。

## **题目分析与解题步骤：**

这个问题可以使用栈来解决。我们可以遍历字符串中的每个字符，然后使用一个栈来模拟删除重复字符的过程。对于每个字符，我们将其与栈顶元素比较，如果当前字符与栈顶元素相同且重复出现超过K次，则将栈顶元素连同当前字符一起出栈，表示删除这些重复字符。最后，栈中剩余的字符即为最终结果。

解题步骤如下：

1. 创建一个栈`stack`，用于模拟删除重复字符的过程。

2. 遍历字符串`S`中的每个字符，并执行以下操作：

   - 如果栈为空或当前字符与栈顶元素不同，则将当前字符入栈。

   - 如果当前字符与栈顶元素相同，则将当前字符与栈顶元素连续重复出现的次数计数，如果达到K次，则将栈顶元素连同当前字符一起出栈。

3. 遍历完整个字符串后，栈中剩余的字符即为最终结果。

4. 将栈中的字符按照出栈的顺序组合成字符串，并返回最终结果。

## **JavaScript解题框架：**


```javascript
function removeDuplicates(S, K) {
  let stack = new Stack();

  for (let i = 0; i < S.length; i++) {
    let char = S.charAt(i);

    if (stack.isEmpty() || char !== stack.peek().char) {
      stack.push({ char, count: 1 });
    } else {
      stack.peek().count++;
      if (stack.peek().count === K) {
        stack.pop();
      }
    }
  }

  let result = '';
  while (!stack.isEmpty()) {
    let { char, count } = stack.pop();
    result = char.repeat(count) + result;
  }

  return result;
}
```

在这个框架中，我们首先定义了一个栈类`Stack`，其中包含了常用的栈操作方法。然后，我们使用栈来删除字符串中的所有相邻重复项 II。

在`removeDuplicates`函数中，我们遍历字符串`S`，并使用栈来模拟删除重复字符的过程。对于每个字符，我们将其与栈顶元素比较，如果当前字符与栈顶元素相同且重复出现次数达到K次，则将栈顶元素出栈。最后，我们将栈中剩余的字符按照出栈的顺序组合成字符串，并返回最终结果。
# **删除字符串中的所有相邻重复项**

给定一个由大小写字母组成的字符串`S`，重复进行以下操作，直到字符串中不再有相邻的重复字符：在字符串中找到相邻的重复字符并将其删除。

**示例：**

输入：S = "abbaca"
输出："ca"
解释：在字符串中，字符'a'重复2次，删除这两个字符后，得到最终结果为"ca"。

输入：S = "azxxzy"
输出："ay"
解释：在字符串中，字符'z'重复2次，删除这两个字符后，得到"axy"，字符'x'重复2次，删除这两个字符后，得到最终结果为"ay"。

## **题目分析与解题步骤：**

这个问题可以使用栈来解决。我们可以遍历字符串中的每个字符，然后使用一个栈来模拟删除相邻重复字符的过程。对于每个字符，我们将其与栈顶元素比较，如果相同，则将栈顶元素出栈，表示删除这对相邻重复字符；如果不同，则将当前字符入栈。

解题步骤如下：

1. 创建一个栈`stack`，用于模拟删除相邻重复字符的过程。

2. 遍历字符串`S`中的每个字符，并执行以下操作：

   - 如果栈为空或当前字符与栈顶元素不同，则将当前字符入栈。

   - 如果当前字符与栈顶元素相同，则将栈顶元素出栈。

3. 遍历完整个字符串后，栈中剩余的字符即为最终结果。

4. 将栈中的字符按照出栈的顺序组合成字符串，并返回最终结果。

## **JavaScript解题框架：**

```javascript
function removeDuplicates(S) {
  let stack = new Stack();

  for (let i = 0; i < S.length; i++) {
    let char = S.charAt(i);

    if (stack.isEmpty() || char !== stack.peek()) {
      stack.push(char);
    } else {
      stack.pop();
    }
  }

  let result = '';
  while (!stack.isEmpty()) {
    result = stack.pop() + result;
  }

  return result;
}
```

在这个框架中，我们首先定义了一个栈类`Stack`，其中包含了常用的栈操作方法。然后，我们使用栈来删除字符串中的所有相邻重复项。

在`removeDuplicates`函数中，我们遍历字符串`S`，并使用栈来模拟删除相邻重复字符的过程。对于每个字符，我们将其与栈顶元素比较，如果相同，则将栈顶元素出栈，表示删除这对相邻重复字符；如果不同，则将当前字符入栈。
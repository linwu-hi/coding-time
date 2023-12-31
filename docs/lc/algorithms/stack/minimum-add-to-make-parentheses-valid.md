# **使括号有效的最少添加**

给定一个由括号组成的字符串`S`，通过在字符串中添加最少数量的括号，使得字符串中的每个括号都是有效的。求解需要添加的最少括号数量。

**示例：**

输入：S = "())"
输出：1
解释：在字符串的开头添加一个左括号可以使字符串变为有效的 "())"。

输入：S = "((("
输出：3
解释：在字符串的末尾添加三个右括号可以使字符串变为有效的 "((()))"。

## **题目分析与解题步骤：**

这个问题可以使用栈来解决。我们可以遍历字符串中的每个字符，当遇到左括号时将其入栈，当遇到右括号时检查栈顶元素的情况。如果栈为空或栈顶元素不是左括号，则说明当前右括号没有匹配的左括号，需要进行括号添加操作。最后，栈中剩余的左括号数量即为需要添加的最少括号数量。

解题步骤如下：

1. 创建一个栈`stack`，用于存储左括号。

2. 初始化需要添加的括号数量`count`为0。

3. 遍历字符串`S`，并执行以下操作：

   - 如果当前字符是左括号，将其入栈。

   - 如果当前字符是右括号，检查栈顶元素的情况。如果栈为空或栈顶元素不是左括号，则说明当前右括号没有匹配的左括号，需要进行括号添加操作，将`count`加1。

   - 如果当前字符既不是左括号也不是右括号，则忽略该字符。

4. 遍历完整个字符串后，栈中剩余的左括号数量即为需要添加的最少括号数量，将其加到`count`中。

5. 返回`count`作为最终的结果。

## **JavaScript解题框架：**


```javascript
function minAddToMakeValid(S) {
  let stack = new Stack();
  let count = 0;

  for (let i = 0; i < S.length; i++) {
    let char = S.charAt(i);

    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.isEmpty() || stack.peek() !== '(') {
        count++;
      } else {
        stack.pop();
      }
    }
  }

  count += stack.size();

  return count;
}
```

在这个框架中，我们首先定义了一个栈类`Stack`，其中包含了常用的栈操作方法。然后，我们使用栈来解决使括号有效的最少添加问题。

在`minAddToMakeValid`函数中，我们遍历字符串`S`，根据当前字符的类型进行相应的操作。如果当前字符是左括号，将其入栈。如果当前字符是右括号，则检查栈顶元素的情况，如果栈为空或栈顶元素不是左括号，则说明当前右括号没有匹配的左括号，需要进行括号添加操作，将`count`加1。最后，遍历完字符串后，将栈中剩余的左括号数量加到`count`中，得到最终的结果。


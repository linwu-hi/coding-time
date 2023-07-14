# **逆波兰表达式求值**

给定一个逆波兰表达式，计算其值。逆波兰表达式是一种无括号的数学表达式表示法，其中运算符跟随在操作数之后。

**示例：**

输入：tokens = ["2", "1", "+", "3", "*"]
输出：9
解释：逆波兰表达式 "2 1 + 3 *" 对应的计算过程为：(2 + 1) * 3 = 9。

输入：tokens = ["4", "13", "5", "/", "+"]
输出：6
解释：逆波兰表达式 "4 13 5 / +" 对应的计算过程为：4 + (13 / 5) = 6。

## **题目分析与解题步骤：**

这个问题可以使用栈来实现逆波兰表达式的求值。我们可以遍历逆波兰表达式，遇到操作数时将其压入栈中，遇到运算符时从栈中弹出操作数进行计算，并将计算结果再次压入栈中，直到遍历完整个表达式，最后栈中的元素即为最终的结果。

解题步骤如下：

1. 创建一个栈`stack`，用于存储操作数。

2. 遍历逆波兰表达式`tokens`，并执行以下操作：

   - 如果当前元素是操作数，将其转换为数值并压入栈`stack`中。

   - 如果当前元素是运算符，从栈`stack`中弹出两个操作数，根据当前运算符进行计算，并将计算结果压入栈`stack`中。

3. 遍历完整个表达式后，栈`stack`中仅剩一个元素，即为最终的结果。

4. 返回栈`stack`中的唯一元素作为逆波兰表达式的计算结果。

## **JavaScript解题框架：**



```javascript
function evaluateReversePolishNotation(tokens) {
  let stack = new Stack();

  for (let token of tokens) {
    if (!isNaN(token)) { // 操作数
      stack.push(Number(token));
    } else { // 运算符
      let operand2 = stack.pop();
      let operand1 = stack.pop();
      let result;
      switch (token) {
        case '+':
          result = operand1 + operand2;
          break;
        case '-':
          result = operand1 - operand2;
          break;
        case '*':
          result = operand1 * operand2;
          break;
        case '/':
          result = Math.trunc(operand1 / operand2);
          break;
      }
      stack.push(result);
    }
  }

  return stack.pop();
}
```

在这个框架中，我们首先定义了一个栈类`Stack`，其中包含了常用的栈操作方法。然后，我们使用栈来实现逆波兰表达式的求值。

在`evaluateReversePolishNotation`函数中，我们遍历逆波兰表达式`tokens`，根据当前元素的类型进行相应的操作。如果当前元素是操作数，则将其转换为数值并压入栈中。如果当前元素是运算符，则从栈中弹出两个操作数，进行计算，并将计算结果压入栈中。

最后，返回栈中的唯一元素作为逆波兰表达式的计算结果。


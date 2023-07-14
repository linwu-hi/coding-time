# **栈（Stack）**

栈（Stack）是一种常见的数据结构，具有先进后出（Last-In-First-Out，LIFO）的特性。在计算机科学中，栈被广泛应用于算法和数据处理中，例如函数调用、表达式求值、深度优先搜索等。本文将介绍栈的基本概念、应用场景以及常见的栈相关算法，并提供相应的JavaScript伪代码框架。

## **栈的基本概念**

栈是一个具有限定操作的线性数据结构，它支持两个基本操作：

1. **入栈（Push）**：将元素添加到栈顶。

2. **出栈（Pop）**：移除并返回栈顶元素。

另外，栈还有两个重要的属性：

1. **栈顶（Top）**：指向栈顶元素的指针。

2. **栈空（Empty）**：当栈中没有元素时称为栈空。

## **栈的应用场景**

栈在计算机科学中有许多应用场景。以下是一些常见的应用场景：

1. **函数调用栈**：函数调用过程中，每次调用都会将当前函数的上下文（包括局部变量和返回地址）入栈，并在函数返回时出栈，以实现函数的嵌套调用和返回。

2. **表达式求值**：通过栈可以实现中缀表达式转后缀表达式，然后利用后缀表达式进行求值，如逆波兰表达式。

3. **括号匹配**：通过栈可以判断表达式中的括号是否匹配，如括号序列的合法性检查。

4. **浏览器的前进后退**：浏览器通过栈来管理用户的浏览历史，每当用户点击前进或后退按钮时，对应的URL会入栈或出栈。

5. **深度优先搜索（DFS）**：DFS是一种图遍历算法，使用栈来保存待访问的节点。

```js
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}
```

## **栈的常见算法**


### **1. 括号匹配**

括号匹配是栈的典型应用之一。算法的思想是遍历字符串，遇到左括号时入栈，遇到右括号时出栈，如果遇到右括号时栈为空或栈顶元素不是对应的左括号，则表明括号不匹配。


```javascript
function isParenthesesMatching(str) {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        let c = str[i];
        if (c === '(' || c === '[' || c === '{') {
            stack.push(c);
        } else if (c === ')' || c === ']' || c === '}') {
            if (stack.length === 0) {
                return false;
            }
            let top = stack.pop();
            if ((c === ')' && top !== '(') ||
                (c === ']' && top !== '[') ||
                (c === '}' && top !== '{')) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
```

### **2. 逆波兰表达式求值**

逆波兰表达式是一种无括号的数学表达式表示法，通过栈可以方便地求解逆波兰表达式的值。

以下是逆波兰表达式求值算法的伪代码实现：

```javascript
function evaluateReversePolishNotation(tokens) {
    let stack = [];

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
# **设计循环队列**

设计一个循环队列（Circular Queue）实现类 `MyCircularQueue`，该类应支持以下操作：

- `MyCircularQueue(k)`：构造函数，初始化队列的大小为 `k`。

- `enQueue(value)`：向循环队列插入一个元素。如果成功插入则返回 `true`，否则返回 `false`。

- `deQueue()`：从循环队列中删除一个元素。如果成功删除则返回 `true`，否则返回 `false`。

- `Front()`：获取队列的第一个元素。如果队列为空，返回 `-1`。

- `Rear()`：获取队列的最后一个元素。如果队列为空，返回 `-1`。

- `isEmpty()`：检查循环队列是否为空。

- `isFull()`：检查循环队列是否已满。

**示例：**

```plaintext
MyCircularQueue circularQueue = new MyCircularQueue(3); // 设置队列长度为 3
circularQueue.enQueue(1);  // 返回 true
circularQueue.enQueue(2);  // 返回 true
circularQueue.enQueue(3);  // 返回 true
circularQueue.enQueue(4);  // 返回 false，队列已满
circularQueue.Rear();      // 返回 3
circularQueue.isFull();    // 返回 true
circularQueue.deQueue();   // 返回 true
circularQueue.enQueue(4);  // 返回 true
circularQueue.Rear();      // 返回 4
```

## **题目分析与解题步骤：**

这个问题可以使用数组来实现循环队列。我们需要使用两个指针 `front` 和 `rear` 分别指向队列的头部和尾部。

解题步骤如下：

1. 创建一个数组 `queue` 用于存储队列的元素，以及两个指针 `front` 和 `rear`。

2. 在构造函数 `MyCircularQueue(k)` 中，初始化数组 `queue` 的大小为 `k`，并将指针 `front` 和 `rear` 初始化为 0。

3. 实现方法 `enQueue(value)`，在向队列插入元素之前，需要先判断队列是否已满。如果队列已满，返回 `false`。否则，将元素插入到队列的尾部，并将 `rear` 后移一位，返回 `true`。

4. 实现方法 `deQueue()`，在删除队列元素之前，需要先判断队列是否为空。如果队列为空，返回 `false`。否则，将队列头部元素删除，并将 `front` 后移一位，返回 `true`。

5. 实现方法 `Front()`，如果队列为空，返回 `-1`。否则，返回队列头部元素 `queue[front]`。

6. 实现方法 `Rear()`，如果队列为空，返回 `-1`。否则，返回队列尾部元素 `queue[rear - 1]`。

7. 实现方法 `isEmpty()`，检查队列是否为空。如果 `front` 和 `rear` 指针相等，表示队列为空，返回 `true`，否则返回 `false`。

8. 实现方法 `isFull()`，检查队列是否已满。如果 `(rear + 1) % k === front`，表示队列已满，返回 `true`，否则返回 `false`。

## **JavaScript解题框架：**


```javascript
class MyCircularQueue {
  constructor(k) {
    this.queue = new Array(k);
    this.front = 0;
    this.rear = 0;
  }

  enQueue(value) {
    if (this.isFull()) {
      return false;
    }
    this.queue[this.rear] = value;
    this.rear = (this.rear + 1) % this.queue.length;
    return true;
  }

  deQueue() {
    if (this.isEmpty()) {
      return false;
    }
    this.front = (this.front + 1) % this.queue.length;
    return true;
  }

  Front() {
    if (this.isEmpty()) {
      return -1;
    }
    return this.queue[this.front];
  }

  Rear() {
    if (this.isEmpty()) {
      return -1;
    }
    return this.queue[(this.rear - 1 + this.queue.length) % this.queue.length];
  }

  isEmpty() {
    return this.front === this.rear;
  }

  isFull() {
    return (this.rear + 1) % this.queue.length === this.front;
  }
}
```

在这个框架中，我们使用数组 `queue` 来存储队列的元素，并使用指针 `front` 和 `rear` 分别指向队列的头部和尾部。

根据题目要求，我们实现了构造函数 `MyCircularQueue(k)` 和各种方法，包括入队、出队、获取队列头部元素、获取队列尾部元素、检查队列是否为空、检查队列是否已满等。
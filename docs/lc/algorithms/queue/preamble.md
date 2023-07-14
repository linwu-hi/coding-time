# **队列**

队列是一种常见的数据结构，它遵循先进先出（First-In-First-Out，FIFO）的原则。简单来说，队列就像是排队买票一样，先到先服务。

在队列中，新元素被添加到队列的尾部，并且只能从队列的头部移除元素。这使得最先添加的元素最先被访问，而最后添加的元素最后被访问。

队列的操作通常包括两个主要动作：入队（enqueue）和出队（dequeue）。入队操作将一个元素添加到队列的尾部，而出队操作将队列的头部元素移除。

## **队列的应用场景**

队列在计算机科学中有广泛的应用场景，例如：

1. 任务调度：多个任务按照先后顺序加入队列，依次执行。

2. 广度优先搜索（BFS）：用队列来存储待访问的节点。

3. 缓存管理：使用队列来管理缓存中的数据，保证先进入缓存的数据先被访问。

4. 线程池：使用队列来存储待执行的任务，线程按照先后顺序从队列中取出任务执行。

## **队列的基本操作**

队列的基本操作包括：

- `enqueue(element)`：将元素添加到队列的尾部。

- `dequeue()`：移除队列的头部元素，并返回该元素。

- `isEmpty()`：判断队列是否为空。

- `size()`：返回队列中元素的个数。

- `front()`：获取队列的头部元素，不移除。

- `rear()`：获取队列的尾部元素，不移除。

```js
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  front() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  rear() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}
```

这个队列的实现使用了数组作为底层存储结构。它包含了基本的队列操作方法，如入队、出队、判断队列是否为空、获取队列大小、获取头部元素和尾部元素等。

使用这个队列，我们可以轻松地实现队列相关的算法。例如，可以通过队列来实现广度优先搜索（BFS），任务调度，缓存管理等应用场景。


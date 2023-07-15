# 优先队列

在计算机科学中,  **优先级队列(priority queue)** 是一种抽象数据类型, 它类似于常规的队列或栈, 但每个元素都有与之关联的“优先级”。

在优先队列中, 低优先级的元素之前前面应该是高优先级的元素。 如果两个元素具有相同的优先级, 则根据它们在队列中的顺序是它们的出现顺序即可。

优先队列虽通常用堆来实现,但它在概念上与堆不同。优先队列是一个抽象概念，就像“列表”或“图”这样的抽象概念一样; 

正如列表可以用链表或数组实现一样，优先队列可以用堆或各种其他方法实现,例如无序数组。


```js
class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  // 添加元素到优先队列中
  enqueue(element, priority) {
    const item = { element, priority };
    let inserted = false;

    for (let i = 0; i < this.queue.length; i++) {
      if (item.priority < this.queue[i].priority) {
        this.queue.splice(i, 0, item);
        inserted = true;
        break;
      }
    }

    if (!inserted) {
      this.queue.push(item);
    }
  }

  // 从优先队列中移除并返回具有最高优先级的元素
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue.shift().element;
  }

  // 返回具有最高优先级的元素，但不进行移除
  front() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue[0].element;
  }

  // 检查优先队列是否为空
  isEmpty() {
    return this.queue.length === 0;
  }

  // 返回优先队列的大小
  size() {
    return this.queue.length;
  }
}
```

```js
const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("apple", 2);
priorityQueue.enqueue("banana", 3);
priorityQueue.enqueue("orange", 1);

console.log(priorityQueue.front()); // 输出: "orange"
console.log(priorityQueue.dequeue()); // 输出: "orange"
console.log(priorityQueue.size()); // 输出: 2
console.log(priorityQueue.isEmpty()); // 输出: false
```

## 参考

- [Wikipedia](https://en.wikipedia.org/wiki/Priority_queue)
- [YouTube](https://www.youtube.com/watch?v=wptevk0bshY&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=6)

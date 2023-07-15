# 链表

在计算机科学中，链表是一种数据结构，用于存储和组织元素的集合。与数组不同，链表中的元素不是按照它们在内存中的物理位置顺序存储的。相反，每个元素都包含一个指向下一个元素的引用。链表由一系列节点组成，这些节点一起表示一个序列。

链表最简单的形式是每个节点包含数据和指向下一个节点的引用。这种结构允许在迭代过程中高效地在任何位置插入或删除元素。

更复杂的链表变体添加了额外的链接，允许高效地插入或删除任意元素的引用。链表的一个缺点是访问元素的时间复杂度是线性的（难以进行快速随机访问），而数组具有更好的缓存局部性。

链表的实现通常涉及两个主要的类：LinkedListNode（链表节点）和LinkedList（链表）。

![Linked List](./images/linked-list.jpeg)


## 链表节点（LinkedListNode）

链表节点表示链表中的一个元素，它包含一个值和一个指向下一个节点的引用。它的实现可以参考下面的代码：

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
```

## 链表（LinkedList）

链表是由一系列链表节点组成的数据结构。它具有一个头节点（head）和一个尾节点（tail），分别表示链表的开头和结尾。

链表类提供了一系列方法来操作链表，如在开头插入节点（prepend）、在末尾插入节点（append）、在指定位置插入节点（insert）、删除节点（delete）、查找节点（find）等。以下是链表类的实现代码：

```js
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // 在链表尾部添加新节点
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  // 在链表指定位置插入新节点
  insertAt(value, index) {
    if (index < 0 || index > this.length) {
      throw new Error("Index out of range");
    }

    const newNode = new Node(value);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      if (!this.tail) {
        this.tail = newNode;
      }
    } else if (index === this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      let currentNode = this.head;
      let prevNode = null;
      let currentIndex = 0;

      while (currentIndex < index) {
        prevNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }

      prevNode.next = newNode;
      newNode.next = currentNode;
    }

    this.length++;
  }

  // 获取指定位置节点的值
  getAt(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index out of range");
    }

    let currentNode = this.head;
    let currentIndex = 0;

    while (currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    return currentNode.value;
  }

  // 删除指定位置的节点
  removeAt(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index out of range");
    }

    let currentNode = this.head;
    let prevNode = null;
    let currentIndex = 0;

    if (index === 0) {
      this.head = currentNode.next;
      if (this.length === 1) {
        this.tail = null;
      }
    } else if (index === this.length - 1) {
      while (currentIndex < index) {
        prevNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }

      prevNode.next = null;
      this.tail = prevNode;
    } else {
      while (currentIndex < index) {
        prevNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }

      prevNode.next = currentNode.next;
    }

    this.length--;
  }

  // 遍历链表并将节点值以数组形式返回
  toArray() {
    const result = [];
    let currentNode = this.head;

    while (currentNode) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return result;
  }
}
```

```js
const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.insertAt(15, 1);
linkedList.removeAt(0);

console.log(linkedList.toArray()); // 输出: [15, 20]

```

## 复杂度

链表的时间复杂度如下：

- 访问：O(n)
- 搜索：O(n)
- 插入：O(1)
- 删除：O(1)

链表的空间复杂度为O(n)，其中n是链表中的节点数。

## 参考资料

- [Wikipedia](https://en.wikipedia.org/wiki/Linked_list)
- [YouTube](https://www.youtube.com/watch?v=njTh_OwMljA&index=2&t=1s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
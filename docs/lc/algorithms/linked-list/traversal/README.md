# 链表遍历

我们的任务是顺序遍历给定的链表

比如下面的链表

![Singly linked list](https://upload.wikimedia.org/wikipedia/commons/6/6d/Singly-linked-list.svg)

遍历的顺序应该是

```text
12 → 99 → 37
```

因为我们每个节点只访问一次，时间复杂度应该是`O(n)`


## 完整代码

```js
/**
 * Traversal callback function.
 * @callback traversalCallback
 * @param {*} nodeValue
 */

/**
 * @param {LinkedList} linkedList
 * @param {traversalCallback} callback
 */
export default function traversal(linkedList, callback) {
  let currentNode = linkedList.head;

  while (currentNode) {
    callback(currentNode.value);
    currentNode = currentNode.next;
  }
}
```

## 参考

- [Wikipedia](https://zh.wikipedia.org/wiki/%E9%93%BE%E8%A1%A8)
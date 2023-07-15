# 链表倒序遍历

我们的任务是倒序遍历给定的链表

比如下面的链表

![](https://upload.wikimedia.org/wikipedia/commons/6/6d/Singly-linked-list.svg)

遍历的顺序应该是

```text
37 → 99 → 12
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
 * @param {LinkedListNode} node
 * @param {traversalCallback} callback
 */
function reverseTraversalRecursive(node, callback) {
  if (node) {
    reverseTraversalRecursive(node.next, callback);
    callback(node.value);
  }
}

/**
 * @param {LinkedList} linkedList
 * @param {traversalCallback} callback
 */
export default function reverseTraversal(linkedList, callback) {
  reverseTraversalRecursive(linkedList.head, callback);
}

```


## 参考

- [Wikipedia](https://zh.wikipedia.org/wiki/%E9%93%BE%E8%A1%A8)

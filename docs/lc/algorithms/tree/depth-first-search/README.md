# 深度优先搜索（DFS）

深度优先搜索（DFS）是一种用于遍历或搜索树或图数据结构的算法。它从根节点开始（在图的情况下选择一些任意节点作为根节点），沿着每条分支尽可能远地探索，直到无法继续为止，然后回溯。

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/7/7f/Depth-First-Search.gif)


## 完整实现

```js
/**
 * @typedef {Object} TraversalCallbacks
 *
 * @property {function(node: BinaryTreeNode, child: BinaryTreeNode): boolean} allowTraversal
 * - 确定 DFS 是否应该遍历从节点到其子节点。
 *
 * @property {function(node: BinaryTreeNode)} enterNode - 当 DFS 进入节点时调用的回调函数。
 *
 * @property {function(node: BinaryTreeNode)} leaveNode - 当 DFS 离开节点时调用的回调函数。
 */

/**
 * 使用默认回调函数扩展缺失的遍历回调函数。
 *
 * @param {TraversalCallbacks} [callbacks] - 包含遍历回调函数的对象。
 * @returns {TraversalCallbacks} - 使用默认回调函数扩展的遍历回调函数。
 */
function initCallbacks(callbacks = {}) {
  // 初始化空的回调函数对象。
  const initiatedCallbacks = {};

  // 在用户未提供真实的回调函数时，使用空的回调函数作为默认回调函数。
  const stubCallback = () => {};
  // 默认情况下，如果用户未提供回调函数，则允许遍历每个节点。
  const defaultAllowTraversalCallback = () => true;

  // 将原始回调函数复制到我们的 initiatedCallbacks 对象中，或者使用默认回调函数代替。
  initiatedCallbacks.allowTraversal = callbacks.allowTraversal || defaultAllowTraversalCallback;
  initiatedCallbacks.enterNode = callbacks.enterNode || stubCallback;
  initiatedCallbacks.leaveNode = callbacks.leaveNode || stubCallback;

  // 返回处理后的回调函数列表。
  return initiatedCallbacks;
}

/**
 * 二叉树的递归深度优先搜索遍历。
 *
 * @param {BinaryTreeNode} node - 开始遍历的二叉树节点。
 * @param {TraversalCallbacks} callbacks - 包含遍历回调函数的对象。
 */
export function depthFirstSearchRecursive(node, callbacks) {
  // 调用 "enterNode" 回调函数通知即将进入当前节点。
  callbacks.enterNode(node);

  // 仅在允许遍历左子节点的情况下遍历左侧分支。
  if (node.left && callbacks.allowTraversal(node, node.left)) {
    depthFirstSearchRecursive(node.left, callbacks);
  }

  // 仅在允许遍历右子节点的情况下遍历右侧分支。
  if (node.right && callbacks.allowTraversal(node, node.right)) {
    depthFirstSearchRecursive(node.right, callbacks);
  }

  // 调用 "leaveNode" 回调函数通知当前节点及其子节点的遍历完成。
  callbacks.leaveNode(node);
}

/**
 * 对根节点进行深度优先搜索遍历。
 * 在每一步遍历中调用 "allowTraversal"、"enterNode" 和 "leaveNode" 回调函数。
 * 有关回调函数对象的形状的详细信息，请参见 TraversalCallbacks 类型定义。
 *
 * @param {BinaryTreeNode} rootNode - 开始遍历的节点。
 * @param {TraversalCallbacks} [callbacks] - 遍历回调函数。
 */
export default function depthFirstSearch(rootNode, callbacks) {
  // 如果用户未提供某些回调函数，则使用默认回调函数替代。
  const processedCallbacks = initCallbacks(callbacks);

  // 现在，当我们拥有所有必要的回调函数时，可以进行递归遍历。
  depthFirstSearchRecursive(rootNode, processedCallbacks);
}

```

## 参考资料

- [Wikipedia](https://en.wikipedia.org/wiki/Depth-first_search)
- [Tree Traversals (Inorder, Preorder and Postorder)](https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/)
- [BFS vs DFS](https://www.geeksforgeeks.org/bfs-vs-dfs-binary-tree/)
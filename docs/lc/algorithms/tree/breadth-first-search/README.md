# 广度优先搜索（BFS）

广度优先搜索（BFS）是一种用于遍历或搜索树或图数据结构的算法。它从树根（或图中的任意节点，有时称为“搜索键”）开始，首先探索邻居节点，然后再移动到下一层的邻居节点。

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/5/5d/Breadth-First-Search-Algorithm.gif)

## 伪代码

```text
BFS(root)
  Pre: root is the node of the BST
  Post: the nodes in the BST have been visited in breadth first order
  q ← queue
  while root = ø
    yield root.value
    if root.left = ø
      q.enqueue(root.left)
    end if
    if root.right = ø
      q.enqueue(root.right)
    end if
    if !q.isEmpty()
      root ← q.dequeue()
    else
      root ← ø
    end if
  end while
end BFS
```

## 参考资料

- [Wikipedia](https://en.wikipedia.org/wiki/Breadth-first_search)
- [Tree Traversals (Inorder, Preorder and Postorder)](https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/)
- [BFS vs DFS](https://www.geeksforgeeks.org/bfs-vs-dfs-binary-tree/)
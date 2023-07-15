# 红黑树

**红黑树**是一种自平衡的二叉搜索树，常用于计算机科学中。二叉树的每个节点都有一个额外的位，这个位通常被解释为节点的颜色（红色或黑色）。通过使用这些颜色位，在插入和删除操作期间保持树的近似平衡。

红黑树通过以满足一定属性的方式将树中的每个节点染成两种颜色之一来保持平衡，这些属性共同限制了树在最坏情况下的不平衡程度。当树被修改时，新树随后被重新排列和染色，以恢复颜色属性。这些属性被设计成能够高效地执行重新排列和染色操作。

红黑树的平衡并不完美，但足以保证在`O(log n)`的时间内进行搜索，其中`n`是树中的元素总数。插入、删除操作以及树的重新排列和染色也可以在`O(log n)`的时间内完成。

以下是红黑树的示例：

![红黑树](https://upload.wikimedia.org/wikipedia/commons/6/66/Red-black_tree_example.svg)

## 属性

除了二叉搜索树的要求之外，红黑树还必须满足以下条件：

- 每个节点要么是红色，要么是黑色。
- 根节点是黑色。这条规则有时会被省略，因为根节点总是可以从红色更改为黑色，但不一定反过来。所以这条规则对分析影响不大。
- 所有叶子节点（NIL节点）都是黑色。
- 如果一个节点是红色，则它的两个子节点都是黑色。
- 从给定节点到其任意后代NIL节点的每条路径上包含相同数量的黑色节点。

一些定义：从根节点到一个节点的黑色节点数称为该节点的**黑深度**；从根节点到叶子节点的所有路径中的黑色节点数目相等，称为红黑树的**黑高度**。

这些约束条件强制红黑树具有一个关键的性质：_从根节点到最远的叶子节点的路径长度不会超过从根节点到最近的叶子节点的路径长度的两倍_。结果是，树大致上是高度平衡的。由于插入、删除和查找值等操作的最坏情况时间与树的高度成比例，这种对高度的理论上界使得红黑树在最坏情况下具有高效性，而不像普通的二叉搜索树那样。

## 插入时的平衡

### 如果叔叔节点是红色

![红黑树平衡](https://www.geeksforgeeks.org/wp-content/uploads/redBlackCase2.png)

### 如果叔叔节点是黑色

- 左左情况（`p`是`g`的左子节点，`x`是`p`的左子节点）
- 左右情况（`p`是`g`的左子节点，`x`是`p`的右子节点）
- 右右情况（`p`是`g`的右子节点，`x`是`p`的右子节点）
- 右左情况（`p`是`g`的右子节点，`x`是`p`的左子节点）

#### 左左情况（查看`g`，`p`和`x`）

![红黑树平衡](https://www.geeksforgeeks.org/wp-content/uploads/redBlackCase3a1.png)

#### 左右情况（查看`g`，`p`和`x`）

![红黑树平衡](https://www.geeksforgeeks.org/wp-content/uploads/redBlackCase3b.png)

#### 右右情况（查看`g`，`p`和`x`）

![红黑树平衡](https://www.geeksforgeeks.org/wp-content/uploads/redBlackCase3c.png)

#### 右左情

况（查看`g`，`p`和`x`）

![红黑树平衡](https://www.geeksforgeeks.org/wp-content/uploads/redBlackCase3d.png)



## 完整代码

```js
import BinarySearchTree from '../binary-search-tree/BinarySearchTree';

// Possible colors of red-black tree nodes.
const RED_BLACK_TREE_COLORS = {
  red: 'red',
  black: 'black',
};

// Color property name in meta information of the nodes.
const COLOR_PROP_NAME = 'color';

export default class RedBlackTree extends BinarySearchTree {
  /**
   * @param {*} value
   * @return {BinarySearchTreeNode}
   */
  insert(value) {
    const insertedNode = super.insert(value);

    // if (!this.root.left && !this.root.right) {
    if (this.nodeComparator.equal(insertedNode, this.root)) {
      // Make root to always be black.
      this.makeNodeBlack(insertedNode);
    } else {
      // Make all newly inserted nodes to be red.
      this.makeNodeRed(insertedNode);
    }

    // Check all conditions and balance the node.
    this.balance(insertedNode);

    return insertedNode;
  }

  /**
   * @param {*} value
   * @return {boolean}
   */
  remove(value) {
    throw new Error(`Can't remove ${value}. Remove method is not implemented yet`);
  }

  /**
   * @param {BinarySearchTreeNode} node
   */
  balance(node) {
    // If it is a root node then nothing to balance here.
    if (this.nodeComparator.equal(node, this.root)) {
      return;
    }

    // If the parent is black then done. Nothing to balance here.
    if (this.isNodeBlack(node.parent)) {
      return;
    }

    const grandParent = node.parent.parent;

    if (node.uncle && this.isNodeRed(node.uncle)) {
      // If node has red uncle then we need to do RECOLORING.

      // Recolor parent and uncle to black.
      this.makeNodeBlack(node.uncle);
      this.makeNodeBlack(node.parent);

      if (!this.nodeComparator.equal(grandParent, this.root)) {
        // Recolor grand-parent to red if it is not root.
        this.makeNodeRed(grandParent);
      } else {
        // If grand-parent is black root don't do anything.
        // Since root already has two black sibling that we've just recolored.
        return;
      }

      // Now do further checking for recolored grand-parent.
      this.balance(grandParent);
    } else if (!node.uncle || this.isNodeBlack(node.uncle)) {
      // If node uncle is black or absent then we need to do ROTATIONS.

      if (grandParent) {
        // Grand parent that we will receive after rotations.
        let newGrandParent;

        if (this.nodeComparator.equal(grandParent.left, node.parent)) {
          // Left case.
          if (this.nodeComparator.equal(node.parent.left, node)) {
            // Left-left case.
            newGrandParent = this.leftLeftRotation(grandParent);
          } else {
            // Left-right case.
            newGrandParent = this.leftRightRotation(grandParent);
          }
        } else {
          // Right case.
          if (this.nodeComparator.equal(node.parent.right, node)) {
            // Right-right case.
            newGrandParent = this.rightRightRotation(grandParent);
          } else {
            // Right-left case.
            newGrandParent = this.rightLeftRotation(grandParent);
          }
        }

        // Set newGrandParent as a root if it doesn't have parent.
        if (newGrandParent && newGrandParent.parent === null) {
          this.root = newGrandParent;

          // Recolor root into black.
          this.makeNodeBlack(this.root);
        }

        // Check if new grand parent don't violate red-black-tree rules.
        this.balance(newGrandParent);
      }
    }
  }

  /**
   * Left Left Case (p is left child of g and x is left child of p)
   * @param {BinarySearchTreeNode|BinaryTreeNode} grandParentNode
   * @return {BinarySearchTreeNode}
   */
  leftLeftRotation(grandParentNode) {
    // Memorize the parent of grand-parent node.
    const grandGrandParent = grandParentNode.parent;

    // Check what type of sibling is our grandParentNode is (left or right).
    let grandParentNodeIsLeft;
    if (grandGrandParent) {
      grandParentNodeIsLeft = this.nodeComparator.equal(grandGrandParent.left, grandParentNode);
    }

    // Memorize grandParentNode's left node.
    const parentNode = grandParentNode.left;

    // Memorize parent's right node since we're going to transfer it to
    // grand parent's left subtree.
    const parentRightNode = parentNode.right;

    // Make grandParentNode to be right child of parentNode.
    parentNode.setRight(grandParentNode);

    // Move child's right subtree to grandParentNode's left subtree.
    grandParentNode.setLeft(parentRightNode);

    // Put parentNode node in place of grandParentNode.
    if (grandGrandParent) {
      if (grandParentNodeIsLeft) {
        grandGrandParent.setLeft(parentNode);
      } else {
        grandGrandParent.setRight(parentNode);
      }
    } else {
      // Make parent node a root
      parentNode.parent = null;
    }

    // Swap colors of grandParentNode and parentNode.
    this.swapNodeColors(parentNode, grandParentNode);

    // Return new root node.
    return parentNode;
  }

  /**
   * Left Right Case (p is left child of g and x is right child of p)
   * @param {BinarySearchTreeNode|BinaryTreeNode} grandParentNode
   * @return {BinarySearchTreeNode}
   */
  leftRightRotation(grandParentNode) {
    // Memorize left and left-right nodes.
    const parentNode = grandParentNode.left;
    const childNode = parentNode.right;

    // We need to memorize child left node to prevent losing
    // left child subtree. Later it will be re-assigned to
    // parent's right sub-tree.
    const childLeftNode = childNode.left;

    // Make parentNode to be a left child of childNode node.
    childNode.setLeft(parentNode);

    // Move child's left subtree to parent's right subtree.
    parentNode.setRight(childLeftNode);

    // Put left-right node in place of left node.
    grandParentNode.setLeft(childNode);

    // Now we're ready to do left-left rotation.
    return this.leftLeftRotation(grandParentNode);
  }

  /**
   * Right Right Case (p is right child of g and x is right child of p)
   * @param {BinarySearchTreeNode|BinaryTreeNode} grandParentNode
   * @return {BinarySearchTreeNode}
   */
  rightRightRotation(grandParentNode) {
    // Memorize the parent of grand-parent node.
    const grandGrandParent = grandParentNode.parent;

    // Check what type of sibling is our grandParentNode is (left or right).
    let grandParentNodeIsLeft;
    if (grandGrandParent) {
      grandParentNodeIsLeft = this.nodeComparator.equal(grandGrandParent.left, grandParentNode);
    }

    // Memorize grandParentNode's right node.
    const parentNode = grandParentNode.right;

    // Memorize parent's left node since we're going to transfer it to
    // grand parent's right subtree.
    const parentLeftNode = parentNode.left;

    // Make grandParentNode to be left child of parentNode.
    parentNode.setLeft(grandParentNode);

    // Transfer all left nodes from parent to right sub-tree of grandparent.
    grandParentNode.setRight(parentLeftNode);

    // Put parentNode node in place of grandParentNode.
    if (grandGrandParent) {
      if (grandParentNodeIsLeft) {
        grandGrandParent.setLeft(parentNode);
      } else {
        grandGrandParent.setRight(parentNode);
      }
    } else {
      // Make parent node a root.
      parentNode.parent = null;
    }

    // Swap colors of granParent and parent nodes.
    this.swapNodeColors(parentNode, grandParentNode);

    // Return new root node.
    return parentNode;
  }

  /**
   * Right Left Case (p is right child of g and x is left child of p)
   * @param {BinarySearchTreeNode|BinaryTreeNode} grandParentNode
   * @return {BinarySearchTreeNode}
   */
  rightLeftRotation(grandParentNode) {
    // Memorize right and right-left nodes.
    const parentNode = grandParentNode.right;
    const childNode = parentNode.left;

    // We need to memorize child right node to prevent losing
    // right child subtree. Later it will be re-assigned to
    // parent's left sub-tree.
    const childRightNode = childNode.right;

    // Make parentNode to be a right child of childNode.
    childNode.setRight(parentNode);

    // Move child's right subtree to parent's left subtree.
    parentNode.setLeft(childRightNode);

    // Put childNode node in place of parentNode.
    grandParentNode.setRight(childNode);

    // Now we're ready to do right-right rotation.
    return this.rightRightRotation(grandParentNode);
  }

  /**
   * @param {BinarySearchTreeNode|BinaryTreeNode} node
   * @return {BinarySearchTreeNode}
   */
  makeNodeRed(node) {
    node.meta.set(COLOR_PROP_NAME, RED_BLACK_TREE_COLORS.red);

    return node;
  }

  /**
   * @param {BinarySearchTreeNode|BinaryTreeNode} node
   * @return {BinarySearchTreeNode}
   */
  makeNodeBlack(node) {
    node.meta.set(COLOR_PROP_NAME, RED_BLACK_TREE_COLORS.black);

    return node;
  }

  /**
   * @param {BinarySearchTreeNode|BinaryTreeNode} node
   * @return {boolean}
   */
  isNodeRed(node) {
    return node.meta.get(COLOR_PROP_NAME) === RED_BLACK_TREE_COLORS.red;
  }

  /**
   * @param {BinarySearchTreeNode|BinaryTreeNode} node
   * @return {boolean}
   */
  isNodeBlack(node) {
    return node.meta.get(COLOR_PROP_NAME) === RED_BLACK_TREE_COLORS.black;
  }

  /**
   * @param {BinarySearchTreeNode|BinaryTreeNode} node
   * @return {boolean}
   */
  isNodeColored(node) {
    return this.isNodeRed(node) || this.isNodeBlack(node);
  }

  /**
   * @param {BinarySearchTreeNode|BinaryTreeNode} firstNode
   * @param {BinarySearchTreeNode|BinaryTreeNode} secondNode
   */
  swapNodeColors(firstNode, secondNode) {
    const firstColor = firstNode.meta.get(COLOR_PROP_NAME);
    const secondColor = secondNode.meta.get(COLOR_PROP_NAME);

    firstNode.meta.set(COLOR_PROP_NAME, secondColor);
    secondNode.meta.set(COLOR_PROP_NAME, firstColor);
  }
}
```

## 参考资料

- [维基百科](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree)
- [Tushar Roy的红黑树插入 (YouTube)](https://www.youtube.com/watch?v=UaLIHuR1t8Q&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=63)
- [Tushar Roy的红黑树删除 (YouTube)](https://www.youtube.com/watch?v=CTvfzU_uNKE&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=64)
- [GeeksForGeeks上的红黑树插入](https://www.geeksforgeeks.org/red-black-tree-set-2-insert/)
- [交互式可视化红黑树](https://www.cs.usfca.edu/~galles/visualization/RedBlack.html)
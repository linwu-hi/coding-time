import{_ as e,r as o,o as p,c,a as n,b as a,e as t,d as i}from"./app-2477bd15.js";const l={},u=i(`<h1 id="avl树" tabindex="-1"><a class="header-anchor" href="#avl树" aria-hidden="true">#</a> AVL树</h1><p>在计算机科学中，<strong>AVL树</strong>（以发明者Adelson-Velsky和Landis的姓氏命名）是一种自平衡的二叉搜索树。它是第一种这样的数据结构。在AVL树中，任何节点的两个子树的高度最多相差一；如果它们的高度相差超过一，就会进行重新平衡以恢复这个性质。查找、插入和删除在平均情况和最坏情况下都需要 <code>O(log n)</code> 的时间，其中n是操作之前树中的节点数。插入和删除可能需要通过一个或多个树旋转来重新平衡树。</p><p>动画展示了将多个元素插入AVL树中的过程。它包括左旋、右旋、左右旋和右左旋。</p><figure><img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/AVL_Tree_Example.gif" alt="AVL树" tabindex="0" loading="lazy"><figcaption>AVL树</figcaption></figure><p>带有平衡因子的AVL树（绿色）</p><figure><img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/AVL-tree-wBalance_K.svg" alt="AVL树" tabindex="0" loading="lazy"><figcaption>AVL树</figcaption></figure><h3 id="avl树的旋转操作" tabindex="-1"><a class="header-anchor" href="#avl树的旋转操作" aria-hidden="true">#</a> AVL树的旋转操作</h3><p><strong>左-左旋转</strong></p><figure><img src="http://btechsmartclass.com/data_structures/ds_images/LL Rotation.png" alt="左-左旋转" tabindex="0" loading="lazy"><figcaption>左-左旋转</figcaption></figure><p><strong>右-右旋转</strong></p><figure><img src="http://btechsmartclass.com/data_structures/ds_images/RR Rotation.png" alt="右-右旋转" tabindex="0" loading="lazy"><figcaption>右-右旋转</figcaption></figure><p><strong>左-右旋转</strong></p><figure><img src="http://btechsmartclass.com/data_structures/ds_images/LR Rotation.png" alt="左-右旋转" tabindex="0" loading="lazy"><figcaption>左-右旋转</figcaption></figure><p><strong>右-左旋转</strong></p><figure><img src="http://btechsmartclass.com/data_structures/ds_images/RL Rotation.png" alt="右-左旋转" tabindex="0" loading="lazy"><figcaption>右-左旋转</figcaption></figure><h2 id="完整代码" tabindex="-1"><a class="header-anchor" href="#完整代码" aria-hidden="true">#</a> 完整代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> BinarySearchTree <span class="token keyword">from</span> <span class="token string">&#39;../binary-search-tree/BinarySearchTree&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">AvlTree</span> <span class="token keyword">extends</span> <span class="token class-name">BinarySearchTree</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">value</span>
   */</span>
  <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Do the normal BST insert.</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Let&#39;s move up to the root and check balance factors along the way.</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">balance</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>parent<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">value</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">remove</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Do standard BST removal.</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Balance the tree starting from the root node.</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">balance</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>BinarySearchTreeNode<span class="token punctuation">}</span></span> <span class="token parameter">node</span>
   */</span>
  <span class="token function">balance</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// If balance factor is not OK then try to balance the node.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>balanceFactor <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Left rotation.</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">.</span>balanceFactor <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Left-Left rotation</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">rotateLeftLeft</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">.</span>balanceFactor <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Left-Right rotation.</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">rotateLeftRight</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>balanceFactor <span class="token operator">&lt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Right rotation.</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">.</span>balanceFactor <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Right-Right rotation</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">rotateRightRight</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">.</span>balanceFactor <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Right-Left rotation.</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">rotateRightLeft</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>BinarySearchTreeNode<span class="token punctuation">}</span></span> <span class="token parameter">rootNode</span>
   */</span>
  <span class="token function">rotateLeftLeft</span><span class="token punctuation">(</span><span class="token parameter">rootNode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Detach left node from root node.</span>
    <span class="token keyword">const</span> leftNode <span class="token operator">=</span> rootNode<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
    rootNode<span class="token punctuation">.</span><span class="token function">setLeft</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Make left node to be a child of rootNode&#39;s parent.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>rootNode<span class="token punctuation">.</span>parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      rootNode<span class="token punctuation">.</span>parent<span class="token punctuation">.</span><span class="token function">setLeft</span><span class="token punctuation">(</span>leftNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>rootNode <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// If root node is root then make left node to be a new root.</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>root <span class="token operator">=</span> leftNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// If left node has a right child then detach it and</span>
    <span class="token comment">// attach it as a left child for rootNode.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>leftNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      rootNode<span class="token punctuation">.</span><span class="token function">setLeft</span><span class="token punctuation">(</span>leftNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Attach rootNode to the right of leftNode.</span>
    leftNode<span class="token punctuation">.</span><span class="token function">setRight</span><span class="token punctuation">(</span>rootNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>BinarySearchTreeNode<span class="token punctuation">}</span></span> <span class="token parameter">rootNode</span>
   */</span>
  <span class="token function">rotateLeftRight</span><span class="token punctuation">(</span><span class="token parameter">rootNode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Detach left node from rootNode since it is going to be replaced.</span>
    <span class="token keyword">const</span> leftNode <span class="token operator">=</span> rootNode<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
    rootNode<span class="token punctuation">.</span><span class="token function">setLeft</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Detach right node from leftNode.</span>
    <span class="token keyword">const</span> leftRightNode <span class="token operator">=</span> leftNode<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
    leftNode<span class="token punctuation">.</span><span class="token function">setRight</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Preserve leftRightNode&#39;s left subtree.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>leftRightNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      leftNode<span class="token punctuation">.</span><span class="token function">setRight</span><span class="token punctuation">(</span>leftRightNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
      leftRightNode<span class="token punctuation">.</span><span class="token function">setLeft</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Attach leftRightNode to the rootNode.</span>
    rootNode<span class="token punctuation">.</span><span class="token function">setLeft</span><span class="token punctuation">(</span>leftRightNode<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Attach leftNode as left node for leftRight node.</span>
    leftRightNode<span class="token punctuation">.</span><span class="token function">setLeft</span><span class="token punctuation">(</span>leftNode<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Do left-left rotation.</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">rotateLeftLeft</span><span class="token punctuation">(</span>rootNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>BinarySearchTreeNode<span class="token punctuation">}</span></span> <span class="token parameter">rootNode</span>
   */</span>
  <span class="token function">rotateRightLeft</span><span class="token punctuation">(</span><span class="token parameter">rootNode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Detach right node from rootNode since it is going to be replaced.</span>
    <span class="token keyword">const</span> rightNode <span class="token operator">=</span> rootNode<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
    rootNode<span class="token punctuation">.</span><span class="token function">setRight</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Detach left node from rightNode.</span>
    <span class="token keyword">const</span> rightLeftNode <span class="token operator">=</span> rightNode<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
    rightNode<span class="token punctuation">.</span><span class="token function">setLeft</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>rightLeftNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      rightNode<span class="token punctuation">.</span><span class="token function">setLeft</span><span class="token punctuation">(</span>rightLeftNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
      rightLeftNode<span class="token punctuation">.</span><span class="token function">setRight</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Attach rightLeftNode to the rootNode.</span>
    rootNode<span class="token punctuation">.</span><span class="token function">setRight</span><span class="token punctuation">(</span>rightLeftNode<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Attach rightNode as right node for rightLeft node.</span>
    rightLeftNode<span class="token punctuation">.</span><span class="token function">setRight</span><span class="token punctuation">(</span>rightNode<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Do right-right rotation.</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">rotateRightRight</span><span class="token punctuation">(</span>rootNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>BinarySearchTreeNode<span class="token punctuation">}</span></span> <span class="token parameter">rootNode</span>
   */</span>
  <span class="token function">rotateRightRight</span><span class="token punctuation">(</span><span class="token parameter">rootNode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Detach right node from root node.</span>
    <span class="token keyword">const</span> rightNode <span class="token operator">=</span> rootNode<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
    rootNode<span class="token punctuation">.</span><span class="token function">setRight</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Make right node to be a child of rootNode&#39;s parent.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>rootNode<span class="token punctuation">.</span>parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      rootNode<span class="token punctuation">.</span>parent<span class="token punctuation">.</span><span class="token function">setRight</span><span class="token punctuation">(</span>rightNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>rootNode <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// If root node is root then make right node to be a new root.</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>root <span class="token operator">=</span> rightNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// If right node has a left child then detach it and</span>
    <span class="token comment">// attach it as a right child for rootNode.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>rightNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      rootNode<span class="token punctuation">.</span><span class="token function">setRight</span><span class="token punctuation">(</span>rightNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Attach rootNode to the left of rightNode.</span>
    rightNode<span class="token punctuation">.</span><span class="token function">setLeft</span><span class="token punctuation">(</span>rootNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,18),r={href:"https://en.wikipedia.org/wiki/AVL_tree",target:"_blank",rel:"noopener noreferrer"},d={href:"https://www.tutorialspoint.com/data_structures_algorithms/avl_tree_algorithm.htm",target:"_blank",rel:"noopener noreferrer"},k={href:"http://btechsmartclass.com/data_structures/avl-trees.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.youtube.com/watch?v=rbg7Qf8GkQ4&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=12&",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.cs.usfca.edu/~galles/visualization/AVLtree.html",target:"_blank",rel:"noopener noreferrer"};function b(f,h){const s=o("ExternalLinkIcon");return p(),c("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[a("维基百科"),t(s)])]),n("li",null,[n("a",d,[a("Tutorials Point"),t(s)])]),n("li",null,[n("a",k,[a("BTech"),t(s)])]),n("li",null,[n("a",m,[a("YouTube上的AVL树插入操作"),t(s)])]),n("li",null,[n("a",v,[a("AVL树的交互式可视化"),t(s)])])])])}const N=e(l,[["render",b],["__file","index.html.vue"]]);export{N as default};

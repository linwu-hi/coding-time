import{_ as t,r as i,o,c as p,a as n,b as a,e,d as l}from"./app-2d6feb9f.js";const c="/assets/binary-search-tree-8980994b.jpg",u={},d=l('<h1 id="二叉搜索树-binary-search-tree" tabindex="-1"><a class="header-anchor" href="#二叉搜索树-binary-search-tree" aria-hidden="true">#</a> 二叉搜索树（Binary Search Tree）</h1><p>在计算机科学中，<strong>二叉搜索树</strong>（Binary Search Tree，BST），有时也被称为有序或排序二叉树，是一种特殊的容器数据结构，用于在内存中存储“项”（例如数字、名称等）。它们允许快速查找、添加和删除项，并可用于实现动态集合或查找表，通过键（例如通过名称查找人的电话号码）来查找项。</p><p>二叉搜索树保持其键的有序性，以便查找和其他操作可以利用二分查找的原理：在树中从根到叶子进行遍历，通过与树节点中存储的键进行比较，并根据比较结果决定是继续在左子树还是右子树中查找。平均而言，这意味着每次比较可以跳过树的大约一半的节点，因此每次查找、插入或删除的时间与存储在树中的项的数量的对数成比例。这比在（未排序的）数组中按键查找项所需的线性时间要好得多，但比哈希表的相应操作要慢。</p><p>一个大小为9、深度为3的二叉搜索树，根节点为8。 未绘制叶子节点。</p><figure><img src="'+c+`" alt="二叉搜索树" tabindex="0" loading="lazy"><figcaption>二叉搜索树</figcaption></figure><h2 id="基本操作的伪代码" tabindex="-1"><a class="header-anchor" href="#基本操作的伪代码" aria-hidden="true">#</a> 基本操作的伪代码</h2><h3 id="插入" tabindex="-1"><a class="header-anchor" href="#插入" aria-hidden="true">#</a> 插入</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>insert(value)
  前置条件：value已通过自定义类型检查，类型为T
  后置条件：value已放置在树的正确位置
  如果 root = ø
    root ← 节点(value)
  否则
    insertNode(root, value)
  结束如果
结束插入
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>insertNode(current, value)
  前置条件：current为起始节点
  后置条件：value已放置在树的正确位置
  如果 value &lt; current.value
    如果 current.left = ø
      current.left ← 节点(value)
    否则
      InsertNode(current.left, value)
    结束如果
  否则
    如果 current.right = ø
      current.right ← 节点(value)
    否则
      InsertNode(current.right, value)
    结束如果
  结束如果
结束insertNode
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查找" tabindex="-1"><a class="header-anchor" href="#查找" aria-hidden="true">#</a> 查找</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>contains(root, value)
  前置条件：root为树的根节点，value为要查找的值
  后置条件：确定value是否被找到
  如果 root = ø
    返回 false
  结束如果
  如果 root.value = value
    返回 true
  否则，如果 value &lt; root.value
    返回 contains(root.left, value)
  否则
    返回 contains(root.right, value)
  结束如果
结束contains
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>remove(value)
  前置条件：value为要删除的节点的值，root为BST的根节点，count为BST中的项数
  后置条件：如果找到并删除了值为value的节点，则返回true；否则返回false
  nodeToRemove ← findNode(value)
  如果 nodeToRemove = ø
    返回 false
  结束如果
  parent ← findParent(value)
  如果 count = 1
    root ← ø
  否则，如果 nodeToRemove.left = ø 并且 nodeToRemove.right = ø
    如果 nodeToRemove.value &lt; parent.value
      parent.left ←  nodeToRemove.right
    否则
      parent.right ← nodeToRemove.right
    结束如果
  否则，如果 nodeToRemove.left != ø 并且 nodeToRemove.right != ø
    next ← nodeToRemove.right
    当 next.left != ø
      next ← next.left
    结束循环
    如果 next != nodeToRemove.right
      remove(next.value)
      nodeToRemove.value ← next.value
    否则
      nodeToRemove.value ← next.value
      nodeToRemove.right ← nodeToRemove.right.right
    结束如果
  否则
    如果 nodeToRemove.left = ø
      next ← nodeToRemove.right
    否则
      next ← nodeToRemove.left
    结束如果
    如果 root = nodeToRemove
      root = next
    否则，如果 parent.left = nodeToRemove
      parent.left = next
    否则，如果 parent.right = nodeToRemove
      parent.right = next
    结束如果
  结束如果
  count ← count - 1
  返回 true
结束remove
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查找节点的父节点" tabindex="-1"><a class="header-anchor" href="#查找节点的父节点" aria-hidden="true">#</a> 查找节点的父节点</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>findParent(value, root)
  前置条件：value为要查找其父节点的节点的值，root为BST的根节点

且不为ø
  后置条件：如果找到value的父节点，则返回对其的引用；否则返回ø
  如果 value = root.value
    返回 ø
  结束如果
  如果 value &lt; root.value
    如果 root.left = ø
      返回 ø
    否则，如果 root.left.value = value
      返回 root
    否则
      返回 findParent(value, root.left)
    结束如果
  否则
    如果 root.right = ø
      返回 ø
    否则，如果 root.right.value = value
      返回 root
    否则
      返回 findParent(value, root.right)
    结束如果
  结束如果
结束findParent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查找节点" tabindex="-1"><a class="header-anchor" href="#查找节点" aria-hidden="true">#</a> 查找节点</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>findNode(root, value)
  前置条件：value为要查找的节点的值，root为BST的根节点
  后置条件：如果找到了值为value的节点，则返回对该节点的引用；否则返回ø
  如果 root = ø
    返回 ø
  结束如果
  如果 root.value = value
    返回 root
  否则，如果 value &lt; root.value
    返回 findNode(root.left, value)
  否则
    返回 findNode(root.right, value)
  结束如果
结束findNode
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查找最小值" tabindex="-1"><a class="header-anchor" href="#查找最小值" aria-hidden="true">#</a> 查找最小值</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>findMin(root)
  前置条件：root为BST的根节点
  后置条件：定位到BST中的最小值
  如果 root.left = ø
    返回 root.value
  结束如果
  findMin(root.left)
结束findMin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查找最大值" tabindex="-1"><a class="header-anchor" href="#查找最大值" aria-hidden="true">#</a> 查找最大值</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>findMax(root)
  前置条件：root为BST的根节点
  后置条件：定位到BST中的最大值
  如果 root.right = ø
    返回 root.value
  结束如果
  findMax(root.right)
结束findMax
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="遍历" tabindex="-1"><a class="header-anchor" href="#遍历" aria-hidden="true">#</a> 遍历</h3><h4 id="中序遍历" tabindex="-1"><a class="header-anchor" href="#中序遍历" aria-hidden="true">#</a> 中序遍历</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>inorder(root)
  前置条件：root为BST的根节点
  后置条件：以中序遍历的顺序访问BST中的节点
  如果 root != ø
    inorder(root.left)
    输出 root.value
    inorder(root.right)
  结束如果
结束inorder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="前序遍历" tabindex="-1"><a class="header-anchor" href="#前序遍历" aria-hidden="true">#</a> 前序遍历</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>preorder(root)
  前置条件：root为BST的根节点
  后置条件：以前序遍历的顺序访问BST中的节点
  如果 root != ø
    输出 root.value
    preorder(root.left)
    preorder(root.right)
  结束如果
结束preorder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="后序遍历" tabindex="-1"><a class="header-anchor" href="#后序遍历" aria-hidden="true">#</a> 后序遍历</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>postorder(root)
  前置条件：root为BST的根节点
  后置条件：以后序遍历的顺序访问BST中的节点
  如果 root != ø
    postorder(root.left)
    postorder(root.right)
    输出 root.value
  结束如果
结束postorder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="完整代码" tabindex="-1"><a class="header-anchor" href="#完整代码" aria-hidden="true">#</a> 完整代码</h2><h3 id="binarysearchtreenode" tabindex="-1"><a class="header-anchor" href="#binarysearchtreenode" aria-hidden="true">#</a> BinarySearchTreeNode</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> BinaryTreeNode <span class="token keyword">from</span> <span class="token string">&#39;../BinaryTreeNode&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Comparator <span class="token keyword">from</span> <span class="token string">&#39;../../../utils/comparator/Comparator&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">BinarySearchTreeNode</span> <span class="token keyword">extends</span> <span class="token class-name">BinaryTreeNode</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token optional-parameter"><span class="token punctuation">[</span><span class="token parameter">value</span><span class="token punctuation">]</span></span> - node value.
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">function</span><span class="token punctuation">}</span></span> <span class="token optional-parameter"><span class="token punctuation">[</span><span class="token parameter">compareFunction</span><span class="token punctuation">]</span></span> - comparator function for node values.
   */</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">value <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> compareFunction <span class="token operator">=</span> <span class="token keyword">undefined</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// This comparator is used to compare node values with each other.</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>compareFunction <span class="token operator">=</span> compareFunction<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>nodeValueComparator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Comparator</span><span class="token punctuation">(</span>compareFunction<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">value</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>BinarySearchTreeNode<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>nodeValueComparator<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>

      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>nodeValueComparator<span class="token punctuation">.</span><span class="token function">lessThan</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Insert to the left.</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BinarySearchTreeNode</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>compareFunction<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setLeft</span><span class="token punctuation">(</span>newNode<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">return</span> newNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>nodeValueComparator<span class="token punctuation">.</span><span class="token function">greaterThan</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Insert to the right.</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BinarySearchTreeNode</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>compareFunction<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setRight</span><span class="token punctuation">(</span>newNode<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">return</span> newNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">value</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>BinarySearchTreeNode<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Check the root.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>nodeValueComparator<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>nodeValueComparator<span class="token punctuation">.</span><span class="token function">lessThan</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Check left nodes.</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>nodeValueComparator<span class="token punctuation">.</span><span class="token function">greaterThan</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Check right nodes.</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">value</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">contains</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">!</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">value</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">remove</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> nodeToRemove <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>nodeToRemove<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;Item not found in the tree&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token punctuation">{</span> parent <span class="token punctuation">}</span> <span class="token operator">=</span> nodeToRemove<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>nodeToRemove<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>nodeToRemove<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Node is a leaf and thus has no children.</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Node has a parent. Just remove the pointer to this node from the parent.</span>
        parent<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>nodeToRemove<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// Node has no parent. Just erase current node value.</span>
        nodeToRemove<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nodeToRemove<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> nodeToRemove<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Node has two children.</span>
      <span class="token comment">// Find the next biggest value (minimum value in the right branch)</span>
      <span class="token comment">// and replace current value node with that next biggest value.</span>
      <span class="token keyword">const</span> nextBiggerNode <span class="token operator">=</span> nodeToRemove<span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">findMin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>nodeComparator<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span>nextBiggerNode<span class="token punctuation">,</span> nodeToRemove<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>nextBiggerNode<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        nodeToRemove<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span>nextBiggerNode<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// In case if next right value is the next bigger one and it doesn&#39;t have left child</span>
        <span class="token comment">// then just replace node that is going to be deleted with the right node.</span>
        nodeToRemove<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span>nodeToRemove<span class="token punctuation">.</span>right<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        nodeToRemove<span class="token punctuation">.</span><span class="token function">setRight</span><span class="token punctuation">(</span>nodeToRemove<span class="token punctuation">.</span>right<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// Node has only one child.</span>
      <span class="token comment">// Make this child to be a direct child of current node&#39;s parent.</span>
      <span class="token doc-comment comment">/** <span class="token keyword">@var</span> BinarySearchTreeNode */</span>
      <span class="token keyword">const</span> childNode <span class="token operator">=</span> nodeToRemove<span class="token punctuation">.</span>left <span class="token operator">||</span> nodeToRemove<span class="token punctuation">.</span>right<span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        parent<span class="token punctuation">.</span><span class="token function">replaceChild</span><span class="token punctuation">(</span>nodeToRemove<span class="token punctuation">,</span> childNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        BinaryTreeNode<span class="token punctuation">.</span><span class="token function">copyNode</span><span class="token punctuation">(</span>childNode<span class="token punctuation">,</span> nodeToRemove<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Clear the parent of removed node.</span>
    nodeToRemove<span class="token punctuation">.</span>parent <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>BinarySearchTreeNode<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">findMin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">findMin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="binarysearchtree" tabindex="-1"><a class="header-anchor" href="#binarysearchtree" aria-hidden="true">#</a> BinarySearchTree</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> BinarySearchTreeNode <span class="token keyword">from</span> <span class="token string">&#39;./BinarySearchTreeNode&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">BinarySearchTree</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">function</span><span class="token punctuation">}</span></span> <span class="token optional-parameter"><span class="token punctuation">[</span><span class="token parameter">nodeValueCompareFunction</span><span class="token punctuation">]</span></span>
   */</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">nodeValueCompareFunction</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BinarySearchTreeNode</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> nodeValueCompareFunction<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Steal node comparator from the root.</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>nodeComparator <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">.</span>nodeComparator<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">value</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>BinarySearchTreeNode<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">value</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">contains</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">value</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">remove</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="复杂度" tabindex="-1"><a class="header-anchor" href="#复杂度" aria-hidden="true">#</a> 复杂度</h2><h3 id="时间复杂度" tabindex="-1"><a class="header-anchor" href="#时间复杂度" aria-hidden="true">#</a> 时间复杂度</h3><table><thead><tr><th style="text-align:center;">访问</th><th style="text-align:center;">查找</th><th style="text-align:center;">插入</th><th style="text-align:center;">删除</th></tr></thead><tbody><tr><td style="text-align:center;">O(log(n))</td><td style="text-align:center;">O(log(n))</td><td style="text-align:center;">O(log(n))</td><td style="text-align:center;">O(log(n))</td></tr></tbody></table><h3 id="空间复杂度" tabindex="-1"><a class="header-anchor" href="#空间复杂度" aria-hidden="true">#</a> 空间复杂度</h3><p>O(n)</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,39),r={href:"https://en.wikipedia.org/wiki/Binary_search_tree",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.youtube.com/watch?v=wcIRPqTR3Kc&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=9&t=0s",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.cs.usfca.edu/~galles/visualization/BST.html",target:"_blank",rel:"noopener noreferrer"};function m(b,h){const s=i("ExternalLinkIcon");return o(),p("div",null,[d,n("ul",null,[n("li",null,[n("a",r,[a("维基百科"),e(s)])]),n("li",null,[n("a",v,[a("YouTube上的插入BST教程"),e(s)])]),n("li",null,[n("a",k,[a("BST交互式可视化"),e(s)])])])])}const f=t(u,[["render",m],["__file","index.html.vue"]]);export{f as default};

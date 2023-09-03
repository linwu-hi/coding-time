import{_ as t,r as p,o,c,a as n,b as a,e,d as i}from"./app-2477bd15.js";const l={},u=i(`<h1 id="红黑树" tabindex="-1"><a class="header-anchor" href="#红黑树" aria-hidden="true">#</a> 红黑树</h1><p><strong>红黑树</strong>是一种自平衡的二叉搜索树，常用于计算机科学中。二叉树的每个节点都有一个额外的位，这个位通常被解释为节点的颜色（红色或黑色）。通过使用这些颜色位，在插入和删除操作期间保持树的近似平衡。</p><p>红黑树通过以满足一定属性的方式将树中的每个节点染成两种颜色之一来保持平衡，这些属性共同限制了树在最坏情况下的不平衡程度。当树被修改时，新树随后被重新排列和染色，以恢复颜色属性。这些属性被设计成能够高效地执行重新排列和染色操作。</p><p>红黑树的平衡并不完美，但足以保证在<code>O(log n)</code>的时间内进行搜索，其中<code>n</code>是树中的元素总数。插入、删除操作以及树的重新排列和染色也可以在<code>O(log n)</code>的时间内完成。</p><figure><img src="https://upload.wikimedia.org/wikipedia/commons/6/66/Red-black_tree_example.svg" alt="红黑树" tabindex="0" loading="lazy"><figcaption>红黑树</figcaption></figure><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><p>除了二叉搜索树的要求之外，红黑树还必须满足以下条件：</p><ul><li>每个节点要么是红色，要么是黑色。</li><li>根节点是黑色。这条规则有时会被省略，因为根节点总是可以从红色更改为黑色，但不一定反过来。所以这条规则对分析影响不大。</li><li>所有叶子节点（NIL节点）都是黑色。</li><li>如果一个节点是红色，则它的两个子节点都是黑色。</li><li>从给定节点到其任意后代NIL节点的每条路径上包含相同数量的黑色节点。</li></ul><p>一些定义：从根节点到一个节点的黑色节点数称为该节点的<strong>黑深度</strong>；从根节点到叶子节点的所有路径中的黑色节点数目相等，称为红黑树的<strong>黑高度</strong>。</p><p>这些约束条件强制红黑树具有一个关键的性质：<em>从根节点到最远的叶子节点的路径长度不会超过从根节点到最近的叶子节点的路径长度的两倍</em>。结果是，树大致上是高度平衡的。由于插入、删除和查找值等操作的最坏情况时间与树的高度成比例，这种对高度的理论上界使得红黑树在最坏情况下具有高效性，而不像普通的二叉搜索树那样。</p><h2 id="插入时的平衡" tabindex="-1"><a class="header-anchor" href="#插入时的平衡" aria-hidden="true">#</a> 插入时的平衡</h2><h3 id="如果叔叔节点是红色" tabindex="-1"><a class="header-anchor" href="#如果叔叔节点是红色" aria-hidden="true">#</a> 如果叔叔节点是红色</h3><figure><img src="https://www.geeksforgeeks.org/wp-content/uploads/redBlackCase2.png" alt="红黑树平衡" tabindex="0" loading="lazy"><figcaption>红黑树平衡</figcaption></figure><h3 id="如果叔叔节点是黑色" tabindex="-1"><a class="header-anchor" href="#如果叔叔节点是黑色" aria-hidden="true">#</a> 如果叔叔节点是黑色</h3><ul><li>左左情况（<code>p</code>是<code>g</code>的左子节点，<code>x</code>是<code>p</code>的左子节点）</li><li>左右情况（<code>p</code>是<code>g</code>的左子节点，<code>x</code>是<code>p</code>的右子节点）</li><li>右右情况（<code>p</code>是<code>g</code>的右子节点，<code>x</code>是<code>p</code>的右子节点）</li><li>右左情况（<code>p</code>是<code>g</code>的右子节点，<code>x</code>是<code>p</code>的左子节点）</li></ul><h4 id="左左情况-查看g-p和x" tabindex="-1"><a class="header-anchor" href="#左左情况-查看g-p和x" aria-hidden="true">#</a> 左左情况（查看<code>g</code>，<code>p</code>和<code>x</code>）</h4><figure><img src="https://www.geeksforgeeks.org/wp-content/uploads/redBlackCase3a1.png" alt="红黑树平衡" tabindex="0" loading="lazy"><figcaption>红黑树平衡</figcaption></figure><h4 id="左右情况-查看g-p和x" tabindex="-1"><a class="header-anchor" href="#左右情况-查看g-p和x" aria-hidden="true">#</a> 左右情况（查看<code>g</code>，<code>p</code>和<code>x</code>）</h4><figure><img src="https://www.geeksforgeeks.org/wp-content/uploads/redBlackCase3b.png" alt="红黑树平衡" tabindex="0" loading="lazy"><figcaption>红黑树平衡</figcaption></figure><h4 id="右右情况-查看g-p和x" tabindex="-1"><a class="header-anchor" href="#右右情况-查看g-p和x" aria-hidden="true">#</a> 右右情况（查看<code>g</code>，<code>p</code>和<code>x</code>）</h4><figure><img src="https://www.geeksforgeeks.org/wp-content/uploads/redBlackCase3c.png" alt="红黑树平衡" tabindex="0" loading="lazy"><figcaption>红黑树平衡</figcaption></figure><h4 id="右左情" tabindex="-1"><a class="header-anchor" href="#右左情" aria-hidden="true">#</a> 右左情</h4><p>况（查看<code>g</code>，<code>p</code>和<code>x</code>）</p><figure><img src="https://www.geeksforgeeks.org/wp-content/uploads/redBlackCase3d.png" alt="红黑树平衡" tabindex="0" loading="lazy"><figcaption>红黑树平衡</figcaption></figure><h2 id="完整代码" tabindex="-1"><a class="header-anchor" href="#完整代码" aria-hidden="true">#</a> 完整代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> BinarySearchTree <span class="token keyword">from</span> <span class="token string">&#39;../binary-search-tree/BinarySearchTree&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// Possible colors of red-black tree nodes.</span>
<span class="token keyword">const</span> <span class="token constant">RED_BLACK_TREE_COLORS</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">red</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">black</span><span class="token operator">:</span> <span class="token string">&#39;black&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Color property name in meta information of the nodes.</span>
<span class="token keyword">const</span> <span class="token constant">COLOR_PROP_NAME</span> <span class="token operator">=</span> <span class="token string">&#39;color&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">RedBlackTree</span> <span class="token keyword">extends</span> <span class="token class-name">BinarySearchTree</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">value</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>BinarySearchTreeNode<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> insertedNode <span class="token operator">=</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// if (!this.root.left &amp;&amp; !this.root.right) {</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>nodeComparator<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span>insertedNode<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Make root to always be black.</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">makeNodeBlack</span><span class="token punctuation">(</span>insertedNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// Make all newly inserted nodes to be red.</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">makeNodeRed</span><span class="token punctuation">(</span>insertedNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Check all conditions and balance the node.</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">balance</span><span class="token punctuation">(</span>insertedNode<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> insertedNode<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">value</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">remove</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Can&#39;t remove </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">. Remove method is not implemented yet</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>BinarySearchTreeNode<span class="token punctuation">}</span></span> <span class="token parameter">node</span>
   */</span>
  <span class="token function">balance</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// If it is a root node then nothing to balance here.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>nodeComparator<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// If the parent is black then done. Nothing to balance here.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isNodeBlack</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>parent<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> grandParent <span class="token operator">=</span> node<span class="token punctuation">.</span>parent<span class="token punctuation">.</span>parent<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>uncle <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isNodeRed</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>uncle<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// If node has red uncle then we need to do RECOLORING.</span>

      <span class="token comment">// Recolor parent and uncle to black.</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">makeNodeBlack</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>uncle<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">makeNodeBlack</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>parent<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>nodeComparator<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span>grandParent<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Recolor grand-parent to red if it is not root.</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">makeNodeRed</span><span class="token punctuation">(</span>grandParent<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// If grand-parent is black root don&#39;t do anything.</span>
        <span class="token comment">// Since root already has two black sibling that we&#39;ve just recolored.</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// Now do further checking for recolored grand-parent.</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">balance</span><span class="token punctuation">(</span>grandParent<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">.</span>uncle <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isNodeBlack</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>uncle<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// If node uncle is black or absent then we need to do ROTATIONS.</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>grandParent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Grand parent that we will receive after rotations.</span>
        <span class="token keyword">let</span> newGrandParent<span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>nodeComparator<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span>grandParent<span class="token punctuation">.</span>left<span class="token punctuation">,</span> node<span class="token punctuation">.</span>parent<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// Left case.</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>nodeComparator<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>parent<span class="token punctuation">.</span>left<span class="token punctuation">,</span> node<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// Left-left case.</span>
            newGrandParent <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">leftLeftRotation</span><span class="token punctuation">(</span>grandParent<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// Left-right case.</span>
            newGrandParent <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">leftRightRotation</span><span class="token punctuation">(</span>grandParent<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token comment">// Right case.</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>nodeComparator<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>parent<span class="token punctuation">.</span>right<span class="token punctuation">,</span> node<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// Right-right case.</span>
            newGrandParent <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">rightRightRotation</span><span class="token punctuation">(</span>grandParent<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// Right-left case.</span>
            newGrandParent <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">rightLeftRotation</span><span class="token punctuation">(</span>grandParent<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// Set newGrandParent as a root if it doesn&#39;t have parent.</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>newGrandParent <span class="token operator">&amp;&amp;</span> newGrandParent<span class="token punctuation">.</span>parent <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>root <span class="token operator">=</span> newGrandParent<span class="token punctuation">;</span>

          <span class="token comment">// Recolor root into black.</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">makeNodeBlack</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// Check if new grand parent don&#39;t violate red-black-tree rules.</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">balance</span><span class="token punctuation">(</span>newGrandParent<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * Left Left Case (p is left child of g and x is left child of p)
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>BinarySearchTreeNode<span class="token operator">|</span>BinaryTreeNode<span class="token punctuation">}</span></span> <span class="token parameter">grandParentNode</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>BinarySearchTreeNode<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">leftLeftRotation</span><span class="token punctuation">(</span><span class="token parameter">grandParentNode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Memorize the parent of grand-parent node.</span>
    <span class="token keyword">const</span> grandGrandParent <span class="token operator">=</span> grandParentNode<span class="token punctuation">.</span>parent<span class="token punctuation">;</span>

    <span class="token comment">// Check what type of sibling is our grandParentNode is (left or right).</span>
    <span class="token keyword">let</span> grandParentNodeIsLeft<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>grandGrandParent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      grandParentNodeIsLeft <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>nodeComparator<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span>grandGrandParent<span class="token punctuation">.</span>left<span class="token punctuation">,</span> grandParentNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Memorize grandParentNode&#39;s left node.</span>
    <span class="token keyword">const</span> parentNode <span class="token operator">=</span> grandParentNode<span class="token punctuation">.</span>left<span class="token punctuation">;</span>

    <span class="token comment">// Memorize parent&#39;s right node since we&#39;re going to transfer it to</span>
    <span class="token comment">// grand parent&#39;s left subtree.</span>
    <span class="token keyword">const</span> parentRightNode <span class="token operator">=</span> parentNode<span class="token punctuation">.</span>right<span class="token punctuation">;</span>

    <span class="token comment">// Make grandParentNode to be right child of parentNode.</span>
    parentNode<span class="token punctuation">.</span><span class="token function">setRight</span><span class="token punctuation">(</span>grandParentNode<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Move child&#39;s right subtree to grandParentNode&#39;s left subtree.</span>
    grandParentNode<span class="token punctuation">.</span><span class="token function">setLeft</span><span class="token punctuation">(</span>parentRightNode<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Put parentNode node in place of grandParentNode.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>grandGrandParent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>grandParentNodeIsLeft<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        grandGrandParent<span class="token punctuation">.</span><span class="token function">setLeft</span><span class="token punctuation">(</span>parentNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        grandGrandParent<span class="token punctuation">.</span><span class="token function">setRight</span><span class="token punctuation">(</span>parentNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// Make parent node a root</span>
      parentNode<span class="token punctuation">.</span>parent <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Swap colors of grandParentNode and parentNode.</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">swapNodeColors</span><span class="token punctuation">(</span>parentNode<span class="token punctuation">,</span> grandParentNode<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Return new root node.</span>
    <span class="token keyword">return</span> parentNode<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * Left Right Case (p is left child of g and x is right child of p)
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>BinarySearchTreeNode<span class="token operator">|</span>BinaryTreeNode<span class="token punctuation">}</span></span> <span class="token parameter">grandParentNode</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>BinarySearchTreeNode<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">leftRightRotation</span><span class="token punctuation">(</span><span class="token parameter">grandParentNode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Memorize left and left-right nodes.</span>
    <span class="token keyword">const</span> parentNode <span class="token operator">=</span> grandParentNode<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
    <span class="token keyword">const</span> childNode <span class="token operator">=</span> parentNode<span class="token punctuation">.</span>right<span class="token punctuation">;</span>

    <span class="token comment">// We need to memorize child left node to prevent losing</span>
    <span class="token comment">// left child subtree. Later it will be re-assigned to</span>
    <span class="token comment">// parent&#39;s right sub-tree.</span>
    <span class="token keyword">const</span> childLeftNode <span class="token operator">=</span> childNode<span class="token punctuation">.</span>left<span class="token punctuation">;</span>

    <span class="token comment">// Make parentNode to be a left child of childNode node.</span>
    childNode<span class="token punctuation">.</span><span class="token function">setLeft</span><span class="token punctuation">(</span>parentNode<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Move child&#39;s left subtree to parent&#39;s right subtree.</span>
    parentNode<span class="token punctuation">.</span><span class="token function">setRight</span><span class="token punctuation">(</span>childLeftNode<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Put left-right node in place of left node.</span>
    grandParentNode<span class="token punctuation">.</span><span class="token function">setLeft</span><span class="token punctuation">(</span>childNode<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Now we&#39;re ready to do left-left rotation.</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">leftLeftRotation</span><span class="token punctuation">(</span>grandParentNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * Right Right Case (p is right child of g and x is right child of p)
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>BinarySearchTreeNode<span class="token operator">|</span>BinaryTreeNode<span class="token punctuation">}</span></span> <span class="token parameter">grandParentNode</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>BinarySearchTreeNode<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">rightRightRotation</span><span class="token punctuation">(</span><span class="token parameter">grandParentNode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Memorize the parent of grand-parent node.</span>
    <span class="token keyword">const</span> grandGrandParent <span class="token operator">=</span> grandParentNode<span class="token punctuation">.</span>parent<span class="token punctuation">;</span>

    <span class="token comment">// Check what type of sibling is our grandParentNode is (left or right).</span>
    <span class="token keyword">let</span> grandParentNodeIsLeft<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>grandGrandParent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      grandParentNodeIsLeft <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>nodeComparator<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span>grandGrandParent<span class="token punctuation">.</span>left<span class="token punctuation">,</span> grandParentNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Memorize grandParentNode&#39;s right node.</span>
    <span class="token keyword">const</span> parentNode <span class="token operator">=</span> grandParentNode<span class="token punctuation">.</span>right<span class="token punctuation">;</span>

    <span class="token comment">// Memorize parent&#39;s left node since we&#39;re going to transfer it to</span>
    <span class="token comment">// grand parent&#39;s right subtree.</span>
    <span class="token keyword">const</span> parentLeftNode <span class="token operator">=</span> parentNode<span class="token punctuation">.</span>left<span class="token punctuation">;</span>

    <span class="token comment">// Make grandParentNode to be left child of parentNode.</span>
    parentNode<span class="token punctuation">.</span><span class="token function">setLeft</span><span class="token punctuation">(</span>grandParentNode<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Transfer all left nodes from parent to right sub-tree of grandparent.</span>
    grandParentNode<span class="token punctuation">.</span><span class="token function">setRight</span><span class="token punctuation">(</span>parentLeftNode<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Put parentNode node in place of grandParentNode.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>grandGrandParent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>grandParentNodeIsLeft<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        grandGrandParent<span class="token punctuation">.</span><span class="token function">setLeft</span><span class="token punctuation">(</span>parentNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        grandGrandParent<span class="token punctuation">.</span><span class="token function">setRight</span><span class="token punctuation">(</span>parentNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// Make parent node a root.</span>
      parentNode<span class="token punctuation">.</span>parent <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Swap colors of granParent and parent nodes.</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">swapNodeColors</span><span class="token punctuation">(</span>parentNode<span class="token punctuation">,</span> grandParentNode<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Return new root node.</span>
    <span class="token keyword">return</span> parentNode<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * Right Left Case (p is right child of g and x is left child of p)
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>BinarySearchTreeNode<span class="token operator">|</span>BinaryTreeNode<span class="token punctuation">}</span></span> <span class="token parameter">grandParentNode</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>BinarySearchTreeNode<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">rightLeftRotation</span><span class="token punctuation">(</span><span class="token parameter">grandParentNode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Memorize right and right-left nodes.</span>
    <span class="token keyword">const</span> parentNode <span class="token operator">=</span> grandParentNode<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
    <span class="token keyword">const</span> childNode <span class="token operator">=</span> parentNode<span class="token punctuation">.</span>left<span class="token punctuation">;</span>

    <span class="token comment">// We need to memorize child right node to prevent losing</span>
    <span class="token comment">// right child subtree. Later it will be re-assigned to</span>
    <span class="token comment">// parent&#39;s left sub-tree.</span>
    <span class="token keyword">const</span> childRightNode <span class="token operator">=</span> childNode<span class="token punctuation">.</span>right<span class="token punctuation">;</span>

    <span class="token comment">// Make parentNode to be a right child of childNode.</span>
    childNode<span class="token punctuation">.</span><span class="token function">setRight</span><span class="token punctuation">(</span>parentNode<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Move child&#39;s right subtree to parent&#39;s left subtree.</span>
    parentNode<span class="token punctuation">.</span><span class="token function">setLeft</span><span class="token punctuation">(</span>childRightNode<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Put childNode node in place of parentNode.</span>
    grandParentNode<span class="token punctuation">.</span><span class="token function">setRight</span><span class="token punctuation">(</span>childNode<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Now we&#39;re ready to do right-right rotation.</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">rightRightRotation</span><span class="token punctuation">(</span>grandParentNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>BinarySearchTreeNode<span class="token operator">|</span>BinaryTreeNode<span class="token punctuation">}</span></span> <span class="token parameter">node</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>BinarySearchTreeNode<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">makeNodeRed</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    node<span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token constant">COLOR_PROP_NAME</span><span class="token punctuation">,</span> <span class="token constant">RED_BLACK_TREE_COLORS</span><span class="token punctuation">.</span>red<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> node<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>BinarySearchTreeNode<span class="token operator">|</span>BinaryTreeNode<span class="token punctuation">}</span></span> <span class="token parameter">node</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>BinarySearchTreeNode<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">makeNodeBlack</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    node<span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token constant">COLOR_PROP_NAME</span><span class="token punctuation">,</span> <span class="token constant">RED_BLACK_TREE_COLORS</span><span class="token punctuation">.</span>black<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> node<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>BinarySearchTreeNode<span class="token operator">|</span>BinaryTreeNode<span class="token punctuation">}</span></span> <span class="token parameter">node</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">isNodeRed</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> node<span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token constant">COLOR_PROP_NAME</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token constant">RED_BLACK_TREE_COLORS</span><span class="token punctuation">.</span>red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>BinarySearchTreeNode<span class="token operator">|</span>BinaryTreeNode<span class="token punctuation">}</span></span> <span class="token parameter">node</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">isNodeBlack</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> node<span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token constant">COLOR_PROP_NAME</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token constant">RED_BLACK_TREE_COLORS</span><span class="token punctuation">.</span>black<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>BinarySearchTreeNode<span class="token operator">|</span>BinaryTreeNode<span class="token punctuation">}</span></span> <span class="token parameter">node</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">isNodeColored</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isNodeRed</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isNodeBlack</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>BinarySearchTreeNode<span class="token operator">|</span>BinaryTreeNode<span class="token punctuation">}</span></span> <span class="token parameter">firstNode</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>BinarySearchTreeNode<span class="token operator">|</span>BinaryTreeNode<span class="token punctuation">}</span></span> <span class="token parameter">secondNode</span>
   */</span>
  <span class="token function">swapNodeColors</span><span class="token punctuation">(</span><span class="token parameter">firstNode<span class="token punctuation">,</span> secondNode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> firstColor <span class="token operator">=</span> firstNode<span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token constant">COLOR_PROP_NAME</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> secondColor <span class="token operator">=</span> secondNode<span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token constant">COLOR_PROP_NAME</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    firstNode<span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token constant">COLOR_PROP_NAME</span><span class="token punctuation">,</span> secondColor<span class="token punctuation">)</span><span class="token punctuation">;</span>
    secondNode<span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token constant">COLOR_PROP_NAME</span><span class="token punctuation">,</span> firstColor<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,27),r={href:"https://en.wikipedia.org/wiki/Red%E2%80%93black_tree",target:"_blank",rel:"noopener noreferrer"},d={href:"https://www.youtube.com/watch?v=UaLIHuR1t8Q&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=63",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.youtube.com/watch?v=CTvfzU_uNKE&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=64",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.geeksforgeeks.org/red-black-tree-set-2-insert/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.cs.usfca.edu/~galles/visualization/RedBlack.html",target:"_blank",rel:"noopener noreferrer"};function b(h,f){const s=p("ExternalLinkIcon");return o(),c("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[a("维基百科"),e(s)])]),n("li",null,[n("a",d,[a("Tushar Roy的红黑树插入 (YouTube)"),e(s)])]),n("li",null,[n("a",k,[a("Tushar Roy的红黑树删除 (YouTube)"),e(s)])]),n("li",null,[n("a",v,[a("GeeksForGeeks上的红黑树插入"),e(s)])]),n("li",null,[n("a",m,[a("交互式可视化红黑树"),e(s)])])])])}const w=t(l,[["render",b],["__file","index.html.vue"]]);export{w as default};

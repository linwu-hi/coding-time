import{_ as t,r as p,o,c,a as n,b as a,e,d as i}from"./app-d7df62a4.js";const l={},u=i(`<h1 id="线段树" tabindex="-1"><a class="header-anchor" href="#线段树" aria-hidden="true">#</a> 线段树</h1><p>在计算机科学中，<strong>线段树</strong>（Segment Tree）也被称为统计树，用于存储有关区间或段的信息。它允许查询存储的段中是否包含给定点。从原理上讲，它是一种静态结构，即一旦构建，就无法修改的结构。类似的数据结构是区间树（Interval Tree）。</p><p>线段树是一棵二叉树。树的根节点表示整个数组。根节点的两个子节点分别表示数组的前半部分和后半部分。同样，每个节点的子节点对应于与节点相对应的数组的两个部分。</p><p>我们自底向上构建树，每个节点的值是其子节点值的“最小值”（或任何其他函数）。这将花费 <code>O(n log n)</code> 的时间。所做的操作次数是树的高度，即 <code>O(log n)</code>。要进行范围查询，每个节点将查询分成两个部分，即每个子节点的子查询。如果查询包含节点的整个子数组，我们可以使用节点上预计算的值。使用这种优化，我们可以证明只执行 <code>O(log n)</code> 个最小值操作。</p><figure><img src="https://www.geeksforgeeks.org/wp-content/uploads/RangeMinimumQuery.png" alt="最小值线段树" tabindex="0" loading="lazy"><figcaption>最小值线段树</figcaption></figure><figure><img src="https://www.geeksforgeeks.org/wp-content/uploads/segment-tree1.png" alt="求和线段树" tabindex="0" loading="lazy"><figcaption>求和线段树</figcaption></figure><h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h2><p>线段树是一种旨在高效执行某些数组操作的数据结构，特别是涉及范围查询的操作。</p><p>线段树的应用领域包括计算几何和地理信息系统。</p><p>线段树的当前实现意味着您可以向其传递任何二元（带有两个输入参数）函数，从而可以对各种函数进行范围查询。在测试中，您可以找到对线段树进行最小值、最大值和求和范围查询的示例。</p><h2 id="完整代码" tabindex="-1"><a class="header-anchor" href="#完整代码" aria-hidden="true">#</a> 完整代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> isPowerOfTwo <span class="token keyword">from</span> <span class="token string">&#39;../../../algorithms/math/is-power-of-two/isPowerOfTwo&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">SegmentTree</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">inputArray</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">function</span><span class="token punctuation">}</span></span> <span class="token parameter">operation</span> - binary function (i.e. sum, min)
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">operationFallback</span> - operation fallback value (i.e. 0 for sum, Infinity for min)
   */</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">inputArray<span class="token punctuation">,</span> operation<span class="token punctuation">,</span> operationFallback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>inputArray <span class="token operator">=</span> inputArray<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>operation <span class="token operator">=</span> operation<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>operationFallback <span class="token operator">=</span> operationFallback<span class="token punctuation">;</span>

    <span class="token comment">// Init array representation of segment tree.</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>segmentTree <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initSegmentTree</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>inputArray<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">buildSegmentTree</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">inputArray</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">initSegmentTree</span><span class="token punctuation">(</span><span class="token parameter">inputArray</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> segmentTreeArrayLength<span class="token punctuation">;</span>
    <span class="token keyword">const</span> inputArrayLength <span class="token operator">=</span> inputArray<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isPowerOfTwo</span><span class="token punctuation">(</span>inputArrayLength<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// If original array length is a power of two.</span>
      segmentTreeArrayLength <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> inputArrayLength<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// If original array length is not a power of two then we need to find</span>
      <span class="token comment">// next number that is a power of two and use it to calculate</span>
      <span class="token comment">// tree array size. This is happens because we need to fill empty children</span>
      <span class="token comment">// in perfect binary tree with nulls.And those nulls need extra space.</span>
      <span class="token keyword">const</span> currentPower <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">log2</span><span class="token punctuation">(</span>inputArrayLength<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> nextPower <span class="token operator">=</span> currentPower <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> nextPowerOfTwoNumber <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">**</span> nextPower<span class="token punctuation">;</span>
      segmentTreeArrayLength <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> nextPowerOfTwoNumber<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>segmentTreeArrayLength<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * Build segment tree.
   */</span>
  <span class="token function">buildSegmentTree</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> leftIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> rightIndex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>inputArray<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> position <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">buildTreeRecursively</span><span class="token punctuation">(</span>leftIndex<span class="token punctuation">,</span> rightIndex<span class="token punctuation">,</span> position<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * Build segment tree recursively.
   *
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">leftInputIndex</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">rightInputIndex</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">position</span>
   */</span>
  <span class="token function">buildTreeRecursively</span><span class="token punctuation">(</span><span class="token parameter">leftInputIndex<span class="token punctuation">,</span> rightInputIndex<span class="token punctuation">,</span> position</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// If low input index and high input index are equal that would mean</span>
    <span class="token comment">// the we have finished splitting and we are already came to the leaf</span>
    <span class="token comment">// of the segment tree. We need to copy this leaf value from input</span>
    <span class="token comment">// array to segment tree.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>leftInputIndex <span class="token operator">===</span> rightInputIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>segmentTree<span class="token punctuation">[</span>position<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>inputArray<span class="token punctuation">[</span>leftInputIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Split input array on two halves and process them recursively.</span>
    <span class="token keyword">const</span> middleIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>leftInputIndex <span class="token operator">+</span> rightInputIndex<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Process left half of the input array.</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">buildTreeRecursively</span><span class="token punctuation">(</span>leftInputIndex<span class="token punctuation">,</span> middleIndex<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getLeftChildIndex</span><span class="token punctuation">(</span>position<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Process right half of the input array.</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">buildTreeRecursively</span><span class="token punctuation">(</span>middleIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> rightInputIndex<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getRightChildIndex</span><span class="token punctuation">(</span>position<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Once every tree leaf is not empty we&#39;re able to build tree bottom up using</span>
    <span class="token comment">// provided operation function.</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>segmentTree<span class="token punctuation">[</span>position<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">operation</span><span class="token punctuation">(</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>segmentTree<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getLeftChildIndex</span><span class="token punctuation">(</span>position<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>segmentTree<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getRightChildIndex</span><span class="token punctuation">(</span>position<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * Do range query on segment tree in context of this.operation function.
   *
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">queryLeftIndex</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">queryRightIndex</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">rangeQuery</span><span class="token punctuation">(</span><span class="token parameter">queryLeftIndex<span class="token punctuation">,</span> queryRightIndex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> leftIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> rightIndex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>inputArray<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> position <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">rangeQueryRecursive</span><span class="token punctuation">(</span>
      queryLeftIndex<span class="token punctuation">,</span>
      queryRightIndex<span class="token punctuation">,</span>
      leftIndex<span class="token punctuation">,</span>
      rightIndex<span class="token punctuation">,</span>
      position<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * Do range query on segment tree recursively in context of this.operation function.
   *
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">queryLeftIndex</span> - left index of the query
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">queryRightIndex</span> - right index of the query
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">leftIndex</span> - left index of input array segment
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">rightIndex</span> - right index of input array segment
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">position</span> - root position in binary tree
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">rangeQueryRecursive</span><span class="token punctuation">(</span><span class="token parameter">queryLeftIndex<span class="token punctuation">,</span> queryRightIndex<span class="token punctuation">,</span> leftIndex<span class="token punctuation">,</span> rightIndex<span class="token punctuation">,</span> position</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>queryLeftIndex <span class="token operator">&lt;=</span> leftIndex <span class="token operator">&amp;&amp;</span> queryRightIndex <span class="token operator">&gt;=</span> rightIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Total overlap.</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>segmentTree<span class="token punctuation">[</span>position<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>queryLeftIndex <span class="token operator">&gt;</span> rightIndex <span class="token operator">||</span> queryRightIndex <span class="token operator">&lt;</span> leftIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// No overlap.</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>operationFallback<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Partial overlap.</span>
    <span class="token keyword">const</span> middleIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>leftIndex <span class="token operator">+</span> rightIndex<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> leftOperationResult <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">rangeQueryRecursive</span><span class="token punctuation">(</span>
      queryLeftIndex<span class="token punctuation">,</span>
      queryRightIndex<span class="token punctuation">,</span>
      leftIndex<span class="token punctuation">,</span>
      middleIndex<span class="token punctuation">,</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getLeftChildIndex</span><span class="token punctuation">(</span>position<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> rightOperationResult <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">rangeQueryRecursive</span><span class="token punctuation">(</span>
      queryLeftIndex<span class="token punctuation">,</span>
      queryRightIndex<span class="token punctuation">,</span>
      middleIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
      rightIndex<span class="token punctuation">,</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getRightChildIndex</span><span class="token punctuation">(</span>position<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">operation</span><span class="token punctuation">(</span>leftOperationResult<span class="token punctuation">,</span> rightOperationResult<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * Left child index.
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">parentIndex</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">getLeftChildIndex</span><span class="token punctuation">(</span><span class="token parameter">parentIndex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> parentIndex<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * Right child index.
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">parentIndex</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">getRightChildIndex</span><span class="token punctuation">(</span><span class="token parameter">parentIndex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> parentIndex<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,13),r={href:"https://en.wikipedia.org/wiki/Segment_tree",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.youtube.com/watch?v=ZBHKZF5w4YU&index=65&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8",target:"_blank",rel:"noopener noreferrer"},d={href:"https://www.geeksforgeeks.org/segment-tree-set-1-sum-of-given-range/",target:"_blank",rel:"noopener noreferrer"};function m(v,b){const s=p("ExternalLinkIcon");return o(),c("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[a("维基百科"),e(s)])]),n("li",null,[n("a",k,[a("YouTube"),e(s)])]),n("li",null,[n("a",d,[a("GeeksForGeeks"),e(s)])])])])}const h=t(l,[["render",m],["__file","index.html.vue"]]);export{h as default};

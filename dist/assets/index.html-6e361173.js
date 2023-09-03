import{_ as p,r as e,o,c,a as n,b as a,d as t,e as i}from"./app-0301958d.js";const l={},u=i(`<h1 id="不相交集" tabindex="-1"><a class="header-anchor" href="#不相交集" aria-hidden="true">#</a> 不相交集</h1><p><strong>不相交集</strong>数据结构（也称为并查集或者合并-查找集）是一种跟踪一组元素划分为许多不相交（非重叠）子集的数据结构。它提供近乎常数时间的操作（受到阿克曼函数的限制）来<strong>添加新集合</strong>，<strong>合并现有集合</strong>，以及<strong>确定元素是否在同一集合中</strong>。除了许多其他用途（见应用部分），不相交集在 Kruskal&#39;s 算法中起着关键作用，该算法用于查找图的最小生成树。</p><figure><img src="https://upload.wikimedia.org/wikipedia/commons/6/67/Dsu_disjoint_sets_init.svg" alt="不相交集" tabindex="0" loading="lazy"><figcaption>不相交集</figcaption></figure><p><em>MakeSet</em> 创建了 8 个单元素集合。</p><figure><img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Dsu_disjoint_sets_final.svg" alt="不相交集" tabindex="0" loading="lazy"><figcaption>不相交集</figcaption></figure><p>在进行了一些 <em>Union</em> 操作之后，一些集合被组合在一起。</p><h2 id="完整代码" tabindex="-1"><a class="header-anchor" href="#完整代码" aria-hidden="true">#</a> 完整代码</h2><h3 id="disjointsetitem" tabindex="-1"><a class="header-anchor" href="#disjointsetitem" aria-hidden="true">#</a> DisjointSetItem</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">DisjointSetItem</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">value</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">function</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token optional-parameter"><span class="token punctuation">[</span><span class="token parameter">keyCallback</span><span class="token punctuation">]</span></span>
   */</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> keyCallback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 存储元素值</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token comment">// 键回调函数用于生成键</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>keyCallback <span class="token operator">=</span> keyCallback<span class="token punctuation">;</span>
    <span class="token comment">// 父元素，默认为 null</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>parent <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token comment">// 子元素，初始为空对象</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 允许用户定义自定义键生成器。</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>keyCallback<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">keyCallback</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 否则，默认使用 value 作为键。</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>DisjointSetItem<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">getRoot</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果当前元素是根元素，返回自身，否则返回父元素的根。</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isRoot</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token keyword">this</span> <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>parent<span class="token punctuation">.</span><span class="token function">getRoot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">isRoot</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果 parent 为 null，则当前元素为根元素</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>parent <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * Rank基本上意味着所有祖先的数量。
   *
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">getRank</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果没有子元素，rank 为 0</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> rank <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** <span class="token keyword">@var</span> <span class="token class-name"><span class="token punctuation">{</span>DisjointSetItem<span class="token punctuation">}</span></span> child */</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">child</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// 计算子节点本身。</span>
      rank <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>

      <span class="token comment">// 也添加当前子节点的所有子节点。</span>
      rank <span class="token operator">+=</span> child<span class="token punctuation">.</span><span class="token function">getRank</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> rank<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>DisjointSetItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">getChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 返回所有子元素</span>
    <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>DisjointSetItem<span class="token punctuation">}</span></span> <span class="token parameter">parentItem</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span> <span class="token parameter">forceSettingParentChild</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>DisjointSetItem<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">setParent</span><span class="token punctuation">(</span><span class="token parameter">parentItem<span class="token punctuation">,</span> forceSettingParentChild <span class="token operator">=</span> <span class="token boolean">true</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 设置父元素</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>parent <span class="token operator">=</span> parentItem<span class="token punctuation">;</span>
    <span class="token comment">// 如果 forceSettingParentChild 为 true，则把当前元素添加到父元素的子元素中</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>forceSettingParentChild<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      parentItem<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>DisjointSetItem<span class="token punctuation">}</span></span> <span class="token parameter">childItem</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>DisjointSetItem<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">addChild</span><span class="token punctuation">(</span><span class="token parameter">childItem</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将元素添加到子元素</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>children<span class="token punctuation">[</span>childItem<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> childItem<span class="token punctuation">;</span>
    <span class="token comment">// 将当前元素设置为添加的元素的父元素</span>
    childItem<span class="token punctuation">.</span><span class="token function">setParent</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="disjointset" tabindex="-1"><a class="header-anchor" href="#disjointset" aria-hidden="true">#</a> DisjointSet</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">DisjointSet</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">function</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token optional-parameter"><span class="token punctuation">[</span><span class="token parameter">keyCallback</span><span class="token punctuation">]</span></span>
   */</span>
  <span class="token comment">// 构造函数，参数是键回调函数</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">keyCallback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>keyCallback <span class="token operator">=</span> keyCallback<span class="token punctuation">;</span> <span class="token comment">// 键回调函数</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 存储元素</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">itemValue</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>DisjointSet<span class="token punctuation">}</span></span>
   */</span>
  <span class="token comment">// 创建新的集合</span>
  <span class="token function">makeSet</span><span class="token punctuation">(</span><span class="token parameter">itemValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> disjointSetItem <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DisjointSetItem</span><span class="token punctuation">(</span>itemValue<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>keyCallback<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span>disjointSetItem<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果元素尚未存在，添加新元素</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span>disjointSetItem<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> disjointSetItem<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 查找集合的表示节点。
   *
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">itemValue</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token punctuation">(</span>string<span class="token operator">|</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">itemValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> templateDisjointItem <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DisjointSetItem</span><span class="token punctuation">(</span>itemValue<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>keyCallback<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 尝试查找元素本身</span>
    <span class="token keyword">const</span> requiredDisjointItem <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span>templateDisjointItem<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>requiredDisjointItem<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> requiredDisjointItem<span class="token punctuation">.</span><span class="token function">getRoot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 按秩合并。
   *
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">valueA</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">valueB</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>DisjointSet<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">union</span><span class="token punctuation">(</span><span class="token parameter">valueA<span class="token punctuation">,</span> valueB</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> rootKeyA <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>valueA<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> rootKeyB <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>valueB<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>rootKeyA <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> rootKeyB <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;一个或两个值不在集合中&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>rootKeyA <span class="token operator">===</span> rootKeyB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果两个元素已经在同一集合中，只需要返回其键</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> rootA <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span>rootKeyA<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> rootB <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span>rootKeyB<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>rootA<span class="token punctuation">.</span><span class="token function">getRank</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> rootB<span class="token punctuation">.</span><span class="token function">getRank</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果rootB的树更大，那么rootB成为新的根</span>
      rootB<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>rootA<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 如果rootA的树更大，那么rootA成为新的根</span>
    rootA<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>rootB<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">valueA</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">valueB</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
   */</span>
  <span class="token comment">// 判断两个值是否在同一个集合中</span>
  <span class="token function">inSameSet</span><span class="token punctuation">(</span><span class="token parameter">valueA<span class="token punctuation">,</span> valueB</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> rootKeyA <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>valueA<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> rootKeyB <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>valueB<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>rootKeyA <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> rootKeyB <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;一个或两个值不在集合中&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> rootKeyA <span class="token operator">===</span> rootKeyB<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2>`,12),k={href:"https://en.wikipedia.org/wiki/Disjoint-set_data_structure",target:"_blank",rel:"noopener noreferrer"},r={href:"https://www.youtube.com/watch?v=wU6udHRIkcc&index=14&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8",target:"_blank",rel:"noopener noreferrer"};function d(m,v){const s=e("ExternalLinkIcon");return o(),c("div",null,[u,n("ul",null,[n("li",null,[n("a",k,[a("维基百科"),t(s)])]),n("li",null,[n("a",r,[a("Abdul Bari 在 YouTube 上的教程"),t(s)])])])])}const y=p(l,[["render",d],["__file","index.html.vue"]]);export{y as default};

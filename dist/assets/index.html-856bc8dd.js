import{_ as p,r as e,o,c,a as n,b as a,e as t,d as l}from"./app-2477bd15.js";const i="/assets/graph-03e0a08e.jpeg",u={},k=l('<h1 id="图" tabindex="-1"><a class="header-anchor" href="#图" aria-hidden="true">#</a> 图</h1><p>在计算机科学中, <strong>图(graph)</strong> 是一种抽象数据类型, 旨在实现数学中的无向图和有向图概念，特别是图论领域。</p><p>一个图数据结构是一个(由有限个或者可变数量的)顶点/节点/点和边构成的有限集。</p><p>如果顶点对之间是无序的,称为无序图,否则称为有序图;</p><p>如果顶点对之间的边是没有方向的,称为无向图,否则称为有向图;</p><p>如果顶点对之间的边是有权重的,该图可称为加权图。</p><figure><img src="'+i+`" alt="Graph" tabindex="0" loading="lazy"><figcaption>Graph</figcaption></figure><h2 id="完整代码" tabindex="-1"><a class="header-anchor" href="#完整代码" aria-hidden="true">#</a> 完整代码</h2><h3 id="graph" tabindex="-1"><a class="header-anchor" href="#graph" aria-hidden="true">#</a> Graph</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Graph</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span> <span class="token parameter">isDirected</span>
   */</span>
  <span class="token comment">// 构造函数，参数表示图是否是有向的</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">isDirected <span class="token operator">=</span> <span class="token boolean">false</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>vertices <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 顶点集</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>edges <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 边集</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>isDirected <span class="token operator">=</span> isDirected<span class="token punctuation">;</span> <span class="token comment">// 是否为有向图</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>GraphVertex<span class="token punctuation">}</span></span> <span class="token parameter">newVertex</span>
   * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>Graph<span class="token punctuation">}</span></span>
   */</span>
  <span class="token comment">// 添加顶点</span>
  <span class="token function">addVertex</span><span class="token punctuation">(</span><span class="token parameter">newVertex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>vertices<span class="token punctuation">[</span>newVertex<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> newVertex<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">vertexKey</span>
   * <span class="token keyword">@returns</span> GraphVertex
   */</span>
  <span class="token comment">// 根据键值获取顶点</span>
  <span class="token function">getVertexByKey</span><span class="token punctuation">(</span><span class="token parameter">vertexKey</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>vertices<span class="token punctuation">[</span>vertexKey<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>GraphVertex<span class="token punctuation">}</span></span> <span class="token parameter">vertex</span>
   * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>GraphVertex<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
   */</span>
  <span class="token comment">// 获取顶点的邻居</span>
  <span class="token function">getNeighbors</span><span class="token punctuation">(</span><span class="token parameter">vertex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> vertex<span class="token punctuation">.</span><span class="token function">getNeighbors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>GraphVertex<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
   */</span>
  <span class="token comment">// 获取所有的顶点</span>
  <span class="token function">getAllVertices</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>vertices<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>GraphEdge<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
   */</span>
  <span class="token comment">// 获取所有的边</span>
  <span class="token function">getAllEdges</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>edges<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>GraphEdge<span class="token punctuation">}</span></span> <span class="token parameter">edge</span>
   * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>Graph<span class="token punctuation">}</span></span>
   */</span>
  <span class="token comment">// 添加边</span>
  <span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token parameter">edge</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 尝试查找起始和结束顶点</span>
    <span class="token keyword">let</span> startVertex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getVertexByKey</span><span class="token punctuation">(</span>edge<span class="token punctuation">.</span>startVertex<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> endVertex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getVertexByKey</span><span class="token punctuation">(</span>edge<span class="token punctuation">.</span>endVertex<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 如果起始顶点未插入，插入起始顶点</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>startVertex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addVertex</span><span class="token punctuation">(</span>edge<span class="token punctuation">.</span>startVertex<span class="token punctuation">)</span><span class="token punctuation">;</span>
      startVertex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getVertexByKey</span><span class="token punctuation">(</span>edge<span class="token punctuation">.</span>startVertex<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 如果结束顶点未插入，插入结束顶点</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>endVertex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addVertex</span><span class="token punctuation">(</span>edge<span class="token punctuation">.</span>endVertex<span class="token punctuation">)</span><span class="token punctuation">;</span>
      endVertex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getVertexByKey</span><span class="token punctuation">(</span>edge<span class="token punctuation">.</span>endVertex<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 检查边是否已经添加过</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>edges<span class="token punctuation">[</span>edge<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;边已经被添加过了&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>edges<span class="token punctuation">[</span>edge<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> edge<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 将边添加到顶点中</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>isDirected<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果图是有向的，那么只添加到起始顶点</span>
      startVertex<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span>edge<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果图是无向的，那么添加到两个顶点</span>
      startVertex<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span>edge<span class="token punctuation">)</span><span class="token punctuation">;</span>
      endVertex<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span>edge<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>GraphEdge<span class="token punctuation">}</span></span> <span class="token parameter">edge</span>
   */</span>
  <span class="token comment">// 删除边</span>
  <span class="token function">deleteEdge</span><span class="token punctuation">(</span><span class="token parameter">edge</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 从边集中删除边</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>edges<span class="token punctuation">[</span>edge<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">delete</span> <span class="token keyword">this</span><span class="token punctuation">.</span>edges<span class="token punctuation">[</span>edge<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;在图中找不到边&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 尝试查找起始和结束顶点，并从这些顶点中删除边</span>
    <span class="token keyword">const</span> startVertex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getVertexByKey</span><span class="token punctuation">(</span>edge<span class="token punctuation">.</span>startVertex<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> endVertex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getVertexByKey</span><span class="token punctuation">(</span>edge<span class="token punctuation">.</span>endVertex<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    startVertex<span class="token punctuation">.</span><span class="token function">deleteEdge</span><span class="token punctuation">(</span>edge<span class="token punctuation">)</span><span class="token punctuation">;</span>
    endVertex<span class="token punctuation">.</span><span class="token function">deleteEdge</span><span class="token punctuation">(</span>edge<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>GraphVertex<span class="token punctuation">}</span></span> <span class="token parameter">startVertex</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>GraphVertex<span class="token punctuation">}</span></span> <span class="token parameter">endVertex</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token punctuation">(</span>GraphEdge<span class="token operator">|</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
   */</span>
  <span class="token comment">// 查找边</span>
  <span class="token function">findEdge</span><span class="token punctuation">(</span><span class="token parameter">startVertex<span class="token punctuation">,</span> endVertex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> vertex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getVertexByKey</span><span class="token punctuation">(</span>startVertex<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>vertex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> vertex<span class="token punctuation">.</span><span class="token function">findEdge</span><span class="token punctuation">(</span>endVertex<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
   */</span>
  <span class="token comment">// 获取图的权重（所有边的权重之和）</span>
  <span class="token function">getWeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAllEdges</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">weight<span class="token punctuation">,</span> graphEdge</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> weight <span class="token operator">+</span> graphEdge<span class="token punctuation">.</span>weight<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 在有向图中反转所有的边
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Graph<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>GraphEdge<span class="token punctuation">}</span></span> <span class="token parameter">edge</span> */</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAllEdges</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">edge</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// 从图和顶点中删除直边</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">deleteEdge</span><span class="token punctuation">(</span>edge<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// 反转边</span>
      edge<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// 将反转的边重新添加到图和顶点中</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span>edge<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>object<span class="token punctuation">}</span></span>
   */</span>
  <span class="token comment">// 获取顶点索引</span>
  <span class="token function">getVerticesIndices</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> verticesIndices <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAllVertices</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">vertex<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      verticesIndices<span class="token punctuation">[</span>vertex<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> index<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> verticesIndices<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
   */</span>
  <span class="token comment">// 获取邻接矩阵</span>
  <span class="token function">getAdjacencyMatrix</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> vertices <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAllVertices</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> verticesIndices <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getVerticesIndices</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 使用Infinity初始化矩阵，表示尚未找到从一个顶点到另一个顶点的路径</span>
    <span class="token keyword">const</span> adjacencyMatrix <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span>vertices<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">Array</span><span class="token punctuation">(</span>vertices<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">Infinity</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 填充列</span>
    vertices<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">vertex<span class="token punctuation">,</span> vertexIndex</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      vertex<span class="token punctuation">.</span><span class="token function">getNeighbors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">neighbor</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> neighborIndex <span class="token operator">=</span> verticesIndices<span class="token punctuation">[</span>neighbor<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        adjacencyMatrix<span class="token punctuation">[</span>vertexIndex<span class="token punctuation">]</span><span class="token punctuation">[</span>neighborIndex<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">findEdge</span><span class="token punctuation">(</span>vertex<span class="token punctuation">,</span> neighbor<span class="token punctuation">)</span><span class="token punctuation">.</span>weight<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> adjacencyMatrix<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
   */</span>
  <span class="token comment">// 将图转换为字符串</span>
  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>vertices<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="graphedge" tabindex="-1"><a class="header-anchor" href="#graphedge" aria-hidden="true">#</a> GraphEdge</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">GraphEdge</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>GraphVertex<span class="token punctuation">}</span></span> <span class="token parameter">startVertex</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>GraphVertex<span class="token punctuation">}</span></span> <span class="token parameter">endVertex</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token optional-parameter"><span class="token punctuation">[</span><span class="token parameter">weight</span><span class="token punctuation">=</span><span class="token code language-javascript"><span class="token number">1</span></span><span class="token punctuation">]</span></span>
   */</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">startVertex<span class="token punctuation">,</span> endVertex<span class="token punctuation">,</span> weight <span class="token operator">=</span> <span class="token number">0</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>startVertex <span class="token operator">=</span> startVertex<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>endVertex <span class="token operator">=</span> endVertex<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>weight <span class="token operator">=</span> weight<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> startVertexKey <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>startVertex<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> endVertexKey <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>endVertex<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>startVertexKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>endVertexKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>GraphEdge<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> tmp <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>startVertex<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>startVertex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>endVertex<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>endVertex <span class="token operator">=</span> tmp<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="linkedlistnode" tabindex="-1"><a class="header-anchor" href="#linkedlistnode" aria-hidden="true">#</a> LinkedListNode</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">LinkedListNode</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> next <span class="token operator">=</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> callback <span class="token operator">?</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="comparator" tabindex="-1"><a class="header-anchor" href="#comparator" aria-hidden="true">#</a> Comparator</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Comparator</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 构造函数.
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">function</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token operator">*</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token optional-parameter"><span class="token punctuation">[</span><span class="token parameter">compareFunction</span><span class="token punctuation">]</span></span> - 可以是自定义的比较函数，该函数可以比较自定义的对象.
   */</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">compareFunction</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>compare <span class="token operator">=</span> compareFunction <span class="token operator">||</span> Comparator<span class="token punctuation">.</span>defaultCompareFunction<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 默认比较函数。假设 &quot;a&quot; 和 &quot;b&quot; 是字符串或数字。
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token punctuation">(</span>string<span class="token operator">|</span>number<span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token parameter">a</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token punctuation">(</span>string<span class="token operator">|</span>number<span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token parameter">b</span>
   * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
   */</span>
  <span class="token keyword">static</span> <span class="token function">defaultCompareFunction</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">===</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> a <span class="token operator">&lt;</span> b <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 检查两个变量是否相等。
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">a</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">b</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">equal</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 检查变量 &quot;a&quot; 是否小于 &quot;b&quot;。
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">a</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">b</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">lessThan</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 检查变量 &quot;a&quot; 是否大于 &quot;b&quot;。
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">a</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">b</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">greaterThan</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 检查变量 &quot;a&quot; 是否小于或等于 &quot;b&quot;。
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">a</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">b</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">lessThanOrEqual</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">lessThan</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 检查变量 &quot;a&quot; 是否大于或等于 &quot;b&quot;。
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">a</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">b</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">greaterThanOrEqual</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">greaterThan</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 反转比较顺序。
   */</span>
  <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> compareOriginal <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>compare<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">compare</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">compareOriginal</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="linkedlist" tabindex="-1"><a class="header-anchor" href="#linkedlist" aria-hidden="true">#</a> LinkedList</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">LinkedList</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token optional-parameter"><span class="token punctuation">[</span><span class="token parameter">comparatorFunction</span><span class="token punctuation">]</span></span>
   */</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">comparatorFunction</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** <span class="token keyword">@var</span> LinkedListNode */</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** <span class="token keyword">@var</span> LinkedListNode */</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>compare <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Comparator</span><span class="token punctuation">(</span>comparatorFunction<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">value</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>LinkedList<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">prepend</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Make new node to be a head.</span>
    <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedListNode</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> newNode<span class="token punctuation">;</span>

    <span class="token comment">// If there is no tail yet let&#39;s make new node a tail.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">value</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>LinkedList<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">append</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedListNode</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// If there is no head yet let&#39;s make new node a head.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> newNode<span class="token punctuation">;</span>

      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Attach new node to the end of linked list.</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> newNode<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">value</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">index</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>LinkedList<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> rawIndex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> index <span class="token operator">=</span> rawIndex <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> rawIndex<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">prepend</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
      <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedListNode</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">===</span> index<span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
        currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        count <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        currentNode<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">value</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>LinkedListNode<span class="token punctuation">}</span></span>
   */</span>
  <span class="token keyword">delete</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> deletedNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token comment">// If the head must be deleted then make next node that is different</span>
    <span class="token comment">// from the head to be a new head.</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>compare<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>value<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      deletedNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>currentNode <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// If next node must be deleted then make next node to be a next next one.</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>compare<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>next<span class="token punctuation">.</span>value<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          deletedNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
          currentNode<span class="token punctuation">.</span>next <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Check if tail must be deleted.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>compare<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">.</span>value<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> currentNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> deletedNode<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">findParams</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">findParams<span class="token punctuation">.</span>value</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">function</span><span class="token punctuation">}</span></span> <span class="token optional-parameter"><span class="token punctuation">[</span><span class="token parameter">findParams<span class="token punctuation">.</span>callback</span><span class="token punctuation">]</span></span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>LinkedListNode<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> value <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> callback <span class="token operator">=</span> <span class="token keyword">undefined</span> <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// If callback is specified then try to find node by callback.</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>callback <span class="token operator">&amp;&amp;</span> <span class="token function">callback</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> currentNode<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// If value is specified then try to compare by value..</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>compare<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>value<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> currentNode<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>LinkedListNode<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">deleteTail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> deletedTail <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// There is only one node in linked list.</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

      <span class="token keyword">return</span> deletedTail<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// If there are many nodes in linked list...</span>

    <span class="token comment">// Rewind to the last node and delete &quot;next&quot; link for the node before the last one.</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>currentNode<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        currentNode<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> currentNode<span class="token punctuation">;</span>

    <span class="token keyword">return</span> deletedTail<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>LinkedListNode<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">deleteHead</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> deletedHead <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> deletedHead<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">values</span> - Array of values that need to be converted to linked list.
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>LinkedList<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">fromArray</span><span class="token punctuation">(</span><span class="token parameter">values</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    values<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>LinkedListNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> nodes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      nodes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> nodes<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">function</span><span class="token punctuation">}</span></span> <span class="token optional-parameter"><span class="token punctuation">[</span><span class="token parameter">callback</span><span class="token punctuation">]</span></span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> node<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * Reverse a linked list.
   * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>LinkedList<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> currNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">let</span> prevNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> nextNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>currNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Store next node.</span>
      nextNode <span class="token operator">=</span> currNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>

      <span class="token comment">// Change next node of the current node so it would link to previous node.</span>
      currNode<span class="token punctuation">.</span>next <span class="token operator">=</span> prevNode<span class="token punctuation">;</span>

      <span class="token comment">// Move prevNode and currNode nodes one step forward.</span>
      prevNode <span class="token operator">=</span> currNode<span class="token punctuation">;</span>
      currNode <span class="token operator">=</span> nextNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Reset head and tail.</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> prevNode<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="graphvertex" tabindex="-1"><a class="header-anchor" href="#graphvertex" aria-hidden="true">#</a> GraphVertex</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">GraphVertex</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">value</span>
   */</span>
  <span class="token comment">// 构造函数，参数为顶点的值</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;图顶点必须有一个值&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>GraphEdge<span class="token punctuation">}</span></span> <span class="token parameter">edgeA</span>
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>GraphEdge<span class="token punctuation">}</span></span> <span class="token parameter">edgeB</span>
     */</span>
    <span class="token comment">// 边的比较函数</span>
    <span class="token keyword">const</span> <span class="token function-variable function">edgeComparator</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">edgeA<span class="token punctuation">,</span> edgeB</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>edgeA<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> edgeB<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">return</span> edgeA<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> edgeB<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 通常你会储存一个字符串作为顶点的名称，但实际上可以储存任何类型的对象</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>edges <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token punctuation">(</span>edgeComparator<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>GraphEdge<span class="token punctuation">}</span></span> <span class="token parameter">edge</span>
   * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>GraphVertex<span class="token punctuation">}</span></span>
   */</span>
  <span class="token comment">// 添加边</span>
  <span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token parameter">edge</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>edges<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>edge<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>GraphEdge<span class="token punctuation">}</span></span> <span class="token parameter">edge</span>
   */</span>
  <span class="token comment">// 删除边</span>
  <span class="token function">deleteEdge</span><span class="token punctuation">(</span><span class="token parameter">edge</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>edges<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>edge<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>GraphVertex<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
   */</span>
  <span class="token comment">// 获取邻居顶点</span>
  <span class="token function">getNeighbors</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> edges <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>edges<span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>LinkedListNode<span class="token punctuation">}</span></span> <span class="token parameter">node</span> */</span>
    <span class="token comment">// 邻居转换器</span>
    <span class="token keyword">const</span> <span class="token function-variable function">neighborsConverter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> node<span class="token punctuation">.</span>value<span class="token punctuation">.</span>startVertex <span class="token operator">===</span> <span class="token keyword">this</span> <span class="token operator">?</span> node<span class="token punctuation">.</span>value<span class="token punctuation">.</span>endVertex <span class="token operator">:</span> node<span class="token punctuation">.</span>value<span class="token punctuation">.</span>startVertex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 返回起始或者结束顶点</span>
    <span class="token comment">// 对于无向图，当前顶点可能是结束顶点</span>
    <span class="token keyword">return</span> edges<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>neighborsConverter<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>GraphEdge<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
   */</span>
  <span class="token comment">// 获取边</span>
  <span class="token function">getEdges</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>edges<span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">linkedListNode</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> linkedListNode<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
   */</span>
  <span class="token comment">// 获取顶点的度（相连的边的数量）</span>
  <span class="token function">getDegree</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>edges<span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>GraphEdge<span class="token punctuation">}</span></span> <span class="token parameter">requiredEdge</span>
   * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
   */</span>
  <span class="token comment">// 检查顶点是否有指定的边</span>
  <span class="token function">hasEdge</span><span class="token punctuation">(</span><span class="token parameter">requiredEdge</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> edgeNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>edges<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">edge</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> edge <span class="token operator">===</span> requiredEdge<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token operator">!</span><span class="token operator">!</span>edgeNode<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>GraphVertex<span class="token punctuation">}</span></span> <span class="token parameter">vertex</span>
   * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
   */</span>
  <span class="token comment">// 检查顶点是否有指定的邻居</span>
  <span class="token function">hasNeighbor</span><span class="token punctuation">(</span><span class="token parameter">vertex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> vertexNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>edges<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">edge</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> edge<span class="token punctuation">.</span>startVertex <span class="token operator">===</span> vertex <span class="token operator">||</span> edge<span class="token punctuation">.</span>endVertex <span class="token operator">===</span> vertex<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token operator">!</span><span class="token operator">!</span>vertexNode<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>GraphVertex<span class="token punctuation">}</span></span> <span class="token parameter">vertex</span>
   * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token punctuation">(</span>GraphEdge<span class="token operator">|</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
   */</span>
  <span class="token comment">// 查找与指定顶点相连的边</span>
  <span class="token function">findEdge</span><span class="token punctuation">(</span><span class="token parameter">vertex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">edgeFinder</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">edge</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> edge<span class="token punctuation">.</span>startVertex <span class="token operator">===</span> vertex <span class="token operator">||</span> edge<span class="token punctuation">.</span>endVertex <span class="token operator">===</span> vertex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> edge <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>edges<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">callback</span><span class="token operator">:</span> edgeFinder <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> edge <span class="token operator">?</span> edge<span class="token punctuation">.</span>value <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
   */</span>
  <span class="token comment">// 获取顶点的键（即顶点的值）</span>
  <span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>GraphVertex<span class="token punctuation">}</span></span>
   */</span>
  <span class="token comment">// 删除所有的边</span>
  <span class="token function">deleteAllEdges</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getEdges</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">edge</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">deleteEdge</span><span class="token punctuation">(</span>edge<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">function</span><span class="token punctuation">}</span></span> <span class="token optional-parameter"><span class="token punctuation">[</span><span class="token parameter">callback</span><span class="token punctuation">]</span></span>
   * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
   */</span>
  <span class="token comment">// 将顶点转换为字符串</span>
  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> callback <span class="token operator">?</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,21),r={href:"https://en.wikipedia.org/wiki/Graph_(abstract_data_type)",target:"_blank",rel:"noopener noreferrer"},d={href:"https://www.youtube.com/watch?v=gXgEDyodOJU&index=9&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.youtube.com/watch?v=k1wraWzqtvQ&index=10&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8",target:"_blank",rel:"noopener noreferrer"};function m(b,y){const s=e("ExternalLinkIcon");return o(),c("div",null,[k,n("ul",null,[n("li",null,[n("a",r,[a("Wikipedia"),t(s)])]),n("li",null,[n("a",d,[a("Introduction to Graphs on YouTube"),t(s)])]),n("li",null,[n("a",v,[a("Graphs representation on YouTube"),t(s)])])])])}const h=p(u,[["render",m],["__file","index.html.vue"]]);export{h as default};

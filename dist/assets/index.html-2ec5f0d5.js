import{_ as t,r as p,o,c,a as n,b as a,d as e,e as l}from"./app-0301958d.js";const i={},u=l(`<h1 id="深度优先搜索-dfs" tabindex="-1"><a class="header-anchor" href="#深度优先搜索-dfs" aria-hidden="true">#</a> 深度优先搜索（DFS）</h1><p>深度优先搜索（DFS）是一种用于遍历或搜索树或图数据结构的算法。它从根节点开始（在图的情况下选择一些任意节点作为根节点），沿着每条分支尽可能远地探索，直到无法继续为止，然后回溯。</p><figure><img src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Depth-First-Search.gif" alt="Algorithm Visualization" tabindex="0" loading="lazy"><figcaption>Algorithm Visualization</figcaption></figure><h2 id="完整实现" tabindex="-1"><a class="header-anchor" href="#完整实现" aria-hidden="true">#</a> 完整实现</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@typedef</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token class-name">TraversalCallbacks</span>
 *
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">function</span><span class="token punctuation">(</span>node<span class="token operator">:</span> BinaryTreeNode<span class="token punctuation">,</span> child<span class="token operator">:</span> BinaryTreeNode<span class="token punctuation">)</span><span class="token operator">:</span> boolean<span class="token punctuation">}</span></span> <span class="token parameter">allowTraversal</span>
 * - 确定 DFS 是否应该遍历从节点到其子节点。
 *
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">function</span><span class="token punctuation">(</span>node<span class="token operator">:</span> BinaryTreeNode<span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token parameter">enterNode</span> - 当 DFS 进入节点时调用的回调函数。
 *
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">function</span><span class="token punctuation">(</span>node<span class="token operator">:</span> BinaryTreeNode<span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token parameter">leaveNode</span> - 当 DFS 离开节点时调用的回调函数。
 */</span>

<span class="token doc-comment comment">/**
 * 使用默认回调函数扩展缺失的遍历回调函数。
 *
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TraversalCallbacks<span class="token punctuation">}</span></span> <span class="token optional-parameter"><span class="token punctuation">[</span><span class="token parameter">callbacks</span><span class="token punctuation">]</span></span> - 包含遍历回调函数的对象。
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>TraversalCallbacks<span class="token punctuation">}</span></span> - 使用默认回调函数扩展的遍历回调函数。
 */</span>
<span class="token keyword">function</span> <span class="token function">initCallbacks</span><span class="token punctuation">(</span><span class="token parameter">callbacks <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 初始化空的回调函数对象。</span>
  <span class="token keyword">const</span> initiatedCallbacks <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 在用户未提供真实的回调函数时，使用空的回调函数作为默认回调函数。</span>
  <span class="token keyword">const</span> <span class="token function-variable function">stubCallback</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// 默认情况下，如果用户未提供回调函数，则允许遍历每个节点。</span>
  <span class="token keyword">const</span> <span class="token function-variable function">defaultAllowTraversalCallback</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

  <span class="token comment">// 将原始回调函数复制到我们的 initiatedCallbacks 对象中，或者使用默认回调函数代替。</span>
  initiatedCallbacks<span class="token punctuation">.</span>allowTraversal <span class="token operator">=</span> callbacks<span class="token punctuation">.</span>allowTraversal <span class="token operator">||</span> defaultAllowTraversalCallback<span class="token punctuation">;</span>
  initiatedCallbacks<span class="token punctuation">.</span>enterNode <span class="token operator">=</span> callbacks<span class="token punctuation">.</span>enterNode <span class="token operator">||</span> stubCallback<span class="token punctuation">;</span>
  initiatedCallbacks<span class="token punctuation">.</span>leaveNode <span class="token operator">=</span> callbacks<span class="token punctuation">.</span>leaveNode <span class="token operator">||</span> stubCallback<span class="token punctuation">;</span>

  <span class="token comment">// 返回处理后的回调函数列表。</span>
  <span class="token keyword">return</span> initiatedCallbacks<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 二叉树的递归深度优先搜索遍历。
 *
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>BinaryTreeNode<span class="token punctuation">}</span></span> <span class="token parameter">node</span> - 开始遍历的二叉树节点。
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TraversalCallbacks<span class="token punctuation">}</span></span> <span class="token parameter">callbacks</span> - 包含遍历回调函数的对象。
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">depthFirstSearchRecursive</span><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> callbacks</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 调用 &quot;enterNode&quot; 回调函数通知即将进入当前节点。</span>
  callbacks<span class="token punctuation">.</span><span class="token function">enterNode</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 仅在允许遍历左子节点的情况下遍历左侧分支。</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> callbacks<span class="token punctuation">.</span><span class="token function">allowTraversal</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">depthFirstSearchRecursive</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> callbacks<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 仅在允许遍历右子节点的情况下遍历右侧分支。</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right <span class="token operator">&amp;&amp;</span> callbacks<span class="token punctuation">.</span><span class="token function">allowTraversal</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">depthFirstSearchRecursive</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> callbacks<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 调用 &quot;leaveNode&quot; 回调函数通知当前节点及其子节点的遍历完成。</span>
  callbacks<span class="token punctuation">.</span><span class="token function">leaveNode</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 对根节点进行深度优先搜索遍历。
 * 在每一步遍历中调用 &quot;allowTraversal&quot;、&quot;enterNode&quot; 和 &quot;leaveNode&quot; 回调函数。
 * 有关回调函数对象的形状的详细信息，请参见 TraversalCallbacks 类型定义。
 *
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>BinaryTreeNode<span class="token punctuation">}</span></span> <span class="token parameter">rootNode</span> - 开始遍历的节点。
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TraversalCallbacks<span class="token punctuation">}</span></span> <span class="token optional-parameter"><span class="token punctuation">[</span><span class="token parameter">callbacks</span><span class="token punctuation">]</span></span> - 遍历回调函数。
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">depthFirstSearch</span><span class="token punctuation">(</span><span class="token parameter">rootNode<span class="token punctuation">,</span> callbacks</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 如果用户未提供某些回调函数，则使用默认回调函数替代。</span>
  <span class="token keyword">const</span> processedCallbacks <span class="token operator">=</span> <span class="token function">initCallbacks</span><span class="token punctuation">(</span>callbacks<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 现在，当我们拥有所有必要的回调函数时，可以进行递归遍历。</span>
  <span class="token function">depthFirstSearchRecursive</span><span class="token punctuation">(</span>rootNode<span class="token punctuation">,</span> processedCallbacks<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,6),r={href:"https://en.wikipedia.org/wiki/Depth-first_search",target:"_blank",rel:"noopener noreferrer"},d={href:"https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.geeksforgeeks.org/bfs-vs-dfs-binary-tree/",target:"_blank",rel:"noopener noreferrer"};function v(m,b){const s=p("ExternalLinkIcon");return o(),c("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[a("Wikipedia"),e(s)])]),n("li",null,[n("a",d,[a("Tree Traversals (Inorder, Preorder and Postorder)"),e(s)])]),n("li",null,[n("a",k,[a("BFS vs DFS"),e(s)])])])])}const h=t(i,[["render",v],["__file","index.html.vue"]]);export{h as default};

import{_ as t,r as p,o,c,a as n,b as a,e,d as l}from"./app-d7df62a4.js";const i={},u=l(`<h1 id="广度优先搜索-bfs" tabindex="-1"><a class="header-anchor" href="#广度优先搜索-bfs" aria-hidden="true">#</a> 广度优先搜索（BFS）</h1><p>广度优先搜索（BFS）是一种用于遍历或搜索树或图数据结构的算法。它从树根（或图中的任意节点，有时称为“搜索键”）开始，首先探索邻居节点，然后再移动到下一层的邻居节点。</p><figure><img src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Breadth-First-Search-Algorithm.gif" alt="Algorithm Visualization" tabindex="0" loading="lazy"><figcaption>Algorithm Visualization</figcaption></figure><h2 id="伪代码" tabindex="-1"><a class="header-anchor" href="#伪代码" aria-hidden="true">#</a> 伪代码</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>BFS(root)
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="完整实现" tabindex="-1"><a class="header-anchor" href="#完整实现" aria-hidden="true">#</a> 完整实现</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Queue <span class="token keyword">from</span> <span class="token string">&#39;../../../data-structures/queue/Queue&#39;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@typedef</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token class-name">Callbacks</span>
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">function</span><span class="token punctuation">(</span>node<span class="token operator">:</span> BinaryTreeNode<span class="token punctuation">,</span> child<span class="token operator">:</span> BinaryTreeNode<span class="token punctuation">)</span><span class="token operator">:</span> boolean<span class="token punctuation">}</span></span> <span class="token parameter">allowTraversal</span> -
 *   Determines whether BFS should traverse from the node to its child.
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">function</span><span class="token punctuation">(</span>node<span class="token operator">:</span> BinaryTreeNode<span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token parameter">enterNode</span> - Called when BFS enters the node.
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">function</span><span class="token punctuation">(</span>node<span class="token operator">:</span> BinaryTreeNode<span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token parameter">leaveNode</span> - Called when BFS leaves the node.
 */</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Callbacks<span class="token punctuation">}</span></span> <span class="token optional-parameter"><span class="token punctuation">[</span><span class="token parameter">callbacks</span><span class="token punctuation">]</span></span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>Callbacks<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">initCallbacks</span><span class="token punctuation">(</span><span class="token parameter">callbacks <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> initiatedCallback <span class="token operator">=</span> callbacks<span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">stubCallback</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">defaultAllowTraversal</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

  initiatedCallback<span class="token punctuation">.</span>allowTraversal <span class="token operator">=</span> callbacks<span class="token punctuation">.</span>allowTraversal <span class="token operator">||</span> defaultAllowTraversal<span class="token punctuation">;</span>
  initiatedCallback<span class="token punctuation">.</span>enterNode <span class="token operator">=</span> callbacks<span class="token punctuation">.</span>enterNode <span class="token operator">||</span> stubCallback<span class="token punctuation">;</span>
  initiatedCallback<span class="token punctuation">.</span>leaveNode <span class="token operator">=</span> callbacks<span class="token punctuation">.</span>leaveNode <span class="token operator">||</span> stubCallback<span class="token punctuation">;</span>

  <span class="token keyword">return</span> initiatedCallback<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>BinaryTreeNode<span class="token punctuation">}</span></span> <span class="token parameter">rootNode</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Callbacks<span class="token punctuation">}</span></span> <span class="token optional-parameter"><span class="token punctuation">[</span><span class="token parameter">originalCallbacks</span><span class="token punctuation">]</span></span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">breadthFirstSearch</span><span class="token punctuation">(</span><span class="token parameter">rootNode<span class="token punctuation">,</span> originalCallbacks</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> callbacks <span class="token operator">=</span> <span class="token function">initCallbacks</span><span class="token punctuation">(</span>originalCallbacks<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> nodeQueue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Do initial queue setup.</span>
  nodeQueue<span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span>rootNode<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>nodeQueue<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> currentNode <span class="token operator">=</span> nodeQueue<span class="token punctuation">.</span><span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    callbacks<span class="token punctuation">.</span><span class="token function">enterNode</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Add all children to the queue for future traversals.</span>

    <span class="token comment">// Traverse left branch.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> callbacks<span class="token punctuation">.</span><span class="token function">allowTraversal</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">,</span> currentNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      nodeQueue<span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Traverse right branch.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>right <span class="token operator">&amp;&amp;</span> callbacks<span class="token punctuation">.</span><span class="token function">allowTraversal</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">,</span> currentNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      nodeQueue<span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    callbacks<span class="token punctuation">.</span><span class="token function">leaveNode</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,8),r={href:"https://en.wikipedia.org/wiki/Breadth-first_search",target:"_blank",rel:"noopener noreferrer"},d={href:"https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.geeksforgeeks.org/bfs-vs-dfs-binary-tree/",target:"_blank",rel:"noopener noreferrer"};function v(m,b){const s=p("ExternalLinkIcon");return o(),c("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[a("Wikipedia"),e(s)])]),n("li",null,[n("a",d,[a("Tree Traversals (Inorder, Preorder and Postorder)"),e(s)])]),n("li",null,[n("a",k,[a("BFS vs DFS"),e(s)])])])])}const f=t(i,[["render",v],["__file","index.html.vue"]]);export{f as default};

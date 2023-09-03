import{_ as s,r as e,o as t,c,a as n,b as p,e as l,d as i}from"./app-2477bd15.js";const o={},r=i(`<h1 id="链表倒序遍历" tabindex="-1"><a class="header-anchor" href="#链表倒序遍历" aria-hidden="true">#</a> 链表倒序遍历</h1><p>我们的任务是倒序遍历给定的链表</p><p>比如下面的链表</p><figure><img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Singly-linked-list.svg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>遍历的顺序应该是</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>37 → 99 → 12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>因为我们每个节点只访问一次，时间复杂度应该是<code>O(n)</code></p><h2 id="完整代码" tabindex="-1"><a class="header-anchor" href="#完整代码" aria-hidden="true">#</a> 完整代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Traversal callback function.
 * <span class="token keyword">@callback</span> traversalCallback
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">nodeValue</span>
 */</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>LinkedListNode<span class="token punctuation">}</span></span> <span class="token parameter">node</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>traversalCallback<span class="token punctuation">}</span></span> <span class="token parameter">callback</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">reverseTraversalRecursive</span><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">reverseTraversalRecursive</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>next<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">callback</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>LinkedList<span class="token punctuation">}</span></span> <span class="token parameter">linkedList</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>traversalCallback<span class="token punctuation">}</span></span> <span class="token parameter">callback</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">reverseTraversal</span><span class="token punctuation">(</span><span class="token parameter">linkedList<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">reverseTraversalRecursive</span><span class="token punctuation">(</span>linkedList<span class="token punctuation">.</span>head<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,10),u={href:"https://zh.wikipedia.org/wiki/%E9%93%BE%E8%A1%A8",target:"_blank",rel:"noopener noreferrer"};function d(k,v){const a=e("ExternalLinkIcon");return t(),c("div",null,[r,n("ul",null,[n("li",null,[n("a",u,[p("Wikipedia"),l(a)])])])])}const b=s(o,[["render",d],["__file","index.html.vue"]]);export{b as default};

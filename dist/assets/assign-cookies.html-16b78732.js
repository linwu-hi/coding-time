import{_ as n,o as s,c as a,d as t}from"./app-2d6feb9f.js";const p={},e=t(`<h1 id="分发饼干" tabindex="-1"><a class="header-anchor" href="#分发饼干" aria-hidden="true">#</a> 分发饼干</h1><h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>给定两个数组 <code>g</code> 和 <code>s</code>，分别代表孩子的胃口和饼干的尺寸。每个孩子只能得到一块饼干，且只有饼干尺寸大于等于孩子胃口时，孩子才能满足。求解最多能满足几个孩子的需求。</p><h2 id="解题步骤" tabindex="-1"><a class="header-anchor" href="#解题步骤" aria-hidden="true">#</a> 解题步骤</h2><p>为了解决分发饼干的问题，我们可以使用贪心算法来解决。</p><ol><li>首先对孩子的胃口数组 <code>g</code> 和饼干的尺寸数组 <code>s</code> 进行排序，从小到大。</li><li>使用两个指针 <code>i</code> 和 <code>j</code> 分别指向孩子数组和饼干数组的起始位置。</li><li>遍历孩子数组和饼干数组，比较当前孩子的胃口和当前饼干的尺寸： <ul><li>如果当前饼干的尺寸能够满足当前孩子的胃口，将满足的孩子数量加一，并将两个指针都向后移动一位。</li><li>如果当前饼干的尺寸不能满足当前孩子的胃口，将饼干指针向后移动一位，尝试下一块饼干。</li></ul></li><li>遍历结束后，返回满足的孩子数量作为最终结果。</li></ol><p>下面是使用贪心算法解决分发饼干问题的算法框架：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">findContentChildren</span><span class="token punctuation">(</span><span class="token parameter">g<span class="token punctuation">,</span> s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  g<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
  s<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> g<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> g<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      count<span class="token operator">++</span><span class="token punctuation">;</span>
      i<span class="token operator">++</span><span class="token punctuation">;</span>
      j<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      j<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> count<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","assign-cookies.html.vue"]]);export{r as default};
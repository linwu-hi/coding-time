import{_ as n,o as s,c as a,d as t}from"./app-2d6feb9f.js";const e={},p=t(`<h1 id="划分字母区间" tabindex="-1"><a class="header-anchor" href="#划分字母区间" aria-hidden="true">#</a> 划分字母区间</h1><h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>给定一个字符串 <code>S</code>，将字符串划分为尽可能多的片段，使得每个字母最多出现在一个片段中。返回每个片段的长度列表。</p><h2 id="解题步骤" tabindex="-1"><a class="header-anchor" href="#解题步骤" aria-hidden="true">#</a> 解题步骤</h2><p>为了解决划分字母区间的问题，我们可以使用贪心算法来解决。贪心算法的思路是尽量选择包含较大字母范围的片段，以确保每个字母只出现在一个片段中。</p><p>我们按照以下步骤进行解题：</p><ol><li>创建一个字母表 <code>lastIndex</code> 来存储每个字母最后出现的索引。</li><li>遍历字符串 <code>S</code>，对于每个字母 <code>S[i]</code>，更新字母在 <code>lastIndex</code> 中的索引为 <code>i</code>。</li><li>初始化变量 <code>start</code> 和 <code>end</code>，表示当前片段的起始位置和结束位置，初始值均为 0。</li><li>遍历字符串 <code>S</code>，对于每个字母 <code>S[i]</code>： <ul><li>更新当前片段的结束位置 <code>end</code> 为 <code>Math.max(end, lastIndex[S[i]])</code>，确保当前片段包含了所有之前出现的字母。</li><li>如果当前位置 <code>i</code> 等于当前片段的结束位置 <code>end</code>，说明当前片段中的所有字母都在该片段中且没有出现在其他片段中，此时可以将当前片段加入结果列表，并更新下一个片段的起始位置 <code>start</code> 为 <code>end + 1</code>。</li></ul></li><li>返回结果列表，即每个片段的长度。</li></ol><p>以下是使用贪心算法解决划分字母区间问题的算法框架：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">partitionLabels</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">S</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> lastIndex <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token constant">S</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    lastIndex<span class="token punctuation">[</span><span class="token constant">S</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> end <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token constant">S</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    end <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>end<span class="token punctuation">,</span> lastIndex<span class="token punctuation">[</span><span class="token constant">S</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>end <span class="token operator">-</span> start <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      start <span class="token operator">=</span> end <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[p];function c(l,i){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","partition-labels.html.vue"]]);export{d as default};
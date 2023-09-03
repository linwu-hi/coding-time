import{_ as t,r as o,o as p,c as l,a as n,b as a,e,d as i}from"./app-d7df62a4.js";const c={},r=i(`<h1 id="插值查找" tabindex="-1"><a class="header-anchor" href="#插值查找" aria-hidden="true">#</a> 插值查找</h1><p><strong>插值查找</strong>（Interpolation Search）是一种用于在已按键（键值）排序的数组中搜索键的算法。</p><p>例如，我们有一个排序的数组 <code>arr[]</code>，其中包含 <code>n</code> 个均匀分布的值，并且我们需要编写一个函数在数组中搜索特定元素 <code>x</code>。</p><p><strong>线性搜索</strong>的时间复杂度为 <code>O(n)</code>，<strong>跳跃搜索</strong>的时间复杂度为 <code>O(√n)</code>，<strong>二分查找</strong>的时间复杂度为 <code>O(logn)</code>。</p><p><strong>插值查找</strong>是对二分查找的改进，适用于在已排序数组中元素的分布是“均匀”的情况。二分查找总是检查中间元素。而插值查找根据所搜索的键的值可能接近的位置进行搜索。例如，如果键的值更接近最后一个元素，则插值查找可能从末尾开始搜索。</p><p>要找到要搜索的位置，它使用以下公式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 这个公式的思想是，当要搜索的元素更接近 arr[hi] 时，返回较大的 pos 值。
// 当更接近 arr[lo] 时，返回较小的值。
pos = lo + ((x - arr[lo]) * (hi - lo) / (arr[hi] - arr[lo]))

arr[] - 需要进行搜索的数组
x - 要搜索的元素
lo - arr[] 中的起始索引
hi - arr[] 中的结束索引
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="复杂度" tabindex="-1"><a class="header-anchor" href="#复杂度" aria-hidden="true">#</a> 复杂度</h2><p><strong>时间复杂度</strong>：<code>O(log(log(n)))</code></p><h2 id="完整实现" tabindex="-1"><a class="header-anchor" href="#完整实现" aria-hidden="true">#</a> 完整实现</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Interpolation search implementation.
 *
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">sortedArray</span> - sorted array with uniformly distributed values
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">seekElement</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">interpolationSearch</span><span class="token punctuation">(</span><span class="token parameter">sortedArray<span class="token punctuation">,</span> seekElement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> leftIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> rightIndex <span class="token operator">=</span> sortedArray<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>leftIndex <span class="token operator">&lt;=</span> rightIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> rangeDelta <span class="token operator">=</span> sortedArray<span class="token punctuation">[</span>rightIndex<span class="token punctuation">]</span> <span class="token operator">-</span> sortedArray<span class="token punctuation">[</span>leftIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> indexDelta <span class="token operator">=</span> rightIndex <span class="token operator">-</span> leftIndex<span class="token punctuation">;</span>
    <span class="token keyword">const</span> valueDelta <span class="token operator">=</span> seekElement <span class="token operator">-</span> sortedArray<span class="token punctuation">[</span>leftIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// If valueDelta is less then zero it means that there is no seek element</span>
    <span class="token comment">// exists in array since the lowest element from the range is already higher</span>
    <span class="token comment">// then seek element.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>valueDelta <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// If range delta is zero then subarray contains all the same numbers</span>
    <span class="token comment">// and thus there is nothing to search for unless this range is all</span>
    <span class="token comment">// consists of seek number.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>rangeDelta<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// By doing this we&#39;re also avoiding division by zero while</span>
      <span class="token comment">// calculating the middleIndex later.</span>
      <span class="token keyword">return</span> sortedArray<span class="token punctuation">[</span>leftIndex<span class="token punctuation">]</span> <span class="token operator">===</span> seekElement <span class="token operator">?</span> leftIndex <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Do interpolation of the middle index.</span>
    <span class="token keyword">const</span> middleIndex <span class="token operator">=</span> leftIndex <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>valueDelta <span class="token operator">*</span> indexDelta<span class="token punctuation">)</span> <span class="token operator">/</span> rangeDelta<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// If we&#39;ve found the element just return its position.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>sortedArray<span class="token punctuation">[</span>middleIndex<span class="token punctuation">]</span> <span class="token operator">===</span> seekElement<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> middleIndex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Decide which half to choose for seeking next: left or right one.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>sortedArray<span class="token punctuation">[</span>middleIndex<span class="token punctuation">]</span> <span class="token operator">&lt;</span> seekElement<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Go to the right half of the array.</span>
      leftIndex <span class="token operator">=</span> middleIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// Go to the left half of the array.</span>
      rightIndex <span class="token operator">=</span> middleIndex <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,12),d={href:"https://www.geeksforgeeks.org/interpolation-search/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://en.wikipedia.org/wiki/Interpolation_search",target:"_blank",rel:"noopener noreferrer"};function k(m,v){const s=o("ExternalLinkIcon");return p(),l("div",null,[r,n("ul",null,[n("li",null,[n("a",d,[a("GeeksForGeeks"),e(s)])]),n("li",null,[n("a",u,[a("Wikipedia"),e(s)])])])])}const b=t(c,[["render",k],["__file","index.html.vue"]]);export{b as default};

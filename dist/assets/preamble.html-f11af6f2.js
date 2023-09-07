import{_ as n,o as s,c as a,d as e}from"./app-2d6feb9f.js";const p={},t=e(`<h1 id="滑动窗口算法" tabindex="-1"><a class="header-anchor" href="#滑动窗口算法" aria-hidden="true">#</a> 滑动窗口算法</h1><p>滑动窗口算法是一种常用的解决数组/列表问题的方法，特别是对于子字符串或子数组问题。这种技巧可以用来解决多种类型的问题，包括最长子串、最小子串、数组和等问题。</p><p>滑动窗口的基本思想是维护一个窗口，通常在数组或列表上滑动，用于观察该窗口内的元素。窗口的大小、滑动的方式（左滑、右滑或同时）取决于具体问题。</p><p>以下是一个滑动窗口技巧的通用算法框架：</p><ol><li><p>定义两个指针，一个用于表示窗口的左端，另一个表示窗口的右端。初始化都指向数组的开始位置。</p></li><li><p>将右指针向右移动，扩大窗口，直到窗口内的子数组满足问题的条件。</p></li><li><p>当窗口满足条件时，尝试将左指针向右移动，缩小窗口，同时保持窗口仍满足条件。</p></li><li><p>记录每次更新窗口时的有用信息。例如，如果你在寻找最长子串，那么应记录满足条件的最长长度。</p></li><li><p>将步骤2-4作为循环，直到右指针到达数组的末尾。</p></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">slidingWindow</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> handleWindow</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 向右扩展窗口</span>
        <span class="token keyword">let</span> window <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 处理当前窗口。这个函数应该根据具体问题来定义。</span>
        <span class="token comment">// 它需要接受当前窗口作为参数，并返回一个布尔值，表示窗口是否满足条件。</span>
        <span class="token keyword">let</span> windowSatisfiesConditions <span class="token operator">=</span> <span class="token function">handleWindow</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>windowSatisfiesConditions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 如果窗口满足条件，记录结果。</span>
            <span class="token comment">// 在你的特定实现中，这可能是更新最大/最小长度，和，等等。</span>

            <span class="token comment">// 然后，从左边开始收缩窗口。</span>
            left<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 如果窗口不满足条件，向右扩展窗口。</span>
            right<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),i=[t];function l(o,c){return s(),a("div",null,i)}const d=n(p,[["render",l],["__file","preamble.html.vue"]]);export{d as default};

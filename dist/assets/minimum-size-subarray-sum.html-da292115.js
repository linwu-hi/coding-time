import{_ as n,o as s,c as a,e}from"./app-0301958d.js";const t={},o=e(`<h1 id="最小长度子数组和" tabindex="-1"><a class="header-anchor" href="#最小长度子数组和" aria-hidden="true">#</a> 最小长度子数组和</h1><p>给定一个正整数数组<code>nums</code>和一个正整数<code>target</code>，找出数组中满足其和≥<code>target</code>的最短子数组的长度，如果不存在满足条件的子数组，返回0。</p><p><strong>示例：</strong></p><p>输入：nums = [2,3,1,2,4,3]，target = 7 输出：2 解释：子数组 [4,3] 的和为 7，且长度最小。</p><p>输入：nums = [1,4,4]，target = 4 输出：1 解释：子数组 [4] 的和为 4，且长度最小。</p><h2 id="题目分析与解题步骤" tabindex="-1"><a class="header-anchor" href="#题目分析与解题步骤" aria-hidden="true">#</a> <strong>题目分析与解题步骤：</strong></h2><p>这个问题可以使用滑动窗口算法来解决。我们可以维护一个窗口，不断地向右扩展窗口，直到窗口内的元素和≥<code>target</code>。然后，我们尝试将窗口的左边界向右收缩，以寻找更短的满足条件的子数组。</p><p>解题步骤如下：</p><ol><li><p>初始化两个指针<code>left</code>和<code>right</code>，都指向数组的开始位置。初始化窗口的和<code>windowSum</code>为0，最小子数组的长度<code>minLength</code>为无穷大。</p></li><li><p>不断向右移动<code>right</code>指针，扩大窗口。在每次移动时，将当前元素添加到窗口的和<code>windowSum</code>中。</p></li><li><p>当窗口的和≥<code>target</code>时，更新最小子数组的长度<code>minLength</code>为当前窗口的大小，并尝试将窗口的左边界向右收缩。</p></li><li><p>在收缩窗口时，从窗口的左边界开始，将左边界的元素从窗口的和<code>windowSum</code>中减去，并将左边界向右移动。</p></li><li><p>重复步骤2-4，直到<code>right</code>指针到达数组的末尾。</p></li><li><p>返回最小子数组的长度<code>minLength</code>。如果不存在满足条件的子数组，返回0。</p></li></ol><h2 id="javascript解题框架" tabindex="-1"><a class="header-anchor" href="#javascript解题框架" aria-hidden="true">#</a> <strong>JavaScript解题框架：</strong></h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">minSubArrayLen</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> minLength <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> windowSum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> right <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> right<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        windowSum <span class="token operator">+=</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span>windowSum <span class="token operator">&gt;=</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            minLength <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>minLength<span class="token punctuation">,</span> right <span class="token operator">-</span> left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            windowSum <span class="token operator">-=</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
            left<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> minLength <span class="token operator">===</span> <span class="token number">Infinity</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> minLength<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个框架中，我们使用<code>left</code>和<code>right</code>两个指针来构建窗口，<code>windowSum</code>用于记录窗口内元素的和，<code>minLength</code>记录最小子数组的长度。</p><p>我们不断向右移动<code>right</code>指针，将当前元素添加到窗口的和<code>windowSum</code>中。当<code>windowSum</code>≥<code>target</code>时，我们尝试收缩窗口，从窗口的左边界开始，将左边界的元素从<code>windowSum</code>中减去，并将左边界向右移动。在每次收缩窗口时，我们更新最小子数组的长度<code>minLength</code>为当前窗口的大小。</p><p>最后，返回<code>minLength</code>作为结果。如果不存在满足条件的子数组，返回0。</p>`,14),p=[o];function c(i,l){return s(),a("div",null,p)}const d=n(t,[["render",c],["__file","minimum-size-subarray-sum.html.vue"]]);export{d as default};
import{_ as n,o as s,c as a,d as e}from"./app-2d6feb9f.js";const t={},o=e(`<h1 id="判断字符串排列" tabindex="-1"><a class="header-anchor" href="#判断字符串排列" aria-hidden="true">#</a> 判断字符串排列</h1><p>给定两个字符串<code>s1</code>和<code>s2</code>，判断<code>s2</code>是否包含<code>s1</code>的任意排列。如果是，返回<code>true</code>；否则，返回<code>false</code>。</p><p><strong>示例：</strong></p><p>输入：s1 = &quot;ab&quot;，s2 = &quot;eidbaooo&quot; 输出：true 解释：s2 包含 s1 的一个排列（&quot;ba&quot;）。</p><p>输入：s1 = &quot;ab&quot;，s2 = &quot;eidboaoo&quot; 输出：false 解释：s2 并不包含 s1 的任意排列。</p><h2 id="题目分析与解题步骤" tabindex="-1"><a class="header-anchor" href="#题目分析与解题步骤" aria-hidden="true">#</a> <strong>题目分析与解题步骤：</strong></h2><p>这个问题可以使用滑动窗口算法来解决。我们可以维护一个窗口，大小等于<code>s1</code>的长度，在<code>s2</code>上滑动窗口，并比较窗口内的字符是否与<code>s1</code>中的字符构成相同的排列。</p><p>解题步骤如下：</p><ol><li><p>初始化两个计数器对象<code>counter1</code>和<code>counter2</code>，用于记录<code>s1</code>和当前窗口内字符的出现次数。</p></li><li><p>遍历字符串<code>s1</code>，并统计每个字符的出现次数，存储在<code>counter1</code>中。</p></li><li><p>初始化两个指针<code>left</code>和<code>right</code>，分别指向窗口的左右边界。</p></li><li><p>在<code>s2</code>上使用滑动窗口，开始从左向右滑动窗口。</p></li><li><p>在每次滑动窗口时，更新窗口内字符的出现次数<code>counter2</code>。同时，比较<code>counter1</code>和<code>counter2</code>是否相等，如果相等，表示当前窗口内的字符与<code>s1</code>中的字符构成相同的排列。</p></li><li><p>如果相等，返回<code>true</code>。</p></li><li><p>如果不相等，继续滑动窗口，即将窗口的左边界向右移动一位，并更新<code>counter2</code>。</p></li><li><p>重复步骤5-7，直到窗口滑动到<code>s2</code>的末尾。</p></li><li><p>如果未找到符合条件的排列，返回<code>false</code>。</p></li></ol><h2 id="javascript解题框架" tabindex="-1"><a class="header-anchor" href="#javascript解题框架" aria-hidden="true">#</a> <strong>JavaScript解题框架：</strong></h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">checkInclusion</span><span class="token punctuation">(</span><span class="token parameter">s1<span class="token punctuation">,</span> s2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> counter1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> counter2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 统计 s1 中字符的出现次数</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> s1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        counter1<span class="token punctuation">[</span>char<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>counter1<span class="token punctuation">[</span>char<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> s2<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 扩大窗口</span>
        <span class="token keyword">let</span> char <span class="token operator">=</span> s2<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
        counter2<span class="token punctuation">[</span>char<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>counter2<span class="token punctuation">[</span>char<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>

        <span class="token comment">// 检查窗口内字符的出现次数是否与 s1 相同</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">===</span> s1<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">compareCounters</span><span class="token punctuation">(</span>counter1<span class="token punctuation">,</span> counter2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 缩小窗口</span>
            char <span class="token operator">=</span> s2<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
            counter2<span class="token punctuation">[</span>char<span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>counter2<span class="token punctuation">[</span>char<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">delete</span> counter2<span class="token punctuation">[</span>char<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            left<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        right<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 比较两个计数器对象的键值对是否相等</span>
<span class="token keyword">function</span> <span class="token function">compareCounters</span><span class="token punctuation">(</span><span class="token parameter">counter1<span class="token punctuation">,</span> counter2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> counter1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>counter1<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">!==</span> counter2<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个框架中，我们使用了两个计数器对象<code>counter1</code>和<code>counter2</code>，分别用于统计<code>s1</code>和窗口内字符的出现次数。</p><p>我们首先遍历<code>s1</code>，统计每个字符的出现次数，存储在<code>counter1</code>中。然后，使用滑动窗口在<code>s2</code>上进行匹配。在每次滑动窗口时，我们将当前字符的出现次数添加到<code>counter2</code>中，并与<code>counter1</code>进行比较。如果两个计数器对象的键值对相等，则表示当前窗口内的字符与<code>s1</code>中的字符构成相同的排列。</p><p>最后，如果找到符合条件的排列，返回<code>true</code>；否则，返回<code>false</code>。</p>`,14),p=[o];function c(l,i){return s(),a("div",null,p)}const r=n(t,[["render",c],["__file","permutation-in-string.html.vue"]]);export{r as default};
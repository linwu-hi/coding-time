import{_ as n,o as s,c as a,e}from"./app-0301958d.js";const p={},t=e(`<h1 id="滑动窗口最大值" tabindex="-1"><a class="header-anchor" href="#滑动窗口最大值" aria-hidden="true">#</a> 滑动窗口最大值</h1><p>给定一个整数数组<code>nums</code>和一个整数<code>k</code>，请找出所有滑动窗口大小为<code>k</code>的子数组中的最大值。</p><h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> <strong>题目描述：</strong></h2><p>给定一个整数数组<code>nums</code>和一个整数<code>k</code>，请你找出所有滑动窗口大小为<code>k</code>的子数组中的最大值。滑动窗口是一个固定大小的窗口，它通过在数组上滑动，每次滑动一个位置，来扫描数组中的元素。你需要返回每个滑动窗口中的最大值。</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> <strong>示例：</strong></h2><p>输入：nums = [1,3,-1,-3,5,3,6,7]，k = 3 输出：[3,3,5,5,6,7] 解释：滑动窗口的位置从左到右分别为：[1,3,-1]，[3,-1,-3]，[-1,-3,5]，[-3,5,3]，[5,3,6]，[3,6,7]。每个窗口中的最大值分别为3，3，5，5，6，7。</p><p>输入：nums = [1], k = 1 输出：[1]</p><h2 id="解题步骤" tabindex="-1"><a class="header-anchor" href="#解题步骤" aria-hidden="true">#</a> <strong>解题步骤：</strong></h2><p>这个问题可以使用滑动窗口算法来解决。我们可以维护一个双端队列，队列中存储的是窗口内元素的索引。通过比较窗口内元素的值，我们可以找到每个窗口的最大值。</p><p>解题步骤如下：</p><ol><li><p>创建一个双端队列<code>deque</code>，用于存储窗口内元素的索引。</p></li><li><p>初始化结果数组<code>result</code>为空数组，用于存储每个滑动窗口的最大值。</p></li><li><p>初始化指针<code>left</code>和<code>right</code>，分别指向滑动窗口的左右边界。</p></li><li><p>遍历整个数组<code>nums</code>，并执行以下操作：</p><ul><li><p>在每次遍历之前，检查队列的头部元素是否已经超出了当前窗口的范围，如果超出，则将其从队列中删除。</p></li><li><p>检查当前遍历到的元素<code>nums[i]</code>与队列尾部元素所对应的元素<code>nums[deque[rear]]</code>的大小关系。如果<code>nums[i]</code>大于等于<code>nums[deque[rear]]</code>，则可以确定<code>nums[deque[rear]]</code>不会是任何窗口的最大值，因此将其从队列尾部删除，直到队列为空或者找到一个元素大于<code>nums[i]</code>。</p></li><li><p>将当前元素的索引<code>i</code>添加到队列的尾部。</p></li><li><p>如果窗口的起始位置（<code>i-k+1</code>）大于等于0，则将队列的头部元素<code>nums[deque[front]]</code>添加到结果数组<code>result</code>中，表示当前窗口的最大值。</p></li></ul></li><li><p>返回结果数组<code>result</code>。</p></li></ol><p><strong>JavaScript解题框架：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">maxSlidingWindow</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> deque <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 双端队列</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 结果数组</span>

    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 检查队列的头部元素是否已经超出了当前窗口的范围</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>deque<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> deque<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;=</span> right <span class="token operator">-</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            deque<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 检查当前元素与队列尾部元素的大小关系</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>deque<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> nums<span class="token punctuation">[</span>deque<span class="token punctuation">[</span>deque<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            deque<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 将当前元素的索引添加到队列的尾部</span>
        deque<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 如果窗口的起始位置大于等于0，则将队列的头部元素添加到结果数组中</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">&gt;=</span> k <span class="token operator">-</span> <span class="token number">1</span>

<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>deque<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        right<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个框架中，我们使用一个双端队列<code>deque</code>来存储窗口内元素的索引。我们还创建了一个结果数组<code>result</code>用于存储每个滑动窗口的最大值。</p><p>我们使用<code>left</code>和<code>right</code>两个指针来构建滑动窗口。在每次滑动窗口时，我们先检查队列的头部元素是否已经超出了当前窗口的范围，并进行相应的删除操作。然后，我们检查当前遍历到的元素与队列尾部元素的大小关系，进行元素的删除操作，直到队列为空或者找到一个元素大于当前元素。接着，将当前元素的索引添加到队列的尾部。如果窗口的起始位置大于等于0，则将队列的头部元素添加到结果数组中，表示当前窗口的最大值。</p>`,15),o=[t];function c(i,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","sliding-window-maximum.html.vue"]]);export{d as default};
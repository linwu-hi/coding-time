import{_ as n,o as s,c as a,d as t}from"./app-4ff2b8c3.js";const e={},p=t(`<h1 id="dart的异步编程" tabindex="-1"><a class="header-anchor" href="#dart的异步编程" aria-hidden="true">#</a> Dart的异步编程</h1><p>在 Dart 中，我们使用 <code>Future</code> 和 <code>async</code>/<code>await</code> 来进行异步编程。当你调用一个异步函数时，它将立即返回一个 <code>Future</code> 对象。当异步操作完成时，<code>Future</code> 将被“完成”或“解析”。</p><h2 id="使用-future" tabindex="-1"><a class="header-anchor" href="#使用-future" aria-hidden="true">#</a> 使用 Future</h2><p>Future 是 Dart 中用于表示异步操作的对象。当你调用一个异步函数时，它会立即返回一个 Future 对象，表示这个异步操作的结果。</p><p>Future 对象有三种状态：</p><p>未完成：异步操作还没有完成。 完成（resolved）：异步操作成功完成，并返回一个值。 错误（rejected）：异步操作失败，并返回一个错误。</p><blockquote><p>如果你了解Javascript中的Promise，那么就能非常简单掌握Future了</p></blockquote><p>一个简单的 <code>Future</code> 示例如下：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">fetchUserOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 模拟网络延迟</span>
  <span class="token keyword">return</span> <span class="token class-name">Future</span><span class="token punctuation">.</span><span class="token function">delayed</span><span class="token punctuation">(</span><span class="token class-name">Duration</span><span class="token punctuation">(</span>seconds<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string-literal"><span class="token string">&#39;Large Latte&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Fetching user order...&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">fetchUserOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>order<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Your order is: </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">order</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catchError</span><span class="token punctuation">(</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">print</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，<code>fetchUserOrder</code> 是一个异步函数，它使用 <code>Future.delayed</code> 来模拟网络延迟。当调用 <code>fetchUserOrder</code> 时，它立即返回一个 <code>Future&lt;String&gt;</code> 对象。然后我们使用 <code>then</code> 和 <code>catchError</code> 来处理 <code>Future</code> 的成功和错误结果。</p><h2 id="使用-async-await" tabindex="-1"><a class="header-anchor" href="#使用-async-await" aria-hidden="true">#</a> 使用 async/await</h2><p>你也可以使用 <code>async</code>/<code>await</code> 关键字来更简洁地处理异步操作。一个使用 <code>async</code>/<code>await</code> 的示例如下：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">fetchUserOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token class-name">Future</span><span class="token punctuation">.</span><span class="token function">delayed</span><span class="token punctuation">(</span><span class="token class-name">Duration</span><span class="token punctuation">(</span>seconds<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string-literal"><span class="token string">&#39;Large Latte&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">&gt;</span></span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Fetching user order...&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> order <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchUserOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Your order is: </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">order</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们使用 <code>async</code> 关键字来标记 <code>main</code> 函数是一个异步函数。然后我们使用 <code>await</code> 关键字来等待 <code>fetchUserOrder</code> 的结果。如果 <code>fetchUserOrder</code> 抛出一个错误，我们可以使用 <code>try</code>/<code>catch</code> 来处理这个错误。</p><p>需要注意的是，你只能在 <code>async</code> 函数中使用 <code>await</code> 关键字。</p>`,15),c=[p];function o(u,i){return s(),a("div",null,c)}const r=n(e,[["render",o],["__file","Dart的异步编程.html.vue"]]);export{r as default};

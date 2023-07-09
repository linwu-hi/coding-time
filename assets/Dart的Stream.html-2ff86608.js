import{_ as n,o as s,c as a,d as t}from"./app-4ff2b8c3.js";const p={},e=t(`<h1 id="dart的stream" tabindex="-1"><a class="header-anchor" href="#dart的stream" aria-hidden="true">#</a> Dart的Stream</h1><p>Stream 是 Dart 中处理连续的异步事件的工具。例如，你可以使用 Stream 来读取文件的内容，或者监听用户的鼠标点击。</p><p>一个简单的 Stream 示例：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">&gt;</span></span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> stream <span class="token operator">=</span> <span class="token class-name">Stream</span><span class="token punctuation">.</span><span class="token function">fromIterable</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">await</span> <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> number <span class="token keyword">in</span> stream<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 输出：1, 2, 3, 4, 5</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们使用 <code>Stream.fromIterable</code> 创建了一个 Stream，它将连续地产生 1 到 5 这五个数字。然后我们使用 <code>await for</code> 循环来监听 Stream 的事件。</p><p>如果你需要在监听 Stream 的过程中处理错误，你可以使用 <code>try</code>/<code>catch</code>：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">&gt;</span></span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> stream <span class="token operator">=</span> <span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">&gt;</span></span><span class="token punctuation">.</span><span class="token function">periodic</span><span class="token punctuation">(</span>
    <span class="token class-name">Duration</span><span class="token punctuation">(</span>seconds<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token class-name">Exception</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Error!&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> x<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> number <span class="token keyword">in</span> stream<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">print</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建-stream" tabindex="-1"><a class="header-anchor" href="#创建-stream" aria-hidden="true">#</a> 创建 Stream</h2><p>在 Dart 中，你可以使用多种方式来创建 Stream。前面我们已经见到了 <code>Stream.fromIterable</code>，下面是一些其他的方法：</p><ul><li><code>Stream.empty</code>：创建一个不产生任何事件的 Stream。</li><li><code>Stream.error</code>：创建一个只产生一个错误事件的 Stream。</li><li><code>Stream.periodic</code>：创建一个周期性地产生事件的 Stream。</li><li><code>StreamController</code>：手动控制 Stream 的事件和错误。</li></ul><p>例如，我们可以使用 <code>StreamController</code> 创建一个 Stream，并手动控制其事件和错误：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> controller <span class="token operator">=</span> <span class="token class-name">StreamController</span><span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  controller<span class="token punctuation">.</span>sink<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  controller<span class="token punctuation">.</span>sink<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  controller<span class="token punctuation">.</span>sink<span class="token punctuation">.</span><span class="token function">addError</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Oops!&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  controller<span class="token punctuation">.</span>sink<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  controller<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">await</span> <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> event <span class="token keyword">in</span> controller<span class="token punctuation">.</span>stream<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们首先创建了一个 <code>StreamController</code>。然后我们使用 <code>sink.add</code> 方法添加了三个事件，使用 <code>sink.addError</code> 方法添加了一个错误。最后我们使用 <code>controller.close</code> 方法表示我们不会再添加任何事件或错误。</p><h2 id="处理-stream-事件" tabindex="-1"><a class="header-anchor" href="#处理-stream-事件" aria-hidden="true">#</a> 处理 Stream 事件</h2><p>我们可以使用 <code>Stream.listen</code> 方法监听 Stream 的事件：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> stream <span class="token operator">=</span> <span class="token class-name">Stream</span><span class="token punctuation">.</span><span class="token function">fromIterable</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  stream<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Received event: </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">event</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    onError<span class="token punctuation">:</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Received error: </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">error</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    onDone<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;All done&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们监听了 Stream 的数据事件、错误事件和完成事件。</p><h2 id="转换-stream" tabindex="-1"><a class="header-anchor" href="#转换-stream" aria-hidden="true">#</a> 转换 Stream</h2><p>Stream API 提供了许多方法来转换 Stream。例如，你可以使用 <code>map</code> 方法来处理每个数据事件，或者使用 <code>where</code> 方法来过滤数据事件：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> stream <span class="token operator">=</span> <span class="token class-name">Stream</span><span class="token punctuation">.</span><span class="token function">fromIterable</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> evenStream <span class="token operator">=</span> stream<span class="token punctuation">.</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> event <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> event <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">await</span> <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> event <span class="token keyword">in</span> evenStream<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 输出：4, 8</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们首先使用 <code>where</code> 方法创建了一个只包含偶数的 Stream，然后我们使用 <code>map</code> 方法将每个偶数乘以 2。</p><h2 id="组合-stream" tabindex="-1"><a class="header-anchor" href="#组合-stream" aria-hidden="true">#</a> 组合 Stream</h2><p>你还可以使用 <code>StreamZip</code> 或 <code>StreamGroup</code> 来组合多个 Stream。例如，你可以使用 <code>StreamZip</code> 来同步处理两个 Stream 的数据事件：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> stream1 <span class="token operator">=</span> <span class="token class-name">Stream</span><span class="token punctuation">.</span><span class="token function">periodic</span><span class="token punctuation">(</span><span class="token class-name">Duration</span><span class="token punctuation">(</span>seconds<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> x<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> stream2 <span class="token operator">=</span> <span class="token class-name">Stream</span><span class="token punctuation">.</span><span class="token function">periodic</span><span class="token punctuation">(</span><span class="token class-name">Duration</span><span class="token punctuation">(</span>seconds<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> x<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> zippedStream <span class="token operator">=</span> <span class="token class-name">StreamZip</span><span class="token punctuation">(</span><span class="token punctuation">[</span>stream1<span class="token punctuation">,</span> stream2<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">await</span> <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> event <span class="token keyword">in</span> zippedStream<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 输出：[0, 0], [1, 1], [2, 2]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="stream的应用场景" tabindex="-1"><a class="header-anchor" href="#stream的应用场景" aria-hidden="true">#</a> Stream的应用场景</h2><p>好的，让我详细地解释一下上述的几个应用场景，并提供一些具体的代码示例：</p><h3 id="用户界面交互" tabindex="-1"><a class="header-anchor" href="#用户界面交互" aria-hidden="true">#</a> 用户界面交互</h3><p>在 Flutter 等 Dart 构建的应用程序中，Stream 可以用来监听并响应用户的交互行为。例如，你可以创建一个自定义的 <code>StreamController</code>，并使用它来监听按钮点击事件：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// 创建一个 StreamController</span>
<span class="token class-name">StreamController</span> controller <span class="token operator">=</span> <span class="token class-name">StreamController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 按钮点击事件监听</span>
  controller<span class="token punctuation">.</span>stream<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Button clicked: </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">data</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 模拟按钮点击</span>
  controller<span class="token punctuation">.</span>sink<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Button 1&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 在你的 UI 中，当按钮被点击时，你可以调用 controller.sink.add 来发送一个事件。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="网络请求" tabindex="-1"><a class="header-anchor" href="#网络请求" aria-hidden="true">#</a> 网络请求</h3><p>在进行网络请求时，服务器的响应通常会分成多个数据包。你可以使用 Stream 来连续地接收和处理这些数据包，这样你就可以在不等待整个响应完成的情况下开始处理数据：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;dart:convert&#39;</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;dart:io&#39;</span></span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> client <span class="token operator">=</span> <span class="token class-name">HttpClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  client<span class="token punctuation">.</span><span class="token function">getUrl</span><span class="token punctuation">(</span><span class="token class-name">Uri</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;https://api.github.com/users/dart-lang/repos&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">HttpClientRequest</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> request<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">HttpClientResponse</span> response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      response<span class="token punctuation">.</span><span class="token function">transform</span><span class="token punctuation">(</span><span class="token class-name">Utf8Decoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token punctuation">(</span>contents<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span>contents<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件操作" tabindex="-1"><a class="header-anchor" href="#文件操作" aria-hidden="true">#</a> 文件操作</h3><p>当你需要读取一个大文件时，可以使用 Stream 来逐行处理文件内容，这样你可以在不需要将整个文件加载到内存的情况下开始处理数据：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;dart:convert&#39;</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;dart:io&#39;</span></span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;path_to_your_file&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span>int<span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> inputStream <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">openRead</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  inputStream
    <span class="token punctuation">.</span><span class="token function">transform</span><span class="token punctuation">(</span>utf8<span class="token punctuation">.</span>decoder<span class="token punctuation">)</span>       <span class="token comment">// Decode bytes to UTF-8.</span>
    <span class="token punctuation">.</span><span class="token function">transform</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">LineSplitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// Convert stream to individual lines.</span>
    <span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">String</span> line<span class="token punctuation">)</span> <span class="token punctuation">{</span>        <span class="token comment">// Process results.</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;</span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">line</span></span><span class="token string">: </span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression">line<span class="token punctuation">.</span>length</span><span class="token punctuation">}</span></span><span class="token string"> bytes&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    onDone<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;File is now closed.&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    onError<span class="token punctuation">:</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">print</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定时任务" tabindex="-1"><a class="header-anchor" href="#定时任务" aria-hidden="true">#</a> 定时任务</h3><p>你可以使用 Stream 创建一个定时任务，然后在每个时间间隔中执行一些操作。例如，下面的代码使用 <code>Stream.periodic</code> 创建了一个每秒执行一次的定时任务：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 创建一个每秒触发一次的 Stream</span>
  <span class="token class-name">Stream</span><span class="token punctuation">.</span><span class="token function">periodic</span><span class="token punctuation">(</span><span class="token class-name">Duration</span><span class="token punctuation">(</span>seconds<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>count<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> count<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Tick: </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">count</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-数据流处理" tabindex="-1"><a class="header-anchor" href="#_5-数据流处理" aria-hidden="true">#</a> 5. 数据流处理</h2><p>在处理大量数据流时，你可以使用 Stream 创建一个数据管道，并利用其提供的 <code>map</code>、<code>filter</code>、<code>reduce</code> 等操作进行数据处理。以下示例将 Stream 中的数字逐个乘以 2：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Stream</span><span class="token punctuation">.</span><span class="token function">fromIterable</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>

 <span class="token operator">=</span><span class="token operator">&gt;</span> value <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">print</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 2, 4, 6, 8, 10</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些示例展示了如何在不同的场景中使用 Stream。一旦你熟悉了 Stream 的工作方式，你会发现它是一个非常强大的工具，能够让你更方便地处理异步事件。</p>`,42),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","Dart的Stream.html.vue"]]);export{r as default};

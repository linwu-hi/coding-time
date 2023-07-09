import{_ as n,o as s,c as a,d as t}from"./app-4ff2b8c3.js";const e={},p=t(`<h1 id="dart的isolate" tabindex="-1"><a class="header-anchor" href="#dart的isolate" aria-hidden="true">#</a> Dart的Isolate</h1><p>Isolate 是 Dart 中进行并发编程的一种方式。由于 Dart 是单线程模型，因此在需要处理 CPU 密集型任务或需要执行长时间运行的操作时，可以使用 Isolate。以下列出了一些常见的 Isolate 应用场景：</p><h2 id="创建-isolate" tabindex="-1"><a class="header-anchor" href="#创建-isolate" aria-hidden="true">#</a> 创建 Isolate</h2><p>在 Dart 中，所有的代码都运行在一个单线程中，这个线程被称为主 Isolate。如果你需要执行耗时的计算，你可以创建一个新的 Isolate，然后在这个新的 Isolate 中执行你的计算。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;dart:isolate&#39;</span></span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">printMessage</span><span class="token punctuation">(</span><span class="token keyword">var</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Message: </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">message</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> receivePort <span class="token operator">=</span> <span class="token class-name">ReceivePort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> <span class="token class-name">Isolate</span><span class="token punctuation">.</span><span class="token function">spawn</span><span class="token punctuation">(</span>printMessage<span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&#39;Hello!&#39;</span></span><span class="token punctuation">,</span> onExit<span class="token punctuation">:</span> receivePort<span class="token punctuation">.</span>sendPort<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> message <span class="token keyword">in</span> receivePort<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Received: </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">message</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们使用 <code>Isolate.spawn</code> 创建了一个新的 Isolate。我们传递了一个函数 <code>printMessage</code> 和一个消息 <code>&#39;Hello!&#39;</code> 给这个新的 Isolate。当这个新的 Isolate 完成后，它将使用 <code>onExit</code> 参数指定的 <code>SendPort</code> 发送一个消息。</p><p>需要注意的是，不同的 Isolate 之间不能共享内存，它们只能通过消息传递来进行通信。因此，你不能在一个 Isolate 中访问另一个 Isolate 的变量。</p><h2 id="消息传递" tabindex="-1"><a class="header-anchor" href="#消息传递" aria-hidden="true">#</a> 消息传递</h2><p>在 Dart 中，Isolate 之间的消息传递是通过 <code>SendPort</code> 和 <code>ReceivePort</code> 来实现的。</p><h3 id="sendport和receiveport" tabindex="-1"><a class="header-anchor" href="#sendport和receiveport" aria-hidden="true">#</a> SendPort和ReceivePort</h3><p><code>SendPort</code> 和 <code>ReceivePort</code> 是 Dart 中进行进程间通信的工具。你可以将 <code>SendPort</code> 看作是一个邮箱的地址，<code>ReceivePort</code> 看作是一个邮箱。你可以通过 <code>SendPort</code> 发送消息，然后在对应的 <code>ReceivePort</code> 中接收消息。</p><p>当你创建一个 <code>ReceivePort</code> 时，它将自动生成一个与之关联的 <code>SendPort</code>：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">var</span> receivePort <span class="token operator">=</span> <span class="token class-name">ReceivePort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> sendPort <span class="token operator">=</span> receivePort<span class="token punctuation">.</span>sendPort<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以使用 <code>sendPort.send</code> 方法发送消息，然后在 <code>receivePort</code> 中监听消息：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>sendPort<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Hello!&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

receivePort<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Received: </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">message</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在isolate-之间传递消息" tabindex="-1"><a class="header-anchor" href="#在isolate-之间传递消息" aria-hidden="true">#</a> 在Isolate 之间传递消息</h2><p>当你创建一个新的 Isolate 时，你可以将一个 <code>SendPort</code> 传递给这个新的 Isolate。然后你就可以通过这个 <code>SendPort</code> 向新的 Isolate 发送消息，或者从新的 Isolate 接收消息。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">printMessage</span><span class="token punctuation">(</span><span class="token keyword">var</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> sendPort <span class="token operator">=</span> message<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">as</span> <span class="token class-name">SendPort</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> message <span class="token operator">=</span> message<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">as</span> <span class="token class-name">String</span><span class="token punctuation">;</span>
  
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Message: </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">message</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  sendPort<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Hello from new Isolate!&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> receivePort <span class="token operator">=</span> <span class="token class-name">ReceivePort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> <span class="token class-name">Isolate</span><span class="token punctuation">.</span><span class="token function">spawn</span><span class="token punctuation">(</span>printMessage<span class="token punctuation">,</span> <span class="token punctuation">[</span>receivePort<span class="token punctuation">.</span>sendPort<span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&#39;Hello!&#39;</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  receivePort<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Received: </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">message</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们向新的 Isolate 发送了一个列表。这个列表的第一个元素是一个 <code>SendPort</code>，第二个元素是一个字符串。在新的 Isolate 中，我们首先通过 <code>SendPort</code> 发送了一个消息，然后打印了接收到的字符串。在主 Isolate 中，我们监听了 <code>ReceivePort</code>，然后打印了接收到的消息。</p><p>需要注意的是，你只能通过 <code>SendPort</code> 发送一些简单的数据，例如数字、字符串、列表、映射等。你不能发送一个函数或者一个对象的实例。</p><h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h2><p>Isolate 是 Dart 中进行并发编程的一种方式。由于 Dart 是单线程模型，因此在需要处理 CPU 密集型任务或需要执行长时间运行的操作时，可以使用 Isolate。以下列出了一些常见的 Isolate 应用场景：</p><h3 id="数据处理" tabindex="-1"><a class="header-anchor" href="#数据处理" aria-hidden="true">#</a> 数据处理</h3><p>对于大量的数据处理或复杂的计算任务，例如图像处理、大文件的读写、大数据集合的排序和筛选等，你可以使用 Isolate 进行处理，防止这些操作阻塞 UI 线程，造成应用程序的卡顿或无响应。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;dart:isolate&#39;</span></span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">longRunningTask</span><span class="token punctuation">(</span><span class="token class-name">SendPort</span> port<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 做一些耗时的操作，例如处理大量数据</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>int i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">1000000000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  port<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Task done&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> receivePort <span class="token operator">=</span> <span class="token class-name">ReceivePort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">Isolate</span><span class="token punctuation">.</span><span class="token function">spawn</span><span class="token punctuation">(</span>longRunningTask<span class="token punctuation">,</span> receivePort<span class="token punctuation">.</span>sendPort<span class="token punctuation">)</span><span class="token punctuation">;</span>
  receivePort<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="网络请求" tabindex="-1"><a class="header-anchor" href="#网络请求" aria-hidden="true">#</a> 网络请求</h3><p>尽管 Dart 的 I/O 操作是非阻塞的，但是在进行网络请求并接收数据时，如果数据量较大或需要复杂的处理（如 JSON 或 XML 的解析），这可能会消耗大量的 CPU 时间，从而阻塞 UI 线程。在这种情况下，你可以使用 Isolate。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token class-name">SendPort</span> sendPort<span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
  <span class="token class-name">HttpClient</span> httpClient <span class="token operator">=</span> <span class="token class-name">HttpClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">HttpClientRequest</span> request <span class="token operator">=</span> <span class="token keyword">await</span> httpClient<span class="token punctuation">.</span><span class="token function">getUrl</span><span class="token punctuation">(</span><span class="token class-name">Uri</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;http://example.com&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">HttpClientResponse</span> response <span class="token operator">=</span> <span class="token keyword">await</span> request<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  sendPort<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">consolidateHttpClientResponseBytes</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
  <span class="token class-name">ReceivePort</span> receivePort <span class="token operator">=</span> <span class="token class-name">ReceivePort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> <span class="token class-name">Isolate</span><span class="token punctuation">.</span><span class="token function">spawn</span><span class="token punctuation">(</span>fetchData<span class="token punctuation">,</span> receivePort<span class="token punctuation">.</span>sendPort<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">&gt;</span></span> data <span class="token operator">=</span> <span class="token keyword">await</span> receivePort<span class="token punctuation">.</span>first<span class="token punctuation">;</span>
  <span class="token class-name">String</span> result <span class="token operator">=</span> utf8<span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="web-服务器" tabindex="-1"><a class="header-anchor" href="#web-服务器" aria-hidden="true">#</a> Web 服务器</h3><p>在编写 Web 服务器时，你可以使用 Isolate 来处理并发的请求。每当收到新的请求时，你可以创建一个新的 Isolate 来处理请求，这样可以避免阻塞服务器的主线程。</p>`,30),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","Dart的Isolate.html.vue"]]);export{r as default};

import{_ as t,r as p,o,c as i,a as n,b as a,e,d as c}from"./app-4ff2b8c3.js";const l={},u=c(`<h1 id="js中的异步编程与promise" tabindex="-1"><a class="header-anchor" href="#js中的异步编程与promise" aria-hidden="true">#</a> JS中的异步编程与Promise</h1><h2 id="一、javascript的异步编步机制" tabindex="-1"><a class="header-anchor" href="#一、javascript的异步编步机制" aria-hidden="true">#</a> 一、JavaScript的异步编步机制</h2><p>在了解JavaScript的异步机制之前，我们首先需要理解JavaScript是一种单线程语言。单线程就意味着所有的任务需要按照顺序一次执行，如果前一个任务没有完成，后一个任务就无法开始。这个特性在执行大量或耗时任务时可能会导致阻塞或者界面卡死，这显然是不可取的。</p><p>为了解决这个问题，JavaScript引入了异步编程的机制。简单地说，异步就是你现在发出了一个“命令”，但是并不等待这个“命令”完成，而是继续执行下一个“命令”。只有在“听到”之前的那个“命令”完成了的消息时，才会回过头来处理这个“命令”的结果。这就是所谓的异步编程。</p><h2 id="二、事件循环-event-loop-和任务队列-task-queue" tabindex="-1"><a class="header-anchor" href="#二、事件循环-event-loop-和任务队列-task-queue" aria-hidden="true">#</a> 二、事件循环（Event Loop）和任务队列（Task Queue）</h2><p>这种异步的机制是如何实现的呢？关键在于事件循环（Event Loop）和任务队列（Task Queue）。</p><p>事件循环是 JavaScript 内部的一个处理过程，系统会在此处不断地循环等待，检查任务队列中是否有任务，如果有，就处理它。</p><p>而任务队列，就是一个存储待处理任务的队列，当我们使用 setTimeout、setInterval、ajax等API时，实际上是向任务队列中添加了一个任务。</p><p>当主线程空闲时（也就是同步任务都执行完毕），便会去看任务队列里有没有任务，如果有，便将其取出执行；没有的话，则继续等待。</p><p>这个模型可以简单地用下面的代码表示：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> task <span class="token operator">=</span> taskQueue<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">execute</span><span class="token punctuation">(</span>task<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、宏任务和微任务" tabindex="-1"><a class="header-anchor" href="#三、宏任务和微任务" aria-hidden="true">#</a> 三、宏任务和微任务</h2><p>在任务队列中，任务被分为两类：宏任务（MacroTask）和微任务（MicroTask）。两者的区别在于，宏任务在下一轮事件循环开始时执行，微任务在本轮事件循环结束时执行。这意味着微任务的优先级高于宏任务。</p><p>常见的宏任务有：script全文（可以看作一种宏任务）、setTimeout、setInterval、setImmediate（Node.js 环境）、I/O、UI渲染。</p><p>常见的微任务有：Promise、process.nextTick（Node.js环境）、MutationObserver(html5新特性)。</p><p>事件循环的顺序，决定了 JavaScript 代码的执行顺序。过程如下：</p><ul><li>执行同步代码，这属于宏任务</li><li>执行栈为空，查询是否有微任务需要执行</li><li>执行所有微任务</li><li>必要的话渲染UI</li><li>然后开始下一轮 Event loop，执行宏任务中的异步代码</li></ul><p>代码示例如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;script start&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 宏任务</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;setTimeout&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 宏任务</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;promise1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 微任务</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;promise2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 微任务</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;script end&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 宏任务</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出顺序为：script start -&gt; script end -&gt; promise1 -&gt; promise2 -&gt; setTimeout。这是因为JavaScript执行机制决定了微任务比宏任务优先执行。</p><h2 id="四、requestanimationframe" tabindex="-1"><a class="header-anchor" href="#四、requestanimationframe" aria-hidden="true">#</a> 四、requestAnimationFrame</h2><p>requestAnimationFrame是一个优化动画效果的函数，也有它在事件循环中的位置。</p><p>requestAnimationFrame 的调用是有频率限制的，在大多数浏览器里，这个频率是60Hz，也就是说，每一次刷新间隔为1000/60≈16.7ms。requestAnimationFrame 的执行时机是在下一次重绘之前，而不是立即执行。</p><p>requestAnimationFrame 的优点是由系统来决定回调函数的执行时机。如果系统忙到一定程度，可能会两次“刷新”之间多次执行回调函数，这时就可以省略掉一些回调函数的执行。这种机制可以有效节省 CPU 开销，提高系统的性能。</p><p>requestAnimationFrame 的位置在事件循环中的具体位置是视浏览器的实现而定，但一般来说，它在宏任务执行完，渲染之前，这使得其可以获取到最新的布局和样式信息。</p><h2 id="五、promise的发展" tabindex="-1"><a class="header-anchor" href="#五、promise的发展" aria-hidden="true">#</a> 五、Promise的发展</h2><p>Promise 对象代表一个异步操作的最终完成（或失败）及其结果值。一个 Promise 处于以下状态之一：</p><ul><li>pending: 初始状态，既不是成功，也不是失败状态。</li><li>fulfilled: 意味着操作成功完成。</li><li>rejected: 意味着操作失败。</li></ul><p>一个 promise 必须处于一种状态：fulfilled、rejected 或 pending。一个 promise 的状态在 settle 之后就不能再改变。</p><p>Promise起初是由社区提出并实现的，最早的版本是由 Kris Kowal 提出的 Q 库，后来被 ES6 正式接受，并成为了浏览器的原生对象。</p><p>Promise 主要解决了两类问题：</p><ul><li>异步操作的一致性问题：无论异步操作是同步完成还是异步完成，使用 Promise 对象的 then 方法都可以以同样的方式进行处理。</li><li>回调地狱问题：回调地狱指的是多层嵌套的回调函数，导致代码难以维护和理解。Promise 可以通过链式调用的方式，解决回调地狱问题。</li></ul><p>我们可以通过下面的代码示例来看一下 Promise 是如何工作的：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 异步处理</span>
  <span class="token comment">// 处理结束后、调用resolve 或 reject</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// success</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// failure</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Promise 的状态一旦改变，就会一直保持那个状态，不会再次改变。这个特性可以让我们有序地处理异步操作的结果，避免出现复杂的状态判断。</p><p>以上是关于 JavaScript 中异步编程、事件循环、任务队列、宏任务、微任务，以及requestAnimationFrame在事件循环的位置，Promise 的发展和如何解决回调地狱的详细介绍。对于 JavaScript 的异步编程机制，我们应该有了全面深入的了解。</p><h3 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h3>`,37),r={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_promises",target:"_blank",rel:"noopener noreferrer"},d={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame",target:"_blank",rel:"noopener noreferrer"};function k(m,v){const s=p("ExternalLinkIcon");return o(),i("div",null,[u,n("ol",null,[n("li",null,[n("a",r,[a("MDN文档 - 使用 Promises"),e(s)])]),n("li",null,[n("a",d,[a("MDN文档 - Window.requestAnimationFrame()"),e(s)])])])])}const b=t(l,[["render",k],["__file","JavaScript中的异步编程与Promise.html.vue"]]);export{b as default};

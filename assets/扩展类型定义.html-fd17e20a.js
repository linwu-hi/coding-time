import{_ as n,o as s,c as a,d as e}from"./app-4ff2b8c3.js";const p={},t=e(`<h1 id="扩展类型定义" tabindex="-1"><a class="header-anchor" href="#扩展类型定义" aria-hidden="true">#</a> 扩展类型定义</h1><p>在 TypeScript 中，我们可以通过声明文件（<code>.d.ts</code> 文件）来为现有的 JavaScript 库提供类型定义，或者为现有的类型添加额外的属性和方法。这个过程通常被称为“类型声明扩展”。在这篇文章中，我们将详细探讨如何通过声明文件扩展类型定义。</p><h2 id="什么是声明文件" tabindex="-1"><a class="header-anchor" href="#什么是声明文件" aria-hidden="true">#</a> 什么是声明文件？</h2><p>在 TypeScript 中，声明文件是一种以 <code>.d.ts</code> 为扩展名的特殊文件，它不包含具体的实现，只包含类型声明。这些文件通常用来为已有的 JavaScript 库提供类型定义，使得我们可以在 TypeScript 代码中更安全、更方便地使用这些库。</p><p>声明文件的主要内容是类型声明，包括变量、函数、类、接口等的类型定义。这些类型声明提供了一种描述 JavaScript 代码的结构和行为的方式，使得 TypeScript 编译器能够理解和检查 JavaScript 代码。</p><p>例如，以下是一个简单的声明文件的例子：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// types.d.ts</span>
<span class="token keyword">declare</span> <span class="token keyword">var</span> foo<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span>baz<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的声明文件中，我们声明了一个全局变量 <code>foo</code> 和一个全局函数 <code>bar</code>，并分别给它们提供了类型声明。</p><h2 id="declare" tabindex="-1"><a class="header-anchor" href="#declare" aria-hidden="true">#</a> declare</h2><p>当我们在 TypeScript 中编写声明文件时，我们使用 <code>declare</code> 关键字来声明全局变量、函数、类、接口等类型。</p><p><code>declare</code> 关键字用于告诉 TypeScript 编译器某个标识符的类型，而不需要实际的实现代码。它用于在声明文件中描述 JavaScript 代码的类型。</p><p>下面是一些常见的用法：</p><h3 id="_1-声明全局变量" tabindex="-1"><a class="header-anchor" href="#_1-声明全局变量" aria-hidden="true">#</a> 1. 声明全局变量：</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">const</span> myGlobal<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个声明告诉 TypeScript 编译器，存在一个名为 <code>myGlobal</code> 的全局变量，它的类型是 <code>string</code>。</p><h3 id="_2-声明全局函数" tabindex="-1"><a class="header-anchor" href="#_2-声明全局函数" aria-hidden="true">#</a> 2. 声明全局函数：</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">myFunction</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个声明告诉 TypeScript 编译器，存在一个名为 <code>myFunction</code> 的全局函数，它接受一个 <code>number</code> 类型的参数，并返回一个 <code>string</code> 类型的值。</p><h3 id="_3-声明全局类" tabindex="-1"><a class="header-anchor" href="#_3-声明全局类" aria-hidden="true">#</a> 3. 声明全局类：</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个声明告诉 TypeScript 编译器，存在一个名为 <code>MyClass</code> 的全局类，它有一个接受 <code>string</code> 类型参数的构造函数，并且有一个返回 <code>string</code> 类型的 <code>getName</code> 方法。</p><h3 id="_4-声明命名空间" tabindex="-1"><a class="header-anchor" href="#_4-声明命名空间" aria-hidden="true">#</a> 4. 声明命名空间</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">namespace</span> MyNamespace <span class="token punctuation">{</span>
  <span class="token keyword">export</span> <span class="token keyword">const</span> myVariable<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个声明告诉 TypeScript 编译器，存在一个名为 <code>MyNamespace</code> 的全局模块/命名空间，它包含一个名为 <code>myVariable</code> 的变量和一个名为 <code>myFunction</code> 的函数。</p><p>通过使用 <code>declare</code> 关键字，我们可以在声明文件中描述出我们所需要的类型信息，以便 TypeScript 编译器进行类型检查和类型推断。</p><p>需要注意的是，<code>declare</code> 关键字只用于类型声明，不包含具体的实现代码。在使用声明文件时，我们需要确保提供了实际的实现代码，以便程序在运行时可以访问到所声明的类型。</p><h2 id="_5-声明模块" tabindex="-1"><a class="header-anchor" href="#_5-声明模块" aria-hidden="true">#</a> 5. 声明模块</h2><p>当我们在声明文件中使用 <code>declare module</code> 时，我们可以定义一个模块，并在其中声明模块内部的类型。这样，其他文件在导入该模块时，就可以按照模块的名称来引用其中的类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;my-module&#39;</span> <span class="token punctuation">{</span>
  <span class="token keyword">export</span> <span class="token keyword">const</span> myVariable<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们在 <code>my-module</code> 模块中声明了一个名为 <code>myVariable</code> 的变量和一个名为 <code>myFunction</code> 的函数，并通过 <code>export</code> 关键字将它们导出，使其在导入该模块时可见。</p><h3 id="通过声明文件扩展类型定义" tabindex="-1"><a class="header-anchor" href="#通过声明文件扩展类型定义" aria-hidden="true">#</a> 通过声明文件扩展类型定义</h3><p>在某些情况下，我们可能需要为已有的类型添加额外的属性或方法。比如，我们可能在使用一个库时发现它缺少一些我们需要的类型定义，或者我们可能想要为一些内置类型（如 <code>string</code> 或 <code>Array</code>）添加一些自定义的方法。</p><p>这时，我们可以通过在声明文件中使用“声明合并”（Declaration Merging）来扩展类型定义。声明合并是 TypeScript 的一项特性，它允许我们在多个位置声明同名的类型，然后 TypeScript 会将这些声明合并为一个类型。</p><p>例如，假设我们想要为所有的数组添加一个 <code>last</code> 属性，该属性返回数组的最后一个元素。我们可以在声明文件中为 <code>Array</code> 类型添加一个新的声明：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// types.d.ts</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  last<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，我们通过声明一个同名的 <code>Array</code> 接口来为 <code>Array</code> 类型添加一个新的 <code>last</code> 属性。这样，我们在 TypeScript 代码中使用数组时，就可以访问这个新的 <code>last</code> 属性：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span>last<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2><p>虽然通过声明文件扩展类型定义可以让我们更灵活地使用类型，但也需要注意一些事项。</p><p>首先，声明文件只提供类型信息，不包含实现。也就是说，如果我们为一个类型添加了新的属性或方法，我们还需要在实际的代码中提供这些属性或方法的实现。</p><p>其次，尽管 TypeScript 允许我们为内置类型添加自定义的属性和方法，但这并不意味着这是一个好的做法。在很多情况下，过度修改内置类型可能会导致代码难以理解和维护。因此，我们应该谨慎使用这种特性，尽可能地遵循库或语言的原始设计。</p><p>最后，当我们在一个项目中使用多个声明文件时，需要注意文件的加载顺序和作用域问题。因为声明文件中的类型声明会影响整个项目，所以我们需要确保所有的声明文件都被正确地加载，并且不会互相冲突。</p><h2 id="为第三方库创建声明文件" tabindex="-1"><a class="header-anchor" href="#为第三方库创建声明文件" aria-hidden="true">#</a> 为第三方库创建声明文件</h2><p>当我们在使用第三方库时，通常会遇到缺乏类型声明的情况。我们可以通过创建一个声明文件来为该库添加类型声明，以便在 TypeScript 代码中使用该库的时候获得类型检查和自动完成的支持。</p><p>以下是一个实际的示例，假设我们使用的是一个名为 <code>axios</code> 的库，它是一个流行的用于发起 HTTP 请求的库。假设 <code>axios</code> 库没有提供类型声明文件，我们可以创建一个声明文件 <code>axios.d.ts</code> 来为它添加类型声明：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;axios&#39;</span> <span class="token punctuation">{</span>
  <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">AxiosRequestConfig</span> <span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    method<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    data<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
    headers<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">AxiosResponse<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
    data<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
    status<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    statusText<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    headers<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
    config<span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">request</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>config<span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>AxiosResponse<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">get</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> config<span class="token operator">?</span><span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>AxiosResponse<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">post</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> data<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> config<span class="token operator">?</span><span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>AxiosResponse<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">;</span>
  <span class="token comment">// ... 其他请求方法的类型声明 ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个声明文件中，我们使用 <code>declare module</code> 来声明一个名为 <code>axios</code> 的模块，并在其中定义了与 <code>axios</code> 相关的类型声明。</p><p>我们定义了 <code>AxiosRequestConfig</code> 接口，它描述了发起请求时的配置选项；定义了 <code>AxiosResponse</code> 接口，它描述了请求返回的响应数据的结构。</p><p>然后，我们通过 <code>export</code> 关键字将 <code>request</code>、<code>get</code> 和 <code>post</code> 等函数导出为模块的公共 API，以便在其他文件中使用这些函数。</p><p>现在，在我们的 TypeScript 代码中，我们可以通过导入 <code>axios</code> 模块来使用这些类型声明，以及使用 <code>axios</code> 库的方法：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> axios<span class="token punctuation">,</span> <span class="token punctuation">{</span> AxiosResponse<span class="token punctuation">,</span> AxiosRequestConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> AxiosRequestConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  url<span class="token operator">:</span> <span class="token string">&#39;https://api.example.com&#39;</span><span class="token punctuation">,</span>
  method<span class="token operator">:</span> <span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>response<span class="token operator">:</span> AxiosResponse<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过这种方式，我们可以为第三方库创建声明文件，并在 TypeScript 代码中使用它们来获得类型检查和自动完成的支持，提高代码的可靠性和开发效率。</p>`,52),o=[t];function c(i,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","扩展类型定义.html.vue"]]);export{d as default};

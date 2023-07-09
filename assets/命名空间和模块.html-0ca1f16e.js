import{_ as n,o as s,c as a,d as e}from"./app-4ff2b8c3.js";const p={},t=e(`<h1 id="命名空间和模块" tabindex="-1"><a class="header-anchor" href="#命名空间和模块" aria-hidden="true">#</a> 命名空间和模块</h1><h2 id="命名空间-namespace" tabindex="-1"><a class="header-anchor" href="#命名空间-namespace" aria-hidden="true">#</a> 命名空间（Namespace）</h2><p>在 TypeScript 中，命名空间是一种将代码封装在一个特定名称下的方式，以防止全局作用域污染并避免命名冲突。命名空间在 TypeScript 中非常重要，因为它们为模块化和封装提供了灵活的选项。</p><p>创建命名空间的语法如下：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">namespace</span> MyNamespace <span class="token punctuation">{</span>
  <span class="token keyword">export</span> <span class="token keyword">const</span> myVar<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Hello from MyNamespace&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在此例中，我们创建了一个名为<code>MyNamespace</code>的命名空间，该命名空间内有一个变量<code>myVar</code>和一个函数<code>myFunction</code>。<code>export</code>关键字允许我们从命名空间外部访问这些元素。</p><p>命名空间中的元素可以通过以下方式访问：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>MyNamespace<span class="token punctuation">.</span>myVar<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：10</span>
MyNamespace<span class="token punctuation">.</span><span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：Hello from MyNamespace</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>我们也可以使用嵌套的命名空间：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">namespace</span> ParentNamespace <span class="token punctuation">{</span>
  <span class="token keyword">export</span> <span class="token keyword">namespace</span> ChildNamespace <span class="token punctuation">{</span>
    <span class="token keyword">export</span> <span class="token keyword">const</span> myVar<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ParentNamespace<span class="token punctuation">.</span>ChildNamespace<span class="token punctuation">.</span>myVar<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="命名空间-namespace-使用场景" tabindex="-1"><a class="header-anchor" href="#命名空间-namespace-使用场景" aria-hidden="true">#</a> 命名空间（Namespace）使用场景</h2><blockquote><p>在 TypeScript 的早期版本中，命名空间被广泛地使用来组织和包装一组相关的代码。然而，随着 ES6 模块系统（ES6 Modules）的出现和广泛使用，命名空间的用法变得越来越少，现在被视为一种遗留的方式来组织代码。</p></blockquote><h3 id="第三方库" tabindex="-1"><a class="header-anchor" href="#第三方库" aria-hidden="true">#</a> 第三方库</h3><p>一些第三方库仍然使用命名空间来组织自己的代码，并提供命名空间作为库的入口点。在这种情况下，我们需要使用命名空间来访问和使用库中的类型和函数。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">namespace</span> MyLibrary <span class="token punctuation">{</span>
  <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

MyLibrary<span class="token punctuation">.</span><span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="兼容性" tabindex="-1"><a class="header-anchor" href="#兼容性" aria-hidden="true">#</a> 兼容性</h3><p>在一些遗留的 JavaScript 代码或库中，命名空间仍然是一种常见的组织代码的方式。如果我们需要与这些代码进行交互，我们可能需要创建命名空间来适应它们。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// legacy.js</span>
<span class="token keyword">var</span> MyNamespace <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">myFunction</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

MyNamespace<span class="token punctuation">.</span><span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，我们演示了命名空间的几个使用场景。第一个示例展示了如何使用命名空间访问和使用第三方库的函数。第二个示例展示了如何使用命名空间来管理全局状态。第三个示例展示了如何在与遗留 JavaScript 代码进行交互时创建命名空间。</p><p>虽然在现代 TypeScript 开发中，模块是更常见和推荐的代码组织方式，但命名空间仍然在特定的情况下具有一定的用处，并且在与一些特定的库或代码进行交互时可能是必需的。</p><h2 id="模块" tabindex="-1"><a class="header-anchor" href="#模块" aria-hidden="true">#</a> 模块</h2><p>在 TypeScript 中，模块是另一种组织代码的方式，但它们更关注的是依赖管理。每个模块都有其自己的作用域，并且只有明确地导出的部分才能在其他模块中访问。</p><p>创建和使用模块的方式如下：</p><p>在<code>myModule.ts</code>文件中：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> myVar<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Hello from myModule&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在另一个文件中导入和使用模块：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> myVar<span class="token punctuation">,</span> myFunction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./myModule&#39;</span><span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myVar<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：10</span>
<span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：Hello from myModule</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 TypeScript 中，我们可以使用模块解析策略（如 Node 或 Classic），以确定如何查找模块。这些策略在 <code>tsconfig.json</code> 文件的 <code>compilerOptions</code> 选项下的 <code>moduleResolution</code> 选项中定义。</p><h2 id="_3-命名空间与模块的对比" tabindex="-1"><a class="header-anchor" href="#_3-命名空间与模块的对比" aria-hidden="true">#</a> 3. 命名空间与模块的对比</h2><p>虽然命名空间和模块在某种程度上有所相似，但它们有以下几个关键区别：</p><ol><li><p><strong>作用域</strong>：命名空间是在全局作用域中定义的，而模块则在自己的作用域中定义。这意味着，在模块内部定义的所有内容默认情况下在模块外部是不可见的，除非显式地导出它们。</p></li><li><p><strong>文件组织</strong>：命名空间通常用于组织在同一文件中的代码，而模块则是跨文件进行组织。</p></li><li><p><strong>依赖管理</strong>：模块关注的是如何导入和导出功能，以便管理代码之间的依赖关系。相比之下，命名空间并未对依赖管理提供明确的支持。</p></li><li><p><strong>使用场景</strong>：随着 ES6 模块语法的普及，现代 JavaScript 项目通常更倾向于使用模块来组织代码。然而，对于一些遗留项目或那些需要将多个文件合并为一个全局可用的库的场景，命名空间可能更为合适。</p></li></ol>`,31),c=[t];function o(i,l){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","命名空间和模块.html.vue"]]);export{r as default};

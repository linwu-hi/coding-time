import{_ as p,r as e,o as c,c as o,a as n,b as a,e as t,d as i}from"./app-4ff2b8c3.js";const l={},u=i(`<h1 id="javascript事件流-深入理解事件处理和传播机制" tabindex="-1"><a class="header-anchor" href="#javascript事件流-深入理解事件处理和传播机制" aria-hidden="true">#</a> JavaScript事件流：深入理解事件处理和传播机制</h1><h2 id="引言" tabindex="-1"><a class="header-anchor" href="#引言" aria-hidden="true">#</a> 引言</h2><p>JavaScript中的事件流是一种机制，用于描述和处理事件在DOM树中的传播过程。了解事件流的属性和工作原理对于编写高效的事件处理代码和实现复杂的交互功能至关重要。本文将详细介绍JavaScript事件流的发展流程、属性以及应用场景，并提供一些代码示例和引用资料，帮助读者深入理解并应用这一重要的前端技术。</p><h2 id="_1-事件流的发展流程" tabindex="-1"><a class="header-anchor" href="#_1-事件流的发展流程" aria-hidden="true">#</a> 1. 事件流的发展流程</h2><p>事件流在前端的发展过程中经历了一些变化和演进。下面简要介绍了事件流的发展历程：</p><h3 id="_1-1-传统的dom0级事件" tabindex="-1"><a class="header-anchor" href="#_1-1-传统的dom0级事件" aria-hidden="true">#</a> 1.1 传统的DOM0级事件</h3><p>在早期的JavaScript中，事件处理是通过在DOM元素上直接定义事件处理属性来实现的，称为DOM0级事件。例如，可以通过为按钮元素的<code>onclick</code>属性赋值一个函数来定义点击事件的处理程序。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> button <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;myButton&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
button<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;按钮被点击&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种方式简单直接，但是有一个缺点是无法同时为一个元素的同一个事件类型添加多个处理程序。</p><h3 id="_1-2-dom2级事件和addeventlistener方法" tabindex="-1"><a class="header-anchor" href="#_1-2-dom2级事件和addeventlistener方法" aria-hidden="true">#</a> 1.2 DOM2级事件和addEventListener方法</h3><p>随着DOM2级事件的引入，新增了<code>addEventListener</code>方法，提供了更强大和灵活的事件处理能力。<code>addEventListener</code>方法允许为一个元素的同一个事件类型添加多个处理程序，并且可以控制事件的捕获阶段。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> button <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;myButton&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
button<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;按钮被点击&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过<code>addEventListener</code>方法，可以在一个元素上同时添加多个处理程序，而且可以使用<code>removeEventListener</code>方法移除指定的处理程序。</p><h3 id="_1-3-w3c-dom3级事件" tabindex="-1"><a class="header-anchor" href="#_1-3-w3c-dom3级事件" aria-hidden="true">#</a> 1.3 W3C DOM3级事件</h3><p>W3C DOM3级事件进一步扩展了事件的类型和属性，引入了更多的事件类型和特性，以满足不断增长的前端开发需求。DOM3级事件规范定义了新的事件类型，如滚动事件、触摸事件、过渡事件等，以及一些新的事件属性和方法，提供更丰富的事件处理能力。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;myElement&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;scroll&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;元素滚动事件&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>DOM3级事件的引入丰富了事件处理的能力，使得开发者可以更灵活地响应各种类型的事件。</p><h3 id="_1-4-react与virtual-dom" tabindex="-1"><a class="header-anchor" href="#_1-4-react与virtual-dom" aria-hidden="true">#</a> 1.4 React与Virtual DOM</h3><p>随着React等前端框架的出现，事件处理机制也发生了一些变化。React通过Virtual DOM的概念，将事件处理从直接操作DOM转移到组件层面进行管理。React利用了合成事件（</p><p>SyntheticEvent）来处理事件，实现了跨浏览器的一致性和性能优化。</p><p>在React中，事件处理程序是通过特定的语法和属性绑定到组件的，而不是直接操作DOM元素。</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;按钮被点击&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">点击按钮</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过使用合成事件，React能够更高效地管理事件处理，并提供了更好的性能和开发体验。</p><h2 id="_2-事件流的属性" tabindex="-1"><a class="header-anchor" href="#_2-事件流的属性" aria-hidden="true">#</a> 2. 事件流的属性</h2><p>事件流涉及到三个主要的概念：事件捕获阶段、目标阶段和事件冒泡阶段。了解这些阶段和相关的属性对于理解事件流的机制至关重要。</p><h3 id="_2-1-事件捕获阶段" tabindex="-1"><a class="header-anchor" href="#_2-1-事件捕获阶段" aria-hidden="true">#</a> 2.1 事件捕获阶段</h3><p>事件捕获阶段是事件流的第一个阶段，从根节点开始向下传播到目标元素。在事件捕获阶段中，事件依次经过每个父元素，直到达到目标元素。</p><p>在事件捕获阶段，可以使用<code>addEventListener</code>的第三个参数指定事件处理程序在捕获阶段中执行。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> handler<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-2-目标阶段" tabindex="-1"><a class="header-anchor" href="#_2-2-目标阶段" aria-hidden="true">#</a> 2.2 目标阶段</h3><p>目标阶段是事件流的第二个阶段，事件到达目标元素后被触发执行事件处理程序。</p><h3 id="_2-3-事件冒泡阶段" tabindex="-1"><a class="header-anchor" href="#_2-3-事件冒泡阶段" aria-hidden="true">#</a> 2.3 事件冒泡阶段</h3><p>事件冒泡阶段是事件流的最后一个阶段，事件从目标元素开始向上冒泡，依次经过每个父元素，直到达到根节点。</p><p>在事件冒泡阶段，可以使用<code>addEventListener</code>的第三个参数设置为<code>false</code>或省略来指定事件处理程序在冒泡阶段中执行（默认值）。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> handler<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 或</span>
element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-事件对象" tabindex="-1"><a class="header-anchor" href="#_2-4-事件对象" aria-hidden="true">#</a> 2.4 事件对象</h3><p>在事件处理程序中，可以通过事件对象访问和操作相关的事件信息。事件对象提供了一些属性和方法，可以获取事件的类型、目标元素、鼠标坐标等信息。</p><p>例如，可以通过事件对象的<code>type</code>属性获取事件类型：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 &#39;click&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-事件流的应用场景" tabindex="-1"><a class="header-anchor" href="#_3-事件流的应用场景" aria-hidden="true">#</a> 3. 事件流的应用场景</h2><p>事件流在前端开发中具有广泛的应用场景，下面介绍几个常见的应用场景：</p><h3 id="_3-1-事件处理" tabindex="-1"><a class="header-anchor" href="#_3-1-事件处理" aria-hidden="true">#</a> 3.1 事件处理</h3><p>事件流提供了一种机制，用于处理和响应用户的交互操作。通过在目标元素上注册事件处理程序，可以捕获和处理用户触发的事件，实现交互功能。</p><p>例如，通过在按钮上注册<code>click</code>事件处理程序，可以</p><p>在按钮被点击时执行相应的代码逻辑。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> button <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;myButton&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
button<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;按钮被点击&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-事件代理" tabindex="-1"><a class="header-anchor" href="#_3-2-事件代理" aria-hidden="true">#</a> 3.2 事件代理</h3><p>事件代理（Event Delegation）是一种常见的优化技术，用于处理大量具有相似行为的子元素事件。通过在父元素上注册事件处理程序，可以利用事件冒泡机制，统一管理子元素的事件处理。</p><p>例如，可以在父元素上注册<code>click</code>事件处理程序，根据触发事件的具体子元素进行不同的操作。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> list <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;myList&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
list<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>tagName <span class="token operator">===</span> <span class="token string">&#39;LI&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;项目被点击&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-事件委托" tabindex="-1"><a class="header-anchor" href="#_3-3-事件委托" aria-hidden="true">#</a> 3.3 事件委托</h3><p>事件委托是一种通过将事件处理委托给父元素来提高性能和简化代码的技术。它利用事件冒泡机制，在父元素上注册一个事件处理程序，处理多个子元素的相同事件。</p><p>例如，可以在父元素上注册<code>click</code>事件处理程序，根据触发事件的子元素的不同类别执行不同的操作。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;myContainer&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
container<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;按钮被点击&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;链接被点击&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-示例代码" tabindex="-1"><a class="header-anchor" href="#_4-示例代码" aria-hidden="true">#</a> 4. 示例代码</h2><p>下面是一些示例代码，演示了事件流的应用和相关的属性：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myButton<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>点击按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myList<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>项目1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>项目2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>项目3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myContainer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>link<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>链接<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// 事件处理示例</span>
  <span class="token keyword">const</span> button <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;myButton&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  button<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;按钮被点击&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 事件代理示例</span>
  <span class="token keyword">const</span> list <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;myList&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  list<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>tagName <span class="token operator">===</span> <span class="token string">&#39;LI&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;项目被点击&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 事件委托示例</span>
  <span class="token keyword">const</span> container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;myContainer&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  container<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;按钮被点击&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;链接被点击&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-参考资料" tabindex="-1"><a class="header-anchor" href="#_5-参考资料" aria-hidden="true">#</a> 5. 参考资料</h2>`,58),k={href:"https://developer.mozilla.org/en-US/docs/Web/Events",target:"_blank",rel:"noopener noreferrer"},d={href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events",target:"_blank",rel:"noopener noreferrer"},r={href:"https://javascript.info/bubbling-and-capturing",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.w3schools.com/js/js_htmldom_eventlistener.asp",target:"_blank",rel:"noopener noreferrer"};function m(g,b){const s=e("ExternalLinkIcon");return c(),o("div",null,[u,n("ul",null,[n("li",null,[n("a",k,[a("MDN Web Docs - Event reference"),t(s)])]),n("li",null,[n("a",d,[a("MDN Web Docs - Introduction to events"),t(s)])]),n("li",null,[n("a",r,[a("JavaScript.info - Bubbling and capturing"),t(s)])]),n("li",null,[n("a",v,[a("W3Schools - JavaScript HTML DOM EventListener"),t(s)])])])])}const f=p(l,[["render",m],["__file","深入理解事件处理和传播机制.html.vue"]]);export{f as default};

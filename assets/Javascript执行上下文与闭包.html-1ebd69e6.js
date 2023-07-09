import{_ as n,o as s,c as a,d as t}from"./app-4ff2b8c3.js";const p={},e=t(`<h1 id="执行上下文与闭包" tabindex="-1"><a class="header-anchor" href="#执行上下文与闭包" aria-hidden="true">#</a> 执行上下文与闭包</h1><h2 id="一、由来" tabindex="-1"><a class="header-anchor" href="#一、由来" aria-hidden="true">#</a> 一、由来</h2><p>JavaScript中的闭包源于计算机科学中的一种理论概念，称为“λ演算”（Lambda Calculus）。λ演算是计算机科学的基础之一，1930年由Alonzo Church提出，它是一种用于描述计算过程的数学抽象模型，也是函数式编程语言的基础。</p><p>在JavaScript中，闭包是函数和声明该函数的词法环境的组合。这个环境包含了闭包创建时所能访问的所有局部变量。</p><p>理解闭包，需要理解JavaScript的特性和工作原理。JavaScript的函数在创建时，就确定了其操作的上下文环境，即词法作用域。这是因为JavaScript采用的是静态作用域，也叫词法作用域，函数的作用域在函数定义的时候就决定了。</p><p>例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;JavaScript&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">inner</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> inner<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> innerFunc <span class="token operator">=</span> <span class="token function">outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">innerFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 &#39;JavaScript&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code>outer</code>函数返回了<code>inner</code>函数。<code>inner</code>函数访问了<code>outer</code>函数的局部变量<code>name</code>，因此形成了一个闭包。即使<code>outer</code>函数执行完毕，<code>name</code>变量的引用仍然被保留，因此<code>innerFunc</code>在执行时仍然能够输出 &#39;JavaScript&#39;。</p><p>闭包的概念虽然来自计算机科学的深层理论，但在日常的JavaScript编程中，它是一个非常实用且常见的特性，被广泛用于如数据隐藏和封装、模块化编程、回调函数和计时器等许多场景中。</p><h2 id="二、javascript中的闭包" tabindex="-1"><a class="header-anchor" href="#二、javascript中的闭包" aria-hidden="true">#</a> 二、JavaScript中的闭包</h2><p>在JavaScript中，闭包是一个强大而复杂的特性，理解和利用好闭包对于编写高效且安全的代码至关重要。下面就让我们深入地了解一下JavaScript的闭包。</p><p>闭包是指那些能够访问自由变量的函数。什么是自由变量呢？如果一个变量在函数内部被引用，但它既不是函数的参数也不是函数的局部变量，那么就称之为“自由变量”。</p><p>例如，我们有一个外部函数和一个内部函数：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">outerFunction</span><span class="token punctuation">(</span><span class="token parameter">outerVariable</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">innerFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>outerVariable<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> innerFunction<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> inner <span class="token operator">=</span> <span class="token function">outerFunction</span><span class="token punctuation">(</span><span class="token string">&#39;Hello Closure&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">inner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 &#39;Hello Closure&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code>outerFunction</code>是一个外部函数，接受一个参数<code>outerVariable</code>。它包含一个内部函数<code>innerFunction</code>，这个内部函数没有自己的参数或局部变量，但却引用了外部函数的变量<code>outerVariable</code>。所以，我们说<code>innerFunction</code>是一个闭包，而<code>outerVariable</code>就是它的自由变量。</p><p>需要注意的是，由于JavaScript的垃圾回收机制，如果一个变量离开了它的作用域，那么这个变量就会被回收。但是，由于<code>innerFunction</code>是一个闭包，它引用了<code>outerVariable</code>，所以即使<code>outerFunction</code>执行完毕，<code>outerVariable</code>离开了它的作用域，但仍然不会被垃圾回收机制回收。</p><p>再者，每次调用外部函数，都会为内部的闭包创建一个新的作用域。例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> inner1 <span class="token operator">=</span> <span class="token function">outerFunction</span><span class="token punctuation">(</span><span class="token string">&#39;Hello Closure 1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> inner2 <span class="token operator">=</span> <span class="token function">outerFunction</span><span class="token punctuation">(</span><span class="token string">&#39;Hello Closure 2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">inner1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 &#39;Hello Closure 1&#39;</span>
<span class="token function">inner2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 &#39;Hello Closure 2&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，<code>inner1</code>和<code>inner2</code>是两个不同的闭包。他们分别有自己的作用域，储存了不同的<code>outerVariable</code>。</p><h2 id="三、执行上下文与闭包" tabindex="-1"><a class="header-anchor" href="#三、执行上下文与闭包" aria-hidden="true">#</a> 三、执行上下文与闭包</h2><p>在JavaScript中，执行上下文（execution context）是一个关键概念，与闭包（closure）密切相关。理解执行上下文如何与闭包交互可以帮助我们深入理解闭包的工作原理和行为。</p><p>执行上下文是JavaScript代码执行时的环境。它包含了变量、函数声明、作用域链等信息，用于管理和跟踪代码的执行过程。当一个函数被调用时，就会创建一个新的执行上下文。每个执行上下文都有自己的词法环境（Lexical Environment），用于存储变量和函数的声明。</p><p>在理解闭包之前，让我们先了解一下执行上下文的创建和销毁过程。当函数被调用时，会创建一个新的执行上下文，并将其推入执行上下文栈（execution context stack）中。当函数执行完毕后，其执行上下文会从栈中弹出并销毁。</p><p>现在，让我们通过一个例子来更具体地了解执行上下文和闭包之间的关系：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">outerFunction</span><span class="token punctuation">(</span><span class="token parameter">outerVariable</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">innerFunction</span><span class="token punctuation">(</span><span class="token parameter">innerVariable</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;outerVariable:&#39;</span><span class="token punctuation">,</span> outerVariable<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;innerVariable:&#39;</span><span class="token punctuation">,</span> innerVariable<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> innerFunction<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> newFunction <span class="token operator">=</span> <span class="token function">outerFunction</span><span class="token punctuation">(</span><span class="token string">&#39;outside&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">newFunction</span><span class="token punctuation">(</span><span class="token string">&#39;inside&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: outerVariable: outside innerVariable: inside</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，当调用<code>outerFunction</code>时，会创建一个新的执行上下文，其中包含了<code>outerVariable</code>参数和<code>innerFunction</code>函数声明。然后，<code>outerFunction</code>返回了<code>innerFunction</code>，并将其赋值给变量<code>newFunction</code>。</p><p>现在让我们来看看闭包是如何形成的。当<code>innerFunction</code>被返回时，它会携带其词法环境（包含<code>outerVariable</code>）一起返回。这意味着<code>innerFunction</code>保持对<code>outerVariable</code>的引用，即使<code>outerFunction</code>执行完毕并且其执行上下文已经销毁。</p><p>这就是闭包的力量所在。它允许内部函数（<code>innerFunction</code>）访问其词法环境中的变量（<code>outerVariable</code>），即使这些变量在其创建时的执行上下文已经不存在。</p><p>在这个例子中，<code>newFunction</code>就是一个闭包。它引用了外部函数<code>outerFunction</code>的词法环境，其中包含了<code>outerVariable</code>变量。因此，当我们调用<code>newFunction</code>时，它可以访问并打印出<code>outerVariable</code>和<code>innerVariable</code>的值。</p><p>执行上下文和闭包的关系是密不可分的。闭包是由执行上下文中的变量引用形成的，而这些变量保留在闭包的作用域中。这使得闭包能够在函数执行完成后继续访问这些变量，实现了JavaScript中非常重要的特性。</p><p>理解执行上下文和闭包的交互对于编写复杂的JavaScript代码非常重要。它有助于我们更好地理解作用域、变量的生命周期以及如何正确使用闭包来解决问题。同时，它也帮助我们避免一些潜在的问题，如内存泄漏和不必要的资源消耗。</p><h2 id="四、闭包的应用场景" tabindex="-1"><a class="header-anchor" href="#四、闭包的应用场景" aria-hidden="true">#</a> 四、闭包的应用场景</h2><p>闭包在JavaScript中有广泛的应用场景，它是一种强大的编程工具，可以解决许多常见的问题。下面我们来介绍一些常见的闭包应用场景。</p><h3 id="_1-数据封装和私有性" tabindex="-1"><a class="header-anchor" href="#_1-数据封装和私有性" aria-hidden="true">#</a> 1. 数据封装和私有性</h3><p>闭包可以用于创建私有变量，将变量隐藏在函数作用域内部，从而实现数据的封装和私有性。通过闭包，我们可以控制变量的访问权限，只暴露需要暴露的接口。这种封装机制可以防止外部代码直接访问和修改内部数据，增加代码的安全性。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">increment</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">decrement</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      count<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">getCount</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> counter <span class="token operator">=</span> <span class="token function">createCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
counter<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
counter<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>counter<span class="token punctuation">.</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code>createCounter</code>函数返回一个对象，该对象包含了三个闭包函数，分别用于增加计数、减少计数和获取计数值。通过闭包，我们可以将<code>count</code>变量隐藏在函数内部，并通过闭包函数来操作和访问这个变量。</p><h3 id="_2-模块化编程" tabindex="-1"><a class="header-anchor" href="#_2-模块化编程" aria-hidden="true">#</a> 2. 模块化编程</h3><p>闭包可以用于实现模块化编程，将相关的变量和函数组织在一个闭包内部，形成一个模块。这样可以避免全局命名冲突，提供命名空间，并且允许模块内部的函数相互调用和共享数据。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> myModule <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> privateVariable <span class="token operator">=</span> <span class="token string">&#39;私有变量&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">privateFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;私有函数&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">publicMethod</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>privateVariable<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">publicFunction</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">privateFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

myModule<span class="token punctuation">.</span><span class="token function">publicMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 私有变量</span>
myModule<span class="token punctuation">.</span><span class="token function">publicFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 私有函数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们使用了立即调用函数表达式（IIFE）来创建一个闭包，形成一个独立的模块。模块内部的变量和函数对外部是不可见的，只有通过公共接口才能访问。</p><h3 id="_3-回调函数和事件处理" tabindex="-1"><a class="header-anchor" href="#_3-回调函数和事件处理" aria-hidden="true">#</a> 3. 回调函数和事件处理</h3><p>闭包常常用于处理回调函数和事件处理，特别是在异步编程中。由于闭包的特性，它可以捕获外部函数的上下文，并在内部函数被调用时保留这个上下文，从而实现对异步操作的响应。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">callback</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">processData</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console

<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token string">&#39;https://api.example.com/data&#39;</span><span class="token punctuation">,</span> processData<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code>fetchData</code>函数通过闭包捕获了<code>processData</code>函数作为回调函数。当异步操作完成时，它会调用回调函数并传递数据给它。闭包保持了回调函数的上下文，使得回调函数可以访问外部的<code>processData</code>函数。</p><h3 id="_4-缓存和记忆化" tabindex="-1"><a class="header-anchor" href="#_4-缓存和记忆化" aria-hidden="true">#</a> 4. 缓存和记忆化</h3><p>闭包还可以用于实现缓存和记忆化功能。通过闭包，我们可以在函数内部维护一个缓存，避免重复计算相同的结果，提高函数执行的性能。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">memoizedFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> cache <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cache<span class="token punctuation">[</span>arg<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> cache<span class="token punctuation">[</span>arg<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 计算结果</span>
    <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token comment">// ...</span>
    cache<span class="token punctuation">[</span>arg<span class="token punctuation">]</span> <span class="token operator">=</span> result<span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> memoized <span class="token operator">=</span> <span class="token function">memoizedFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">memoized</span><span class="token punctuation">(</span><span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 第一次计算并缓存结果</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">memoized</span><span class="token punctuation">(</span><span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 直接从缓存中读取结果</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code>memoizedFunction</code>返回一个闭包函数，用于记忆化计算结果。闭包内部维护了一个缓存对象<code>cache</code>，当输入相同的参数时，直接从缓存中读取结果，避免重复计算。</p><p>闭包在JavaScript中有许多其他的应用场景，如实现延迟执行、函数柯里化、实现迭代器等。了解闭包的应用场景可以帮助我们写出更加优雅、高效的代码，并利用闭包的强大能力解决问题。</p><h2 id="五、闭包的优缺点" tabindex="-1"><a class="header-anchor" href="#五、闭包的优缺点" aria-hidden="true">#</a> 五、闭包的优缺点</h2><p>当谈到闭包的缺点时，主要涉及内存消耗、内存泄漏和性能影响。下面是一些代码示例，帮助我们理解这些缺点。</p><h3 id="_1-内存消耗" tabindex="-1"><a class="header-anchor" href="#_1-内存消耗" aria-hidden="true">#</a> <strong>1. 内存消耗</strong></h3><p>闭包会导致内存占用增加，因为它们会保留对外部变量的引用，即使外部函数执行完毕。这可能会导致内存占用过高。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createHugeArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">1000000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">&#39;Huge Data&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> bigDataFunc <span class="token operator">=</span> <span class="token function">createHugeArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">bigDataFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 1000000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code>createHugeArray</code>函数返回一个闭包函数，它引用了一个巨大的数组<code>arr</code>。即使<code>createHugeArray</code>执行完毕，<code>arr</code>仍然被闭包引用，无法被垃圾回收机制回收，从而导致内存占用增加。</p><h3 id="_2-内存泄漏" tabindex="-1"><a class="header-anchor" href="#_2-内存泄漏" aria-hidden="true">#</a> <strong>2. 内存泄漏</strong></h3><p>由于闭包会持有对外部变量的引用，如果不正确地处理闭包的使用，可能会导致内存泄漏。如果一个闭包长时间存在，但不再需要，它会一直持有对外部变量的引用，使这些变量无法被垃圾回收。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">leakMemory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token string">&#39;Sensitive Data&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> timer <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">leakMemory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code>leakMemory</code>函数创建了一个闭包，它引用了一个定时器内部的函数。即使<code>leakMemory</code>执行完毕，定时器仍然在持续执行，因此闭包会一直存在并引用<code>data</code>变量，导致<code>data</code>无法被垃圾回收。</p><h3 id="_3-性能影响" tabindex="-1"><a class="header-anchor" href="#_3-性能影响" aria-hidden="true">#</a> <strong>3. 性能影响</strong></h3><p>闭包可能对性能产生一定的影响，特别是在涉及大量变量或复杂词法环境的情况下。闭包的创建和执行可能消耗更多的时间和资源。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">calculate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">1000000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result <span class="token operator">+=</span> i<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> expensiveFunc <span class="token operator">=</span> <span class="token function">calculate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">expensiveFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 499999500000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code>calculate</code>函数返回一个闭包函数，它引用了一个在循环中计算的结果。由于闭包保留了这个结果，闭包的执行可能会耗费更多的时间和资源。</p><p>为了减少闭包的缺点，我们可以采取以下措施：</p><ul><li>优化内存使用：在闭包中避免持有大量数据或不必要的引用。确保只</li></ul><p>保留必要的变量和引用。</p><ul><li>及时清理闭包：在不需要使用闭包时，手动解除对闭包的引用，以便垃圾回收机制可以回收闭包相关的资源。</li><li>避免滥用闭包：只在必要的情况下使用闭包，避免在不必要的场景中使用闭包。</li><li>优化性能：在闭包的创建和使用过程中，尽量避免不必要的计算或资源消耗，以提高性能。</li></ul><p>通过合理使用和处理闭包，我们可以最大限度地减少其缺点，同时享受闭包在JavaScript中带来的强大功能。</p>`,69),c=[e];function o(i,u){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","Javascript执行上下文与闭包.html.vue"]]);export{r as default};

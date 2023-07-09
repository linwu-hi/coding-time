import{_ as t,r as p,o as i,c,a as n,b as s,e,d as o}from"./app-4ff2b8c3.js";const l={},r=o(`<h1 id="解读tsconfig" tabindex="-1"><a class="header-anchor" href="#解读tsconfig" aria-hidden="true">#</a> 解读TSConfig</h1><p>TypeScript 配置文件（tsconfig.json）是用于配置 TypeScript 项目的重要文件。它允许开发者自定义 TypeScript 编译器的行为，指定编译选项、文件包含与排除规则、输出目录等。通过合理配置 tsconfig.json，我们可以根据项目需求进行灵活的 TypeScript 编译设置。</p><p>本文将全面解读 tsconfig.json 的各个配置选项，并提供一些常见的使用场景和示例代码，以及封装定制化自己<code>tsconfig.base</code>配置</p><h2 id="创建和基本配置" tabindex="-1"><a class="header-anchor" href="#创建和基本配置" aria-hidden="true">#</a> 创建和基本配置</h2><p>要使用 TypeScript 配置文件，我们首先需要创建一个名为 <code>tsconfig.json</code> 的文件，并将其放置在项目的根目录下。</p><p>下面是一个基本的 tsconfig.json 配置示例：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es6&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commonjs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;src/**/*.ts&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;node_modules&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;dist&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述示例中，我们使用 <code>compilerOptions</code> 配置选项指定了 TypeScript 编译器的选项。其中：</p><ul><li><code>&quot;target&quot;: &quot;es6&quot;</code> 指定编译的目标 JavaScript 版本为 ES6。</li><li><code>&quot;module&quot;: &quot;commonjs&quot;</code> 指定模块的生成方式为 CommonJS。</li><li><code>&quot;outDir&quot;: &quot;dist&quot;</code> 指定输出目录为 &quot;dist&quot;。</li></ul><p>同时，我们使用 <code>include</code> 和 <code>exclude</code> 配置选项分别指定了需要编译的源文件的包含规则和排除规则。</p><h2 id="compileroptions" tabindex="-1"><a class="header-anchor" href="#compileroptions" aria-hidden="true">#</a> compilerOptions</h2><p><code>compilerOptions</code> 是 tsconfig.json 中最重要的配置选项之一，它允许我们指定 TypeScript 编译器的各种行为和设置。以下是一些常用的 compilerOptions 配置选项：</p><h3 id="target" tabindex="-1"><a class="header-anchor" href="#target" aria-hidden="true">#</a> target</h3><p><code>target</code> 选项指定了编译后的 JavaScript 代码所要遵循的 ECMAScript 标准。常见的选项包括 <code>&quot;es5&quot;</code>、<code>&quot;es6&quot;</code>、<code>&quot;es2015&quot;</code>、<code>&quot;es2016&quot;</code> 等。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es6&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="module" tabindex="-1"><a class="header-anchor" href="#module" aria-hidden="true">#</a> module</h3><p><code>module</code> 选项用于指定生成的模块化代码的模块系统。常见的选项包括 <code>&quot;commonjs&quot;</code>、<code>&quot;amd&quot;</code>、<code>&quot;es2015&quot;</code>、<code>&quot;system&quot;</code> 等。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commonjs&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="outdir" tabindex="-1"><a class="header-anchor" href="#outdir" aria-hidden="true">#</a> outDir</h3><p><code>outDir</code> 选项指定了编译输出的目录路径。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="strict" tabindex="-1"><a class="header-anchor" href="#strict" aria-hidden="true">#</a> strict</h3><p><code>strict</code> 选项用于启用严格的类型检查和更严格的编码规范。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lib" tabindex="-1"><a class="header-anchor" href="#lib" aria-hidden="true">#</a> lib</h3><p><code>lib</code> 选项用于指定 TypeScript 编译器可以使用的 JavaScript 标准库的列表。默认情况下，</p><p>TypeScript 编译器会根据目标版本自动选择合适的库。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;lib&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;es6&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dom&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sourcemap" tabindex="-1"><a class="header-anchor" href="#sourcemap" aria-hidden="true">#</a> sourceMap</h3><p><code>sourceMap</code> 选项用于生成与源代码对应的源映射文件（.map 文件），以便在调试过程中可以将编译后的 JavaScript 代码映射回原始 TypeScript 代码。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;sourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="paths" tabindex="-1"><a class="header-anchor" href="#paths" aria-hidden="true">#</a> paths</h3><p><code>paths</code> 选项用于配置模块解析时的路径映射，可以帮助我们简化模块导入的路径。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;@/*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;src/*&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="allowjs" tabindex="-1"><a class="header-anchor" href="#allowjs" aria-hidden="true">#</a> allowJs</h3><p><code>allowJs</code> 选项允许在 TypeScript 项目中引入 JavaScript 文件，使得我们可以混合使用 TypeScript 和 JavaScript。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;allowJs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="esmoduleinterop-和-allowsyntheticdefaultimports" tabindex="-1"><a class="header-anchor" href="#esmoduleinterop-和-allowsyntheticdefaultimports" aria-hidden="true">#</a> esModuleInterop 和 allowSyntheticDefaultImports</h3><p><code>esModuleInterop</code> 属性用于提供对 ES 模块的兼容性支持。当我们在 TypeScript 项目中引入 CommonJS 模块时，可以通过设置 <code>esModuleInterop</code> 为 <code>true</code> 来避免引入时的错误。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es5&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commonjs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lib&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;es6&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dom&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rootDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;src&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;esModuleInterop&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;allowSyntheticDefaultImports&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，我们设置了 <code>esModuleInterop</code> 和 <code>allowSyntheticDefaultImports</code> 属性为 true，以支持对 ES 模块的兼容性导入。</p>`,41),d=n("code",null,"compilerOptions",-1),u={href:"https://www.typescriptlang.org/tsconfig#compiler-options",target:"_blank",rel:"noopener noreferrer"},v=o(`<h2 id="include-和-exclude" tabindex="-1"><a class="header-anchor" href="#include-和-exclude" aria-hidden="true">#</a> include 和 exclude</h2><p><code>include</code> 和 <code>exclude</code> 配置选项用于指定哪些文件应该包含在编译过程中，以及哪些文件应该排除在编译过程之外。</p><p><code>include</code> 是一个文件或者文件夹的数组，用于指定需要编译的文件或文件夹的路径模式。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token string">&quot;src/**/*.ts&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;test/**/*.ts&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>exclude</code> 是一个文件或者文件夹的数组，用于指定需要排除的文件或文件夹的路径模式。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token string">&quot;node_modules&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;dist&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述示例中，我们将 <code>src</code> 文件夹和 <code>test</code> 文件夹下的所有 TypeScript 文件包含在编译过程中，并排除了 <code>node_modules</code> 文件夹和 <code>dist</code> 文件夹。</p><h2 id="文件引用和-composite" tabindex="-1"><a class="header-anchor" href="#文件引用和-composite" aria-hidden="true">#</a> 文件引用和 composite</h2><p><code>files</code> 配置选项允许我们显式列出需要编译的文件路径。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token string">&quot;src/main.ts&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;src/utils.ts&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>composite</code> 配置选项用于启用 TypeScript 的项目引用功能，允许我们将一个 TypeScript 项目作为另一个项目的依赖。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;composite&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="declaration" tabindex="-1"><a class="header-anchor" href="#declaration" aria-hidden="true">#</a> declaration</h2><p><code>declaration</code> 配置选项用于生成声明文件（.d.ts 文件），它们包含了编译后 JavaScript 代码的类型信息。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;declaration&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="tsconfig-json-继承" tabindex="-1"><a class="header-anchor" href="#tsconfig-json-继承" aria-hidden="true">#</a> tsconfig.json 继承</h2><p>TypeScript 支持通过 <code>extends</code> 配置选项从其他的 tsconfig.json 文件中继承配置。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./tsconfig.base.json&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;src/**/*.ts&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述示例中，我们通过 <code>extends</code> 指定了一个基础配置文件 <code>tsconfig.base.json</code>，然后在当前的 <code>tsconfig.json</code> 中添加了额外的编译选项和文件包含规则。</p><h2 id="定制化tsconfig-base" tabindex="-1"><a class="header-anchor" href="#定制化tsconfig-base" aria-hidden="true">#</a> 定制化tsconfig.base</h2><p>制化tsconfig.base可以让我们在多个项目中共享和复用配置，提高开发效率。下面是一些步骤来封装自己的 TSConfig 为一个库：</p><p>首先，我们需要创建一个新的 TypeScript 项目作为我们的库项目。可以使用以下命令初始化一个新的项目：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">mkdir</span> my-tsconfig-lib
$ <span class="token builtin class-name">cd</span> my-tsconfig-lib
$ <span class="token function">npm</span> init <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-创建-tsconfig-json-文件" tabindex="-1"><a class="header-anchor" href="#_2-创建-tsconfig-json-文件" aria-hidden="true">#</a> 2. 创建 tsconfig.json 文件</h3><p>在项目根目录下创建一个名为 <code>tsconfig.json</code> 的文件，并将 TSConfig 的配置内容添加到其中。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es6&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commonjs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;src/**/*.ts&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;node_modules&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是一个示例的 TSConfig 配置，你可以根据自己的需求进行相应的修改。</p><h3 id="_3-创建包入口文件" tabindex="-1"><a class="header-anchor" href="#_3-创建包入口文件" aria-hidden="true">#</a> 3. 创建包入口文件</h3><p>为了能够在其他项目中使用我们的库，我们需要创建一个入口文件来导出我们的 TSConfig。</p><p>在项目根目录下创建一个名为 <code>index.ts</code> 的文件，并添加以下代码：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> tsconfig <span class="token keyword">from</span> <span class="token string">&#39;./tsconfig.json&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> tsconfig<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述代码中，我们将 <code>tsconfig.json</code> 导入为一个模块，并使用 <code>export default</code> 将其导出。</p><h3 id="_4-构建和发布" tabindex="-1"><a class="header-anchor" href="#_4-构建和发布" aria-hidden="true">#</a> 4. 构建和发布</h3><p>现在我们可以使用 TypeScript 编译器将我们的代码构建为 JavaScript，以便在其他项目中使用。</p><p>首先，确保你已经在项目中安装了 TypeScript：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> typescript --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后，在 <code>package.json</code> 中添加构建脚本：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tsc&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，运行构建命令进行构建：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>构建完成后，我们的库文件</p><p>将位于 <code>dist</code> 目录下。</p><h3 id="_5-发布到-npm" tabindex="-1"><a class="header-anchor" href="#_5-发布到-npm" aria-hidden="true">#</a> 5. 发布到 NPM</h3><p>要将我们的 TSConfig 封装为一个库，并使其可供其他项目使用，我们可以将其发布到 NPM。</p><p>首先，创建一个 NPM 账号，并登录到 NPM：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> login
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后，在项目根目录下运行以下命令发布库：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> publish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>发布成功后，我们的 TSConfig 库就可以在其他项目中使用了。</p><h3 id="_6-在其他项目中使用" tabindex="-1"><a class="header-anchor" href="#_6-在其他项目中使用" aria-hidden="true">#</a> 6. 在其他项目中使用</h3><p>在其他项目中使用我们的 TSConfig 库非常简单。首先，在目标项目中安装我们的库：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> my-tsconfig-lib --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后，在目标项目的 <code>tsconfig.json</code> 文件中使用我们的 TSConfig：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-tsconfig-lib&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 <code>extends</code> 配置选项，我们可以继承和使用我们的 TSConfig。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>通过 tsconfig.json 文件，我们可以配置 TypeScript 编译器的行为，包括编译选项、文件包含与排除规则、输出目录等。合理配置 tsconfig.json 可以帮助我们根据项目需求进行灵活的 TypeScript 编译设置。</p>`,57),m={href:"https://www.typescriptlang.org/tsconfig",target:"_blank",rel:"noopener noreferrer"};function k(b,g){const a=p("ExternalLinkIcon");return i(),c("div",null,[r,n("p",null,[s("更多的 "),d,s(" 配置选项可以参考 TypeScript 官方文档："),n("a",u,[s("Compiler Options"),e(a)]),s(".")]),v,n("p",null,[s("详细的 TypeScript 配置文件的参考信息可以在 TypeScript 官方文档中找到："),n("a",m,[s("tsconfig.json"),e(a)])])])}const q=t(l,[["render",k],["__file","解读TSConfig.html.vue"]]);export{q as default};

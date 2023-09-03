import{_ as e,r as p,o,c,a as n,b as a,e as t,d as l}from"./app-2477bd15.js";const i="/assets/trie-3771b3bb.jpg",u={},r=l('<h1 id="字典树" tabindex="-1"><a class="header-anchor" href="#字典树" aria-hidden="true">#</a> 字典树</h1><p>在计算机科学中, <strong>字典树(trie,中文又被称为”单词查找树“或 ”键树“)</strong>, 也称为数字树,有时候也被称为基数树或前缀树（因为它们可以通过前缀搜索）,它是一种搜索树--一种已排序的数据结构,通常用于存储动态集或键为字符串的关联数组。</p><p>与二叉搜索树不同, 树上没有节点存储与该节点关联的键; 相反,节点在树上的位置定义了与之关联的键。一个节点的全部后代节点都有一个与该节点关联的通用的字符串前缀, 与根节点关联的是空字符串。</p><p>值对于字典树中关联的节点来说,不是必需的,相反,值往往和相关的叶子相关,以及与一些键相关的内部节点相关。</p><p>有关字典树的空间优化示意,请参阅紧凑前缀树</p><figure><img src="'+i+`" alt="Trie" tabindex="0" loading="lazy"><figcaption>Trie</figcaption></figure><h2 id="trienode" tabindex="-1"><a class="header-anchor" href="#trienode" aria-hidden="true">#</a> TrieNode</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> HashTable <span class="token keyword">from</span> <span class="token string">&#39;../hash-table/HashTable&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">TrieNode</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">character</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span> <span class="token parameter">isCompleteWord</span>
   */</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">character<span class="token punctuation">,</span> isCompleteWord <span class="token operator">=</span> <span class="token boolean">false</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>character <span class="token operator">=</span> character<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>isCompleteWord <span class="token operator">=</span> isCompleteWord<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashTable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">character</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TrieNode<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">getChild</span><span class="token punctuation">(</span><span class="token parameter">character</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>character<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">character</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span> <span class="token parameter">isCompleteWord</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TrieNode<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">addChild</span><span class="token punctuation">(</span><span class="token parameter">character<span class="token punctuation">,</span> isCompleteWord <span class="token operator">=</span> <span class="token boolean">false</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>character<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>character<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">TrieNode</span><span class="token punctuation">(</span>character<span class="token punctuation">,</span> isCompleteWord<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> childNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>character<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// In cases similar to adding &quot;car&quot; after &quot;carpet&quot; we need to mark &quot;r&quot; character as complete.</span>
    childNode<span class="token punctuation">.</span>isCompleteWord <span class="token operator">=</span> childNode<span class="token punctuation">.</span>isCompleteWord <span class="token operator">||</span> isCompleteWord<span class="token punctuation">;</span>

    <span class="token keyword">return</span> childNode<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">character</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TrieNode<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">removeChild</span><span class="token punctuation">(</span><span class="token parameter">character</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> childNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getChild</span><span class="token punctuation">(</span>character<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Delete childNode only if:</span>
    <span class="token comment">// - childNode has NO children,</span>
    <span class="token comment">// - childNode.isCompleteWord === false.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      childNode
      <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>childNode<span class="token punctuation">.</span>isCompleteWord
      <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>childNode<span class="token punctuation">.</span><span class="token function">hasChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>character<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">character</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">hasChild</span><span class="token punctuation">(</span><span class="token parameter">character</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>character<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * Check whether current TrieNode has children or not.
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">hasChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">getKeys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">suggestChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">getKeys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> childrenAsString <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">suggestChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    childrenAsString <span class="token operator">=</span> childrenAsString <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>childrenAsString<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> isCompleteString <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>isCompleteWord <span class="token operator">?</span> <span class="token string">&#39;*&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>character<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>isCompleteString<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>childrenAsString<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="trie" tabindex="-1"><a class="header-anchor" href="#trie" aria-hidden="true">#</a> Trie</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> TrieNode <span class="token keyword">from</span> <span class="token string">&#39;./TrieNode&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// Character that we will use for trie tree root.</span>
<span class="token keyword">const</span> <span class="token constant">HEAD_CHARACTER</span> <span class="token operator">=</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Trie</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TrieNode</span><span class="token punctuation">(</span><span class="token constant">HEAD_CHARACTER</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">word</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Trie<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">addWord</span><span class="token punctuation">(</span><span class="token parameter">word</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> characters <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> charIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> charIndex <span class="token operator">&lt;</span> characters<span class="token punctuation">.</span>length<span class="token punctuation">;</span> charIndex <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> isComplete <span class="token operator">=</span> charIndex <span class="token operator">===</span> characters<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>characters<span class="token punctuation">[</span>charIndex<span class="token punctuation">]</span><span class="token punctuation">,</span> isComplete<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">word</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Trie<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">deleteWord</span><span class="token punctuation">(</span><span class="token parameter">word</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">depthFirstDelete</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">currentNode<span class="token punctuation">,</span> charIndex <span class="token operator">=</span> <span class="token number">0</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>charIndex <span class="token operator">&gt;=</span> word<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Return if we&#39;re trying to delete the character that is out of word&#39;s scope.</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">const</span> character <span class="token operator">=</span> word<span class="token punctuation">[</span>charIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> nextNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span><span class="token function">getChild</span><span class="token punctuation">(</span>character<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>nextNode <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Return if we&#39;re trying to delete a word that has not been added to the Trie.</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// Go deeper.</span>
      <span class="token function">depthFirstDelete</span><span class="token punctuation">(</span>nextNode<span class="token punctuation">,</span> charIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// Since we&#39;re going to delete a word let&#39;s un-mark its last character isCompleteWord flag.</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>charIndex <span class="token operator">===</span> <span class="token punctuation">(</span>word<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        nextNode<span class="token punctuation">.</span>isCompleteWord <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// childNode is deleted only if:</span>
      <span class="token comment">// - childNode has NO children</span>
      <span class="token comment">// - childNode.isCompleteWord === false</span>
      currentNode<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>character<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// Start depth-first deletion from the head node.</span>
    <span class="token function">depthFirstDelete</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">word</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">suggestNextCharacters</span><span class="token punctuation">(</span><span class="token parameter">word</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> lastCharacter <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getLastCharacterNode</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>lastCharacter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> lastCharacter<span class="token punctuation">.</span><span class="token function">suggestChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * Check if complete word exists in Trie.
   *
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">word</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">doesWordExist</span><span class="token punctuation">(</span><span class="token parameter">word</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> lastCharacter <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getLastCharacterNode</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token operator">!</span><span class="token operator">!</span>lastCharacter <span class="token operator">&amp;&amp;</span> lastCharacter<span class="token punctuation">.</span>isCompleteWord<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">word</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TrieNode<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">getLastCharacterNode</span><span class="token punctuation">(</span><span class="token parameter">word</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> characters <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> charIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> charIndex <span class="token operator">&lt;</span> characters<span class="token punctuation">.</span>length<span class="token punctuation">;</span> charIndex <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>currentNode<span class="token punctuation">.</span><span class="token function">hasChild</span><span class="token punctuation">(</span>characters<span class="token punctuation">[</span>charIndex<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span><span class="token function">getChild</span><span class="token punctuation">(</span>characters<span class="token punctuation">[</span>charIndex<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> currentNode<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,11),d={href:"https://en.wikipedia.org/wiki/Trie",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.youtube.com/watch?v=zIjfhVPRZCg&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=7&t=0s",target:"_blank",rel:"noopener noreferrer"};function v(m,b){const s=p("ExternalLinkIcon");return o(),c("div",null,[r,n("ul",null,[n("li",null,[n("a",d,[a("Wikipedia"),t(s)])]),n("li",null,[n("a",k,[a("YouTube"),t(s)])])])])}const w=e(u,[["render",v],["__file","index.html.vue"]]);export{w as default};

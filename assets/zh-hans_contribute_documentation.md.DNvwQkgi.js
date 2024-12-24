import{_ as a,c as i,a2 as e,o as n}from"./chunks/framework.BQmytedh.js";const c=JSON.parse('{"title":"文档 & 网站","description":"","frontmatter":{},"headers":[],"relativePath":"zh-hans/contribute/documentation.md","filePath":"zh-hans/contribute/documentation.md","lastUpdated":1687069487000}'),t={name:"zh-hans/contribute/documentation.md"};function l(p,s,h,k,d,r){return n(),i("div",null,s[0]||(s[0]=[e(`<h1 id="文档-网站" tabindex="-1">文档 &amp; 网站 <a class="header-anchor" href="#文档-网站" aria-label="Permalink to &quot;文档 &amp; 网站&quot;">​</a></h1><p>文档 &amp; 网站贡献指南。</p><h2 id="初始化设置" tabindex="-1">初始化设置 <a class="header-anchor" href="#初始化设置" aria-label="Permalink to &quot;初始化设置&quot;">​</a></h2><p>在 Github 上 fork <code>asdf</code> 并且/或者使用 Git 克隆默认分支：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 克隆你 fork 的 asdf</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">GITHUB_USE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">R</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/asdf.git</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 或者直接克隆 asdf</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/asdf-vm/asdf.git</span></span></code></pre></div><p>文档网站开发所需的工具都在文件 <code>docs/.tool-versions</code> 中使用 <code>asdf</code> 进行管理。使用以下命令添加插件：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> plugin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nodejs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/asdf-vm/asdf-nodejs</span></span></code></pre></div><p>使用以下命令安装工具版本：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div><ul><li><a href="https://nodejs.org/zh-cn/" target="_blank" rel="noreferrer">Node.js</a>：基于 Chrome 的 V8 引擎的 JavaScript 运行环境。</li></ul><p>根据 <code>docs/package.json</code> 文件安装 Node.js 依赖：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div><h2 id="开发" tabindex="-1">开发 <a class="header-anchor" href="#开发" aria-label="Permalink to &quot;开发&quot;">​</a></h2><p><a href="https://v2.vuepress.vuejs.org/zh/" target="_blank" rel="noreferrer">Vuepress (v2)</a> 是我们用来构建 asdf 文档网站的静态站点生成器（SSG）。它被选中来取代 <a href="https://docsify.js.org/#/zh-cn/" target="_blank" rel="noreferrer">Docsify.js</a>，因为我们希望在用户没有可用或未启用 JavaScript 时支持仅依靠 HTML。Docsify 无法做到这一点。除此之外，两者特性集合大致相同，重点是 Vuepress 可以用最少的配置编写 Markdown 文件。</p><p><code>package.json</code> 包含了开发所需的脚本：</p><p>@<a href="../../package.json">code json{3-5}</a></p><p>启动本地开发服务器：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre></div><p>在提交之前格式化代码：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> format</span></span></code></pre></div><h2 id="拉取请求、发布以及约定式提交" tabindex="-1">拉取请求、发布以及约定式提交 <a class="header-anchor" href="#拉取请求、发布以及约定式提交" aria-label="Permalink to &quot;拉取请求、发布以及约定式提交&quot;">​</a></h2><p><code>asdf</code> 正在使用依赖 PR 标题中的约定式提交的自动化发布流水线。具体的文档可以查看 <a href="./core.html">核心贡献指南</a>.</p><p>当为文档更改创建 PR 请求时，请确保 PR 标题使用了约定式提交类型 <code>docs</code> 以及 <code>docs: &lt;description&gt;</code> 的格式。</p><h2 id="vuepress" tabindex="-1">Vuepress <a class="header-anchor" href="#vuepress" aria-label="Permalink to &quot;Vuepress&quot;">​</a></h2><p>网站的配置包含在几个 JavaScript 文件中，其中 JS 对象用于表示配置。它们是：</p><ul><li><code>docs/.vuepress/config.js</code>：网站的根配置文件。请查看 <a href="https://v2.vuepress.vuejs.org/zh/guide/configuration.html" target="_blank" rel="noreferrer">Vuepress 文档</a> 了解更多详情。</li></ul><p>为了简化根配置文件，更大的 JS 对象表示 <em>导航栏和侧边栏</em> 配置已经被提取并按照语言类型分隔开来。请参考以下文件：</p><ul><li><code>docs/.vuepress/navbar.js</code></li><li><code>docs/.vuepress/sidebar.js</code></li></ul><p>这些配置的官方文档位于 <a href="https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html" target="_blank" rel="noreferrer">默认主题参考</a>。</p><h2 id="i18n-国际化" tabindex="-1">I18n 国际化 <a class="header-anchor" href="#i18n-国际化" aria-label="Permalink to &quot;I18n 国际化&quot;">​</a></h2><p>Vuepress 有一流的国际化支持。根配置文件 <code>docs/.vuepress/config.js</code> 定义了支持的语言类型及其 URL、在选择下拉菜单中的标题以及导航栏/侧边栏配置引用。</p><p>导航栏/侧边栏配置在上述配置文件中捕获，按语言类型分隔开并单独导出。</p><p>每种语言的 markdown 内容必须位于与根配置文件中 <code>locale</code> 键同名的目录位置。也就是：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  themeConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    locales</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        selectLanguageName: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;English (US)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        sidebar: sidebar.en,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        navbar: navbar.en</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;/pt-BR/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        selectLanguageName: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Brazilian Portuguese&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        sidebar: sidebar.pt_br,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        navbar: navbar.pt_br</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><code>/pt-BR/</code> 将要求 markdown 文件的同一集合位于 <code>docs/pt-BR/</code> 目录下，如下所示：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docs</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> README.md</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> foo.md</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nested</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> README.md</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pt-BR</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> README.md</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> foo.md</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nested</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> README.md</span></span></code></pre></div><p>请查看 <a href="https://v2.vuepress.vuejs.org/zh/guide/i18n.html#%E7%AB%99%E7%82%B9%E5%A4%9A%E8%AF%AD%E8%A8%80%E9%85%8D%E7%BD%AE" target="_blank" rel="noreferrer">Vuepress i18n 国际化官方文档</a> 了解更多详情。</p>`,37)]))}const g=a(t,[["render",l]]);export{c as __pageData,g as default};

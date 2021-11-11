<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="Agricultural_Units_Converter__0"></a>Agricultural Units Converter 🌽</h1>
<p class="has-line-data" data-line-start="3" data-line-end="4">The purpose of this appplication is to provide a simple interface for farmers and software developers to make conversions between different units of measurement.</p>
<h2 class="code-line" data-line-start=5 data-line-end=6 ><a id="Features_5"></a>Features</h2>
<ul>
<li class="has-line-data" data-line-start="7" data-line-end="8">Convert kilograms to pounds</li>
<li class="has-line-data" data-line-start="8" data-line-end="9">Convert hectares to acres</li>
<li class="has-line-data" data-line-start="9" data-line-end="12">Convert kilograms of product per hectare to bushels of product per hectare. Products supported:
<ul>
<li class="has-line-data" data-line-start="10" data-line-end="12">Corn and soy</li>
</ul>
</li>
</ul>
<h2 class="code-line" data-line-start=12 data-line-end=13 ><a id="Installation_12"></a>Installation</h2>
<p class="has-line-data" data-line-start="14" data-line-end="15">Make sure you have npm and docker installed.</p>
<p class="has-line-data" data-line-start="16" data-line-end="17">First, clone the repository and cd to the directory. 👯</p>
<pre><code class="has-line-data" data-line-start="18" data-line-end="20" class="language-sh">git <span class="hljs-built_in">clone</span>
</code></pre>
<pre><code class="has-line-data" data-line-start="21" data-line-end="23" class="language-sh"><span class="hljs-built_in">cd</span> AgriculturalUnitsConverter/
</code></pre>
<p class="has-line-data" data-line-start="23" data-line-end="24">Install Typescript</p>
<pre><code class="has-line-data" data-line-start="25" data-line-end="27" class="language-sh">npm install typescript
</code></pre>
<p class="has-line-data" data-line-start="27" data-line-end="28">Next, build the docker image. 🐳</p>
<pre><code class="has-line-data" data-line-start="29" data-line-end="31" class="language-sh">docker build . --tag app
</code></pre>
<p class="has-line-data" data-line-start="31" data-line-end="32">Build the image in a container. 🥡</p>
<pre><code class="has-line-data" data-line-start="33" data-line-end="35" class="language-sh">docker run app
</code></pre>
<p class="has-line-data" data-line-start="35" data-line-end="36">Navigate to the file location of the project in your browser.</p>
<pre><code class="has-line-data" data-line-start="37" data-line-end="39" class="language-sh">file:///Users/[me]/path/to/project/AgriculturalUnitsConverter/index.html
</code></pre>
<h2 class="code-line" data-line-start=43 data-line-end=44 ><a id="Test_43"></a>Test</h2>
<p class="has-line-data" data-line-start="44" data-line-end="45">Run this command to run Jest tests for the utility functions.</p>
<pre><code class="has-line-data" data-line-start="46" data-line-end="48" class="language-sh">npm <span class="hljs-built_in">test</span>
</code></pre>

# webpack-boilerplate

A boilerplate webpack template for a custom project. This starter theme includes : 
- HMR : Hot module reloading
- Uglify plugin
- Assets optimisation plugin
- Webpack dashboard
- Dev and Prod environment

<h2>Usage</h2>
If you have node and npm installed, please do it from the official web site.


1- Install dependencies
<pre> $ git init && git clone https://github.com/lalainarahajason/webpack-template.git && npm install </pre>

2- Run your server, the HMR (Hot Module Reload) but no file is minified
<div class="highlight highlight-source-shell">
  <pre>$ npm run start</pre>
</div>

3- Run development environment without HMR nor minification server
<div class="highlight highlight-source-shell">
  <pre>$ npm run dev</pre>
</div>

4- Run production environment, without HMR
<div class="highlight highlight-source-shell">
  <pre>$ npm run prod</pre>
</div>

# babel  
Babel 是一个工具链，主要用于在旧的浏览器或环境中将 ECMAScript 2015+ 代码转换为向后兼容版本的 JavaScript 代码。
## .babelrc有什么用
.babelrc是配置文件，可以是babel.config.js、.babelrc、.babelrc.js，也可以在package.json中配置。
## presets是什么
babel是通过插件来编译的，presets是插件的集合，方便配置
## Polyfill有什么用
Polyfill运行时适配目标环境中缺少的功能  
## cli怎么用
npm install --save-dev @babel/core @babel/cli  
babel script.js --out-file script-compiled.js
babel src --out-dir lib  
babel src --out-dir lib --watch         一旦文件变化就立即编译  
babel src --out-dir lib --source-maps   增加一个source map文件
## 怎么做代码分析  
### 

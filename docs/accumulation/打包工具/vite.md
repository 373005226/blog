---
  title: vite
  categories: 打包工具 
---

## vite

### 打包工具的区别

vite 不同于 Webpack 和 Rollup ， 本身不参与编译。vite 的编译能力源自于 ES6 和 Rollup  ，只是集成了 Rollup 的功能和启动了 dev server 在中间进行串联去管理模块的图谱来监听文件的更新来进行 HMR 的推送 。

Webpack 打包的话，希望把可以所有可以考虑加载的东西全部加载进去，也希望核心功能可以帮助其他的功能来实现，比如说可以基于 Webpack 来实现一个 Webpack dev-server 。

而 Rollup 是一个专注于编译 ESM Module ，同时也是专注于 build 的 JavaScript 代码，而不考虑平台的工具。

对于 webpack 来说打包出来的代码会包含关于 webpack 的工具函数来帮助我们加载模块。比如在浏览器要 import 另外一个模块的时候，要通过 script 标签来引入 js 文件，然后执行一个回调函数来把这个模块加载完成。

Rollup 不会，Rollup 会遵循一个 ESM 的标准，编译出来的代码就符合 CommonJS 或者是 UMD 标准的代码，不会有自己的工具函数在里面。因为 Rollup 的目标是面向于工具类库等 JavaScript 代码的打包而使用的，并不是为了项目而去服务的。

Vite 的面相目标是项目的工程，不用开发者去过多向 Webpack 一样弄那么多配置项，没有各类的 loader ，基本要的功能都已经内置了，但是 Vite 也是通过插件的形式去做的，只不过是提前预设好了，达到了开箱即用的功能。

并且 Vite 可以兼容 Rollup 的插件，不用从新构建生态。并且 Vite 把 Rollup 很多插件都内置了

### 开发

Vite 在开发环境下是完全基于 ESM 加载方式来开发的。

代码量多的时候 Webpack 的编译会非常的慢，而 Vite 不会显著的降低。

webpack 会把所有的文件去打包成一个 Bundle，这个过程是很慢的。

Vite 启动的时候就根本没有去编译，只是做了一次预编译，需要提前编译的文件才去做一次预编译，真正开发的时候，再去根据文件里面的各种 `import ** from '**'` 等去加载文件，然后再进行实时编译，快的另外一个原因是是使用了 EsBuild 这个工具进行文件的编译

Vite 初始化项目是默认没有 ESLint 的校验的，其他如果是 Vue cli 项目创建的话，Webpack 会默认加上 ES6 的 Loader 的功能去实现的，但是 Vite 是不支持的

Webpack 的编译入口是一个 js 文件来的，而 Vite 的入口是一个 html 的文件 ，通过 html 文件的 script 标签去加载 main.js 文件

如果在 Vue 或者是 React 里面使用 jsx 文件的话，index.html 的 script 引入的 jxs 文件也是可以解析的，因为 vite 内部会启动一个 server 浏览器访问 index.jsx 文件的时候 vite 会对文件进行解析，返回 JavaScript 代码给浏览器进行识别

## 对 CSS 的支持

vite 推荐的是使用原生的 css variable ，vite 内部集成了 postcss 的功能，会通过 postcss 来进行编译。

最新的 css3 语法也可以像 less 和 scss 一样可以定义变量

## css modules

对于建立 css 文件，可以使用 css modules 方式来创建就可以自动的重命名来解决命名冲突了

例如： `style.module.css`，只需要加 `.module` 

## HMR API

Vite 有自己去实现的 HMR 的 API ，Rollup 并没有特别好的去提供 HMR API ，毕竟 Rollup 是面向类库的打包工具
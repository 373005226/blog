---
title: ESModule
categories: 前端
---

## 前言

最近火热的 Vite 提到了 ESModule ESModule 其实是在浏览器内，不需要 Webpack 等工具的打包也可以使用 import 命令，如下

```js
<script type="module">
  import A from './A.js'

  console.log(A)
</script>
```

只需要在 script 标签内使用 `type="module` 就可以表示这个文件是作为 `module` 的方式执行的

## 优雅降级

如果碰到不支持 ESModule 的浏览器的话，需要在 script 加上 `nomodule` 标签来实现回退方案

```js
<script type="module">
  import A from './A.js'
</script>
<script nomodule>
  alert('你的浏览器不支持Es Modules! 请更新浏览器版本')
</script>
```

## 与 Webpack 的不同

根 Webpack 版本还是有区别的

### module 路径定义

因为是在浏览器端的，不会在 `node` 端有全局 `module` ，在浏览器全局的对象是 `window` ，所以 import 的 from 后面跟的路径是有差别的，所以如果是使用 vite ，使用别名的时候一定要使用 `path.resolve(__dirname, "文件名")`，而不是跟 webpack 一样把文件都打包在一起，然后使用 from 相对路径

### module 的文件会默认加上 defer

这是 script 的另一个属性，用来将文件标识为不会阻塞页面渲染的文件，并且会在页面加载完成后按照文档的顺序进行执行。带有 defer 脚本会被延迟到整个页面都解析完毕后再运行。

但是需要注意，defer 属性只对于在 html 文件最底部的 script 标签有效，对于在 html 文件头部的 script 加上 defer 是无效的，但是加上 `type="module"` 而言无论 script 标签放在哪里都会有 defer 的特性

### 可以对 module 的文件加上 async

async 可以作用于位于 html 文件所有位置的 script 脚本， async 关键字的意思是渲染到这个脚本的时候，可以让这个脚本往后执行。即可以让浏览器先异步执行其他的脚本，最后再去执行带有 async 的脚本


> 参考文章
>
> [原生 ES-Module 在浏览器中的尝试](https://juejin.cn/post/6844903618621997070#heading-3)
>
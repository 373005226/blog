---
title: AMD 规范
---

## 为什么会出现 require.js

AMD 规范的写法也是必然产生的，初学的时候肯定会有这样的代码

```js
<script src="1.js"></script>　　
<script src="2.js"></script>　　
<script src="3.js"></script>　　
<script src="4.js"></script>　
<script src="5.js"></script>　　
<script src="6.js"></script>
```

这样加载的顺序会从 `1.js` 按照顺序加载到 `6.js` ，那么如果 `1.js` 有些东西是后面模块加载的话，那么 `1.js` 的这部分代码就会失效

并且按照顺序同步加载会让浏览器响应时间变的很长，其次也必须保证 js 文件之间加载顺序的正确

require.js 的出现解决了这个问题

（1） 使得文件可以异步加载（2） 管理模块之间的依赖性，使得维护变得简单

## 使用 require.js

需要使用 require.js , 直接去官网下载最新的文件并且引入即可

```js
<script src="js/require.js"></script>
```

有人可能会想到，加载这个文件，也可能造成网页失去响应。解决办法有两个:

1. 放在 html 文件的底部
2. 使用异步加载`<script src="js/require.js" defer async="true" ></script>`

使用 async 的原因是让浏览器异步加载这个文件，但是 IE 浏览器不支持这个属性，只支持 defer，所以要加载 defer 做兼容

使用方法如下:

```js
<script src="js/require.js" data-main="js/main"></script>
```

> data-main 属性的作用是，指定网页程序的主模块
>
> 在上例中，就是 js 目录下面的 main.js，这个文件会第一个被 require.js 加载。由于 require.js 默认的文件后缀名是 js，所以可以把 main.js 简写成 main。

## 主要模块的写法

主模块就是程序的入口，如果 main.js 不依赖于其他的模块的话，那么也没必要使用 AMD 的 require.js 函数了

通常主模块需要依赖于其他的模块

```js
// main.js
require(['moduleA', 'moduleB', 'moduleC'], function(moduleA, moduleB, moduleC) {
  doSomething();
});
```

上面代码块的意思是依赖 moduleA、moduleB、moduleC 三个模块后，再执行回调函数

## 模块的加载

如果具体一点说的话，假如是要依赖 'jquery', 'underscore', 'backbone' 三个模块的话，即

```js
require(['jquery', 'underscore', 'backbone'], function($, _, backbone) {
  doSomething();
});
```

如果是使用 npm 下载的话，那么不需要去管理路径，但如果是下载文件去加载的话，就需要加载路径

可以使用 require.config() 方法，可以对模块的加载进行自定义，如下

```js
require.config({
  paths: {
    jquery: 'js/lib/jquery.min',
    underscore: 'js/lib/underscore.min',
    backbone: 'js/lib/backbone.min',
  },
});
```

或者如果三个路径都是一样的话，可以如下写法

```js
require.config({
  baseUrl: 'js/lib',
  paths: { jquery: 'jquery.min', underscore: 'underscore.min', backbone: 'backbone.min' },
});
```

## AMD 模块的写法

AMD 模块具体的写法就是，如果一个模块不依赖于其他的模块，那么可以直接定义在 defind() 之中

假如这里自定义一个名为 math.js 的文件，里面不依赖于任何的模块，那么写法如下:

```js
// main.js
define(function() {
  var add = function(x, y) {
    return x + y;
  };
  return {
    add: add,
  };
});
```

需要加载这个模块的代码如下:

```js
// main.js
require(['math'], function(math) {
  alert(math.add(1, 1));
});
```

但如果 math.js 需要依赖于其他的模块，那么写法如下:

```js
define(['otherLib'], function(myLib) {
  function foo() {
    myLib.doSomething();
  }
  return {
    foo: foo,
  };
});
```

第一个参数必须为数组，数组里面的就是所以依赖的模块,那么其他模块如果使用了 math.js ，那么就会先加载 otherLib

## 加载非规范的模块

从理论上讲，require.js 只支持加载 AMD 规范的模块，但是并不是所有的库都符合 AMD 规范

如果要用到这些模块的话，就需要在 `require.config()` 方法定义他们的特征

举个例子: underscore 和 backbone 这两个库，都没有采用 AMD 规范编写,如果要使用他们，就必须进行配置

```js
require.config({
  shim: {
    underscore: {
      exports: '_',
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone',
    },
  },
});
```

> require.config() 接受一个配置对象，这个对象除了有前面说过的 paths 属性之外，还有一个> shim 属性，专门用来配置不兼容的模块

具体的来说，就是每个模块都要定义

1. exports 值（输出的变量名），表明这个模块外部调用的时候的名称
2. deps 数组，表明该模块的依赖性

比如 Jquery 的 scroll 模块可以这样定义

```js
  　　shim: {
  　　　　'jquery.scroll': {
  　　　　　　deps: ['jquery'],
  　　　　　　exports: 'jQuery.fn.scroll'
  　　　　}
  　　}
```

调用的时候用的命令是 jQuery.fn.scroll ，这个模块依赖于 jquery

## require.js 插件

require.js 还有一些特定的插件来实现一些别的功能

比如 domready 可以让回调函数在 DOM 加载完成后再进行加载

```js
 require(['domready!'], function (doc) {
     do something()
 });
```

text 和 image 插件，则是允许 require.js 加载文本和图片文件。

```js
define(['text!review.txt', 'image!cat.jpg'], function(review, cat) {
  console.log(review);
  document.body.appendChild(cat);
});
```

其他的还有 json 、markdown 等等

> 参考文章
>
> [简书文章:前端模块化（CommonJs,AMD 和 CMD），作者:linwalker](https://www.jianshu.com/p/d67bc79976e6)
>
> [Javascript 模块化编程（二）：AMD 规范](http://www.ruanyifeng.com/blog/2012/10/asynchronous_module_definition.html)
>
> [阮一峰老师的文章:Javascript 模块化编程（三）：require.js 的用法](http://www.ruanyifeng.com/blog/2012/11/require_js.html)

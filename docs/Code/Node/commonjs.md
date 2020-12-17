---
  title: CommonJS 规范源码
---

这里讲解 CommonJS 规范源码

## 一、require 源码

### 模块查找过程

require 是 Node 引用模块的方法

在 node.js 开发中一个文件就可以认为是一个模块。，当 Node 遇到 require(X) 时，如果是没有指定后缀的话，按下面的顺序处理。

**（1）如果 X 是内置模块（比如 require('http'）)**

　　a. 返回该模块。

　　b. 不再继续执行。

**（2）如果 X 以 "./" 或者 "/" 或者 "../" 开头**

　　a. 根据 X 所在的父模块，确定 X 的绝对路径。

　　b. 将 X 当成文件，依次查找下面文件，只要其中有一个存在，就返回该文件，不再继续执行。

```js
X
X.js
X.json
X.node(C++编写的模块)
```
　　c. 将 X 当成目录，依次查找下面文件，只要其中有一个存在，就返回该文件，不再继续执行。

```js
X/package.json（main 字段）
X/index.js
X/index.json
X/index.node(C++编写的模块)
```
**（3）如果 X 不带路径**

　　a. 根据 X 所在的父模块，确定 X 可能的安装目录。

　　b. 依次在每个目录中，将 X 当成文件名或目录名加载。

**（4） 抛出 "not found"**

并且每次 Node 加载完模块后都会有缓存，避免了二次开销

### 查找模块案例

当前脚本文件 `/home/ry/projects/foo.js` 执行了 `require('bar')` ，这属于上面的第三种情况。Node 内部运行过程如下。

首先，确定 x 的绝对路径可能是下面这些位置，依次搜索每一个目录。

```shell
/home/ry/projects/node_modules/bar
/home/ry/node_modules/bar
/home/node_modules/bar
/node_modules/bar
```

搜索时，Node 先将 bar 当成文件名，依次尝试加载下面这些文件，只要有一个成功就返回。

```js
bar
bar.js
bar.json
bar.node
```

如果都不成功，说明 bar 可能是目录名，于是依次尝试加载下面这些文件。

```shell
bar/package.json（main字段）
bar/index.js
bar/index.json
bar/index.node
```

如果是在所有的目录中都无法找到 bar 对应的文件或者目录，就报错

### 模块的加载机制

CommonJS 的加载机制是输入的值，就是输出的值的拷贝，一旦输出这个值，模块的内部变化就无法影响到这个值

`lib.js`

```js
// lib.js
var counter = 3;
function incCounter() {
  counter++;
}
module.exports = {
  counter: counter,
  incCounter: incCounter,
};
```

`main.js`

```js
// main.js
var counter = require('./lib').counter;
var incCounter = require('./lib').incCounter;

console.log(counter);  // 3
incCounter();
console.log(counter); // 3
```

### requre 内部处理流程

require 命令是 CommonJS 规范之中，用来加载其他模块的命令。它其实不是一个全局命令，而是指向当前模块的 `module.require` 命令，而后者又调用 Node 的内部命令 `Module._load`。

```js
Module._load = function(request, parent, isMain) {
  // 1. 检查 Module._cache，是否缓存之中有指定模块
  // 2. 如果缓存之中没有，就创建一个新的Module实例
  // 3. 将它保存到缓存
  // 4. 使用 module.load() 加载指定的模块文件，
  //    读取文件内容之后，使用 module.compile() 执行文件代码
  // 5. 如果加载/解析过程报错，就从缓存删除该模块
  // 6. 返回该模块的 module.exports
};
```

上面的第 4 步，采用 `module.compile()` 执行指定模块的脚本，逻辑如下。

```js
Module.prototype._compile = function(content, filename) {
  // 1. 生成一个require函数，指向module.require
  // 2. 加载其他辅助方法到require
  // 3. 将文件内容放到一个函数之中，该函数可调用 require
  // 4. 执行该函数
};
```

上面的第 1 步和第 2 步，require 函数及其辅助方法主要如下。

> `require()`: 加载外部模块
>
> `require.resolve()`：将模块名解析到一个绝对路径
>
> `require.main`：指向主模块
>
> `require.cache`：指向所有缓存的模块
>
> `require.extensions`：根据文件的后缀名，调用不同的执行函数

一旦 `require` 函数准备完毕，整个所要加载的脚本内容，就被放到一个新的函数之中，这样可以避免污染全局环境。该函数的参数包括 `require、module、exports`，以及其他一些参数。

```js
(function (exports, require, module, __filename, __dirname) {
  // YOUR CODE INJECTED HERE!
});
```

`Module._compile` 方法是同步执行的，所以 `Module._load` 要等它执行完成，才会向用户返回 `module.exports` 的值。

## 二、Module 构造函数

require 的源码在 Node 的 `lib/module.js` 文件,截图的部分源码如下

![](https://txy-tc-ly-1256104767.cos.ap-guangzhou.myqcloud.com/uPic/plnYOX.jpg)

每个模块的内部都有一个 module 变量，代表当前的模块，属性如下:

```js
module.id 模块的识别符，通常是带有绝对路径的模块文件名。
module.filename 模块的文件名，带有绝对路径。
module.loaded 返回一个布尔值，表示模块是否已经完成加载。
module.parent 返回一个对象，表示调用该模块的模块。
module.children 返回一个数组，表示该模块要用到的其他模块。
module.exports 表示模块对外输出的值。
```

案例：
::: details

先创建一个文件打印出 module 信息

```js
console.log('module.id: ', module.id);
console.log('module.exports: ', module.exports);
console.log('module.parent: ', module.parent);
console.log('module.filename: ', module.filename);
console.log('module.loaded: ', module.loaded);
console.log('module.children: ', module.children);
console.log('module.paths: ', module.paths);
```

如果是使用 node 命令执行这个文件，那么打印的信息如下

```shell
$ node a.js

module.id:  .
module.exports:  {}
module.parent:  null
module.filename:  /home/ruanyf/tmp/a.js
module.loaded:  false
module.children:  []
module.paths:  [ '/home/ruanyf/tmp/node_modules',
  '/home/ruanyf/node_modules',
  '/home/node_modules',
  '/node_modules' ]
```

如果是被其他的文件引入，那么打印的结果如下

```js
// b.js

var a = require('./a.js');
```

`node b.js`

打印的结果如下

```js
$ node b.js

module.id:  /home/ruanyf/tmp/a.js
module.exports:  {}
module.parent:  { object }
module.filename:  /home/ruanyf/tmp/a.js
module.loaded:  false
module.children:  []
module.paths:  [ '/home/ruanyf/tmp/node_modules',
  '/home/ruanyf/node_modules',
  '/home/node_modules',
  '/node_modules' ]
```

上面代码中，由于 a.js 被 b.js 调用，所以 parent 属性指向 b.js 模块，id 属性和 filename 属性一致，都是模块的绝对路径。

:::



> 参考文章
>
> [阮一峰的网络日志:require() 源码解读](http://www.ruanyifeng.com/blog/2015/05/require.html)
>

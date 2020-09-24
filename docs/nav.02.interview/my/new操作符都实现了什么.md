---
title: new操作符都实现了什么
categories: 前端
tags:
    - JavaScript

---

##  new操作符做了什么？

（1）创建了一个空对象

```js
var obj = new object();
```

（2）设置原型链

```js
obj._proto_ = fn.prototype;
```

（3）让fn的this指向obj，并执行fn的函数体

```js
var result = fn.call(obj);
```

（4）判断fn的返回值类型，如果是值类型，返回obj。如果是引用类型，就返回这个引用类型的对象。

```js
if (typeof(result) == "object"){  
    fnObj = result;  
} else {  
    fnObj = obj;
}
```
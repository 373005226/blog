---
  title: Javscript == 和 ===区别，分别在什么情况使用？
  categories: 文章积累
---

## 等于操作符

`==` 操作符会出现隐式类型转换，再确定操作的值是否相等

```js
let result1 = (true == 1); // true

let result1 = ("55" == 55); // true

let obj = {valueOf:function(){return 1}}
let result1 = (obj == 1); // true

let result1 = (null == undefined ); // true
```

NAN 是个例外，无论等于什么都是为 false

```js
let result1 = (NaN == NaN ); // false
```

如果是对象的话，只要是同一个对象那么就相等

```js
let obj1 = {name:"xxx"}
let obj2 = {name:"xxx"}
let result1 = (obj1 == obj2 ); // false
```

可以总结为以下几点

* 两个都为简单类型，字符串和布尔值都会转换成数值，再比较

* 简单类型与引用类型比较，对象转化成其原始类型的值，再比较

* 两个都为引用类型，则比较它们是否指向同一个对象

* null 和 undefined 相等

* 存在 NaN 则返回 false

## ===

这个是严格相等，两边都不进行类型转换的前提下相等才返回 true



> 本片文章引用于：
> [Js 每日一题:《面试官：== 和 ===区别，分别在什么情况使用？》](https://mp.weixin.qq.com/s?__biz=MzU1OTgxNDQ1Nw==&mid=2247485636&idx=1&sn=6e74b10bb37d668c29ba94875e878ab2&chksm=fc10ca92cb6743841f718fdcba9f816cd40db17d2c52b7697473f11064509ed8b7b881181838&scene=21#wechat_redirect)
>

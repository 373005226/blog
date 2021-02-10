---
  title: JavaScript 中的数据类型区别
  categories: 文章积累
---

众所周知，JavaScript 类型分为基本类型和引用类型

JS 中有六种简单数据类型：`undefined`、`null`、`boolean`、`string`、`number`、`symbol`，以及引用类型：`object`

## 基本类型

### Number

Number 类型分为整数类型和浮点型类型之外，还有个 NaN 类型，这个类型是 Number 类型但是意为“不是数值”，用于表示要返回的数值操作失败了，例如 `0/0`

### Undefined

Undefined 类型就是赋值了定义了变量但是没有初始化

### String

String 是个不可变的类型，比如下面的这个例子

```js
let lang = "Java";
lang = lang + "Script";  // 先销毁再创建
```

变量会先销毁再创建

### Null

`Null` 类型同样只有一个值，即特殊值 `null`

逻辑上讲， `null` 值表示一个空对象指针，这也是给 `typeof` 传一个 `null` 会返回 `"object"` 的原因

```js
let car = null;
console.log(typeof car); // "object"
```

`undefined` 值是由 `null` 值派生而来

```js
console.log(null == undefined); // true
```

两个等号意味着他们的值相等

### Boolean

`Boolean` 只有 true 和 false 两个值

通过 `Boolean` 可以将其他类型的数据转化成布尔值

### Symbol

`Symbol （符号）` 是原始值，且符号实例是唯一、不可变的。符号的用途是确保对象属性使用唯一标识符，不会发生属性冲突的危险

```js
let genericSymbol = Symbol();
let otherGenericSymbol = Symbol();
console.log(genericSymbol == otherGenericSymbol); // false

let fooSymbol = Symbol('foo');
let otherFooSymbol = Symbol('foo');
console.log(fooSymbol == otherFooSymbol); // false
```

## 引用类型

复杂类型统称为 `Object` ，分开又可以分为
* Object
* Array
* Function
* Date
* RegExp
* Map
* Set

等。。。

## 上述两种类型存储的区别

基本数据类型和引用数据类型存储在内存中的位置不同：

* **基本数据类型存储在栈中**
* **引用类型的对象存储于堆中**

### 基本类型

```js
let a = 10;
let b = a; // 赋值操作
b = 20;
console.log(a); // 10值
```

上述代码的本质是 a 作为一个基本类型，存储在栈中， 将 a 赋值给 b ，虽然两个变量相等，但是两个变量是不同的内存地址

### 引用类型

```js
var obj1 = {}
var obj2 = obj1;
obj2.name = "Xxx";
console.log(obj1.name); // xxx
```

虽然 obj1 赋值给了 obj2 ，但是传递的是引用的地址，只是把栈的内存对象所在的地址赋值给了 obj2，所以他们实际上都指向于同一个内存地址中

### 结论

简单类型的值存放在栈中，在栈中存放的是对应的值

引用类型对应的值存储在堆中，在栈中存放的是指向堆内存的地址

> 本片文章引用于：
> [JS 每日一题:《面试官：说说 JavaScript 中的数据类型？区别？》](https://mp.weixin.qq.com/s?__biz=MzU1OTgxNDQ1Nw==&mid=2247485504&idx=1&sn=66fd8176826fcbdb54866fcac6cfa7e9&chksm=fc10ca16cb67430076377b942d7a9d2284815d199d07d7ad7b12182f9e6966e814801b23303e&scene=21#wechat_redirect)
>

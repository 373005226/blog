---
  title: Javscript 深拷贝浅拷贝的区别？如何实现一个深拷贝?
  categories: 文章积累
---

深拷贝和浅拷贝是对于引用类型而言的，因为如果是基本数据类型就是直接复制值到新的内存地址中

即浅拷贝是拷贝一层，深层次的引用类型则共享内存地址

## 浅拷贝

这里简单实现一个浅拷贝

```js

function shallowClone(obj) {
    const newObj = {};
    for(let prop in obj) {
        if(obj.hasOwnProperty(prop)){
            newObj[prop] = obj[prop];
        }
    }
    return newObj;
}
```

在 JavaScript 中，有能实现浅拷贝的方法有

* Object.assign

* Array.prototype.slice(), Array.prototype.concat()

* ES6 拓展运算符

### Object.assign

```js
var obj = {
    age: 18,
    nature: ['smart', 'good'],
    names: {
        name1: 'fx',
        name2: 'xka'
    },
    love: function () {
        console.log('fx is a great girl')
    }
}
var newObj = Object.assign({}, fxObj);
```

### slice()

```js
const fxArr = ["One", "Two", "Three"]
const fxArrs = fxArr.slice(0)
fxArrs[1] = "love";
console.log(fxArr) // ["One", "Two", "Three"]
console.log(fxArrs) // ["One", "love", "Three"]
```

### concat()

```js
const fxArr = ["One", "Two", "Three"]
const fxArrs = fxArr.concat()
fxArrs[1] = "love";
console.log(fxArr) // ["One", "Two", "Three"]
console.log(fxArrs) // ["One", "love", "Three"]
```

### ES6 拓展运算符

```js
const fxArr = ["One", "Two", "Three"]
const fxArrs = [...fxArr]
fxArrs[1] = "love";
console.log(fxArr) // ["One", "Two", "Three"]
console.log(fxArrs) // ["One", "love", "Three"]
```

## 深拷贝

通俗的讲，浅拷贝赋值后，指向的内存地址是相同的；深拷贝是将内存地址新开一份，并且复制值，修改一个对象的属性并不会影响另一个内存的值

通俗使用的方法有

* lodash 库的`_.cloneDeep()`

* `jQuery.extend()`

* `JSON.stringify()`

* 不断的递归循环

### _.cloneDeep() 和 jQuery.extend()

这两个方法都是库调用的，直接看使用文档即可

### JSON.stringify()

```plain
const obj2=JSON.parse(JSON.stringify(obj1));
```

这个方法最为简便，但是存在弊端，会忽略 `undefined`、`Symbol` 和 `Function`、`RegExp（正则表达式，转换后变成了空对象）`、`Date（转换后变成了字符串，而非 Date 类的对象）`,如下

Symbol 也无法被转换，但由于 Symbol 本身定义（全局唯一性）就决定了，它不应该被转换，否则即使转换回来，也不会是原来那个 Symbol

Function 也比较特殊，不过要兼容的话，可以先调用 `.toString()` 转换为字符串储存，需要的时候再 `eval` 转回来

以及，`JSON.stringify()` 无法转换循环引用的对象

```js
const a = { key: 'value' };
a['a'] = a;
JSON.stringify(a);

// Uncaught TypeError: Converting circular structure to JSON
//     --> starting at object with constructor 'Object'
//     --- property 'a' closes the circle
//     at JSON.stringify (<anonymous>)
```


```js
const obj = {
    name: 'A',
    name1: undefined,
    name3: function() {},
    name4: Symbol('A'),
    name5: RegExp('ab+c', 'i'),
    name6: Date('1995-12-17T03:24:00')
}
const obj2 = JSON.parse(JSON.stringify(obj));

// name: "A"
// name5: {}
// name6: "Mon Mar 15 2021 11:31:16 GMT+0800 (中国标准时间)"
```

会忽略掉上面的`undefined`、`Function`、`Symbol` 三种类型，`RegExp`（正则表达式，转换后变成了空对象）、`Date`（转换后变成了字符串，而非 Date 类的对象）

### 循环递归

```js

WeakMap 是 ES6 中的方法，用于反射的元数据池，WeakMap 可以把一个对象所关联的数据和该对象的生命周期联系起来。当对象被销毁，其关联的数据也被释放。


function deepClone(obj, hash = new WeakMap()) {
    if (obj === null) return obj // 如果是null或者undefined我就不进行拷贝操作

    if (obj instanceof Date) return new Date(obj)

    if (obj instanceof RegExp) return new RegExp(obj)

    // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
    if (typeof obj !== 'object') return obj

    // 是对象的话就要进行深拷贝
    if (hash.get(obj)) return hash.get(obj)
    
    let cloneObj = new obj.constructor()
    // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
    hash.set(obj, cloneObj)
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            // 实现一个递归拷贝
            cloneObj[key] = deepClone(obj[key], hash)
        }
    }
    return cloneObj
}

```



> 本片文章引用于：
> [Js 每日一题:《面试官：深拷贝浅拷贝的区别？如何实现一个深拷贝？》](https://mp.weixin.qq.com/s/m0alHaSzbKr7BJCdakPuqQ)
>

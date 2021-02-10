---
  title: Javscript 数组的常用方法有哪些？
  categories: 文章积累
---

操作的方法可以具体分为增、删、改、查
# 对原数组的操作

## 增

增的方法有

* push()
* unshift()
* splice()
* concat()

前三种是对原数组产生影响的增添方法，第四种则不会对原数组产生影响

### splice

传入三个参数，分别是开始位置、0（要删除的元素数量）、插入的元素，返回空数组

```js
let colors = ["red", "green", "blue"];
let removed = colors.splice(1, 0, "yellow", "orange")
console.log(colors) // red,yellow,orange,green,blue
console.log(removed) // []
```

### concat()

首先会创建一个当前数组的副本，然后再把它的参数添加到副本末尾，最后返回这个新构建的数组，不会影响原始数组

```js
let colors = ["red", "green", "blue"];
let colors2 = colors.concat("yellow", ["black", "brown"]);
console.log(colors); // ["red", "green","blue"]
console.log(colors2); // ["red", "green", "blue", "yellow", "black", "brown"]
```

## 删

删的方法有

* pop()
* shift()
* splice()
* slice()

前三种都会影响原数组，最后一项不影响原数组


### splice()

传入两个参数，分别是开始位置，删除元素的数量，返回包含删除元素的数组

```js
let colors = ["red", "green", "blue"];
let removed = colors.splice(0,1); // 删除第一项
console.log(colors); // green,blue
console.log(removed); // red，只有一个元素的数组
```

### slice()

slice() 用于创建一个包含原有数组中一个或多个元素的新数组，不会影响原始数组

```js
let colors = ["red", "green", "blue", "yellow", "purple"];
let colors2 = colors.slice(1);
let colors3 = colors.slice(1, 4);
console.log(colors)   // red,green,blue,yellow,purple
concole.log(colors2); // green,blue,yellow,purple
concole.log(colors3); // green,blue,yellow
```

## 改

通常也只有 splice 去修改数组的内容或者是直接下标修改

## 查

* indexOf()
* includes()
* find()

### includes()

返回要查找的元素在数组中的位置，找到返回 true，否则 false

### find()

返回第一个匹配的元素

```js
const people = [
    {
        name: "Matt",
        age: 27
    },
    {
        name: "Nicholas",
        age: 29
    }
];
people.find((element, index, array) => element.age < 28) // // {name: "Matt", age: 27}
```

## 排序方法

排序方法只有

* reverse()
* sort()

### reverse()

顾名思义，将数组元素方向排列

```js
let values = [1, 2, 3, 4, 5];
values.reverse();
alert(values); // 5,4,3,2,1
```

### sort()

sort() 方法接受一个比较函数，用于判断哪个值应该排在前面

```js
function compare(value1, value2) {
    if (value1 < value2) {
        return -1;
    } else if (value1 > value2) {
        return 1;
    } else {
        return 0;
    }
}
let values = [0, 1, 5, 10, 15];
values.sort(compare);
alert(values); // 0,1,5,10,15
```


## 转换方法

常见的转换方法就只有 join()

### join()

join() 方法接收一个参数，即字符串分隔符，返回包含所有项的字符串

```js
let colors = ["red", "green", "blue"];
alert(colors.join(",")); // red,green,blue
alert(colors.join("||")); // red||green||blue
```

## 迭代方法

常用来迭代数组的方法（都不改变原数组）有如下：

* some()
* every()
* forEach()
* filter()
* map()

### some()

对数组每一项都运行传入的函数，如果有一项函数返回 true ，则这个方法返回 true

```js
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let someResult = numbers.every((item, index, array) => item > 2);
console.log(someResult) // true
```

### every()

对数组每一项都运行传入的函数，如果对每一项函数都返回 true ，则这个方法返回 true

```js
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let everyResult = numbers.every((item, index, array) => item > 2);
console.log(everyResult) // false
```

> 本片文章引用于：
> [JS 每日一题:《面试官：Javscript 数组的常用方法有哪些？》](https://mp.weixin.qq.com/s?__biz=MzU1OTgxNDQ1Nw==&mid=2247485535&idx=1&sn=ba7fe0490dd306e7aff90b8b8dd45b2c&chksm=fc10ca09cb67431fad3fc7291cfc34b8a9bf9db27e20ff4a09373eac8ca399f4b5a8410b9f8e&scene=21#wechat_redirect)
>

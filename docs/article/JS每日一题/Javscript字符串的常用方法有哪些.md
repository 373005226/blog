---
  title: Javscript 字符串的常用方法有哪些？
  categories: 文章积累
---

操作的方法可以具体分为增、删、改、查



## 增

增其实是对原本的字符串复制一份在进行操作

### concat

```js
let stringValue = "hello ";
let result = stringValue.concat("world");
console.log(result); // "hello world"
console.log(stringValue); // "hello"
```

## 删

删也是对于原本的字符串创建一个副本再进行操作

### slice() 、 substr() 、 substring()

这三个方法对于只传递一个参数的话是一样的

```js
let str = 'abcdefg';
let sli = str.slice(2); // "cdefg"
let sub = str.substr(2);// "cdefg"
let subs = str.substring(2);// "cdefg"
```

但是如果有两个参数的话
`slice`和`substring`的第二个参数表示截取的结束下标，而`substr`表示截图的位数

```js
let stringValue = "hello world";
console.log(stringValue.slice(3, 7)); // "lo w"
console.log(stringValue.substring(3,7)); // "lo w"
console.log(stringValue.substr(3, 7)); // "lo worl"
```

并且如果当参数传递的是负数的时候
`slice()`会把当前的负值加上字符串的长度。如`hello world`的长度为 11，`slice(-3)`,相当于`slice(8)`。

`substring()`会把所有的负值转化为零。

`substr()`第一个负值负值会把当前的负值加上字符串的长度，第二个负值会转化为零（截取的个数不能为负）

## 改

改的意思也是创建字符串得到的一个新的变量去操作

常见的有

* trim()、trimLeft()、trimRight()

* repeat()

* padStart()、padEnd()

* toLowerCase()、 toUpperCase()


### trim()、trimLeft()、trimRight()

这三个方法顾名思义就是删除所有的空白、删除左边的空白和删除右边的空白

### repeat()

就是接收一个整数的参数，来表示要把字符串复制多少次，然后拼接返回的副本的结果

```js
let stringValue = "na ";
let copyResult = stringValue.repeat(2) // na na
```

### padEnd()

复制字符串，如果小于指定长度，则在相应一边填充字符，直至满足长度条件

```js
let stringValue = "foo";
console.log(stringValue.padStart(6)); // " foo"
console.log(stringValue.padStart(9, ".")); // "......foo"
```

## toLowerCase()、 toUpperCase()

顾名思义大小写转换

```js
let stringValue = "hello world";
console.log(stringValue.toUpperCase()); // "HELLO WORLD"
console.log(stringValue.toLowerCase()); // "hello world"
```

## 查

除了通过索引的方式获取字符串的值，还可通过：

* chatAt()

* indexOf()

* startWith()

* includes()

* 正则表达式

### charAt()

返回给定索引位置的字符，由传给方法的整数参数指定

```js
let message = "abcde";
console.log(message.charAt(2)); // "c"
```

### indexOf()

从字符串开头去搜索传入的字符串，并返回位置（如果没找到，则返回 -1 ）

```js
let stringValue = "hello world";
console.log(stringValue.indexOf("o")); // 4
```

### startWith()、includes()

`startWith()` 表示从字符串中搜索传入的字符串，并返回一个表示是否包含的布尔值

`includes()` 表示该字符串是否包含传入的字符串，并且返回一个是否包含的布尔值

```js
let message = "foobarbaz";
console.log(message.startsWith("foo")); // true
console.log(message.startsWith("bar")); // false
console.log(message.includes("bar")); // true
console.log(message.includes("qux")); // false
```

## 正则表达式

针对正则表达式，字符串设计了几个方法：

* match()

* search()

* replace()


### match()

接收一个参数，可以是一个正则表达式字符串，也可以是一个 `RegExp` 对象，返回数组

```js
let text = "cat, bat, sat, fat";
let pattern = /.at/;
let matches = text.match(pattern);
console.log(matches[0]); // "cat"
```

### search()

接收一个参数，可以是一个正则表达式字符串，也可以是一个 `RegExp` 对象，找到则返回匹配索引，否则返回 -1

```js
let text = "cat, bat, sat, fat";
let pos = text.search(/at/);
console.log(pos); // 1
```

### replace()

接收两个参数，第一个参数为匹配的内容，第二个参数为替换的元素（可用函数）

```js
let text = "cat, bat, sat, fat";
let result = text.replace("at", "ond");
console.log(result); // "cond, bat, sat, fat"
```

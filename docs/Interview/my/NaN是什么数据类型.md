---
title: NaN是什么数据类型
categories: 前端
tags:
    - JavaScript
---

### NaN是什么数据类型

**NaN是数字类型的，但是它又可以用isNaN()检测，isNaN() 函数用于检查其参数是否是非数字值**

isNaN() 函数通常用于检测 parseFloat() 和 parseInt() 的结果，以判断它们表示的是否是合法的数字

#### isNaN()为false的两种情况

```jsx
isNaN(123)    //false
isNaN('123')    //false
```

通俗的讲isNaN()是用来检测非合法数字的，只要不是数字，或者可以转换为数字的都是true
 **注意isNaN(true) //false   isNaN(false) //false isNaN(undefined) //true**
 这是因为:

```jsx
Number(true)    //1
Number(false)  //0
Number(undefined)  //NaN
```

**在ES6的Number.isNaN()扩展方法没有出现之前，全局的isNaN()方法是比较可靠的方式判断是否为NaN，但是在ES6出来之后，我们可以使用Number.isNaN()方法进行可靠的判断NaN值**
 Number.isNaN()方法的判断过程：首先判断传入的参数是否为数值类型，如果判断为true再使用isNaN()方法进行判断。为false就直接返回flase
 所以：

```jsx
Number.isNaN(undefined)   //false
```

由此得出NaN是一个非法数字，更是一个没有固定值的数字
 所以：

```jsx
NaN != NaN  // true
NaN !== NaN  // true
```

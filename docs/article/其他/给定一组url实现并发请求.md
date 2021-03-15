---
title: 给定一组 url 实现并发请求
categories: 前端
tags:
  - JavaScript
---

## 题目

原题是这样的：给定一组 url，利用 js 的异步实现并发请求，并按顺序输出结果

## Promise.all

可以使用 [Promis.all](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) 的方法，但是 Promise.all 里面的数组必须是个 Promise 对象，所以要使用 XMLHttpRequest 去对数组请求，或者使用 axios 第三方库之类的也可以

### XMLHttpRequest

如果是使用 [XMLHttpRequest](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
 的方法


```js
const urls = ["./1.json", "./2.json", "./3.json"];
function getData(url) {
  // 返回一个 Promise 利用 Promise.all 接受
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.response);
        }
      }
    };
    // 第三个参数为 false 代表同步， true 代表异步
    xhr.open("GET", url, true);
    xhr.send(null);
  });
}
function getMultiData(urls) {
  // Promise.all 接受一个包含 promise 的数组，如果不是 promise 数组会被转成 promise
  Promise.all(urls.map((url) => getData(url))).then((results) => {
    console.log(results);
  });
}

getMultiData(urls);
```
>
> Promise.all() 方法接收一个 promise 的 iterable 类型（注：Array，Map，Set 都属于 ES6 的 iterable 类型）
>

::: right
来自 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
:::

## 不使用 Promise.all

原题就是不使用 Promise.all 

>
> 本文参考于[开发中经常遇到的 JavaScript 问题整理(超实用)](https://mp.weixin.qq.com/s/S90PJ38b3i-oOmjlRxYCjQ)
---
title: 在 JavaScript 中如何表示链表
categories: 算法
tags:
    - JavaScript
    - 链表
---

链表跟数组的不同：

数组在增删非首位元素的时候往往需要移动元素，因为如果是在中间添加或者删除元素的话，剩下的元素都要往前或者往后移动位置

而链表移动元素的话，只需要改变该节点的 next 的指向即可

同样的 JavaScript 也是没有链表这个数据结构的，但是可以用 Object 去模拟链表

具体的可以看如下代码:

<<< docs/.vuepress/code/other/链表表示.js

---
title: GET和POST的区别
categories: 前端
tags:
    - JavaScript

---

首先Get是不安全的，在传输的过程中参数是放在URL中，比如`127.0.0.1?name=Ryan`；而POST是不可见的

其次Get的传送数据很小，这个不可能URL+参数那么一大串传过去；而POST请求数据量比较多

Get限制表单的数据集必须为ASCII字符；而Post支持整个ISO10646字符集

Get执行效率却比Post方法好

Get是form提交的默认方法


---
title: CSS 小技巧
categories: 前端
tags:
  - Git
---

## CSS 创建计数器

```html
<ul class="list">
    <li>Item</li>
    <li>Item</li>
    <li>Item</li>
    <li>Item</li>
    <li>Item</li>
    <li>Item</li>
</ul>
```

```CSS
li {
    font-size: 40px;
    margin-bottom: 20px;
    counter-increment: li;
}

.list li::before {
    content: counter(li);
    margin-right: 10px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: inline-block;
    background-color: #f3b70f;
    color: white;
    text-align: center;
    line-height: 50px;
}
```

![CSS 计数器](https://txy-tc-ly-1256104767.cos.ap-guangzhou.myqcloud.com/uPic/YwPOEJ.jpg)

## 选择伪元素

`:: selection` 伪元素适用于 DOM 上突出显示的元素。这是我最喜欢的伪元素之一。语法如下所示

![](https://txy-tc-ly-1256104767.cos.ap-guangzhou.myqcloud.com/uPic/yB1Ou7.jpg)

```CSS
p::selection {
  color: yellow;
}
```

## attr（）函数

```html
<h2 class="title" data-count="01">Section</h2>
<h2 class="title" data-count="02">Section</h2>
<h2 class="title" data-count="03">Section</h2>
```

```css
.title {
    font-size: 35px;
    letter-spacing: 3px;
}

.title::before {
    content: attr(data-count);
    font-size: 1.2em;
    color: steelblue;
    margin-right: 10px;
}
```

可以让 css 获取 html 标签里面的属性

## CSS 获取笔画

CSS 可以让文字只显示描边

```html
<h2>Css is Awesome</h2>
```

```CSS
h2 {
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px tomato;
}
```

`-webkit-text-fill-color` 让文字里面的填充为透明，`-webkit-text-stroke` 进行描边


> 本片文章引用于：
> [您可能不知道的 CSS 技巧](https://mp.weixin.qq.com/s/E-5OZCNUcVc8ql87Tjkz9A)
>
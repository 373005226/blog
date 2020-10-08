---
title: JS 加载的方式
categories: 前端
tags:
  - JavaScript
---

## 同步加载

这个方法就是常用的吧 script 标签放在 body 底下，如果 js 中有输出 document 内容、修改 dom、重定向等行为，就会造成页面堵塞

所以一般建议把`<script>`标签放在`<body>`结尾处，这样尽可能减少页面阻塞

## 异步加载

异步加载主要有三种方式

### （1）async

定义：async 属性规定一旦脚本可用，则会异步执行。 用法：`<script type="text/javascript" src="async.js" async="async"></script>` 注释：async 属性仅适用于外部脚本（只有在使用 src 属性时）。 注释：有多种执行外部脚本的方法

- 如果 async=”async”：脚本相对于页面的其余部分异步地执行（当页面继续进行解析时，脚本将被执行）；
- 如果不使用 async 且 defer=”defer”：脚本将在页面完成解析时执行；
- 如果既不使用 async 也不使用 defer：在浏览器继续解析页面之前，立即读取并执行脚本 。

### （2）defer

- 只支持 IE
- defer 属性规定是否对脚本执行进行延迟，直到页面加载为止。有的 javascript 脚本 document.write 方法来创建当前的文档内容，其他脚本就不一定是了。
- 如果您的脚本不会改变文档的内容，可将 defer 属性加入到

```html
<script type="text/javascript" defer="defer"> 
    alert(document.getElementById("p1").firstChild.nodeValue); 
</script>
```

### （3）创建 script，插入到 DOM 中，加载完毕后 callBack

```javascript
function loadScript(url, callback){ 
    var script = document.createElement_x("script") 
    script.type = "text/javascript"; 
    if (script.readyState){ //IE 
        script.onreadystatechange = function(){ 
            if (script.readyState == "loaded" || script.readyState == "complete"){ 
                script.onreadystatechange = null; 
                callback(); 
            } 
        }; 
    } else { //Others: Firefox, Safari, Chrome, and Opera 
        script.onload = function(){ 
            callback(); 
        }; 
    } 
    script.src = url; 
    document.body.appendChild(script); 
}
```
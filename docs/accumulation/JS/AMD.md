---
  title: AMD 规范
---

AMD 规范的写法也是必然产生的，初学的时候肯定会有这样的代码

```js
<script src="1.js"></script>　　
<script src="2.js"></script>　　
<script src="3.js"></script>　　
<script src="4.js"></script>　
<script src="5.js"></script>　　
<script src="6.js"></script>
```
这样加载的顺序会从 `1.js` 按照顺序加载到 `6.js` ，那么如果 `1.js` 有些东西是后面模块加载的话，那么 `1.js` 的这部分代码就会失效

并且按照顺序同步加载会让浏览器响应时间变的很长，其次也必须保证 js 文件之间加载顺序的正确

require.js 的出现解决了这个问题

（1） 使得文件可以异步加载
（2） 管理模块之间的依赖性，使得维护变得简单
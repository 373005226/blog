---
  title: vue3.0 初探
  author: 刘渊
---

## 项目前期操作

### `vue-property-decorator`
如果是选择了 TypeScript 进行开发的话，vue create 会自动安装 `vue-class-component`这个依赖

但是还需要安装依赖 `vue-property-decorator` ，这两者的区别是

`vue class component` 是 vue 官方出的，而 `vue property decorator` 是社区出的 , 可以说`vue property decorator`是 `vue class component`的超集，因为`vue property decorator`对`vue class component`进行深度依赖，在此基础上进行拓展出了很多操作符，如 `@Prop @Emit @Inject`，所以开发的时候引入`vue property decorator` 即可


## Vue3 Test

::: demo 此处放置代码示例的描述信息，支持 `Markdown` 语法，**描述信息只支持单行**
```html
<template>
  <div class="red-center-text">
      <p>{{ message }}</p>
      <input v-model="message" placeholder="Input something..."/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: 'Hello Vue'
    }
  }
}
</script>
<style>
.red-center-text { 
  color: #ff7875;
  text-align: center;
}
</style>
:::
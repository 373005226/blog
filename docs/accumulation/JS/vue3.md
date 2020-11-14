---
  title: vue3.0 初探
  author: 刘渊
---

## 项目前期操作

### `vue-property-decorator`
如果是选择了 TypeScript 进行开发的话，vue create 会自动安装 `vue-class-component`这个依赖

但是还需要安装依赖 `vue-property-decorator` ，这两者的区别是

`vue class component` 是 vue 官方出的，而 `vue property decorator` 是社区出的 , 可以说`vue property decorator`是 `vue class component`的超集，因为`vue property decorator`对`vue class component`进行深度依赖，在此基础上进行拓展出了很多操作符，如 `@Prop @Emit @Inject`，所以开发的时候引入`vue property decorator` 即可

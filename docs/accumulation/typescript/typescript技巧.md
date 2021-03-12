---
title: TypeScript 小技巧
categories: 前端
tags:
  - TypeScript
---

## 交叉类型

`&` 交叉类型可以认为是把两种类型结合在一起

```ts
type LeftType = {
  id: number
  left: string
}

type RightType = {
  id: number
  right: string
}

type IntersectionType = LeftType & RightType

function showType(args: IntersectionType) {
  console.log(args)
}

showType({ id: 1, left: "test", right: "test" })
// Output: {id: 1, left: "test", right: "test"}
```

## 联合类型

`|` 联合类型可以认为是或

```ts
type UnionType = string | number

function showType(arg: UnionType) {
  console.log(arg)
}

showType("test")
// Output: test

showType(7)
// Output: 7
```

## 泛型



> 本片文章引用于：
> [最强的高级 TypeScript 类型备忘单【含示例】](https://mp.weixin.qq.com/s?__biz=MzIyNjUxNjMxOA==&mid=2247491971&idx=3&sn=50f1763a4c872b683f47ba11a3fd4e1c&chksm=e86dedb2df1a64a4e4b00edffdf35f13f05c67a75f7532f292bec5fe5ccd44090b963e1fc46e&scene=178&cur_album_id=1751460113510400010#rd)
>
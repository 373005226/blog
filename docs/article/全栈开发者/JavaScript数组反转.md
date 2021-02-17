---
  title: Javscript 如何不修改原数组来反转数组
  categories: 文章积累
---

首先 reverse 方法是会修改原数组的，所以这个方法不能用，可以使用 ES6 语法的拓展运算符来把返回的元素放到新数组中，然后再进行新数组的 reverse ，就可以不修改原数组来反转数组

## 方法一：创建新数组来 reverse
```js
let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = [...numbers].reverse();

console.log(reversedNumbers);
// [5, 4, 3, 2, 1]

console.log(numbers);
// [1, 2, 3, 4, 5]
```

## 方法二：使用 Slice 和 Reverse 方法反转

因为拓展语法是 ES6 专属语法，如果不能使用拓展运算符来创建新数组，使用 slice 也是可以的

slice 方法创建一个新数组，然后再用 reverse 反转

```js
let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = numbers.slice().reverse();

console.log(reversedNumbers);
// [5, 4, 3, 2, 1]

console.log(numbers);
// [1, 2, 3, 4, 5]
```

## 在没有 reverse 方法的情况下反转数组

这种情况可以考虑使用 push

```js
let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = [];

for(let i = numbers.length -1; i >= 0; i--) {
  reversedNumbers.push(numbers[i]);
}

console.log(reversedNumbers);
```

## 使用 JavaScript 编写反转函数

方法原理就是把第一个元素和倒数第一个元素交换，第二个元素和倒数第二个元素交换，以此类推

以此原理编写函数

首先获取索引

```js
function customReverse(originalArray) {
  let leftIndex = 0;
  let rightIndex = originalArray.length - 1;
}
```

如果是要循环，左边的 index 肯定是小于右边的 index 的，所以要写个 while 循环交换值

在此循环内，交换 leftIndex 和 rightIndex 的值

```js
while (leftIndex < rightIndex) {
  // 交换元素
  let temp = originalArray[leftIndex];
  originalArray[leftIndex] = originalArray[rightIndex];
  originalArray[rightIndex] = temp;
}
```

然后 leftIndex 向右移动，rightIndex 向左移动

```js
function customReverse(originalArray) {

  let leftIndex = 0;
  let rightIndex = originalArray.length - 1;

  while (leftIndex < rightIndex) {

    // 用temp变量交换元素
    let temp = originalArray[leftIndex];
    originalArray[leftIndex] = originalArray[rightIndex];
    originalArray[rightIndex] = temp;

    // 将索引移到中间
    leftIndex++;
    rightIndex--;
  }
}
```

以上面的代码循环，等到 leftIndex 的值和 rightIndex 相等的时候就停止循环



> 本片文章引用于：
> [前端全栈开发者 张张:《JavaScript 数组反转教程》](https://mp.weixin.qq.com/s/L3QcYloyjGRo24VhREddZg)
>

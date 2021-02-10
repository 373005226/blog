---
  title: JavaScript 中的类型转换机制
  categories: 文章积累
---

JS 中有六种简单数据类型：`undefined`、`null`、`boolean`、`string`、`number`、`symbol`，以及引用类型：`object`

虽然变量的数据类型是不确定的，但是各种运算符对数据类型是有要求的，如果运算子的类型与预期不符合，就会触发类型转换机制

常见的类型转换有：


**强制转换（显示转换）**

**自动转换（隐式转换）**

## 一：显示转换

显示转换，即我们很清楚可以看到这里发生了类型的转变，常见的方法有：

* `Number()`
* `parseInt()`
* `String()`
* `Boolean()`

### Number()

将任意类型的值转化为数值

先给出类型转换规则：


| 原始值        | 转换结果  |
| ------------- | -----:|
| Undefined      |NaN|
| Null      |0|
| true      |1|
| false      |0|
| String      |视情况而定|
| Symbol      |报错|
| Object      |先调用 toPrimitive，再调用 toNumber|


这里标注下 `string` 类型和 `Object` 类型的
```js
Number('123')   // 123
Number('123abc123') // NaN

// 对象：通常转换成NaN(除了只包含单个数值的数组)
Number({a: 1}) // NaN
Number([1, 2, 3]) // NaN
Number([5]) // 5
```

对于 `string` 而言，`Number` 转换是很严格，只要是一个字符无法被转换那么就被转换为 `NaN`

### parseInt()

```js
parseInt('32a3') //32
```

`parseInt` 相比 `Number`，就没那么严格了，`parseInt` 函数逐个解析字符，遇到不能转换的字符就停下来

### String()

可以将任意类型的值转化成字符串

给出转换规则图：

| 原始值        | 转换结果  |
| ------------- | -----:|
| Undefined      |'Undefined'|
| Null      |'Null'|
| Boolean      |'true' of 'false'|
| Number      |对象的字符串类型|
| String      |String|
| Symbol      |报错|
| Object      |先调用 toPrimitive，再调用 toNumber|

```js
String({a: 1}) // "[object Object]"
String([1, 2, 3]) // "1,2,3"
```

### Boolean()

可以将任意类型的值转为布尔值，转换规则如下：

| 原始值        | 转换为 true |转换为 false  |
| ------------- | -----:|-----:|
| Undefined      |不存在|Undefined'|
| Object      |任意对象|null|
| Boolean      |true|false|
| Number      |非 0 |0 或者是 NaN|
| String      |非空字符串|空字符串|

```js
Boolean({}) // true
Boolean([]) // true
Boolean(new Boolean(false)) // true
```

## 二:隐式转换转换

在隐式转换中，我们可能最大的疑惑是 ：何时发生隐式转换？

我们这里可以归纳为两种情况发生隐式转换的场景：

比较运算 `（==、!=、>、<）、if、while` 需要布尔值地方

算术运算`（+、-、*、/、%）`
除了上面的场景，还要求运算符两边的操作数不是同一类型

### 自动转换为布尔值

在需要布尔值的地方，就会将非布尔值的参数自动转为布尔值，系统内部会调用 `Boolean` 函数

可以得出个小结：

`undefined` 、
`null`、
`false`、
`0`、
`NaN`、
`""`

### 自动转换成字符串

遇到预期为字符串的地方，就会将非字符串的值自动转为字符串

具体规则是：先将复合类型的值转为原始类型的值，再将原始类型的值转为字符串

常发生在 + 运算中，一旦存在字符串，则会进行字符串拼接操作

```js
'5' + 1 // '51'
'5' + true // "5true"
'5' + false // "5false"
'5' + {} // "5[object Object]"
'5' + [] // "5"
'5' + function (){} // "5function (){}"
'5' + undefined // "5undefined"
'5' + null // "5null"
```

除了上面几种会被转化成 false，其他都换被转化成 true

### 自动转换成数值

```js
'5' - '2' // 3
'5' * '2' // 10
true - 1  // 0
false - 1 // -1
'1' - 1   // 0
'5' * []    // 0
false / '5' // 0
'abc' - 1   // NaN
null + 1 // 1
undefined + 1 // NaN
```



> 本片文章来源于：
> [JS 每日一题:《面试官：谈谈 JavaScript 中的类型转换机制》](https://mp.weixin.qq.com/s/spyM5YEGV-UJBM7H7SryjQ)
>

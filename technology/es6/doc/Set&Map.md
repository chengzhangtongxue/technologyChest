# Set
## 简单说明
ES6新增了一种数据结构Set。它类似于数组，但是它的成员是唯一的，成员中没有重复的值。
Set本身是一个构造函数，通过new方式生成
```
const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
  console.log(i);
}
// 2 3 5 4
```
new的时候Set可以传入参数，参数可以传入数组，类似数组的dom对象
一个用处就是去除数组中的重复数据
```
new Set([1,1,2,2,3,3,4,4]);  // result: 1,2,3,4
```
两个对象是总不相等的，所以Set种可以放两个空对象

## Set的属性和方法
Set有 Set.prototype.constructor
      Set.prototype.size 属性
   有 add(value),delete(value),has(value),clear() 方法
   add(value) -> 向Set中添加一个数据
   delete(value) -> 向Set中删除一个数据
   has(value) -> 判断Set中是否有某一个数据
   clear() -> 清空Set中的所有数据 

```
s.add(1).add(2).add(2);
// 注意2被加入了两次

s.size // 2

s.has(1) // true
s.has(2) // true
s.has(3) // false

s.delete(2);
s.has(2) // false
```

Array.from 方法可以把Set对象转化成数组
```
function dedupe(array) {
  return Array.from(new Set(array));
}

dedupe([1, 1, 2, 3]) // [1, 2, 3]
```
## Set的遍历
* - keys()：返回键名的遍历器
* - values()：返回键值的遍历器
* - entries()：返回键值对的遍历器
* - forEach()：使用回调函数遍历每个成员
```
let set = new Set(['red', 'green', 'blue']);

for (let item of set.keys()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.values()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.entries()) {
  console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]

// 也可以默认遍历 它的默认遍历器生成函数就是它的values方法
for (let x of set) {
  console.log(x);
}
// red
// green
// blue
```
Set的forEach用于对每个成员进行操作
```
let set = new Set([1, 2, 3]);
set.forEach((value, key) => console.log(value * 2) )
// 2
// 4
// 6
```

## WeakSet
WeakSet里面只能存放对象，且存放的对象是弱引用，对象可以被垃圾回收机制回收
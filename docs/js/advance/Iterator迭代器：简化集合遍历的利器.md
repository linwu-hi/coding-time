# Iterator 迭代器：简化集合遍历的利器


## 引言

在 JavaScript 中，迭代器（Iterator）是一种用于遍历集合的接口。迭代器提供了一种统一的方式来访问集合中的元素，无论集合的类型和内部结构如何。通过使用迭代器，我们可以轻松地遍历数组、对象、Map、Set 等各种数据结构，并进行相应的操作。

## 1. 迭代器的概念

迭代器是一种遍历集合的接口，它提供了统一的方式来访问集合中的元素。迭代器对象是一个具有特定结构的对象，其中包含一个 `next` 方法，用于返回集合中的下一个元素。

迭代器的工作原理如下：

1. 创建一个迭代器对象，通常通过调用集合对象的 `Symbol.iterator` 方法来获取迭代器对象。
2. 调用迭代器对象的 `next` 方法，每次调用都会返回一个包含 `value` 和 `done` 两个属性的对象。
   - `value` 表示集合中的一个元素。
   - `done` 表示迭代是否已完成，如果为 `true`，则表示迭代结束；如果为 `false`，则表示还有更多元素可供遍历。
3. 重复调用 `next` 方法，直到迭代结束。

JavaScript 中的数组、对象、Map、Set 等数据结构都实现了迭代器接口，因此我们可以使用迭代器来遍历它们的元素。

## 2. 迭代器的属性

迭代器对象具有以下两个重要的属性：

- `next()` 方法：该方法返回一个包含 `value` 和 `done` 两个属性的对象。
  - `value`：表示集合中的一个元素。
  - `done`：表示迭代是否已完成，如果为 `true`，则表示迭代结束；如果为 `false`，则表示还有更多元素可供遍历。
- `Symbol.iterator` 方法：该方法返回迭代器对象自身，用于支持迭代器的迭代。

## 3. 迭代器的应用场景

迭代器在 JavaScript 中有许多应用场景

### 3.1 数组遍历

使用迭代器可以轻松遍历数组的所有元素。通过调用数组对象的 `Symbol.iterator` 方法，可以获取一个迭代器对象，然后使用迭代器的 `next` 方法逐个访问数组的元素。

**示例代码：**

```javascript
const arr = [1, 2, 3, 4, 5];
const iterator = arr[Symbol.iterator]();

let result = iterator.next();
while

 (!result.done) {
  console.log(result.value);
  result = iterator.next();
}
```

### 3.2 对象遍历

使用迭代器可以遍历对象的所有属性。通过调用对象的 `Symbol.iterator` 方法，可以获取一个迭代器对象，然后使用迭代器的 `next` 方法逐个访问对象的属性。

**示例代码：**

```javascript
const obj = { a: 1, b: 2, c: 3 };
const iterator = Object.keys(obj)[Symbol.iterator]();

let result = iterator.next();
while (!result.done) {
  const key = result.value;
  console.log(key, obj[key]);
  result = iterator.next();
}
```

### 3.3 Map 遍历

使用迭代器可以遍历 Map 对象的所有键值对。通过调用 Map 对象的 `entries()` 方法，可以获取一个迭代器对象，然后使用迭代器的 `next` 方法逐个访问 Map 的键值对。

**示例代码：**

```javascript
const map = new Map([["a", 1], ["b", 2], ["c", 3]]);
const iterator = map.entries();

let result = iterator.next();
while (!result.done) {
  const [key, value] = result.value;
  console.log(key, value);
  result = iterator.next();
}
```

### 3.4 Set 遍历

使用迭代器可以遍历 Set 对象的所有元素。通过调用 Set 对象的 `values()` 方法，可以获取一个迭代器对象，然后使用迭代器的 `next` 方法逐个访问 Set 的元素。

**示例代码：**

```javascript
const set = new Set([1, 2, 3, 4, 5]);
const iterator = set.values();

let result = iterator.next();
while (!result.done) {
  console.log(result.value);
  result = iterator.next();
}
```

## 4. 自定义迭代器

除了使用内置数据结构提供的迭代器之外，我们还可以自定义迭代器来遍历自定义数据结构。要实现一个自定义迭代器，我们需要定义一个具有 `next` 方法的对象，并且该对象的 `next` 方法需要返回一个包含 `value` 和 `done` 属性的对象。

**示例代码：**

```javascript
const myIterable = {
  data: [1, 2, 3, 4, 5],
  [Symbol.iterator]() {
    let index = 0;

    return {
      next: () => {
        if (index < this.data.length) {
          return { value: this.data[index++], done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  },
};

for (const item of myIterable) {
  console.log(item);
}
```

在上面的示例中，我们定义了一个自定义数据结构 `myIterable`，它包含一个数组 `data` 和一个自定义的迭代器对象。迭代器对象的 `next` 方法会依次返回数组中的元素，并在遍历结束时返回 `{ value: undefined, done: true }`。



## 参考资料

- [MDN Web Docs - Iteration protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- [Understanding Iterators and Iterables in JavaScript](https://blog.bitsrc.io/understanding-iterators-and-iterables-in-javascript-a381f03f22e0)
- [JavaScript Iterators and Generators: Asynchronous Iteration](https://dev.to/vanguardofdesign/javascript-iterators-and-generators-asynchronous-iteration-22k8)

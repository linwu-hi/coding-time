## 基本概念

> 冒泡排序是一种基础的排序算法。其基本思想是通过不断地比较相邻元素并在必要时进行交换，将最大（或最小）的元素"冒"到序列的一端。



## 排序步骤

> 先来感受到冒泡排序的步骤吧


以数组 `[5, 3, 8, 4, 6]`为例，冒泡排序的步骤如下：

- **第一轮排序：**

比较相邻的元素。第一次比较5和3，5大于3，交换它们两个，数组变成 `[3, 5, 8, 4, 6]`；接着比较5和8，5小于8，不用交换，然后比较8和4，8大于4，交换，数组变为 `[3, 5, 4, 8, 6]`；最后比较8和6，8大于6，交换，数组变为 `[3, 5, 4, 6, 8]`。这样，第一轮比较结束后，最大的数8被排到了最后。

- **第二轮排序：**

再次从前向后比较相邻的元素，这次因为8已经是最大的元素在末尾，所以不再参与比较。先比较3和5，3小于5，不用交换；然后比较5和4，5大于4，交换，数组变为 `[3, 4, 5, 6, 8]`；接着比较5和6，5小于6，不用交换。这样，第二轮排序结束，第二大的元素6也排到了它应该在的位置。

- **后续轮排序：**

如此反复进行，每一轮比较的元素对都比上一轮少一对。直至完成所有的排序。

最终，数组 `[5, 3, 8, 4, 6]` 被排序为 `[3, 4, 5, 6, 8]`。

## 冒泡排序的实现


```javascript
let array = [5, 3, 8, 4, 6];

for(let i = 0; i < array.length; i++) {
  for(let j = 0; j < array.length - i - 1; j++) {
    if(array[j] > array[j + 1]) {
      // 交换元素
      let temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }
}

console.log(array);  // 输出: [3, 

4, 5, 6, 8]
```

此算法的时间复杂度为O(n^2)，因此在处理大量数据时可能效率较低。

## 优化策略

### 交换标记

> 如果在一次遍历过程中没有发生过交换，那么意味着序列已经是有序的，不需要继续排序。我们可以通过设置一个标记来优化算法。如果在某次遍历中没有发生交换，则直接结束排序。

这个优化对于已经部分有序的序列来说，可以大幅度提高效率。


```javascript
let array = [5, 3, 8, 4, 6];
let swapped = true;

while(swapped) {
  swapped = false;
  for(let i = 0; i < array.length - 1; i++) {
    if(array[i] > array[i + 1]) {
      let temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
      swapped = true;
    }
  }
}

console.log(array);  // 输出: [3, 4, 5, 6, 8]
```

### 双向冒泡排序

> 一趟遍历只能确保最大（或最小）的数被移到序列一端，在双向冒泡排序中，一趟遍历包括了两个过程，一个从头至尾，一个从尾至头，这样就能确保在一趟遍历后，最大和最小的数都被移到了正确的位置。

```javascript
let array = [5, 3, 8, 4, 6];
let swapped;
let start = 0;
let end = array.length - 1;

while(start < end) {
  for(let i = start; i < end; i++) {
    if(array[i] > array[i + 1]) {
      let temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
      swapped = i;
    }
  }
  end = swapped;

  for(let i = end; i > start; i--) {
    if(array[i] < array[i - 1]) {
      let temp = array[i];
      array[i] = array[i - 1];
      array[i - 1] = temp;
      swapped = i;
    }
  }
  start = swapped;
}

console.log(array);  // 输出: [3, 4, 5, 6, 8]
```

### 记录上次交换的位置

> 在实际的数据序列中，尾部的有序序列通常不只一个，因此我们可以记住最后一次交换发生的位置，下一次比较到这个位置即可。


```javascript
let array = [5, 3, 8, 4, 6];
let lastExchangeIndex = 0;
let sortBorder = array.length - 1;

for(let i =

 0; i < array.length - 1; i++) {
  let isSorted = true;
  for(let j = 0; j < sortBorder; j++) {
    if(array[j] > array[j + 1]) {
      let temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
      
      isSorted = false;
      lastExchangeIndex = j;
    }
  }
  sortBorder = lastExchangeIndex;
  if(isSorted) {
    break;
  }
}

console.log(array);  // 输出: [3, 4, 5, 6, 8]
```

## 复杂度

| 名称                  | 最佳情况          | 平均情况             | 最坏情况               | 内存      | 稳定性    | 备注      |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **冒泡排序**       | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | 是       |           |

## 参考资料

- [维基百科](https://en.wikipedia.org/wiki/Bubble_sort)
- [YouTube](https://www.youtube.com/watch?v=6Gv8vg0kcHc&index=27&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
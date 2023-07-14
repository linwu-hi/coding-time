# 救生艇

## 题目描述

有一些人需要乘坐救生艇从一个岛屿到另一个岛屿。每个人的体重不同，而救生艇有一定的限重。每艘救生艇最多可同时乘坐两人，但条件是这两人的体重之和不超过限重。求解最少需要多少艘救生艇才能将所有人安全送到目的地。

## 解题步骤

为了解决救生艇的问题，我们可以使用贪心算法来解决。

1. 首先对人员的体重数组 `people` 进行排序，从小到大。
2. 使用两个指针 `left` 和 `right` 分别指向体重数组的起始位置和末尾位置。
3. 初始化 `count` 变量为 0，表示救生艇的数量。
4. 在循环中，比较 `left` 和 `right` 位置的人员体重之和：
   - 如果体重之和不超过限重，表示可以安排这两个人乘坐一艘救生艇，将 `left` 向右移动一位，将 `right` 向左移动一位，同时 `count` 加一。
   - 如果体重之和超过限重，表示无法安排这两个人乘坐同一艘救生艇，只能让 `right` 的人单独乘坐一艘救生艇，将 `right` 向左移动一位，同时 `count` 加一。
5. 循环结束后，返回 `count` 作为最少需要的救生艇数量。

下面是使用贪心算法解决救生艇问题的算法框架：

```javascript
function numRescueBoats(people, limit) {
  people.sort((a, b) => a - b);

  let left = 0;
  let right = people.length - 1;
  let count = 0;

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;
      right--;
    } else {
      right--;
    }
    count++;
  }

  return count;
}
```
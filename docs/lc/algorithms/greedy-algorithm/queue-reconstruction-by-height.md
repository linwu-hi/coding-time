# 根据身高重建队列

## 题目描述

假设有打乱顺序的一群人站成一个队列。每个人由一个整数对 `(h, k)` 表示，其中 `h` 是这个人的身高，`k` 是前面身高大于或等于 `h` 的人数。编写一个算法来重建队列。

注意：
- 总人数少于 1100 人。

## 解题步骤

为了解决根据身高重建队列的问题，我们可以使用贪心算法来解决。贪心算法的思路是先安排身高较高的人，然后再依次插入身高较矮的人，使其满足前面身高大于或等于 `h` 的人数的要求。

我们按照以下步骤进行解题：

1. 将所有人按照身高 `h` 进行降序排序，如果身高相同，则按照 `k` 进行升序排序。
2. 创建一个空数组 `result` 用于存储重建后的队列。
3. 遍历排序后的人员列表，对于每个人 `(h, k)`：
   - 将其插入到 `result` 数组的索引 `k` 的位置，这样可以确保前面的人数大于或等于 `k`。
4. 返回重建后的队列 `result`。

以下是使用贪心算法解决根据身高重建队列问题的算法框架：

```javascript
function reconstructQueue(people) {
  people.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return b[0] - a[0];
  });

  const result = [];

  for (let i = 0; i < people.length; i++) {
    result.splice(people[i][1], 0, people[i]);
  }

  return result;
}
```
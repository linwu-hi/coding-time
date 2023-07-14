# 雇用K名工人的最低成本

## 题目描述

有一组工人，每个工人的工作质量为 `quality[i]`，期望的最低工资为 `wage[i]`。现在需要雇佣 `K` 名工人来完成一项工作。其中，每名工人只能接受与其工作质量相同或更高的工资。求解需要满足工人数量为 `K` 的情况下，所需的最小总工资。

## 解题步骤

为了解决最小成本雇佣工人的问题，我们可以使用贪心算法来解决。贪心算法的思路是优先选择工资效益最高的工人。

我们按照以下步骤进行解题：

1. 创建一个数组 `ratios[]`，用于存储每个工人的工资与工作质量的比率（`wage[i]/quality[i]`）。
2. 将工人按照 `ratios[]` 的升序进行排序，以便能够从低比率到高比率依次选择工人。
3. 创建一个最小堆 `pq`，用于维护当前选择的 `K` 名工人的最高工资。
4. 初始化变量 `sumQuality` 为 0，用于累计当前选择的工人的工作质量之和。
5. 遍历排序后的工人列表，对于每个工人：
   - 将其加入堆 `pq`。
   - 将其工作质量添加到 `sumQuality`。
   - 如果堆 `pq` 中的工人数量超过 `K`，则移除堆顶的工人（即最高工资的工人）。
   - 如果堆 `pq` 中的工人数量等于 `K`，计算当前总工资 `currWage`，即当前选择的 `K` 名工人中的最高工资乘以 `sumQuality`。
     - 如果 `currWage` 小于当前的最小总工资 `minWage`，更新 `minWage` 的值。
6. 遍历结束后，`minWage` 就是所需的最小总工资。

以下是使用贪心算法解决最小成本雇佣工人问题的算法框架：

```javascript
function mincostToHireWorkers(quality, wage, K) {
  const workers = [];
  const n = quality.length;

  for (let i = 0; i < n; i++) {
    const ratio = wage[i] / quality[i];
    workers.push([quality[i], wage[i], ratio]);
  }

  workers.sort((a, b) => a[2] - b[2]);

  let sumQuality = 0;
  let minWage = Infinity;
  const pq = new MaxHeap();

  for (let i = 0; i < n; i++) {
    const [currQuality, currWage, ratio] = workers[i];

    pq.insert(currQuality);
    sumQuality += currQuality;

    if (pq.size() > K) {
      sumQuality -= pq.extractMax();
    }

    if (pq.size() === K) {
      const currWageSum = sumQuality * ratio;
      minWage = Math.min(minWage, currWageSum);
    }
  }

  return minWage;
}
```

# 划分字母区间

## 题目描述

给定一个字符串 `S`，将字符串划分为尽可能多的片段，使得每个字母最多出现在一个片段中。返回每个片段的长度列表。

## 解题步骤

为了解决划分字母区间的问题，我们可以使用贪心算法来解决。贪心算法的思路是尽量选择包含较大字母范围的片段，以确保每个字母只出现在一个片段中。

我们按照以下步骤进行解题：

1. 创建一个字母表 `lastIndex` 来存储每个字母最后出现的索引。
2. 遍历字符串 `S`，对于每个字母 `S[i]`，更新字母在 `lastIndex` 中的索引为 `i`。
3. 初始化变量 `start` 和 `end`，表示当前片段的起始位置和结束位置，初始值均为 0。
4. 遍历字符串 `S`，对于每个字母 `S[i]`：
   - 更新当前片段的结束位置 `end` 为 `Math.max(end, lastIndex[S[i]])`，确保当前片段包含了所有之前出现的字母。
   - 如果当前位置 `i` 等于当前片段的结束位置 `end`，说明当前片段中的所有字母都在该片段中且没有出现在其他片段中，此时可以将当前片段加入结果列表，并更新下一个片段的起始位置 `start` 为 `end + 1`。
5. 返回结果列表，即每个片段的长度。

以下是使用贪心算法解决划分字母区间问题的算法框架：

```javascript
function partitionLabels(S) {
  const lastIndex = {};

  for (let i = 0; i < S.length; i++) {
    lastIndex[S[i]] = i;
  }

  let start = 0;
  let end = 0;
  const result = [];

  for (let i = 0; i < S.length; i++) {
    end = Math.max(end, lastIndex[S[i]]);

    if (i === end) {
      result.push(end - start + 1);
      start = end + 1;
    }
  }

  return result;
}
```

# 判断字符串排列

给定两个字符串`s1`和`s2`，判断`s2`是否包含`s1`的任意排列。如果是，返回`true`；否则，返回`false`。

**示例：**

输入：s1 = "ab"，s2 = "eidbaooo"
输出：true
解释：s2 包含 s1 的一个排列（"ba"）。

输入：s1 = "ab"，s2 = "eidboaoo"
输出：false
解释：s2 并不包含 s1 的任意排列。

## **题目分析与解题步骤：**

这个问题可以使用滑动窗口算法来解决。我们可以维护一个窗口，大小等于`s1`的长度，在`s2`上滑动窗口，并比较窗口内的字符是否与`s1`中的字符构成相同的排列。

解题步骤如下：

1. 初始化两个计数器对象`counter1`和`counter2`，用于记录`s1`和当前窗口内字符的出现次数。

2. 遍历字符串`s1`，并统计每个字符的出现次数，存储在`counter1`中。

3. 初始化两个指针`left`和`right`，分别指向窗口的左右边界。

4. 在`s2`上使用滑动窗口，开始从左向右滑动窗口。

5. 在每次滑动窗口时，更新窗口内字符的出现次数`counter2`。同时，比较`counter1`和`counter2`是否相等，如果相等，表示当前窗口内的字符与`s1`中的字符构成相同的排列。

6. 如果相等，返回`true`。

7. 如果不相等，继续滑动窗口，即将窗口的左边界向右移动一位，并更新`counter2`。

8. 重复步骤5-7，直到窗口滑动到`s2`的末尾。

9. 如果未找到符合条件的排列，返回`false`。

## **JavaScript解题框架：**


```javascript
function checkInclusion(s1, s2) {
    let counter1 = {};
    let counter2 = {};

    // 统计 s1 中字符的出现次数
    for (let char of s1) {
        counter1[char] = (counter1[char] || 0) + 1;
    }

    let left = 0;
    let right = 0;

    while (right < s2.length) {
        // 扩大窗口
        let char = s2[right];
        counter2[char] = (counter2[char] || 0) + 1;

        // 检查窗口内字符的出现次数是否与 s1 相同
        if (right - left + 1 === s1.length) {
            if (compareCounters(counter1, counter2)) {
                return true;
            }
            // 缩小窗口
            char = s2[left];
            counter2[char]--;
            if (counter2[char] === 0) {
                delete counter2[char];
            }
            left++;
        }

        right++;
    }

    return false;
}

// 比较两个计数器对象的键值对是否相等
function compareCounters(counter1, counter2) {
    for (let key in counter1) {
        if (counter1[key] !== counter2[key]) {
            return false;
        }
    }
    return true;
}
```

在这个框架中，我们使用了两个计数器对象`counter1`和`counter2`，分别用于统计`s1`和窗口内字符的出现次数。

我们首先遍历`s1`，统计每个字符的出现次数，存储在`counter1`中。然后，使用滑动窗口在`s2`上进行匹配。在每次滑动窗口时，我们将当前字符的出现次数添加到`counter2`中，并与`counter1`进行比较。如果两个计数器对象的键值对相等，则表示当前窗口内的字符与`s1`中的字符构成相同的排列。

最后，如果找到符合条件的排列，返回`true`；否则，返回`false`。


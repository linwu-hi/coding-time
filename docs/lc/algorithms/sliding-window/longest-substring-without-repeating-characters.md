# 无重复字符的最长子串

给定一个字符串`s`，请你找出其中不含有重复字符的最长子串的长度。

## **问题分析：**

这个问题可以通过滑动窗口算法来解决。我们可以使用两个指针，即`left`和`right`，来构建和维护一个窗口，确保窗口内的字符不重复。通过不断地移动指针，我们可以找到最长的不含重复字符的子串。

## **解题步骤：**

1. 初始化两个指针`left`和`right`，并初始化最长子串的长度`maxLength`为0。

2. 创建一个哈希集合（或者字符数组）`set`来存储窗口内的字符。哈希集合可以快速判断字符是否出现过。

3. 使用`right`指针向右移动，扩大窗口。在每次移动时，检查当前字符是否已经在哈希集合中。

   - 如果当前字符不在集合中，将其添加到集合中，并更新最长子串的长度`maxLength`为当前窗口的大小（`right - left + 1`）。
   - 如果当前字符已经在集合中，表示遇到了重复字符，需要移动`left`指针，并将`left`指针对应的字符从集合中删除，以缩小窗口。

4. 重复步骤3，直到`right`指针达到字符串的末尾。

5. 返回最长子串的长度`maxLength`。

## **JavaScript解题框架：**

下面是一个使用JavaScript实现滑动窗口算法解决最长无重复字符子串问题的框架代码：

```javascript
function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let left = 0;
    let right = 0;
    let set = new Set();

    while (right < s.length) {
        if (!set.has(s[right])) {
            set.add(s[right]);
            maxLength = Math.max(maxLength, right - left + 1);
            right++;
        } else {
            set.delete(s[left]);
            left++;
        }
    }

    return maxLength;
}
```

在这个框架中，我们使用了`left`和`right`两个指针来构建窗口，`set`集合用于存储窗口内的字符。我们不断地向右移动`right`指针，如果遇到重复字符，则移动`left`指针来缩小窗口。在每次移动`right`指针时，都会更新最长子串的长度`maxLength`。最后，我们返回最长子串的长度作为结果。
# 最长重复字符替换


给定一个仅包含大写英文字母的字符串`s`和一个整数`k`，你可以对任何字符串中的字符进行最多`k`次替换。请你找出并返回替换后最长的重复字符子串的长度。

**示例:**

输入：s = "ABAB", k = 2
输出：4
解释：使用两个'A'替换为两个'B',反之亦然。

输入：s = "AABABBA", k = 1
输出：4
解释：将中间的一个'A'替换为'B',字符串变为"AABBBBA"。
子串 "BBBB" 有最长重复字母, 长度为4。

## **题目分析与解题步骤：**

为了解决这个问题，我们可以使用滑动窗口的方法。我们需要找出一个最长的窗口，这个窗口内部最多包含`k`个不同的字符。我们将这个窗口内的所有其他字符全部替换为出现次数最多的那个字符，就可以得到一个全是同一字符的字符串。

解题步骤如下：

1. 初始化两个指针`left`和`right`，都指向字符串的开始。

2. 不断地向右移动`right`指针，扩大窗口。每次移动时，记录当前窗口中出现次数最多的字符的数量。同时，如果`right - left + 1`（当前窗口的大小）减去出现次数最多的字符的数量大于`k`，说明不能通过替换得到全是同一字符的字符串，此时需要移动`left`指针，缩小窗口。

3. 每次移动`right`指针，都尝试用当前窗口的大小更新最长重复字符子串的长度。

下面是对应的JavaScript代码：

```javascript
function characterReplacement(s, k) {
    let count = new Array(26).fill(0);
    let maxCount = 0, maxLength = 0;
    let left = 0, right = 0;

    while (right < s.length) {
        count[s.charCodeAt(right) - 'A'.charCodeAt(0)]++;
        maxCount = Math.max(maxCount, count[s.charCodeAt(right) - 'A'.charCodeAt(0)]);

        if (right - left + 1 - maxCount > k) {
            count[s.charCodeAt(left) - 'A'.charCodeAt(0)]--;
            left++;
        } else {
            maxLength = Math.max(maxLength, right - left + 1);
        }

        right++;
    }

    return maxLength;
}

```

在这段代码中，我们使用了一个数组`count`来记录每个字符的出现次数，`maxCount`来记录窗口中出现次数最多的字符的数量，`maxLength`来记录最长重复字符子串的长度。在每次移动`right`指针时，我们都会更新`count`和`maxCount`，并且如果当前窗口不能通过最多`k`次替换得到全是同一字符的字符串，我们就会移动`left`指针，缩小窗口。最后，返回的`maxLength`就是最长重复字符子串的长度。
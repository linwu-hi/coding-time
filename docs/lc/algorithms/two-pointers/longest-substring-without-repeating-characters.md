# 无重复字符的最长子串

## **问题描述**：

给定一个字符串，找出不含有重复字符的最长子串的长度。

示例：

输入: "abcabcbb"

输出: 3 

解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

## **解题步骤**：

1. 建立一个哈希表（JavaScript中可以使用一个对象），用来保存每个字符和它的索引。

2. 设置两个指针，一个快指针用来遍历整个字符串，一个慢指针用来标记无重复字符子串的起始位置。

3. 在遍历字符串的过程中，当遇到重复字符时，将慢指针移动到重复字符的下一个位置。注意，慢指针只能向前移动，不能后退。

4. 每次移动快指针后，都计算一次最大的无重复字符子串的长度。

5. 当快指针遍历完整个字符串后，返回最大的无重复字符子串的长度。

## **解题框架**：


```javascript
function lengthOfLongestSubstring(s) {
    let map = {};
    let longest = 0;
    let start = 0;
    let i = 0;

    while (i < s.length) {
        let char = s[i];
        if (map[char] !== undefined) {
            start = Math.max(start, map[char] + 1);
        }
        map[char] = i;
        longest = Math.max(longest, i - start + 1);
        i++;
    }

    return longest;
}

```

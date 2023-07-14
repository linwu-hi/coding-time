# 正则表达式匹配

给定一个输入字符串 `s` 和一个模式 `p`，实现支持 `.` 和 `*` 的正则表达式匹配。

- `.` 匹配任意单个字符。
- `*` 匹配零个或多个前面的元素。

匹配应覆盖**整个**输入字符串（不是部分匹配）。

**注意**

- `s` 可能为空，且只包含小写字母 `a-z`。
- `p` 可能为空，且只包含小写字母 `a-z`，以及字符 `.` 或 `*`。

## 示例

**示例 1**

输入:
```
s = 'aa'
p = 'a'
```

输出: `false`

解释: `a` 与字符串 `aa` 不完全匹配。

**示例 2**

输入:
```
s = 'aa'
p = 'a*'
```

输出: `true`

解释: `*` 表示前面的元素 `a` 的零个或多个。因此，通过重复 `a` 一次，它变为 `aa`。

**示例 3**

输入:
```
s = 'ab'
p = '.*'
```

输出: `true`

解释: `.*` 表示 "零个或多个 (`*`) 任意字符 (`.`)"。

**示例 4**

输入:
```
s = 'aab'
p = 'c*a*b'
```

输出: `true`

解释: `c` 可以重复 0 次，`a` 可以重复 1 次。因此，它与 `aab` 匹配。

## 参考资料

- [YouTube](https://www.youtube.com/watch?v=l3hda49XcDE&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=71&t=0s)
- [LeetCode](https://leetcode.com/problems/regular-expression-matching/description/)
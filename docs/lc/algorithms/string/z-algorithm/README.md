# Z 算法

Z 算法用于在线性时间 `O(|W| + |T|)` 内查找主字符串 `T` 中的一个单词 `W` 的出现位置。

给定长度为 `n` 的字符串 `S`，该算法产生一个数组 `Z`，其中 `Z[i]` 表示以 `S[i]` 开头的最长子串，该子串也是 `S` 的前缀。通过计算在单词 `W` 后连接一个特殊字符（例如 `$`）和文本 `T` 后所得到的字符串的 `Z` 数组，可以帮助进行模式匹配。如果存在某个索引 `i`，使得 `Z[i]` 等于模式的长度，则该模式必定存在于该位置。

尽管可以使用两层嵌套循环以 `O(|W| * |T|)` 的时间计算 `Z` 数组，但下面的策略展示了如何在线性时间内获得 `Z` 数组。其基本思想是，当我们迭代字符串中的字母时（索引从 `1` 到 `n-1`），我们维护一个区间 `[L, R]`，它是具有最大 `R` 的区间，使得 `1 ≤ L ≤ i ≤ R` 且 `S[L...R]` 是一个同时是前缀和子串的字符串（如果不存在这样的区间，则令 `L = R = -1`）。对于 `i = 1`，我们可以通过比较 `S[0...]` 和 `S[1...]` 来计算 `L` 和 `R`。

**Z 数组示例**

```
Index            0   1   2   3   4   5   6   7   8   9  10  11 
Text             a   a   b   c   a   a   b   x   a   a   a   z
Z values         X   1   0   0   3   1   0   0   2   2   1   0 
```

其他示例

```
str =  a a a a a a
Z[] =  x 5 4 3 2 1
```

```
str =  a a b a a c d
Z[] =  x 1 0 2 1 0 0
```

```
str =  a b a b a b a b
Z[] =  x 0 6 0 4 0 2 0
```

**Z 盒子示例**

![z-box](https://ivanyu.me/wp-content/uploads/2014/09/zalg1.png)

## 复杂度

- **时间复杂度：**`O(|W| + |T|)`
- **空间复杂度：**`O(|W|)`

## 参考资料

- [GeeksForGeeks](https://www.geeksforgeeks.org/z-algorithm-linear-time-pattern-searching-algorithm/)
- [YouTube](https://www.youtube.com/watch?v=CpZh4eF8QBw&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=70)
- [Ivan Yurchenko 的 Z 算法文章](https://ivanyu.me/blog/2013/10/15/z-algorithm/)
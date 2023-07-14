# Knuth–Morris–Pratt 算法

Knuth–Morris–Pratt 字符串搜索算法（或 KMP 算法）通过利用以下观察结果，在主文本字符串 `T` 中搜索单词 `W` 的出现。当出现不匹配时，单词本身提供了足够的信息来确定下一次匹配可以开始的位置，从而避免重新检查先前匹配的字符。

## 复杂度

- **时间复杂度：** `O(|W| + |T|)`（比朴素算法 `O(|W| * |T|)` 更快）
- **空间复杂度：** `O(|W|)`

## 参考资料

- [维基百科](https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm)
- [YouTube](https://www.youtube.com/watch?v=GTJr8OvyEVQ&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
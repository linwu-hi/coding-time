# 编辑距离

编辑距离（Levenshtein distance）是一种衡量两个序列之间差异的字符串度量。简单地说，编辑距离是将一个字符串转换为另一个字符串所需的最少单字符编辑（插入、删除或替换）次数。

## 定义

数学上，两个字符串 `a` 和 `b`（长度分别为 `|a|` 和 `|b|`）之间的编辑距离由下式给出：
![Levenshtein](https://wikimedia.org/api/rest_v1/media/math/render/svg/4cf357d8f2135035207088d2c7b890fb4b64e410)
其中，
![Levenshtein](https://wikimedia.org/api/rest_v1/media/math/render/svg/f0a48ecfc9852c042382fdc33c19e11a16948e85)
是指示函数，当 ![Levenshtein](https://wikimedia.org/api/rest_v1/media/math/render/svg/231fda9ee578f0328c5ca28088d01928bb0aaaec) 时等于 0，否则等于 1，
而
![Levenshtein](https://wikimedia.org/api/rest_v1/media/math/render/svg/bdc0315678caad28648aafedb6ebafb16bd1655c)
是字符串 `a` 的前 `i` 个字符和字符串 `b` 的前 `j` 个字符之间的距离。

注意，最小值中的第一个元素对应删除（从 `a` 到 `b`），第二个元素对应插入，第三个元素对应匹配或不匹配，具体取决于相应的符号是否相同。

## 示例

例如，字符串 `kitten` 和 `sitting` 之间的编辑距离为 `3`，因为以下三个编辑操作将一个字符串变成另一个字符串，而没有办法少于三个编辑操作：

1. **k**itten → **s**itten（用 "s" 替换 "k"）
2. sitt**e**n → sitt**i**n（用 "i" 替换 "e"）
3. sittin → sittin**g**（在末尾插入 "g"）。

## 应用

编辑距离在许多应用中都有广泛的应用，例如拼写检查器、光学字符识别纠错系统、模糊字符串搜索以及基于翻译记忆的自然语言翻译辅助软件。

## 动态规划方法解释

让我们以查找字符串 `ME` 和 `MY` 之间的最小编辑距离为例。直观上，您已经知道这里的最小编辑距离是 `1`，即将 `E` 替换为 `Y`。但是，让我们试图将其正式化为算法形式，以便能够处理更复杂的示例，如将 `Saturday` 转换为 `Sunday`。

为了将上述数学公式应用于 `ME → MY` 转换，我们需要事先知道 `ME → M`、`M → MY` 和 `M → M` 转换的最小编辑距离。然后，我们需要选择其中最小的一个，并在最后一个字母 `E → Y` 上增加一次操作。因此，`ME → MY` 转换的最小编辑距离是基于三个先前可能的转换计算得出的。

为了进一步解释这一点，我们来绘制下面的矩阵：

![Levenshtein 矩阵](https://cdn-images-1.medium.com/max/1600/1*aTunSUoy0BJyYBVn4tWGrA.png)

- 单元格 `(0:1)` 包含红色数字 1。这意味着我们需要 1 次操作将 `M` 转换为空字符串。这就是为什么这个数字是红色的。
- 单元格 `(0:2)` 包含红色数字 2。这意味着我们需要 2 次操作将 `ME` 转换为空字符串。这是通过删除 `E` 和 `M` 完成的。
- 单元格 `(1:0)` 包含绿色数字 1。这意味着我们需要 1 次操作将空字符串转换为 `M`。这是通过插入 `M` 完成的。这就是为什么这个数字是绿色的。
- 单元格 `(2:0)` 包含绿色数字 2。这意味着我们需要 2 次操作将空字符串转换为 `MY`。这是通过插入 `Y` 和 `M` 完成的。
- 单元格 `(1:1)`

 包含数字 0。这意味着将 `M` 转换为 `M` 不需要任何操作。
- 单元格 `(1:2)` 包含红色数字 1。这意味着我们需要 1 次操作将 `ME` 转换为 `M`。这是通过删除 `E` 完成的。
- 以此类推...

对于我们这样小的矩阵（只有 `3x3`），看起来很简单。但是，您可以从中找到可以应用于计算更大矩阵（例如，用于 `Saturday → Sunday` 转换的 `9x7` 矩阵）的基本概念。

根据上述公式，您只需要找到相邻单元格 `(i-1:j)`、`(i-1:j-1)` 和 `(i:j-1)` 中的最小值，然后在行 `i` 的字母和列 `j` 的字母不同的情况下加 `1`。

您可以清楚地看到问题的递归性质。

![Levenshtein 矩阵](https://cdn-images-1.medium.com/max/1600/1*w8UB4DSvBnAK6mBXRGQDjw.png)

让我们为这个问题绘制一个决策图。

![最小编辑距离决策图](https://cdn-images-1.medium.com/max/1600/1*8jD0qvr5B9PwRFM_9z7q9A.png)

您可以在图片中看到一些带有红色标记的重叠子问题。而且没有办法减少操作数并使其少于公式中那三个相邻单元格中的最小值。

您还可以注意到矩阵中的每个单元格编号都是基于先前单元格计算出来的。因此，这里应用了自底向上的缓存填充技术。

通过进一步应用这个原理，我们可以解决更复杂的问题，例如 `Saturday → Sunday` 转换。

![Levenshtein 距离](https://cdn-images-1.medium.com/max/2600/1*497gMaFErzJpCXG7kS_7dw.png)

## 参考资料

- [维基百科](https://en.wikipedia.org/wiki/Levenshtein_distance)
- [YouTube](https://www.youtube.com/watch?v=We3YDTzNXEk&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [ITNext](https://itnext.io/dynamic-programming-vs-divide-and-conquer-2fea680becbe)
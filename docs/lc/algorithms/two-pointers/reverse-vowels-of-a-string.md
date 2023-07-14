# 反转字符串中的元音字母

## **问题描述**：

编写一个函数，以字符串作为输入，反转该字符串中的元音字母。

示例：

输入："hello"

输出："holle"

注意:

元音字母不包含字母"y"。

## **解题步骤**：

1. 设置两个指针，一个在开头，一个在末尾。开头的指针称为左指针，末尾的指针称为右指针。

2. 遍历字符串，如果左指针指向的字符不是元音字母，左指针向右移动；如果右指针指向的字符不是元音字母，右指针向左移动。

3. 当左右指针都指向元音字母时，交换两个指针指向的元素，然后左指针右移一位，右指针左移一位。

4. 重复步骤 2 和 3，直到左指针大于或等于右指针，此时所有的元音字母已经反转，算法结束。

## **解题框架**：


```javascript
function reverseVowels(s) {
    let vowels = 'aeiouAEIOU';
    let chars = Array.from(s);
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (!vowels.includes(chars[left])) {
            left++;
            continue;
        }
        if (!vowels.includes(chars[right])) {
            right--;
            continue;
        }
        let temp = chars[left];
        chars[left++] = chars[right];
        chars[right--] = temp;
    }
    return chars.join('');
}
```

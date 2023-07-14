const fs = require('fs');
const path = require('path');

const prependText = `|  [点击在线阅读，体验更好](https://www.coding-time.cn)                                 |  [链接](https://www.coding-time.cn)                                     
| --------------------------------------- | -------------------------------------------- |
| **[现代JavaScript高级小册](https://www.coding-time.cn)**                      | [链接](https://www.coding-time.cn)           |
| **[深入浅出Dart](https://www.coding-time.cn)**                                | [链接](https://www.coding-time.cn)         |
| **[现代TypeScript高级小册](https://www.coding-time.cn)**                      | [链接](https://www.coding-time.cn)           |
`;

function writeToMarkdownFiles(directory, content) {
  // 递归遍历目录
  function traverseDirectory(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);

      // 如果是 node_modules 目录，则跳过
      if (filePath.includes('node_modules')) {
        return;
      }

      if (stats.isDirectory()) {
        // 如果是目录，则递归遍历子目录
        traverseDirectory(filePath);
      } else if (stats.isFile() && path.extname(file) === '.md') {
        // 如果是md文件，则向文件头部写入内容
        const data = fs.readFileSync(filePath, 'utf8');
        const updatedData = `\n${content}\n\n\n${data}`;
        fs.writeFileSync(filePath, updatedData);
        console.log(`Updated ${filePath}`);
      }
    });
  }

  traverseDirectory(directory);
}

// 示例用法：
const directoryPath = '/Users/vnues/coding-time'; // 替换为实际的目录路径

writeToMarkdownFiles(directoryPath, prependText);

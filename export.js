const fs = require('fs').promises;
const path = require('path');

function getValidFileName(title) {
  return title.replace(/[\\/:*?"<>|]/g, ' '); // 替换非法字符为空格
}

async function copyMdFilesToExport(srcDir, destDir) {
  // 读取源目录下的所有文件和子目录
  const items = await fs.readdir(srcDir);
  for (const item of items) {
    const itemPath = path.join(srcDir, item);

    // 检查文件是否为md文件
    if ((await fs.stat(itemPath)).isFile() && path.extname(item) === '.md') {
      const content = await fs.readFile(itemPath, 'utf-8');

      // 使用正则表达式获取一级标题
      const titleMatch = content.match(/^#\s+(.+?)\s*$/m);
      const title = titleMatch ? titleMatch[1] : path.basename(item, '.md');

      // 获取合法的文件名
      const validFileName = getValidFileName(title);

      // 构建目标文件路径
      const destinationPath = path.join(destDir, `${validFileName}.md`);

      // 复制文件
      await fs.copyFile(itemPath, destinationPath);
    }

    // 如果是子目录，则递归处理子目录
    if ((await fs.stat(itemPath)).isDirectory()) {
      await copyMdFilesToExport(itemPath, destDir);
    }
  }
}

const lcDir = '/Users/vnues/coding-time/docs/lc';         // lc目录路径
const exportDir = '/Users/vnues/coding-time/export'; // export目录路径


(async()=>{
// 在复制前，先删除之前的 export 目录，确保每次运行都是干净的

await fs.rm(exportDir, { recursive: true, force: true });

// 创建 export 目录
await fs.mkdir(exportDir);

await copyMdFilesToExport(lcDir, exportDir);

})

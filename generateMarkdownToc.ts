// @ts-nocheck
import fs from 'fs';
import { dirName } from './docs/.vuepress/sidebar/dirName';

function generateMarkdownToc(data, prefix = '') {
  let toc = '';

  function generateTocItem(item, prefix) {
    const link = item.link ? item.link : prefix + item + '.md';
    toc += `- [${item.text}](docs/${link})\n`;

    if (item.children && item.children.length > 0) {
      toc += item.children.map(child => {
        return `  - [${child}](docs/${prefix + child}.md)`;
      }).join('\n') + '\n';
    }
  }

  data.forEach(item => {
    if (typeof item === 'string') {
      generateTocItem(item, prefix);
    } else {
      for (const key in item) {
        const subItem = item[key];
        const subPrefix = subItem.prefix ? subItem.prefix : '';
        generateTocItem(subItem, prefix + subPrefix);
      }
    }
  });

  return toc;
}

const markdownToc = generateMarkdownToc(dirName['/lc/']);

console.log(markdownToc);

fs.writeFileSync('dirname.md', markdownToc, 'utf8');

// @ts-nocheck
import {dirName} from './docs/.vuepress/sidebar/dirName'
import fs from 'fs'

function generateMarkdownToc(data) {
  let toc = '';

  function generateTocItem(item, prefix = '') {
    const link = item.link ? item.link : prefix + item + '.md';
    toc += `- [${item.text}](docs/${link}.md)\n`;

    if (item.children && item.children.length > 0) {
      toc += item.children.map(child => {
        return `  - [${child}](docs/${prefix + child}.md)`;
      }).join('\n') + '\n';
    }
  }

  data['/'].forEach(item => {
    const prefix = item.prefix ? item.prefix : '';
    generateTocItem(item, prefix);
  });

  return toc;
}

const markdownToc = generateMarkdownToc(dirName);

console.log(markdownToc);


fs.writeFileSync('dirname.md', markdownToc, 'utf8');


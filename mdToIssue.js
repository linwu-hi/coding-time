const fs = require('fs');
const path = require('path');
const { Octokit } = require('@octokit/rest');

// GitHub personal access token
const token = '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';

// GitHub repository information
const owner = 'linwu-hi';
const repo = 'coding-time';

// Directory path of the docs folder
const docsDirectory = './docs';

// Labels to be added to each issue
const labelColors = {
  javascript: 'red',
  typescript: 'lightblue',
  dart: '#0000FF',
  leetcode: '#FFFF00',
  '数据结构和算法': '#FF00FF',
  'data-structures': '#00FFFF',
  algorithms: '#000000'
};

// Labels to be added to each issue
const issueLabels = [
  'javascript',
  'typescript',
  'dart',
  'leetcode',
  '数据结构和算法',
  'data-structures',
  'algorithms'
].map(label => ({ name: label, color: labelColors[label] }));

// Initialize Octokit
const octokit = new Octokit({ auth: token });

// File path to store the uploaded files record
const recordFilePath = './uploaded_files.txt';



// Directories to be excluded
const excludedDirectories = ['.vuepress', 'node_modules'];
// Function to read all Markdown files in the given directory

async function readMarkdownFiles(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !excludedDirectories.includes(file)) {
      await readMarkdownFiles(filePath); // Recursively read files in non-excluded subdirectories
    } else if (stat.isFile() && path.extname(file) === '.md') {
      const content = fs.readFileSync(filePath, 'utf8');
      const title = path.basename(file, '.md');
      if (!isFileUploaded(title)) {
        await createIssue(title, content, issueLabels);
        addUploadedFile(title);
      }
    }
  }
}

// Function to create GitHub issue
async function createIssue(title, body, labels) {
  try {
    const response = await octokit.issues.create({
      owner: owner,
      repo: repo,
      title: title,
      body: body,
      labels: labels
    });

    console.log(`Successfully created issue: ${title}`);
  } catch (error) {
    console.log(`Failed to create issue: ${title}`);
    console.log(`Error: ${error.message}`);
  }
}

// Function to check if a file has been uploaded
function isFileUploaded(filename) {
  if (fs.existsSync(recordFilePath)) {
    const uploadedFiles = fs.readFileSync(recordFilePath, 'utf8').split('\n');
    return uploadedFiles.includes(filename);
  }
  return false;
}

// Function to add uploaded file to the record
function addUploadedFile(filename) {
  fs.appendFileSync(recordFilePath, filename + '\n', 'utf8');
}

// Read all Markdown files in the docs directory (excluding specified directories) and create issues
readMarkdownFiles(docsDirectory)
  .then(() => {
    console.log('All issues created.');
  })
  .catch((error) => {
    console.log('Error:', error);
  });

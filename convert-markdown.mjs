import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function convertMarkdownFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Normalize line endings
  const normalizedContent = content.replace(/\r\n/g, '\n');
  
  // Parse frontmatter
  const frontmatterMatch = normalizedContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!frontmatterMatch) {
    console.log(`No frontmatter found in ${filePath}`);
    return false;
  }
  
  const [, frontmatter, markdownContent] = frontmatterMatch;
  
  // Check if it has setup frontmatter
  const setupMatch = frontmatter.match(/setup:\s*\|\s*\n([\s\S]*?)(?=\n\w+:|$)/);
  if (!setupMatch) {
    console.log(`No setup found in ${filePath}`);
    return false;
  }
  
  const setupCode = setupMatch[1].trim();
  
  // Remove setup from frontmatter
  const newFrontmatter = frontmatter.replace(/setup:\s*\|\s*\n([\s\S]*?)(?=\n\w+:|$)/, '').trim();
  
  // Create new content with imports at the top
  const newContent = `---\n${newFrontmatter}\n---\n${setupCode}\n\n${markdownContent}`;
  
  // Write to .mdx file
  const mdxPath = filePath.replace('.md', '.mdx');
  fs.writeFileSync(mdxPath, newContent);
  
  // Remove old .md file
  fs.unlinkSync(filePath);
  
  console.log(`Converted ${filePath} to ${mdxPath}`);
  return true;
}

function processDirectory(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    
    if (entry.isDirectory()) {
      processDirectory(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      convertMarkdownFile(fullPath);
    }
  }
}

// Process src/pages directory
const pagesDir = path.join(__dirname, 'src', 'pages');
processDirectory(pagesDir);

console.log('Conversion complete!');

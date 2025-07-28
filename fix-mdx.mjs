import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixMdxFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;
  
  // Fix LinkButton tags specifically - they're case sensitive
  content = content.replace(/<linkButton([^>]*?)\s*\/\s*>([^<]+)<\/LinkButton>/gi, (match, attributes, innerContent) => {
    changed = true;
    return `<LinkButton${attributes}>${innerContent}</LinkButton>`;
  });
  
  // Fix self-closing tags that shouldn't be self-closing
  const containerTags = ['CardTip', 'CardWarning', 'CardInfo', 'CardError', 'CardHelp', 'LinkButton', 'DownloadCard'];
  for (const tag of containerTags) {
    // Fix cases like <CardTip />content</CardTip>
    const regex = new RegExp(`<${tag}([^>]*?)\\s*\\/\\s*>([^<]+)<\\/${tag}>`, 'gi');
    content = content.replace(regex, (match, attributes, innerContent) => {
      changed = true;
      return `<${tag}${attributes}>${innerContent}</${tag}>`;
    });
  }
  
  // Fix self-closing tags
  const selfClosingTags = ['br', 'img', 'hr', 'input', 'meta', 'link'];
  for (const tag of selfClosingTags) {
    const regex = new RegExp(`<${tag}([^>]*?)>(?!</)`, 'gi');
    const newContent = content.replace(regex, (match, attributes) => {
      if (!attributes.trim().endsWith('/')) {
        changed = true;
        return `<${tag}${attributes} />`;
      }
      return match;
    });
    content = newContent;
  }
  
  // Fix unclosed br tags specifically
  content = content.replace(/<br>/gi, '<br />');
  if (content !== fs.readFileSync(filePath, 'utf-8')) changed = true;
  
  if (changed) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${filePath}`);
  }
}

function processDirectory(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    
    if (entry.isDirectory()) {
      processDirectory(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.mdx')) {
      fixMdxFile(fullPath);
    }
  }
}

// Process src/pages directory
const pagesDir = path.join(__dirname, 'src', 'pages');
processDirectory(pagesDir);

console.log('MDX fixes complete!');

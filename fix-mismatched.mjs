import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function findMismatchedTags(content) {
  const matches = [];
  const tagRegex = /<(Card\w+)[^>]*>/g;
  const closeTagRegex = /<\/(Card\w+)>/g;
  
  let match;
  const openTags = [];
  
  // Find all opening tags
  while ((match = tagRegex.exec(content)) !== null) {
    openTags.push({
      tag: match[1],
      index: match.index,
      full: match[0]
    });
  }
  
  // Find all closing tags
  const closeTags = [];
  while ((match = closeTagRegex.exec(content)) !== null) {
    closeTags.push({
      tag: match[1],
      index: match.index,
      full: match[0]
    });
  }
  
  // Check for mismatches
  for (let i = 0; i < openTags.length && i < closeTags.length; i++) {
    if (openTags[i].tag !== closeTags[i].tag) {
      matches.push({
        openTag: openTags[i],
        closeTag: closeTags[i]
      });
    }
  }
  
  return matches;
}

function fixMismatchedTags(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const mismatches = findMismatchedTags(content);
  
  if (mismatches.length > 0) {
    console.log(`Found ${mismatches.length} mismatched tags in ${filePath}`);
    
    // Fix from the end to preserve indices
    for (let i = mismatches.length - 1; i >= 0; i--) {
      const mismatch = mismatches[i];
      const correctCloseTag = `</${mismatch.openTag.tag}>`;
      
      content = content.substring(0, mismatch.closeTag.index) + 
                correctCloseTag + 
                content.substring(mismatch.closeTag.index + mismatch.closeTag.full.length);
      
      console.log(`Fixed: ${mismatch.openTag.tag} -> ${mismatch.closeTag.tag} to ${mismatch.openTag.tag}`);
    }
    
    fs.writeFileSync(filePath, content);
    return true;
  }
  
  return false;
}

function processDirectory(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    
    if (entry.isDirectory()) {
      processDirectory(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.mdx')) {
      fixMismatchedTags(fullPath);
    }
  }
}

// Process src/pages directory
const pagesDir = path.join(__dirname, 'src', 'pages');
processDirectory(pagesDir);

console.log('Mismatch fixes complete!');

import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from "path";

import { remark } from "remark";
import strip from 'strip-markdown';

// Get working directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// REGEX FILTERS
const XmlTagSelector = /<(?<=<)(.*?)((?= \/>)|(?=>))>/g;
const WhitespaceSelector = /\s{2,}/g;

let searchArr = [];

export function getAllFiles (dirPath, arrayOfFiles) {
    let files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function(file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, "/", file));
        }
    });

    return arrayOfFiles;
}

export function writeToFile() {
    const outputPath = path.join(__dirname, '../public/shared/search-entries.json');
    console.log('Writing to ' + outputPath);

    const objToWrite = {
        entries: searchArr
    };

    const objAsJson = JSON.stringify(objToWrite);

    fs.writeFile(outputPath, objAsJson, function (err) {
        if (err) {
            console.log('Failed to generate search entries:');
            return console.log(err);
        }
        console.log(`Successfully generated search entries in ${outputPath}!`);
    });
}

export function run() {
    console.log('Generating search documents...');
    // directory path
    const srcDir = './src/pages';

    // list all files in the directory
    let files = getAllFiles(srcDir);

    let parsedFileCount = 0;

    files.forEach(currFile => {
        let fileContents = fs.readFileSync(currFile)+''; // trail to convert to string

        let title = '';
        if (currFile.includes('.md')) {
            title = fileContents.substring(0, fileContents.substring(3).indexOf('---') + 6);
    
            // Isolate title tag from YAML frontmatter
            title = title.substring(title.indexOf('title:') + 7);
            title = title.substring(0, title.indexOf('\n')).trim();

        } else if (currFile.includes('.astro')) {
            // Strip YAML frontmatter
            title = fileContents.substring(fileContents.substring(3).indexOf('---') + 7);
            const separator = title.substring(title.indexOf('title=') + 6, title.indexOf('title=') + 7);
            title = title.substring(title.indexOf('title=') + 7);
            title = title.substring(0, title.indexOf(separator)).trim();
        }

        // Parse fileContents so that its plaintext
        
        // Remove astro YAML header
        fileContents = fileContents.substring(fileContents.substring(3).indexOf('---') + 7);
        // // Remove Astro components
        fileContents = fileContents.replaceAll(XmlTagSelector, '');
        

        // Remove big code blocks because the parser is retarded
        fileContents = fileContents.replaceAll(/\`\`\`\w+/g, '').replaceAll(/\`\`\`/g, '');

        // Filter out markdown syntax
        remark().use(strip).process(fileContents).then((parsedMD => {
            fileContents = parsedMD.value;
            
            // Filter out punctuation (this is for search ultimately)
            fileContents = fileContents.replace(/[.,\/#!?@\+$%\^&\*;:{}="\-_`~()\\]/g, " ");

            // Trim whitespace
            fileContents = fileContents.replaceAll(WhitespaceSelector, ' ').replaceAll('\n', ' ').trim().toLowerCase();
        
            parsedFileCount++;

            const resolvedFilePath = path.relative('src/pages', currFile)
                .replaceAll('\\', '/')              // To forward slashes
                .replaceAll('.astro', '')           // Trim astro pages
                .replaceAll('.md', '')              // Trim markdown pages
                .replaceAll('index', '')            // Hide index
                .replaceAll(/\/+$/g, "");           // Trailing slash

            // Store current page
            if (title.length > 0 && fileContents.length > 0) {
                searchArr.push({
                    title: title,
                    path: resolvedFilePath,
                    plaintext: fileContents,
                });

                console.log(`Indexed ${currFile}!`);
            } else {
                console.log(`Skipping ${currFile} (missing title or content)!`);
            }

            // Once we've parse all pages, proceed to save them
            if (parsedFileCount === files.length) {
                writeToFile();
            }
        }));
    });
}

run();
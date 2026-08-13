const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imgDir = path.join('C:', 'Users', 'Hello', 'Documents', 'WEB INVENSI', 'Iysa', 'public', 'assets', 'images', 'allimg');

async function processImages() {
    const files = fs.readdirSync(imgDir);
    let count = 0;
    
    for (const file of files) {
        const fullPath = path.join(imgDir, file);
        const stat = fs.statSync(fullPath);
        
        // Process files larger than 1MB (1048576 bytes) or even > 300KB
        // To be safe and fast, let's process any image > 500KB
        if (stat.isFile() && stat.size > 500000 && (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.webp'))) {
            try {
                const tempPath = fullPath + '.tmp';
                await sharp(fullPath)
                    .resize({ width: 600, withoutEnlargement: true })
                    .png({ quality: 80, force: false })
                    .jpeg({ quality: 80, force: false })
                    .webp({ quality: 80, force: false })
                    .toFile(tempPath);
                
                fs.renameSync(tempPath, fullPath);
                console.log(`Optimized: ${file} (Original size: ${(stat.size / 1024 / 1024).toFixed(2)} MB)`);
                count++;
            } catch (err) {
                console.error(`Failed to process ${file}:`, err);
            }
        }
    }
    console.log(`Finished optimizing ${count} images.`);
}

processImages();

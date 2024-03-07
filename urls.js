const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');

// Check if a file name is provided
if (process.argv.length < 3) {
 console.error('Please provide a file name');
 process.exit(1);
}

const fileName = process.argv[2];

// Read the file containing URLs
fs.readFile(fileName, 'utf8', (err, data) => {
 if (err) {
    console.error('Error reading file:', err);
    process.exit(1);
 }

 const urls = data.split('\n').filter(url => url); // Filter out empty lines

 urls.forEach(url => {
    const protocol = url.startsWith('https') ? https : http;
    const options = new URL(url);
    options.pathname = options.pathname || '/'; // Ensure pathname is set

    protocol.get(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        const hostname = options.hostname;
        const outputFileName = `${hostname}.txt`;
        const outputPath = path.join(__dirname, outputFileName);

        fs.writeFile(outputPath, data, (err) => {
          if (err) {
            console.error(`Error writing file for ${hostname}:`, err);
          } else {
            console.log(`Saved ${hostname} to ${outputFileName}`);
          }
        });
      });
    }).on('error', (err) => {
      console.error(`Error downloading ${url}:`, err);
    });
 });
});
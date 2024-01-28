const fs = require('fs');

// Path to the file
const filePath = './python/file.txt';

// Read the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Output the data
    console.log('File content:', data);
});

// Watch for changes in the file
fs.watch(filePath, (eventType, filename) => {
    if (eventType === 'change') {
        console.log(`${filename} has been changed. Running JavaScript program...`);
        
        // Here you can run your JavaScript program
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                return;
            }
        
            // Output the data
            console.log('File content:', data);
        });
        runJavaScriptProgram();
    }
});

function runJavaScriptProgram() {
    // Your JavaScript program logic goes here
    console.log('Running JavaScript program...');
}

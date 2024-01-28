// const electron = require("electron");
// const app = electron.app;
// const BrowserWindow = electron.BrowserWindow;
// const path = require("path");
// const url = require("url");
// const router = require("./expressapp");
// let win,childWindow;

// function createWindow(){
   
//     win = new BrowserWindow({});
//     win.loadURL("http://localhost:3000/getdata");

// win.webContents.openDevTools();
// }
// app.on('ready',createWindow);

// app.on('window-all-closed',()=>{
//     if(process.platform!== 'darwin'){
//         app.quit();
//     }
// });
// main.js

const { app, BrowserWindow } = require('electron');
const { exec } = require('child_process');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile('pythonscrotrun.html');
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
          win.loadFile('aniket.html');
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
  
  // Open the DevTools.
  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Execute Python script
function runPythonScript() {
  exec('python.py', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}

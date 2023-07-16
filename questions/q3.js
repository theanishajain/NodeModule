//copy index.html or any file from one folder to a new folder inside another folder let fs = require("fs");
let path = require("path");
let fs = require('fs');
let fileSourcePath = path.join(__dirname, "..","module", "file.txt");
let destinationPath= path.join(__dirname,"onenewdirectory", "file.txt")
// console.log(fileSourcePath);
// console.log(__dirname);
// let fileDestination= path.join(__dirname,"questions", "onenewdirectory", "file.txt");
fs.copyFileSync(fileSourcePath,destinationPath);


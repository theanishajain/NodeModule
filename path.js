// "C:\Users\Anisha\Desktop\Node\path.js"
let path = require("path");

// let extensionName= path.extname("C:\Users\Anisha\Desktop\Node\path.js");
// console.log(extensionName);  //gives the extension 
let baseName= path.basename(__filename);
console.log(baseName);
console.log(__filename);//gives the file path
console.log(__dirname);//gives the directory path

let dirPath = __dirname;
let newFilePath = path.join(dirPath, "text.js");
console.log(newFilePath);
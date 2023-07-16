// read the content of unorganised folder and then return the array of extension
let fs = require('fs');

let path= require('path');
let folderKaPath = path.join(__dirname,"..", "unorganised");
let content = fs.readdirSync(folderKaPath);
// console.log(content);
let arr=[];
for(let i = 0 ; i<content.length;i++){
    let name = content[i];
let extArray = path.extname(name);
// console.log(extArray);
arr.push(extArray);
}
console.log(arr);

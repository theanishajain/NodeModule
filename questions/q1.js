//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made

//  I wasn't able to create new folder but then I used twoc commands in terminal 
//which are cd questions(name of folder) and ls
let fs = require("fs");
let path = require("path");
fs.mkdirSync("onenewdirectory");
let newFilePath = path.join(__dirname, "onenewdirectory", "newtextfile.txt");
fs.writeFileSync(newFilePath, "new file has been made");
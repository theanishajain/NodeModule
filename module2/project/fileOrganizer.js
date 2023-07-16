// console.log("hello");
let fs = require("fs");
let path = require('path');
let folderPath= process.argv[2]; //returns an array ... on 0th index: returns path of node
//  on 1st index it returns : the path of the same file you are working on
// console.log(inputArray);
// //["pathToNode", 'pathToFile', "input_passes_in_terminal"]
//nothing has changed
//this file is modified
let extensions = {
    Audio : ['.mp3'],
    Video : ['.mp4', '.mkv'],
    Image : ['.jpg', '.jpeg', '.png' , '.gif'],
    Document : [ '.docs', '.pdf', '.xlsx', '.txt'],
    Software : ['.exe']
}
let folderExists = fs.existsSync(folderPath);
if(folderExists){
    let files = fs.readdirSync(folderPath);
    console.log(files);
    for(let i = 0 ; i<files.length; i++){
        let ext = files[i];
        let folderKaName = giveFolderName(ext);
        console.log("Extension --", ext , "Folder--", nameOfFolder)
        

    }
}
else{
    console.log("please enter the valid path");
}
function giveFolderName(ext){
    for(let key in extensions){
        let extArr = extensions[key];//saving the values of the object
        for(let i = 0 ; i<extArr.length; i++){
            if(extArr[i]==ext){
                return key;
            }
        }
    }
    return 'others';    
}
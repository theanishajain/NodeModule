//read content of unorganise folder and print each file type
//for example abc.mp3 Audio File
let fs = require('fs');
let path = require('path');
let arr=[];
let folderKaPath = path.join(__dirname,"..", "unorganised");
// console.log(folderKaPath);
let content = fs.readdirSync(folderKaPath);
for(let i = 0 ; i<content.length; i++){
    let name = content[i];
    let extArray = path.extname(name);
    arr.push(extArray);
    switch(extArray){
        case '.txt':
            console.log("Text File");break;
        case '.mp4':
            console.log("Video File");
        break;
        case '.mp3':
            console.log("Audio File");
            break;
        case '.doc':
             console.log('Document File');
             break;
        default:
            console.log("Other");

        
    }

    
}


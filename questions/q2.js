//given an array arr=[audio,video,image,documents,applications,other]
//make folder for each element in the given array and inside each folder make 4 files of that type
let fs = require("fs");
let path = require("path");
let arr = ['Audio', 'Video', 'Software', "Documents", 'Applications', 'Others'];
let nameArr = ['abc', 'xyz', 'mno', 'pqr'];
let extName = ['.mp3', '.mp4', '.exe', '.doc', '.apk', '.rar'];

let organisePath = path.join(__dirname,"Organise");

if(!fs.existsSync(organisePath)){
fs.mkdirSync(organisePath);}


for(let i = 0 ; i <arr.length ; i++)
{

    let folderPath = path.join(organisePath, arr[i]);
     if(!fs.existsSync(folderPath))
     {
      fs.mkdirSync(folderPath);
     }
     for(let j=0; j<arr.length; j++){
        let filekaname = nameArr[j] + extName[i];

       let filekapath = path.join(folderPath, filekaname)
        fs.writeFileSync(filekapath, "");

        
     }
    
}
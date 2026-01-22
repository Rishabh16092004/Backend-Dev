const fs = require("fs");

const folderpath = "./delete";

fs.readdir(folderpath,(err,files)=>{
    if(err){
        console.log("error reading directory: ",err);
        return;
    }

    files.forEach((file) => {
        const filepath = folderpath + "/" + file;

        fs.stat(filepath,(err,stats)=>{
            if(err){
                console.log("error getting info:",err);
            }
            if(stats.isDirectory()){
                console.log("Folder: "+file,stats.size);
            }
            else{
                console.log("file: "+file,stats.size);
            }
        })
    })
})
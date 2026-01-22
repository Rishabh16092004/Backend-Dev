const fs = require("fs");

const timestamp = new Date().toLocaleString();
const log  = `[${timestamp}] Server started\n`;

fs.appendFile("log.txt",log,(err)=>{
    if(err){
        console.log("error : ",err);
    }
})
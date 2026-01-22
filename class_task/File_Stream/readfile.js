const fs = require("fs")

const readStream = fs.createReadStream("./sample.txt",{
    encoding:"utf-8",
    highWaterMark:64*1024
})
readStream.on("data",(chunk)=>{
    console.log("chunk received: ",chunk.length);
})

readStream.on("end",()=>{
    console.log("File reading complete")
})

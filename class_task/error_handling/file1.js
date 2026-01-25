// const fs = require("fs");

// fs.readFile("error",(err)=>{
//     if(err){
//         console.log(err);
//     }
// })


// ERROR HANDLING WITH CALLBACK

// fs.readFile("log.txt","utf8",(err,data)=>{
//     if(err){
//         if(err.code === "ENOENT"){
//             console.log("File not found");
//         }
//         return;
//     }
//     else{
//         console.log(data);
//     }
// })


// Error handling with async/await

// const fsPromises = require("fs").promises;
// async function readFileSafe(){
//     try{
//         const data = await fsPromises.readFile("log1.txt","utf8");
//         console.log(data);
//     }
//     catch(err){
//         console.log("Error: ",err.code);
//     }
// }


// Stream error handling 
const fs = require("fs");

const readStream = fs.createReadStream("./log1.txt");
const writeStream = fs.createWriteStream("./notes.txt");

readStream.on("error: ",(err)=>{
    console.log("Read error:",err.message);
    writeStream.destroy();
});

writeStream.on("error:",(err)=>{
    console.log("write error",err.message);
    readStream.destroy();
})
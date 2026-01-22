const fs = require("fs")

// const promises = require("fs").promises

// Create file with sync function 
// fs.writeFileSync("./file.txt","Hello, This is file");
// Async function
// fs.writeFile("./file.txt","Hello, GLA",(err)=>{});

// READ FILE

//  Sync
// const result = fs.readFileSync("./notes.txt","utf8");
//     console.log(result);
// Async
// fs.readFile("./notes.txt","utf8",(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// })

// append text
// fs.appendFileSync("./file.txt", new Date().getDate().toLocaleString());

// fs.appendFileSync("./file.txt",`${Date.now()} Hii Rishabh \n`);

// copy file
// fs.cpSync("./file.txt","./copy_file.txt");

// delete file
// fs.unlinkSync("./copy_file.txt");

// console.log(fs.statSync("./file.txt").isFile());

// create directory
// fs.mkdirSync("./New_Folder/def/d.txt",{recursive : true})

// remove directory
// fs.rmdirSync("./New_Folder")

// Read directory
// fs.readdir("./",(err,files)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("file name ",files);
//     }
// })

// Blocking operation
// console.log("1");
// const result = fs.readFileSync("./file.txt","utf8");
// console.log(result)
// console.log(2)

// Non-Blocking operation
// console.log("1");
// const result = fs.readFile("./file.txt","utf8",(err,result)=>{
//     console.log(result);
// })
// console.log("2")
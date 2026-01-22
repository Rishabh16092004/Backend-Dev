// Tasks
// Create a Node.js program that supports the following commands:
// Read a file
// Write content to a file
// Append logs to a file
// Copy a file
// Delete a file
// List files inside a directory

const fs = require("fs")

fs.writeFile("./userdata.txt","Hello, My name is Rishabh Jaiswal\n",(err)=>{
    if(err){
        console.log(err);
    }
});

const data = fs.readFile("./userdata.txt","utf8",(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});
// console.log(data)

fs.appendFile("./userdata.txt",new Date().getTime().toLocaleString(),(err)=>{
    if(err){
        console.log(err);
    }
});

fs.copyFile("./userdata.txt","./copyuserdata.txt",(err)=>{
    if(err){
        console.log(err);
    }
})

// fs.unlink("./copyuserdata.txt",(err)=>{
//     if(err){
//         console.log(err);
//     }
// })


// fs.mkdir("./new/new1.txt/new2.txt",{recursive:true},(err)=>{
//     if(err){
//         console.log(err);
//     }
// })

const out = fs.readdir("./new",(err,out)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(out);
    }
})
const fs = require("fs");
const path = require("path");

// Read file
function readFile(filepath){
    fs.readFile(filepath,"utf8",(err,data)=>{
        if(err){
            return console.log("error: ",err.message);
        }
        console.log("File read successfully, content :",data);
    })
}

// write file
function writeFile(filepath,content){
    fs.writeFile(filepath,content,(err)=>{
        if(err){
            return console.log("Error: ",err.message);
        }
        console.log("File written successfully.");
    })
}

// Copy file
function copyFile(source,dest){
    fs.copyFile(source,dest,(err)=>{
        if(err){
            return console.log("Error: ",err.message);
        }
        console.log("File copied successfully.");
    })
}

// delete file
function deleteFile(filepath){
    fs.unlink(filepath,(err)=>{
        if(err){
            return console.log("Error: ",err.message);
        }
        console.log("File deleted successfully.");
    })
}

function listdir(dirpath){
    fs.readdir(dirpath,(err,files)=>{
        if(err){
            return console.log("Error: ",err.message);
        }
        console.log("Directory contents:");
        files.forEach((file)=>console.log(file));
    })
}

const command = process.argv[2];
const arg1 = process.argv[3];
const arg2 = process.argv[4];

switch (command){
    case "read":
        readFile(arg1);
        break;
    case "write":
        writeFile(arg1,arg2);
        break;
    case "copy":
        copyFile(arg1,arg2);
        break;
    case "delete":
        deleteFile(arg1);
        break;
    case "list":
        listdir(arg1 || ".");
        break;
    default:
        console.log(`
            node File_Manager_Application.js read <file>
            node File_Manager_Application.js write <file> "<content>"
            node File_Manager_Application.js copy <source> <dest>
            node File_Manager_Application.js delete <file>
            node File_Manager_Application.js list <directory>
            `);
}

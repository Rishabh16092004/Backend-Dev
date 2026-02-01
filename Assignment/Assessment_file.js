const fs = require("fs");

fs.writeFile("Assessment.txt", "1 - What is the difference between synchronous and asynchronous file operations?\n Synchronous is a Blocking operation, the program waits until the file operation is finished, blocks the event loop. \n Asynchronous is a non-Blocking operation, file operation runs in background, uses callback,promises or async/await.",(err)=>{
    if(err){
        console.log(err.message);
    }
})

fs.appendFile("Assessment.txt","\n\n 2 - When should you use file streams instead of reading the entire file? \n Use file streams when the file is large or continous, and loading it fully memory is ineficient or impossible.\n",(err)=>{
    if(err){
        console.log(err.message);
    }
})

fs.appendFile("Assessment.txt","\n 3 - Explain the purpose of the ‘utf8’ encoding parameter in file operations? \n  The utf8 parameter teels Node.js how to convert rew file data into human-readable text.",(err)=>{
    if(err){
        console.log(err.message);
    }
})

fs.appendFile("Assessment.txt","\n\n 4 - What are the common error codes in file system operations and what do they mean? \n When file operations fail, Node.js returns an error object with a code.\n   1.ENOENT — File or Directory Not Found  \n   2.EACCES — Permission Denied\n   3.EISDIR — Is a Directory\n   4.ENOTDIR — Not a Directory\n   5.EEXIST — File Already Exists\n   6.EINVAL — Invalid Argument",(err)=>{
    if(err){
        console.log(err.message);
    }
})

fs.appendFile("Assessment.txt","\n\n 5 - How would you safely delete a directory with all its contents? \n To safely delete a directory and everything inside it, the key ideas are: double-check the path, preview what will be deleted, and use the right command for your OS/tool. ",(err)=>{
    if(err){
        console.log(err.message);
    }
})

fs.appendFile("Assessment.txt","\n\n 6 - Explain the concept of piping in streams with an example. \n Piping in streams is a clean, memory-efficient way to connect one stream’s output directly to another stream’s input—so data flows chunk-by-chunk without you manually handling buffers.",(err)=>{
    if(err){
        console.log(err.message);
    }
})

fs.appendFile("Assessment.txt","\n\n 7 - Why is it important to handle errors in file operations? \n Handling errors in file operations is crucial because file systems are unpredictable—things can go wrong due to permissions, missing files, disk issues, or concurrent access. If you don’t handle errors, your app can crash, lose data, or behave incorrectly.",(err)=>{
    if(err){
        console.log(err.message);
    }
})

fs.appendFile("Assessment.txt","\n\n 8 - What is the difference between writeFile and appendFile methods? \n writeFile() replaces file content, while appendFile() adds data without deleting existing content.",(err)=>{
    if(err){
        console.log(err.message);
    }
})
const fs = require("fs")

// const result = fs.readFileSync("./data.json","utf8")
// const ans = JSON.parse(result);
// console.log(ans);

const result = fs.readFile("./data.json","utf8",(err,result)=>{
    if(err){
        console.log(err);
    }
    else{
        const ans = JSON.parse(result)
    console.log(ans);
    }
})
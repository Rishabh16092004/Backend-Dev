const fs = require("fs");
const readline = require("readline");

let stats = {
    totallines:0,
    errors:0,
    warnings:0,
    info:0,
};

const fileStream = fs.createReadStream("logAnalyzer.txt");

const rl = readline.createInterface({
    input: fileStream,
})

rl.on("line",(line)=>{
    stats.totallines++;
    if(line.includes("ERROR"))stats.errors++;
    else if(line.includes("WARNING"))stats.warnings++;
    else if(line.includes("INFO"))stats.info++;
})

rl.on("close", () => {
  console.log("Log File Summary Report");
  console.log("Total Lines:", stats.totallines);
  console.log("Errors:", stats.errors);
  console.log("Warnings:", stats.warnings);
  console.log("Info Logs:", stats.info);
});
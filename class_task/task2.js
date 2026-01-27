const fs = require("fs");

const readline = require("readline");

const inputfile = "userdata.txt";
const outputfile = "output.txt";

let totalline = 0;
let totalwarning = 0;
let totalerror =0 ;
let totalinfo = 0;

const readStream = fs.createReadStream(inputfile,{
    encoding: "utf8"
})

const rl = readline.createInterface({
    input : readStream
})

rl.on("line",(line)=>{
    totalline++;
    if(line.includes("ERROR"))totalerror++;
    if(line.includes("WARNING"))totalwarning++;
    if(line.includes("INFO"))totalinfo++;
})

rl.on("close", () => {
  const report = `
Log File Summary Report
Total Lines: ${totalline}
ERROR Count: ${totalerror}
WARNING Count: ${totalwarning}
INFO Count: ${totalinfo}
`;

// Write summary to file
fs.writeFileSync(outputfile, report);
  console.log("Summary report generated: summary.txt");
});
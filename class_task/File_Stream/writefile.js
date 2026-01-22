const fs = require("fs")

const writeStream = fs.createWriteStream("./sample2.txt")

writeStream.write("Hello GLA\nWelcome to Stream\n");
// writeStream.write("Welcome to Stream\n");

writeStream.end();
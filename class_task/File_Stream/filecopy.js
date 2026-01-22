const fs = require("fs")

const {Transform} = require("stream")

fs.createReadStream("./input.txt")                                                                                                                 
.pipe(fs.createWriteStream("./output.txt"));
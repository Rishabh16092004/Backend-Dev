const fs = require("fs")

const {Transform} = require("stream");

const copyfile = new Transform({
    transform(chunk , encoding, callback){
        const modifiedData = chunk.toString();
        this.push(modifiedData);
        // callback;
    }
})

//  Piping 
fs.createReadStream("./input.txt")
.pipe(copyfile)                                                                                                                    
.pipe(fs.createWriteStream("./output.txt"));




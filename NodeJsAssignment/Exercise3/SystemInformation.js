const os = require("os");
const fs = require("fs");

function logSystemInfo() {
    const info = `
Time: ${new Date().toLocaleString()}
Platform: ${os.platform()}
CPU: ${os.cpus()[0].model}
Total Memory: ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB
Free Memory: ${(os.freemem() / 1024 / 1024).toFixed(2)} MB
-------------------------
`;

    fs.appendFile("systemInfo.txt", info, (err) => {
        if (err) {
            console.log("Error writing file");
        } else {
            console.log("System info logged");
        }
    });
}

setInterval(logSystemInfo, 5000);

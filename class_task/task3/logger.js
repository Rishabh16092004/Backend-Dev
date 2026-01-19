const fs = require("fs");
const path = require("path");

const logFilePath = path.join(__dirname, "system-log.txt");

function logSystemInfo(data) {
    const logEntry = `
[${data.timestamp}]
CPU Count     : ${data.cpuCount}
Free Memory   : ${data.freeMemory}
Total Memory  : ${data.totalMemory}
Platform      : ${data.platform}
/n`;

    fs.appendFile(logFilePath, logEntry, (err) => {
        if (err) {
            console.error(err);
        }
    });
}

module.exports = logSystemInfo;

const getSystemInfo = require("./systemInfo");
const logSystemInfo = require("./logger");

console.log("System Monitor Started");

setInterval(() => {
    const systemData = getSystemInfo();
    logSystemInfo(systemData);
}, 5000);

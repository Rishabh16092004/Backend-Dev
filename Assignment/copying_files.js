const fs = require("fs");
const fileName = "log.txt";

const timestamp = new Date().toISOString().replace(/:/g, "-").replace("T", "_").split(".")[0];

const dotIndex = fileName.lastIndexOf(".");
const baseName = fileName.substring(0, dotIndex);
const ext = fileName.substring(dotIndex);

const backupName = baseName + "_" + timestamp + ext;

fs.copyFile(fileName, backupName, (err) => {
  if (err) {
    console.log("Backup failed:", err);
  } else {
    console.log("Backup created:", backupName);
  }
});

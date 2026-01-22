const fs = require("fs");

// Original file
const fileName = "log.txt";

// Create timestamp
const timestamp = new Date()
  .toISOString()
  .replace(/:/g, "-")
  .replace("T", "_")
  .split(".")[0];

// Separate filename & extension manually
const dotIndex = fileName.lastIndexOf(".");
const baseName = fileName.substring(0, dotIndex);
const ext = fileName.substring(dotIndex);

// New backup filename
const backupName = baseName + "_" + timestamp + ext;

// Copy file
fs.copyFile(fileName, backupName, (err) => {
  if (err) {
    console.log("Backup failed:", err);
  } else {
    console.log("Backup created:", backupName);
  }
});

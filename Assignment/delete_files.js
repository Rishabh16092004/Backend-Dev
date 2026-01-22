const fs = require("fs");

const folderPath = "./delete";
const DAYS = 7;
const now = Date.now();

fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.log("Error reading folder:", err);
        return;
    }

    files.forEach((file) => {
        const filePath = folderPath + "/" + file;

        fs.stat(filePath, (err, stats) => {
            if (err) {
                console.log("Error getting file info:", err);
                return;
            }

            const fileAge = (now - stats.mtimeMs) / (1000 * 60 * 60 * 24); 

            if (fileAge > DAYS) {
                fs.unlink(filePath, (err) => {
                    if (err) {
                        console.log("Error deleting file:", err);
                    } else {
                        console.log("Deleted:", file);
                    }
                });
            }
        });
    });
});

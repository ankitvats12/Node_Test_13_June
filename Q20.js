const http = require("http");
const fs = require("fs");
function checkFileExists(filePath) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exists = fs.existsSync(filePath);
      if (exists) {
        resolve();
        console.log(`File ${filePath} exist`);
      } else {
        reject(new Error(`File ${filePath} does not exist`));
      }
    }, 1000);
  });
}

checkFileExists("Q19.js")
  .then(() => {
    // console.log("File exists");
  })
  .catch((error) => {
    console.log(error);
  });

checkFileExists("Q21.js")
  .then(() => {
    console.log("File exists");
  })
  .catch((error) => {
    console.log(error);
  });

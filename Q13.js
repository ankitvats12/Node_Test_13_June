const fs = require("fs");

const text = " This is my text.";
const filename = "mynewfile4.txt";

fs.appendFile(filename, text, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`File ${filename} has been appended successfully.`);
  }
});

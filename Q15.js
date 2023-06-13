const fs = require("fs");

const oldFilename = "mynewfile1.txt";
const newFilename = "myrenamedfile.txt";

fs.rename(oldFilename, newFilename, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(
      `File ${oldFilename} has been renamed to ${newFilename} successfully.`
    );
  }
});

const fs = require("fs");

const filename = "mynewfile2.txt";

fs.unlink(filename, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`File ${filename} has been deleted successfully.`);
  }
});

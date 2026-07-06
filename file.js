const fs = require("fs");

fs.writeFile("output1.txt", "new file writting", (err) => {
  if (err) throw err;
  console.log("file is done");
});
fs.readFile("output1.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log("done");

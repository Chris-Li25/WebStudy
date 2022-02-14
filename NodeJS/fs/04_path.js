const fs = require("fs");

// __dirname 表示当前文件的目录

fs.readFile(`${__dirname}/files/01.txt`, "utf-8", (err, data) => {
  if (err) {
    console.log("读取文件出错", err);
    return;
  }

  console.log(data);
});

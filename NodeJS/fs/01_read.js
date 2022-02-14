const fs = require("fs");

fs.readFile("./files/01.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("读取文件出错", err);
    return;
  }

  console.log(data);
});

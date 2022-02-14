const path = require("path");
const fs = require("fs");

const pathStr = path.join("/a", "/b/c", "../", "./d", "e");

fs.readFile(
  path.join(__dirname, "../fs/files/01.txt"),
  "utf-8",
  (err, data) => {
    if (err) {
      console.log("读取文件失败", err);
      return;
    }
    console.log(data);
  }
);

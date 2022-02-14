const fs = require("fs");

// fs.writeFile只能用来创建文件，不能用来创建路径 若路径中的无相应目录则创建文件失败
fs.writeFile("./files/02.txt", "hello node.js", (err) => {
  if (err) {
    console.log('写入文件出错',err);
    return;
  }
});

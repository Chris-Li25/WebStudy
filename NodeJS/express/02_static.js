const express = require("express");

const app = express();

// 托管多个 多次调用
// 按添加顺序查找
app.use(express.static("./page/02_static"));

// 挂载路径前缀
app.use("/dist", express.static("./page/02_static"));

app.listen(80, () => {
  console.log("express server running at http://127.0.0.1");
});

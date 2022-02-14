const express = require("express");

const app = express();

// 监听相应url的get请求
app.get("/", (req, res) => {
  res.send("hello world");
});

// 获取查询参数
app.get("/query", (req, res) => {
  res.send(req.query);
  console.log(req.query);
});

// 获取动态参数
app.get("/params/:id/:name", (req, res) => {
  res.send(req.params);
  console.log(req.params);
});

// 监听相应url的post请求
app.post("/user", (req, res) => {
  res.send({
    name: "chris",
  });
});

app.listen(80, () => {
  console.log("express server running at http://127.0.0.1");
});

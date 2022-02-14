const express = require("express");

const app = express();

const router = require("./03_router");

// 统一挂载前缀
app.use("/api", router);

app.listen(80, () => {
  console.log("Server running at http://127.0.0.1");
});

const express = require("express");
const jwt = require("jsonwebtoken");
const expressJWT = require("express-jwt");
const cors = require("cors");

const app = express();
const port = 80;
const secretKey = "chris";

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  expressJWT({ secret: secretKey, algorithms: ["HS256"] }).unless({
    path: [/^\/api\//],
  })
);

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/api/login", function (req, res) {
  console.log('login');
  const body = req.body;
  const { username, password } = body;
  if (username !== "admin" || password !== "000000") {
    return res.send({
      status: false,
      msg: "登录失败",
    });
  }

  const tokenStr = jwt.sign({ username }, secretKey, { expiresIn: "50s" });
  res.send({
    status: true,
    msg: "登录成功",
    token: tokenStr,
  });
});

app.get("/admin/getInfo", (req, res) => {
  console.log("/admin/getInfo");
  console.log("user " + req.user);
  res.send({
    status: true,
    msg: "获取用户信息成功",
    data: req.user,
  });
});

app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === "UnauthorizedError") {
    return res.send({
      status: false,
      msg: "无效的token",
    });
  }

  res.send({
    status: false,
    msg: "未知错误",
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

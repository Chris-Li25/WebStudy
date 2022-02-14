const express = require("express");
const session = require("express-session");
const app = express();
const port = 80;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("./page/06_session"));

app.use(
  session({
    secret: "chris",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/api/login", function (req, res) {
  const body = req.body;
  const { username, password } = body;
  if (username !== "admin" || password !== "000000") {
    res.send({ status: false, msg: "登录失败，账号密码有误" });
  }

  req.session.user = req.body;
  req.session.isLogin = true;

  res.send({ status: true, msg: "登录成功" });
});

app.get("/api/isLogin", function (req, res) {
  const isLogin = req.session.isLogin;
  const user = req.session.user;
  if (!isLogin) {
    return res.send({
      status: false,
      msg: "请登录后重试",
    });
  }
  res.send({
    status: true,
    msg: "用户已登录",
    username: user.username,
  });
});

app.get("/api/logout", function (req, res) {
  req.session.destroy();
  res.send({ status: true, msg: "注销成功" });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

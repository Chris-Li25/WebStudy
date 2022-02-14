const express = require("express");
const bodyParser = require("./04_bodyParser");

const app = express();

const mw1 = (req, res, next) => {
  console.log("this is the first custom middleware");
  next();
};

const mw2 = (req, res, next) => {
  console.log("this is the second custom middleware");
  next();
};

// app.use(mw);

app.use((req, res, next) => {
  console.log("this is the first middleware");
  const time = Date.now();
  // 多个中间件共享req res对象
  req.startTime = time;
  next();
});

app.use((req, res, next) => {
  console.log("this is the second middleware");
  next();
});

// 内置的解析json格式请求体数据的中间件
// app.use(express.json());

// 内置的解析URL-encoded格式请求体数据的中间件
// app.use(express.urlencoded({ extended: false }));

// 自定义的数据处理解析中间件
app.use(bodyParser);

app.post("/customMw", (req, res) => {
  res.send(req.body);
});

// 一定要在路由之前注册中间件

// mw 为局部生效的中间件
app.get("/", mw1, (req, res) => {
  console.log("request Home Page");
  res.send(`Home Page ${req.startTime}`);
});

// 使用多个局部中间件
app.get("/way1", mw1, mw2, (req, res) => {
  console.log("request Home Page");
  res.send(`Home Page ${req.startTime}`);
});

app.get("/way2", [mw1, mw2], (req, res) => {
  console.log("request Home Page");
  res.send(`Home Page ${req.startTime}`);
});

app.get("/user", (req, res) => {
  console.log("request User Page");
  res.send(`User Page ${req.startTime}`);
});

app.get("/error", (req, res) => {
  throw new Error("server inner error");
});

app.post("/user/add", (req, res) => {
  // 默认情况下，如果不配置解析表单数据的中间件，则req.body默认等于undefined
  res.send(req.body);
});

app.post("/book/add", (req, res) => {
  // 默认情况下，如果不配置解析表单数据的中间件，则req.body默认等于undefined
  res.send(req.body);
});

// 错误处理中间件 捕获错误  需要注册在所有路由之后
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Something broke!");
});

app.listen(80, () => {
  console.log("server running at http://127.0.0.1");
});

/**
 * An Express application can use the following types of middleware:
 * Application-level middleware   应用级别中间件    绑定到app实例上的
 * Router-level middleware        路由级别中间件    绑定到router实例上的
 * Error-handling middleware      错误级别中间件
 * Built-in middleware            内置中间件
 * Third-party middleware         第三方中间件
 */

/**
 * 内置中间件
 * 1、express.static
 * 2、express.json
 * 3、express.urlencoded
 */

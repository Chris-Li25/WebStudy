const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  let content = `<h1>404 Not Found</h1>`;
  const url = req.url;

  if (url === "/") {
    content = `<h1>首页</h1>`;
  }

  if (url === "/about") {
    content = `<h1>关于页面</h1>`;
  }

  // 解决中文乱码
  res.setHeader("Content-type", "text/html; charset=utf-8");
  res.end(content);
});

server.listen(80, () => {
  console.log("server run at http://127.0.0.1");
});

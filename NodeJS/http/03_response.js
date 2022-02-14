const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  const url = req.url;
  const method = req.method;
  const str = `请求地址为 ${url}, 请求方式为 ${method}`;
  console.log(str);

  // 解决中文乱码
  res.setHeader("Content-type", "text/html; charset=utf-8");
  res.end(`${str}`);
});

server.listen(80, () => {
  console.log("server run at http://127.0.0.1");
});

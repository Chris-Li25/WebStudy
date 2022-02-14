const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  const url = req.url;
  const method = req.method;
  console.log(`your request url is ${url}, and request method is ${method}`);
});

server.listen(80, () => {
  console.log("server run at http://127.0.0.1");
});

const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("request");
});

server.listen(8080, () => {
  console.log("server run at http://127.0.0.1:8080");
});

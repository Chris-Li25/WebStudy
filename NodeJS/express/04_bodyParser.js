const QueryString = require("qs");

const bodyParser = function (req, res, next) {
  let str = "";
  req.on("data", (chunk) => {
    str += chunk;
  });
  req.on("end", () => {
    const body = QueryString.parse(str);
    req.body = body;
    next();
  });
};

module.exports = bodyParser;

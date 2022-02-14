const express = require("express");

const apiRouter = express.Router();

apiRouter.get("/get", (req, res) => {
  const query = req.query;
  res.send({
    status: 0,
    msg: "Get success",
    data: query,
  });
});

apiRouter.post("/post", (req, res) => {
  const body = req.body;
  res.send({
    status: 0,
    msg: "Post success",
    data: body,
  });
});

apiRouter.delete("/delete", (req, res) => {
  res.send({
    status: 0,
    msg: "Post success",
  });
});

module.exports = apiRouter;

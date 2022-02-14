const express = require("express");
const apiRouter = require("./05_api");
const cors = require("cors");
const app = express();
const port = 80;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 解决跨域问题
app.use(cors());

app.use("/api", apiRouter);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

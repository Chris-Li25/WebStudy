const path = require("path");

const myPath = `/a/b/c/index.html`;

const name = path.basename(myPath);

const nameWithoutExt = path.basename(myPath, ".html");

console.log(name);
console.log(nameWithoutExt);

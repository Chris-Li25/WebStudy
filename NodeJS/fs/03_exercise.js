const fs = require("fs");

fs.readFile("./files/03_grade.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  const dataArr = data.split(" ");
  const newArr = [];

  dataArr.forEach((item) => {
    newArr.push(item.replace("=", "："));
  });

  const newStr = newArr.join("\r\n");

  fs.writeFile("./files/03_grade_new.txt", newStr, (err) => {
    if (err) {
      console.log(err);
      return;
    }
  });
});

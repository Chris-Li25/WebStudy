import "../css/login.css";
import "../css/login.less";
import "../css/test.css";
// import "css-loader!../css/login.css";

function login() {
  const oH2 = document.createElement("h2");
  oH2.innerHTML = "webpack test";
  oH2.className = "title";
  return oH2;
}

document.body.appendChild(login());

import oImgSrc from "../img/01.jpg";
import "../css/img.css";

function packImg() {
  const oELe = document.createElement("div");
  const oImg = document.createElement("img");
  oImg.width = 600;
  // oImg.src = require("../img/01.jpg").default;
  // oImg.src = require("../img/01.jpg");
  oImg.src = oImgSrc;
  oELe.appendChild(oImg);

  const oBgImg = document.createElement("div");
  oBgImg.className = "bgBox";
  oELe.appendChild(oBgImg);

  return oELe;
}

document.body.appendChild(packImg());

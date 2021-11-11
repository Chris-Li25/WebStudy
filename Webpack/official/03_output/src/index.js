import _ from "lodash";
import "./style.css";
import Icon from "./icon.png";

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  return element;
}

function imageEle() {
  const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.width = 200;
  myIcon.height = 200;

  return myIcon;
}

function iconfont() {
  const element = document.createElement("div");
  element.innerHTML = "&#xe77d;";
  element.classList.add("iconfont");

  return element;
}

document.body.appendChild(component());
document.body.appendChild(iconfont());
document.body.appendChild(imageEle());

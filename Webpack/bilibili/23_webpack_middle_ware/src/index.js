import "core-js/stable";
import "regenerator-runtime/runtime";
const title = "front end";
const foo = () => {
  console.log(title);
};

const p1 = new Promise((resolve, reject) => {
  console.log(111);
});

foo();

console.log('front end 3');


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


/**
 * 开发模式
 *  - watch
 *  - live server
 * 不足
 *  1. 所有源代码都会重新编译
 *  2. 每次编译成功后都需要进行文件读写
 *  3. live server 属于vscode
 *  4. 不能实现局部刷新
 */
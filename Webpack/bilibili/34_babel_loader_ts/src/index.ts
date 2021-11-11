const title: string = "front end development";

const foo = (msg: string) => {
  console.log(msg);
};

const p1 = new Promise((resolve, reject) => {});


foo(title);

/**
 * babel-loader在编译时不会对数据类型进行校验
 * ts-loader可在编译时提前暴露问题
 * 
 * tsc --noEmit + webpack 组合使用
 */
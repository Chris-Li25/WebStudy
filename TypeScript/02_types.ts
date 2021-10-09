// 用字面量进行类型声明
let a: 10;

// 可以使用 | 连接多个类型（联合类型）
let b: "male" | "female";
let c: boolean | string;

// any 表示任意类型，设置为该类型相当于对该变量关闭了TS的类型检测
let d: any;

let e: unknown;
e = 10;
e = "hello";
e = true;

let s: string;

// any类型可以赋值给任意变量

// unknown 是类型安全的any
// unknown类型的变量，不能直接赋值给其他变量
if (typeof e === "string") {
  s = e;
}

s = e as string;
s = <string>e;

// void表示空，没有值 undefined
function fn(): void {}
// never 没有值，不能是任何值
function fn2(): never {
  throw new Error("报错了");
}

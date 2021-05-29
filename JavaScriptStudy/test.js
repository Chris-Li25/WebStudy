// let arr = [1, 2, 3, 4, 5, 6, 7]

// for (const key in arr) {
//     if (Object.hasOwnProperty.call(arr, key)) {
//         const element = key;
//         console.log(element)
//     }
// }

// const module1 = {
//     x: 42,
//     getX: function() {
//         return this.x;
//     }
// };

// console.log(module1.getX());

// const unboundGetX = module1.getX;
// console.log(unboundGetX()); // The function gets invoked at the global scope
// // expected output: undefined

// const boundGetX = unboundGetX.bind(module1);
// console.log(boundGetX());
// // expected output: 42

// Function.prototype.bind1 = function() {
//     // 将参数拆解为数组
//     const args = Array.prototype.slice.call(arguments) // 变成数组

//     // 获取 this（数组第一项)
//     const t = args.shift()

//     // fn1.bind(...) 中的 fn1
//     const self = this

//     // 返回一个函数
//     return function() {
//         return self.apply(t, args)
//     }
// }

// function fn1(a, b, c) {
//     console.log('this', this)
//     console.log(a, b, c)
//     return 'this is fn1'
// }
// const fn2 = fn1.bind1({ x: 100 }, 10, 20, 30)
// const res = fn2()
// console.log(res)

// catch 正常返回 resolved，里面有报错返回 rejected
// const p3 = Promise.reject('my error').catch(err => {
//     console.error(err)
// })
// console.log('p3', p3) // resolved ！！！！ 注意

// const p4 = Promise.reject('my error').catch(err => {
//     throw new Error('catch err')
// })
// console.log('p4', p4) // rejected

// let a = [1, 2, 0, 3, 12];

// const moveZeros = (a) =>
//     a.sort((a, b) => {
//         console.log(b);
//         return -((b === 0) ^ 0);
//     });

// console.log(moveZeros(a));
let a = []
console.log(Object.prototype.isPrototypeOf(a));
console.log(Object.prototype);
console.log(a.__proto__);
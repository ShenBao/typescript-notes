import Promise from "./Promise";

// let promise = new Promise((resolve, reject) => {
//     resolve("成功了")
// });

// let promise = new Promise((resolve, reject) => {
//     reject("失败了")
// });

// let promise = new Promise((resolve, reject) => {
//   resolve("成功了");
// });

// promise.then(
//   (resolveData) => {
//     console.log("resolve 执行成功 后的 then 函数被执行：", resolveData);
//   },
//   (rejectData) => {
//     console.log("reject 执行成功 后的 then 函数被执行:", rejectData);
//   }
// );

// let promise = new Promise((resolve, reject) => {
//   resolve("成功了");
// });

// promise
//   .then(
//     (resolveData) => {
//       console.log("第一个 resolveFn 成功了", resolveData);
//       return "ok ~";
//     },
//     (rejectData) => {
//       console.log("第一个 rejectFn 成功了", rejectData);
//       return "fail ...";
//     }
//   )
//   .then(
//     (resolveData) => {
//       console.log("第二个 resolveFn 成功了", resolveData);
//       return "ok2 ~";
//     },
//     (rejectData) => {
//       console.log("第二个 rejectFn 成功了", rejectData);
//       return "fail2 ...";
//     }
//   ).then(
//     (resolveData) => {
//       console.log("第三个 resolveFn 成功了", resolveData);
//       return "ok3 ~";
//     },
//     (rejectData) => {
//       console.log("第三个 rejectFn 成功了", rejectData);
//       return "fail3 ...";
//     }
//   );

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("成功了");
//     }, 1000);
//   });

//   promise.then(
//     (resolveData) => {
//       console.log("resolve 执行成功 后的 then 函数被执行：", resolveData);
//       return "ok "
//     },
//     (rejectData) => {
//       console.log("reject 执行成功 后的 then 函数被执行:", rejectData);
//     }
//   ).then(
//     (resolveData) => {
//       console.log("resolve2 执行成功 后的 then 函数被执行：", resolveData);
//     },
//     (rejectData) => {
//       console.log("reject2 执行成功 后的 then 函数被执行:", rejectData);
//     }
//   );

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("成功了");
//     }, 1000);
//   });

//   promise.then(
//     (resolveData) => {
//       console.log("resolve 执行成功 后的 then 函数被执行：", resolveData);
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve("第二个异步操作 ...");
//             reject("第二个异步操作 ...");
//         }, 1000);
//       })
//     },
//     (rejectData) => {
//       console.log("reject 执行成功 后的 then 函数被执行:", rejectData);
//     }
//   ).then(
//     (resolveData) => {
//       console.log("resolve2 执行成功 后的 then 函数被执行：", resolveData);
//     },
//     (rejectData) => {
//       console.log("reject2 执行成功 后的 then 函数被执行:", rejectData);
//     }
//   )

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("setTimeout 第1个 Promise");
    }, 1000);
});
let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("setTimeout 第2个 Promise");
    }, 1000);
});
let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("setTimeout 第3个 Promise");
        // reject("setTimeout 第3个 Promise");
    }, 1000);
});

Promise.all([promise1, promise2, promise3]).then(
    (results) => {
        console.log("Promise.all results：", results);
    },
    (rejectData) => {
        console.log("Promise.all reject:", rejectData);
    }
);

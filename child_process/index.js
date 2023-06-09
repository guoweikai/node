/*
 * @Author: your name
 * @Date: 2023-06-09 10:47:47
 * @LastEditTime: 2023-06-09 10:49:17
 * @LastEditors: localhost
 * @Description: In User Settings Edit
 * @FilePath: /node/child_process/index.js
 */

const { spawn } = require('child_process');

// 创建一个新进程
const childProcess = spawn('node', ['child_process/child.js']);

// 监听子进程的输出
childProcess.stdout.on('data', (data) => {
  console.log(`子进程输出：${data}`);
});

// 监听子进程的错误输出
childProcess.stderr.on('data', (data) => {
  console.error(`子进程错误输出：${data}`);
});

// 子进程退出时的回调
childProcess.on('close', (code) => {
  console.log(`子进程退出，退出码：${code}`);
});
console.log("我是主进程")
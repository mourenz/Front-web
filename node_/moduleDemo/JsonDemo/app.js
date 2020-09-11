const express = require('express')
const app = express()

let json1 = '{"name":"zqg"}'; // 标准json格式 ''

let obj = {name:"zqg"}

console.log(JSON.parse(json1)); //JSON.parse(json字符串) 转换为 js 对象
console.log(typeof JSON.parse(json1)); // object

console.log(JSON.stringify(obj)); // JSON.stringify(JS对象) 将js对象转换为 json字符串
console.log(typeof JSON.stringify(obj));  //string

app.listen(8888,()=>{
    console.log("服务启动了......")
})

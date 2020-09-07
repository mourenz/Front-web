const express = require('express')

let app = express()
app.listen(8889,()=>{
    console.log('Web Server Starting....')
})

let logger = (req,resp,next)=>{
    console.log("date=>"+Date.now());
    next();
}

app.use(logger) // 全局注册

app.post('/m',(req,resp)=>{
    resp.send("post....")
})

// 原生
app.get('/m',(req,resp,next)=>{
    console.log("Date=>"+Date.now())
    next(); // 放行
},(req,resp)=>{
    resp.send('get....')
})

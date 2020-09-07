const express = require('express')
const app = express();

app.listen(8888,()=>{
    console.log("启动成功....")
})

app.get('/',(req,resp)=>{
    resp.send('Hello express')
})

app.post('/post',(req,resp)=>{
    resp.send('Hello express POST')
})

const express = require('express')
const path = require('path')
const fileUpload = require('express-fileupload')

const app = express()

app.use(express.static(path.join(__dirname,'static'))); // 暴露静态资源 如 html/css

app.use(express.urlencoded); // 此行代码针对 请求头 Content-Type application/x-www-form-urlencoded 会自动将请求数据封装到 req.body 中
app.use(fileUpload()); // 针对文件上传表单代码

app.listen(8888,()=>{
    console.log("服务已启动.......")
})



// 文件上传
app.post('/upload',(req,resp)=>{
    let username = req.body.username;
    let avatar = req.body.avatar;
    avatar.mv(path.join(__dirname,'static/upload',avatar.name),(err)=>{
        if(err){
            resp.status(500).send(err);
        }else{
            resp.send("上传成功");
        }
    })




})

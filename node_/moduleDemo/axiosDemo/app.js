const express = require('express')
const path = require('path')
const url = require('url')
const querystring =  require('querystring')

const app = express();
app.use(express.static(path.join(__dirname,'static'))); // 暴露静态资源 如 html/css
app.use(express.urlencoded())
app.use(express.json()) //当前端的数据为 json对象 即为 {username:'zqg','userpwd':'zqg'}  必须使用这行

app.listen(8888,()=>{
    console.log("服务已启动.......")
})


// 处理get请求
app.get('/login',(req,resp)=>{
    console.log("请求url=>"+req.url);
    console.log("-----------解析的url-------")
    console.log(url.parse(req.url))
    console.log("------使用querystring 解析的url")
    console.log(querystring.parse(req.url));
    resp.send("200")
})


// 处理post请求  Express中接受post请求参数需要借助第三方包 body-parser --> npm install body-parser
app.post('/login',(req,resp)=>{
    console.log(req.url);
    console.log(req.body);
    resp.status(200).send(req.body)
})








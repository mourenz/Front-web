const express = require('express')
const path = require('path')
const morgan = require('morgan') //引入日志中间件


let app = express()
app.listen(8888, () => {
    console.log("Server Starting .....")
})
app.use(morgan('dev'));
app.use(express.urlencoded()); // 解决post提交编码问题
app.use(express.json()); // 响应json对象

app.get('/a', (req, resp) => {
    console.log('url=>' + req.url)
    // resp.json({name: '中文', age: 20}); //  返回json对象  自带编码处理
    resp.download(path.join(__dirname,'static/1.jpg')); // 下载文件
    // resp.send('ok')
})



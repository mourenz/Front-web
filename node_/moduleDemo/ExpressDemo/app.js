const express = require('express')
// 模块导入
const departmentRouter = require('./route/department')
const userRouter = require('./route/user')

// 应用模块方法  模块的方法需要 module.exports = xxx  即可以访问路由模块的方法
app.use(departmentRouter);
app.use(userRouter);

const app = express();

app.listen(8888, () => {
    console.log("启动成功....")
})

// 原生
app.get('/', (req, resp) => {
    resp.send('Hello express')
})

app.post('/post', (req, resp) => {
    resp.send('Hello express POST')
})

app.route("/route")
    .get((req, resp) => {
        resp.send("get method.....");
    })
    .post((req, resp) => {
    resp.send("post method.......");
})

//Restful 的支持
app.get('/rest/:id',(req,resp)=>{
    console.log(req.params);
    console.log(req.params.id);
    resp.send(req.params);
})



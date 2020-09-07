const express = require('express')
// 模块导入
const departmentRouter = require('./route/department')
const userRouter = require('./route/user')

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


// 应用模块方法  模块的方法需要 module.exports = xxx
app.use(departmentRouter);
app.use(userRouter);

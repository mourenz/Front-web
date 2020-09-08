const express = require('express')
const morgan  = require('morgan')


let app = express()

app.use(morgan('dev'))
app.use(express.urlencoded())
app.use(express.json())


app.listen(8888,()=>{
    console.log("Server Starting.......")
})

app.get('/a',(req,resp)=>{
    console.log('url=>'+req.url)
    console.log('ip=>'+req.ip);
    console.log('query.username=>'+req.query.username);
    resp.send({msg:'ok'})
})

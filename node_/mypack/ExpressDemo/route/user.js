const express = require('express')
const userRouter = express.Router();

userRouter.route('/user').get((req, resp) => {
    resp.send('user get');
}).post((req,resp)=>{
    resp.send('user post')
})
module.exports = userRouter;

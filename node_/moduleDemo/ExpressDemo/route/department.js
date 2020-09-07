const express = require('express')
const departRouter = express.Router();

departRouter.route('/depart').get((req,resp)=>{
    resp.send('depart get');
}).post((req,resp)=>{
    resp.send('depart post')
})

module.exports = departRouter;

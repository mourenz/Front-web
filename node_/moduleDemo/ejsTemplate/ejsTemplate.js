const ejs = require('ejs')
const path = require('path')
let books ={books:['book1','book2','book3']}
ejs.renderFile(path.join(__dirname,'index.ejs'),books,(err,str)=>{
    if(err){
        console.log(err)
    }else{
        console.log(str)
    }
})


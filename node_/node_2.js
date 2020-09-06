const url_ = require('url')
// console.log(url_);
console.log(url_.parse("http://localhost:8888/start?foo=bar&hello=world").query);


const util = require('util');
const { url } = require('inspector');
function Person(name,age){
    this.name = name;
    this.age = age;
    this.showName = function(){
        console.log(this.name);
    }
}
let p = new Person('zs',20)
console.log(p);
console.log(util.inspect(p));
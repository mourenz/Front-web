console.log("hello node")

//模板字符串
function templateString(name,age){
    return `姓名${name},年龄${age}`;
}

// 默认值 0 null undefined false  == false
function defalutValue(x){
    return x || 1;
}

console.log(templateString('zqg',20))


// => 函数
let fun1 = function(){
    console.log();
}
// 等同于 
let fun2 = ()=>{
    console.log("fun2.....");
}

//参数的匿名函数
let fun3 =(x,y)=>{
    console.log("fun3()....");
    return x+y;
}

console.log(fun3(3, 5)); 

console.log("=========ES6 class 类==========");
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showInfo(){
        console.log("name: "+this.name+" age: "+this.age);
    }
    static show(){
        console.log("static function....");
    }
}

let person = new Person("zqg",20);
person.showInfo();

console.log("========ES6 继承===============");
class Animal{
    constructor(name){
        this.name = name;
    }
    showName(){
        console.log("name: "+this.name);
    }
}
//子类
class Mouse extends Animal{
    constructor(name,age){
        super(name);
        this.age = age;
    }
}

new Mouse('jerry',5).showName()

//--------
console.trace()

console.log(__filename);
console.log(__dirname);

console.log("===module===");
console.log(module);


const obj = require('./sum.js')
console.log(obj.sum(1, 2));


// console.log(module.exports);
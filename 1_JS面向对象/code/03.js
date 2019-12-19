/* 
    原型, 原型链, 原型对象
        原型: 在构造函数下边有一个 prototype 属性
        原型对象: 构造函数 + 原型 整体也是一个对象
                  在原型对象下面可以添加属性和方法
    共享: 在原型对象下面的属性和方法, 可供多个对象进行共享访问, 这样就可以节省内存消耗
    原型链: 连接对象与原型对象之间的纽带
    __proto__ : 内部属性 => 查找当前对象的原型对象
    原型链的最外层为 Object.prototype 
 */

// function Foo (name) {
//     this.name = name;
//     // this.showName = function () {
//     //     console.log(this.name)
//     // }
// }  
// Foo.prototype.showName = function () {
//     console.log(this.name)
// }

// var obj = new Foo("hello")
// var obj2 = new Foo("hi")

// console.log(obj.showName === obj2.showName) // true

// /*
//     __proto__ : 内部属性 => 查找当前对象的原型对象
// */
// console.log(obj.__proto__ === Foo.prototype) // true
// console.log(Foo.prototype.__proto__ === Object.prototype) // true

/* ============================================= */
function Foo (name) {
    this.name = name;
}
Foo.prototype.name = "hi";
Object.prototype.name = "niHao";
Foo.prototype.showName = function () {
    console.log(this.name)
}

var obj = new Foo("hello")
console.log(obj.name)
console.log(obj)
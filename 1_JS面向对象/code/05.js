/* 
    constructor: 原型对象下唯默认自带的属性, 用于查看对象的构造函数

    instanceof: 左边是实例对象, 右边是构造函数, 检查右边的构造函数的原型对象 是否在左边对象的原型链上

    in 与 for...in
        in 运算符返回一个布尔值, 表示一个对象是否具有某个属性
        for...in 循环可获得对象的所有可枚举属性
*/

function Foo (name) {
    this.name = name;
    this.showName = function () {
        console.log(this.name)
    }
}
// 默认的 Foo.prototype.constructor = Foo
Foo.prototype = {
    showName: function() {},
    constructor: Foo
};

function Bar (name) {
    this.name = name;
    this.showName = function () {
        console.log(this.name)
    }
}
Foo.prototype = Bar.prototype

var obj = new Foo("hi")

obj.showName() // hi
console.log(obj.constructor)
console.log(obj.constructor === Foo) // true

console.log(obj instanceof Foo) // true
console.log(obj instanceof Bar)

console.log("name" in obj) // true
console.log("age" in obj) // false

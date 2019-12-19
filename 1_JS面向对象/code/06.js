/* 
    继承: 
        拷贝继承
        类式继承
        非构造函数继承
    多态:
        重写继承方法
        配置对象
*/
// 拷贝继承
// 父类
// function Foo () {
//     this.name = "hi"
// }

// Foo.prototype.showName = function () {
//     console.log(this.name)
// }
// // 子类
// function Bar () {
//     Foo.call(this)
//     this.age = 20
// }
// Bar.prototype.showAge = function () {
//     console.log(this.age)
// }
// extend(Foo, Bar)
// function extend (parent, child) {
//     for(var attr in parent.prototype) {
//         child.prototype[attr]= parent.prototype[attr]
//     }
// }

// var obj1 = new Foo();
// var obj2 = new Bar();
// obj2.showName() // hi
// console.log(obj1.name) // hi
// console.log(obj2.name) // hi
// console.log(obj2.age) // 20

/* ================================================= */
// 类式继承
// function Foo() {
//     this.name = "hello";
// }

// Foo.prototype.showName = function () {
//     console.log(this.name);
// };
// // 子类
// function Bar() {
//     Foo.call(this);
//     this.age = 20;
// }
// extend(Foo, Bar);
// Bar.prototype.showAge = function () {
//     console.log(this.age);
// };

// function extend(parent, child) {
//     var F = function () {};
//     F.prototype = parent.prototype;
//     child.prototype = new F();
//     child.prototype.constructor = child;
// }
// var obj1 = new Foo();
// var obj2 = new Bar();
// console.log(obj1.name); // hello
// console.log(obj2.name); // hello
// console.log(obj2.age); // 20
// obj2.showName(); // hello
// obj2.showAge(); // 20

/* ================================================= */
// 非构造函数继承
var foo = {
    name: "Hello"
};
var bar = extend(foo)

function extend(parent) {
    // var result = {};
    // for (var key in parent) {
    //     result[key]= parent[key];
    // }
    // return result;

    function F () {}
    F.prototype = parent;
    return new F();
}

console.log(foo) // { name: 'Hello' }
console.log(bar) // { name: 'Hello' }
bar.name = "你好";
console.log(foo) // { name: 'Hello' }
console.log(bar) // { name: '你好' }

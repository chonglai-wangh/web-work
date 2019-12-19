/* 
    创建对象
        构造函数的名字首字母大写
*/

// function Foo() {
//     this.name = "Hello";
//     this.showName = function () {
//         console.log(this.name)
//     }
// }

// var obj = new Foo()
// obj.showName()
// var obj2 = new Foo()
// obj2.showName()

/* ======================================= */
function Foo(name) {
    this.name = name;
    this.showName = function () {
        console.log(this.name)
    }
}

var obj = new Foo("Hi")
obj.showName()
var obj2 = new Foo("Hello")
obj2.showName()

console.log(obj.showName == obj2.showName) // false
/* 
    对象的引用
        类型比较方式
            对象必较时, 值跟引用地址都相同时才进行相等
        类型赋值方式
            对象赋值时, 值跟引用地址都进行赋值操作
        浅拷贝 与 深拷贝
            实现对对象的赋值操作
*/

// var obj = new Object();
// obj.name = "Hello";
// obj.showName = function(){}

// var obj = {
//     name: "Hello",
//     showName: function() {}
// };
// obj.showName();

/* ======================================= */
// var str1 = "Hello";
// var str2 = "Hello";

// console.log(str1 == str2) // true

// var str1 = {};
// var str2 = {};

// console.log(str1 == str2) // false

/* ======================================= */
// var obj1 = { name: "hello" };
// var obj2 = obj1;

// obj2.name = "hi";
// console.log(obj1)

/* ======================================= */
// 浅拷贝
// var obj = { name: "hello" };
// var obj2 = copy(obj);

// obj2.name = "hi";
// console.log(obj)
// console.log(obj2)

// function copy(obj) {
//     var res = {};
//     for(var attr in obj) {
//         res[attr]= obj[attr];
//     }
//     return res;
// }

/* ======================================= */
// 深拷贝
var obj = { name: "hello", stu: { age: 20 } };
var obj2 = copy(obj);

obj2.name = "hi";
obj2.stu.age = 40;
console.log(obj)
console.log(obj2)

function copy(obj) {
    var res = {};
    for(var attr in obj) {
        if(typeof obj[attr] === "object") {
            res[attr]= copy(obj[attr]);
        } else {
            res[attr]= obj[attr];
        }
    }
    return res;
}
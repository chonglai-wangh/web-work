/* 
    系统对象: 最大的对象是 window 对象
    包装对象: 基本类型: 字符串, 数字布尔等

    可以通过对象来获取提供的属性和方法
*/

// var arr = new Array()

// var arr = [2, 3, 5]
// console.log(arr)

/* ============================================= */
// var arr = [2, 3, 5]
// Array.prototype.push = function(){
//     for(var i = 0; i < arguments.length; i++) {
//         this[this.length] = arguments[i]
//     }
//     return this.length;
// }

// arr.push(9, 1, 1)
// console.log(arr) // [ 2, 3, 5, 9, 1, 1 ]

/* ============================================= */
var str = "hello"
console.log(str.charAt(1)) // e

var obj = new String("   hello   ")
console.log("(" + obj + ")")
// console.log("(" + obj.trim() + ")")
String.prototype.trim = function () {
    return this.replace(/^\s+|\s/g, "")
}
console.log("(" + obj.trim() + ")")
/* 
    拖拽方块

    继承
    多态:
        重写继承方法
        配置对象
*/
// 重写继承方法
// function Drag(id) {
//     this.initX = 0;
//     this.initY = 0;
//     this.element = document.getElementById(id);
//     console.log(this.element);
// }

// Drag.prototype.init = function () {
//     this.element.onmousedown = (e) => {
//         console.log("按下")
//         this.fnDown(e);
//         document.onmousemove = (e) => {
//             console.log("拖动")
//             this.fnMove(e);
//         };
//         document.onmouseup = () => {
//             console.log("松开")
//             this.fnUp();
//         };
//         return false;
//     };
// };
// Drag.prototype.fnDown = function (e) {
//     this.initX = e.pageX - this.element.offsetLeft;
//     this.initY = e.pageY - this.element.offsetTop;
//     // console.log("鼠标在方块中的X: " + (e.pageX) + "===鼠标在方块中的Y: " + (e.pageY))
//     // console.log("方块距离X: " + (this.element.offsetLeft) + "===方块距离Y: " + (this.element.offsetTop))
// };
// Drag.prototype.fnMove = function (e) {
//     this.element.style.left = e.pageX - this.initX + "px";
//     this.element.style.top = e.pageY - this.initY + "px";
//     // console.log("拖动X: " + (e.pageX - this.initX) + "拖动Y: " + (e.pageY - this.initY))
// };
// Drag.prototype.fnUp = function () {
//     document.onmousemove = null;
//     document.onmouseup = null;
// };

// function ChildDrag(id) {
//     Drag.call(this, id)
//     console.log(this.element);
// }
// extend(Drag, ChildDrag)

// // 重写继承的方法
// ChildDrag.prototype.fnMove = function (e) {
//     var boxLeft = e.pageX - this.initX;
//     var boxTop = e.pageY - this.initY;

//     // if(boxLeft < 0) {
//     //     boxLeft = 0
//     // } else if(boxLeft > window.innerWidth - this.element.offsetWidth) {
//     //     boxLeft = window.innerWidth - this.element.offsetWidth;
//     // }

//     // if(boxTop < 0) {
//     //     boxTop = 0
//     // } else if(boxTop > window.innerHeight - this.element.offsetHeight) {
//     //     boxTop = window.innerHeight - this.element.offsetHeight;
//     // }

//     boxLeft = Math.max(0, boxLeft)
//     boxLeft = Math.min(boxLeft, window.innerWidth - this.element.offsetWidth)

//     boxTop = Math.max(0, boxTop)
//     boxTop = Math.min(boxTop, boxTop = window.innerHeight - this.element.offsetHeight)

//     this.element.style.left = boxLeft + "px"
//     this.element.style.top = boxTop + "px"
// }

// function extend(parent, child) {
//     for (var key in parent.prototype) {
//         child.prototype[key] = parent.prototype[key];
//     }
// }

// var oBox = new Drag("box")
// oBox.init();

// var oBox2 = new ChildDrag("box2")
// oBox2.init();

// console.log(oBox)
// console.log(oBox2)

/* ================================================= */
// 配置对象
function Drag(opts) {
    this.initX = 0;
    this.initY = 0;
    this.onlyX = opts.onlyX || false;
    this.onlyY = opts.onlyY || false;
    this.range = opts.range || false;
    this.element = document.getElementById(opts.id);
}

Drag.prototype.init = function () {
    this.element.onmousedown = (e) => {
        console.log("按下")
        this.fnDown(e);
        document.onmousemove = (e) => {
            console.log("拖动")
            this.fnMove(e);
        };
        document.onmouseup = () => {
            console.log("松开")
            this.fnUp();
        };
        return false;
    };
};
Drag.prototype.fnDown = function (e) {
    this.initX = e.pageX - this.element.offsetLeft;
    this.initY = e.pageY - this.element.offsetTop;
    // console.log("鼠标在方块中的X: " + (e.pageX) + "===鼠标在方块中的Y: " + (e.pageY))
    // console.log("方块距离X: " + (this.element.offsetLeft) + "===方块距离Y: " + (this.element.offsetTop))
};
Drag.prototype.fnMove = function (e) {
    var boxLeft = e.pageX - this.initX;
    var boxTop = e.pageY - this.initY;
    if (this.range) {
        boxLeft = Math.max(0, boxLeft)
        boxLeft = Math.min(boxLeft, window.innerWidth - this.element.offsetWidth)

        boxTop = Math.max(0, boxTop)
        boxTop = Math.min(boxTop, boxTop = window.innerHeight - this.element.offsetHeight)
    }
    if (this.onlyX) {
        this.element.style.left = boxLeft + "px"
    } else if (this.onlyY) {
        this.element.style.top = boxTop + "px"
    } else {
        this.element.style.left = boxLeft + "px"
        this.element.style.top = boxTop + "px"
    }
};
Drag.prototype.fnUp = function () {
    document.onmousemove = null;
    document.onmouseup = null;
};

var oBox = new Drag({
    id: "box"
})
oBox.init();

var oBox2 = new Drag({
    id: "box2",
    range: true
})
oBox2.init();

var oBox3 = new Drag({
    id: "box3",
    range: true,
    onlyX: true
})
oBox3.init();

var oBox4 = new Drag({
    id: "box4",
    range: true,
    onlyY: true
})
oBox4.init();
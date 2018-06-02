var yyy = document.getElementById('xxx')
var ctx = yyy.getContext('2d');



/****设置屏幕尺寸*****/
autoWindowSize()

/*监听鼠标*/
listenUser(yyy)

/*橡皮擦*/
var eraserEnable = false
eraser.onclick = function () {
    eraserEnable = true
    eraser.classList.add('active')
    pen.classList.remove('active')

}
pen.onclick = function () {
    eraserEnable = false
    pen.classList.add('active')
    eraser.classList.remove('active')
}


/*颜色选择*/
//var colors={red:red,black:black,blue:blue,green:green}
black.onclick = function () {
    ctx.strokeStyle = 'black'
    black.classList.add('active')
    yellow.classList.remove('active')
    blue.classList.remove('active')
    red.classList.remove('active')
    green.classList.remove('active')
}
yellow.onclick = function () {
    ctx.strokeStyle = 'yellow'
    yellow.classList.add('active')
    black.classList.remove('active')
    blue.classList.remove('active')
    green.classList.remove('active')
    red.classList.remove('active')
}
blue.onclick = function () {
    ctx.strokeStyle = 'blue'
    blue.classList.add('active')
    red.classList.remove('active')
    yellow.classList.remove('active')
    black.classList.remove('active')
    green.classList.remove('active')
}
red.onclick = function () {
    ctx.strokeStyle = 'red'
    red.classList.add('active')
    blue.classList.remove('active')
    yellow.classList.remove('active')
    black.classList.remove('active')
    green.classList.remove('active')
}
green.onclick = function () {
    ctx.strokeStyle = 'green'
    green.classList.add('active')
    blue.classList.remove('active')
    yellow.classList.remove('active')
    black.classList.remove('active')
    red.classList.remove('active')

}


/*画笔粗细*/
thin.onclick = function () {
    lineWidth = 5
}
thick.onclick = function () {
    lineWidth = 10
}


/*清屏*/
clear.onclick = function () {
    ctx.clearRect(0, 0, yyy.width, yyy.height);

}

/*下载*/
save.onclick = function () {
    var imagedata = yyy.toDataURL('png')
    a = document.createElement('a')
    document.body.appendChild(a)
    a.href = imagedata
    a.target = '_blank'
    a.download = '我的画布'
    a.click()
}


/*工具函数*/
function listenUser(canvas) {
    var lastPoint = { x: undefined, y: undefined }
    var useing = false

    if ('ontouchstart' in document.body) {//触屏设备

        yyy.ontouchstart = function (aaa) {
            var x = aaa.touches['0'].clientX
            var y = aaa.touches['0'].clientY
            console.log(x, y)
            useing = true
            if (eraserEnable) {
                ctx.clearRect(x - 5, y - 5, 10, 10)
            }
            else {
                lastPoint = { x: x, y: y }
            }


        }
        yyy.ontouchmove = function (aaa) {
            var x = aaa.touches['0'].clientX
            var y = aaa.touches['0'].clientY
            if (useing) {
                if (eraserEnable) {
                    ctx.clearRect(x - 5, y - 5, 10, 10)
                }
                else {
                    var newPoint = { x: x, y: y }
                    drawLine(lastPoint.x, lastPoint.y, x, y)
                    lastPoint = newPoint
                }
            }

        }
        yyy.ontouchend = function (aaa) {
            useing = false


        }

    }

    else {
        canvas.onmousedown = function (aaa) {
            var x = aaa.clientX
            var y = aaa.clientY
            useing = true
            if (eraserEnable) {
                ctx.clearRect(x - 5, y - 5, 10, 10)
            }
            else {
                lastPoint = { x: x, y: y }
            }

        }
        canvas.onmousemove = function (aaa) {
            var x = aaa.clientX
            var y = aaa.clientY
            if (useing) {
                if (eraserEnable) {
                    ctx.clearRect(x - 5, y - 5, 10, 10)
                }
                else {
                    var newPoint = { x: x, y: y }
                    drawLine(lastPoint.x, lastPoint.y, x, y)
                    lastPoint = newPoint
                }
            }
        }
        canvas.onmouseup = function (aaa) {
            useing = false
        }

    }
}
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)//上一个点
    ctx.lineWidth = lineWidth
    ctx.lineTo(x2, y2)//新的点
    ctx.stroke()
    ctx.closePath()
}
function autoWindowSize() {
    function getWH() {//获取宽高
        xxx.width = document.documentElement.clientWidth
        xxx.height = document.documentElement.clientHeight
    }
    getWH()
    window.onresize = function () {
        getWH()
    }
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, yyy.width, yyy.height);
}






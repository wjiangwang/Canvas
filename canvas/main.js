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
    active.className = 'activex'

}
pen.onclick = function () {
    eraserEnable = false
    active.className = 'active'

}


function listenUser(canvas) {
    var lastPoint = { x: undefined, y: undefined }
    var useing = false

    if ('ontouchstart' in document.body) {//触屏设备

        yyy.ontouchstart = function (aaa) {
            var x = aaa.touches['0'].clientX
            var y = aaa.touches['0'].clientY
            console.log(x,y)
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
    ctx.lineWidth = 4
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
}




var div = document.getElementById('Canvas')
var paintting=false
//按下鼠标
div.onmousedown=function(a){
    paintting=true
    var x=a.clientX
    var y=a.clientY
    console.log(x,y)
    var divA=document.createElement('div')
    divA.style="height: 6px; width: 6px; background: blue; border-radius: 3px;position: absolute;left:"+(x-2)+"px;top:"+(y-2)+"px;" 
    div.appendChild(divA)
    

}

//移动鼠标
div.onmousemove=function(b){
    if(paintting){
        var x=b.clientX
        var y=b.clientY
        console.log(x,y)
        var divA=document.createElement('div')
        divA.style="height: 6px; width: 6px; background: blue; border-radius: 3px;position: absolute;left:"+(x-2)+"px;top:"+(y-2)+"px;" 
        div.appendChild(divA)
    }else{

    }

}



//抬起鼠标
div.onmouseup=function(c){
    paintting=false
}
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


function drawLine(){
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
}

function drawCircle(){
    ctx.arc(500, 600, 100, 0, 2*Math.PI);
    ctx.stroke();
}

function drawRectangle(){
    console.log("Desenhando retângulo");
}

function drawTriangle(){
    console.log("Desenhando triângulo");
}

function drawPoligon(){
    console.log("Desenhando poligono");
}

function clearCanvas(){
    
}
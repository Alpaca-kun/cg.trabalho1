var c;
var ctx;

function draw(){
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");
}
    
function drawLine(){
    draw();
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
}

function drawCircle(){
    draw();
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
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.beginPath();
}
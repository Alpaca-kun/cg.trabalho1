var x, y, canvas, ctx;

function draw(){
    console.log("Chegou aqui");
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    }

function getClick(event){
    x = event.clientX - canvas.offsetLeft;
    y = event.clientY - canvas.offsetTop;
    console.log("X | Y | = |" + x + "|" + y + "|");
    }

function drawLine(){
    draw()
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y);
    ctx.stroke();
}

function drawCircle(){
    ctx.beginPath();
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
    var cont = 0;
}

function clearCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
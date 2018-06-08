const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
var pos = {
    x: 0,
    y: 0
};

canvas.addEventListener('click', (e) => {
    pos = {
        x: e.clientX,
        y: e.clientY
    };
    console.log('X | Y = ' + pos.x + '|' + pos.y);
}, 
false);


function drawLine(){
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
}

function drawCircle(){
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 100, 0, 2*Math.PI);
    ctx.stroke();
}

function drawRectangle(){
    ctx.beginPath();
    ctx.strokeRect(50, 50, 50, 50);
}

function drawTriangle(){
    ctx.beginPath();
    ctx.moveTo(75,50);
    ctx.lineTo(100,75);
    ctx.lineTo(100,25);
    ctx.lineTo(75,50);
    ctx.stroke();
}

function drawPoligon(){
    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.lineTo(200,200);
    ctx.lineTo(200, 250);
    ctx.lineTo(300, 250);
    ctx.lineTo(150, 150);
    ctx.stroke();   
}

function clearCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
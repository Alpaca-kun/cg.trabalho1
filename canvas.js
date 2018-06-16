const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const click = new Event('click');
var pos = {
    x: 0,
    y: 0
};
// var numberClicks = 0;

// function getXY(){
//     canvas.addEventListener('click', (e) => {
//         pos = {
//             x: e.clientX - canvas.offsetLeft,
//             y: e.clientY - canvas.offsetTop
//         };
//         numberClicks++;
//         console.log('X = ' + pos.x + ' Y = ' + pos.y);
//         }, false);
// }


// function drawLine(){
//     numberClicks = 0;
//     totalClicks = 2;
//     ctx.beginPath();
//     alert("É necessário fornecer " + (totalClicks-numberClicks) + " pontos no canvas.");
//     ctx.moveTo(pos.x, pos.y);
//     ctx.lineTo(pos.x, pos.y);
//     ctx.stroke();
// }

// function drawCircle(){
//     numberClicks = 0;
//     totalClicks = 2;
//     ctx.beginPath();
//     ctx.arc(pos.x, pos.y, 150, 0, 2*Math.PI);
//     ctx.stroke();
// }

// function drawRectangle(){
//     numberClicks = 0;
//     totalClicks = 4;
//     ctx.beginPath();
//     ctx.strokeRect(50, 50, 50, 50);
// }

// function drawTriangle(){
//     numberClicks = 0;
//     totalClicks = 3;
//     ctx.beginPath();
//     ctx.stroke();
// }

// function drawPoligon(){
//     numberClicks = 0;
//     ctx.beginPath();
//     ctx.stroke();   
// }

function clearCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
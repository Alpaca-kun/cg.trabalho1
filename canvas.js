const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const click = new Event('click');
var objectsList = [];

function get2Points(event, form) {
    var x0, x1, y0, y1;
    var line, circle, rect, triangle;
    function distance2Points(){
        var distance =  Math.sqrt(Math.pow(x1-x0,2) + Math.pow(y1-y0, 2));
        return distance;
    }

    function removeEvent() {
        form = null;
    }
    
    canvas.onmousedown = function(event) {
        event = event;
        x0 = event.clientX - canvas.offsetLeft;
        y0 = event.clientY - canvas.offsetTop;
        console.log('X0 = ' + x0 + ' Y0 = ' + y0)
    }

    canvas.onmouseup = function(event) {
        event = event;
        x1 = event.clientX - canvas.offsetLeft;
        y1 = event.clientY - canvas.offsetTop;
        console.log('X1 = ' + x1 + ' Y1 = ' + y1);
        switch(form){
            case 'line':
                let newLine = new Line(x0, y0,x1, y1);
                newLine.makeMatrix();
                objectsList.push(newLine);
                newLine.draw(ctx);
                removeEvent();        
                break;

            case 'circle':
                let newCircle = new Circle(x0, y0, distance2Points());
                newCircle.makeMatrix();
                objectsList.push(newCircle);
                newCircle.draw(ctx);
                removeEvent();
                break;

            case 'rect':
                let newRect = new Rect(x0, y0, x1, y1);
                newRect.makeMatrix();
                objectsList.push(newRect);
                newRect.draw(ctx);
                removeEvent();
                break;

            default:
                console.log('Não faz nada');
        }
    }
}

function get3Points(event) {
    var x0, x1, x2, y0, y1, y2, x, y
    var numberClicks = 0;
    
    canvas.onclick = function(event) {
        x = event.clientX - canvas.offsetLeft;
        y = event.clientY - canvas.offsetTop;
        console.log('X = ' + x + ' Y = ' + y)
        numberClicks++;
        if (numberClicks == 1) {
            x0 = x;
            y0 = y;
        }
        if (numberClicks == 2) {
            x1 = x;
            y1 = y;
        }
        if (numberClicks == 3) {
            x2 = x;
            y2 = y;
            let newTriangle = new Triangle(x0, y0, x1, y1, x2, y2);
            newTriangle.makeMatrix();
            objectsList.push(newTriangle);
            newTriangle.draw(ctx);
        }
    }
}

function drawLine() {
    alert("Clique no primeiro ponto, continue segurando e arraste até o segundo ponto.");
    get2Points(click, 'line');    
}

function drawCircle() {
    alert("Clique no primeiro ponto, continue segurando e arraste até o segundo ponto.");
    get2Points(click, 'circle');
}

function drawRectangle() {
    alert("Clique no primeiro ponto, continue segurando e arraste até o segundo ponto.");
    get2Points(click, 'rect');
}

function drawTriangle() {
    alert("Escolha três pontos dentro do canvas.");
    get3Points(click);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
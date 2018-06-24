const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const click = new Event('click');
var objectsList = [];
var objectSelected = false;

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

function draw (object) {
    switch(object){
        case 'line':
            alert('Para desenhar a linha clique no primeiro ponto, continue segurando e arraste até o segundo ponto.');
            get2Points(click, object);
            break;
        case 'circle':
            alert('Para desenhar o círculo clique no primeiro ponto, continue segurando e arraste até o segundo ponto.');
            get2Points(click, object);
            break;
        case 'rect':
            alert('Clique no primeiro ponto, continue segurando e arraste até o segundo ponto.');
            get2Points(click, object);
            break;
        case 'triangle':
            alert('Escolha três pontos dentro do canvas.');
            get3Points(click);
            break;
        case 'clear':
            //Pedir confirmarção para limpar.
            var decision = confirm('Deseja realmente limpar o canvas?');
            if (decision) {
                console.log('Canvas será limpado.');
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            } else {
                console.log('Cancelado.');
            }
            break;  
        default:
            console.log('Nenhum objeto para desenhar.');
    }
}

function transformation(type) {
    switch(type) {
        case 'translate':
            console.log('Tranlação');
            var tx = prompt('Insira o deslocamento em x.');
            var ty = prompt('Insira o deslocamento em y.');
            console.log('Deslocamento em X: ' + tx + ' Deslocamento em Y: ' + ty);
        break;
        case 'rotation':
            console.log('Rotação');
            var angle = prompt('Insira o ângulo de rotação.');
            console.log('Ângulo de rotação escolhido: ' + angle + '°');
        break;
        case 'scale':
            console.log('Escala')
            var sx = prompt('Insira a escala em x.');
            var sy = prompt('Insira a escala em y.');
            console.log('Escala em x: ' + sx + 'Escala em y: ' + sy);
        break;
        default:
            console.log('Nothing to do');
    }
}


const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const click = new Event('click');
var objectsList = [];
var objectSelected = false;
var text;

function get2Points(event, form) {
    var x0, x1, y0, y1;
    function distance2Points() {
        var distance =  Math.sqrt(Math.pow(x1-x0,2) + Math.pow(y1-y0, 2));
        return distance;
    }
    
    canvas.onmousedown = function(event) {
        x0 = event.clientX - canvas.offsetLeft;
        y0 = event.clientY - canvas.offsetTop;
        console.log('X0 = ' + x0 + ' Y0 = ' + y0)
    }

    canvas.onmouseup = function(event) {
        x1 = event.clientX - canvas.offsetLeft;
        y1 = event.clientY - canvas.offsetTop;
        console.log('X1 = ' + x1 + ' Y1 = ' + y1);
        switch(form){
            case 'line':
                let newLine = new Line(x0, y0,x1, y1);
                objectsList.push(newLine);
                objectsList[objectsList.length-1].makeMatrix();
                objectsList[objectsList.length-1].draw(ctx);
                showListObjects();
                form = null;
                break;

            case 'circle':
                let newCircle = new Circle(x0, y0, distance2Points());
                objectsList.push(newCircle);
                objectsList[objectsList.length-1].makeMatrix();
                objectsList[objectsList.length-1].draw(ctx);
                showListObjects();
                form = null;
                break;

            case 'rect':
                let newRect = new Rect(x0, y0, x1, y1);
                objectsList.push(newRect);
                objectsList[objectsList.length-1].makeMatrix();
                objectsList[objectsList.length-1].draw(ctx);
                showListObjects();
                form = null;
                break;

            default:
                break;
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
            objectsList.push(newTriangle);
            objectsList[objectsList.length-1].makeMatrix();
            objectsList[objectsList.length-1].draw(ctx);
            showListObjects();
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
            var decision = confirm('Deseja realmente limpar o canvas?');
            if (decision) {
                console.log('Canvas será limpado.');
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                location.reload();
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
            var indice = prompt('Insira o índice da figura a ser transladada em relação à lista ao lado.');
            var tx = prompt('Insira o deslocamento em x.');
            var ty = prompt('Insira o deslocamento em y.');

            if(indice != undefined && tx != undefined && ty != undefined) {
                clearOnlyCanvas();
                objectsList[indice-1].setNewMatrix(translate(objectsList[indice-1].objectMatrix, tx, ty));
                redesign();
            }
        break;
        case 'rotation':
            var indice = prompt('Insira o índice da figura a ser rotacionada em relação à lista ao lado.');
            
            if(objectsList[indice-1].objectName == 'Círculo') {
                alert('Um círculo não pode ser rotacionado');
            }else {
                var angle = prompt('Insira o ângulo de rotação.');
                if(indice != undefined && angle != undefined) {
                    clearOnlyCanvas();
                    objectsList[indice-1].setNewMatrix(rotate(objectsList[indice-1].objectMatrix, angle, objectsList[indice-1].objectMatrix[0][0], objectsList[indice-1].objectMatrix[1][0]));
                    redesign();
                }
            }   
        break;
        case 'scale':
            var indice = prompt('Insira o índice da figura que terá sua escala mudada em relação à lista ao lado.');
            var sx = prompt('Insira a escala em x.');
            var sy = prompt('Insira a escala em y.');
            if(indice != undefined && sx != undefined && sy != undefined) {
                clearOnlyCanvas();
                objectsList[indice-1].setNewMatrix(scale(objectsList[indice-1].objectMatrix, sx, sy,  objectsList[indice-1].objectMatrix[0][0], objectsList[indice-1].objectMatrix[1][0]));
                redesign();
            }    
        break;
        default:
            console.log('Nothing to do');
    }
}

function showListObjects() {
    var listToShow = [];
    var text;
    var li = document.createElement('li')
    var ul = document.getElementById('objects');
    
    for (var i = 0; i < objectsList.length; i++) {
        if (objectsList[i].objectName == 'Linha'){
            text = (i+1) + ')' + objectsList[i].objectName + ' - ' + 'P0: (' + objectsList[i].objectMatrix[0][0] + ',' + objectsList[i].objectMatrix[1][0] + ') - ' + 'P1: (' + objectsList[i].objectMatrix[0][1] + ',' + objectsList[i].objectMatrix[1][1] + ')';
        }
        if(objectsList[i].objectName == 'Círculo') {
            text = (i+1) + ')' + objectsList[i].objectName + ' - ' + 'Centro: (' + objectsList[i].objectMatrix[0][0] + ',' + objectsList[i].objectMatrix[1][0] + ')'
        }
        if(objectsList[i].objectName == 'Retângulo') {
            text = (i+1) + ')' + objectsList[i].objectName + ' - ' + 'PD0: (' + objectsList[i].objectMatrix[0][0] + ',' + objectsList[i].objectMatrix[1][0] + ') - ' + 'PD1: (' + objectsList[i].objectMatrix[1][1] + ',' + objectsList[i].objectMatrix[1][1] + ')';
        }
        if(objectsList[i].objectName == 'Triângulo') {
            text = (i+1) + ')' + objectsList[i].objectName + ' - ' + 'P0: (' + objectsList[i].objectMatrix[0][0] + ',' + objectsList[i].objectMatrix[1][0] + ') - ' + 'P1: (' + objectsList[i].objectMatrix[0][1] + ',' + objectsList[i].objectMatrix[1][1] + ') - ' + 'P2: (' + objectsList[i].objectMatrix[0][2] + ',' + objectsList[i].objectMatrix[2][1] + ')';
        }
        listToShow[i] = text;
    }
    listToShow.forEach(function(item) { 
        ul.appendChild(li);
        li.innerHTML = item;
    });  
}

function clearObjectList() {
    var li;

    li = document.getElementsByTagName('li');
    for(var i = 0; i < li.length; i++) {
        li[i].remove();
    }
}

function clearOnlyCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function redesign() {
    for(var i = 0; i < objectsList.length; i++) {
        objectsList[i].draw(ctx);
    }
}

canvas.addEventListener("mousemove", function (event) {
    var coordOut = document.getElementById('cursorCoodinates');
    x1 = event.clientX - canvas.offsetLeft;
    y1 = event.clientY - canvas.offsetTop;
    coordOut.innerHTML = 'X = ' + x1 +'|' +' Y = ' + y1;
})

function showHelp() {
    document.getElementById("helpModal").showModal();
}


var countZoom = 0;

function submitCommand() {
    var commandLine = document.getElementById('commandLine');
    text = commandLine.value;
    eval(text);
    commandLine.value = '';
}

function line(x0, y0, x1, y1) {
    let newLine = new Line(x0, y0,x1, y1);
    objectsList.push(newLine);
    objectsList[objectsList.length-1].makeMatrix();
    objectsList[objectsList.length-1].draw(ctx);
    showListObjects();
}

function circle(x0, y0, radius) {
    let newCircle = new Circle(x0, y0, radius);
    objectsList.push(newCircle);
    objectsList[objectsList.length-1].makeMatrix();
    objectsList[objectsList.length-1].draw(ctx);
    showListObjects();
}

function rect(x0, y0, x1, y1) {
    let newRect = new Rect(x0, y0, x1, y1);
    objectsList.push(newRect);
    objectsList[objectsList.length-1].makeMatrix();
    objectsList[objectsList.length-1].draw(ctx);
    showListObjects();
}

function triangle(x0, y0, x1, y1, x2, y2) {
    let newTriangle = new Triangle(x0, y0, x1, y1, x2, y2);
    objectsList.push(newTriangle);
    objectsList[objectsList.length-1].makeMatrix();
    objectsList[objectsList.length-1].draw(ctx);
    showListObjects();
}

function clear() {
    var decision = confirm('Deseja realmente limpar o canvas?');
    if (decision) {
        console.log('Canvas será limpado.');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        location.reload();
    } else {
        console.log('Cancelado.');
    }
}

function zoomIn() {
    countZoom++;
    clearOnlyCanvas();
    ctx.scale(2, 2);
    clearOnlyCanvas();
    redesign();
}

function zoomOut() {
    countZoom--;
    clearOnlyCanvas();
    ctx.scale(0.5, 0.5);
    clearOnlyCanvas();
    redesign();
}

function zoomReset() {
    while(countZoom != 0){
        if(countZoom > 0){
            zoomOut();
        }
        if(countZoom < 0){
            zoomIn();
        }
    }
    redesign();
    console.log("Zoom resetado");
}

function select(indice) {
    for(var i = 0; i < objectsList.length - 1; i++){
        objectsList[indice-1].deselect(ctx);    
    }
    objectsList[indice-1].showSelected(ctx);
}

function deselect(indice) {
    objectsList[indice-1].deselect(ctx);
}

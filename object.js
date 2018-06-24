class Line {
    constructor(x0, y0, x1, y1) {
        this.objectName = 'line';
        this.x0 = x0;
        this.y0 = y0;
        this.x1 = x1;
        this.y1 = y1;
        this.objectMatrix = new Array(3);
        for (var i = 0; i < 3; i++) {
            this.objectMatrix[i] = new Array(2);
        }
    }
    makeMatrix() {
        this.objectMatrix[0][0] = this.x0;
        this.objectMatrix[1][0] = this.y0;
        this.objectMatrix[2][0] = 1;
        this.objectMatrix[0][1] = this.x1;
        this.objectMatrix[1][1] = this.y1;
        this.objectMatrix[2][1] = 1;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.x0, this.y0);
        ctx.lineTo(this.x1, this.y1);
        ctx.stroke();
    }
}

class Circle {
    constructor(x0, y0, radius) {
        this.objectName = 'circle';
        this.x0 = x0;
        this.y0 = y0;
        this.radius = radius;
        this.objectMatrix = new Array(3);
        for (var i = 0; i < 3; i++) {
            this.objectMatrix[i] = new Array(1);
        }
    }
    makeMatrix() {
        this.objectMatrix[0][0] = this.x0;
        this.objectMatrix[1][0] = this.y0;
        this.objectMatrix[2][0] = 1;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x0, this.y0, this.radius, 0, 2*Math.PI);
        ctx.stroke();
    }
  
}

class Rect {
    constructor(x0, y0, x1, y1) {
        this.objectName = 'rect';
        this.x0 = x0;
        this.y0 = y0;
        this.x1 = x1;
        this.y1 = y1;
        this.objectMatrix = new Array(3);
        for (var i = 0; i < 3; i++) {
            this.objectMatrix[i] = new Array(4);
        }
    }
    makeMatrix() {
        this.objectMatrix[0][0] = this.x0;
        this.objectMatrix[1][0] = this.y0;
        this.objectMatrix[2][0] = 1;
        this.objectMatrix[0][1] = this.x0;
        this.objectMatrix[1][1] = this.y1;
        this.objectMatrix[2][1] = 1;
        this.objectMatrix[0][2] = this.x1;
        this.objectMatrix[1][2] = this.y1;
        this.objectMatrix[2][2] = 1;
        this.objectMatrix[0][3] = this.x1;
        this.objectMatrix[1][3] = this.y0;
        this.objectMatrix[2][3] = 1;
    }
    draw(ctx){
        ctx.beginPath();
        ctx.moveTo(this.x0, this.y0);
        ctx.lineTo(this.x1, this.y0);
        ctx.lineTo(this.x1, this.y1);
        ctx.lineTo(this.x0, this.y1);
        ctx.lineTo(this.x0, this.y0);
        ctx.stroke();
    }
}

class Triangle {
    constructor(x0, y0, x1, y1, x2, y2) {
        this.objectName = 'triangle';
        this.x0 = x0;
        this.y0 = y0;
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.objectMatrix = new Array(3);
        for (var i = 0; i < 3; i++) {
            this.objectMatrix[i] = new Array(3);
        }
    }
    makeMatrix() {
        this.objectMatrix[0][0] = this.x0;
        this.objectMatrix[1][0] = this.y0;
        this.objectMatrix[2][0] = 1;
        this.objectMatrix[0][1] = this.x1;
        this.objectMatrix[1][1] = this.y1;
        this.objectMatrix[2][1] = 1;
        this.objectMatrix[0][2] = this.x2;
        this.objectMatrix[1][2] = this.y2;
        this.objectMatrix[2][2] = 1;
    }
    draw(ctx){
        ctx.beginPath();
        ctx.moveTo(this.x0, this.y0);
        ctx.lineTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.lineTo(this.x0, this.y0);
        ctx.stroke();
    }
}
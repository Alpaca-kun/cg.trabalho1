class Circle{
    
    constructor(x0, y0, radius){
        this.x0 = x0;
        this.y0 = y0;
        this.radius = radius;
        var objectMatrix = new Array(3);
        for(i = 0; i < 3; i++){
            objectMatrix[i] = new Array(1);
        }
    }

    makeMatrix(){
        objectMatrix[0][1] = x0;
        objectMatrix[1][1] = y0;
        objectMatrix[2][1] = 1;
        console.log(objectMatrix);
    }
}

module.exports = Circle;
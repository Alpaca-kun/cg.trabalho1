function translate (mObject, dx, dy) {
    var transMatrix = [
        [1, 0, dx],
        [0, 1, dy],
        [0, 0, 1]
    ];
    return mm(transMatrix, mObject);
}

function rotate (mObject, angle, x, y) {
    var radians = angle * (Math.PI/180);
    var rotateMatrix = [
        [Math.cos(radians), (-1)*Math.sin(radians), (y*Math.sin(radians))-(x*Math.cos(radians))+x],
        [Math.sin(radians), Math.cos(radians), ((-1*x)*Math.sin(radians))-(y*Math.cos(radians))+y],
        [0, 0, 1]
    ];
    console.log(radians);
    return mm(rotateMatrix, mObject);
}

function scale (mObject, sx, sy, x, y) {
    var scaleMatrix = [
        [sx, 0, x - (x*sx)],
        [0, sy, y - (y*sy)],
        [0, 0, 1]
    ]
    return mm(scaleMatrix, mObject);
}

function mm(m1, m2) {
    var result = [];
    for (var i = 0; i < m1.length; i++) {
        result[i] = [];
        for (var j = 0; j < m2[0].length; j++) {
            var sum = 0;
            for (var k = 0; k < m1[0].length; k++) {
                sum += m1[i][k] * m2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}
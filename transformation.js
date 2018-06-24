function translate (mObject, dx, dy) {
    var transMatrix = [
        [1, 0, dx],
        [0, 1, dy],
        [0, 0, 1]
    ];
    return mm(transMatrix, mObject);
}

function rotate (mObject, angle) {
    var rotateMatrix = [
        [Math.cos(angle), -Math.sen(angle), 0],
        [Math.sen(angle), Math.cos(angle), 0],
        [0, 0, 1]
    ];
    return mm(rotateMatrix, mObject);
}

function scale (mObject, sx, sy) {
    var scaleMatrix = [
        [sx, 0, 0],
        [0, sy, 0],
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
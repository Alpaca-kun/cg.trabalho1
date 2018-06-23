window.onload = function () {
    'use strict';
    var canvas,
        context,
        x1,
        y1,
        x2,
        y2,
        isDown = false, //flag we use to keep track
        windowHeight,
        windowWidth,
        canvasBackgroundColor = 'lightgray';
    
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
    
    canvas = document.getElementById('canvas');
    canvas.height = windowHeight;
    canvas.width = windowWidth;
    
    canvas.style.backgroundColor = canvasBackgroundColor;
    
    context = canvas.getContext('2d');
    
    
    
    canvas.onmousedown = function (event) {
        event = event || window.event;

        // Now event is the event object in all browsers.
        GetStartPoints();
    };
    
    canvas.onmouseup = function (event) {
        event = event || window.event;

        // Now event is the event object in all browsers.
        GetEndPoints();
        
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
    };
    
    
    
    function GetStartPoints() {
      // This function sets start points
        x1 = event.clientX;
        y1 = event.clientY;
    }
    
    function GetEndPoints() {
      // This function sets end points
        x2 = event.clientX;
        y2 = event.clientY;
    }
  
};


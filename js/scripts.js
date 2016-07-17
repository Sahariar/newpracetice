var canvas = document.getElementById('our-canvas'), // Our canvas element
    context = canvas.getContext('2d'); // 2d is the way to go here.


canvas.width = canvas.width;
context.beginPath();
context.moveTo(200,150);
context.lineTo(250,185);
context.moveTo(215,190);
context.lineTo(154,170);
context.strokeStyle = '#a53124';
context.stroke();
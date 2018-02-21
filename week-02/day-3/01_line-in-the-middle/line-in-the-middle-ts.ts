
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');



// DO NOT TOUCH THE CODE ABOVE THIS LINE
// draw a red horizontal line to the canvas' middle.
ctx.beginPath();
ctx.moveTo (0, 200);
ctx.lineTo (600, 200);
ctx.strokeStyle = "#F00";
ctx.stroke();

// draw a green vertical line to the canvas' middle.
ctx.beginPath();
ctx.moveTo (300, 0);
ctx.lineTo (300, 600);
ctx.strokeStyle = "green";
ctx.stroke();

// Draw a colored rectangle
ctx.fillStyle = 'purple';
ctx.fillRect(110, 110, 100, 100);







'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.

let middleX = canvas.width/2;
let middleY = canvas.height/2;

function toTheMiddle (x0, y0, x1, y1){
  ctx.beginPath();
  ctx.moveTo (x0, y0);
  ctx.lineTo (x1, y1);
  ctx.strokeStyle = "#F00";
  ctx.stroke();
}

for (let i: number = 0; i < 30; i++){
  toTheMiddle(i**3+100, i**2*10, middleX, middleY)
}
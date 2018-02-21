
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

let middleX = canvas.width / 2;
let middleY = canvas.height / 2;

function toTheMiddle(x0, y0) {
  ctx.beginPath();
  ctx.moveTo(x0, y0);
  ctx.lineTo(middleX, middleY);
  ctx.strokeStyle = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
  ctx.stroke();
}

for (let i: number = 0; i < canvas.width; i += 20) {
  toTheMiddle(i, 0, );
  toTheMiddle(i, canvas.height, );
}
for (let i: number = 0; i < canvas.height; i += 20) {
  toTheMiddle(0, i, );
  toTheMiddle(canvas.width, i);
}
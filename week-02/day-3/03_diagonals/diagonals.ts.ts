'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// draw a box that has different colored lines on each edge.

ctx.beginPath();
ctx.moveTo (10, 10);
ctx.lineTo (10, 110);
ctx.lineTo (60, 60);
ctx.strokeStyle = "red";
ctx.stroke();

ctx.beginPath();
ctx.moveTo (10, 110);
ctx.lineTo (110, 110);
ctx.lineTo (60, 60);
ctx.strokeStyle = "green";
ctx.stroke();

ctx.beginPath();
ctx.moveTo (110, 110);
ctx.lineTo (110, 10);
ctx.lineTo (60, 60);
ctx.strokeStyle = "blue";
ctx.stroke();

ctx.beginPath();
ctx.moveTo (110, 10);
ctx.lineTo (10, 10);
ctx.lineTo (60, 60);
ctx.strokeStyle = "purple";
ctx.stroke();
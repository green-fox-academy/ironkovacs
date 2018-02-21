'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

let middleX = canvas.width/2;
let middleY = canvas.height/2;


function centeredSquares(size){
  ctx.fillStyle = 'transparent';
  ctx.strokeStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16); // RANDOM COLORS, YAY!
  ctx.strokeRect(middleX-size/2, middleY-size/2, size, size);
}
centeredSquares(30);
centeredSquares(60);
centeredSquares(130);
centeredSquares(324);
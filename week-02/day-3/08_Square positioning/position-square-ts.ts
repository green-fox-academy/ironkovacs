
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.



function squareToCoords (x , y){
  ctx.fillStyle ='#'+(Math.random()*0xFFFFFF<<0).toString(16); // RANDOM COLORS, YAY!
  ctx.fillRect(x,y, 50, 50);
}

squareToCoords(10,20);
squareToCoords(70,80);
squareToCoords(130,140);
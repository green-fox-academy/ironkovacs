'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.

for(let i:number = 0; i > 0; i++){
  ctx.fillStyle ='#'+(Math.random()*0xFFFFFF<<0).toString(16); // RANDOM COLORS, YAY!
  ctx.fillRect(Math.random());
}

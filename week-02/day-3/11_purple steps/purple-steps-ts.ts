
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/greenfox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]


function squareToCoords(x: number){
  ctx.fillStyle ='purple';
  ctx.fillRect(x,x, 15, 15);
}

for(let i:number = 1; i <= 19; i++){
  squareToCoords(i*15);
}
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/greenfox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]


function squareToCoords(x: number, y: number){
  ctx.fillStyle ='purple';
  ctx.fillRect(x,x, y, y);
}

for(let i:number = 1; i <= 32; i+= i){
  let j: number = i + 0 ;
  squareToCoords(i*+5, i*+5); //pretty code YAY!
}
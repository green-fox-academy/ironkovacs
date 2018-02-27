'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
let lineCount: number = 10;
let base: number = 40;
let h: number = base * (((3) ** (1 / 2) / 2));
let startX: number = canvas.width / 2 - base / 2;
let startY: number = 0;
function triangle(shiftX, shiftY) {
  ctx.beginPath();
  ctx.moveTo(startX + base / 2 + shiftX, startY + shiftY);
  ctx.lineTo(startX + base + shiftX, startY + h + shiftY);
  ctx.lineTo(startX + shiftX, startY + h + shiftY);
  ctx.lineTo(startX + shiftX + base / 2, startY + shiftY);
  ctx.stroke();
}



for (let i: number = 0; i < lineCount; i++) {
  let x = startX;
  let y = startY;
  for (let j: number = 0; j < lineCount; j++) {
    let x = 0;
    let y = 0;
    x = x - base / 2 * i;
    y = h * j;
    triangle(base, x, y);
  }
}
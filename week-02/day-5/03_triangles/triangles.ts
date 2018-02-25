'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
let lineCount: number = 10;
let base: number = 100;
let h: number = base * (((3) ** (1 / 2) / 2));
let startX: number = canvas.width / 2 - base / 2;
let startY: number = 0;
function triangle(a, shiftX, shiftY) {
  ctx.beginPath();
  ctx.moveTo(startX + a + shiftX / 2, startY + shiftY);
  ctx.lineTo(startX + a + shiftX, startY + h + shiftY);
  ctx.lineTo(startX + shiftX, startY + h + shiftY);
  ctx.lineTo(startX + shiftX + a / 2, startY + shiftY);
  ctx.stroke();
}

for (let i: number = 0; i < lineCount; i++) {
  for (let j: number = 0; i < lineCount; j++) {
    let x = base * i;
    let y = h * j;
    triangle(base, x, y);
  }
}
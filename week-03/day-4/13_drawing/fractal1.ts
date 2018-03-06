'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let size: number = canvas.width;


function carpet(x, y, size) {
  if (size > 10) {
    ctx.strokeStyle = 'white';
    ctx.strokeRect(x + size / 3, y + size / 3, size/3, size/3);
  }
  carpet(0, 0, size / 3)

}

carpet(0, 0, size)

ctx.beginPath();
    ctx.moveTo(x + size / 3, 0 + y);
    ctx.lineTo(x + size / 3, size + y);
    ctx.moveTo(x + size - size / 3, 0 + y);
    ctx.lineTo(x + size - size / 3, size + y);
    ctx.moveTo(x + 0, size / 3 + y);
    ctx.lineTo(x + size, size / 3 + y);
    ctx.moveTo(x + 0, size - size / 3 + y);
    ctx.lineTo(x + size, size - size / 3 + y);
    colorStroke();
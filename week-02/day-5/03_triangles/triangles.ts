'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
let base = 100;
let h = base * (((3) ** (1 / 2) / 2));
let startX = canvas.width / 2 - base / 2;
let startY = 0;
function triangle(a) {
  ctx.beginPath();
  ctx.moveTo(startX + a / 2, startY);
  ctx.lineTo(startX + a, startY + h);
  ctx.lineTo(startX, startY + h);
  ctx.lineTo(startX + a / 2, startY);
  ctx.stroke();
}

for (let i = 0, len = iterable.length; i < len; i++) {
  
}  
}
  
}
triangle(base);
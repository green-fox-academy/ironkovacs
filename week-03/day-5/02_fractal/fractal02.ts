'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let size: number = canvas.width / ((Math.random() * 2) + 1)

let middleX: number = canvas.width / 2;
let middleY: number = canvas.height / 2;
let lineWidth: number = 3;


function circle(x: number, y: number, size: number, b: number) {

  if (size >= 3) {

    ctx.lineWidth = b;
    ctx.beginPath();
    ctx.strokeStyle = 'white';
    ctx.arc(x + middleX, y + middleY, size, 0, 360);
    ctx.stroke();
    
    size /= 2;
    circle(x, y-size, size, b)
  }

}

circle(0, 0, size, lineWidth)

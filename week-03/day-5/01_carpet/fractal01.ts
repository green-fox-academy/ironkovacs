'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let size: number = canvas.width / (Math.floor((Math.random() * 2) + 1))

let middleX: number = canvas.width / 2;
let middleY: number = canvas.height / 2;
let lineWidth: number = 10;

let h: number = 0;
let s: number = 0;
let l: number = 50;
function carpet(x: number, y: number, size: number, b: number) {

  if (size >= 3) {

    ctx.lineWidth = b;
    ctx.strokeStyle = 'hsl(' + `${h}` + ', ' + `${s}` + '%, ' + `${l}` + '%)';
    ctx.strokeRect(x + middleX - size / 2, y + middleY - size / 2, size, size);

    b /= 2
    size /= 2;

    h = 90;
    s += 10;
    carpet(x + size, y + size, size, b);
    h = 180;
    s += 10;
    carpet(x + size, y - size, size, b);
    h = 270;
    s += 10;
    carpet(x - size, y + size, size, b);
    h = 0;
    s += 10;
    carpet(x - size, y - size, size, b);
  }



}

carpet(0, 0, size, lineWidth)

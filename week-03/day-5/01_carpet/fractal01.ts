'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let size: number = canvas.width / (Math.floor((Math.random() * 2) + 1))

let shift: number = canvas.width / 2;
let lineWidth: number = 25;

let h: number = 0;
let s: number = 100;
let l: number = 100;
let a: number = 100;
function carpet(x: number, y: number, size: number, b: number) {

  if (size >= 2) {

    ctx.lineWidth = b;
    ctx.strokeStyle = 'hsl(' + `${h}` + ', ' + `${s}` + '%, ' + `${l}` + '%, ' + `${a}` + '%)';
    ctx.strokeRect(x + shift - size / 2, y + shift - size / 2, size, size);

    b /= 2
    size /= 2;
    l = 50;
    setTimeout(function () {
      h = 60;
      s = s * 0.99;
      carpet(x + size, y + size, size, b);
      h = 120;
      s = s * 0.99;
      carpet(x + size, y - size, size, b);
      h = 200;
      s = s * 0.99;
      carpet(x - size, y + size, size, b);
      h = 0;
      s = s * 0.99;
      carpet(x - size, y - size, size, b);
    },
      500);



  }
}
carpet(0, 0, size, lineWidth)

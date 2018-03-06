'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let size: number = (Math.floor((Math.random() * canvas.width/2) + canvas.width/2))

let shift: number = canvas.width / 2;
let lineWidth: number = 10;

let h: number = 0;
let s: number = 100;
let l: number = 100;

function carpet(x: number, y: number, size: number, b: number) {

  if (size >= 4) {

    ctx.lineWidth = b;
    ctx.strokeStyle = 'hsl(' + `${h}` + ', ' + `${s}` + '%, ' + `${l}` + '%)';
    ctx.strokeRect(x + shift - size / 2, y + shift - size / 2, size, size);
    l = 50;
    b -= 3
    size /= 2;

    setTimeout(function () {
      h = 60;
      //s -= 0.5;
      carpet(x + size, y + size, size, b);
      h = 120;
      //s -= 0.5;
      carpet(x + size, y - size, size, b);
      h = 200;
      //s -= 0.5;
      carpet(x - size, y + size, size, b);
      h = 0;
      //s -= 0.5;
      carpet(x - size, y - size, size, b);
    }, 600);



  }
}
carpet(0, 0, size, lineWidth)

'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const size: number = canvas.width;

document.querySelector('.main-canvas').setAttribute('width', `${window.innerWidth}`);
document.querySelector('.main-canvas').setAttribute('height', `${window.innerHeight}`);

let n: number = 15;
function fibo(n: number): number {
  if (n <= 1) {
    return 1;
  } else {
    return fibo(n - 1) + fibo(n - 2);
  };
};

function drawFiboArc(x: number, y: number, color: string): void {
  let radius: number;
  let startAngle: number = 0.5 * Math.PI;
  let endAngle: number = Math.PI;
  let delta: number = 0;

  ctx.beginPath();
  ctx.strokeStyle = `${color}`;
  ctx.moveTo(x, y);

  let quadrant: number = 0;

  for (let i: number = 0; i < n; i++) {
    radius = fibo(i);
    if (i === 1) {
      startAngle = Math.PI;
      endAngle = 0;
    } else if (i > 1) {
      delta = fibo(i - 2);
      switch (quadrant) {
        case 1:
          y += delta;
          startAngle = 1.5 * Math.PI;
          endAngle = 0;
          break;
        case 2:
          x -= delta;
          startAngle = 0;
          endAngle = Math.PI / 2;
          break;
        case 3:
          y -= delta;
          startAngle = Math.PI / 2;
          endAngle = Math.PI;
          break;
        case 4:
          x += delta;
          startAngle = Math.PI;
          endAngle = 1.5 * Math.PI;
          break;
      };
    }

    if (quadrant < 4) {
      quadrant++;
    } else {
      quadrant = 1;
    };

    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.stroke();
  };
}

drawFiboArc(canvas.width / 2, canvas.height / 2, 'tomato');

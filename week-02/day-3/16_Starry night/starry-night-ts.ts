'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

function drawStar(size: number, pos: number[], color: number) {
  ctx.fillStyle = 'RGB(' + `${color}` + ',' + `${color}` + "," + `${color}` + ')';
  ctx.fillRect(pos[0], pos[1], size, size);
}
let amountOfStars: number = 30;

for (let i = 0; i < amountOfStars; i++) {
  //  - The stars should be small squares
  let starSize: number = (Math.random() * 10);
  //  - The stars should have random positions on the canva
  let starPos: number[] = [(Math.random() * canvas.width), (Math.random() * canvas.height / 2)]
  //  - The stars should have random color (some shade of grey)
  let starColor: number = (Math.random() * 255);
  drawStar(starSize, starPos, starColor);
}
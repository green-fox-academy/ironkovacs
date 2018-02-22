'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.ceil(max));
}
function drawStar(size: number, pos: number[], color: number) {
  ctx.fillStyle = 'RGB(' + `${color}` + ',' + `${color}` + ',' + `${color}` + ')';
  ctx.fillRect(pos[0], pos[1], size, size);
}
let amountOfStars: number = 100;

for (let i = 0; i < amountOfStars; i++) {
  let starSize: number = getRandomInt(5) + 1;
  let starPos: number[] = [getRandomInt(canvas.width), getRandomInt(canvas.height*0.75)];
  let starColor: number = getRandomInt(256);

  drawStar(starSize, starPos, starColor);
  console.log('Star#:', i + 1, 'S: ', starSize, 'P: ', starPos, 'c: ', ctx.fillStyle);
}
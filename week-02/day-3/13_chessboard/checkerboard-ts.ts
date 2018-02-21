'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.

function lightTile(x: number, y: number, size: number) {
  ctx.fillStyle = lightTileColor;
  ctx.fillRect(x, y, size, size);
}

function darkTile(x: number, y: number, size: number) {
  ctx.fillStyle = darkTileColor;
  ctx.fillRect(x, y, size, size);
}

let tileSize: number = 25;
let lightTileColor: string = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
let darkTileColor: string = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);

for (let j: number = 0; j < Math.ceil(canvas.height / tileSize); j++) {
  for (let i: number = 0; i < Math.ceil(canvas.width / tileSize); i++) {
    if (j % 2 === 0) {
      if (i % 2 === 0) {
        darkTile(i * tileSize, j * tileSize, tileSize);
      } else {
        lightTile(i * tileSize, j * tileSize, tileSize);
      }
    }
    else {
      if (i % 2 === 0) {
        lightTile(i * tileSize, j * tileSize, tileSize);
      } else {
        darkTile(i * tileSize, j * tileSize, tileSize);
      }
    }
  }
}
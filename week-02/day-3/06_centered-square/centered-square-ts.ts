'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw a green 10x10 square to the center of the canvas.

let middleX = canvas.width/2;
let middleY = canvas.height/2;

let squareSize = 10;

ctx.fillStyle = '#4C3'; //<<--ACE to the base!
ctx.fillRect(middleX-squareSize/2, middleY-squareSize/2, squareSize, squareSize);
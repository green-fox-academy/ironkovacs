'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.
let fromHtmlAmount: number = 0;

function randomRect(fromHtmlAmount){
  fromHtmlAmount = parseInt(prompt('Amount of rectangles'))


  for(let i:number = 0; i < fromHtmlAmount; i++){
    ctx.fillStyle ='#'+(Math.random()*0xFFFFFF<<0).toString(16); // RANDOM COLORS, YAY!
    ctx.fillRect((Math.random() * 601),(Math.random() * 401), (Math.random() * 301), (Math.random() * 301));
  }
}

randomRect(0);

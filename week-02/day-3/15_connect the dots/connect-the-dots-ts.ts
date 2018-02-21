'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

function dotConnect(coords: number[][]) {
  ctx.beginPath();
  for (let i: number = 0; i < coords.length-1; i++) {
    if (i == 0){
      ctx.moveTo(coords[0][0], coords[0][1]);
    }
    ctx.lineTo(coords[i][0], coords[i][1]);
    ctx.strokeStyle = "#4C3";
    ctx.stroke();
  }

}


dotConnect([[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]]);

dotConnect([[10, 10], [290, 10], [290, 290], [10, 290]]);
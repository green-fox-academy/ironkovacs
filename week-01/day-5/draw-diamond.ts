'use strict';

let lineCount: number = 10;

let brush = "*";
let space = " ";
let aend
let bend
//felső fél
for (let a: number = 0; a < lineCount; a++) {
    let draw = '';
    for (let b: number = 1; b < lineCount-a; b++) {
      draw = draw + space;
    }
    for (let c: number = 1; c <= (2*a+1); c++) {
        draw = draw + brush ;
    }

    console.log (draw);
       }
    

// alsó fél
space = " ";
brush = "*";
for (let a: number = lineCount - 1; a > 0; a--) {
    let draw = ' ';
    for (let b: number = lineCount - a; b > 1; b--) {
        draw = space + draw;}
    for (let c: number = (2*a-1); c >= 1; c--) {
        draw = draw + brush;
    }
    console.log (draw);
       }

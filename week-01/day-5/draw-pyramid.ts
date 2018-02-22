'use strict';

let lineCount: number = 10;

let brush = "*";
let space = " ";
for (let i = 0; i < lineCount; i++) {
  let draw = '';
  for (let j = 1; j < lineCount - i; j++) {
    draw = draw + space;
  }
  for (var k = 1; k <= (2 * i + 1); k++) {
    draw = draw + brush;
    console.log(draw);
  }
  console.log(draw);
}

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is
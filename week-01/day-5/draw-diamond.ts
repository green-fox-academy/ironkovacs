'use strict';

export { };

let lineCount: number = 30;
let brush: string = '[ ]';

let lineCountTop: number = Math.ceil(lineCount / 2);
let lineCountBot: number = lineCountTop - 1;
let space: string = ' ';
let draw: string = '';
for (let a: number = 0; a < lineCountTop; a++) {
  draw = '';
  for (let b: number = 1; b < lineCountTop - a; b++) {
    draw = draw + space;
  }
  for (let c: number = 1; c <= (2 * a + 1); c++) {
    draw = draw + brush;
  }
  console.log(draw);
}
if (lineCount % 2 == 0) {
  console.log(draw);
}
space = ' ';
for (let a: number = lineCountBot; a > 0; a--) {
  draw = ' ';
  for (let b: number = lineCountBot - a; b > 0; b--) {
    draw = space + draw;
  }
  for (let c: number = (2 * a - 1); c >= 1; c--) {
    draw = draw + brush;
  }
  console.log(draw);
}
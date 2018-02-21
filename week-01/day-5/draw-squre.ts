let lineCount: number = 6;
let brush: string = 'X';
let space: string = ' ';
let draw: string = '';

for (let a: number = 1; a <= lineCount; a++) {
    draw = '';
    for (let b: number = 1; b <= lineCount; b++) {
      draw = draw + brush;
    }
    console.log (draw);
}
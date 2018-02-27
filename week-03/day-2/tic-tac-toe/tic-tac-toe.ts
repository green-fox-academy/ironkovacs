
// Write a function that takes a filename as string,
// open and read it. The file data represents a tic-tac-toe
// game result. Return 'X'/'O'/'draw' based on which player
// has winning situation.

const fs = require('fs');
let myResult: string = 'win-o.txt';

let c: number[] = [];
fs.readFileSync(myResult, 'utf-8').split('').forEach(e => {
  if (e === 'O') {
    c.push(0);
  } else if (e === 'X') {
    c.push(1)
  } else if (e === ' ') {
    c.push(10);
  }
}
);

function ticTacResult(result) {
  if (c[0] + c[1] + c[2] === 0 || c[3] + c[4] + c[5] === 0 || c[6] + c[7] + c[8] === 0 || c[0] + c[3] + c[6] === 0 || c[1] + c[4] + c[7] === 0 || c[2] + c[5] + c[8] === 0 || c[0] + c[4] + c[8] === 0 || c[2] + c[4] + c[6] === 0) {
    return 'O';
  } else if (c[0] + c[1] + c[2] === 3 || c[3] + c[4] + c[5] === 3 || c[6] + c[7] + c[8] === 3 || c[0] + c[3] + c[6] === 3 || c[1] + c[4] + c[7] === 3 || c[2] + c[5] + c[8] === 3 || c[0] + c[4] + c[8] === 3 || c[2] + c[4] + c[6] === 3) {
    return 'X';
  } else {
    return 'Draw'
  }
}
console.log(ticTacResult(myResult));


// console.log(ticTacResult('win-o.txt'))
// // should print O
// console.log(ticTacResult('win-x.txt'))
// // should print X
// console.log(ticTacResult('draw.txt'))
// // should print draw
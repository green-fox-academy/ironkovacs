
// Write a function that takes a filename as string,
// open and read it. The file data represents a tic-tac-toe
// game result. Return 'X'/'O'/'draw' based on which player
// has winning situation.

const fs = require('fs');
let myResult: string = 'win-o.txt';
let c: number[] = [];
function ticTacResult(result) {

  fs.readFileSync(result, 'utf-8').split('').forEach(e => {
    if (e === 'O') {
      c.push(0);
    } else if (e === 'X') {
      c.push(1)
    } else if (e === ' ') {
      c.push(10);
    }
  });
  function won(num) {
    return (
      c[0] + c[1] + c[2] === num ||
      c[3] + c[4] + c[5] === num ||
      c[6] + c[7] + c[8] === num ||
      c[0] + c[3] + c[6] === num ||
      c[1] + c[4] + c[7] === num ||
      c[2] + c[5] + c[8] === num ||
      c[0] + c[4] + c[8] === num ||
      c[2] + c[4] + c[6] === num)
  }
  if (won(0)) {
    return 'O';
  } else if (won(3)) {
    return 'X';
  } else {
    return 'Draw'
  }
}
console.log(ticTacResult(myResult));
'use strict'
export {};

declare function require(path: string ):any;
const fs = require('fs');
let myResult: string = 'win-o.txt';
let check: number[] = [];
function ticTacResult(result) {

  fs.readFileSync(result, 'utf-8').split('').forEach(e => {
    if (e === 'O') {
      check.push(0);
    } else if (e === 'X') {
      check.push(1)
    } else if (e === ' ') {
      check.push(10);
    }
  });
  function won(num) {
    return (
      check[0] + check[1] + check[2] === num ||
      check[3] + check[4] + check[5] === num ||
      check[6] + check[7] + check[8] === num ||
      check[0] + check[3] + check[6] === num ||
      check[1] + check[4] + check[7] === num ||
      check[2] + check[5] + check[8] === num ||
      check[0] + check[4] + check[8] === num ||
      check[2] + check[4] + check[6] === num)
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

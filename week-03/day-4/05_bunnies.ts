'use strict';

// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

function bunny(n) {
  let ears: number = 2;
  if (n < 1) {
    return 0;
  } else {
    n -= 1;
    ears += bunny(n);
  }
  return ears;
}

console.log(bunny(32))
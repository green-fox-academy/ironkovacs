'use strict';
// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies
// (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say
// have 3 ears, because they each have a raised foot. Recursively return the
// number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).
function bunny(n) {
  let ears: number = 2;
  if (n < 1) {
    return 0;
  } else if (n % 2 != 0) {
    n -= 1;
    ears += bunny(n);
  } else {
    n -= 1;
    ears += bunny(n) + 1;
  }
  return ears;

}

console.log(bunny(5))
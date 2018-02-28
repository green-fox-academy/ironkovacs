'use strict';

function fact(n) {
  if (n <= 0) {
    return 1;
  } else {
    return (n * fact(n - 1));
  }
}

let factorial = fact(10);

console.log(factorial);
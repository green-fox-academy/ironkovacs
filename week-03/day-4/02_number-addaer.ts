'use strict';
// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.


function add(n) {
  if (n <= 0) {
    return 0;
  } else {
    return (n + add(n - 1));
  }
}

console.log(add(100));
'use strict';

// Write a recursive function that takes one parameter: n and counts down from n.

function count(n: number) {
  if (n <= 1) {
    console.log(1);
  } else {
    
    console.log(n);
    (count(n - 1));

  }
}

count(20);
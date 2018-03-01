'use strict';
// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

let n = 213412312412;

function sumDigits(number) {
  let left = number % 10;
  let sum = left;
  if (number >= 10) {
    let rest = Math.floor(number / 10);
    sum += sumDigits(rest);
  }
  return sum;
}
console.log(sumDigits(n))
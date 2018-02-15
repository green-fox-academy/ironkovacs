'use strict';

// Swap the values of these variables
let a: number = 123;
let b: number = 526;
let c: number = 0;

console.log("az a változónk jelenleg: " + `${a}`);
console.log("a b változónk jelenleg: " + `${b}`);
console.log ("Magic swap happening here");

c = b;
b = a;
a = c;

console.log("az a változónk jelenleg: " + `${a}`);
console.log("a b változónk jelenleg: " +`${b}`);
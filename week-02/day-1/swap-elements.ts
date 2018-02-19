'use strict';
// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc: string[] = ["Arthur", "Boe", "Chloe"];

let a = abc[0];
let b = abc[1];
let c = abc[2];

let abc1 = [c, b, a];
console.log(abc1);

let x = abc[2];
let abc2: string [] = [x, abc[1], abc[0]];
console.log(abc2);




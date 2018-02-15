'use strict';

let a: number = 3;
// make it bigger by 10
a = a + 10;
console.log(a);

let b: number = 100;
// make it smaller by 7
b = b - 7;
console.log(b);

let c: number = 44;
// double c's value
c = c + c; 
console.log(c);

let d: number = 125;
// divide d's value by 5
d = d / 5;
console.log(d);

let e: number = 8;
// what's the cube of e's value?
e = e ** 2;
console.log(e);

let f1: number = 123;
let f2: number = 345;
// tell if f1 is bigger than f2 (as a boolean)
let f: boolean = f1 > f2;
console.log (f);

let g1: number = 350;
let g2: number = 200;
// tell if the double of g2 is bigger than g1 (pras a boolean)
let g: boolean = (g2*2) > g1;
console.log (g);

let h: number = 1357988018575474;
// tell if h has 11 as a divisor (as a boolean)
let hDiv: boolean = !(h % 11);
console.log ("h: " + `${hDiv}`);

let i1: number = 10;
let i2: number = 3;
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
let i: boolean = i1 > i2**2 && i2**3 > i1 ;
console.log ("i: " + `${i}`);

let j: number = 1521;
// tell if j is dividable by 3 or 5 (as a boolean)
let jDiv: boolean = !(j % 3) || !(j % 5) ;
console.log ("j: " + `${jDiv}`);

let k: string = 'Apple';
// fill the k variable with its content 4 times
k = k + k + k + k ;
console.log(k);
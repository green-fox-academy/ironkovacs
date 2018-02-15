'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
let a: number = 1.0;
let b: number = 2.0;
let c: number = 3.0; 
// The program should write the surface area and volume of the cuboid like:

// Surface Area:
let area: number = (2*(a * b + b * c + c * a));
// Volume: 1000
let volume: number = (a * b * c);
console.log ("The surface area of the cuboid is: " + `${area}`);
console.log ("The volume of the cuboid is: " + `${volume}`);
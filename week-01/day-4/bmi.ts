'use strict';

let massInKg: number = 81.2;
let heightInM: number = 1.78;

// Print the Body mass index (BMI) based on these values

//BMI = ((bodymass[kg])/(height[m]^2))

let bMi = (( massInKg) / (heightInM ** 2));

console.log ("Your BMI (body mass index) based on the input values is " + `${bMi}`);

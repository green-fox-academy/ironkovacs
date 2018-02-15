'use strict';

let currentHours: number = 23;
let currentMinutes: number = 59;
let currentSeconds: number = 59;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables
let remainingSecounds: number = (24*60*60)-((currentHours * 60 + currentMinutes) * 60 + currentSeconds);
console.log ("Remaining secound of the day is: " + `${remainingSecounds}`);
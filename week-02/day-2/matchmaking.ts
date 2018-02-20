'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]
let girls: string[] = ['Eve', 'Ashley', 'Bözsi', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Béla', 'Todd', 'Neef', 'Jeff'];

function makingMatches(g: string[], b: string[]){
  let promList: string[] = [];
  let listLenght = Math.min(g.length, b.length);
  for (let i: number =  0; i < listLenght; i++){
    promList.splice( i*2, 0, g[i]);
    promList.splice( (i*2) + 1, 0, b[i]);
  }
  
  return promList;
}


console.log(makingMatches(girls, boys));

export = makingMatches;
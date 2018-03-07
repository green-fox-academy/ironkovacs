'use strict';


import { Domino } from "./domino";

function initializeDominoes(): Domino[] {
  let dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}


function print(dominoes: Domino[]) {

  dominoes.forEach(function (value) {

    console.log(value);
  });
}

let dominoes = initializeDominoes();

let dominoNumber0: number[] = [];
for (let i: number = 0; i < dominoes.length; i++) {
  dominoNumber0.push(dominoes[i].values[0])
}
let arrange: any[] = [];
function reArrange(varInFunction) {
  arrange.push(varInFunction[0]);
  for (let i: number = 0; i < varInFunction.length - 1; i++) {
    arrange.push(varInFunction[dominoNumber0.indexOf(arrange[i].values[1])])
  }
  return arrange;
}

print(reArrange(dominoes));
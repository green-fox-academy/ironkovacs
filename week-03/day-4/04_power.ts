'use strict';
export { }
// Given base and n that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

let base = 3
let n: number = 4;

function power(){
  if (n <= 1){
    return base;
  }else {
    n--;
    return base * power();
  }
}

console.log(power());
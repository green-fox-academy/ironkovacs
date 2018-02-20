'use strict';

let num: number[] = [ 1, 2, 3, 4, 5, 6]

num.map(function (value: number , index: number){
  num[index] *= 2 ;
  })
console.log(num)
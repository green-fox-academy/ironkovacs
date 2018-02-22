'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

function containsSeven(isNumber: number[]) {
  if (isNumber.indexOf(7) != -1) {
    return 'Hoooray';
  } else {
    return 'Nooooo';
  }
}


let numbers: number[] = [1, 2, 3, 4, 5, 6, 8];
console.log(numbers, 'Contains 7? ' , containsSeven(numbers));

numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers, 'Contains 7? ' , containsSeven(numbers));

numbers = [7, 7, 7];
console.log(numbers, 'Contains 7? ' , containsSeven(numbers));



// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!
export = containsSeven;
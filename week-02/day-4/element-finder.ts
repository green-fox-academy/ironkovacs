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

// ver1.2
let numbers: number[] = [1, 2, 3, 4, 5, 6, 8];
console.log(numbers, 'Contains 7? ', containsSeven(numbers));
numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers, 'Contains 7? ', containsSeven(numbers));
numbers = [7, 7, 7];
console.log(numbers, 'Contains 7? ', containsSeven(numbers));

//ver 2.0
function includesSeven(isNumber) {
  if (isNumber.includes(7) == true) {
    return 'Hoooray';
  } else {
    return 'Nooooo';
  }
}
numbers = [1, 2, 3, 4, 5, 6, 8];
console.log(numbers, 'Contains 7? ', includesSeven(numbers));
numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers, 'Contains 7? ', includesSeven(numbers));
numbers = [7, 7, 7];
console.log(numbers, 'Contains 7? ', includesSeven(numbers));


// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!
export = containsSeven;
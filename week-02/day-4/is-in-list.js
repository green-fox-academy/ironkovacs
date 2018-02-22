'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input //two list to compare it always nicer
// it should return "true" if it contains all, otherwise "false"
let listOfNumbers = [2, 4, 6, 8, 10, 12, 14, 16]; //.TSError: ⨯ Unable to compile TypeScript is-in-list.ts (11,15): Property 'includes' does not exist on type 'any[]'. (2339),
let isOnList = [4, 8, 12, 16]

function checkNums(list1, list2) {
  let checkList = [];
  for (let i = 0; i < list1.length; i++) {
    if (list1.includes(list2[i]) == true) {
      checkList.push(1);
    } else {
      checkList.push(0);
    }
  }
  if (checkList.includes(0)) {
    return false;
  } else {
    return true;
  }
}
console.log(checkNums(listOfNumbers, isOnList));

//export = checkNums;
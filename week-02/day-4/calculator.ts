'use strict';
// Create a simple calculator application which does read the parameters from the standard input
// and prints the result to the console.
// It should support the following operations, create function called "calculate()" :
// +, -, *, /, % and it should support two operands:
// The format of the expressions must be: {operation} {operand} {operand}.
// Examples: "+ 3 3" (the result will be 6) or "* 4 4" (the result will be 16)
// You should use the command line arguments to accept user input
// It should work like this:
// Start the program with "node calculator.js + 5 6"
// If number of arguments are not correct, print some nice errors
// Else print the result
// Say goodbye
const args = process.argv.splice(2); // Just a helper for you to get started
console.log('Input params are', args);

function calculator(input) {
  let result: any;
  let op = input[0];
  let o1: number = parseInt(input[1]);
  let o2: number = parseInt(input[2]);
  console.log(`${op}`, typeof op, `${o1}`, typeof o1,`${o2}`, typeof o2)

  if (typeof op !== 'string' || typeof o1 !== 'number' || typeof o2 !== 'number') {
    result = 'Input incorrect, please check your input form!'
  } else {
    switch (op) {
      case '+': {
        result = o1 + o2;
        break;
      }
      case '-': {
        result = o1 - o2
        break;
      }
      case '*': {
        result = o1 * o2
        break;
      }
      case '/': {
        result = o1 / o2
        break;
      }
      case '%': {
        result = o1 % o2
        break;
      }
      default: {
        result = 'Unknown operator, please check your input form!'
      }
    }
  }
  return result;
}

console.log('Your result is: ', calculator(args));
  export = calculator;
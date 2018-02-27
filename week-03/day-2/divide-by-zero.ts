'use-strict';

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function devided(n1: number) {
  if (n1 !== 0) {
    return  10/ n1;
  } else {
    throw "Parameter is not a number!";
  }

}

(devided(0));
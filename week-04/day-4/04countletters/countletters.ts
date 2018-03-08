'use strict';

function countLetters(text: string): string[] {
  let obj: any = {};
  let list: string[] = [];
  text.split('').forEach(e => {
    if (e !== ' ' && e !== ',' && e !== '.' && e !== '!' && e !== '?' && e !== ';') {
      list.push(e)
    }
  });
  list.forEach(e => {
    if (obj[e] == undefined) {
      obj[e] = 1;
    } else {
      obj[e] += 1;
    }
  });
  return [obj];
}
let loremIpsum: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'

// Count Letters

//     Write a function, that takes a string as an argument and returns a dictionary with all letters in the string as keys, and numbers as values that shows how many occurrences there are.
//     Create a test for that.

console.log(countLetters(loremIpsum));
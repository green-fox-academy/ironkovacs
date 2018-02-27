'use-strict';
// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');
let myFileName: string = 'my-file.txt'

function lineCount(filename) {
  let text: string = fs.readFileSync(filename, 'utf-8');
  let textA: string[] = text.split('\r\n');
  return console.log(textA.length, textA);
}
try {
  lineCount(myFileName);
}
catch (err) {
  console.log(0)
}
'use strict';
// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

let myString: string = 'sadfyxc, őpoiqweréálkyxcv asd, xxsaiejnv';

function string1(string) {
  if (string.indexOf('x') === -1) {
    return string;
  } else {
    string = string.replace('x', 'y');
    return string1(string);
  }
}
console.log(string1(myString));
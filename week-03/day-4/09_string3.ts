'use strict';
// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.
export {}
let myString: string = 'sadfyxc, őpoiqweréálkyxcv asd, xxsaiejnv';

function string3(string) {
  if () {
    return string;
  } else {
    string = string.replace('x', '');
    return string3(string);
  }
}
console.log(string3(myString));

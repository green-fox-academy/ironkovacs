'use strict';
// // Given a string, compute recursively a new string where all the 'x' chars have been removed.
export { };
let myString: string = 'sadfyxc, őpoiqweréálkyxcv asd, xxsaiejnv';

function string2(string) {
  if (string.indexOf('x') === -1) {
    return string;
  } else {
    string = string.replace('x', '');
    return string2(string);
  }
}
console.log(string2(myString));


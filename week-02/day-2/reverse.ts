
'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!
let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';
let reversedStr: string = "";
function reverse(str: string){ 
  return str.split('').reverse().join('');
}

console.log('Result with split + reverse + join:' , reverse(reversed));

function reverseWithForInc(str: string) {
  let str2: string = '';
  for (let i: number = 0; i < str.length; i++){
        str2 = str2.concat(str[str.length - (i + 1)]);        
  }
  return str2;
}
console.log('Result with for, inc. :', reverseWithForInc(reversed));

function reverseWithForDec(str: string) {
  let str2: string = '';
  for (let i: number = str.length; 0 < i; i--){
        str2 = str2.concat(str[i-1]);        
  }
  return str2;
}
console.log('Result with for, dec.:', reverseWithForDec(reversed));
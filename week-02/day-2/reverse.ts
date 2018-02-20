
'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!
let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';
let reversedStr: string = "";
function reverse(str: string){ 
  return str.split('').reverse().join('');
}

console.log(reverse(reversed));

function reverseWithFor(str: string) {
  
  for (let i: number = 0; i <= str.length; i++)
    str[i] = str[str.length - i];
  return str;
}
console.log(reverseWithFor(reversed));

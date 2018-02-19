// -  Create a string variable named `typo` and assign the value `kuty` to it
// -  Write a function called `appendA` that gets a string as an input,
//    appends an 'a' character to its end and returns with a string
// -  Print the result of `appendAFunc(typo)`

let typo: string = 'mérési hib';
let cica: string = 'cic';
let kutya: string = 'kuty';

function kiegszetitAval (szoveg:string){ 
    szoveg += 'a'; 
    return szoveg;
}
console.log (kiegszetitAval(typo));
console.log (kiegszetitAval('lkasdlkjhads_'));
console.log (kiegszetitAval(kutya));
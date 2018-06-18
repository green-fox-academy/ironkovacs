// Create a function that takes a string and splits it to a list of two character strings like: "abcdef" becomes ["ab", "cd", "ef"]
'use strict'

export { };

const testString: string = 'abcdefghijklmnopqrstuvwxyz'

const stringSplitter = (string: string): string[] => {
  let listOfTwo: string[] = []
  for (let i: number = 0; i < string.length / 2; i++) {
    let j: number = Math.floor(i * 2);
    listOfTwo[i] = string[j] + string[j + 1]
  }
  return listOfTwo
}

console.log(`Solution : [${stringSplitter(testString)}]`);

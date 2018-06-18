// Create a function that takes a string and splits it to a list of two character strings like: "abcdef" becomes ["ab", "cd", "ef"]
'use strict'

export { };

const testString: string = 'abcdefghijklmnopqrstuvwxyz'

//solution 1 ( I guess .push() a built in )

const stringSplitter1 = (string: string): string[] => {
  let listOfTwo: string[] = []
  for (let i: number = 0; i < string.length; i++) {
    listOfTwo.push(string[i] + string[i + 1])
    i++
  }
  return listOfTwo
}

(stringSplitter1(testString))


//solution 2 

const stringSplitter2 = (string: string): string[] => {
  let listOfTwo: string[] = []
  for (let i: number = 0; i < string.length / 2; i++) {
    let j: number = Math.floor(i * 2);
    listOfTwo[i] = string[j] + string[j + 1]
  }
  return listOfTwo
}
(stringSplitter2(testString))

// solution 3 




//results

console.log(`Solution 1 \n)

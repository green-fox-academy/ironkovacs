let matrix: number[][] = [];
let matSize: number = 4; //the actual size is the given + 1
for (let i = 0; i <= matSize; i++) {
  matrix[i] = [];
  for (let j = 0; j <= matSize; j++) {
    if (i + j === matSize) {
      matrix[i][j] = 1;
    } else {
      matrix[i][j] = 0;
    }
  }
}
console.log(matrix);
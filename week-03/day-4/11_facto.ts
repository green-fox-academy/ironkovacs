'use strict';

function refactorio(n) {
  if (n <= 0) {
    return 1;
  } else {
    return (n * refactorio(n - 1));
  }
}
function listFacto(n) {
  console.log(`The lits of factorials until ${n}! is:`)
  for (let i: number = 0; i < n; i += 1) {
    console.log(refactorio(i));
  }
}
listFacto(10)

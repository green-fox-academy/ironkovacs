'use strict';

function refactorio(n) {
  if (n <= 0) {
    return 1;
  } else {
    return (n * refactorio(n - 1));
  }
}

 refactorio(10);

console.log(refactorio(10));
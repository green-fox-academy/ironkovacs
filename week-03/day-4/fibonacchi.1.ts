'use strict';
// The fibonacci sequence is a famous bit of mathematics, and it happens to
// have a recursive definition. The first two values in the sequence are
// 0 and 1 (essentially 2 base cases). Each subsequent value is the sum of the
// previous two values, so the whole sequence is: 0, 1, 1, 2, 3, 5, 8, 13, 21
// and so on. Define a recursive fibonacci(n) method that returns the nth
// fibonacci number, with n=0 representing the start of the sequence.
export { }

let n: number = 10

function fibo(n: number): number {
  if (n <= 1) {
    return 1;
  } else {
    return fibo(n - 1) + fibo(n - 2);
  }
}

class ArcValues {
  x: number;
  y: number;
  radius: number;
  startAngle: number;
  endAngle: number;
  quadrant: number;
  deltaX: number;
  deltaY: number;

  constructor(x, y, radius, startAngle, endAngle) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
  }
};

let x: number = 0;
let y: number = 0;
let radius: number
let startAngle: number = 0;
let endAngle: number = Math.PI / 2;
let quadrant: number = 0;
let delta: number = 0
let j: number

for (let i: number = 0; i < n; i++) {
  radius = fibo(i);
  if (i === 0) {
    quadrant++;
  } else if (i === 1) {
    startAngle = Math.PI / 2;
    endAngle = Math.PI;
    quadrant++;
  } else {
    delta = fibo(i - 2)
    switch (quadrant) {
      case 1:
        y += delta;
        startAngle = 0;
        endAngle = Math.PI / 2;
        break;
      case 2:
        x -= delta;
        startAngle = 0.5 * Math.PI;
        endAngle = Math.PI;
        break;
      case 3:
        y -= delta;
        startAngle = Math.PI;
        endAngle = 1.5 * Math.PI;
        break;
      case 4:
        x += delta;
        startAngle = 1.5 * Math.PI;
        endAngle = 0;
        break;
    }
  }

  if (quadrant < 4) {
    quadrant++;
  } else {
    quadrant = 1;
  }
  let arc = new ArcValues(x, y, radius, startAngle, endAngle)
  console.log(arc, quadrant)
}

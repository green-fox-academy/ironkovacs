'use strict';

interface Comparable {
  compareTo(other: Comparable): number;
  /*
  * returns negative number if this is smaller than other
  * returns 0 if they are the same
  * returns positive number if this is greater than other
  */
}

class Domino implements Comparable {
    values: number[];
    constructor(valueA: number, valueB: number) {
        this.values = [valueA, valueB];
    }
    compareTo(other):number{
      return this.values[0] - other;
    }
}

export {Domino};
'use strict';

export class Sum {
  sum(list: any[]): number {
    let sumZero: number = 0;
    let isInvalid: boolean = false;
    list.forEach(e => {
      if (!Number.isInteger(e)) {
        isInvalid = true;
      } else {
        sumZero += e;
      }
    });

    return isInvalid ? 0 : sumZero;
  }
}

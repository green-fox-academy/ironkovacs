'use strict';

import { test } from 'tape';
import { Sum } from './sum';


test('test sum(list) for numbers', t => {
  t.equal(new Sum().sum([1,2,3,4]), 10);
  t.equal(new Sum().sum(['1','2','3','4']), 10);
  t.equal(new Sum().sum([]), 0);
  t.equal(new Sum().sum(['one',2,3,4]), 0);
  t.equal(new Sum().sum([null]), 0);

  t.end();
});


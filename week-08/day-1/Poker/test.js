const test = require('tape');
const pokerCalculator = require('./calculator');

test('High card: Ace', (t) => {
  const expectedResult = "White wins! - (High card: Ace)";
  const blackHand = ['2H', '3D', '5S', '9C', 'KD'];
  const whiteHand = ['2C', '3H', '4S', '8C', 'AH'];
  t.equal(pokerCalculator(blackHand, whiteHand), expectedResult);
  t.end();
});


test('High card: Ace', (t) => {
  const expectedResult = 'Black wins! - (High card: Ace)';
  const blackHand = ['2H', '3D', '5S', '9C', 'AD'];
  const whiteHand = ['2C', '3H', '4S', '8C', 'KD'];
  t.equal(pokerCalculator(blackHand, whiteHand), expectedResult);
  t.end();
});

test('High card: T', (t) => {
  const expectedResult = 'Black wins! - (High card: T)';
  const blackHand = ['2H', '3D', '5S', '6C', 'TH'];
  const whiteHand = ['2C', '3H', '4S', '8C', '9D'];
  t.equal(pokerCalculator(blackHand, whiteHand), expectedResult);
  t.end();
});

test('Pair (8)', (t) => {
  const expectedResult = 'White wins! - (Pair: 8)';
  const blackHand = ['2H', '3D', '5S', '9C', 'KD'];
  const whiteHand = ['2C', '3H', '4S', '8C', '8S'];
  t.equal(pokerCalculator(blackHand, whiteHand), expectedResult);
  t.end();
});

test('Pair (5)', (t) => {
  const expectedResult = 'Black wins! - (Pair: 5)';
  const blackHand = ['2H', '5D', '5S', 'KC', 'AH'];
  const whiteHand = ['2C', '3H', '4S', '8C', 'KD'];
  t.equal(pokerCalculator(blackHand, whiteHand), expectedResult);
  t.end();
});

test('Drill (K)', (t) => {
  const expectedResult = 'Black wins! - (Drill: K)';
  const blackHand = ['2H', '2D', '2S', 'TC', 'KD'];
  const whiteHand = ['2C', '3H', '4S', '8C', '8S'];
  t.equal(pokerCalculator(blackHand, whiteHand), expectedResult);
  t.end();
});

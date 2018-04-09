module.exports = (blackHand, whiteHand) => {
  let winner = '';
  let winnerCard;
  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'T', 'J', 'Q', 'K', 'A'];

  if (values.indexOf(blackHand[4][0]) > values.indexOf(whiteHand[4][0])) {
    winner = 'Black';
    winnerCard = blackHand[4][0];
  } else {
    winner = 'White';
    winnerCard = whiteHand[4][0];
  }
  if (winnerCard === 'A'){
    winnerCard = 'Ace';
  }  
  console.log(`${winner} Wins! - (High card: ${winnerCard})`)
  return `${winner} wins! - (High card: ${winnerCard})`;
}
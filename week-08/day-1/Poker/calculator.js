module.exports = (blackHand, whiteHand) => {
  let winner = '';
  let winnerCard;
  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'T', 'J', 'Q', 'K', 'A'];

  let blackPair = false;
  let whitePair = false;

  let blackDrill = false;
  let whiteDrill = false;

  blackHand.forEach((e, i) => {
    if (blackHand[i + 1] !== undefined) {
      if (blackHand[i][0] === blackHand[i + 1][0] === blackHand[i + 1][0]) {
        blackdrill = true;
        winnerCard = blackHand[i][0];
      }
    }
  });

  blackHand.forEach((e, i) => {
    if (blackHand[i + 1] !== undefined) {
      if (blackHand[i][0] === blackHand[i + 1][0] === blackHand[i + 1][0]) {
        blackdrill = true;
        winnerCard = blackHand[i][0];
      }
    }
  });

  blackHand.forEach((e, i) => {
    if (blackHand[i + 1] === undefined) {
    } else if (blackHand[i][0] === blackHand[i + 1][0]) {
      blackPair = true;
      winnerCard = blackHand[i][0];
    }
  });

  whiteHand.forEach((e, i) => {
    if (whiteHand[i + 1] === undefined) {
    } else if (whiteHand[i][0] === whiteHand[i + 1][0]) {
      whitePair = true;
      winnerCard = whiteHand[i][0];
    }
  });

  if (blackDrill === true || whiteDrill === true){
    if (blackDrill === true){
      return winner = 'Black';
    }else { 
      return winner = 'White';
    }
  }
  if (whitePair === true || blackPair === true) {
    if (whitePair) {
      return `White wins! - (Pair: ${winnerCard})`;
    } else {
      return `Black wins! - (Pair: ${winnerCard})`;
    }
  } else {
    if (values.indexOf(blackHand[4][0]) > values.indexOf(whiteHand[4][0])) {
      winner = 'Black';
      winnerCard = blackHand[4][0];
    } else {
      winner = 'White';
      winnerCard = whiteHand[4][0];
    }
    if (winnerCard === 'A') {
      winnerCard = 'Ace';
    }
    return `${winner} wins! - (High card: ${winnerCard})`;
  }
}
